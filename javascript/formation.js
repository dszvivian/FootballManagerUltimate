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


fetch(`http://localhost:5000/allplayersApi`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
    const playerData = obj;
  

    console.log("players :")
    console.log(playerData);


    //player 1
    player1.addEventListener("mouseover", function(){
        showCard(player1.innerText);
    })
    player1.addEventListener("mouseout", hideCard)

    //player 2
    player2.addEventListener("mouseover", function(){
        showCard(player2.innerText)
    })
    player2.addEventListener("mouseout", hideCard)

    //player 3 
    player3.addEventListener("mouseover", function(){
        showCard(player3.innerText)
    })
    player3.addEventListener("mouseout", hideCard)

    //player 4
    player4.addEventListener("mouseover", function(){
        showCard(player4.innerText)
    })
    player4.addEventListener("mouseout", hideCard)

    //player 5 
    player5.addEventListener("mouseover", function(){
        showCard(player5.innerText)
    })
    player5.addEventListener("mouseout", hideCard)


    //player 6
    player6.addEventListener("mouseover", function(){
        showCard(player6.innerText)
    })
    player6.addEventListener("mouseout", hideCard)

    //player 7
    player7.addEventListener("mouseover", function(){
        showCard(player7.innerText)
    })
    player7.addEventListener("mouseout", hideCard)



    // player 8
    player8.addEventListener("mouseover", function(){
        showCard(player8.innerText)
    })
    player8.addEventListener("mouseout", hideCard)


    //player 9
    player9.addEventListener("mouseover", function(){
        showCard(player9.innerText)
    })
    player9.addEventListener("mouseout", hideCard)

    //player 10
    player10.addEventListener("mouseover", function(){
        showCard(player10.innerText)
    })
    player10.addEventListener("mouseout", hideCard)


    //player 11
    player11.addEventListener("mouseover", function(){
        showCard(player11.innerText)
    })
    player11.addEventListener("mouseout", hideCard)


    const pName = document.getElementById("player-name")
    const pImage = document.getElementById("player-image")
    const pClub = document.getElementById("player-club")
    const pCountry = document.getElementById("player-country")
    const pSkills = document.getElementById("player-skills")
    const pRating = document.getElementById("player-rating")


function showCard(id) {
    console.log(`id : ${id}`)
 
        

    if(id === null){
        
    }else{
        card.style.display = "flex"
        console.log(`id : ${id}`)
    
        id = Number(id)
        
       
        const matchedPlayerData = playerData.filter(player => player.pid === id)
        console.log("inside:")
        console.log(matchedPlayerData)
      
    
        
    
        pName.innerText = matchedPlayerData[0].pname
        pCountry.innerText = matchedPlayerData[0].country
        pSkills.innerText = matchedPlayerData[0].position
        pRating.innerText = matchedPlayerData[0].rating
        pImage.style.backgroundImage = `url(${matchedPlayerData[0].image})`
    }

    
}

function hideCard() {
    card.style.display = "none"
    pName.innerText = "Select a Player"
    pCountry.innerText = ""
    pSkills.innerText = ""
    pRating.innerText = ""
    pImage.style.backgroundImage = `url(https://w7.pngwing.com/pngs/160/868/png-transparent-add-friend-add-user-user-add-add-account-friend-3d-icon-thumbnail.png)`
}





})