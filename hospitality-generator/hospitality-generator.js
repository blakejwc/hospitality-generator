$(document).ready(function() {
    var challengeSrc = 'https://raw.githubusercontent.com/blakejwc/hospitality-generator/master/';

    function loadJSON(jsonFile, callback, local) {
        // Doesn't work on squarespace :(
        if (local) {
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType('application/json');
            xobj.open('GET', '../../json/' + jsonFile, true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState === 4 && xobj.status === 200) {
                    // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                    callback(JSON.parse(xobj.responseText));
                }
            };
            xobj.send(null);
        } else {
            $.getJSON(challengeSrc + jsonFile, callback)
        }
    }

    function displayChallenge(newChallenge) {
        var timeAnimation = 500;
        var challengeContainer = $('#hr_generator_challenges');
        //fade out animation with callback
        challengeContainer.fadeOut(timeAnimation, function() {
            challengeContainer.html('<h3 class="hr_generator_challenge">' + newChallenge + '</h3>');

            //fadein animation.
            challengeContainer.fadeIn(timeAnimation);
        });
    }

    function buttonClickHandler(challengeList) {
        //getting a new random number to attach to a challenge and setting a limit
        var listLength = challengeList.length;
        var randomNumber = Math.floor(Math.random() * listLength);
        //set a new challenge
        var newChallenge = challengeList[randomNumber];
        displayChallenge(newChallenge);
    }

    var easyChallenge;
    loadJSON('easy-challenges.json', function (response) {
        easyChallenge = response;
    });
    var mediumChallenge;
    loadJSON('medium-challenges.json', function (response) {
        mediumChallenge = response;
    });
    var hardChallenge;
    loadJSON('hard-challenges.json', function (response) {
        hardChallenge = response;
    });

    $('#hr_generator_button-easy').click(function(evt) {
        //prevent browser's default action
        evt.preventDefault();
        buttonClickHandler(easyChallenge);
    });
    $('#hr_generator_button-medium').click(function(evt) {
        //prevent browser's default action
        evt.preventDefault();
        buttonClickHandler(mediumChallenge);
    });
    $('#hr_generator_button-hard').click(function(evt) {
        //prevent browser's default action
        evt.preventDefault();
        buttonClickHandler(hardChallenge);
    });
});

