// Based on: https://gist.github.com/NBens/756731a8d528e00eba746e71dcb8a073
// javascript:
(function dl_mix() {
	function download(filename, text) {
		const element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}
	const urls = Array.from(document.querySelectorAll("ytd-playlist-panel-video-renderer"))
		.map(element => element.querySelector("#wc-endpoint").href.split("&")[0])
		.join('\n');
	const name = document.querySelectorAll('yt-formatted-string.title.style-scope.ytd-playlist-panel-renderer')[1]
		.innerText
		.replace('Mix - ', '');
	download(`${name}.ytdl`, urls);
})();