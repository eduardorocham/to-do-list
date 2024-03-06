export const getCurrentDate = () => {
  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const dayString = day <= 9 ? `0${day}` : day
  const monthString = month <= 9 ? `0${month}` : month

  return `${dayString}/${monthString}/${year}`
}
