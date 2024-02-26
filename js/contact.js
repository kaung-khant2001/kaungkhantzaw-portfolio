const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')
    
const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm('service_25sqgla', 'template_4ekl0yf', '#contact-form', 'LgCdRg4js9HiK8rON')
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅';
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 4000)
        contactForm.reset();
    })
    .catch(() => {
        contactMessage.textContent = 'Message not sent (service error) ❌';
    });
};

contactForm.addEventListener('submit', sendEmail)