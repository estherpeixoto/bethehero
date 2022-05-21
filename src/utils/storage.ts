const setStorage = (key: string, value: string) => {
  return localStorage.setItem(key, value)
}

const getStorage = (key: string) => {
  return localStorage.getItem(key)
}

export { setStorage, getStorage }
