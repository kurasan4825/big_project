document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header_right--mobile img");
  const menuList = document.querySelector(".header_right--mobile--list");
  const buyBtn = document.querySelector(".buy-btn");
  const openPopup = document.querySelectorAll(".main_fifth--cards--item--link");
  const openPopupSubscribe = document.querySelector(".main_eighth--btn");
  const closePopupSubscribe = document.querySelector(
    ".explore-popup--content--close--item"
  );
  const popupSubscribeInput = document.querySelector(
    ".explore-popup--content--info--fields--input"
  );
  const popupSubscribeBtn = document.querySelector(
    ".explore-popup--content--info--fields--btn"
  );
  const popupWindow = document.querySelector(".pop-up");
  const popupSubscribe = document.querySelector(".explore-popup");
  const closePopup = document.querySelector("#close-popup");
  const openReview = document.querySelector(".main_seventh--button");
  const closeReviewPopup = document.querySelector(
    ".review_popup--content--close--item"
  );
  const reviewPopup = document.querySelector(".review_popup");
  const openOrderPopup = document.querySelector(".main_sixth--bottom--btn");
  const orderPopup = document.querySelector(".order_popup");
  const orderPopupClose = document.querySelector(
    ".order_popup--content--close--item"
  );

  openPopup.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      popupWindow.classList.add("active");
    });
  });

  openPopupSubscribe.addEventListener("click", (event) => {
    event.preventDefault();
    popupSubscribe.classList.add("active");
  });

  openReview.addEventListener("click", (event) => {
    event.preventDefault();
    reviewPopup.classList.add("active");
  });

  openOrderPopup.addEventListener("click", (event) => {
    event.preventDefault();
    orderPopup.classList.add("active");
  });

  buyBtn.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".main_fifth--cards").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });

  closePopup.addEventListener("click", () => {
    popupWindow.classList.remove("active");
  });

  orderPopupClose.addEventListener("click", () => {
    orderPopup.classList.remove("active");
  });


  popupSubscribeBtn.addEventListener("click", () => {
    popupSubscribeInput.value = "";
  });

  closePopupSubscribe.addEventListener("click", () => {
    popupSubscribe.classList.remove("active");
  });

  menuButton.addEventListener("click", function (event) {
    menuList.style.transform = "translateX(0)";
    event.stopPropagation();
  });

  closeReviewPopup.addEventListener("click", () => {
    reviewPopup.classList.remove("active");
  });

  document.addEventListener("click", function (event) {
    if (
      !menuList.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      menuList.style.transform = "translateX(100%)";
    }
  });
});
