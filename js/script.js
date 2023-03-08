'use strict';
//////Observers for animations/////////
////Offer observer
//Variables
const headingOffer = document.querySelector('.offer__heading-secondary');
const divOffer = document.querySelector('.offer__items');
const iconOffer = document.querySelectorAll('.offer__item-icon');
const textOffer = document.querySelectorAll(
  '.offer__heading-tertiary, .offer__item-text'
);

//hidde elements
headingOffer.classList.add('hidden-heading-offer');
textOffer.forEach(el => {
  el.classList.add('hidden-text-offer');
});
iconOffer.forEach(el => {
  el.classList.add('hidden-icon-offer');
});

//observer options
const offerOptions = {
  root: null,
  rootMargin: '10000px 0px -100px',
  threshold: 0,
};
if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
  offerOptions.rootMargin = '10000px 0px -200px';
} else if (window.innerWidth >= 1024) {
  offerOptions.rootMargin = '10000px 0px -250px';
}

//observer for show elements
const observerOffer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-heading-offer');
      textOffer.forEach(el => {
        el.classList.add('show-text-offer');
      });
      iconOffer.forEach(el => {
        el.classList.add('show-icon-offer');
      });
    } else {
      entry.target.classList.remove('show-heading-offer');
      textOffer.forEach(el => {
        el.classList.remove('show-text-offer');
      });
      iconOffer.forEach(el => {
        el.classList.remove('show-icon-offer');
      });
    }
  });
}, offerOptions);

observerOffer.observe(headingOffer);

////Company observer
//Variables
const companyContainer = document.querySelector('.company');
const companyImg1 = document.querySelector('.company__img-1');
const companyImg2 = document.querySelector('.company__img-2');
const companyShape1 = document.querySelector('.company__shape-1');
const companyShape2 = document.querySelector('.company__shape-2');
const companyItem = document.querySelectorAll('.company__item');

//hidde elements
companyImg1.classList.add('hidden-company-img-1');
companyImg2.classList.add('hidden-company-img-2');
companyShape1.classList.add('hidden-company-shape-1');
companyShape2.classList.add('hidden-company-shape-2');
companyItem.forEach(el => {
  el.classList.add('hidden-company-item');
});

//observer options
const companyOptions = {
  root: null,
  rootMargin: '10000px 0px -100px',
  threshold: 0,
};
if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
  companyOptions.rootMargin = '10000px 0px -200px';
} else if (window.innerWidth >= 1024) {
  companyOptions.rootMargin = '10000px 0px -300px';
}

//observer for show elements
const observerCompany = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log('add');
      companyImg1.classList.add('show-company-img-1');
      companyImg2.classList.add('show-company-img-2');
      companyShape1.classList.add('show-company-shape-1');
      companyShape2.classList.add('show-company-shape-2');
      companyItem.forEach(el => {
        el.classList.add('show-company-item');
      });
    } else {
      // console.log('remove');
      companyImg1.classList.remove('show-company-img-1');
      companyImg2.classList.remove('show-company-img-2');
      companyShape1.classList.remove('show-company-shape-1');
      companyShape2.classList.remove('show-company-shape-2');
      companyItem.forEach(el => {
        el.classList.remove('show-company-item');
      });
    }
  });
}, companyOptions);

observerCompany.observe(companyContainer);

////Digital design observer
//Variables
const digitalDesignContainer = document.querySelector('.digital-design');
const digitalDesignImg1 = document.querySelector('.digital-design__img-1');
const digitalDesignImg2 = document.querySelector('.digital-design__img-2');
const digitalDesignImg3 = document.querySelector('.digital-design__img-3');
const digitalDesignImg4 = document.querySelector('.digital-design__img-4');
const digitalDesignImg5 = document.querySelector('.digital-design__img-5');
const digitalDesignItem = document.querySelector('.digital-design__item');

