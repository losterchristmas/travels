let defaultCtiy = '北京'
try {
  if(localStorage.city)
  defaultCtiy = localStorage.city
} catch (error) {
  alert(error)
}
export default{
  city :defaultCtiy
}