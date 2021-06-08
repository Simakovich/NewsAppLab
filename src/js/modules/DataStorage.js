export class DataStorage{

  setItems(item,data) {
    localStorage.setItem(item,JSON.stringify(data))
  }
  getItems(item) {
    return JSON.parse(localStorage.getItem(item))
  }

  clear() {
    localStorage.clear()
  }
}