//hidde elements
digitalDesignImg1.classList.add('hidden-digital-design-img-1-and-item');
digitalDesignImg2.classList.add('hidden-digital-design-img-2');
digitalDesignImg3.classList.add('hidden-digital-design-img-3');
digitalDesignImg4.classList.add('hidden-digital-design-img-4');
digitalDesignImg5.classList.add('hidden-digital-design-img-5');
digitalDesignItem.classList.add('hidden-digital-design-img-1-and-item');

//observer options
const digitalDesignOptions = {
  root: null,
  rootMargin: '10000px 0px -100px',
  threshold: 0,
};
if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
  digitalDesignOptions.rootMargin = '10000px 0px -200px';
} else if (window.innerWidth >= 1024) {
  digitalDesignOptions.rootMargin = '10000px 0px -300px';
}

//observer for show elements
const observerDigitalDesign = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log('add');
      // console.log(digitalDesignImg2);
      digitalDesignImg1.classList.add('show-digital-design-img-1-and-item');
      digitalDesignImg2.classList.add('show-digital-design-img-2');
      digitalDesignImg3.classList.add('show-digital-design-img-3');
      digitalDesignImg4.classList.add('show-digital-design-img-4');
      digitalDesignImg5.classList.add('show-digital-design-img-5');
      digitalDesignItem.classList.add('show-digital-design-img-1-and-item');
    } else {
      // console.log('remove');
      digitalDesignImg1.classList.remove('show-digital-design-img-1-and-item');
      digitalDesignImg2.classList.remove('show-digital-design-img-2');
      digitalDesignImg3.classList.remove('show-digital-design-img-3');
      digitalDesignImg4.classList.remove('show-digital-design-img-4');
      digitalDesignImg5.classList.remove('show-digital-design-img-5');
      digitalDesignItem.classList.remove('show-digital-design-img-1-and-item');
    }
  });
}, digitalDesignOptions);

observerDigitalDesign.observe(digitalDesignContainer);

////What we do observer
//Variables
const whatWeDoContainer = document.querySelector('.what-we-do');
const whatWeDoImg1 = document.querySelector('.what-we-do__img-1');
const whatWeDoImg2 = document.querySelector('.what-we-do__img-2');
const whatWeDoImg3 = document.querySelector('.what-we-do__img-3');
const whatWeDoImg4 = document.querySelector('.what-we-do__img-4');
const whatWeDoItem = document.querySelector('.what-we-do__item');

//hidde elements
whatWeDoImg1.classList.add('hidden-what-we-do-img-1');
whatWeDoImg2.classList.add('hidden-what-we-do-img-2');
whatWeDoImg3.classList.add('hidden-what-we-do-img-3');
whatWeDoImg4.classList.add('hidden-what-we-do-img-4');

whatWeDoItem.classList.add('hidden-what-we-do-item');

//observer options
const whatWeDoOptions = {
  root: null,
  rootMargin: '10000px 0px -100px',
  threshold: 0,
};
if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
  whatWeDoOptions.rootMargin = '10000px 0px -200px';
} else if (window.innerWidth >= 1024) {
  whatWeDoOptions.rootMargin = '10000px 0px -300px';
}

//observer for show elements
const observerWhatWeDo = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // console.log('add');
      whatWeDoImg1.classList.add('show-what-we-do-img-1');
      whatWeDoImg2.classList.add('show-what-we-do-img-2');
      whatWeDoImg3.classList.add('show-what-we-do-img-3');
      whatWeDoImg4.classList.add('show-what-we-do-img-4');
      whatWeDoItem.classList.add('show-what-we-do-item');
    } else {
      // console.log('remove');
      whatWeDoImg1.classList.remove('show-what-we-do-img-1');
      whatWeDoImg2.classList.remove('show-what-we-do-img-2');
      whatWeDoImg3.classList.remove('show-what-we-do-img-3');
      whatWeDoImg4.classList.remove('show-what-we-do-img-4');
      whatWeDoItem.classList.remove('show-what-we-do-item');
    }
  });
}, whatWeDoOptions);

observerWhatWeDo.observe(whatWeDoContainer);

