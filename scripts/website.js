"use strict";

//Image loading
var setResponsive = function setResponsive(url, resize) {
  if (!url || resize === 'false') {
    return url;
  } else if (resize) {
    return "".concat(url, "?anchor=center&mode=crop&width=").concat(resize);
  } else if (window.innerWidth < 767) {
    return "".concat(url, "?anchor=center&mode=crop&width=767");
  } else {
    return url;
  }
};

window.onload = function () {
  // Element fade in
  setTimeout(function () {
    var fadeinElements = document.querySelectorAll('.fadein');

    if (fadeinElements.length) {
      fadeinElements.forEach(function (fadeinElement, i) {
        if (fadeinElement.getBoundingClientRect().top - window.innerHeight + 50 < 0) {
          fadeinElement.classList.add('fadein--faded');
        }
      });
      document.addEventListener('scroll', function (e) {
        fadeinElements.forEach(function (fadeinElement, i) {
          if (fadeinElement.getBoundingClientRect().top - window.innerHeight + 50 < 0) {
            fadeinElement.classList.add('fadein--faded');
          }
        });
      });
    }
  }, 100);
  var bgElements = document.querySelectorAll('.bg-load');
  var imgElements = document.querySelectorAll('.img-load');
  bgElements.forEach(function (e, i) {
    var url = setResponsive(e.getAttribute('data-src'), e.getAttribute('data-resize'));

    if (url) {
      e.style.backgroundImage = "url(".concat(url, ")");
      e.classList.remove('bg-load');
    }
  });
  imgElements.forEach(function (e, i) {
    var url = setResponsive(e.getAttribute('data-src'), e.getAttribute('data-resize'));

    if (url) {
      e.setAttribute('src', url);
      e.classList.remove('img-load');
    }
  });
}; // Change homepage banner title to bolden last character.


var homepageTitle = document.querySelector('.banner--home h1');

if (homepageTitle) {
  var text = homepageTitle.innerHTML;
  var words = text.split(' ');
  var lastWord = words[words.length - 1];
  text = text.replace(lastWord, '<b>' + lastWord + '</b>');
  homepageTitle.innerHTML = text;
} //To top button


var totop = document.querySelector('.footer__totop');

if (totop) {
  totop.addEventListener('click', function (e) {
    var totopAnimate = setInterval(function () {
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - window.scrollY / 50);
      } else {
        clearInterval(totopAnimate);
      }
    }, 1);
    e.preventDefault();
  });
} //Tooltips


var info = document.querySelectorAll('.info');
info.forEach(function (e, i) {
  e.addEventListener('mouseenter', function () {
    if (e.getBoundingClientRect().top - window.innerHeight > -215 && e.getBoundingClientRect().left - window.innerWidth > -400) {
      e.classList.add('br');
    } else if (e.getBoundingClientRect().top - window.innerHeight > -215) {
      e.classList.add('bl');
    } else if (e.getBoundingClientRect().left - window.innerWidth > -400) {
      e.classList.add('tr');
    }

    e.classList.add('show');
  });
  e.addEventListener('mouseleave', function () {
    e.classList.remove('show');
    e.classList.remove('bl', 'tr', 'br');
  });
}); //Stickys

var sticky = document.querySelector('.sticky');

if (sticky) {
  var texts = document.querySelectorAll('svg.text');
  document.addEventListener('scroll', function (e) {
    if (window.scrollY + window.innerHeight + 580 > document.body.scrollHeight) {
      sticky.classList.add('sticky--hide');
    } else {
      sticky.classList.remove('sticky--hide');
    }

    texts.forEach(function (text, i) {
      text.style.transform = "rotateZ(".concat(window.scrollY / 10 + i * 180, "deg)");
    });
  });
} //Tabs


var tabs = document.querySelectorAll('.tab');

