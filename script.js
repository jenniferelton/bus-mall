var allPictures = [];
var clickCount = 0;
var clicked = [];

function Picture(pictureName, filePath, timesShown, timesClicked, Id) {

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

function threesom() {
    var imageArr = createSet()
    var firstImage = document.getElementById('one')
    firstImage.setAttribute('src', imageArr[0]);

    var secondImage = document.getElementById('two')
    secondImage.setAttribute('src', imageArr[1]);

    var thirdImage = document.getElementById('three')
    thirdImage.setAttribute('src', imageArr[2]);
}

function toLocalStorage( string , value ) {

var allPicturesString = JSON.stringify(value);
localStorage.setItem( string, allPicturesString)
}


function randomNumber() {
    var index = Math.floor((Math.random() * allPictures.length - 1) + 1);
    return allPictures[index].filePath;

}
var createSet = function () {

    var images = [];
    do {
        var imgPath = randomNumber();
        if (!images.includes(imgPath)) {
            images.push(imgPath);

        }
    } while (images.length < 3);

    return images;
}
var voter = document.getElementById('voter')
voter.addEventListener('click', tally);

function tally(event) {
    clickCount++
    if (clickCount < 25) {

        for (var i = 0; i < allPictures.length; i++) {
            var fullFilePath = 'file:///C:/Users/Jennifer/acl201/bus-mall/' + allPictures[i].filePath
            if (fullFilePath === event.target.src) {

                allPictures[i].timesClicked++
            }
        }
        threesom();
    } else {
        for (var i = 0; i < allPictures.length; i++) {
            clicked.push(allPictures[i].timesClicked)
        }

        showVote()

    }
    threesom();
}
threesom()

function showVote() {

toLocalStorage( 'Pictures' , allPictures );

    var chartCanvas = document.getElementById('vote').getContext('2d');

    var voteChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'chair', 'cthulhu', //x axis//
                'dogDuck', 'dragon', 'meatball', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun',
                'unicorn', 'usb', 'waterCan', 'wineGlass'
            ],
            datasets: [{ //y axis 
                label: 'Product voting', //title//
                data: clicked,
                backgroundColor: 'rgba(0, 29, 198, 0.50)'
            }],
        },
        options: {
            title: {
                display: true,
                text: "Product Votes"
            },
            legend: {
                display: false,
            }
        }
    });
}
