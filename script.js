document.addEventListener('DOMContentLoaded', () => {

    // MOBILE MENU
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const closeBtn = document.getElementById('closeBtn');

    if(menuToggle && mobileNav && closeBtn){

        // OPEN MENU
        menuToggle.addEventListener('click', () => {

            mobileNav.classList.add('active');
            document.body.style.overflow = 'hidden';

        });

        // CLOSE MENU
        closeBtn.addEventListener('click', () => {

            mobileNav.classList.remove('active');
            document.body.style.overflow = 'auto';

        });

        
        const navLinks = mobileNav.querySelectorAll('a');

        navLinks.forEach(link => {

            link.addEventListener('click', () => {

                mobileNav.classList.remove('active');
                document.body.style.overflow = 'auto';

            });

        });

    }


    // CONTACT FORM
    const form = document.getElementById("contactForm");

    if(form){

        const button = form.querySelector("button");

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            button.classList.add("loading");

            setTimeout(() => {

                button.classList.remove("loading");
                button.classList.add("success");

                button.textContent = "Message Sent ✔";

                form.reset();

            }, 2000);

        });

    }

});


// CERTIFICATE MODAL

function openCert(imgSrc) {

    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certImg");

    if(modal && modalImg){

        modal.style.display = "flex";
        modalImg.src = imgSrc;

        document.body.style.overflow = "hidden";

    }

}

function closeCert() {

    const modal = document.getElementById("certModal");

    if(modal){

        modal.style.display = "none";
        document.body.style.overflow = "auto";

    }

}


// ESC CLOSE

document.addEventListener('keydown', (e) => {

    if (e.key === "Escape") {

        closeCert();

    }

});