(function(){
	let goodByeSpeaker ={};
	goodByeSpeaker.speak = function(name){
		console.log("Goodbye " + name);
	}
	window.goodByeSpeaker = goodByeSpeaker;
})(window);