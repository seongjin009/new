const secs = document.querySelectorAll('section');
const btns = document.querySelectorAll(' ul li');
const speed = 1000;
let posArr = [];
secs.forEach((sec) => posArr.push(sec.offsetTop));

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		new Anime(window, { scroll: posArr[idx] }, { duration: speed });
	});
});
function splitText(selector, interval = 0, delay = 0) {
	let count = 0;
	const txt = selector.innerText;
	selector.innerHTML = '';
	for (const el of txt) {
		const span = document.createElement('span');
		span.innerText = el;
		span.style.transitionDelay = `${interval * count + delay}s`;
		span.style.display = 'inline-block';
		selector.append(span);
		count++;
	}
}

function setScroll(frame, baseLine = 0) {
	const scroll = window.scrollY;
	let scroll2 = 0;
	scroll >= frame.offsetTop + baseLine
		? (scroll2 = scroll - frame.offsetTop - baseLine)
		: (scroll2 = 0);
	return scroll2;
}
