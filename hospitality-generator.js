function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType('application/json');
    xobj.open('GET', 'challengs.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState === 4 && xobj.status === '200') {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
}

function displayChallenge(newChallenge, newVerse) {
    var timeAnimation = 500;
    var challengeContainer = $('#challengeContainer');
    //fade out animation with callback
    challengeContainer.fadeOut(timeAnimation, function() {
        challengeContainer.html('');
        challengeContainer.append('<p>' + newChallenge + '</p>'
            + '<p id="challengeGenius">' + '-' + newVerse + '</p>');

        //fadein animation.
        challengeContainer.fadeIn(timeAnimation);
    });
}

function buttonClickHandler(challengeList) {
    //getting a new random number to attach to a challenge and setting a limit
    var listLength = challengeList.length;
    var randomNumber = Math.floor(Math.random() * listLength);
    //set a new challenge
    var newChallenge = challengeList[randomNumber].challenge;
    var newVerse = challengeList[randomNumber].verse;
    //console.log(newChallengeText,newChallengeGenius);
    displayChallenge(newChallenge, newVerse);
}

$(document).ready(function() {
    var challengeSource;
    loadJSON(function(response) {
        challengeSource = JSON.parse(response);
    });
    $('#easyChallengeButton').click(function(evt) {
        //prevent browser's default action
        evt.preventDefault();
        buttonClickHandler(challengeSource.easy);
    });
    $('#mediumChallengeButton').click(function(evt) {
        //prevent browser's default action
        evt.preventDefault();
        buttonClickHandler(challengeSource.medium);
    });
    $('#hardChallengeButton').click(function(evt) {
        //prevent browser's default action
        evt.preventDefault();
        buttonClickHandler(challengeSource.hard);
    });
});//end document ready

