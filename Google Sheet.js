const scriptURL = 'https://script.google.com/macros/s/AKfycbzoN6NV-nk9ZKYQJMHJEtpPJNx_5Ur4UJ0I2kt4OU_ZrusNw7DNw_bcomhPPKg0d41d/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});
