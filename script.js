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
var breakfast = new Picture('breakfast', 'images/breakfast.jpg');
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

function threesom () {
  var firstImage = document.getElementById('one')
  firstImage.setAttribute('src', randomNumber());

  var secondImage = document.getElementById('two')
  secondImage.setAttribute('src', randomNumber());

  var thirdImage = document.getElementById('three')
  thirdImage.setAttribute('src', randomNumber());
}

function randomNumber () {
  var index = Math.floor((Math.random() * allPictures.length - 1)  + 1);
      return allPictures[index].filePath;
  }
  var createSet = function () {

  var images = [];
  do {
  var imgPath = randomNumber();
  if ( !images.includes( imgPath ) ) { 
      images.push( imgPath );

    }
  }while ( images.length < 3 );

    return images;
}
var voter = document.getElementById ('voter')
voter.addEventListener('click', tally );

function tally(event) {
 console.log(event.target.src) 
 for (var i = 0; i < allPictures.length; i++) {
   var fullFilePath = 'file:///C:/Users/Jennifer/acl201/bus-mall/'+ allPictures[i].filePath
   if (fullFilePath === event.target.src) {
     console.log('correct');
     allPictures[i].timesClicked++
     }
    else {console.log ('error')}
 }
 threesom();
}

threesom ();










  







var chartCanvas = document.getElementById('vote').getContext('2d');

var voteChart = new Chart (chartCanvas, {
type:'bar', 
data:  { 
    labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'chair', 'cthulhu',  //x axis//
    'dogDuck', 'dragon', 'meatball', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun',
    'unicorn', 'usb', 'waterCan', 'wineGlass'],
     datasets:[{          //y axis 
         label:'Picture voting', //title//
         data: [1, 2, 3, 4, ]       //need to plug in data once you finish lab 11//
     }] 

    }

});

