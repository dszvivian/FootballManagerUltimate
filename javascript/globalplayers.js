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
                        <li id="pPosition" class="list">Position: ${element.position}</li>
                        <li id="pCountry" class="list">Country:${element.country}</li>
                        <li id="pRating" class="list">Rating: ${element.rating}</li>
                        <button class=btnSignContract" ><a href="/signnewplayer?pid=${element.pid}">Sign Contract</a></button>
                    </ul>
                </div>
              `;

      list.appendChild(li);
    });
  });


const btnSignContract = document.getElementById('btnSignContract');


