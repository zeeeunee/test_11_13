const box = document.querySelector('.box');
const btns = document.querySelectorAll('.btns li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});

btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		box.style.backgroundColor = e.currentTarget.innerText;

		if (e.currentTarget.classList.contains('on')) return;
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});
