window.onload = () => {
  const btn = document.querySelector(".gamb");
  const mobile = document.querySelector(".nav-mobile");

  btn.onclick = function () {
    mobile.classList.toggle("nav-mobile-block");
  };
};
