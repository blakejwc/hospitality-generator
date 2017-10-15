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

$(document).ready(function() {
    loadJSON(function(response) {
        var challengeSource = JSON.parse(response);

        $('#challengeButton').click(function(evt) {
            //define the containers of the info we target
            //var challenge = $('#challengeContainer p').text();
            //var challengeGenius = $('#challengeGenius').text();
            //prevent browser's default action
            evt.preventDefault();
            //getting a new random number to attach to a challenge and setting a limit
            var sourceLength = challengeSource.length;
            var randomNumber= Math.floor(Math.random() * sourceLength);
            //set a new challenge
            //for(var i = 0; i <= sourceLength; i++) {
                var newChallenge = challengeSource[randomNumber].challenge;
                var newVerse = challengeSource[randomNumber].verse;
                //console.log(newChallengeText,newChallengeGenius);
                displayChallenge(newChallenge, newVerse);

                //break;
            //};//end for loop
        }); //end challengeButton function
    });


});//end document ready