if (tabs.length) {
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function (e) {
      document.querySelector('.tab--active').classList.remove('tab--active');
      e.target.classList.add('tab--active');
      document.querySelector('.tab-content--active').classList.remove('tab-content--active');
      document.querySelectorAll('.tab-content')[i].classList.add('tab-content--active');
      e.preventDefault();
    });
  });
} //Investigation process


var investigationLinks = document.querySelectorAll('.investigation a');
investigationLinks.forEach(function (link, i) {
  link.addEventListener('click', function (e) {
    var investigationContent = document.querySelectorAll('.investigation-content__item')[i].innerHTML;
    document.querySelector('.investigation-text').innerHTML = investigationContent;
    var footerTop = document.querySelector('.content-footer').getBoundingClientRect().top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo(0, footerTop + scrollTop - window.innerHeight / 2);
    var arrow = document.querySelector('.investigation-icon');
    arrow.classList.remove('animate');
    setTimeout(function () {
      arrow.classList.add('animate');
    }, 10);
    e.preventDefault();
  });
}); //Download all

var downloadAll = document.querySelector('.download-all');

if (downloadAll) {
  downloadAll.addEventListener('click', function (e) {
    var downloadLinks = document.querySelectorAll('.download-click');
    downloadLinks.forEach(function (link, i) {
      link.click();
    });
    e.preventDefault();
  });
} //Load more


var loadMore = document.querySelector('.load-more');

if (loadMore) {
  loadMore.addEventListener('click', function (e) {
    var contentItems = document.querySelectorAll('.content-list__item--hidden');
    contentItems.forEach(function (item, i) {
      if (i < 10) {
        item.classList.remove('content-list__item--hidden');
      }
    });
    e.preventDefault();
  });
} //Select boxes


var selectboxes = document.querySelectorAll('.select__link');

document.onclick = function (e) {
  if (e.target.classList.value.indexOf('select__link')) {
    var selectboxesActive = document.querySelectorAll('.select__link.active');
    selectboxesActive.forEach(function (select, i) {
      select.classList.remove('active');
    });
  }
};

selectboxes.forEach(function (select, i) {
  select.addEventListener('click', function (e) {
    var selectboxesActive = document.querySelectorAll('.select__link.active');
    selectboxesActive.forEach(function (select, i) {
      select.classList.remove('active');
    });
    select.classList.add('active');
    e.preventDefault();
  });
});
var accordionContainers = document.querySelectorAll('.accordion-container');
accordionContainers.forEach(function (accordion, i) {
  var selectboxLinks = accordion.querySelectorAll('.select__box a');
  selectboxLinks.forEach(function (selectLink, i) {
    selectLink.addEventListener('click', function (e) {
      var select = selectLink.parentNode.parentNode.querySelector('select');
      var selectText = selectLink.parentNode.parentNode.querySelector('.select__text');
      var selectLinkActive = selectLink.parentNode.querySelector('.active');
      selectText.innerText = selectLink.innerText;

      if (selectLinkActive) {
        selectLinkActive.classList.remove('active');
      }

      selectLink.classList.add('active');

      for (var _i = 0; _i < select.options.length; _i++) {
        if (select.options[_i].value == e.target.getAttribute('data-value')) {
          select.options[_i].selected = true;
          runAccordion(select, e.target.getAttribute('data-reverse'), accordion);
          break;
        }
      }

      e.preventDefault();
    });
  });
});
var getForms = document.querySelectorAll('.form');
getForms.forEach(function (form, i) {
  var selectboxLinks = form.querySelectorAll('.select__box a');
  selectboxLinks.forEach(function (selectLink, i) {
    selectLink.addEventListener('click', function (e) {
      var select = selectLink.parentNode.parentNode.querySelector('select');
      var selectText = selectLink.parentNode.parentNode.querySelector('.select__text');
      selectText.innerText = selectLink.innerText;

      for (var _i2 = 0; _i2 < select.options.length; _i2++) {
        if (select.options[_i2].value == e.target.getAttribute('data-value')) {
          select.options[_i2].selected = true;
          break;
        }
      }

      e.preventDefault();
    });
  });
});

