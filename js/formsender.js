"use strict"
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e) {
        e.preventDefault();
        let formData = new FormData(form);
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            form.reset();
            form.classList.remove('_sending');
        }
    }
});