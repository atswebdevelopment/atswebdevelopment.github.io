"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var renderAbout = function renderAbout(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.blocks');

  if (content) {
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'content';
    }).Content);

    if (array && array.length > 0) {
      array.forEach(function (e, i) {
        var link = JSON.parse(e.link)[0];
        var button = JSON.parse(e.button)[0];
        html += "<div class=\"block\">\n          ".concat(e.image && "<div class=\"block__image\" style=\"background-image:url(".concat(websiteUrl + e.image, ")\"></div>") || '', "\n          <div class=\"block__content\">\n              <h2 class=\"block__title title title--30\">").concat(e.title, "</h2>\n              <hr class=\"divider\">\n              ").concat(e.content, "\n              <p>\n                ").concat(button && "<span class=\"button\">\n                    <a href=\"".concat(button.url || button.udi).concat(button.queryString || '', "\">\n                        ").concat(button.name, "\n                        <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                            <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                                <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\" />\n                            </g>\n                            <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\" />\n                        </svg>\n                    </a>\n                </span>") || '', "\n                ").concat(link && "<span class=\"link\">\n                    <a href=\"".concat(link.url || link.udi).concat(link.queryString || '', "\">\n                        ").concat(link.name, "\n                        <svg class=\"link-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                            <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(-180)\">\n                                <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" fill=\"#225773\" />\n                            </g>\n                            <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" />\n                        </svg>\n                    </a>\n                </span>") || '', "\n              </p>\n          </div>\n      </div>");
      });
    }

    content.innerHTML = html;
  }

  content = document.querySelector('.column-container__content');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'columnContent';
    }).Content);
    var cards = JSON.parse(array[0].cards);

    if (cards && cards.length > 0) {
      html = renderContentContainer(array, cards, html);
    }

    content.innerHTML = html;
  }

  content = document.querySelector('.pullout-container');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'pullout';
    }).Content);

    if (array && array.length) {
      var pullout = array[0];
      var background = pullout.background ? "style=\"background-image:url(".concat(pullout.background, ")\"") : '';
      var button = pullout.button ? JSON.parse(pullout.button)[0] : null;
      html += "<div class=\"pullout\" ".concat(background, "\">\n          <div class=\"pullout__inner ").concat(pullout.logos ? 'pullout__inner--wide' : '', "\">\n              <div class=\"").concat(pullout.logos ? 'columns' : '', "\">\n                  <div class=\"").concat(pullout.logos ? 'column' : '', "\">\n                      <div class=\"pullout__title title title--bold\">\n                          ").concat(pullout.title, "\n                      </div>\n                      <hr />\n                      ").concat(pullout.content, "\n                      ").concat(button ? "<p class=\"button center\">\n                          <a href=\"".concat(button.url || button.udi).concat(button.queryString || '', "\">\n                              ").concat(button.name, "\n                              <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                                  <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                                      <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\" />\n                                  </g>\n                                  <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\" />\n                              </svg>\n                          </a>\n                      </p>") : '', "\n                  </div>");

      if (pullout.logos) {
        var logos = pullout.logos.split(',');
        html += '<div class="column">';
        logos.forEach(function (logo) {
          html += "<img class=\"partner-logo\" src=\"".concat(websiteUrl + logo, "\" />");
        });
        html += '</div>';
      }

      content.innerHTML = html + "</div>\n          </div>\n      </div>";
    }
  }

  setPageDefaults();
};

