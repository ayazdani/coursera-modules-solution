(function(){
	let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "jim"];
	for(let name of names){
		if(name.toLowerCase().startsWith("j")){
			goodByeSpeaker.speak(name);
		}
		else{
			helloSpeaker.speak(name);
		}

	}
		}
	)();
