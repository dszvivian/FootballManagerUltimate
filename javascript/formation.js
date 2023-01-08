const playersData = [
    {
        id: 1,
        name: "gk",
        club: "PSG",
        country: "Argentina",
        skills: "La Cruqeta",
        ratings: 5,
        image: "https://images.hindustantimes.com/img/2022/12/11/1600x900/WCup-Portugal-Switzerland-Soccer-486_1670481609197_1670481609197_1670736591154_1670736591154.jpg"
    },
    {
        id: 2,
        name: "dl",
        club: "MNC",
        country: "Argentina",
        skills: "La Cruqeta",
        ratings: 2,
        image: "1496857460lionel-messi-png-2017.png"
    },
    {
        id: 3,
        name: "dm",
        club: "PSG",
        country: "Argentina",
        skills: "La Cruqeta",
        ratings: 4,
        image: "../resources/cr7.png"
    },
    {
        id: 4,
        name: "drm",
        club: "PSG",
        country: "Argentina",
        skills: "La Cruqeta",
        ratings: 3,
        image: "../resources/cr7.png"
    },
    {
        id: 5,
        name: "dr",
        club: "PSG",
        country: "Argentina",
        skills: "La Cruqeta",
        ratings: 2,
        image: "../resources/cr7.png"
    },
    {
        id: 7,
        name: "gk",
        club: "PSG",
        country: "Argentina",
        skills: "La Cruqeta",
        ratings: 5,
        image: "https://images.hindustantimes.com/img/2022/12/11/1600x900/WCup-Portugal-Switzerland-Soccer-486_1670481609197_1670481609197_1670736591154_1670736591154.jpg"
    },
]



const card = document.getElementById("card")
const player1 = document.getElementById("p1")
const player2 = document.getElementById("p2")

player1.addEventListener("mouseover", function(){
    showCard(1)
})
player1.addEventListener("mouseout", hideCard)

player2.addEventListener("mouseover", function(){
    showCard(2)
})
player2.addEventListener("mouseout", hideCard)


function showCard(id) {
    card.style.display = "flex"
    const matchedPlayerData = playersData.find((data) => data.id === id)

    const pName = document.getElementById("player-name")
    const pImage = document.getElementById("player-image")
    const pClub = document.getElementById("player-club")
    const pCountry = document.getElementById("player-country")
    const pSkills = document.getElementById("player-skills")
    const pRating = document.getElementById("player-rating")

    pName.innerText = matchedPlayerData.name
    pClub.innerText = matchedPlayerData.club
    pCountry.innerText = matchedPlayerData.country
    pSkills.innerText = matchedPlayerData.skills
    pRating.innerText = matchedPlayerData.ratings
    pImage.style.backgroundImage = `url(${matchedPlayerData.image})`
}

function hideCard() {
    card.style.display = "none"
}