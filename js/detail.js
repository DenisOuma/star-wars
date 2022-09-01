// function productDetail(){
//     var details = document.getElementById('details')
//     window.open("productdetail.html")
// }
async function fetchProductDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const myParam = urlParams.get('url')
  console.log(myParam)
  const res = await fetch(myParam)
  const jsonData = await res.json()
  console.log(jsonData)
  const ship = jsonData
  document.getElementById('product-div').innerHTML = `
    <div class="product p-4">
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
                      ship.pilots.length > 0 ? ship.pilots[0] : 'none'
                    }</p>
                    <p class="about">films: ${ship.films[0]}</p>
                    <p class="about">created: ${ship.created}</p>
                    <p class="about">edited: ${ship.edited}</p>
                    <p class="about">Link: ${ship.url}</p>
                </div>
                <div class="cart mt-4 align-items-center"> <button class="btn btn-danger  text-uppercase mr-2 px-4" id="cart" >Add to cart</button>
    <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i> </div>
    `
  document.getElementById('cart').addEventListener('click', function (e) {
    if (localStorage.getItem('cart') !== null) {
      let cart = JSON.parse(localStorage.getItem('cart'))
      cart.cartitems.push({
        name: ship.name,
        length: ship.length,
        manufacturer: ship.manufacturer,
        cost: ship.cost_in_credits,
      })
      localStorage.setItem('cart', JSON.stringify(cart))
      console.log(cart.cartitems)
      let total = cart.cartitems.reduce((a, c) => {
        return a + Number(c.cost)
      }, 0)
      document.getElementById('cart-total').innerText = total
    } else {
      let items = {
        cartitems: [
          {
            name: ship.name,
            length: ship.length,
            manufacturer: ship.manufacturer,
            cost: ship.cost_in_credits,
          },
        ],
      }

      localStorage.setItem('cart', JSON.stringify(items))
    }
  })
}
fetchProductDetail()
