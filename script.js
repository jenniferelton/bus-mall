
var index1 = [];
function Photo(itemName, url, displayCount, voteCount) {

    this.name = itemName;
    this.url = url;
    this.displayCount = displayCount;
    this.voteCount = displayCount


//     this.getRandomItem ();
//     this.checkIfShown ();
//     this.voteHandler ();
//     this.eventListener ();
 }

var index1 = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
console.log (index1); 



















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