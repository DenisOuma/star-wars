// Render The dom on Js call
function renderLoginPage() {
	const loginForm = document.createElement("div");
	loginForm.innerHTML = `<div class="container id="login">
                <div class="card login-card">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <img src="images/starwar.jpg" alt="login" class="login-card-img">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <div class="brand-wrapper">
                                    <img src="images/logo.png" alt="logo" class="logo">
                                </div>
                                <p class="needs-validation login-card-description">Log in</p>
                                <form action="" method="post" id="form">
                                    <div class="form-group">
                                        <label for="email" class="sr-only"></label>
                                        <input type="email" name="email" id="userName" class="form-control"
                                            placeholder="starwar@gmail.com">
                                    </div>
                                    <div class="form-group mb-4">
                                        <label for="password" class="sr-only"></label>
                                        <input type="password" name="password" id="passWord" class="form-control"
                                            placeholder="Password" required>
                                    </div>
                                    <button name="login" id="login"  type="submit" action= "app.js" class="btn btn-block login-btn mb-4" 
                                        value="Login">Login</button>
                                </form>
                                <a href="#!" class="forgot-password-link">Forgot password?</a>
                                <p class="login-card-footer-text">Don't have an account? <a href="#!"
                                        class="text-reset">Create account</a></p>
                                <nav class="login-card-footer-nav">
                                    <a href="#!">Terms of use.</a>
                                    <a href="#!">Privacy policy</a>
                                </nav>
                            </div>
                        </div>
                    </div>`;
	body.append(loginForm);
	console.log(loginForm);

	var userObj = [
		{
			userName: "dennis@gmail.com",
			passWord: "denis",
		},

		{
			userName: "kylee@gmail.com",
			passWord: "denis",
		},
	];
	document.getElementById("form").addEventListener("submit", function (e) {
		e.preventDefault();
		var userName = document.getElementById("userName").value;
		var passWord = document.getElementById("passWord").value;

		for (var i = 0; i < userObj.length; i++) {
			if (
				userName === userObj[i].userName &&
				passWord === userObj[i].passWord
			) {
				body.removeChild(loginForm);
				body.style.background = "none";
				body.style.position = "absolute";
				// window.open("index.html", "_self");
			}
		}
		alert("submited");
	});
}

document.addEventListener("DOMContentLoaded", function (e) {
	body = document.getElementById("render-page");

	renderLoginPage();
});
