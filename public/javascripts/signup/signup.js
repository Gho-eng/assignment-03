import { $ } from "../common.js"

const signupFn = () => {
  $('#signupBtn').addEventListener('click', () => {
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ 
        fName: $('#fName').value,
        lName: $('#lName').value,
        birthDate: $('#birthDate').value,
        username: $('#username').value,
        email: $('#email').value,
        password: $('#password').value,
        repassword: $('#re-password').value
      }),

    });
  });
};

export default signupFn