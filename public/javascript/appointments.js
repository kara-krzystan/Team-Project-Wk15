async function newApptHandler(event) {
  event.preventDefault();

  const Appointments_time = document.querySelector(
    'span[class="Appointments_time"]'
  ).value;
  const Appointments_text = document.querySelector(
    'span[class="Appointments_text"]'
  ).value;
  const Appointments_date = document.querySelector(
    'span[class="Appointments_date"]'
  ).value;

  const response = await fetch(`/api/schedule`, {
    method: 'GET',
    body: JSON.stringify({
      Appointments_date,
      Appointments_time,
      Appointments_text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#myBtn').addEventListener('click', newApptHandler);
