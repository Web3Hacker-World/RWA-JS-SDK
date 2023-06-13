type BaseStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

export const noopStorage: BaseStorage = {
  getItem: _key => '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setItem: (_key, _value) => null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: _key => null,
}
