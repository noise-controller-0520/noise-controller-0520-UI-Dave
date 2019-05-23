// EVent listener to redirect to home when logo image is clicked

const clickHome = document.querySelector('.click-home');

clickHome.addEventListener('click', () => {
	window.location.replace('index.html');
});
