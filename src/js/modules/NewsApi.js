export class NewsApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getNews (keyWord,key,sevenDaysAgo,currentDate) {
    return fetch(`${this.baseUrl}?q=${keyWord}&from=${sevenDaysAgo}&to=${currentDate}&sortBy=popularity&pageSize=100&apiKey=${key}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Error: ${res.status}`);
      })
  }
}