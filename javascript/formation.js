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
const player3 = document.getElementById("p3")
const player4 = document.getElementById("p4")
const player5 = document.getElementById("p5")
const player6 = document.getElementById("p6")
const player7 = document.getElementById("p7")
const player8 = document.getElementById("p8")
const player9 = document.getElementById("p9")
const player10 = document.getElementById("p10")
const player11 = document.getElementById("p11")


//player 1
player1.addEventListener("mouseover", function(){
    showCard(1)
})
player1.addEventListener("mouseout", hideCard)

//player 2
player2.addEventListener("mouseover", function(){
    showCard(2)
})
player2.addEventListener("mouseout", hideCard)

//player 3 
player3.addEventListener("mouseover", function(){
    showCard(1)
})
player3.addEventListener("mouseout", hideCard)

//player 4
player4.addEventListener("mouseover", function(){
    showCard(2)
})
player4.addEventListener("mouseout", hideCard)

//player 5 
player5.addEventListener("mouseover", function(){
    showCard(1)
})
player5.addEventListener("mouseout", hideCard)


//player 6
player6.addEventListener("mouseover", function(){
    showCard(2)
})
player6.addEventListener("mouseout", hideCard)

//player 7
player7.addEventListener("mouseover", function(){
    showCard(1)
})
player7.addEventListener("mouseout", hideCard)


//player7
player7.addEventListener("mouseover", function(){
    showCard(2)
})
player7.addEventListener("mouseout", hideCard)

// player 8
player8.addEventListener("mouseover", function(){
    showCard(1)
})
player8.addEventListener("mouseout", hideCard)


//player 9
player9.addEventListener("mouseover", function(){
    showCard(2)
})
player9.addEventListener("mouseout", hideCard)

//player 10
player10.addEventListener("mouseover", function(){
    showCard(1)
})
player10.addEventListener("mouseout", hideCard)


//player 11
player11.addEventListener("mouseover", function(){
    showCard(2)
})
player11.addEventListener("mouseout", hideCard)





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