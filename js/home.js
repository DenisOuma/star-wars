var SearchBtn = document
	.getElementById("btn")
	.addEventListener("click", getShip);
var con = 0;
var cardDiv = document.getElementById("cardDiv");
let page = 2;
let list = "";

async function getShip(url) {
	try {
		list = "";

		const res = await fetch(url);
		let jsonData = await res.json();

		jsonData.results.forEach((ship) => {
			list += `
           
                <div class="col-md-3">
                    <div class="card">
                        <img src="images/starwar.jpg" alt="" class="card-img-top">
                        <div class="card-body">
                        <h5>${ship.name}</h5>
                        <h5>$ ${ship.cost_in_credits}</h5>
                        <h5>length: ${ship.length}</h5>
                        <button id="details" type="button" onClick="window.open('/productdetail.html?url=${ship.url}')" class="btn btn-success" ><i class="fas fa-cart-plus"></i>Detail</button>
                        </div>
                        </div>
                        </div>
                `;
		});
		cardDiv.innerHTML = list;
		document.getElementById("next").addEventListener("click", function () {
			list = "";
			jsonData.results = [];

			getShip(jsonData.next);
		});
		document.getElementById("prev").addEventListener("click", function () {
			list = "";
			jsonData.results = [];

			getShip(jsonData.previous);
		});
		if (!jsonData.previous) {
			document.getElementById("prev").disabled = true;
		} else {
			document.getElementById("prev").disabled = false;
		}
		if (!jsonData.next) {
			document.getElementById("next").disabled = true;
		} else {
			document.getElementById("next").disabled = false;
		}
	} catch (error) {
		console.log(error);
	}
}

getShip(`https://swapi.dev/api/starships/`);
