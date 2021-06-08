export class Data {

  convertDate(date) {
    const regExp = /\d{4}-\d{2}-\d{2}/
    return date.match(regExp)[0]
  }

  convertDateToCard(date) {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = new Date(date)
    return `${data.getDate()} ${month[data.getMonth()]},${data.getFullYear()}`
  }

}