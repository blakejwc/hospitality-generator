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

    loadJSON('easy-challenges.json', function (response) {
        var easyChallenge = response;
        $('#hr_accordian_easy').empty();
        for (var i = 0; i < easyChallenge.length; i++) {
            $('#hr_accordian_easy').append('<p>' + easyChallenge[i] + '</p>');
        }
    });

    loadJSON('medium-challenges.json', function (response) {
        var mediumChallenge = response;
        $('#hr_accordian_medium').empty();
        for (var i = 0; i < mediumChallenge.length; i++) {
            $('#hr_accordian_medium').append('<p>' + mediumChallenge[i] + '</p>');
        }
    });

    loadJSON('hard-challenges.json', function (response) {
        var hardChallenge = response;
        $('#hr_accordian_hard').empty();
        for (var i = 0; i < hardChallenge.length; i++) {
            $('#hr_accordian_hard').append('<p>' + hardChallenge[i] + '</p>');
        }
    });

    var hrAccordian = $('#hr_accordian');
    hrAccordian.accordion();
    hrAccordian.accordion({ header: "h2", collapsible: true, active: false, heightStyle: "content" });
});