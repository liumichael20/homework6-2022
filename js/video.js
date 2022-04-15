var video = document.querySelector("video");







window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
	video.load();
	
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.getElementById("volume").textContent = slider.value +"%";
	console.log("Play Video");
});


document.getElementById("pause").addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
});

document.getElementById("slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*.95;
	console.log("New speed is " + video.playbackRate);
});
document.getElementById("faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate*1.05	;
	console.log("New speed is " + video.playbackRate);
});
document.getElementById("skip").addEventListener("click", function(){
	console.log("Original location is " + video.currentTime);
	if ((video.duration - video.currentTime) < 15){
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime + 15;
	}
	

	
	console.log("New location " + video.currentTime);

});


document.getElementById("mute").addEventListener("click", function(){
	if (video.muted){document.getElementById("mute").innerText="Mute";}
	else{document.getElementById("mute").innerText="Unmute";}
	video.muted = !video.muted;
});

document.getElementById("slider").oninput = function(){
	var slider = document.getElementById("slider");
	console.log(slider.value * .01);
	video.volume = slider.value * .01;
	document.getElementById("volume").textContent = slider.value +"%";
};



document.getElementById("vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});

