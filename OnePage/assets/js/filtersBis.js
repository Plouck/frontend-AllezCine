
$(function() {
    var $button = $('.feature_series .filtres button').click(function() {
      $button.not(this).removeClass('filtre_active');
      // removing `active` class from images except clicked
      $(this).toggleClass('filtre_active');
      // toggling class `active` of clicked image
    });
  });

var numFeatSeries = document.getElementById("numFeatSeries");
var twelveSeries = document.querySelectorAll(".feature_series_container .row > div:nth-last-child(-n + 12)");

// console.log(twelveSeries);

function toggleSeries(){
    if(numFeatSeries.innerHTML === "Show more"){
        for(i = 0; i < twelveSeries.length; i++){
            twelveSeries[i].style.display = "block";
            numFeatSeries.innerHTML = "Show less";
        }
    }else{
        for(i = 0; i < twelveSeries.length; i++){
            numFeatSeries.innerHTML = "Show more";
            twelveSeries[i].style.display = "none";
    }
    }
};

var viewFantasy = document.getElementById("viewFantasy");
var viewComedy = document.getElementById("viewComedy");
var viewDrama = document.getElementById("viewDrama");
var viewThriller = document.getElementById("viewThriller");
var viewAdventure = document.getElementById("viewAdventure");
var viewSciFi = document.getElementById("viewSciFi");
var allSeries = document.querySelectorAll(".feature_series_container .row > div");


// console.log(allSeries);

function filterSeriesAll(){
    for(var i = 0; i < allSeries.length; i++){
            allSeries[i].style.display = "block";
    }
    numFeatSeries.style.display = "inline-block";
    numFeatSeries.innerHTML = "Show less"
}


function filterSeriesFantasy(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var filmCat1 = allSeries[i].classList[3];
        var filmCat2 = allSeries[i].classList[4];
        var filmCat3 = allSeries[i].classList[5];
        if (filmCat1 === "Fantasy" || filmCat2 === "Fantasy" || filmCat3 === "Fantasy"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesSciFi(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var filmCat1 = allSeries[i].classList[3];
        var filmCat2 = allSeries[i].classList[4];
        var filmCat3 = allSeries[i].classList[5];
        if (filmCat1 === "SciFi" || filmCat2 === "SciFi" || filmCat3 === "SciFi"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesDrama(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var filmCat1 = allSeries[i].classList[3];
        var filmCat2 = allSeries[i].classList[4];
        var filmCat3 = allSeries[i].classList[5];
        if (filmCat1 === "Drama" || filmCat2 === "Drama" || filmCat3 === "Drama"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesComedy(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var filmCat1 = allSeries[i].classList[3];
        var filmCat2 = allSeries[i].classList[4];
        var filmCat3 = allSeries[i].classList[5];
        if (filmCat1 === "Comedy" || filmCat2 === "Comedy" || filmCat3 === "Comedy"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesAdventure(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var filmCat1 = allSeries[i].classList[3];
        var filmCat2 = allSeries[i].classList[4];
        var filmCat3 = allSeries[i].classList[5];
        if (filmCat1 === "Adventure" || filmCat2 === "Adventure" || filmCat3 === "Adventure"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}

function filterSeriesThriller(){
    numFeatSeries.style.display = "none";
    for(var i = 0; i < allSeries.length; i++){
        var filmCat1 = allSeries[i].classList[3];
        var filmCat2 = allSeries[i].classList[4];
        var filmCat3 = allSeries[i].classList[5];
        if (filmCat1 === "Thriller" || filmCat2 === "Thriller" || filmCat3 === "Thriller"){
            allSeries[i].style.display = "block";
        }else {
            allSeries[i].style.display = "none";
        }
    }
}