var renderArticle = function renderArticle(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.scroll');

  if (content) {
    html = '';
    data.MostRead.forEach(function (e) {
      html += "\n      <div class=\"most-read__card\">\n          <div class=\"label\">\n              <span class=\"label__name\">\n                  ".concat(e.Type, "\n              </span>\n              <span class=\"label__timestamp\">\n                  ").concat(e.PublishDate, "\n              </span>\n          </div>\n          <p class=\"title\"><a href=\"").concat(e.Url, "\">").concat(e.Name, "</a></p>\n      </div>\n      ");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.articletop');

  if (content) {
    html = '';

    if (data.Properties.find(function (m) {
      return m.Name === 'video';
    }).Content) {
      html += "<div class=\"article__header\">\n          <div class=\"banner__label label\">\n              <span class=\"label__name\">\n                ".concat(data.ParentName, "\n              </span>\n              <span class=\"label__timestamp\">\n                ").concat(data.Properties.find(function (m) {
        return m.Name === 'publishedDate';
      }).Content, "\n              </span>\n          </div>\n          <h1 class=\"title\">").concat(data.Properties.find(function (m) {
        return m.Name === 'title';
      }).Content, "</h1>\n          <p class=\"subtitle banner__subtitle banner__subtitle--large\">").concat(data.Properties.find(function (m) {
        return m.Name === 'subtitle';
      }).Content, "</p>\n          <div class=\"article__video\">\n              <iframe src=\"https://www.youtube.com/embed/").concat(data.Properties.find(function (m) {
        return m.Name === 'video';
      }).Content, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n          </div>\n      </div>");
    }
  }

  content = document.querySelector('.small i');

  if (content) {
    content.innerHTML = data.Properties.find(function (m) {
      return m.Name === 'publishedDate';
    }).Content;
  }

  content = document.querySelector('.small .category');

  if (content) {
    content.innerHTML = data.ParentName;
  }

  content = document.querySelector('.article__inner');

  if (content) {
    html = '';
    var c = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'content';
    }).Content);

    if (c.sections && c.sections[0]) {
      c.sections.forEach(function (section) {
        if (section.rows && section.rows[0]) {
          section.rows.forEach(function (row) {
            if (row.areas && row.areas[0]) {
              row.areas.forEach(function (area) {
                if (area.controls && area.controls[0]) {
                  area.controls.forEach(function (control) {
                    html += control.value;
                  });
                }
              });
            }
          });
        }
      });
    }

    content.innerHTML = html;
  }

  setPageDefaults();
};

var renderCaseStudies = function renderCaseStudies(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.promos');

  if (content) {
    html = '';
    data.SubPages.forEach(function (e) {
      var image = data.Properties.find(function (m) {
        return m.Name === 'image';
      }).Content;
      var subtitle = data.Properties.find(function (m) {
        return m.Name === 'subtitle';
      }).Content;
      html += "<div class=\"promo\">\n        <div class=\"video-link\">\n            <a href=\"".concat(e.Url, "\">\n                <svg width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M24 0C10.746 0 0 10.746 0 24C0 37.254 10.746 48 24 48C37.254 48 48 37.254 48 24C48 10.746 37.254 0 24 0ZM24 4C35.028 4 44 12.972 44 24C44 35.028 35.028 44 24 44C12.972 44 4 35.028 4 24C4 12.972 12.972 4 24 4ZM36 24.292L18 14V34L36 24.292Z\" fill=\"white\" />\n                </svg>\n            </a>\n            ").concat(image ? "<img src=\"".concat(websiteUrl + image + '?anchor=center&mode=crop&width=767', "\" alt=\"\" />") : '', "\n        </div>\n        <div class=\"promo__content\">\n          <p class=\"promo__title title\">\n            <a href=\"").concat(e.Url, "\">").concat(e.Name, "</a>\n          </p>\n          ").concat(subtitle ? "<p>".concat(subtitle, "</p>") : '', "\n          <p class=\"link\">\n            <a href=\"").concat(e.Url, "\">\n              View article\n              <svg class=\"link-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                  <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(-180)\">\n                      <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" fill=\"#225773\" />\n                  </g>\n                  <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" />\n              </svg>\n            </a>\n          </p>\n        </div>\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.content-footer__inner p');

  if (content) {
    content.innerHTML = data.Properties.find(function (m) {
      return m.Name === 'comingSoon';
    }).Content;
  }

  setPageDefaults();
};

var renderContact = function renderContact(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.contact-area');

  if (content) {
    html = data.Properties.find(function (m) {
      return m.Name === 'content';
    }).Content;
    content.innerHTML = html;
  }

  content = document.querySelector('.secondary-nav__inner');

  if (content) {
    html = data.Properties.find(function (m) {
      return m.Name === 'contactDetails';
    }).Content;
    content.innerHTML = html;
  }

  content = document.querySelector('.contact__buttons');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'forms';
    }).Content);
    array.forEach(function (e) {
      html += "<div class=\"contact__button\">\n        <a class=\"contact__link\" href=\"\"></a>\n        ".concat(e.icon && "<img src=\"".concat(websiteUrl + e.icon, "\" />") || '', "\n        ").concat(e.title, "\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.contact__form-container');

  if (content) {
    html = '';
    array.forEach(function (e, i) {
      html += "<div class=\"contact__content\">\n      <div class=\"contact__inner\">\n          <div class=\"form-container\">\n              <div class=\"form-outer\">\n                  <div class=\"form\">\n                      <h3 class=\"title\">".concat(e.title, "</h3>\n                      ").concat(e.content || '', "\n                      <div class=\"form__field form__field--submit form__field--left\">\n                          <span class=\"button button--next\">\n                              <a href=\"\">\n                                  Start here\n                                  <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                                      <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                                          <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\" />\n                                      </g>\n                                      <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\" />\n                                  </svg>\n                              </a>\n                          </span>\n                      </div>\n                  </div>\n              </div>\n              ").concat(getForm(e.form), "\n          </div>\n      </div>\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelectorAll('.contact__form-container form');
  html = '';

  if (content.length) {
    content.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        document.querySelector('.contact__form-container').classList.add('hidden');
        document.querySelector('.loading').classList.remove('hidden');
        var url = form.getAttribute('data-post');
        console.log('Start post form data');
        var formData = new FormData(form);
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open('POST', "".concat(websiteUrl, "/umbraco/api/").concat(url, "/Submit"), false);

        xmlHttp.onload = function (data) {
          console.log('Form data loaded');
          console.log(data.target.response);

          if (data.target.response) {
            document.querySelector('.contact .accordion').classList.remove('hidden');
          } else {
            document.querySelector('.contact p.hidden').classList.remove('hidden');
            document.querySelector('.contact__form-container').classList.add('hidden');
          }

          document.querySelector('.loading').classList.add('hidden');
        };

        xmlHttp.ontimeout = function () {
          console.log('Data error - timeout');
        };

        xmlHttp.onerror = function () {
          console.log('Data error - client');
        };

        xmlHttp.send(formData);
        setTimeout(function () {
          document.querySelector('.loading').classList.add('hidden');
        }, 10000);
        e.preventDefault();
      });
    });
  }

  setContact();
  validate();
  setPageDefaults();
};

var getForm = function getForm(i) {
  if (i === 'corruption') {
    return "<form action=\"/contact/\" enctype=\"multipart/form-data\" method=\"post\" data-post=\"reportformapi\">    <div class=\"form\">\n    <div class=\"form__field\">\n        <label class=\"required\">In what capacity are you involved in Tennis?</label>\n        <div class=\"select\">\n            <div class=\"select__text\">Select</div>\n            <select class=\"required capacity\" id=\"UserType\" name=\"UserType\"><option value=\"\">Please select</option>\n    <option value=\"Player\">Player</option>\n    <option value=\"Coach\">Coach</option>\n    <option value=\"Official\">Official</option>\n    <option value=\"Staff\">Staff</option>\n    <option value=\"Other\">Other</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Full name</label>\n            <div class=\"input\">\n                <input class=\"required\" id=\"Name\" name=\"Name\" type=\"text\" value=\"\">\n                <div class=\"form__tooltip\">\n                    eg. John Smith\n                </div>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Email address</label>\n            <div class=\"input\">\n                <input class=\"email required\" id=\"Mad\" name=\"Mad\" type=\"email\" value=\"\">\n                <input class=\"fvd\" id=\"Email\" name=\"Email\" type=\"email\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Country of residence</label>\n            <div class=\"select\">\n                <div class=\"select__text\">United Kingdom</div>\n                <select id=\"Country\" name=\"Country\"><option value=\"\">Please select</option>\n    <option value=\"Afganistan\">Afghanistan</option>\n    <option value=\"Albania\">Albania</option>\n    <option value=\"Algeria\">Algeria</option>\n    <option value=\"American Samoa\">American Samoa</option>\n    <option value=\"Andorra\">Andorra</option>\n    <option value=\"Angola\">Angola</option>\n    <option value=\"Anguilla\">Anguilla</option>\n    <option value=\"Antigua &amp; Barbuda\">Antigua &amp; Barbuda</option>\n    <option value=\"Argentina\">Argentina</option>\n    <option value=\"Armenia\">Armenia</option>\n    <option value=\"Aruba\">Aruba</option>\n    <option value=\"Australia\">Australia</option>\n    <option value=\"Austria\">Austria</option>\n    <option value=\"Azerbaijan\">Azerbaijan</option>\n    <option value=\"Bahamas\">Bahamas</option>\n    <option value=\"Bahrain\">Bahrain</option>\n    <option value=\"Bangladesh\">Bangladesh</option>\n    <option value=\"Barbados\">Barbados</option>\n    <option value=\"Belarus\">Belarus</option>\n    <option value=\"Belgium\">Belgium</option>\n    <option value=\"Belize\">Belize</option>\n    <option value=\"Benin\">Benin</option>\n    <option value=\"Bermuda\">Bermuda</option>\n    <option value=\"Bhutan\">Bhutan</option>\n    <option value=\"Bolivia\">Bolivia</option>\n    <option value=\"Bonaire\">Bonaire</option>\n    <option value=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina</option>\n    <option value=\"Botswana\">Botswana</option>\n    <option value=\"Brazil\">Brazil</option>\n    <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\n    <option value=\"Brunei\">Brunei</option>\n    <option value=\"Bulgaria\">Bulgaria</option>\n    <option value=\"Burkina Faso\">Burkina Faso</option>\n    <option value=\"Burundi\">Burundi</option>\n    <option value=\"Cambodia\">Cambodia</option>\n    <option value=\"Cameroon\">Cameroon</option>\n    <option value=\"Canada\">Canada</option>\n    <option value=\"Canary Islands\">Canary Islands</option>\n    <option value=\"Cape Verde\">Cape Verde</option>\n    <option value=\"Cayman Islands\">Cayman Islands</option>\n    <option value=\"Central African Republic\">Central African Republic</option>\n    <option value=\"Chad\">Chad</option>\n    <option value=\"Channel Islands\">Channel Islands</option>\n    <option value=\"Chile\">Chile</option>\n    <option value=\"China\">China</option>\n    <option value=\"Christmas Island\">Christmas Island</option>\n    <option value=\"Cocos Island\">Cocos Island</option>\n    <option value=\"Colombia\">Colombia</option>\n    <option value=\"Comoros\">Comoros</option>\n    <option value=\"Congo\">Congo</option>\n    <option value=\"Cook Islands\">Cook Islands</option>\n    <option value=\"Costa Rica\">Costa Rica</option>\n    <option value=\"Cote DIvoire\">Cote DIvoire</option>\n    <option value=\"Croatia\">Croatia</option>\n    <option value=\"Cuba\">Cuba</option>\n    <option value=\"Curaco\">Curacao</option>\n    <option value=\"Cyprus\">Cyprus</option>\n    <option value=\"Czech Republic\">Czech Republic</option>\n    <option value=\"Denmark\">Denmark</option>\n    <option value=\"Djibouti\">Djibouti</option>\n    <option value=\"Dominica\">Dominica</option>\n    <option value=\"Dominican Republic\">Dominican Republic</option>\n    <option value=\"East Timor\">East Timor</option>\n    <option value=\"Ecuador\">Ecuador</option>\n    <option value=\"Egypt\">Egypt</option>\n    <option value=\"El Salvador\">El Salvador</option>\n    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n    <option value=\"Eritrea\">Eritrea</option>\n    <option value=\"Estonia\">Estonia</option>\n    <option value=\"Ethiopia\">Ethiopia</option>\n    <option value=\"Falkland Islands\">Falkland Islands</option>\n    <option value=\"Faroe Islands\">Faroe Islands</option>\n    <option value=\"Fiji\">Fiji</option>\n    <option value=\"Finland\">Finland</option>\n    <option value=\"France\">France</option>\n    <option value=\"French Guiana\">French Guiana</option>\n    <option value=\"French Polynesia\">French Polynesia</option>\n    <option value=\"French Southern Ter\">French Southern Ter</option>\n    <option value=\"Gabon\">Gabon</option>\n    <option value=\"Gambia\">Gambia</option>\n    <option value=\"Georgia\">Georgia</option>\n    <option value=\"Germany\">Germany</option>\n    <option value=\"Ghana\">Ghana</option>\n    <option value=\"Gibraltar\">Gibraltar</option>\n    <option value=\"Great Britain\">Great Britain</option>\n    <option value=\"Greece\">Greece</option>\n    <option value=\"Greenland\">Greenland</option>\n    <option value=\"Grenada\">Grenada</option>\n    <option value=\"Guadeloupe\">Guadeloupe</option>\n    <option value=\"Guam\">Guam</option>\n    <option value=\"Guatemala\">Guatemala</option>\n    <option value=\"Guinea\">Guinea</option>\n    <option value=\"Guyana\">Guyana</option>\n    <option value=\"Haiti\">Haiti</option>\n    <option value=\"Hawaii\">Hawaii</option>\n    <option value=\"Honduras\">Honduras</option>\n    <option value=\"Hong Kong\">Hong Kong</option>\n    <option value=\"Hungary\">Hungary</option>\n    <option value=\"Iceland\">Iceland</option>\n    <option value=\"Indonesia\">Indonesia</option>\n    <option value=\"India\">India</option>\n    <option value=\"Iran\">Iran</option>\n    <option value=\"Iraq\">Iraq</option>\n    <option value=\"Ireland\">Ireland</option>\n    <option value=\"Isle of Man\">Isle of Man</option>\n    <option value=\"Israel\">Israel</option>\n    <option value=\"Italy\">Italy</option>\n    <option value=\"Jamaica\">Jamaica</option>\n    <option value=\"Japan\">Japan</option>\n    <option value=\"Jordan\">Jordan</option>\n    <option value=\"Kazakhstan\">Kazakhstan</option>\n    <option value=\"Kenya\">Kenya</option>\n    <option value=\"Kiribati\">Kiribati</option>\n    <option value=\"Korea North\">Korea North</option>\n    <option value=\"Korea Sout\">Korea South</option>\n    <option value=\"Kuwait\">Kuwait</option>\n    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n    <option value=\"Laos\">Laos</option>\n    <option value=\"Latvia\">Latvia</option>\n    <option value=\"Lebanon\">Lebanon</option>\n    <option value=\"Lesotho\">Lesotho</option>\n    <option value=\"Liberia\">Liberia</option>\n    <option value=\"Libya\">Libya</option>\n    <option value=\"Liechtenstein\">Liechtenstein</option>\n    <option value=\"Lithuania\">Lithuania</option>\n    <option value=\"Luxembourg\">Luxembourg</option>\n    <option value=\"Macau\">Macau</option>\n    <option value=\"Macedonia\">Macedonia</option>\n    <option value=\"Madagascar\">Madagascar</option>\n    <option value=\"Malaysia\">Malaysia</option>\n    <option value=\"Malawi\">Malawi</option>\n    <option value=\"Maldives\">Maldives</option>\n    <option value=\"Mali\">Mali</option>\n    <option value=\"Malta\">Malta</option>\n    <option value=\"Marshall Islands\">Marshall Islands</option>\n    <option value=\"Martinique\">Martinique</option>\n    <option value=\"Mauritania\">Mauritania</option>\n    <option value=\"Mauritius\">Mauritius</option>\n    <option value=\"Mayotte\">Mayotte</option>\n    <option value=\"Mexico\">Mexico</option>\n    <option value=\"Midway Islands\">Midway Islands</option>\n    <option value=\"Moldova\">Moldova</option>\n    <option value=\"Monaco\">Monaco</option>\n    <option value=\"Mongolia\">Mongolia</option>\n    <option value=\"Montserrat\">Montserrat</option>\n    <option value=\"Morocco\">Morocco</option>\n    <option value=\"Mozambique\">Mozambique</option>\n    <option value=\"Myanmar\">Myanmar</option>\n    <option value=\"Nambia\">Nambia</option>\n    <option value=\"Nauru\">Nauru</option>\n    <option value=\"Nepal\">Nepal</option>\n    <option value=\"Netherland Antilles\">Netherland Antilles</option>\n    <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\n    <option value=\"Nevis\">Nevis</option>\n    <option value=\"New Caledonia\">New Caledonia</option>\n    <option value=\"New Zealand\">New Zealand</option>\n    <option value=\"Nicaragua\">Nicaragua</option>\n    <option value=\"Niger\">Niger</option>\n    <option value=\"Nigeria\">Nigeria</option>\n    <option value=\"Niue\">Niue</option>\n    <option value=\"Norfolk Island\">Norfolk Island</option>\n    <option value=\"Norway\">Norway</option>\n    <option value=\"Oman\">Oman</option>\n    <option value=\"Pakistan\">Pakistan</option>\n    <option value=\"Palau Island\">Palau Island</option>\n    <option value=\"Palestine\">Palestine</option>\n    <option value=\"Panama\">Panama</option>\n    <option value=\"Papua New Guinea\">Papua New Guinea</option>\n    <option value=\"Paraguay\">Paraguay</option>\n    <option value=\"Peru\">Peru</option>\n    <option value=\"Phillipines\">Philippines</option>\n    <option value=\"Pitcairn Island\">Pitcairn Island</option>\n    <option value=\"Poland\">Poland</option>\n    <option value=\"Portugal\">Portugal</option>\n    <option value=\"Puerto Rico\">Puerto Rico</option>\n    <option value=\"Qatar\">Qatar</option>\n    <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\n    <option value=\"Republic of Serbia\">Republic of Serbia</option>\n    <option value=\"Reunion\">Reunion</option>\n    <option value=\"Romania\">Romania</option>\n    <option value=\"Russia\">Russia</option>\n    <option value=\"Rwanda\">Rwanda</option>\n    <option value=\"St Barthelemy\">St Barthelemy</option>\n    <option value=\"St Eustatius\">St Eustatius</option>\n    <option value=\"St Helena\">St Helena</option>\n    <option value=\"St Kitts-Nevis\">St Kitts-Nevis</option>\n    <option value=\"St Lucia\">St Lucia</option>\n    <option value=\"St Maarten\">St Maarten</option>\n    <option value=\"St Pierre &amp; Miquelon\">St Pierre &amp; Miquelon</option>\n    <option value=\"St Vincent &amp; Grenadines\">St Vincent &amp; Grenadines</option>\n    <option value=\"Saipan\">Saipan</option>\n    <option value=\"Samoa\">Samoa</option>\n    <option value=\"Samoa American\">Samoa American</option>\n    <option value=\"San Marino\">San Marino</option>\n    <option value=\"Sao Tome &amp; Principe\">Sao Tome &amp; Principe</option>\n    <option value=\"Saudi Arabia\">Saudi Arabia</option>\n    <option value=\"Senegal\">Senegal</option>\n    <option value=\"Seychelles\">Seychelles</option>\n    <option value=\"Sierra Leone\">Sierra Leone</option>\n    <option value=\"Singapore\">Singapore</option>\n    <option value=\"Slovakia\">Slovakia</option>\n    <option value=\"Slovenia\">Slovenia</option>\n    <option value=\"Solomon Islands\">Solomon Islands</option>\n    <option value=\"Somalia\">Somalia</option>\n    <option value=\"South Africa\">South Africa</option>\n    <option value=\"Spain\">Spain</option>\n    <option value=\"Sri Lanka\">Sri Lanka</option>\n    <option value=\"Sudan\">Sudan</option>\n    <option value=\"Suriname\">Suriname</option>\n    <option value=\"Swaziland\">Swaziland</option>\n    <option value=\"Sweden\">Sweden</option>\n    <option value=\"Switzerland\">Switzerland</option>\n    <option value=\"Syria\">Syria</option>\n    <option value=\"Tahiti\">Tahiti</option>\n    <option value=\"Taiwan\">Taiwan</option>\n    <option value=\"Tajikistan\">Tajikistan</option>\n    <option value=\"Tanzania\">Tanzania</option>\n    <option value=\"Thailand\">Thailand</option>\n    <option value=\"Togo\">Togo</option>\n    <option value=\"Tokelau\">Tokelau</option>\n    <option value=\"Tonga\">Tonga</option>\n    <option value=\"Trinidad &amp; Tobago\">Trinidad &amp; Tobago</option>\n    <option value=\"Tunisia\">Tunisia</option>\n    <option value=\"Turkey\">Turkey</option>\n    <option value=\"Turkmenistan\">Turkmenistan</option>\n    <option value=\"Turks &amp; Caicos Is\">Turks &amp; Caicos Is</option>\n    <option value=\"Tuvalu\">Tuvalu</option>\n    <option value=\"Uganda\">Uganda</option>\n    <option selected=\"selected\" value=\"United Kingdom\">United Kingdom</option>\n    <option value=\"Ukraine\">Ukraine</option>\n    <option value=\"United Arab Erimates\">United Arab Emirates</option>\n    <option value=\"United States of America\">United States of America</option>\n    <option value=\"Uraguay\">Uruguay</option>\n    <option value=\"Uzbekistan\">Uzbekistan</option>\n    <option value=\"Vanuatu\">Vanuatu</option>\n    <option value=\"Vatican City State\">Vatican City State</option>\n    <option value=\"Venezuela\">Venezuela</option>\n    <option value=\"Vietnam\">Vietnam</option>\n    <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\n    <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\n    <option value=\"Wake Island\">Wake Island</option>\n    <option value=\"Wallis &amp; Futana Is\">Wallis &amp; Futana Is</option>\n    <option value=\"Yemen\">Yemen</option>\n    <option value=\"Zaire\">Zaire</option>\n    <option value=\"Zambia\">Zambia</option>\n    <option value=\"Zimbabwe\">Zimbabwe</option>\n    </select>\n                <div class=\"form__message\"></div>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Phone number</label>\n            <div class=\"input\">\n                <input id=\"Phone\" name=\"Phone\" type=\"text\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Contact preference</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Email</div>\n                <select class=\"required\" id=\"ContactPreference\" name=\"ContactPreference\"><option value=\"Email\">Email</option>\n    <option value=\"Phone\">Phone</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field hidden capacity-hidden\">\n            <label class=\"required\">Tour affiliation</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Select</div>\n                <select class=\"required affiliation\" id=\"Affiliation\" name=\"Affiliation\"><option value=\"\">Please select</option>\n    <option value=\"ATP\">ATP</option>\n    <option value=\"WTA\">WTA</option>\n    <option value=\"ITF\">ITF</option>\n    <option value=\"None\">None</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field hidden affiliation-hidden\">\n            <label class=\"required\">IPIN / Playerzone ID</label>\n            <div class=\"input\">\n                <input class=\"required\" id=\"IDNumber\" name=\"IDNumber\" type=\"text\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field form__field--submit\">\n            <span class=\"button button--next\">\n                <a href=\"\">\n                    Next\n                    <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                        <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                            <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                        </g>\n                        <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                    </svg>\n                </a>\n            </span>\n        </div>\n    </div>\n    <div class=\"form\">\n        <div class=\"form__field\">\n            <label class=\"required\">What type of activity are you reporting?</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Select</div>\n                <select class=\"required\" id=\"EnquiryType\" name=\"EnquiryType\"><option value=\"\">Please select</option>\n    <option value=\"Corruption\">Corruption</option>\n    <option value=\"Abuse\">Abuse</option>\n    <option value=\"Doping\">Doping</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Did it happen online or in person?</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Select</div>\n                <select class=\"required\" id=\"OnlineOrPerson\" name=\"OnlineOrPerson\"><option value=\"\">Please select</option>\n    <option value=\"Online\">Online</option>\n    <option value=\"In person\">In person</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Where did it take place?</label>\n            <div class=\"input\">\n                <input id=\"Where\" name=\"Where\" type=\"text\" value=\"\">\n                <div class=\"form__tooltip\">\n                    e.g name of tournament, tennis club or other location\n                </div>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Specific location</label>\n            <div class=\"input\">\n                <input id=\"Location\" name=\"Location\" type=\"text\" value=\"\">\n                <div class=\"form__tooltip\">\n                    e.g Locker room, court, gym or restaurant\n                </div>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Describe what happened</label>\n            <div class=\"textarea\">\n                <textarea class=\"required\" cols=\"20\" id=\"Message\" name=\"Message\" rows=\"2\"></textarea>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field form__field--submit\">\n            <span class=\"button button--back\">\n                <a href=\"\">\n                    Back\n                    <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                        <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                            <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                        </g>\n                        <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                    </svg>\n                </a>\n            </span>\n            <span class=\"button button--next\">\n                <a href=\"\">\n                    Next\n                    <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                        <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                            <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                        </g>\n                        <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                    </svg>\n                </a>\n            </span>\n        </div>\n    </div>\n    <div class=\"form\">\n        <div class=\"form__field\">\n            <label class=\"required\">When did this happen?</label>\n            <div class=\"input\">\n                <input class=\"required datepicker\" id=\"When\" name=\"When\" type=\"text\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Upload files, eg. screenshot of the issue.</label>\n            <div class=\"textarea\">\n                <input class=\"files\" id=\"Images\" multiple=\"multiple\" name=\"Images\" type=\"file\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Have you reported this to anyone else?</label>\n            <div class=\"radio-required\">\n                <label class=\"inline\" for=\"\">Yes</label>\n                <div class=\"radio\">\n                    <input class=\"reportedto\" id=\"Reported\" name=\"Reported\" type=\"radio\" value=\"True\">\n                    <span></span>\n                </div>\n                <label class=\"inline\" for=\"\">No</label>\n                <div class=\"radio\">\n                    <input checked=\"checked\" class=\"reportedto\" id=\"Reported\" name=\"Reported\" type=\"radio\" value=\"False\">\n                    <span></span>\n                </div>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field hidden reportedto-hidden\">\n            <label>Who did you report this to?</label>\n            <div class=\"input\">\n                <input id=\"ReportedTo\" name=\"ReportedTo\" type=\"text\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>We\u2019re all done, would you like a receipt of this report?</label>\n            <label class=\"inline\" for=\"\">Yes</label>\n            <div class=\"radio\">\n                <input id=\"Receipt\" name=\"Receipt\" type=\"radio\" value=\"True\">\n                <span></span>\n            </div>\n            <label class=\"inline\" for=\"\">No</label>\n            <div class=\"radio\">\n                <input checked=\"checked\" id=\"Receipt\" name=\"Receipt\" type=\"radio\" value=\"False\">\n                <span></span>\n            </div>\n        </div>\n        <div class=\"form__field form__field--submit\">\n            <span class=\"button button--back\">\n                <a href=\"\">\n                    Back\n                    <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                        <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                            <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                        </g>\n                        <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                    </svg>\n                </a>\n            </span>\n            <button class=\"button button--submit\" type=\"submit\">\n                Submit\n                <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                    <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                        <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                    </g>\n                    <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                </svg>\n            </button>\n        </div>\n    </div>\n    <input name=\"ufprt\" type=\"hidden\" value=\"729E9D4DBAD817B4905CA8DE35273B8715F13F0E54FC1E3186F1EC393B1B12145A2DB31EA715F3AACEB8BB63B5CDE741155E93ACA641FA6A4C253BF0A670E17319243FF860BD93419956955A6ABB08C4AC8DB756249C978D2D7EF94EED2F3678A948162AEFD9A026972BDC8DD019DB93485B9A8A28F5CCB26D5903EDCE9304A5\"></form>";
  } else if (i === 'doping') {
    return "<form action=\"/contact/\" enctype=\"multipart/form-data\" method=\"post\" data-post=\"reportformapi\">    <div class=\"form\">\n        <div class=\"form__field\">\n            <label class=\"required\">Full name</label>\n            <div class=\"input\">\n                <input class=\"required\" id=\"Name\" name=\"Name\" type=\"text\" value=\"\">\n                <div class=\"form__tooltip\">\n                    eg. John Smith\n                </div>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Email address</label>\n            <div class=\"input\">\n                <input class=\"email required\" id=\"Mad\" name=\"Mad\" type=\"email\" value=\"\">\n                <input class=\"fvd\" id=\"Email\" name=\"Email\" type=\"email\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Country of residence</label>\n            <div class=\"select\">\n                <div class=\"select__text\">United Kingdom</div>\n                <select id=\"Country\" name=\"Country\"><option value=\"\">Please select</option>\n    <option value=\"Afganistan\">Afghanistan</option>\n    <option value=\"Albania\">Albania</option>\n    <option value=\"Algeria\">Algeria</option>\n    <option value=\"American Samoa\">American Samoa</option>\n    <option value=\"Andorra\">Andorra</option>\n    <option value=\"Angola\">Angola</option>\n    <option value=\"Anguilla\">Anguilla</option>\n    <option value=\"Antigua &amp; Barbuda\">Antigua &amp; Barbuda</option>\n    <option value=\"Argentina\">Argentina</option>\n    <option value=\"Armenia\">Armenia</option>\n    <option value=\"Aruba\">Aruba</option>\n    <option value=\"Australia\">Australia</option>\n    <option value=\"Austria\">Austria</option>\n    <option value=\"Azerbaijan\">Azerbaijan</option>\n    <option value=\"Bahamas\">Bahamas</option>\n    <option value=\"Bahrain\">Bahrain</option>\n    <option value=\"Bangladesh\">Bangladesh</option>\n    <option value=\"Barbados\">Barbados</option>\n    <option value=\"Belarus\">Belarus</option>\n    <option value=\"Belgium\">Belgium</option>\n    <option value=\"Belize\">Belize</option>\n    <option value=\"Benin\">Benin</option>\n    <option value=\"Bermuda\">Bermuda</option>\n    <option value=\"Bhutan\">Bhutan</option>\n    <option value=\"Bolivia\">Bolivia</option>\n    <option value=\"Bonaire\">Bonaire</option>\n    <option value=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina</option>\n    <option value=\"Botswana\">Botswana</option>\n    <option value=\"Brazil\">Brazil</option>\n    <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\n    <option value=\"Brunei\">Brunei</option>\n    <option value=\"Bulgaria\">Bulgaria</option>\n    <option value=\"Burkina Faso\">Burkina Faso</option>\n    <option value=\"Burundi\">Burundi</option>\n    <option value=\"Cambodia\">Cambodia</option>\n    <option value=\"Cameroon\">Cameroon</option>\n    <option value=\"Canada\">Canada</option>\n    <option value=\"Canary Islands\">Canary Islands</option>\n    <option value=\"Cape Verde\">Cape Verde</option>\n    <option value=\"Cayman Islands\">Cayman Islands</option>\n    <option value=\"Central African Republic\">Central African Republic</option>\n    <option value=\"Chad\">Chad</option>\n    <option value=\"Channel Islands\">Channel Islands</option>\n    <option value=\"Chile\">Chile</option>\n    <option value=\"China\">China</option>\n    <option value=\"Christmas Island\">Christmas Island</option>\n    <option value=\"Cocos Island\">Cocos Island</option>\n    <option value=\"Colombia\">Colombia</option>\n    <option value=\"Comoros\">Comoros</option>\n    <option value=\"Congo\">Congo</option>\n    <option value=\"Cook Islands\">Cook Islands</option>\n    <option value=\"Costa Rica\">Costa Rica</option>\n    <option value=\"Cote DIvoire\">Cote DIvoire</option>\n    <option value=\"Croatia\">Croatia</option>\n    <option value=\"Cuba\">Cuba</option>\n    <option value=\"Curaco\">Curacao</option>\n    <option value=\"Cyprus\">Cyprus</option>\n    <option value=\"Czech Republic\">Czech Republic</option>\n    <option value=\"Denmark\">Denmark</option>\n    <option value=\"Djibouti\">Djibouti</option>\n    <option value=\"Dominica\">Dominica</option>\n    <option value=\"Dominican Republic\">Dominican Republic</option>\n    <option value=\"East Timor\">East Timor</option>\n    <option value=\"Ecuador\">Ecuador</option>\n    <option value=\"Egypt\">Egypt</option>\n    <option value=\"El Salvador\">El Salvador</option>\n    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n    <option value=\"Eritrea\">Eritrea</option>\n    <option value=\"Estonia\">Estonia</option>\n    <option value=\"Ethiopia\">Ethiopia</option>\n    <option value=\"Falkland Islands\">Falkland Islands</option>\n    <option value=\"Faroe Islands\">Faroe Islands</option>\n    <option value=\"Fiji\">Fiji</option>\n    <option value=\"Finland\">Finland</option>\n    <option value=\"France\">France</option>\n    <option value=\"French Guiana\">French Guiana</option>\n    <option value=\"French Polynesia\">French Polynesia</option>\n    <option value=\"French Southern Ter\">French Southern Ter</option>\n    <option value=\"Gabon\">Gabon</option>\n    <option value=\"Gambia\">Gambia</option>\n    <option value=\"Georgia\">Georgia</option>\n    <option value=\"Germany\">Germany</option>\n    <option value=\"Ghana\">Ghana</option>\n    <option value=\"Gibraltar\">Gibraltar</option>\n    <option value=\"Great Britain\">Great Britain</option>\n    <option value=\"Greece\">Greece</option>\n    <option value=\"Greenland\">Greenland</option>\n    <option value=\"Grenada\">Grenada</option>\n    <option value=\"Guadeloupe\">Guadeloupe</option>\n    <option value=\"Guam\">Guam</option>\n    <option value=\"Guatemala\">Guatemala</option>\n    <option value=\"Guinea\">Guinea</option>\n    <option value=\"Guyana\">Guyana</option>\n    <option value=\"Haiti\">Haiti</option>\n    <option value=\"Hawaii\">Hawaii</option>\n    <option value=\"Honduras\">Honduras</option>\n    <option value=\"Hong Kong\">Hong Kong</option>\n    <option value=\"Hungary\">Hungary</option>\n    <option value=\"Iceland\">Iceland</option>\n    <option value=\"Indonesia\">Indonesia</option>\n    <option value=\"India\">India</option>\n    <option value=\"Iran\">Iran</option>\n    <option value=\"Iraq\">Iraq</option>\n    <option value=\"Ireland\">Ireland</option>\n    <option value=\"Isle of Man\">Isle of Man</option>\n    <option value=\"Israel\">Israel</option>\n    <option value=\"Italy\">Italy</option>\n    <option value=\"Jamaica\">Jamaica</option>\n    <option value=\"Japan\">Japan</option>\n    <option value=\"Jordan\">Jordan</option>\n    <option value=\"Kazakhstan\">Kazakhstan</option>\n    <option value=\"Kenya\">Kenya</option>\n    <option value=\"Kiribati\">Kiribati</option>\n    <option value=\"Korea North\">Korea North</option>\n    <option value=\"Korea Sout\">Korea South</option>\n    <option value=\"Kuwait\">Kuwait</option>\n    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n    <option value=\"Laos\">Laos</option>\n    <option value=\"Latvia\">Latvia</option>\n    <option value=\"Lebanon\">Lebanon</option>\n    <option value=\"Lesotho\">Lesotho</option>\n    <option value=\"Liberia\">Liberia</option>\n    <option value=\"Libya\">Libya</option>\n    <option value=\"Liechtenstein\">Liechtenstein</option>\n    <option value=\"Lithuania\">Lithuania</option>\n    <option value=\"Luxembourg\">Luxembourg</option>\n    <option value=\"Macau\">Macau</option>\n    <option value=\"Macedonia\">Macedonia</option>\n    <option value=\"Madagascar\">Madagascar</option>\n    <option value=\"Malaysia\">Malaysia</option>\n    <option value=\"Malawi\">Malawi</option>\n    <option value=\"Maldives\">Maldives</option>\n    <option value=\"Mali\">Mali</option>\n    <option value=\"Malta\">Malta</option>\n    <option value=\"Marshall Islands\">Marshall Islands</option>\n    <option value=\"Martinique\">Martinique</option>\n    <option value=\"Mauritania\">Mauritania</option>\n    <option value=\"Mauritius\">Mauritius</option>\n    <option value=\"Mayotte\">Mayotte</option>\n    <option value=\"Mexico\">Mexico</option>\n    <option value=\"Midway Islands\">Midway Islands</option>\n    <option value=\"Moldova\">Moldova</option>\n    <option value=\"Monaco\">Monaco</option>\n    <option value=\"Mongolia\">Mongolia</option>\n    <option value=\"Montserrat\">Montserrat</option>\n    <option value=\"Morocco\">Morocco</option>\n    <option value=\"Mozambique\">Mozambique</option>\n    <option value=\"Myanmar\">Myanmar</option>\n    <option value=\"Nambia\">Nambia</option>\n    <option value=\"Nauru\">Nauru</option>\n    <option value=\"Nepal\">Nepal</option>\n    <option value=\"Netherland Antilles\">Netherland Antilles</option>\n    <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\n    <option value=\"Nevis\">Nevis</option>\n    <option value=\"New Caledonia\">New Caledonia</option>\n    <option value=\"New Zealand\">New Zealand</option>\n    <option value=\"Nicaragua\">Nicaragua</option>\n    <option value=\"Niger\">Niger</option>\n    <option value=\"Nigeria\">Nigeria</option>\n    <option value=\"Niue\">Niue</option>\n    <option value=\"Norfolk Island\">Norfolk Island</option>\n    <option value=\"Norway\">Norway</option>\n    <option value=\"Oman\">Oman</option>\n    <option value=\"Pakistan\">Pakistan</option>\n    <option value=\"Palau Island\">Palau Island</option>\n    <option value=\"Palestine\">Palestine</option>\n    <option value=\"Panama\">Panama</option>\n    <option value=\"Papua New Guinea\">Papua New Guinea</option>\n    <option value=\"Paraguay\">Paraguay</option>\n    <option value=\"Peru\">Peru</option>\n    <option value=\"Phillipines\">Philippines</option>\n    <option value=\"Pitcairn Island\">Pitcairn Island</option>\n    <option value=\"Poland\">Poland</option>\n    <option value=\"Portugal\">Portugal</option>\n    <option value=\"Puerto Rico\">Puerto Rico</option>\n    <option value=\"Qatar\">Qatar</option>\n    <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\n    <option value=\"Republic of Serbia\">Republic of Serbia</option>\n    <option value=\"Reunion\">Reunion</option>\n    <option value=\"Romania\">Romania</option>\n    <option value=\"Russia\">Russia</option>\n    <option value=\"Rwanda\">Rwanda</option>\n    <option value=\"St Barthelemy\">St Barthelemy</option>\n    <option value=\"St Eustatius\">St Eustatius</option>\n    <option value=\"St Helena\">St Helena</option>\n    <option value=\"St Kitts-Nevis\">St Kitts-Nevis</option>\n    <option value=\"St Lucia\">St Lucia</option>\n    <option value=\"St Maarten\">St Maarten</option>\n    <option value=\"St Pierre &amp; Miquelon\">St Pierre &amp; Miquelon</option>\n    <option value=\"St Vincent &amp; Grenadines\">St Vincent &amp; Grenadines</option>\n    <option value=\"Saipan\">Saipan</option>\n    <option value=\"Samoa\">Samoa</option>\n    <option value=\"Samoa American\">Samoa American</option>\n    <option value=\"San Marino\">San Marino</option>\n    <option value=\"Sao Tome &amp; Principe\">Sao Tome &amp; Principe</option>\n    <option value=\"Saudi Arabia\">Saudi Arabia</option>\n    <option value=\"Senegal\">Senegal</option>\n    <option value=\"Seychelles\">Seychelles</option>\n    <option value=\"Sierra Leone\">Sierra Leone</option>\n    <option value=\"Singapore\">Singapore</option>\n    <option value=\"Slovakia\">Slovakia</option>\n    <option value=\"Slovenia\">Slovenia</option>\n    <option value=\"Solomon Islands\">Solomon Islands</option>\n    <option value=\"Somalia\">Somalia</option>\n    <option value=\"South Africa\">South Africa</option>\n    <option value=\"Spain\">Spain</option>\n    <option value=\"Sri Lanka\">Sri Lanka</option>\n    <option value=\"Sudan\">Sudan</option>\n    <option value=\"Suriname\">Suriname</option>\n    <option value=\"Swaziland\">Swaziland</option>\n    <option value=\"Sweden\">Sweden</option>\n    <option value=\"Switzerland\">Switzerland</option>\n    <option value=\"Syria\">Syria</option>\n    <option value=\"Tahiti\">Tahiti</option>\n    <option value=\"Taiwan\">Taiwan</option>\n    <option value=\"Tajikistan\">Tajikistan</option>\n    <option value=\"Tanzania\">Tanzania</option>\n    <option value=\"Thailand\">Thailand</option>\n    <option value=\"Togo\">Togo</option>\n    <option value=\"Tokelau\">Tokelau</option>\n    <option value=\"Tonga\">Tonga</option>\n    <option value=\"Trinidad &amp; Tobago\">Trinidad &amp; Tobago</option>\n    <option value=\"Tunisia\">Tunisia</option>\n    <option value=\"Turkey\">Turkey</option>\n    <option value=\"Turkmenistan\">Turkmenistan</option>\n    <option value=\"Turks &amp; Caicos Is\">Turks &amp; Caicos Is</option>\n    <option value=\"Tuvalu\">Tuvalu</option>\n    <option value=\"Uganda\">Uganda</option>\n    <option selected=\"selected\" value=\"United Kingdom\">United Kingdom</option>\n    <option value=\"Ukraine\">Ukraine</option>\n    <option value=\"United Arab Erimates\">United Arab Emirates</option>\n    <option value=\"United States of America\">United States of America</option>\n    <option value=\"Uraguay\">Uruguay</option>\n    <option value=\"Uzbekistan\">Uzbekistan</option>\n    <option value=\"Vanuatu\">Vanuatu</option>\n    <option value=\"Vatican City State\">Vatican City State</option>\n    <option value=\"Venezuela\">Venezuela</option>\n    <option value=\"Vietnam\">Vietnam</option>\n    <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\n    <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\n    <option value=\"Wake Island\">Wake Island</option>\n    <option value=\"Wallis &amp; Futana Is\">Wallis &amp; Futana Is</option>\n    <option value=\"Yemen\">Yemen</option>\n    <option value=\"Zaire\">Zaire</option>\n    <option value=\"Zambia\">Zambia</option>\n    <option value=\"Zimbabwe\">Zimbabwe</option>\n    </select>\n                <div class=\"form__message\"></div>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Phone number</label>\n            <div class=\"input\">\n                <input id=\"Phone\" name=\"Phone\" type=\"text\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Contact preference</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Email</div>\n                <select class=\"required\" id=\"ContactPreference\" name=\"ContactPreference\"><option value=\"Email\">Email</option>\n    <option value=\"Phone\">Phone</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field form__field--submit\">\n            <span class=\"button button--next\">\n                <a href=\"\">\n                    Next\n                    <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                        <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                            <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                        </g>\n                        <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                    </svg>\n                </a>\n            </span>\n        </div>\n    </div>\n    <div class=\"form\">\n    <div class=\"form__field\">\n        <label class=\"required\">Please outline your enquiry below</label>\n        <div class=\"textarea\">\n            <textarea class=\"required\" cols=\"20\" id=\"Message\" name=\"Message\" rows=\"2\"></textarea>\n            <div class=\"form__message\"></div>\n        </div>\n    </div>\n    <div class=\"form__field\">\n        <label>We\u2019re all done, would you like a receipt of this report?</label>\n        <label class=\"inline\" for=\"\">Yes</label>\n        <div class=\"radio\">\n            <input id=\"Receipt\" name=\"Receipt\" type=\"radio\" value=\"True\">\n            <span></span>\n        </div>\n        <label class=\"inline\" for=\"\">No</label>\n        <div class=\"radio\">\n            <input checked=\"checked\" id=\"Receipt\" name=\"Receipt\" type=\"radio\" value=\"False\">\n            <span></span>\n        </div>\n    </div>\n    <div class=\"form__field form__field--submit\">\n        <span class=\"button button--back\">\n            <a href=\"\">\n                Back\n                <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                    <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                        <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                    </g>\n                    <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                </svg>\n            </a>\n        </span>\n        <button class=\"button button--submit\" type=\"submit\">\n            Submit\n            <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                    <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                </g>\n                <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n            </svg>\n        </button>\n    </div>\n    </div>\n    <input name=\"ufprt\" type=\"hidden\" value=\"C867FF86C70A5BD901E320CADAD3B9A8803C927D12DC005B7DB27B28B5B87B8469A094C81D9BAEA12A4210537B2665EAF8B8FBDE79DC1451B9D8B56EF8C99B9DE5E86411F8E9CBFCA89A80C8C788D17890D957C2285581022977E166AF88CC4BEBF465DAA2A740E32006F24C6E42DEEA09A9FB1F377A8FB70021B1333BB411E2\"></form>";
  } // else if (i === 'media') {
  // }
  // else if (i === 'education') {
  // }
  // else if (i === 'product') {
  // }
  else {
    return "<form action=\"/contact/\" enctype=\"multipart/form-data\" method=\"post\" data-post=\"generalformapi\">    <div class=\"form\">\n        <div class=\"form__field\">\n            <label class=\"required\">In what capacity are you involved in Tennis?</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Select</div>\n                <select class=\"required capacity\" id=\"UserType\" name=\"UserType\"><option value=\"\">Please select</option>\n    <option value=\"Player\">Player</option>\n    <option value=\"Coach\">Coach</option>\n    <option value=\"Official\">Official</option>\n    <option value=\"Staff\">Staff</option>\n    <option value=\"Other\">Other</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Full name</label>\n            <div class=\"input\">\n                <input class=\"required\" id=\"Name\" name=\"Name\" type=\"text\" value=\"\">\n                <div class=\"form__tooltip\">\n                    eg. John Smith\n                </div>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label class=\"required\">Email address</label>\n            <div class=\"input\">\n                <input class=\"email required\" id=\"Mad\" name=\"Mad\" type=\"email\" value=\"\">\n                <input class=\"fvd\" id=\"Email\" name=\"Email\" type=\"email\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Country of residence</label>\n            <div class=\"select\">\n                <div class=\"select__text\">United Kingdom</div>\n                <select id=\"Country\" name=\"Country\"><option value=\"\">Please select</option>\n    <option value=\"Afganistan\">Afghanistan</option>\n    <option value=\"Albania\">Albania</option>\n    <option value=\"Algeria\">Algeria</option>\n    <option value=\"American Samoa\">American Samoa</option>\n    <option value=\"Andorra\">Andorra</option>\n    <option value=\"Angola\">Angola</option>\n    <option value=\"Anguilla\">Anguilla</option>\n    <option value=\"Antigua &amp; Barbuda\">Antigua &amp; Barbuda</option>\n    <option value=\"Argentina\">Argentina</option>\n    <option value=\"Armenia\">Armenia</option>\n    <option value=\"Aruba\">Aruba</option>\n    <option value=\"Australia\">Australia</option>\n    <option value=\"Austria\">Austria</option>\n    <option value=\"Azerbaijan\">Azerbaijan</option>\n    <option value=\"Bahamas\">Bahamas</option>\n    <option value=\"Bahrain\">Bahrain</option>\n    <option value=\"Bangladesh\">Bangladesh</option>\n    <option value=\"Barbados\">Barbados</option>\n    <option value=\"Belarus\">Belarus</option>\n    <option value=\"Belgium\">Belgium</option>\n    <option value=\"Belize\">Belize</option>\n    <option value=\"Benin\">Benin</option>\n    <option value=\"Bermuda\">Bermuda</option>\n    <option value=\"Bhutan\">Bhutan</option>\n    <option value=\"Bolivia\">Bolivia</option>\n    <option value=\"Bonaire\">Bonaire</option>\n    <option value=\"Bosnia &amp; Herzegovina\">Bosnia &amp; Herzegovina</option>\n    <option value=\"Botswana\">Botswana</option>\n    <option value=\"Brazil\">Brazil</option>\n    <option value=\"British Indian Ocean Ter\">British Indian Ocean Ter</option>\n    <option value=\"Brunei\">Brunei</option>\n    <option value=\"Bulgaria\">Bulgaria</option>\n    <option value=\"Burkina Faso\">Burkina Faso</option>\n    <option value=\"Burundi\">Burundi</option>\n    <option value=\"Cambodia\">Cambodia</option>\n    <option value=\"Cameroon\">Cameroon</option>\n    <option value=\"Canada\">Canada</option>\n    <option value=\"Canary Islands\">Canary Islands</option>\n    <option value=\"Cape Verde\">Cape Verde</option>\n    <option value=\"Cayman Islands\">Cayman Islands</option>\n    <option value=\"Central African Republic\">Central African Republic</option>\n    <option value=\"Chad\">Chad</option>\n    <option value=\"Channel Islands\">Channel Islands</option>\n    <option value=\"Chile\">Chile</option>\n    <option value=\"China\">China</option>\n    <option value=\"Christmas Island\">Christmas Island</option>\n    <option value=\"Cocos Island\">Cocos Island</option>\n    <option value=\"Colombia\">Colombia</option>\n    <option value=\"Comoros\">Comoros</option>\n    <option value=\"Congo\">Congo</option>\n    <option value=\"Cook Islands\">Cook Islands</option>\n    <option value=\"Costa Rica\">Costa Rica</option>\n    <option value=\"Cote DIvoire\">Cote DIvoire</option>\n    <option value=\"Croatia\">Croatia</option>\n    <option value=\"Cuba\">Cuba</option>\n    <option value=\"Curaco\">Curacao</option>\n    <option value=\"Cyprus\">Cyprus</option>\n    <option value=\"Czech Republic\">Czech Republic</option>\n    <option value=\"Denmark\">Denmark</option>\n    <option value=\"Djibouti\">Djibouti</option>\n    <option value=\"Dominica\">Dominica</option>\n    <option value=\"Dominican Republic\">Dominican Republic</option>\n    <option value=\"East Timor\">East Timor</option>\n    <option value=\"Ecuador\">Ecuador</option>\n    <option value=\"Egypt\">Egypt</option>\n    <option value=\"El Salvador\">El Salvador</option>\n    <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n    <option value=\"Eritrea\">Eritrea</option>\n    <option value=\"Estonia\">Estonia</option>\n    <option value=\"Ethiopia\">Ethiopia</option>\n    <option value=\"Falkland Islands\">Falkland Islands</option>\n    <option value=\"Faroe Islands\">Faroe Islands</option>\n    <option value=\"Fiji\">Fiji</option>\n    <option value=\"Finland\">Finland</option>\n    <option value=\"France\">France</option>\n    <option value=\"French Guiana\">French Guiana</option>\n    <option value=\"French Polynesia\">French Polynesia</option>\n    <option value=\"French Southern Ter\">French Southern Ter</option>\n    <option value=\"Gabon\">Gabon</option>\n    <option value=\"Gambia\">Gambia</option>\n    <option value=\"Georgia\">Georgia</option>\n    <option value=\"Germany\">Germany</option>\n    <option value=\"Ghana\">Ghana</option>\n    <option value=\"Gibraltar\">Gibraltar</option>\n    <option value=\"Great Britain\">Great Britain</option>\n    <option value=\"Greece\">Greece</option>\n    <option value=\"Greenland\">Greenland</option>\n    <option value=\"Grenada\">Grenada</option>\n    <option value=\"Guadeloupe\">Guadeloupe</option>\n    <option value=\"Guam\">Guam</option>\n    <option value=\"Guatemala\">Guatemala</option>\n    <option value=\"Guinea\">Guinea</option>\n    <option value=\"Guyana\">Guyana</option>\n    <option value=\"Haiti\">Haiti</option>\n    <option value=\"Hawaii\">Hawaii</option>\n    <option value=\"Honduras\">Honduras</option>\n    <option value=\"Hong Kong\">Hong Kong</option>\n    <option value=\"Hungary\">Hungary</option>\n    <option value=\"Iceland\">Iceland</option>\n    <option value=\"Indonesia\">Indonesia</option>\n    <option value=\"India\">India</option>\n    <option value=\"Iran\">Iran</option>\n    <option value=\"Iraq\">Iraq</option>\n    <option value=\"Ireland\">Ireland</option>\n    <option value=\"Isle of Man\">Isle of Man</option>\n    <option value=\"Israel\">Israel</option>\n    <option value=\"Italy\">Italy</option>\n    <option value=\"Jamaica\">Jamaica</option>\n    <option value=\"Japan\">Japan</option>\n    <option value=\"Jordan\">Jordan</option>\n    <option value=\"Kazakhstan\">Kazakhstan</option>\n    <option value=\"Kenya\">Kenya</option>\n    <option value=\"Kiribati\">Kiribati</option>\n    <option value=\"Korea North\">Korea North</option>\n    <option value=\"Korea Sout\">Korea South</option>\n    <option value=\"Kuwait\">Kuwait</option>\n    <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n    <option value=\"Laos\">Laos</option>\n    <option value=\"Latvia\">Latvia</option>\n    <option value=\"Lebanon\">Lebanon</option>\n    <option value=\"Lesotho\">Lesotho</option>\n    <option value=\"Liberia\">Liberia</option>\n    <option value=\"Libya\">Libya</option>\n    <option value=\"Liechtenstein\">Liechtenstein</option>\n    <option value=\"Lithuania\">Lithuania</option>\n    <option value=\"Luxembourg\">Luxembourg</option>\n    <option value=\"Macau\">Macau</option>\n    <option value=\"Macedonia\">Macedonia</option>\n    <option value=\"Madagascar\">Madagascar</option>\n    <option value=\"Malaysia\">Malaysia</option>\n    <option value=\"Malawi\">Malawi</option>\n    <option value=\"Maldives\">Maldives</option>\n    <option value=\"Mali\">Mali</option>\n    <option value=\"Malta\">Malta</option>\n    <option value=\"Marshall Islands\">Marshall Islands</option>\n    <option value=\"Martinique\">Martinique</option>\n    <option value=\"Mauritania\">Mauritania</option>\n    <option value=\"Mauritius\">Mauritius</option>\n    <option value=\"Mayotte\">Mayotte</option>\n    <option value=\"Mexico\">Mexico</option>\n    <option value=\"Midway Islands\">Midway Islands</option>\n    <option value=\"Moldova\">Moldova</option>\n    <option value=\"Monaco\">Monaco</option>\n    <option value=\"Mongolia\">Mongolia</option>\n    <option value=\"Montserrat\">Montserrat</option>\n    <option value=\"Morocco\">Morocco</option>\n    <option value=\"Mozambique\">Mozambique</option>\n    <option value=\"Myanmar\">Myanmar</option>\n    <option value=\"Nambia\">Nambia</option>\n    <option value=\"Nauru\">Nauru</option>\n    <option value=\"Nepal\">Nepal</option>\n    <option value=\"Netherland Antilles\">Netherland Antilles</option>\n    <option value=\"Netherlands\">Netherlands (Holland, Europe)</option>\n    <option value=\"Nevis\">Nevis</option>\n    <option value=\"New Caledonia\">New Caledonia</option>\n    <option value=\"New Zealand\">New Zealand</option>\n    <option value=\"Nicaragua\">Nicaragua</option>\n    <option value=\"Niger\">Niger</option>\n    <option value=\"Nigeria\">Nigeria</option>\n    <option value=\"Niue\">Niue</option>\n    <option value=\"Norfolk Island\">Norfolk Island</option>\n    <option value=\"Norway\">Norway</option>\n    <option value=\"Oman\">Oman</option>\n    <option value=\"Pakistan\">Pakistan</option>\n    <option value=\"Palau Island\">Palau Island</option>\n    <option value=\"Palestine\">Palestine</option>\n    <option value=\"Panama\">Panama</option>\n    <option value=\"Papua New Guinea\">Papua New Guinea</option>\n    <option value=\"Paraguay\">Paraguay</option>\n    <option value=\"Peru\">Peru</option>\n    <option value=\"Phillipines\">Philippines</option>\n    <option value=\"Pitcairn Island\">Pitcairn Island</option>\n    <option value=\"Poland\">Poland</option>\n    <option value=\"Portugal\">Portugal</option>\n    <option value=\"Puerto Rico\">Puerto Rico</option>\n    <option value=\"Qatar\">Qatar</option>\n    <option value=\"Republic of Montenegro\">Republic of Montenegro</option>\n    <option value=\"Republic of Serbia\">Republic of Serbia</option>\n    <option value=\"Reunion\">Reunion</option>\n    <option value=\"Romania\">Romania</option>\n    <option value=\"Russia\">Russia</option>\n    <option value=\"Rwanda\">Rwanda</option>\n    <option value=\"St Barthelemy\">St Barthelemy</option>\n    <option value=\"St Eustatius\">St Eustatius</option>\n    <option value=\"St Helena\">St Helena</option>\n    <option value=\"St Kitts-Nevis\">St Kitts-Nevis</option>\n    <option value=\"St Lucia\">St Lucia</option>\n    <option value=\"St Maarten\">St Maarten</option>\n    <option value=\"St Pierre &amp; Miquelon\">St Pierre &amp; Miquelon</option>\n    <option value=\"St Vincent &amp; Grenadines\">St Vincent &amp; Grenadines</option>\n    <option value=\"Saipan\">Saipan</option>\n    <option value=\"Samoa\">Samoa</option>\n    <option value=\"Samoa American\">Samoa American</option>\n    <option value=\"San Marino\">San Marino</option>\n    <option value=\"Sao Tome &amp; Principe\">Sao Tome &amp; Principe</option>\n    <option value=\"Saudi Arabia\">Saudi Arabia</option>\n    <option value=\"Senegal\">Senegal</option>\n    <option value=\"Seychelles\">Seychelles</option>\n    <option value=\"Sierra Leone\">Sierra Leone</option>\n    <option value=\"Singapore\">Singapore</option>\n    <option value=\"Slovakia\">Slovakia</option>\n    <option value=\"Slovenia\">Slovenia</option>\n    <option value=\"Solomon Islands\">Solomon Islands</option>\n    <option value=\"Somalia\">Somalia</option>\n    <option value=\"South Africa\">South Africa</option>\n    <option value=\"Spain\">Spain</option>\n    <option value=\"Sri Lanka\">Sri Lanka</option>\n    <option value=\"Sudan\">Sudan</option>\n    <option value=\"Suriname\">Suriname</option>\n    <option value=\"Swaziland\">Swaziland</option>\n    <option value=\"Sweden\">Sweden</option>\n    <option value=\"Switzerland\">Switzerland</option>\n    <option value=\"Syria\">Syria</option>\n    <option value=\"Tahiti\">Tahiti</option>\n    <option value=\"Taiwan\">Taiwan</option>\n    <option value=\"Tajikistan\">Tajikistan</option>\n    <option value=\"Tanzania\">Tanzania</option>\n    <option value=\"Thailand\">Thailand</option>\n    <option value=\"Togo\">Togo</option>\n    <option value=\"Tokelau\">Tokelau</option>\n    <option value=\"Tonga\">Tonga</option>\n    <option value=\"Trinidad &amp; Tobago\">Trinidad &amp; Tobago</option>\n    <option value=\"Tunisia\">Tunisia</option>\n    <option value=\"Turkey\">Turkey</option>\n    <option value=\"Turkmenistan\">Turkmenistan</option>\n    <option value=\"Turks &amp; Caicos Is\">Turks &amp; Caicos Is</option>\n    <option value=\"Tuvalu\">Tuvalu</option>\n    <option value=\"Uganda\">Uganda</option>\n    <option selected=\"selected\" value=\"United Kingdom\">United Kingdom</option>\n    <option value=\"Ukraine\">Ukraine</option>\n    <option value=\"United Arab Erimates\">United Arab Emirates</option>\n    <option value=\"United States of America\">United States of America</option>\n    <option value=\"Uraguay\">Uruguay</option>\n    <option value=\"Uzbekistan\">Uzbekistan</option>\n    <option value=\"Vanuatu\">Vanuatu</option>\n    <option value=\"Vatican City State\">Vatican City State</option>\n    <option value=\"Venezuela\">Venezuela</option>\n    <option value=\"Vietnam\">Vietnam</option>\n    <option value=\"Virgin Islands (Brit)\">Virgin Islands (Brit)</option>\n    <option value=\"Virgin Islands (USA)\">Virgin Islands (USA)</option>\n    <option value=\"Wake Island\">Wake Island</option>\n    <option value=\"Wallis &amp; Futana Is\">Wallis &amp; Futana Is</option>\n    <option value=\"Yemen\">Yemen</option>\n    <option value=\"Zaire\">Zaire</option>\n    <option value=\"Zambia\">Zambia</option>\n    <option value=\"Zimbabwe\">Zimbabwe</option>\n    </select>\n                <div class=\"form__message\"></div>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Phone number</label>\n            <div class=\"input\">\n                <input id=\"Phone\" name=\"Phone\" type=\"text\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field\">\n            <label>Contact preference</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Email</div>\n                <select class=\"required\" id=\"ContactPreference\" name=\"ContactPreference\"><option value=\"Email\">Email</option>\n    <option value=\"Phone\">Phone</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field hidden capacity-hidden\">\n            <label class=\"required\">Tour affiliation</label>\n            <div class=\"select\">\n                <div class=\"select__text\">Select</div>\n                <select class=\"required affiliation\" id=\"Affiliation\" name=\"Affiliation\"><option value=\"\">Please select</option>\n    <option value=\"ATP\">ATP</option>\n    <option value=\"WTA\">WTA</option>\n    <option value=\"ITF\">ITF</option>\n    <option value=\"None\">None</option>\n    </select>\n                <svg class=\"select__arrow\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\"></path>\n                </svg>\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field hidden affiliation-hidden\">\n            <label class=\"required\">IPIN / Playerzone ID</label>\n            <div class=\"input\">\n                <input class=\"required\" id=\"IDNumber\" name=\"IDNumber\" type=\"text\" value=\"\">\n                <div class=\"form__message\"></div>\n            </div>\n        </div>\n        <div class=\"form__field form__field--submit\">\n            <span class=\"button button--next\">\n                <a href=\"\">\n                    Next\n                    <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                        <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                            <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                        </g>\n                        <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                    </svg>\n                </a>\n            </span>\n        </div>\n    </div>\n    <div class=\"form\">\n    <div class=\"form__field\">\n        <label class=\"required\">Please outline your enquiry below</label>\n        <div class=\"textarea\">\n            <textarea class=\"required\" cols=\"20\" id=\"Message\" name=\"Message\" rows=\"2\"></textarea>\n            <div class=\"form__message\"></div>\n        </div>\n    </div>\n    <div class=\"form__field\">\n        <label>We\u2019re all done, would you like a receipt of this report?</label>\n        <label class=\"inline\" for=\"\">Yes</label>\n        <div class=\"radio\">\n            <input id=\"Receipt\" name=\"Receipt\" type=\"radio\" value=\"True\">\n            <span></span>\n        </div>\n        <label class=\"inline\" for=\"\">No</label>\n        <div class=\"radio\">\n            <input checked=\"checked\" id=\"Receipt\" name=\"Receipt\" type=\"radio\" value=\"False\">\n            <span></span>\n        </div>\n    </div>\n    <div class=\"form__field form__field--submit\">\n        <span class=\"button button--back\">\n            <a href=\"\">\n                Back\n                <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                    <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                        <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                    </g>\n                    <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n                </svg>\n            </a>\n        </span>\n        <button class=\"button button--submit\" type=\"submit\">\n            Submit\n            <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                    <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                </g>\n                <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n            </svg>\n        </button>\n    </div>\n    </div>\n    <input name=\"ufprt\" type=\"hidden\" value=\"92618DF33B16BFDCFABA1E5247C0913B2AC33B0848854C4DEC5B38DE061A361BC063FDF69932B722E4445FDD128E4C7D1697F4A1A144C87067A55D1EE10BF55CFA3E1B6CC3D099A51A341072E29A5D80DD2EB79F9146B3D59697A650F8AA021824E4660BB7EE4B45977E09FF3119BE63676A8E6748B2D35AF077373E465B14F8\"></form>";
  }
};

var renderContentPage = function renderContentPage(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.content-intro');

  if (content) {
    content.innerHTML = data.Properties.find(function (m) {
      return m.Name === 'content';
    }).Content;
  }

  content = document.querySelector('.content-areas');

  if (content) {
    var contentAreas = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'contentNested';
    }).Content);

    if (contentAreas) {
      content.innerHTML = renderContentAreas(contentAreas);
    }
  }

  setAccordion();
  setSelects();
  setPageDefaults();
};
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


var websiteUrl = 'https://itiawebsite-itiastaging.azurewebsites.net';
var url = '';
var lang = window.localStorage.getItem('lang') === null ? 'en' : window.localStorage.getItem('lang');
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  //document.getElementById('deviceready').classList.add('ready')
  console.log('Page loaded');
  var windowUrl = window.location.href.split('?url=')[1];
  var content = window.localStorage.getItem('content'); // if (content) {
  //   const data = JSON.parse(content)
  //   if (windowUrl) {
  //     url = windowUrl
  //     httpGet('https://itiawebsite-itiastaging.azurewebsites.net/umbraco/api/contentapi/GetPage?url=' + windowUrl)
  //   } else {
  //     loadPage(content)
  //   }
  // } else {
  //   httpGet('https://itiawebsite-itiastaging.azurewebsites.net/umbraco/api/contentapi/GetHome')
  // }

  if (content) {
    var data = JSON.parse(content);

    if (data.Type === "homepage") {
      loadPage(content);
    } else {
      httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + lang);
    }
  } else {
    httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + lang);
  }
}

