const playerData = "players.json";

const list = document.getElementById("plist");

fetch(`players.json`)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);

    obj.forEach((element) => {
      var li = document.createElement("li");
      li.innerHTML = `
              <div class="card">
                    <div id="card-image" class="card-image" style="background-image: url(${element.image});">
                    </div>
                    <h2 id="pname">${element.pname}</h2>
                    <ul>
                        <li id="pPosition" class="list">${element.position}</li>
                        <li id="pCountry" class="list">${element.country}</li>
                        <li id="pRating" class="list">${element.rating}</li>
                        <button id=btnSign">Sign Contract</button>
                    </ul>
                </div>
              `;

      list.appendChild(li);
    });
  });

// playerData.forEach(element => {
//     var li = document.createElement('li');
//     list.appendChild(
//         `

//         `
//     )

// })

// function showCard(id) {
//     const matchedPlayerData = playerData.find((data) => data.pid === id)

//     const pName = document.getElementById("pname")
//     const pImage = document.getElementById("card-image")
//     const pPosition = document.getElementById("pPosition")
//     const pCountry = document.getElementById("pCountry")
//     const pRating = document.getElementById("pRating")

//     pName.innerText = `${matchedPlayerData.pname}`
//     pPosition.innerText = `Position: ${matchedPlayerData.position}`
//     pCountry.innerText = `Country: ${matchedPlayerData.country}`
//     pRating.innerText = `Rating: ${matchedPlayerData.rating}`
//     pImage.style.backgroundImage = `url(${matchedPlayerData.image})`

//     console.log(pName)
// }
