let cartList = ''
function fetchCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart'))
  console.log(cart)
  cart.cartitems.forEach((item) => {
    cartList += `
      <tr>
      <td>
          <figure class="itemside align-items-center">
              <div class="aside"><img
                      src="img/star-wars-y-wing.jpeg"
                      class="img-sm"></div>
              <figcaption class="info"> <a href="#" class="title text-dark"
                      data-abc="true">${item.name}</a>
                  <p class="text-muted small">Length:${item.length} <br> Manufacure: ${item.manufacturer}</p>
              </figcaption>
          </figure>
      </td>
      <td> <select class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>

          </select> </td>
      <td>
          <div class="price-wrap"> <var class="price">${ship.cost_in_credits}</var> <small class="text-muted">
                  $9.20 each </small> </div>
      </td>
      <td class="text-right d-none d-md-block"> <a data-original-title="Save to Wishlist"
              title="" href="" class="btn btn-light" data-toggle="tooltip" data-abc="true"> <i
                  class="fa fa-heart"></i></a> <a href="" class="btn btn-light"
              data-abc="true"> Delete</a> </td>
  </tr>
      `
  })
  document.getElementById('tbody').innerHTML = cartList
}
fetchCartItems()