var httpGetPage = function httpGetPage(theUrl) {
  console.log('Start get page');
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false);

  xmlHttp.onload = function () {
    document.querySelector('.content-container').innerHTML = xmlHttp.responseText;
    document.querySelector('.loading').classList.add('hidden');
    renderData();
  };

  xmlHttp.send(null);
};

var httpGet = function httpGet(theUrl) {
  console.log('Start get data');
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false);

  xmlHttp.onload = function () {
    console.log('Data loaded');
    loadPage(xmlHttp.response);
  };

  xmlHttp.ontimeout = function () {
    console.log('Data error - timeout');
  };

  xmlHttp.onerror = function () {
    console.log('Data error - client');
  };

  xmlHttp.send(null);
};

var loadPage = function loadPage(xdata) {
  var data = JSON.parse(xdata);
  data.Url = url;

  if (data.ExceptionMessage) {
    console.log('Data error - server');
  }

  window.localStorage.setItem('content', JSON.stringify(data));
  httpGetPage("".concat(data.Type, ".html"));
};

var renderData = function renderData() {
  console.log('Data parsed!');
  var content = window.localStorage.getItem('content');
  var data = JSON.parse(content);
  console.log(data);
  window.scrollTo(0, 0);
  var chatOpen = document.querySelector('.chat');

  if (chatOpen) {
    chatOpen.classList.remove('chat');
  }

  if (data.Type === "homepage") {
    renderLayout(data);
    renderHome(data);
  }

  renderContent(data);

  if (data.Type === "about" || data.Type === "tadp") {
    renderAbout(data);
  }

  if (data.Type === "tACP" || data.Type === "tACP1") {
    renderTacp(data);
  }

  if (data.Type === "learn") {
    renderLearn(data);
  }

  if (data.Type === "partners") {
    renderPartners(data);
  }

  if (data.Type === "caseStudies") {
    renderCaseStudies(data);
  }

  if (data.Type === "sanctions") {
    renderSanctions(data);
  }

  if (data.Type === "retirements") {
    renderRetirements(data);
  }

  if (data.Type === "contact") {
    renderContact(data);
  }

  if (data.Type === "contentPage") {
    renderContentPage(data);
  }

  if (data.Type === "rules") {
    renderRules(data);
  }

  if (data.Type === "history") {
    renderHistory(data);
  }

  if (data.Type === "news") {
    renderNews(data);
  }

  if (data.Type === "investigation") {
    renderInvestigation(data);
  }

  if (data.Type === "newsCategory") {
    renderNewsCategory(data);
  }

  if (data.Type === "article") {
    renderArticle(data);
  }

  if (data.Type === "fAQs") {
    renderFaqs(data);
  }
};

