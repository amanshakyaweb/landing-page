function sendWhatsApp(){
            let name = document.getElementById("test").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            let phone = "7652048561"; 
            let text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

            window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
        }; 

          const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });