

function sendMail(contactForm){
    emailjs.send("gmail","tokyo", {
        from_name: contactForm.name.value,
        from_email: contactForm.emailaddress.value,
        info_request: contactForm.inforequest.value
    })
    .then (
        function(response){
            alert("SUCCESS!", response);
        },
        function(error){
            alert("Something went wrong..please try again!", error);
        }
    );
}



