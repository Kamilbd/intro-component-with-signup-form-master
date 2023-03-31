const firstName = document.querySelector('#name');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');
const sendBtn = document.querySelector('.card__btn-down');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.card__text-error');
	formBox.classList.add('card__error');
	errorMsg.textContent = msg;
};
{
}
clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('card__error');
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};
const checkLengh = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.parentElement.innerText} consists of ${min} sings`);
	}
};
const checkEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'E-mail is incorrect');
	}
};
const checkErrors = () => {
	const allInpots = document.querySelectorAll('.card__form');
	let errorsNum = 0;
	allInpots.forEach(el => {
		if (el.classList.contains('card__error')) {
			errorsNum++;
		}
	});
	if (errorsNum === 0) {
		alert('You make it!');
	}
};

sendBtn.addEventListener('click', () => {
	checkForm([firstName, lastName, email, pass]);
	checkLengh(firstName, 3);
	checkLengh(lastName, 2);
	checkLengh(pass, 8);
	checkEmail(email);
	checkErrors();
});