if (window.innerWidth < 767) {
  var selectlabels = document.querySelectorAll('.controls .select__label');
  var selectTexts = document.querySelectorAll('.controls .select__text');
  selectlabels.forEach(function (label, i) {
    selectTexts[i].innerHTML = label.innerHTML;
  });
}

var splides = document.querySelectorAll('.splide');
splides.forEach(function (e, i) {
  var direction = 'ltr';
  var perPage = 1;
  var height = 0;

  if (e.classList.contains('splide--vertical')) {
    direction = 'ttb';
    height = '526px';
    perPage = 3;
  } else {
    perPage = window.innerWidth < 767 ? perPage : 2;
  }

  new Splide(e, {
    type: 'loop',
    direction: direction,
    height: height,
    perPage: perPage,
    arrowPath: "M40,5.765,34.483,0,20,15.181,5.517,0,0,5.765l20,20.9Z"
  }).mount();
});

var validate = function validate() {
  var activeForm;

  var resetHeight = function resetHeight() {
    var currentForm = document.querySelector('.contact__content--open');
    currentForm.removeAttribute('data-height');
    currentForm.style.height = 'auto';
    var height = currentForm.offsetHeight - 48;
    currentForm.style.height = '0px';
    currentForm.style.height = height + 'px';
    currentForm.setAttribute('data-height', height + 'px');
  };

  var validateRequiredRadio = function validateRequiredRadio(e) {
    e = e.target || e;

    if (!e.checked) {
      e.parentNode.classList.add('error');
      e.parentNode.classList.remove('valid');
      e.parentNode.parentNode.querySelector('.form__message').innerText = 'This selection is required';
    } else {
      e.parentNode.classList.add('valid');
      e.parentNode.classList.remove('error');
      e.parentNode.parentNode.querySelector('.form__message').innerText = '';
    }
  };

  var validateRequired = function validateRequired(e) {
    e = e.target || e;

    if (e.value === '') {
      e.parentNode.classList.add('error');
      e.parentNode.classList.remove('valid');
      e.parentNode.querySelector('.form__message').innerText = 'This field is required';
    } else {
      e.parentNode.classList.add('valid');
      e.parentNode.classList.remove('error');
      e.parentNode.querySelector('.form__message').innerText = '';
    }
  };

  var validateEmail = function validateEmail(e) {
    e = e.target || e;

    if (!checkEmail(e.value)) {
      e.parentNode.classList.add('error');
      e.parentNode.classList.remove('valid');
      e.parentNode.querySelector('.form__message').innerText = 'Incorrect email address';
    } else {
      e.parentNode.classList.add('valid');
      e.parentNode.classList.remove('error');
      e.parentNode.querySelector('.form__message').innerText = '';
    }
  };

  var validateAffiliation = function validateAffiliation(e) {
    e = e.target || e;

    if (e.value === '' || e.value === 'None') {
      activeForm.querySelector('.affiliation-hidden').classList.add('hidden');
    } else {
      activeForm.querySelector('.affiliation-hidden').classList.remove('hidden');
    }

    resetHeight();
  };

  var validateReportedTo = function validateReportedTo(e) {
    e = e.target || e;

    if (e.value === 'True') {
      activeForm.querySelector('.reportedto-hidden').classList.remove('hidden');
    } else {
      activeForm.querySelector('.reportedto-hidden').classList.add('hidden');
    }

    resetHeight();
  };

  var validateCapacity = function validateCapacity(e) {
    e = e.target || e;

    if (e.value === 'Player' || e.value === 'Coach') {
      activeForm.querySelector('.capacity-hidden').classList.remove('hidden');
    } else {
      activeForm.querySelector('.capacity-hidden').classList.add('hidden');
    }

    resetHeight();
  };

  var validateForm = function validateForm(e) {
    activeForm.querySelectorAll('.form__field:not(.hidden) .requiredRadio').forEach(function (input, i) {
      validateRequiredRadio(input);
    });
    activeForm.querySelectorAll('.form__field:not(.hidden) .required').forEach(function (input, i) {
      validateRequired(input);
    });
    activeForm.querySelectorAll('.form__field:not(.hidden) .email').forEach(function (input, i) {
      validateEmail(input);
    });
    var errors = activeForm.querySelectorAll('.form__field:not(.hidden) .error input, .form__field:not(.hidden) .error select, .form__field:not(.hidden) .error textarea');

    if (errors[0]) {
      errors[0].focus();
      return false;
    } else {
      return true;
    }
  };

  var checkEmail = function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  var active = 0;
  var forms = document.querySelectorAll('.form');
  forms.forEach(function (form, i) {
    form.querySelectorAll('.form__field').forEach(function (formField, i) {
      var required = formField.querySelectorAll('.required');
      required.forEach(function (input, i) {
        input.addEventListener('keyup', validateRequired, false);
        input.addEventListener('change', validateRequired, false);
      });
      var requiredRadio = formField.querySelectorAll('.requiredRadio');
      requiredRadio.forEach(function (input, i) {
        input.addEventListener('keyup', validateRequiredRadio, false);
        input.addEventListener('change', validateRequiredRadio, false);
      });
      var email = formField.querySelectorAll('.email');
      email.forEach(function (input, i) {
        input.addEventListener('keyup', validateEmail, false);
        input.addEventListener('change', validateEmail, false);
      });
      var affiliation = formField.querySelectorAll('.affiliation');
      affiliation.forEach(function (input, i) {
        input.addEventListener('change', function (e) {
          activeForm = form;
          validateAffiliation(e);
        }, false);
      });
      var reportedTo = formField.querySelectorAll('.reportedto');
      reportedTo.forEach(function (input, i) {
        input.addEventListener('change', function (e) {
          activeForm = form;
          validateReportedTo(e);
        }, false);
      });
      var capacity = formField.querySelectorAll('.capacity');
      capacity.forEach(function (input, i) {
        input.addEventListener('change', function (e) {
          activeForm = form;
          validateCapacity(e);
        }, false);
      });
    });
    var submit = form.querySelector('.button--submit');

    if (submit) {
      submit.addEventListener('click', function (e) {
        activeForm = form;

        if (!validateForm(e)) {
          e.preventDefault();
        }
      }, false);
    }

    var width = window.innerWidth < 767 ? window.innerWidth - 34 : 666;
    var buttonNext = form.querySelectorAll('.button--next a');
    buttonNext.forEach(function (button) {
      button.addEventListener('click', function (e) {
        activeForm = form;
        e.preventDefault();

        if (validateForm(e)) {
          active++;
          form.parentNode.parentNode.style.transform = 'translateX(-' + width * active + 'px)';
        }
      });
    });
    var buttonBack = form.querySelectorAll('.button--back a');
    buttonBack.forEach(function (button) {
      button.addEventListener('click', function (e) {
        activeForm = form;
        e.preventDefault();
        active--;
        form.parentNode.parentNode.style.transform = 'translateX(-' + width * active + 'px)';
      });
    });
  });
  var contactForValidation = document.querySelector('.contact');

  if (contactForValidation) {
    var contactLinks = document.querySelectorAll('.contact__link');
    contactLinks.forEach(function (contactLink, i) {
      contactLink.addEventListener('click', function (e) {
        active = 0;
      });
    });
  }
};