////What we do observer
//Variables
const aboutUsContainer = document.querySelector('.about-us');
const aboutUsItem1 = document.querySelector('.about-us__item-1');
const aboutUsItem2 = document.querySelector('.about-us__item-2');
console.log(aboutUsItem2);

//hidde elements
aboutUsItem1.classList.add('hidden-about-us-item-1');
aboutUsItem2.classList.add('hidden-about-us-item-2');

//observer options
const aboutUsOptions = {
  root: null,
  rootMargin: '10000px 0px -100px',
  threshold: 0,
};
if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
  aboutUsOptions.rootMargin = '10000px 0px -200px';
} else if (window.innerWidth >= 1024) {
  aboutUsOptions.rootMargin = '10000px 0px -500px';
}

//observer for show elements
const observerAboutUs = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutUsItem1.classList.add('show-about-us-item-1');
      aboutUsItem2.classList.add('show-about-us-item-2');
    } else {
      aboutUsItem1.classList.remove('show-about-us-item-1');
      aboutUsItem2.classList.remove('show-about-us-item-2');
    }
  });
}, whatWeDoOptions);

observerAboutUs.observe(aboutUsContainer);

////Form observer
//Variables
const formContainer = document.querySelector('.form');
const formImgBlob = document.querySelector('.form__img-blob');
const formImg1 = document.querySelector('.form__img-1');
const formImg2 = document.querySelector('.form__img-2');
const formImg3 = document.querySelector('.form__img-3');
const formImg4 = document.querySelector('.form__img-4');
const formImg5 = document.querySelector('.form__img-5');
console.log(formImgBlob);

//hidde elements
formImgBlob.classList.add('hidden-form-blob');
formImg1.classList.add('hidden-form-img-1');
formImg2.classList.add('hidden-form-img-2');
formImg3.classList.add('hidden-form-img-3');
formImg4.classList.add('hidden-form-img-4');
formImg5.classList.add('hidden-form-img-5');

//observer options
const formOptions = {
  root: null,
  rootMargin: '10000px 0px -100px',
  threshold: 0,
};
if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
  formOptions.rootMargin = '10000px 0px -200px';
} else if (window.innerWidth >= 1024) {
  formOptions.rootMargin = '10000px 0px -300px';
}

//observer for show elements
const observerForm = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      formImgBlob.classList.add('show-form-blob');
      formImg1.classList.add('show-form-img-1');
      formImg2.classList.add('show-form-img-2');
      formImg3.classList.add('show-form-img-3');
      formImg4.classList.add('show-form-img-4');
      formImg5.classList.add('show-form-img-5');
    } else {
      formImgBlob.classList.remove('show-form-blob');
      formImg1.classList.remove('show-form-img-1');
      formImg2.classList.remove('show-form-img-2');
      formImg3.classList.remove('show-form-img-3');
      formImg4.classList.remove('show-form-img-4');
      formImg5.classList.remove('show-form-img-5');
    }
  });
}, formOptions);

observerForm.observe(formContainer);

////////Naw bar close button////////////
const burgerMenuButton = document.querySelector('.navigation-button');
const sideBarCloseButton = document.querySelector('.sidebar__close-icon');
const sideBarContainer = document.querySelector('.sidebar');
const sideBarBackground = document.querySelector('.sidebar-background');

burgerMenuButton.addEventListener('click', function () {
  sideBarContainer.classList.add('sidebar-display');
  sideBarBackground.style.visibility = 'visible';
  sideBarBackground.style.opacity = '1';
});

sideBarBackground.addEventListener('click', function () {
  sideBarContainer.classList.remove('sidebar-display');
  sideBarBackground.style.visibility = 'hidden';
  sideBarBackground.style.opacity = '0';
});

sideBarCloseButton.addEventListener('click', function () {
  sideBarContainer.classList.remove('sidebar-display');
  sideBarBackground.style.visibility = 'hidden';
  sideBarBackground.style.opacity = '0';
});
