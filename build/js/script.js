(() => {
  const body = document.body;
  const navMain = document.querySelector('#main-nav');
  const navToggle = document.querySelector('#nav-toggle');
  const anchors = document.querySelectorAll('.main-nav__item a');
  const inputs = document.querySelectorAll('input');
  const links = document.querySelectorAll('.page-main a');
  const buttons = document.querySelectorAll('.page-main button');

  if(document.getElementById('main-nav')&&document.getElementById('nav-toggle')&&document.getElementById('anchors')) {
    navMain.classList.remove('main-nav--nojs');
  }

  const disableItems = (items) => {
    items.forEach((item) => {
      item.setAttribute('disabled', true);
    });
  };

  const enableItems = (items) => {
    items.forEach((item) => {
      item.removeAttribute('disabled');
    });
  };

  const openMenu = () => {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    body.classList.add('fixed');
    disableItems(inputs);
    disableItems(links);
    disableItems(buttons);
  };

  const closeMenu = () => {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    body.classList.remove('fixed');
    enableItems(inputs);
    enableItems(links);
    enableItems(buttons);
  };

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const sectionID = anchor.getAttribute('href').substr(1);

      document.getElementById(sectionID).scrollIntoView({
        behavior: 'smooth',
        section: 'start',
      });

      closeMenu();
    });
  });
})();
