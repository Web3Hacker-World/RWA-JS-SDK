import { useNFTStorage } from '@rwa/web3-storage'

export async function createRwaOtp(params) {
  console.log('====> params :', params)
}

const noopFunc = () => {
  return null
}

export async function createRwaNft(params, opts) {
  const {
    image,
    name,
    description,
    category,
    tags,
    tokenType,
    distributor,
    basicPrice,
    maxSupply,
    inviteCommission,
  } = params
  const { nftStorageToken, addLoading = noopFunc, addSuccess = noopFunc } = opts

  const parseTags = tags => tags.replace('，', ',').split(',')

  const properties = {
    category,
    tags: parseTags(tags),
    tokenType,
    distributor,
    basicPrice,
    maxSupply,
    inviteCommission,
  }
  const external_url = '' // This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site.
  const metadata = {
    name,
    description,
    image,
    properties,
    external_url,
  }
  const { storeJson } = useNFTStorage({
    token: nftStorageToken,
  })
  const loadingItem1 = addLoading('Start packing metadata on to IPFS')
  const cid = await storeJson(metadata)
  addSuccess('Pack metadata on to IPFS successed!', loadingItem1)

  try {
    const loadingItem2 = addLoading('Start submitting to the blockchain')
    const contractWriterBP = await initContract('BuidlerProtocol', true)
    const tx = await contractWriterBP.addToken(
      tokenType,
      parseEther(basicPrice),
      inviteCommission * 100,
      maxSupply,
      cid,
      payTokenAddress
    )
    addSuccess('Submit to the blockchain successed!', loadingItem2)
    const loadingItem3 = addLoading(
      'Waiting for the blockchain to excute the action'
    )
    const rc = await tx.wait()
    const event = rc.events.find(event => event.event === 'AddToken')
    const tokenid = event.args.tokenId.toString()
    addSuccess('Excute the action on blockchain successed!', loadingItem3)
    const loadingItem4 = addLoading(
      'Start storing data into database for cache'
    )
    const { error: dbError } = await supabase.from('token').insert({
      metadata,
      chain,
      address,
      tokenid,
      tokentype: tokenType,
      appaddress,
    })
    if (dbError) throw dbError
    addSuccess('Store data into database successed!', loadingItem4)
    navigateTo(`/${chain}/${tokenid}`)
    description = ''
  } catch (err) {
    error = err
  }
  isLoading = false
}