var renderLayout = function renderLayout(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.menu');
  data.Menu.forEach(function (e) {
    if (e.SubPages.length) {
      var subPageHtml = '';
      e.SubPages.forEach(function (page) {
        subPageHtml += "<li class=\"submenu__item\">\n          <a href=\"".concat(page.Url, "\">").concat(page.Name, "</a>\n        </li>");
      });
      var subHtml = "<ul class=\"submenu\">\n          <li class=\"submenu__item\">\n              <a href=\"".concat(e.Url, "\">").concat(e.Name, " home</a>\n          </li>\n          ").concat(subPageHtml, "\n      </ul>");
      html += "<li class=\"menu__item\"><span>\n          ".concat(e.Name, "\n          <svg class=\"menu__icon\" id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n              <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#235773\" />\n          </svg>\n      </span>").concat(subHtml, "</li>");
    } else {
      html += "<li class=\"menu__item\"><a href=\"".concat(e.Url, "\">").concat(e.Name, "</a></li>");
    }
  });
  content.innerHTML = html;
  registerLinks(content);
  content = document.querySelector('.partners__inner');
  html = '<h2 class="title partners__title small">On behalf of our partners</h2>';
  array = data.Properties.find(function (m) {
    return m.Name === 'partners';
  }).Content.split(',');
  array.forEach(function (e) {
    html += "<img class=\"partners__logo\" src=\"".concat(websiteUrl + e, "\" />");
  });
  content.innerHTML = html;
};

