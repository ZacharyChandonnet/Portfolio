/**
 * @module App
 */
export default class App {

    static main() {
        this.hamMenu();
        this.nav();
        this.title();
        this.me();
    }
    /**
     * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
     * @returns undefined Ne retourne rien
     */
    static init() {
        window.addEventListener("load", () => {
            this.main();
        });
    }

    static hamMenu() {
        const menuHamburger = document.querySelector(".menu-ham")
        const navLinks = document.querySelector(".nav-links")

        menuHamburger.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-menu')
        })
    }

    static nav() {
        document.querySelectorAll('a[data-scroll]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    static title() {

        gsap.to('.title', {
            delay: 2,
            y: 0,
            duration: 4,
            opacity: 1,
            ease: "power4.easeIn",
        });

        gsap.from('.navbar', {
            delay: 1,
            y: -100,
            duration: 2,
            opacity: 0,
            ease: "power4.easeIn",
        });
    }

    static me() {
        const myText = document.querySelector(".aboutMe");
        const text = myText.innerText;
        let index = 1; 

        function updateText() {
            myText.innerText = text.substr(0, index);

            if (index < text.length) {
                index++;
                gsap.delayedCall(0.2, updateText);
            } else if (index === text.length) {
                gsap.delayedCall(1, removeText);
            }
        }

        function removeText() {
            if (index > 1) {
                index--;
                myText.innerText = text.substr(0, index);
                gsap.delayedCall(0.2, removeText);
            } else {
                gsap.delayedCall(1, updateText);
            }
        }

        updateText();
    }
}
App.init();