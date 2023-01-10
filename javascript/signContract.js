const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pid = urlParams.get('pid')

console.log(pid);

fetch(`players.json`)
    .then(function (response) {
        return response.json();
    })
    .then(function (obj) {
        console.log(obj);
        

        const matchedPlayerData = obj[pid-1]

        console.log(matchedPlayerData);

        const pName = document.getElementById("player-name")
        const pImage = document.getElementById("player-image")
        const pCountry = document.getElementById("player-country")
        const pRating = document.getElementById("player-rating")
        const pPosition = document.getElementById("player-position")

        pName.innerText = matchedPlayerData.pname
        pPosition.innerText = matchedPlayerData.position
        pCountry.innerText = matchedPlayerData.country
        pRating.innerText = matchedPlayerData.rating
        pImage.style.backgroundImage = `url(${matchedPlayerData.image})`
        

    })


    // const btnSignContract = document.getElementById('btnSubmitname')

    // btnSignContract.onclick = () =>{
    //     const confetti = document.getElementsByClassName('confetti');
    //     confetti.style.visibility = 'visible';
    // }



    // confetti 

    var confettiPlayers = [];

    function makeItConfetti() {
    var confetti = document.querySelectorAll('.confetti');
    
    if (!confetti[0].animate) {
        return false;
    }

    for (var i = 0, len = confetti.length; i < len; ++i) {
        var candycorn = confetti[i];
        candycorn.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
        var scale = Math.random() * .7 + .3;
        var player = candycorn.animate([
        { transform: `translate3d(${(i/len*100)}vw,-5vh,0) scale(${scale}) rotate(0turn)`, opacity: scale },
        { transform: `translate3d(${(i/len*100 + 10)}vw,105vh,0) scale(${scale}) rotate(${ Math.random() > .5 ? '' : '-'}2turn)`, opacity: 1 }
        ], {
        duration: Math.random() * 3000 + 5000,
        iterations: Infinity,
        delay: -(Math.random() * 7000)
        });
        
        confettiPlayers.push(player);
    }
    }

    makeItConfetti();
    onChange({currentTarget: {value: 'bookmarks'}})

    document.getElementById('type').addEventListener('change', onChange)

    function onChange(e) {
    document.body.setAttribute('data-type', e.currentTarget.value);
    confettiPlayers.forEach(player => player.playbackRate = e.currentTarget.value === 'bookmarks' ? 2 : 1);
    }