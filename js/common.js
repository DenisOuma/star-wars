let myList = "";
async function searchShip() {
	myList = "";
	let searchTerms = document.getElementById("search").value;
	searchTerms = searchTerms.replace(" ", "%20");
	console.log(`https://swapi.dev/api/starships/?search=${searchTerms}`);
	try {
		const res = await fetch(
			`https://swapi.dev/api/starships/?search=${searchTerms}`
		);
		const jsonData = await res.json();
		console.log(jsonData);
		jsonData.results.forEach((ship) => {
			console.log(ship.name);
			myList += `
           
                <div class="col-md-3">
                    <div class="card">
                        <img src="img/starwar.jpg" alt="" class="card-img-top">
                        <div class="card-body">
                        <h5>${ship.name}</h5>
                        <h5>${ship.cost_in_credits}</h5>
                        <h5>${ship.length}</h5>
                        <button id="details" type="button" onClick="window.open('/productdetail.html?url=${ship.url}')" class="btn btn-success" ><i class="fas fa-cart-plus"></i>Detail</button>
                        </div>
                        </div>
                        </div>
                `;
		});
		cardDiv.innerHTML = myList;
	} catch (err) {
		console.log(err);
	}
}
document.getElementById("btn-search").addEventListener("click", function (e) {
	e.preventDefault();
	searchShip();
});

function loadCartItems() {
	if (localStorage.getItem("cart") !== null) {
		let cart = JSON.parse(localStorage.getItem("cart"));
		let total = cart.cartitems.reduce((a, c) => {
			return a + Number(c.cost);
		}, 0);
		document.getElementById("cart-total").innerText = total;
	}
}
loadCartItems();