validate();

var setAccordion = function setAccordion() {
  var pagination = document.querySelector('.pagination');
  var paginationNumbers = document.querySelectorAll('.pagination__item--number');
  var activePage = 0;

  var setPagination = function setPagination() {
    var accordionItems = document.querySelectorAll('.accordion__item');
    var accordionItemsFiltered = document.querySelectorAll('.accordion__item:not(.displaynone):not(.hidden)');
    accordionItems.forEach(function (e, i) {
      e.classList.remove('paginated-hidden');
    });
    accordionItemsFiltered.forEach(function (e, i) {
      if (!(i >= activePage * 10 && i < (activePage + 1) * 10)) {
        e.classList.add('paginated-hidden');
      }
    });
    var pages = Math.ceil(accordionItemsFiltered.length / 10);

    if (pages < 2) {
      pagination.classList.add('hidden');
    } else {
      pagination.classList.remove('hidden');
    }

    paginationNumbers.forEach(function (e, i) {
      if (i < pages) {
        e.classList.remove('hidden');
      } else {
        e.classList.add('hidden');
      }
    });
    var activePageNumber = document.querySelector('.pagination__item--active');

    if (activePageNumber) {
      activePageNumber.classList.remove('pagination__item--active');
    }

    paginationNumbers[activePage].classList.add('pagination__item--active');
  };

  if (paginationNumbers.length) {
    var pageLeft = document.querySelector('.pagination__item--left');
    var pageRight = document.querySelector('.pagination__item--right');
    pageLeft.addEventListener('click', function (e) {
      if (activePage != 0) {
        activePage--;
        setPagination();
      }
    });
    pageRight.addEventListener('click', function (e) {
      var paginationNumbersFiltered = document.querySelectorAll('.pagination__item--number:not(.hidden)');

      if (activePage < paginationNumbersFiltered.length - 1) {
        activePage++;
        setPagination();
      }
    });
    paginationNumbers.forEach(function (paginationNumber, i) {
      paginationNumber.addEventListener('click', function (e) {
        var activePageNumber = document.querySelector('.pagination__item--active');

        if (activePageNumber) {
          activePageNumber.classList.remove('pagination__item--active');
        }

        e.target.classList.add('pagination__item--active');
        activePage = i;
        setPagination();
      });
    });
  }

  if (pagination) {
    setPagination();
  }

  var accordion = document.querySelector('.accordion');

  var setAccordion = function setAccordion() {
    var accordionLinks = document.querySelectorAll('.accordion__link');
    accordionLinks.forEach(function (accordionLink, i) {
      accordionLink.addEventListener('click', function (e) {
        e.preventDefault();
        var accordionItem = e.target.parentNode.parentNode;
        var accordionContent = accordionItem.querySelector('.accordion__item-content');
        var openItem = document.querySelector('.accordion__item--open');

        if (accordionItem.classList.contains('accordion__item--open')) {
          accordionItem.classList.remove('accordion__item--open');
          accordionContent.style.height = '0px';
          return;
        }

        if (openItem) {
          openItem.classList.remove('accordion__item--open');
          openItem.querySelector('.accordion__item-content').style.height = '0px';
        }

        accordionItem.classList.add('accordion__item--open');

        if (accordionContent.getAttribute('data-height')) {
          accordionContent.style.height = accordionContent.getAttribute('data-height');
        } else {
          var height = accordionContent.offsetHeight;
          accordionContent.style.height = '0px';
          setTimeout(function () {
            accordionContent.style.height = height + 'px';
            accordionContent.setAttribute('data-height', height + 'px');
          }, 1);
        }
      });
    });
  };

  if (accordion) {
    setAccordion();
  }

  var searchAccordionItems = function searchAccordionItems(e) {
    var value = e.target.value.toLowerCase();
    var accordionItems = document.querySelectorAll('.accordion__item');
    accordionItems.forEach(function (e, i) {
      var textContent = e.textContent.toString().toLowerCase();

      if (textContent.includes(value)) {
        e.classList.remove('hidden');
      } else {
        e.classList.add('hidden');
      }
    });

    if (pagination) {
      activePage = 0;
      setPagination();
    }
  };

  var accordionSearch = document.querySelector('.accordion__search input');

  if (accordionSearch) {
    accordionSearch.addEventListener('keyup', searchAccordionItems, false);
    accordionSearch.addEventListener('change', searchAccordionItems, false);
  } //const accordionSelects = document.querySelectorAll('.select')
  //accordionSelects.forEach((selectContainer, i) => {
  //    const select = selectContainer.querySelector('select')
  //    select.addEventListener('change', (e) => {
  //        runAccordion(e)
  //    })
  //})


  var runAccordion = function runAccordion(e, reverse, accordionContainer) {
    if (e.parentNode.classList.contains('select--sort')) {
      var accordions = accordionContainer.querySelectorAll('.accordion');
      accordions.forEach(function (accordion, i) {
        var accordionItems = accordion.querySelectorAll('.accordion__item');
        var accordionItemsString = '';
        var accordionArray = Array.prototype.slice.call(accordionItems, 0);
        accordionArray.sort(function (a, b) {
          var aValue = "";
          var bValue = "";

          if (e.value.includes('Name') || e.value.includes('Role')) {
            if (a.querySelector('.sort1') != null) {
              aValue = a.querySelector('.sort1').innerText;
              bValue = b.querySelector('.sort1').innerText;
            }
          } else if (e.value.includes('Sanction') || e.value.includes('Date')) {
            if (a.querySelector('.sort2') != null) {
              aValue = a.querySelector('.sort2').innerText;
              bValue = b.querySelector('.sort2').innerText;
            }
          } else if (e.value.includes('Nationality')) {
            if (a.querySelector('.sort3') != null) {
              aValue = a.querySelector('.sort3').innerText;
              bValue = b.querySelector('.sort3').innerText;
            }
          }

          return reverse ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        });
        accordionArray.forEach(function (accordionItem, i) {
          accordionItemsString += '<div class="' + accordionItem.classList.value + '">' + accordionItem.innerHTML + '</div>';
        });
        var accordionItemsContainer = accordion.querySelector('.accordion__items');
        accordionItemsContainer.innerHTML = accordionItemsString;
      });
      setAccordion();
    }

    if (e.parentNode.classList.contains('select--filter')) {
      var items = accordionContainer.querySelectorAll('.accordion__item');
      items.forEach(function (item, i) {
        if (e.value.indexOf('All') === 0) {
          item.classList.remove('displaynone');
        } else if (item.classList.contains("accordion__item--".concat(e.value))) {
          item.classList.remove('displaynone');
        } else {
          item.classList.add('displaynone');
        }
      });
    }

    if (e.parentNode.classList.contains('select--faqs')) {
      var _items = accordionContainer.querySelectorAll('.accordion__item');

      _items.forEach(function (item, i) {
        if (e.value === 'View: All') {
          item.classList.remove('displaynone');
        } else if (item.classList.contains("accordion__item--".concat(e.value))) {
          item.classList.remove('displaynone');
        } else {
          item.classList.add('displaynone');
        }
      });
    }

    if (pagination) {
      activePage = 0;
      setPagination();
    }
  };

  var accImg = document.querySelectorAll('.accordion__cell img');
  accImg.forEach(function (e, i) {
    var src = e.getAttribute('src');
    var newImage = document.createElement('div');
    newImage.classList.add('image-container');
    newImage.innerHTML = "<a href=\"".concat(src, "\" target=\"_blank\"><img src=\"").concat(src, "\" alt=\"\" /></a>");
    e.replaceWith(newImage);
  });
};

