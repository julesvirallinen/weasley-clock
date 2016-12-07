function locationOf(place) {
    var places1 = [
        "krebatorio", "punavuori", "kallio",
        "kannis", "halp", "klush", "allus",
        "duunis", "kampus"
    ];
    var places = {
        krebatorio: 105, punavuori: 290, kallio: 315, kannis: 129,
        halp: 145, klush: 165, allus: 185, kampus: 40, duunis: 75
    };
    if (places1.indexOf(place) == -1) return 15;
    return places[place];
}

function setDgs(who, num) {
    if (who == 'mikki') num += 3;
    var element = document.querySelector('.' + who + '-container');
    element.style.transform = 'rotateZ(' + num + 'deg)';

}

function setDgsToLocation(who, where) {
    setDgs(who, locationOf(where));
}

function setRESTLocation() {
    $.getJSON("https://api.myjson.com/bins/3grq7", function (data) {
        setDgsToLocation("mikki", data.mikki);
        setDgsToLocation("julius", data.julius);

    });
}


document.addEventListener('DOMContentLoaded', function () {

    // element.style.webkitTransform = 'rotateZ(100deg)';
    // var location = ":DDD";

    // setDgs(locationOf(location))
    setRESTLocation();

    var element = document.querySelector('.mikki-container');
    element.style.transform = 'rotateZ(' + 220 + 'deg)';
    element = document.querySelector('.spooky-container');
    element.style.transform = 'rotateZ(15deg)';


}, false);


function looparound() {
    var element = document.querySelector('.person-container');
    // element.style.webkitTransform = 'rotateZ(100deg)';
    element.style.transform = 'rotateZ(50deg)';


    var i = 1;                     //  set your counter to 1

    function myLoop() {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            element.style.transform = 'rotateZ(160deg)';


            i++;                     //  increment the counter
            if (i < 10) {            //  if the counter < 10, call the loop function
                myLoops();             //  ..  again which will trigger another
            }                        //  ..  setTimeout()
        }, 3000)
    }

    function myLoops() {           //  create a loop function

        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            element.style.transform = 'rotateZ(15deg)';


            i++;                     //  increment the counter
            if (i < 10) {            //  if the counter < 10, call the loop function
                myLoop();             //  ..  again which will trigger another
            }                        //  ..  setTimeout()
        }, 4000)
    }

    myLoops();


}
