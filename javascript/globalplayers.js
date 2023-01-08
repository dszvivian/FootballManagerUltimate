const playerData = require('../players.js').playerData

function showCard(id) {
    const matchedPlayerData = playerData.find((data) => data.id === id)

    const pName = document.getElementById("pName")
    const pImage = document.getElementById("player-image")
    const pCountry = document.getElementById("pCountry")
    const pRating = document.getElementById("pRating")

    pName.innerText = matchedPlayerData.pname
    pCountry.innerText = matchedPlayerData.pCountry
    pRating.innerText = matchedPlayerData.pRating
    pImage.style.backgroundImage = `url(${matchedPlayerData.image})`
}

showCard(7)