
//Code to make the contact form interactive - sourced at https://www.emailjs.com/docs/tutorial/creating-contact-form///


window.onload = function() {
            document.getElementById('contactForm').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_jqwbfeg', 'gmail-tokyo', this)
                    .then(function() {
                        alert('SUCCESS!.. a member of our team will get back to you shortly');
                    }, function(error) {
                        alert('Something went wrong... please try again', error);
                    });
            });
        }


