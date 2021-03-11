function sendMail(contactForm){
    emailjs.send("service_616bzzc","tokyo", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "info_request": contactForm.projectsummary.value
    })
    .then (
        function(response){
            console.log("SUCCESS!", response);
        },
        function(error){
            console.log("Failed", error);
        }
    )
}