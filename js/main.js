const btns = document.querySelectorAll('.btns li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});
