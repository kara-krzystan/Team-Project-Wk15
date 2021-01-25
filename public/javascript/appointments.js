async function newFormHandler(event) {
  event.preventDefault();

  const Appointments_time = document.querySelector(
    'span[class="Appointments_time"]'
  ).value;
  const Appointments_text = document.querySelector(
    'span[class="Appointments_text"]'
  ).value;
  const Appointments_type = document.querySelector(
    'span[class="Appointments_type"]'
  ).value;

  const response = await fetch(`/api/schedule`, {
    method: 'POST',
    body: JSON.stringify({
      Appointments_time,
      Appointments_text,
      Appointments_type,
    }),
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });

  // if (response.ok) {
  //   document.location.replace('/dashboard');
  // } else {
  //   alert(response.statusText);
  // }
}

// document
//   .querySelector('.new-post-form')
//   .addEventListener('submit', newFormHandler);