var renderContent = function renderContent(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.banner__background');

  if (content) {
    var image = data.Properties.find(function (m) {
      return m.Name === 'image';
    }).Content;

    if (image) {
      content.style.backgroundImage = "url('".concat(websiteUrl + image, "?anchor=center&mode=crop&width=767')");
    }
  }

  content = document.querySelector('.banner__content .title');

  if (content) {
    html = data.Properties.find(function (m) {
      return m.Name === 'title';
    }).Content;
    content.innerHTML = html;
  }

  content = document.querySelector('.banner__subtitle');

  if (content) {
    var subtitle = data.Properties.find(function (m) {
      return m.Name === 'subtitle';
    }).Content;

    if (subtitle) {
      html = subtitle.replace("{{date}}", getDate());
      content.innerHTML = html;
    }
  }

  setPageDefaults();
};

var registerLinks = function registerLinks(container) {
  container.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      url = link.getAttribute('href');

      if (url === '#' || !url) {// null
      } else if (url.indexOf('http') > -1) {
        cordova.InAppBrowser.open(url, '_system', 'location=yes');
      } else if (url.indexOf('/media/') > -1) {
        cordova.InAppBrowser.open(url, '_system', 'location=yes');
      } else {
        console.log('Launching request...');
        document.querySelector('.loading').classList.remove('hidden');

        if (!url || url === '/') {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + lang);
        } else {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetPage?lang=' + lang + '&url=' + url);
        }

        setTimeout(function () {
          document.querySelector('.loading').classList.add('hidden');
        }, 10000);
      }

      if (container && container.classList && container.classList.contains('menu')) {
        var menuOpen = document.querySelector('.menu--active');

        if (menuOpen) {
          menuOpen.classList.remove('menu--active');
          document.querySelector('.header__burger').classList.remove('header__burger--active');
        }
      }
    });
  });
};

