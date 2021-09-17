// ==UserScript==
// @name        La Presse 
// @namespace   Violentmonkey Scripts
// @match       https://www.lapresse.ca/*
// @grant       none
// @version     1.0
// @author      -
// @description 12/3/2020, 8:19:07 AM
// ==/UserScript==
(function() {
  setTimeout(function(){
    const main = document.querySelector("body");
    const p = document.querySelectorAll("p");
    const h1 = document.querySelectorAll("h1");
    const h2 = document.querySelectorAll("h2");
    const h3 = document.querySelectorAll("h3");
    const h4 = document.querySelectorAll("h4");
    const title = document.querySelectorAll(".title");
    const ad = document.querySelector(".brz_msg_wall_body");
    const header = document.querySelector(".mainNav");
    const header2 = document.querySelectorAll(".storyCard__title");
    const header3 = document.querySelectorAll(".homeTrendingCard__suptitle");
    const header4 = document.querySelectorAll(".homeTrendingCard__title"); 
    const header5 = document.querySelectorAll(".homeHeadlinesCard__publicationUpdateDate"); 
    const nl_box = document.querySelector(".nl_box"); 
    const xtra = document.querySelector(".subHeader--section-XTR");
    const xtraDetails = document.querySelector(".homeXtraCard__details");
    main.style.overflow = "scroll";
    main.style.background = "rgb(46, 52,	64)";
    header.style.background = "rgb(46, 52,	64)";
    if (ad) {
          ad.style.display = "none";
    }
    if (nl_box) {
          nl_box.style.display = "none";
    }
    for (i = 0; i < p.length; ++i) {
      p[i].style.color = "white";
    }
    for (i = 0; i < h1.length; ++i) {
      h1[i].style.color = "white";
    }
    for (i = 0; i < h2.length; ++i) {
      h2[i].style.color = "white";
    }
    for (i = 0; i < h3.length; ++i) {
      h3[i].style.color = "white";
    }
    for (i = 0; i < h4.length; ++i) {
      h4[i].style.color = "white";
    }
    for (i = 0; i < title.length; ++i) {
      title[i].style.color = "white";
    }
    for (i = 0; i < header2.length; ++i) {
      header2[i].style.color = "white";
    }
    for (i = 0; i < header3.length; ++i) {
      header3[i].style.color = "white";
    }
    for (i = 0; i < header4.length; ++i) {
      header4[i].style.color = "white";
    }
    for (i = 0; i < header5.length; ++i) {
      header5[i].style.color = "white";
    }
; }, 4000);
})();