setAccordion();
var bannerImages = document.querySelectorAll('.banner__image');

if (bannerImages.length) {
  var currentImage = 0;

  var start = function start() {
    setTimeout(function () {
      bannerImages[currentImage].classList.remove('banner__image--show');
      next();
    }, 4000);
    setTimeout(function () {
      bannerImages[currentImage].classList.remove('banner__image--active');
    }, 5000);
  };

  var next = function next() {
    setTimeout(function () {
      currentImage += 1;

      if (!bannerImages[currentImage]) {
        currentImage = 0;
      }

      bannerImages[currentImage].classList.add('banner__image--active');
      bannerImages[currentImage].classList.add('banner__image--show');
      start();
    }, 1001);
  };

  setTimeout(function () {
    bannerImages[0].classList.add('banner__image--active');
    bannerImages[0].classList.add('banner__image--show');
    start();
  }, 100);
}

var set = true;
var downloadLinks = document.querySelectorAll('.download-popup__content a');
downloadLinks.forEach(function (downloadLink) {
  downloadLink.addEventListener('click', function (e) {
    downloadLink.classList.toggle('active');

    if (set) {
      e.preventDefault();
    }
  });
});
var downloadButtons = document.querySelectorAll('.download-popup .button a');
downloadButtons.forEach(function (downloadButton) {
  downloadButton.addEventListener('click', function (e) {
    var downloadAll = downloadButton.parentNode.parentNode.querySelectorAll('.download-popup__content a.active');
    downloadAll.forEach(function (link) {
      set = false;
      link.click();
    });
    set = true;
    e.preventDefault();
  });
}); //Select boxes
//const selectboxes = document.querySelectorAll('.select__link')
//document.onclick = (e) => {
//    if (e.target.classList.value.indexOf('select__link')) {
//        const selectboxesActive = document.querySelectorAll('.select__link.active')
//        selectboxesActive.forEach((select, i) => {
//            select.classList.remove('active')
//        })
//    }
//}
//selectboxes.forEach((select, i) => {
//    select.addEventListener('click', (e) => {
//        const selectboxesActive = document.querySelectorAll('.select__link.active')
//        selectboxesActive.forEach((select, i) => {
//            select.classList.remove('active')
//        })
//        select.classList.add('active')
//        e.preventDefault()
//    })
//})

