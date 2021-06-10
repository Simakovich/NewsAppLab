!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e),r.d(e,"showMoreNews",(function(){return E}));r(0);const n=document.querySelector(".footer__copyright"),a=document.querySelector(".form"),s=document.querySelector(".cards-items"),o=document.querySelector(".cards__button"),c=document.querySelector(".form__button"),i=document.querySelector("#preloader"),l=document.querySelector("#not-found"),d=document.querySelector(".search-result__title"),u=document.querySelector(".search-result__paragraph"),h={firstCard:5,lastCard:10},m='<template id="NewsCard">\n                          <li class="card"> \n                            <a class="card__link" href="" target="_blank">\n                              <img class="card__img" src="" alt="">\n                              <div class="card__container">\n                                <p class="card__date"></p>\n                                <h3 class="card__title"></h3>\n                                <p class="card__paragraph"></p>\n                              </div>\n                              <p class="card__source"></p>\n                            </a>\n                          </li>\n                         </template>';function _(t,e){t.innerHTML=e}function f(t,e){const r=new Image;r.src=e,r.onload=()=>t.src=e}class y{setItems(t,e){localStorage.setItem(t,JSON.stringify(e))}getItems(t){return JSON.parse(localStorage.getItem(t))}clear(){localStorage.clear()}}const p=new y;function S(){const t=p.getItems("news");t&&(h.firstCard>=t.length?(o.style.display="none",o.removeEventListener("click",E)):(o.style.display="inline-block",o.addEventListener("click",E)))}class g{constructor(t){this.form=t.form,this.error=t.error,this.setFormButtonState=t.setFormButtonState}_checkInputValidity(t){const e=t,r=e.nextElementSibling;return e.validity.valueMissing?(r.textContent=this.error,e.classList.add("form__input_type_error"),!1):(r.textContent="",e.classList.remove("form__input_type_error"),!0)}_handleValidate(t){this._checkInputValidity(t.target),this._setSubmitButtonState()}_setSubmitButtonState(){let t=!0;const e=this.form.querySelector(".form__button");this.form.querySelector(".form__input").checkValidity()||(t=!1),t?this.setFormButtonState.removeClass(e):this.setFormButtonState.addClass(e)}formValidity(){this._setSubmitButtonState(),this.form.addEventListener("input",this._handleValidate.bind(this))}}class b{constructor(t,e,r){this.card=t,this.createDateToCard=e,this.checkImgUrl=r}create(){const t=document.querySelector("#NewsCard").content.querySelector(".card").cloneNode(!0);return this.cardElement=t,this.title=this.cardElement.querySelector(".card__title"),this.image=this.cardElement.querySelector(".card__img"),this.cardDate=this.cardElement.querySelector(".card__date"),this.cardLink=this.cardElement.querySelector(".card__link"),this.cardSource=this.cardElement.querySelector(".card__source"),this.description=this.cardElement.querySelector(".card__paragraph"),this.title.textContent=this.card.title,this.cardDate.textContent=this.createDateToCard(this.card.publishedAt),this.cardLink.href=this.card.url,this.cardSource.textContent=this.card.source.name,this.description.textContent=this.card.description,this.checkImgUrl(this.image,this.card.urlToImage),t}}const C=a.querySelector(".form__input"),v=document.querySelector("#cards"),w=new class{convertDate(t){return t.match(/\d{4}-\d{2}-\d{2}/)[0]}convertDateToCard(t){const e=new Date(t);return`${e.getDate()} ${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]},${e.getFullYear()}`}},q=(new Date).toISOString(),I=new y,x=new class{constructor(t){this.baseUrl=t}getNews(t,e,r,n){return fetch(`${this.baseUrl}?q=${t}&from=${r}&to=${n}&sortBy=popularity&pageSize=100&apiKey=${e}`).then(t=>t.ok?t.json():Promise.reject("Error: "+t.status))}}("https://nomoreparties.co/news/v2/everything"),D=new class{constructor(t){this._button=t}addClass(){this._button.disabled=!0,this._button.classList.add("form__button_disabled")}removeClass(){this._button.removeAttribute("disabled"),this._button.classList.remove("form__button_disabled")}}(c),k=new class{constructor(t){this.container=t.container,this.createCard=t.createCard}addCard(t){this.container.appendChild(this.createCard(t))}render(t,e,r){r.slice(t,e).forEach(t=>{this.addCard(t)})}}({container:s,createCard:function(...t){return new b(...t,w.convertDateToCard,f).create()}});function E(){k.render(h.firstCard,h.lastCard,I.getItems("news")),h.firstCard+=5,h.lastCard+=5,S()}function N(){null!=I.getItems("news")&&I.getItems("news").length&&(_(s,m),k.render(0,5,I.getItems("news")),v.style.display="flex")}a.addEventListener("submit",t=>{t.preventDefault(),l.style.display="none",v.style.display="none",i.style.display="flex",D.addClass(),I.clear(),x.getNews(C.value,"ae6971aa95a34ef78aac37fb2a868bd5",w.convertDate(function(t){const e=new Date(t),r=e.getDate();return e.setDate(r-6),e.toISOString()}(q)),w.convertDate(q)).then(t=>{_(s,m),I.setItems("keyWord",C.value),I.setItems("news",t.articles),I.setItems("totalNews",t.totalResults);const e=I.getItems("news");S(),e.length?N():(l.style.display="flex",d.textContent="No results",u.textContent="There are no articles matching your request")}).catch(()=>{d.textContent="Error",u.textContent="Network Error. Please, try later"}).finally(()=>{i.style.display="none",D.removeClass(),C.value=""})}),N(),n.textContent=`© ${(new Date).getFullYear()} Simakovich`,new g({error:"required field",form:a,setFormButtonState:D}).formValidity(),S()}]);