var setPageDefaults = function setPageDefaults() {
  var content = document.querySelector('.content-container');
  registerLinks(content);
  var datepickers = document.querySelectorAll('.datepicker');
  datepickers.forEach(function (datepicker, i) {
    new Pikaday({
      field: datepicker
    });
  });
};

registerLinks(document);

var renderFaqs = function renderFaqs(data) {
  var content = '';
  var html = '';
  var accordion = JSON.parse(data.Properties.find(function (m) {
    return m.Name === 'accordion';
  }).Content)[0];
  var accordionItems = JSON.parse(accordion.accordionList);
  content = document.querySelector('.accordion__title');

  if (content) {
    content.innerHTML = accordion.title;
  }

  content = document.querySelector('.accordion__items');

  if (content) {
    html = '';
    accordionItems.forEach(function (e) {
      var categories = JSON.parse(e.category);

      if (categories && categories.length) {
        categories = "accordion__item--".concat(categories[0]);
      }

      html += "<div class=\"accordion__item ".concat(categories, "\">\n            <div class=\"accordion__item-title\">\n                <a class=\"accordion__link\" href=\"\"></a>\n                <span class=\"large\">").concat(e.title, "</span>\n                <svg id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#00243f\" />\n                </svg>\n            </div>\n            <div class=\"accordion__item-content\">\n                <div class=\"accordion__cell\">\n                  ").concat(e.content, "\n                </div>\n            </div>\n        </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.pagination');

  if (content) {
    html = "<a href=\"#\" class=\"pagination__item pagination__item--left\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6.65\" height=\"13.467\" viewBox=\"0 0 6.65 13.467\">\n          <g id=\"arrow_right_\" data-name=\"arrow right \" transform=\"translate(5.25 1.4)\">\n              <path id=\"arrow_right\" data-name=\"arrow right\" d=\"M4,0,0,5.333l4,5.333\" transform=\"translate(-4)\" fill=\"none\" stroke=\"#545567\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" />\n          </g>\n      </svg>\n    </a>";
    var pages = Math.ceil(accordionItems.length / 10);

    for (var i = 0; i < pages; i++) {
      html += "<a href=\"#\" class=\"pagination__item pagination__item--number ".concat(i === 0 ? 'pagination__item--active' : '', "\">\n          ").concat(i + 1, "\n      </a>");
    }

    html += "<a href=\"#\" class=\"pagination__item pagination__item--right\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6.65\" height=\"13.467\" viewBox=\"0 0 6.65 13.467\">\n          <g id=\"arrow_right_\" data-name=\"arrow right \" transform=\"translate(1.4 1.4)\">\n              <path id=\"arrow_right\" data-name=\"arrow right\" d=\"M-4,0,0,5.333l-4,5.333\" transform=\"translate(4)\" fill=\"none\" stroke=\"#545567\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2\" />\n          </g>\n      </svg>\n    </a>";
    content.innerHTML = html;
  }

  setAccordion();
  setPageDefaults();
};

var setSelects = function setSelects() {
  var selects = document.querySelectorAll('.select');
  selects.forEach(function (selectContainer, i) {
    var select = selectContainer.querySelector('select');

    if (selectContainer.classList.contains('select--language')) {
      select.value = lang;

      if (select.options[select.selectedIndex]) {
        selectContainer.querySelector('.select__text').innerHTML = select.options[select.selectedIndex].text;
      }

      selectContainer.querySelector('.select__icon').style.backgroundImage = "url(https://itiawebsite-itiastaging.azurewebsites.net/images/icon-".concat(lang, ".svg)");
    }

    select.addEventListener('change', function (e) {
      if (selectContainer.classList.contains('select--language')) {
        window.localStorage.setItem('lang', e.target.value);
        lang = e.target.value;

        if (!url || url === '/') {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetHome?lang=' + e.target.value);
        } else {
          httpGet(websiteUrl + '/umbraco/api/contentapi/GetPage?lang=' + e.target.value + '&url=' + url);
        }
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
  var selectboxes = document.querySelectorAll('.select__link');

  document.onclick = function (e) {
    if (e.target.classList.value.indexOf('select__link')) {
      var selectboxesActive = document.querySelectorAll('.select__link.active');
      selectboxesActive.forEach(function (select, i) {
        select.classList.remove('active');
      });
    }
  };

  selectboxes.forEach(function (select) {
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
  accordionContainers.forEach(function (accordion) {
    var selectboxLinks = accordion.querySelectorAll('.select__box a');
    selectboxLinks.forEach(function (selectLink) {
      selectLink.addEventListener('click', function (e) {
        var select = selectLink.parentNode.parentNode.querySelector('select');
        var selectText = selectLink.parentNode.parentNode.querySelector('.select__text');
        var selectLinkActive = selectLink.parentNode.querySelector('.active');
        selectText.innerText = selectLink.innerText;

        if (selectLinkActive) {
          selectLinkActive.classList.remove('active');
        }

        selectLink.classList.add('active');

        for (var i = 0; i < select.options.length; i++) {
          if (select.options[i].value == e.target.getAttribute('data-value')) {
            select.options[i].selected = true;
            runAccordion(select, e.target.getAttribute('data-reverse'), accordion);
            break;
          }
        }

        e.preventDefault();
      });
    });
  });
};

var renderContentContainer = function renderContentContainer(array, cards, html) {
  html += "<div class=\"column-container\"><div class=\"column-container__inner\"><div class=\"column-container__content\"><h2 class=\"title column-container__title\">".concat(array[0].title, "</h2>\n  <p class=\"column-container__subtitle\">").concat(array[0].subtitle, "</p><div class=\"columns\">");
  cards.forEach(function (e, i) {
    var link = JSON.parse(e.itemURL)[0];
    html += "<div class=\"column\">\n      ".concat(e.image && "<img src=\"".concat(websiteUrl + e.image, "?anchor=center&mode=crop&width=767\" />") || '', "\n      <h3 class=\"title\">").concat(e.title, "</h3>\n      ").concat(e.content || '', "\n      ").concat(link && link.udi && link.udi.indexOf('pdf') > -1 && "<span class=\"button button--alt\">\n          <a href=\"".concat(link.udi, "\" target=\"_blank\" download=\"\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.5\" height=\"18\" viewBox=\"0 0 16.5 18\">\n                  <path id=\"Shape\" d=\"M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z\" fill=\"#003a3c\" />\n              </svg>\n              ").concat(link.name, "\n          </a>\n      </span>") || link && "<p class=\"link\">\n          <a href=\"".concat(link.url || link.udi, "\">\n              ").concat(link.name, "\n              <svg class=\"link-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                                                    <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(-180)\">\n                                                        <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" fill=\"#225773\"></path>\n                                                    </g>\n                                                    <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\"></path>\n                                                </svg>\n          </a>\n      </p>") || '', "\n  </div>");
  });
  return html + '</div></div></div></div>';
};

var renderContentAreas = function renderContentAreas(contentAreas) {
  var html = '';

  if (!contentAreas) {
    return;
  }

  contentAreas.forEach(function (item) {
    if (item.contentArea) {
      html += "<div class=\"content-area\">\n          ".concat(item.contentArea, "\n      </div>");
    }

    if (item.contentAreaGrey) {
      html += "<div class=\"article__inset\">\n          ".concat(item.contentAreaGrey, "\n      </div>");
    }

    if (item.cards) {
      var cards = JSON.parse(item.cards);

      if (cards && cards.length > 0) {
        html += renderContentContainer([item], cards, html);
      }
    }

    if (item.files) {
      html += "".concat(item.content, "\n        <div class=\"file-header\">\n            <span>File name</span>\n        </div>");
      item.files.split(',').forEach(function (file) {
        var fileArray = file.split('/');
        html += "<div class=\"file\">\n              <span>".concat(fileArray[fileArray.length - 1], "</span>\n              <a class=\"download-click\" href=\"").concat(websiteUrl + file, "\" target=\"_blank\" download=\"\">Download</a>\n          </div>");
      });
    }

    if (item.caption) {
      html += "<div class=\"article__inset\">\n            <a class=\"expand-image\" href=\"".concat(websiteUrl + item.image, "\" target=\"_blank\">\n                <img src=\"").concat(websiteUrl + item.image, "\" alt=\"\" />\n                <svg id=\"Ico_Btn_NewTab\" data-name=\"Ico Btn NewTab\" xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"41\" viewBox=\"0 0 40 41\">\n                    <g id=\"CTA_Primary\" data-name=\"CTA/Primary\">\n                        <g id=\"Bg\">\n                            <rect id=\"Rectangle_Copy_4\" data-name=\"Rectangle Copy 4\" width=\"40\" height=\"41\" rx=\"20\" fill=\"#cfef00\" />\n                        </g>\n                    </g>\n                    <g id=\"Ico_NewTab\" data-name=\"Ico/NewTab\" transform=\"translate(11 7.5)\">\n                        <path id=\"Path\" d=\"M1.013,16.2H15.188A1.016,1.016,0,0,0,16.2,15.188v-8.1H14.175v7.088H2.025V2.025H9.113V0h-8.1A1.016,1.016,0,0,0,0,1.013V15.188A1.016,1.016,0,0,0,1.013,16.2Z\" transform=\"translate(0 5.3)\" fill=\"#235773\" />\n                        <path id=\"Line_2\" data-name=\"Line 2\" d=\"M.5.5v8\" transform=\"translate(14.5)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"2\" />\n                        <path id=\"Line_2-2\" data-name=\"Line 2\" d=\"M8.5.5H.5\" transform=\"translate(10.5 4)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"2\" />\n                    </g>\n                </svg>\n            </a>\n            <p>").concat(item.caption, "</p>\n        </div>");
    }

    if (item.stats) {
      html += "<div class=\"article__inset stat-container\">\n            <h3>".concat(item.title, "</h3>\n            <div class=\"stats\">");
      JSON.parse(item.stats).forEach(function (stat) {
        html += "<div class=\"stat\">\n                  <div class=\"stat__title\">".concat(stat.title, "</div>\n                  <hr />\n                  <div class=\"stat__number\">").concat(stat.number, "</div>\n                  <div class=\"stat__content\">\n                  ").concat(stat.decrease ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"9\" viewBox=\"0 0 12 9\">\n                      <path id=\"Triangle\" d=\"M6,0l6-9H0Z\" transform=\"translate(0 9)\" fill=\"#fff\" />\n                  </svg>" : '', "\n                  ").concat(!stat.decrease ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"9\" viewBox=\"0 0 12 9\">\n                      <path id=\"Triangle\" d=\"M6,0l6,9H0Z\" fill=\"#fff\" />\n                  </svg>" : '', "\n                  ").concat(stat.content, "\n                  </div>\n              </div>");
      });
      html += "</div>\n            ".concat(item.content, "\n        </div>");
    }

    if (item.contentAreaBreakout) {
      var links = JSON.parse(item.links);
      html += "<div class=\"breakout ".concat(item.imageReversed ? "breakout--reverse" : "", "\">\n              ").concat(item.image ? "<div class=\"breakout__image\"><img src=\"".concat(websiteUrl + item.image, "\" alt=\"\" /></div>") : '', "\n              <div class=\"breakout__inner\">\n                  <h3>").concat(item.title, "</h3>\n                  ").concat(item.contentAreaBreakout, "\n                  ").concat(links && links.length ? "<p>\n                        <span class=\"button\">\n                            <a href=\"".concat(links[0].url || links[0].udi).concat(links[0].queryString || '', "\">\n                                ").concat(links[0].name, "\n                            </a>\n                        </span>\n                        ").concat(links[1] ? "<span class=\"link\">\n                            <a href=\"".concat(links[1].url || links[1].udi).concat(links[1].queryString || '', "\">\n                              ").concat(links[1].name, "\n                            </a>\n                        </span>") : '', "\n                    </p>") : '', "\n                </div>\n            </div>\n        </div>");
    }

    if (item.linksTitle) {
      var _links = JSON.parse(item.links);

      html += "<div class=\"article__inset\">\n            <h3>".concat(item.linksTitle, "</h3>\n            ").concat(_links && _links.length ? "<p>\n                <span class=\"button\">\n                    <a href=\"".concat(_links[0].url || _links[0].udi).concat(_links[0].queryString || '', "\">\n                        ").concat(_links[0].name, "\n                    </a>\n                </span>\n                ").concat(_links[1] ? "<span class=\"link\">\n                    <a href=\"".concat(_links[1].url || _links[1].udi).concat(_links[1].queryString || '', "\">\n                      ").concat(_links[1].name, "\n                    </a>\n                </span>") : '', "\n            </p>") : '', "\n        </div>");
    }

    if (item.accordionList) {
      var accordion = JSON.parse(item.accordionList);
      html += "<div class=\"accordion\">\n                <div class=\"accordion__inner\">\n                    <div class=\"accordion__header\">\n                        <h3 class=\"accordion__title title\">".concat(item.title, "</h3>\n                    </div>\n                    <div class=\"accordion__items\">");
      accordion.forEach(function (accordionItem) {
        html += "<div class=\"accordion__item\">\n            <div class=\"accordion__item-title\">\n                <a class=\"accordion__link\" href=\"\"></a>\n                <span class=\"large\">".concat(accordionItem.title, "</span>\n                <svg id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#00243f\" />\n                </svg>\n            </div>\n            <div class=\"accordion__item-content\">\n                <div class=\"accordion__cell\">\n                  ").concat(accordionItem.content, "\n                </div>\n            </div>\n        </div>");
      });
      html += "</div>\n                </div>\n            </div>\n        </div>";
    }
  });
  return html;
};

var getDate = function getDate(today) {
  if (!today) {
    today = new Date();
  }

  var dd = String(today.getDate()).padStart(2, '0');
  var month = today.toLocaleString('default', {
    month: 'long'
  });
  var yyyy = today.getFullYear();
  return dd + ' ' + month + ' ' + yyyy;
};

var renderHistory = function renderHistory(data) {
  var content = '';
  var array = [];
  content = document.querySelector('.timeline');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'histories';
    }).Content);
    array.forEach(function (e) {
      html += "<div class=\"timeline__item\">\n          <span class=\"timeline__ball\"></span>\n          <h3 class=\"timeline__title title\">".concat(e.title, "</h3>\n          <div class=\"timeline__content\">\n            ").concat(e.content, "\n          </div>\n      </div>");
    });
    content.innerHTML = html + '<div class="timeline__indicator"></div>';
  }

  content = document.querySelector('h2.title');

  if (content) {
    content.innerHTML = data.Properties.find(function (m) {
      return m.Name === 'secondaryTitle';
    }).Content;
  }

  content = document.querySelector('.subtitle--narrow');

  if (content) {
    content.innerHTML = data.Properties.find(function (m) {
      return m.Name === 'secondarySubtitle';
    }).Content;
  }

  setTimeline();
  setPageDefaults();
};

var renderHome = function renderHome(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.panel');

  if (content) {
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'panelLinks';
    }).Content);
    array.forEach(function (e) {
      if (e.link) {
        var link = JSON.parse(e.link)[0];
        html += "<a href=\"".concat(link.url || link.udi).concat(link.queryString || '', "\" class=\"panel__item\">").concat(e.icon && "<img src=\"".concat(websiteUrl + e.icon, "\" />") || '', "<span>").concat(link.name, "</span></a>");
      }
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.latest-news__aside');
  html = '';

  if (content) {
    data.SelectedNews.forEach(function (e) {
      var image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : '';
      html += "<div class=\"latest-news__card card\" style=\"background-image:url(".concat(image, ")\">\n        <a href=\"").concat(e.Url, "\">\n          <div class=\"card__inner\">\n            <div class=\"card__content\">\n              <div class=\"label\">\n                  <span class=\"label__timestamp\">\n                    ").concat(e.Type, " - ").concat(e.PublishDate, "\n                  </span>\n              </div>\n              <p class=\"card__title title title--light\">\n                ").concat(e.Name, "\n              </p>\n            </div>\n          </div>\n        </a>\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.scroll');
  html = '';

  if (content) {
    data.LatestNews.forEach(function (e) {
      html += "<div class=\"most-read__card\">\n        <div class=\"label\">\n            <span class=\"label__name\">\n              ".concat(e.Type, "\n            </span>\n            <span class=\"label__timestamp\">\n              ").concat(e.PublishDate, "\n            </span>\n        </div>\n        <p class=\"most-read__title title\"><a href=\"").concat(e.Url, "\">").concat(e.Name, "</a></p>\n      </div>");
    });
    content.innerHTML = html;
  }

  document.querySelector('.chatbot-button').addEventListener('click', function (e) {
    document.querySelector('body').classList.add('chat');
    e.preventDefault();
  });
  document.querySelector('.chatbot__close a').addEventListener('click', function (e) {
    document.querySelector('body').classList.remove('chat');
    e.preventDefault();
  });
  document.querySelector('.chatbot__input button').addEventListener('click', function (e) {
    var text = document.querySelector('.chatbot__input input').value.replace('<', '').replace('>', '');

    if (text) {
      var _window = document.querySelector('.chatbot__messages');

      _window.innerHTML += "<div class=\"message message--user\">\n        <div class=\"message__text\">\n          ".concat(text, "\n        </div>\n      </div>");
      document.querySelector('.chatbot__input input').value = '';
      setTimeout(function () {
        httpGetMessage(websiteUrl + '/umbraco/api/contentapi/GetResults?text=' + text);
      }, 100);
    }

    e.preventDefault();
  });
  setSelects();
};

var loadMessages = function loadMessages(xdata) {
  var data = JSON.parse(xdata);
  var window = document.querySelector('.chatbot__messages');

  if (data.ExceptionMessage) {
    window.innerHTML += "<div class=\"message\">\n      <img src=\"img/chatbot.svg\" />\n      <div class=\"message__text\">Sorry, there was an error with your query. Please contact us.</div>\n    </div>";
  } else {
    var string = "";
    data.forEach(function (e) {
      string += "<div class=\"message\">\n        <img src=\"img/chatbot.svg\" />\n        <div class=\"message__text\">\n          ".concat(e, "\n        </div>\n      </div>");
    });
    window.innerHTML += string;
    registerLinks(window);
  }
};

var httpGetMessage = function httpGetMessage(theUrl) {
  console.log('Start get results');
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false);

  xmlHttp.onload = function () {
    console.log('Results loaded');
    loadMessages(xmlHttp.response);
  };

  xmlHttp.ontimeout = function () {
    console.log('Results error - timeout');
  };

  xmlHttp.onerror = function () {
    console.log('Results error - client');
  };

  xmlHttp.send(null);
};

var renderInvestigation = function renderInvestigation(data) {
  var content = '';
  var html = '';
  var array = [];
  var accordion = JSON.parse(data.Properties.find(function (m) {
    return m.Name === 'accordion';
  }).Content)[0];
  var accordionItems = JSON.parse(accordion.accordionList);
  content = document.querySelector('.accordion__title');

  if (content) {
    content.innerHTML = accordion.title;
  }

  content = document.querySelector('.accordion__items');

  if (content) {
    html = '';
    accordionItems.forEach(function (e) {
      html += "<div class=\"accordion__item\">\n            <div class=\"accordion__item-title\">\n                <a class=\"accordion__link\" href=\"\"></a>\n                <span class=\"large\">".concat(e.title, "</span>\n                <svg id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#00243f\" />\n                </svg>\n            </div>\n            <div class=\"accordion__item-content\">\n                <div class=\"accordion__cell\">\n                  ").concat(e.content, "\n                </div>\n            </div>\n        </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.investigation-text');

  if (content) {
    var text = data.Properties.find(function (m) {
      return m.Name === 'hoverText';
    }).Content;
    content.innerHTML = "<h2 class=\"content-footer__title title\">Click / Tap on a section for more info</h2>\n    <p>".concat(text || '', "</p>");
  }

  content = document.querySelector('.investigation');

  if (content) {
    html = "<img class=\"investigation__image\" src=\"".concat(websiteUrl, "/Images/InvestigationProcess.png?anchor=center&mode=crop&width=767\" />");
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'investigationProcess';
    }).Content);
    array.forEach(function (e) {
      html += '<a href=""></a>';
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.investigation-content');

  if (content) {
    html = '';
    var invP = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'investigationProcess';
    }).Content);
    invP.forEach(function (e) {
      html += "<div class=\"investigation-content__item\">\n          <h2 class=\"content-footer__title title\">".concat(e.title, "</h2>\n          ").concat(e.content, "\n      </div>");
    });
    content.innerHTML = html;
  }

  setAccordion();
  setInvestigation();
  setPageDefaults();
};

var renderLearn = function renderLearn(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.column-container__content');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'content';
    }).Content);
    var cards = JSON.parse(array[0].cards);

    if (cards && cards.length > 0) {
      html = renderContentContainer(array, cards, html);
    }

    content.innerHTML = html;
  }

  content = document.querySelector('.lookingforsomething');

  if (content) {
    content.innerHTML = data.Properties.find(function (m) {
      return m.Name === 'lookingForSomething';
    }).Content;
  }

  setPageDefaults();
};

var renderNews = function renderNews(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.news__list');

  if (content) {
    html = '<h2 class="title">Latest news</h2>';
    array = data.LatestNews.slice(1);
    array.forEach(function (e) {
      html += "<div class=\"news__item\">\n          <h3 class=\"title\"><a href=\"".concat(e.Url, "\">").concat(e.Name, "</a></h3>\n          <div class=\"label\">\n            <span class=\"label__name\">").concat(e.Type, "</span>\n            <span class=\"label__timestamp\">").concat(e.PublishDate, "</span>\n          </div>\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.news__main');

  if (content) {
    var e = data.LatestNews[0];
    var image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : '';
    content.innerHTML = "<img src=\"".concat(image, "\" />\n      <div class=\"news__label label\">\n        <span class=\"label__name\">").concat(e.Type, "</span>\n        <span class=\"label__timestamp\">").concat(e.PublishDate, "</span>\n      </div>\n      <h2 class=\"title\"><a href=\"@firstArticle.Url()\">").concat(e.Name, "</a></h2>\n      ").concat(e.Subtitle ? "<p>".concat(e.Subtitle, "</p>") : '', "\n      <p class=\"link\">\n        <a href=\"").concat(e.Url, "\">Read more</a>\n      </p>");
  }

  content = document.querySelector('.cards__inner');

  if (content) {
    html = '';
    array = data.MostRead;
    array.forEach(function (e) {
      html += "<div class=\"card\" style=\"background-image:url(".concat(e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : '', ")\">\n          <a href=\"").concat(e.Url, "\">\n              <div class=\"card__inner\">\n                  <div class=\"card__content\">\n                      <div class=\"label\">\n                          <span class=\"label__timestamp\">\n                              ").concat(e.Type, " - ").concat(e.PublishDate, "\n                          </span>\n                      </div>\n                      <p class=\"card__title title title--light\">\n                        ").concat(e.Name, "\n                      </p>\n                  </div>\n              </div>\n          </a>\n      </div>");
    });
    content.innerHTML = html;
    content = document.querySelector('.categorylist');

    if (content) {
      html = '';
      array = data.SubPages;
      array.forEach(function (e) {
        html += "<div class=\"title-head\">\n            <h2 class=\"title\">Latest in ".concat(e.Name, "</h2>\n            <div class=\"title-head__right\">\n                <p class=\"link\">\n                    <a href=\"").concat(e.Url, "\">View all</a>\n                </p>\n            </div>\n        </div>\n        <div class=\"promos\">\n          <div class=\"promos__inner\">");
        e.LatestNews.forEach(function (a) {
          html += "<div class=\"promo\">\n              <div class=\"promo__timestamp timestamp\">".concat(a.PublishDate, "</div>\n              <p class=\"promo__title title\">\n                  <a href=\"").concat(a.Url, "\">").concat(a.Name, "</a>\n              </p>\n              ").concat(a.Subtitle ? "<p>".concat(a.Subtitle, "</p>") : '', "\n              <p class=\"link\">\n                  <a href=\"").concat(a.Url, "\">\n                      View article\n                      <svg class=\"link-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                          <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(-180)\">\n                              <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" fill=\"#225773\" />\n                          </g>\n                          <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" />\n                      </svg>\n                  </a>\n              </p>\n          </div>");
        });
        html += "</div>\n        </div>";
      });
      content.innerHTML = html;
    }
  }

  setPageDefaults();
};

var renderNewsCategory = function renderNewsCategory(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.promos');

  if (content) {
    html = '';
    array = _toConsumableArray(data.LatestNews.slice(0, 6));
    array.forEach(function (e) {
      var image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : '';
      html += "<div class=\"promo\">\n        <div class=\"promo__card card\" style=\"background-image:url(".concat(image, ")\"></div>\n        <div class=\"promo__content\">\n          <div class=\"promo__timestamp timestamp\">").concat(e.PublishDate, "</div>\n          <p class=\"promo__title title\">\n            <a href=\"").concat(e.Url, "\">").concat(e.Name, "</a>\n          </p>\n          ").concat(e.Subtitle ? "<p>".concat(e.Subtitle, "</p>") : '', "\n          <p class=\"link\">\n            <a href=\"").concat(e.Url, "\">\n              View article\n              <svg class=\"link-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                  <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(-180)\">\n                      <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" fill=\"#225773\" />\n                  </g>\n                  <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" />\n              </svg>\n            </a>\n          </p>\n        </div>\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.small span');

  if (content) {
    content.innerHTML = data.Name;
  }

  content = document.querySelector('.scroll');

  if (content) {
    html = '';
    data.MostRead.forEach(function (e) {
      html += "\n      <div class=\"most-read__card\">\n          <div class=\"label\">\n              <span class=\"label__name\">\n                  ".concat(e.Type, "\n              </span>\n              <span class=\"label__timestamp\">\n                  ").concat(e.PublishDate, "\n              </span>\n          </div>\n          <p class=\"title\"><a href=\"").concat(e.Url, "\">").concat(e.Name, "</a></p>\n      </div>\n      ");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.content-list');

  if (content) {
    html = '<div class="content-list__inner">';
    array = _toConsumableArray(data.LatestNews.slice(6));
    array.forEach(function (e, i) {
      var image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : '';
      html += "<div class=\"content-list__item ".concat(i > 2 ? 'content-list__item--hidden' : '', "\">\n          ").concat(image ? "<div class=\"content-list__image\" style=\"background-image:url(".concat(image, ")\"></div>") : '', "\n          <div class=\"content-list__content\">\n              <span class=\"content-list__timestamp timestamp\">\n                ").concat(e.PublishDate, "\n              </span>\n              <h3 class=\"content-list__title title\"><a href=\"").concat(e.Url, "\">").concat(e.Name, "</a></h3>\n              ").concat(e.Subtitle ? "<p>".concat(e.Subtitle, "</p>") : '', "\n              <p class=\"link\">\n                  <a href=\"").concat(e.Url, "\">\n                      Read more\n                      <svg class=\"link-arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                          <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(-180)\">\n                              <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" fill=\"#225773\" />\n                          </g>\n                          <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke=\"#235773\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" />\n                      </svg>\n                  </a>\n              </p>\n          </div>\n      </div>");
    });
    html += '</div>';

    if (data.LatestNews.length > 9) {
      html += "<p class=\"content-list__button button center\">\n          <a href=\"\" class=\"load-more\">\n              Load more\n              <svg class=\"button__arrow\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"17\" viewBox=\"0 0 19 17\">\n                  <g id=\"np_chevron_1189476_225773\" transform=\"translate(18 17) rotate(180)\">\n                      <path id=\"Path\" d=\"M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z\" transform=\"translate(0)\" class=\"a\"></path>\n                  </g>\n                  <path id=\"Line\" d=\"M13.5.5H.5\" transform=\"translate(0 8)\" fill=\"none\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"3\" class=\"b\"></path>\n              </svg>\n          </a>\n      </p>";
    }

    content.innerHTML = html;
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
  } // content = document.querySelector('.section--featured')
  // if (content) {
  //   html = ''
  //   const e = data.SubPages[0]
  //   content.innerHTML = `<div class="section__inner">
  //     <div class="featured">
  //         <div class="featured__card card">
  //             <img src="${e.Url}" alt="${e.Name}" />
  //         </div>
  //         <div class="featured__content">
  //             <div class="label label--alt">
  //                 <span class="label__name">
  //                     Featured
  //                 </span>
  //                 <span class="label__timestamp timestamp">
  //                     @featuredPublishedDate.ToString("dd MMMM yyyy")
  //                 </span>
  //             </div>
  //             <h2 class="featured__title title"><a href="@featured.Url()">@featured.Value("title")</a></h2>
  //             <p class="small">
  //                 @featured.Value("subtitle")
  //             </p>
  //             <p class="link">
  //                 <a href="@featured.Url()">
  //                     Read more
  //                     <svg class="link-arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
  //                         <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(-180)">
  //                             <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" fill="#225773" />
  //                         </g>
  //                         <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke="#235773" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" />
  //                     </svg>
  //                 </a>
  //             </p>
  //         </div>
  //     </div>
  //   </div>`
  // }


  setPageDefaults();
};

var renderPartners = function renderPartners(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.column-container--1');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'content';
    }).Content);
    var cards = JSON.parse(array[0].cards);

    if (cards && cards.length > 0) {
      html = renderContentContainer(array, cards, html);
    }

    content.innerHTML = html;
  }

  content = document.querySelector('.column-container--2');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'players';
    }).Content);

    var _cards = JSON.parse(array[0].cards);

    if (_cards && _cards.length > 0) {
      html = renderContentContainer(array, _cards, html);
    }

    content.innerHTML = html;
  }

  content = document.querySelector('.column-container--3');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'officials';
    }).Content);

    var _cards2 = JSON.parse(array[0].cards);

    if (_cards2 && _cards2.length > 0) {
      html = renderContentContainer(array, _cards2, html);
    }

    content.innerHTML = html;
  }

  setPageDefaults();
};

var renderRetirements = function renderRetirements(data) {
  var content = '';
  var html = '';
  var array = []; //Tabs

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
  }

  content = document.querySelector('.accordion__items--1');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'retirements';
    }).Content);
    var dateRetireds = array.filter(function (m) {
      return !m.dateReinstated;
    });
    var newArray = dateRetireds.sort(function (a, b) {
      return Date.parse(a.dateRetired) - Date.parse(b.dateRetired);
    });
    newArray.forEach(function (item) {
      html += "<div class=\"accordion__item\">\n            <div class=\"accordion__item-title xlarge\">\n                <div class=\"accordion__row\">\n                    <div class=\"accordion__column\">\n                        <span><b class=\"sort1\">".concat(item.playerName, "</b></span>\n                    </div>\n                    <div class=\"accordion__column\">\n                        <span><b class=\"sort2\">").concat(getDate(new Date(item.dateRetired)), "</b></span>\n                    </div>\n                    <div class=\"accordion__column\">\n                        <span><b class=\"sort3\">").concat(item.nationality, "</b></span>\n                    </div>\n                </div>\n            </div>\n        </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.accordion__items--2');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'retirements';
    }).Content);
    var dateReinstateds = array.filter(function (m) {
      return m.dateReinstated;
    });

    var _newArray = dateReinstateds.sort(function (a, b) {
      return Date.parse(a.dateReinstated) - Date.parse(b.dateReinstated);
    });

    _newArray.forEach(function (item) {
      html += "<div class=\"accordion__item\">\n            <div class=\"accordion__item-title xlarge\">\n                <div class=\"accordion__row\">\n                    <div class=\"accordion__column\">\n                        <span><b class=\"sort1\">".concat(item.playerName, "</b></span>\n                    </div>\n                    <div class=\"accordion__column\">\n                        <span><b class=\"sort2\">").concat(getDate(new Date(item.dateReinstated)), "</b></span>\n                    </div>\n                    <div class=\"accordion__column\">\n                        <span><b class=\"sort3\">").concat(item.nationality, "</b></span>\n                    </div>\n                </div>\n            </div>\n        </div>");
    });

    content.innerHTML = html;
  }

  setSelects();
  setAccordion();
  setPageDefaults();
};

var renderRules = function renderRules(data) {
  var content = '';
  var html = '';
  var array = [];
  var accordion = JSON.parse(data.Properties.find(function (m) {
    return m.Name === 'accordion';
  }).Content)[0];
  var accordionItems = JSON.parse(accordion.accordionList);
  content = document.querySelector('.panel');

  if (content) {
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'panelLinks';
    }).Content);
    array.forEach(function (e) {
      if (e.link) {
        var link = JSON.parse(e.link)[0];
        html += "<a href=\"".concat(link.url || link.udi).concat(link.queryString || '', "\" class=\"panel__item\">").concat(e.icon && "<img src=\"".concat(websiteUrl + e.icon, "\" />") || '', "<span>").concat(link.name, "</span></a>");
      }
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.latest-news__aside');

  if (content) {
    html = '';
    data.SelectedNews.forEach(function (e) {
      var image = e.Image ? websiteUrl + e.Image + '?anchor=center&mode=crop&width=767' : '';
      html += "<div class=\"latest-news__card card\" style=\"background-image:url(".concat(image, ")\">\n        <a href=\"").concat(e.Url, "\">\n          <div class=\"card__inner\">\n            <div class=\"card__content\">\n              <div class=\"label\">\n                  <span class=\"label__timestamp\">\n                    ").concat(e.Type, " - ").concat(e.PublishDate, "\n                  </span>\n              </div>\n              <p class=\"card__title title title--light\">\n                ").concat(e.Name, "\n              </p>\n            </div>\n          </div>\n        </a>\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.accordion__title');

  if (content) {
    content.innerHTML = accordion.title;
  }

  content = document.querySelector('.accordion__items');

  if (content) {
    html = '';
    accordionItems.forEach(function (e) {
      html += "<div class=\"accordion__item\">\n            <div class=\"accordion__item-title\">\n                <a class=\"accordion__link\" href=\"\"></a>\n                <span class=\"large\">".concat(e.title, "</span>\n                <svg id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                    <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#00243f\" />\n                </svg>\n            </div>\n            <div class=\"accordion__item-content\">\n                <div class=\"accordion__cell\">\n                  ").concat(e.content, "\n                </div>\n            </div>\n        </div>");
    });
    content.innerHTML = html;
    content.querySelectorAll('img').forEach(function (e) {
      if (e.getAttribute('data-udi')) {
        e.setAttribute('src', websiteUrl + e.getAttribute('data-udi') + '?anchor=center&mode=crop&width=767');
      }
    });
  }

  content = document.querySelector('.scroll');

  if (content) {
    html = '';
    data.LatestNews.forEach(function (e) {
      html += "<div class=\"most-read__card\">\n        <div class=\"label\">\n            <span class=\"label__name\">\n              ".concat(e.Type, "\n            </span>\n            <span class=\"label__timestamp\">\n              ").concat(e.PublishDate, "\n            </span>\n        </div>\n        <p class=\"most-read__title title\"><a href=\"").concat(e.Url, "\">").concat(e.Name, "</a></p>\n      </div>");
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.introduction__content');

  if (content) {
    content.innerHTML = data.Properties.find(function (m) {
      return m.Name === 'introduction';
    }).Content;
  }

  content = document.querySelector('.share');

  if (content) {
    var pdf = data.Properties.find(function (m) {
      return m.Name === 'pDF';
    }).Content;

    if (pdf) {
      content.innerHTML = "<span class=\"button button--alt\">\n          <a href=\"".concat(websiteUrl + pdf, "\" target=\"_blank\" download=\"\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.5\" height=\"18\" viewBox=\"0 0 16.5 18\">\n                  <path id=\"Shape\" d=\"M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z\" fill=\"#003a3c\" />\n              </svg>\n              Download PDF\n          </a>\n      </span>");
    }
  }

  content = document.querySelector('.content-areas');

  if (content) {
    var contentAreas = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'contentNested';
    }).Content);

    if (contentAreas && contentAreas.length) {
      content.innerHTML = renderContentAreas(contentAreas);
    }
  }

  var related = document.querySelectorAll('.introduction__content h2, .section__inner h2, .accordion__title');
  var relatedContainer = document.querySelector('.onthispage');
  html = '';
  related.forEach(function (e) {
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

  setAccordion();
  setSelects();
  setPageDefaults();
};

var renderSanctions = function renderSanctions(data) {
  var content = '';
  var html = '';
  var array = []; //Tabs

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
  }

  content = document.querySelector('.accordion__items--1');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'sanctionsList';
    }).Content)[0];
    var sanctionItems = JSON.parse(array.accordionList);
    var sanctionItemsLifeTime = sanctionItems.filter(function (m) {
      return !m.endDate;
    });
    var sanctionItemsCurrent = sanctionItems.filter(function (m) {
      return Date.parse(m.endDate) >= Date.now();
    });
    var newArray = sanctionItemsCurrent.concat(sanctionItemsLifeTime).sort(function (a, b) {
      return Date.parse(a.endDate) - Date.parse(b.endDate);
    });
    newArray.forEach(function (item) {
      html += "<div class=\"accordion__item ".concat(item.program ? "accordion__item--".concat(item.program) : '', "\">\n          <div class=\"accordion__item-title xlarge\">\n              <a class=\"accordion__link\" href=\"\"></a>\n              <div class=\"accordion__row\">\n                  <div class=\"accordion__column\">\n                      <span><b class=\"sort1\">").concat(item.title || '', "</b></span>\n                  </div>\n                  <div class=\"accordion__column\">\n                      <span><b>").concat(item.program || '', "</b></span>\n                  </div>\n                  <div class=\"accordion__column\">\n                      <span><b class=\"sort2\">").concat(item.sanction || '', "</b></span>\n                  </div>\n              </div>\n              <svg id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                  <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#00243f\" />\n              </svg>\n          </div>\n          <div class=\"accordion__item-content\">\n              <div class=\"accordion__column\">\n                  ").concat(item.dateOfViolation ? "<p>\n                  <b>Date of Violation</b><br />\n                  ".concat(getDate(new Date(item.dateOfViolation)), "\n                  </p>") : '', "\n                  ").concat(item.startDate ? "<p>\n                  <b>Start date of Sanction</b><br />\n                  ".concat(getDate(new Date(item.startDate)), "\n                  </p>") : '', "\n                  ").concat(item.endDate ? "<p>\n                  <b>End date of Sanction</b><br />\n                  ".concat(getDate(new Date(item.endDate)), "\n                  </p>") : '', "\n                  ").concat(item.ruleViolated ? "<p>\n                  <b>Rule Violated</b><br />\n                  ".concat(item.ruleViolated, "\n                  </p>") : '', "\n                  ").concat(item.substance ? "<p>\n                  <b>Substance</b><br />\n                  ".concat(item.substance, "\n                  </p>") : '', "\n                  ").concat(item.substanceClass ? "<p>\n                  <b>Substance Class</b><br />\n                  ".concat(item.substanceClass, "\n                  </p>") : '', "\n                  ").concat(item.description ? "<p>\n                  ".concat(item.description, "\n                  </p>") : '', "\n              </div>\n              <div class=\"accordion__column\">\n                ").concat(item.details ? "<p>\n                    <span class=\"button\">\n                        <a href=\"".concat(websiteUrl + item.details, "\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.5\" height=\"18\" viewBox=\"0 0 16.5 18\">\n                                <path id=\"Shape\" d=\"M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z\" fill=\"#003a3c\" />\n                            </svg>\n                            Download Decision\n                        </a>\n                    </span>\n                </p>") : '');

      if (item.relatedArticles) {
        related = item.relatedArticles.split(',');
        html += '<p>Related Content</p>';
        related.forEach(function (e) {
          html += "<div class=\"accordion__card\">\n              <a href=\"".concat(e, "\">\n                  <p>").concat(e, "</p>\n              </a>\n          </div>");
        });
      }

      html += '</div></div></div>';
    });
    content.innerHTML = html;
  }

  content = document.querySelector('.accordion__items--2');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'sanctionsList';
    }).Content)[0];

    var _sanctionItems = JSON.parse(array.accordionList);

    var sanctionItemsHistorical = _sanctionItems.filter(function (m) {
      return Date.parse(m.endDate) < Date.now();
    });

    sanctionItemsHistorical.forEach(function (item) {
      html += "<div class=\"accordion__item ".concat(item.program ? "accordion__item--".concat(item.program) : '', "\">\n          <div class=\"accordion__item-title xlarge\">\n              <a class=\"accordion__link\" href=\"\"></a>\n              <div class=\"accordion__row\">\n                  <div class=\"accordion__column\">\n                      <span><b class=\"sort1\">").concat(item.title || '', "</b></span>\n                  </div>\n                  <div class=\"accordion__column\">\n                      <span><b>").concat(item.program || '', "</b></span>\n                  </div>\n                  <div class=\"accordion__column\">\n                      <span><b class=\"sort2\">").concat(item.sanction || '', "</b></span>\n                  </div>\n              </div>\n              <svg id=\"Ico_DownChev_Blue\" data-name=\"Ico/DownChev/Blue\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"8\" viewBox=\"0 0 12 8\">\n                  <path id=\"Path\" d=\"M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z\" fill=\"#00243f\" />\n              </svg>\n          </div>\n          <div class=\"accordion__item-content\">\n              <div class=\"accordion__column\">\n                  ").concat(item.dateOfViolation ? "<p>\n                  <b>Date of Violation</b><br />\n                  ".concat(getDate(new Date(item.dateOfViolation)), "\n                  </p>") : '', "\n                  ").concat(item.startDate ? "<p>\n                  <b>Start date of Sanction</b><br />\n                  ".concat(getDate(new Date(item.startDate)), "\n                  </p>") : '', "\n                  ").concat(item.endDate ? "<p>\n                  <b>End date of Sanction</b><br />\n                  ".concat(getDate(new Date(item.endDate)), "\n                  </p>") : '', "\n                  ").concat(item.ruleViolated ? "<p>\n                  <b>Rule Violated</b><br />\n                  ".concat(item.ruleViolated, "\n                  </p>") : '', "\n                  ").concat(item.substance ? "<p>\n                  <b>Substance</b><br />\n                  ".concat(item.substance, "\n                  </p>") : '', "\n                  ").concat(item.substanceClass ? "<p>\n                  <b>Substance Class</b><br />\n                  ".concat(item.substanceClass, "\n                  </p>") : '', "\n                  ").concat(item.description ? "<p>\n                  ".concat(item.description, "\n                  </p>") : '', "\n              </div>\n              <div class=\"accordion__column\">\n                ").concat(item.details ? "<p>\n                    <span class=\"button\">\n                        <a href=\"".concat(websiteUrl + item.details, "\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16.5\" height=\"18\" viewBox=\"0 0 16.5 18\">\n                                <path id=\"Shape\" d=\"M16.5,18H0V3H6V4.5H1.5v12H15V4.5H10.5V3h6V18ZM8.25,12.75h0L4.5,8.25h3V0H9V8.25h3l-3.749,4.5Z\" fill=\"#003a3c\" />\n                            </svg>\n                            Download Decision\n                        </a>\n                    </span>\n                </p>") : '');

      if (item.relatedArticles) {
        related = item.relatedArticles.split(',');
        html += '<p>Related Content</p>';
        related.forEach(function (e) {
          html += "<div class=\"accordion__card\">\n              <a href=\"".concat(e, "\">\n                  <p>").concat(e, "</p>\n              </a>\n          </div>");
        });
      }

      html += '</div></div></div>';
    });
    content.innerHTML = html;
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
  });
  setSelects();
  setAccordion();
  setPageDefaults();
};

var renderTacp = function renderTacp(data) {
  var content = '';
  var html = '';
  var array = [];
  content = document.querySelector('.tacp');

  if (content) {
    html = '';
    array = JSON.parse(data.Properties.find(function (m) {
      return m.Name === 'content';
    }).Content);
    var cards = JSON.parse(array[0].cards);

    if (cards && cards.length > 0) {
      html = renderContentContainer(array, cards, html);
    }

    content.innerHTML = html;
  }

  setPageDefaults();
};
//# sourceMappingURL=main.js.map
