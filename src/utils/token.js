export const setToken = (token) => {
  localStorage.setItem('TOKEN', token)
}
export const getToken = () => {
  return localStorage.getItem('Token')
}
export const removeToken = () => {
  localStorage.removeItem('TOKEN')
}