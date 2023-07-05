const video = document.querySelector('video');
const soundOnButton = document.querySelector('button[name="on"]');
const soundOffButton = document.querySelector('button[name="off"]');

video.addEventListener('loadedmetadata', () => {
	const duration = Math.floor(video.duration);
	const date = new Date()
	const time = date.getUTCSeconds() + (date.getUTCMinutes() * 60) + (date.getUTCHours() * 60 * 60);
	video.classList.add('is-loaded');
	video.currentTime = time % duration;
});

soundOnButton.addEventListener('click', () => {
	soundOnButton.disabled = true;
	soundOffButton.disabled = false;
	video.muted = false;
});

soundOffButton.addEventListener('click', () => {
	soundOnButton.disabled = false;
	soundOffButton.disabled = true;
	video.muted = true;
});