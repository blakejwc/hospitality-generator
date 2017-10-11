    $(document).ready(function(){
        var challengeSource=[
        {
            challenge: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
            verse:"Francis of Assisi"
        },
        {
            challenge:"Believe you can and you're halfway there.",
            verse:"Theodore Roosevelt"
        },
        {
            challenge:"It does not matter how slowly you go as long as you do not stop.",
            verse:"Confucius"
        },
        {
            challenge:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
            verse:"Thomas A. Edison"
        },
        {
            challenge:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
            verse:"Confucius"
        },
        {
            challenge:"Don't watch the clock; do what it does. Keep going.",
            verse:"Sam Levenson"
        },
        {
            challenge:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
            verse:"Ayn Rand"
        },
        {
            challenge:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
            verse:"Ayn Rand"
        },
        {
            challenge:"Expect problems and eat them for breakfast.",
            verse:"Alfred A. Montapert"
        },
        {
            challenge:"Start where you are. Use what you have. Do what you can.",
            verse:"Arthur Ashe"
        },
        {
            challenge:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
            verse:"Samuel Beckett"
        },
        {
            challenge:"Be yourself; everyone else is already taken.",
            verse:"Oscar Wilde"
        },
        {
            challenge:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            verse:"Albert Einstein"
        },
        {
            challenge:"Always remember that you are absolutely unique. Just like everyone else.",
            verse:"Margaret Mead"
        },
        {
            challenge:"Do not take life too seriously. You will never get out of it alive.",
            verse:"Elbert Hubbard"
        },
        {
            challenge:"People who think they know everything are a great annoyance to those of us who do.",
            verse:"Isaac Asimov"
        },
        {
            challenge:"Procrastination is the art of keeping up with yesterday.",
            verse:"Don Marquis"
        },
        {
            challenge:"Get your facts first, then you can distort them as you please.",
            verse:"Mark Twain"
        },
        {
            challenge:"A day without sunshine is like, you know, night.",
            verse:"Steve Martin"
        },
        {
            challenge:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
            verse:"Ellen DeGeneres"
        },
        {
            challenge:"Don't sweat the petty things and don't pet the sweaty things.",
            verse:"George Carlin"
        },
        {
            challenge:"Always do whatever's next.",
            verse:"George Carlin"
        },
        {
            challenge:"Atheism is a non-prophet organization.",
            verse:"George Carlin"
        },
        {
            challenge:"Hapiness is not something ready made. It comes from your own actions.",
            verse:"Dalai Lama"
        }

    ];


        $('#challengeButton').click(function(evt){
            //define the containers of the info we target
            var challenge = $('#challengeContainer p').text();
            var challengeGenius = $('#challengeGenius').text();
            //prevent browser's default action
            evt.preventDefault();
            //getting a new random number to attach to a challenge and setting a limit
            var sourceLength = challengeSource.length;
            var randomNumber= Math.floor(Math.random()*sourceLength);
            //set a new challenge
            for(i=0;i<=sourceLength;i+=1){
            var newChallengeText = challengeSource[randomNumber].challenge;
            var newChallengeGenius = challengeSource[randomNumber].verse;
            //console.log(newChallengeText,newChallengeGenius);
      var timeAnimation = 500;
      var challengeContainer = $('#challengeContainer');
      //fade out animation with callback
      challengeContainer.fadeOut(timeAnimation, function(){
        challengeContainer.html('');
                challengeContainer.append('<p>'+newChallengeText+'</p>'+'<p id="challengeGenius">'+'-                               '+newChallengeGenius+'</p>');

        //fadein animation.
        challengeContainer.fadeIn(timeAnimation);
      });

            break;
        };//end for loop

    });//end challengeButton function


});//end document ready

