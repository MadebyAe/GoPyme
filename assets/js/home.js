var loginBtn = document.querySelector('.pw_linkedin a');
loginBtn.addEventListener('click', function(e){
	e.preventDefault();
	IN.User.authorize(function(auth){
		if(IN.User.isAuthorized()){
			location.href='/profile';
		}
	});
});