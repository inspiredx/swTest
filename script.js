var act = document.getElementById('active');
var inact = document.getElementById('inactive')
var area = document.getElementById('area')
var wide = document.getElementById('wide');
var narrow = document.getElementById('narrow');


nextItem = () => {
    inact.src = "./images/slider-active.svg";
    act.src = "./images/slider-inactive.svg";
    area.style.backgroundImage = "url(./images/hero2.jpg)";
}

prevItem = () => {
    inact.src = "./images/slider-inactive.svg";
    act.src = "./images/slider-active.svg";
    area.style.backgroundImage = "url(./images/hero1.jpg)";
}

viewNarrow = () => {
    narrow.className = "view-item"
    wide.className = "view-item inactive"
    area.style.width = "254px"
    area.style.marginLeft = "110px"
}

viewWide = () => {
    narrow.className = "view-item inactive"
    wide.className = "view-item"
    area.style.width = "457px"
    area.style.marginLeft = "0"
}