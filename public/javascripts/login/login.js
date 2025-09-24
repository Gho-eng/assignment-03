import { $ } from "../common.js"

const loginFn = () => {
  $('#loginBtn').addEventListener('click', () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ 
        username: $('#username').value,
        password: $('#password').value
      }),

    });
  });
};

export default loginFn