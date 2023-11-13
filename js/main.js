const box = document.querySelector('.box');
const btns = document.querySelectorAll('.btns li');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');
	});
});

btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'hotpink';
});
btns[1].addEventListener('click', () => {
	box.style.backgroundColor = 'royalblue';
});
btns[2].addEventListener('click', () => {
	box.style.backgroundColor = 'orange';
});
