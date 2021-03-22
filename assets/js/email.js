
//Code to make the contact form interactive - sourced at https://www.emailjs.com/docs/tutorial/creating-contact-form///



            document.getElementById("contactForm").addEventListener("submit", function(event) {
                event.preventDefault();
                this.contact_number.value = Math.random() * 100000 | 0;
                emailjs.sendForm("gmail","tokyo", this)
                    .then(function() {
                        alert("SUCCESS!.. a member of our team will get back to you shortly");
                    }, function(error) {
                        alert("Something went wrong... please try again", error);
                    });
            });


