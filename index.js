const birds = document.querySelectorAll(".article");
window.addEventListener("scroll", animated);

function animated() {
  let end = window.innerHeight * 0.7;
  birds.forEach((article) => {
    let Top = article.getBoundingClientRect().top;
    if (Top < end) {
      article.classList.add("show");
    } else {
      article.classList.remove("show");
    }
  });
}
