IN.Event.onOnce(IN, 'frameworkLoaded', function initProfile(){
	if(IN.User.isAuthorized()){
		console.log('auth');
		IN.API.Raw("/people/~:(id,first-name,last-name,num-connections,picture-url,picture-urls::(original),summary,skills,positions)").result(function(data){
			console.log(data);
			// Aquí se envían los datos al server...
		}).error(function(error){
			console.log(error);
		});
	}else{
		location.href='/';
	}
});