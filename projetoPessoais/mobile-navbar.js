class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind()
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log(index / 7 + 0.3)
            link.style.animation
                ?(link.style.animation ="")
                :(link.style.animetion = `navLinkFade 0.5s ease forwards 0.3s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addClickEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }

}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init()