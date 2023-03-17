window.addEventListener("load", function () {
  const article = document.querySelector("article");
  article.innerHTML = "<div><img src='kepek/maci.jpg' alt=''></div>";
  const div = document.querySelector("article div");
  article.innerHTML += "<button>Formázd meg!</button>";
  const button = document.querySelector("article button");
  button.addEventListener("click", function () {
    const div = document.querySelectorAll("article div")[0];
    div.classList.add("formazas");
  });
  const kep = this.document.querySelector("article div img");
  kep.addEventListener("mouseover", function () {
    this.style.border = "10px solid yellow";
    this.src = "kepek/taj.jpg";
  });
  kep.addEventListener("mouseout", function () {
    this.style.border = "0px";
    this.src = "kepek/maci.jpg";
  });
});