var setContact = function setContact() {
  var contact = document.querySelector('.contact');
  var contactLinks = document.querySelectorAll('.contact__link');

  var setWindow = function setWindow() {
    var report = window.location.href.split('#rep')[1];

    if (report) {
      contactLinks[0].click();
    }

    var media = window.location.href.split('#med')[1];

    if (media) {
      contactLinks[1].click();
    }

    var education = window.location.href.split('#edu')[1];

    if (education) {
      contactLinks[2].click();
    }

    var general = window.location.href.split('#gen')[1];

    if (general) {
      contactLinks[3].click();
    }
  };

  var getSubDocument = function getSubDocument(embedding_element) {
    if (embedding_element.contentDocument) {
      return embedding_element.contentDocument;
    } else {
      var subdoc = null;

      try {
        subdoc = embedding_element.getSVGDocument();
      } catch (e) {}

      return subdoc;
    }
  };

  if (contact) {
    contactLinks.forEach(function (contactLink, i) {
      contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        var activeContentLink = document.querySelector('.contact__button--active');

        if (activeContentLink) {
          activeContentLink.classList.remove('contact__button--active');

          var _svg = activeContentLink.querySelector('.emb');

          if (_svg) {
            var subdoc = getSubDocument(_svg);

            if (subdoc.querySelector('.fill')) {
              subdoc.querySelector('.fill').setAttribute('fill', '#4f465d');
            }
          }
        }

        var svg = e.target.parentNode.querySelector('.emb');

        if (svg) {
          var _subdoc = getSubDocument(svg);

          if (_subdoc.querySelector('.fill')) {
            _subdoc.querySelector('.fill').setAttribute('fill', '#ed5457');
          }
        }

        e.target.parentNode.classList.add('contact__button--active');
        var contactForms = document.querySelectorAll('.contact__content');
        var contactForm = contactForms[i];
        var openItem = document.querySelector('.contact__content--open');

        if (contactForm.classList.contains('contact__content--open')) {
          return;
        }

        if (openItem) {
          openItem.classList.remove('contact__content--open');
          openItem.style.height = '0px';
        }

        contactForm.classList.add('contact__content--open');

        if (contactForm.getAttribute('data-height')) {
          contactForm.style.height = contactForm.getAttribute('data-height');
        } else {
          var height = contactForm.offsetHeight - 24;
          contactForm.style.height = '0px';
          setTimeout(function () {
            contactForm.style.height = height + 'px';
            contactForm.setAttribute('data-height', height + 'px');
          }, 1);
        }
      });
    });
    setWindow();

    window.onpopstate = function () {
      setWindow();
    };
  }
};

