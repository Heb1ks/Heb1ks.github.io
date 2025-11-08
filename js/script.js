// jQuery анимация появления карточек при загрузке
$(document).ready(function () {
  $(".card").hide().each(function (index) {
    $(this).delay(200 * index).fadeIn(600);
  });
});
