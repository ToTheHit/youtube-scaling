window.onload = (function() {
	var button = document.createElement('button');
	button.id = "yt-scale-test";
	button.className = "ytp-button";
	button.onclick = function() {
		
		var transform = document.getElementsByClassName('video-stream html5-main-video')[0].style.transform;
		if (transform === '') {
			document.getElementsByClassName('video-stream html5-main-video')[0].style.transform = "scale(1.158)";
		}
		else {
			switch(transform.split('scale(')[1].split(')')[0]) {
				case "1.158":
					document.getElementsByClassName('video-stream html5-main-video')[0].style.transform = "scale(1.349)";
					break;
				case "1.349":
					document.getElementsByClassName('video-stream html5-main-video')[0].style.transform = "";
					break;
				default:
					break;
			}
		}
	}
	
	button.insertAdjacentHTML('beforeend',
	'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" style="transform: scale(0.6);"> <g id="surface1" style="fill: rgb(255,255,255);"> <path style=" " d="M 2 6 L 2 24 L 28 24 L 28 6 Z M 30 6 L 30 8 L 36 8 L 36 32 L 4 32 L 4 26 L 2 26 L 2 34 L 38 34 L 38 6 Z M 40 6 L 40 8 L 46 8 L 46 42 L 4 42 L 4 36 L 2 36 L 2 44 L 48 44 L 48 6 Z "></path> </g> </svg>');
	
	document.getElementsByClassName('ytp-right-controls')[0].insertBefore(button, document.getElementsByClassName('ytp-right-controls')[0].firstChild);
});