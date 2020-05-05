const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}



const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const logInInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');


let login = localStorage.getItem('gloDelivery');

function toggleModalAuth() {
 logInInput.style.borderColor = '';
 modalAuth.classList.toggle('is-open');
}


function authorized() {

  function logOut() {
   login = null;
   localStorage.removeItem('gloDelivery');
   buttonAuth.style.display = '';
   userName.style.display = '';
   buttonOut.style.display = '';
   buttonOut.removeEventListener('click', logOut);
   checkOut();
  }
  console.log('Авторизован');

  userName.textContent = login;
  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';
  buttonOut.addEventListener('click', logOut);
}

function notAuthorized() {
   console.log('Не авторизован');
   function logIn(event) {
     event.preventDefault();
     if (logInInput.value) {
     login = logInInput.value;
     localStorage.setItem('gloDelivery', login);
     toggleModalAuth();
     buttonAuth.removeEventListener('click', toggleModalAuth);
     closeAuth.removeEventListener('click', toggleModalAuth);
     logInForm.removeEventListener('submit', logIn);
     logInForm.reset();
     checkOut();
   } else {
     logInInput.style.borderColor = 'red';
   }
}
  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);

}

function checkOut() {
  if (login) {
   authorized();
  } else {
   notAuthorized();
  }
}

checkOut();