setContact();
var selects = document.querySelectorAll('.select');
selects.forEach(function (selectContainer, i) {
  var select = selectContainer.querySelector('select');
  select.addEventListener('change', function (e) {
    if (selectContainer.classList.contains('select--language')) {
      window.location.href = window.location.origin + window.location.pathname + '?lang=' + e.target.value;
    } else {
      var selectText = selectContainer.querySelector('.select__text');
      selectText.innerHTML = e.target.value;
    }

    if (selectContainer.classList.contains('select--inline')) {
      var items = document.querySelectorAll('.content-list__item');
      items.forEach(function (item, i) {
        if (e.target.value === 'everywhere') {
          item.classList.remove('hidden');
        } else if (item.classList.contains('type-article') && e.target.value === 'articles') {
          item.classList.remove('hidden');
        } else if (!item.classList.contains('type-article') && e.target.value !== 'articles') {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
  });
});
var datepickers = document.querySelectorAll('.datepicker');
datepickers.forEach(function (datepicker, i) {
  new Pikaday({
    field: datepicker
  });
});
var searchButton = document.querySelector('.search__label');
var search = document.querySelector('.popup');
var searchClose = document.querySelector('.popup__close');
searchButton.addEventListener('click', function (e) {
  search.classList.toggle('popup--active');
  e.preventDefault();
});
searchClose.addEventListener('click', function (e) {
  search.classList.remove('popup--active');
  e.preventDefault();
});
var menuButton = document.querySelector('.header__burger a');
var menu = document.querySelector('.menu');
menuButton.addEventListener('click', function (e) {
  menu.classList.toggle('menu--active');
  document.querySelector('.header__burger').classList.toggle('header__burger--active');
  e.preventDefault();
});
var related = document.querySelectorAll('.introduction__content h2, .section__inner h2, .accordion__title');
var relatedContainer = document.querySelector('.onthispage');
var html = ''; //menuButton.addEventListener('click', (e) => {
//    menu.classList.toggle('menu--active')
//    e.target.classList.toggle('header__burger--active')
//    e.preventDefault()
//})

related.forEach(function (e, i) {
  html += "<p><a href=\"\">".concat(e.innerText, "</a></p>");
});

if (relatedContainer) {
  relatedContainer.innerHTML = html;
  relatedContainer.querySelectorAll('a').forEach(function (e, i) {
    e.addEventListener('click', function (el) {
      var scrolledPos = 0;
      var totopAnimate = setInterval(function () {
        var pos = related[i].getBoundingClientRect().top - 90;

        if (scrolledPos === pos) {
          clearInterval(totopAnimate);
        }

        scrolledPos = pos;
        window.scrollTo(0, window.scrollY + pos / 50);
      }, 1);
      el.preventDefault();
    });
  });
}

var resultText = document.querySelector('.search-result');
var bannerText = document.querySelector('.banner__subtitle--results');

if (resultText) {
  bannerText.innerHTML = resultText.innerHTML;
}

var timeline = document.querySelector('.timeline');

if (timeline) {
  var timelineIndicator = document.querySelector('.timeline__indicator');
  var timelineBalls = document.querySelectorAll('.timeline__ball');
  document.addEventListener('scroll', function (e) {
    var position = timelineIndicator.getBoundingClientRect().top - window.innerHeight / 2;

    if (position < 0) {
      timelineIndicator.style.height = position - position - position + 'px';
    } else {
      timelineIndicator.style.height = '0px';
    }

    timelineBalls.forEach(function (e, i) {
      var ballPosition = e.getBoundingClientRect().top - window.innerHeight / 2;

      if (ballPosition < -30) {
        e.classList.add('timeline__ball--active');
      } else {
        e.classList.remove('timeline__ball--active');
      }
    });
  });
}
//# sourceMappingURL=main.js.map
