import {showMoreNewsBtn,news} from "../constants/constants";
import {showMoreNews} from "../../index";
import {DataStorage} from "../modules/DataStorage";

const storage = new DataStorage()

export function checkShowMoreBtn() {
  const dataStorage = storage.getItems('news')
  if (dataStorage) {
    if (news.firstCard >= dataStorage.length) {
      showMoreNewsBtn.style.display = 'none';
      showMoreNewsBtn.removeEventListener('click',showMoreNews)
    } else {
      showMoreNewsBtn.style.display = 'inline-block';
      showMoreNewsBtn.addEventListener('click',showMoreNews)
    }
  }
}