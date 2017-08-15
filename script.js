var allPictures = [];

function Picture (pictureName, filePath, timesShown, timesClicked, Id) {  

 this.pictureName = pictureName;
 this.filePath = filePath;
 this.timesShown = 0;
 this.timesClicked = 0;
 this.Id = Id;
 allPictures.push(this);
}

var bag = new Picture('bag', 'images/bag.jpg');
var banana = new Picture('banana', 'images/banana.jpg');
var bathroom = new Picture('bathroom', 'images/bathroom.jpg');
var boots = new Picture('boots', "images/boots.jpg");
var breakfast = new Picture('breakfast', 'images/breakfast');
var chair = new Picture('chair', 'images/chair.jpg');
var cthulhu = new Picture('cthulhu', 'images/cthulhu.jpg');
var dogDuck = new Picture('dogDuck', 'images/dog-duck.jpg');
var dragon = new Picture('dragon', 'images/dragon.jpg');
var meatball = new Picture('meatball', 'images/meatball.jpg');
var pen = new Picture('pen', 'images/pen.jpg');
var petSweep = new Picture('petSweep', 'images/pet-sweep.jpg');
var scissors = new Picture('scissors', 'images/scissors.jpg');
var shark = new Picture('shark', 'images/shark.jpg');
var sweep = new Picture('sweep', 'images/sweep.jpg');
var tauntaun = new Picture('tauntaun', 'images/tauntaun.jpg');
var unicorn = new Picture('unicorn', 'images/unicorn.jpg');
var usb = new Picture('usb', 'images/usb.gif');
var waterCan = new Picture('waterCan', 'images/water-can.jpg');
var wineGlass = new Picture('wineGlass', 'images/wine-glass.jpg');


var firstImage = document.getElementById('one')
console.log (firstImage);
firstImage.setAttribute('src', randomNumber());

var secondImage = document.getElementById('two')
console.log (secondImage);
secondImage.setAttribute('src', randomNumber());

var thirdImage = document.getElementById('three')
console.log (thirdImage);
thirdImage.setAttribute('src', randomNumber());

function randomNumber () {
var index = Math.floor((Math.random() * allPictures.length - 1)  + 1);
    console.log (allPictures[index].filePath);
    return allPictures[index].filePath;
}
var createSet = function () {

var images = [];
do {
var imgPath = randomImage();
if ( !images.includes( imgPath ) ) { 
    images.push( imgPath );
    
   }
}while ( images.length < 6 );

  return images;
}
  











// var index1 = [];
// function Photo(itemName, url, displayCount, voteCount) {
//    this.name = itemName;
//     this.url = url;
//     this.displayCount = displayCount;
//     this.voteCount = displayCount
// //     this.getRandomItem ();
// //     this.checkIfShown ();
// //     this.voteHandler ();
// //     this.eventListener ();
//  }
// var index1 = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
// console.log (index1); 



















// var salesByHour = [];
// var stores = [];
// var sumOfCookie = 0;


// function Shop(location, minCust, maxCust, avgCookieSale) {

//     this.location = location;
//     this.minCust = minCust;
//     this.maxCust = maxCust;
//     this.cookiesSoldHour = [];
//     this.avgCookieSale = avgCookieSale;
//     this.total = 0;
//     this.getRandomNumber();
//     this.transfer();
//     this.pushArr();
// }
// Shop.prototype.getRandomNumber = function () {
//     for (var i = 0; i < 15; i++) {
//         var number = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//         var totalCookies = Math.floor(this.avgCookieSale * number);
//         this.cookiesSoldHour.push(totalCookies);