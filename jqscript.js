let lista = [
  "kepek/alszik.jpg",
  "kepek/bocsok.jpg",
  "kepek/cirkusz.jpg",
  "kepek/eszik.jpg",
  "kepek/integet.jpg",
  "kepek/maci.jpg",
  "kepek/medve.jpg",
  "kepek/taj.jpg",
];

$(function () {
  const ARTICLE = $("article");

  let txt = osszealit();
  ARTICLE.eq(0).html(txt);

  let currentIndex = 0;

  const NAGYKEP = $(".nagykep img");
  const JOBB = $(".jobb").eq(0);
  JOBB.eq(0).on("click", function () {
    currentIndex = leptetes(+1, currentIndex);
    NAGYKEP.attr("src" , lista[currentIndex]);
  });

  const BAL = $(".bal").eq(0);
  BAL.on("click", function () {
    currentIndex = leptetes(-1, currentIndex);
    NAGYKEP.attr("src" , lista[currentIndex]);
  });

  const KEPEK = $("article div img");
  
    KEPEK.on("click", function (event) {
      NAGYKEP.attr("src", event.target.src);
    });
  

  function osszealit() {
    let txt = "";
    for (i = 0; i < lista.length; i++) {
      txt += `<div><img src="${lista[i]}" alt=""></div>`;
    }
    return txt;
  }

  function leptetes(ertek, currentIndex) {
    currentIndex += ertek;
    if (currentIndex < 0) {
      currentIndex = lista.length - 1;
    }
    if (currentIndex > lista.length - 1) {
      currentIndex = 0;
    }
    return currentIndex;
  }
});
