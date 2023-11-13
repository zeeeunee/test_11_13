const box = document.querySelector('.box');
const btns = document.querySelectorAll('.btns li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		box.style.backgroundColor = e.currentTarget.innerText;
	});
});
