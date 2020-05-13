'use strict'

var navBar = document.querySelector('.main-nav');
var menuBtn = navBar.querySelector('.menu-btn');

var onMenuButtonClick = function () {
  navBar.classList.toggle('main-nav--expanded');

  if (navBar.classList.contains('main-nav--expanded')) {
    document.body.classList.add('no-scroll');
  } else {
    closeAllSubmenus();
    document.body.removeAttribute('class');
  }
};

var closeAllSubmenus = function () {
  closeLvl3Menus();

  var lvl2Menus = navBar.querySelectorAll('.menu-lvl2');
  lvl2Menus.forEach(function (submenu) {
    submenu.classList.remove('submenu--expanded');
  });
}

var closeLvl3Menus = function () {
  var lvl3Menus = navBar.querySelectorAll('.menu-lvl3');
  lvl3Menus.forEach(function (submenu) {
    submenu.classList.remove('submenu--expanded');
  });
}

menuBtn.addEventListener('click', onMenuButtonClick);

var submenuButtons = navBar.querySelectorAll('.submenu-btn');
var onSubmenuBtnClick = function (btn) {
  btn.addEventListener('click', function () {
    toggleSubmenu(btn);
  });
}

var toggleSubmenu = function (submenuToggler) {
  var currentNavItem = submenuToggler.parentNode;
  var isExpanded = currentNavItem.classList.contains('submenu--expanded');
  var isMenuLvl2 = currentNavItem.classList.contains('menu-lvl2');
  var isMenuLvl3 = currentNavItem.classList.contains('menu-lvl3');
  var expandSubmenu = function () {
    currentNavItem.classList.add('submenu--expanded');
    currentNavItem.scrollIntoView({block: "start", behavior: "smooth"});
  }

  if (isMenuLvl2 && !isExpanded) {
    closeAllSubmenus();
    expandSubmenu();
  } else if (isMenuLvl3 && !isExpanded) {
    closeLvl3Menus();
    expandSubmenu();
  } else {
    currentNavItem.classList.remove('submenu--expanded');
  }
}

submenuButtons.forEach(function (button) {
  onSubmenuBtnClick(button);
});
