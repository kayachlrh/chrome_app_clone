const timer = document.querySelector("h4");
const spans = document.querySelectorAll('.word span');

function getTime() {
    const date = new Date();
    const xmasDay = new Date("2023-12-25");
    const gap = xmasDay - date;
    const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    timer.innerText = `D-${day}`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});