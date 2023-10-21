/**
 * @module App
 */
export default class App {

    static main() {
        this.hamMenu();
        this.nav();
        this.title();
        this.me();
        this.show();
        this.showcase();
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
            delay: 0,
            y: 0,
            duration: 4,
            opacity: 1,
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
                gsap.delayedCall(0.18, updateText);
            } else if (index === text.length) {
                gsap.delayedCall(1, removeText);
            }
        }

        function removeText() {
            if (index > 1) {
                index--;
                myText.innerText = text.substr(0, index);
                gsap.delayedCall(0.18, removeText);
            } else {
                gsap.delayedCall(1, updateText);
            }
        }

        updateText();
    }

    static show() {
        var items = document.querySelectorAll('.item');

        function fadeInOnScroll() {
            items.forEach(function (item) {
                var position = item.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;

                if (position < windowHeight) {
                    gsap.to(item, { opacity: 1, duration: 1.5, delay: 0.2, ease: "power4.ease" });
                }
            });
        }

        window.addEventListener('scroll', fadeInOnScroll);
    }

    static showcase() {
        const headerVideos = document.querySelectorAll('.headerVideo'); 
    
        headerVideos.forEach((video) => {
            video.playbackRate = 2;
            video.pause();
    
            video.addEventListener('mouseover', () => {
                video.play();
            });
    
            video.addEventListener('mouseout', () => {
                video.pause();
            });
        });
    }
}
App.init();