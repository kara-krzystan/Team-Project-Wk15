

const users = []
async function loginFormHandler(event) {
  event.preventDefault();
  console.log("hi")
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    console.log(email, password)
    const response = await fetch('/api/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }

    })

    console.log(response)
    if (response.ok) {
      //debugger
      document.location.replace('/');
    } else {
      alert((await response.json()).message);
    }
  }
}

document.querySelector(".login-form").addEventListener('submit', loginFormHandler);

function onSignIn(googleUser) {
  console.log(googleUser)
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('First Name: ' + profile.getGivenName());
  console.log('Last Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  /*
  Still have to make a new user with this
  */
  // connection.query(`INSERT INTO employee(firstname, lastname, email, username)VALUES("${profile.getGivenName()}", "${profile.getFamilyName()}", ${profile.getEmail()}, ${profile.getName()})`,)
  // console.log('Employee added');

  if (googleUser) {
    document.location.replace('/');
  }
}
