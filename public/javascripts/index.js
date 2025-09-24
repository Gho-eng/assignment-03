import { $ } from './common.js'
import loginFn from './login/login.js';
import signupFn from './signup/signup.js';

$("#loginPageBtn").addEventListener("click", () => {
  fetch('./templates/login.html')
    .then((response) => response.text())
    .then((fragments) => ($('#contentContainer').innerHTML = fragments))
    .then(loginFn);
});

$("#signupPageBtn").addEventListener("click", () => {
  fetch('./templates/signup.html')
    .then((response) => response.text())
    .then((fragments) => ($('#contentContainer').innerHTML = fragments))
    .then(signupFn);
});
