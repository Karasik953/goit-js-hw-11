
import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = e.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.error({
      title: "Ошибка",
      message: "Введите поисковый запрос"
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then((data) => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: "Нет результатов",
          message: "Sorry, there are no images matching your search query. Please try again!"
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(() => {
      iziToast.error({
        title: "Ошибка",
        message: "Что-то пошло не так. Попробуйте снова."
      });
    })
    .finally(() => {
      hideLoader();
    });
});
