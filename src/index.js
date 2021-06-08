import './style.css';
import {addCopyrightText} from "./js/utils/copyright";
import {sevenDaysAgo} from "./js/utils/sevenDaysAgo";
import {clearSection} from "./js/utils/clearSection";
import {checkImgUrl} from "./js/utils/checkImgUrl";
import {checkShowMoreBtn} from "./js/utils/checkShowMoreBtn";
import {NewsApi} from "./js/modules/NewsApi";
import {FormValidator} from "./js/components/FormValidator";
import {NewsCardList} from "./js/components/NewsCardList";
import {NewsCard} from "./js/components/NewsCard";
import {SetFormButtonState} from "./js/components/SetFormButtonState";
import {DataStorage} from "./js/modules/DataStorage";
import {Data} from "./js/components/Data";
import {form} from "./js/constants/constants";
import {NEWS_API_KEY} from "./js/constants/constants";
import {NEWS_API_URL} from "./js/constants/constants";
import {newsCardContainer} from "./js/constants/constants";
import {ERROR} from "./js/constants/constants";
import {template} from "./js/constants/constants";
import {news} from "./js/constants/constants";
import {formButton} from "./js/constants/constants";
import {ERROR_REQUEST_TEXT,ERROR_REQUEST_TITLE,ERROR_SEARCH_TEXT,ERROR_SEARCH_TITLE} from "./js/constants/constants";
import {preloader,notFoundSection} from "./js/constants/constants";
import {searchTitle,searchDescription} from "./js/constants/constants";

const formInput = form.querySelector('.form__input')
const mainSection = document.querySelector('#cards')

const data = new Data()
const currentDate = new Date().toISOString()
const storage = new DataStorage()
const newsApi = new NewsApi(NEWS_API_URL);
const setFormButtonState = new SetFormButtonState(formButton)
const newsCardList = new NewsCardList({
  container: newsCardContainer,
  createCard: createNewsCard
})

const formValidator = () => new FormValidator({
  error: ERROR,
  form: form,
  setFormButtonState: setFormButtonState
}).formValidity()


function createNewsCard(...args) {
  return new NewsCard(...args,data.convertDateToCard,checkImgUrl).create()
}

export function showMoreNews() {
  newsCardList.render(news.firstCard,news.lastCard,storage.getItems('news'))
  news.firstCard += 5;
  news.lastCard += 5

  checkShowMoreBtn()
}

function loadPage() {
  if (storage.getItems('news') != null && storage.getItems('news').length) {
    clearSection(newsCardContainer,template)
    newsCardList.render(0,5,storage.getItems('news'))
    mainSection.style.display = 'flex'
  }
}

form.addEventListener('submit',(evt) => {
  evt.preventDefault()

  notFoundSection.style.display = 'none'
  mainSection.style.display = 'none'
  preloader.style.display = 'flex'
  setFormButtonState.addClass()
  storage.clear()

  newsApi.getNews(formInput.value,NEWS_API_KEY,data.convertDate(sevenDaysAgo(currentDate)),data.convertDate(currentDate))
    .then((res) => {
      clearSection(newsCardContainer,template)
      storage.setItems('keyWord',formInput.value)
      storage.setItems('news',res.articles)
      storage.setItems('totalNews',res.totalResults)
      const news = storage.getItems('news')
      checkShowMoreBtn()
      if (!news.length) {
        notFoundSection.style.display = 'flex'
        searchTitle.textContent = ERROR_SEARCH_TITLE
        searchDescription.textContent = ERROR_SEARCH_TEXT
      } else {
        loadPage()
      }
    })
    .catch(() => {
      searchTitle.textContent = ERROR_REQUEST_TITLE
      searchDescription.textContent = ERROR_REQUEST_TEXT
    })
    .finally(() => {
      preloader.style.display = 'none';
      setFormButtonState.removeClass();
      formInput.value = '';
    })
})
loadPage()
addCopyrightText()
formValidator()
checkShowMoreBtn()
