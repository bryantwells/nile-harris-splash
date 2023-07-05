const video = document.querySelector('video');

const channels = [...document.querySelectorAll('channel')];
const channelButtons = [...document.querySelectorAll('.button--channel')]

const soundOnButton = document.querySelector('.button--soundOn');
const soundOffButton = document.querySelector('.button--soundOff');

video.src = channels.find((c) => c.id == 'channel-1').dataset.src;

video.addEventListener('loadedmetadata', () => {
	const duration = Math.floor(video.duration);
	const date = new Date()
	const time = date.getUTCSeconds() + (date.getUTCMinutes() * 60) + (date.getUTCHours() * 60 * 60);
	video.classList.add('is-loaded');
	video.currentTime = time % duration;
});

soundOnButton.addEventListener('click', () => {
	soundOnButton.classList.add('is-active');
	soundOffButton.classList.remove('is-active');
	video.muted = false;
});

soundOffButton.addEventListener('click', () => {
	soundOnButton.classList.remove('is-active');
	soundOffButton.classList.add('is-active');
	video.muted = true;
});

channelButtons.forEach((channelButton) => {
	channelButton.addEventListener('click', () => {
		video.src = channels.find((c) => c.id == `channel-${ channelButton.dataset.channel }`).dataset.src;
		channelButtons.forEach((cb) => {
			cb.classList.remove('is-active');
		});
		channelButton.classList.add('is-active');
	});
})