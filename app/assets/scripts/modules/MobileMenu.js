import $ from 'jquery';

class MobileMenu {
 constructor() {
    this.siteHeader = $(".site-header");
    this.bigHero = $(".large-hero__text-content");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.events();
 }   
    events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));     
    }
    //work
    toggleTheMenu() {
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.bigHero.toggleClass("large-hero__text-content--hide");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;