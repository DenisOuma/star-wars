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
                        <h5 id = "ship-name">${ship.name}</h5>
                        <h5>$ ${ship.cost_in_credits}</h5>
                        <h5>length: ${ship.length}</h5>
						<h5>length: ${ship.length}</h5>
                        <button type="button" onClick="getCardDetails()" class="view-more btn btn-success" ><i class="fas fa-cart-plus"></i>Detail</button>
                        </div>
						<div class="product ">
	                          <div class="d-flex justify-content-between align-items-center">
	                              <div class="d-flex align-items-center"><a href="home.html"><i class="fas fa-long-arrow-alt-left"></i> <span class="ml-1">Back</span></a></div>
	                              <i class="fas fa-shopping-cart text-muted"></i>
	                          </div>
	                          <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">STARWAR SHIP</span>
	                              <h5 class="text-uppercase"> shipName:${
																	ship.name
																}</h5>
	                              <div class="price d-flex flex-row align-items-center"> <span class="act-price">$${
																	ship.cost_in_credits
																}</span>
	                      </div>
	                  </div>
	                  <p class="about">model:  ${ship.model}</p>
	                  <p class="about">manufacturer: ${ship.manufacturer}</p>
	                  <p class="about">length: ${ship.length}</p>
	                  <p class="about">max_atmosphering_speed: ${
											ship.max_atmosphering_speed
										}</p>
	                  <p class="about">crew: ${ship.crew}</p>
	                  <p class="about">passengers: ${ship.passengers}</p>
	                  <p class="about">consumables: ${ship.consumables}</p>
	                  <p class="about">hyperdrive_rating: ${
											ship.hyperdrive_rating
										}</p>
	                  <p class="about">MGLT: ${ship.MGLT}</p>
	                  <p class="about">starship_class ${ship.length}</p>
	                  <p class="about">pilots: ${
											ship.pilots.length > 0 ? ship.pilots[0] : "none"
										}</p>
	                  <p class="about">films: ${ship.films[0]}</p>
	                  <p class="about">created: ${ship.created}</p>
	                  <p class="about">edited: ${ship.edited}</p>
	                  <p class="about">Link: ${ship.url}</p>
	              </div>
	              <div class="cart mt-4 align-items-center"> <button class="btn btn-danger  text-uppercase mr-2 px-4" id="cart" >Add to cart</button>
	  <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
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
