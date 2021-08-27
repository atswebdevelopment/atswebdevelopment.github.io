const renderContact = (data) => {
  let content = ''
  let html = ''
  let array = []

  content = document.querySelector('.contact-area')
  if (content) {
    html = data.Properties.find(m => m.Name === 'content').Content
    content.innerHTML = html
  }

  content = document.querySelector('.secondary-nav__inner')
  if (content) {
    html = data.Properties.find(m => m.Name === 'contactDetails').Content
    content.innerHTML = html
  }

  content = document.querySelector('.contact__buttons')
  if (content) {
    html = ''
    array = JSON.parse(data.Properties.find(m => m.Name === 'forms').Content)
    array.forEach((e) => {
      html += `<div class="contact__button">
        <a class="contact__link" href=""></a>
        ${e.icon && `<img src="${websiteUrl + e.icon}" />` || ''}
        ${e.title}
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelector('.contact__form-container')
  if (content) {
    html = ''
    array.forEach((e, i) => {
      html += `<div class="contact__content">
      <div class="contact__inner">
          <div class="form-container">
              <div class="form-outer">
                  <div class="form">
                      <h3 class="title">${e.title}</h3>
                      ${e.content || ''}
                      <div class="form__field form__field--submit form__field--left">
                          <span class="button button--next">
                              <a href="">
                                  Start here
                                  <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                                      <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                                          <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a" />
                                      </g>
                                      <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b" />
                                  </svg>
                              </a>
                          </span>
                      </div>
                  </div>
              </div>
              ${getForm(e.form)}
          </div>
      </div>
      </div>`
    })
    content.innerHTML = html
  }

  content = document.querySelectorAll('.contact__form-container form')
  html = ''
  if (content.length) {
    content.forEach((form) => {
      form.addEventListener('submit', (e) => {
        document.querySelector('.contact__form-container').classList.add('hidden')
        document.querySelector('.loading').classList.remove('hidden')
        const url = form.getAttribute('data-post')
        console.log('Start post form data')
        var formData = new FormData(form)
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open('POST', `${websiteUrl}/umbraco/api/${url}/Submit`, false)
        xmlHttp.onload = (data) => {
          console.log('Form data loaded')
            console.log(data.target.response)
            if(data.target.response){
              document.querySelector('.contact .accordion').classList.remove('hidden')
            } else {
              document.querySelector('.contact p.hidden').classList.remove('hidden')
              document.querySelector('.contact__form-container').classList.add('hidden')
            }
            document.querySelector('.loading').classList.add('hidden')
        }
        xmlHttp.ontimeout = () => {
            console.log('Data error - timeout')
        }
        xmlHttp.onerror = () => {
            console.log('Data error - client')
        }
        xmlHttp.send(formData)
        setTimeout(() => {
          document.querySelector('.loading').classList.add('hidden')
        }, 10000)
        e.preventDefault()
      })
    })
  }
  
  setContact()
  validate()
  setPageDefaults()
}

const getForm = (i) => {
  if (i === 'corruption') {
    return `<form action="/contact/" enctype="multipart/form-data" method="post" data-post="reportformapi">    <div class="form">
    <div class="form__field">
        <label class="required">In what capacity are you involved in Tennis?</label>
        <div class="select">
            <div class="select__text">Select</div>
            <select class="required capacity" id="UserType" name="UserType"><option value="">Please select</option>
    <option value="Player">Player</option>
    <option value="Coach">Coach</option>
    <option value="Official">Official</option>
    <option value="Staff">Staff</option>
    <option value="Other">Other</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Full name</label>
            <div class="input">
                <input class="required" id="Name" name="Name" type="text" value="">
                <div class="form__tooltip">
                    eg. John Smith
                </div>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Email address</label>
            <div class="input">
                <input class="email required" id="Mad" name="Mad" type="email" value="">
                <input class="fvd" id="Email" name="Email" type="email" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Country of residence</label>
            <div class="select">
                <div class="select__text">United Kingdom</div>
                <select id="Country" name="Country"><option value="">Please select</option>
    <option value="Afganistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bonaire">Bonaire</option>
    <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
    <option value="Brunei">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Canary Islands">Canary Islands</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Channel Islands">Channel Islands</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos Island">Cocos Island</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote DIvoire">Cote DIvoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Curaco">Curacao</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="East Timor">East Timor</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands">Falkland Islands</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Ter">French Southern Ter</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Great Britain">Great Britain</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guinea">Guinea</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="Indonesia">Indonesia</option>
    <option value="India">India</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea North">Korea North</option>
    <option value="Korea Sout">Korea South</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Laos">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macau">Macau</option>
    <option value="Macedonia">Macedonia</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Malawi">Malawi</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Midway Islands">Midway Islands</option>
    <option value="Moldova">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Nambia">Nambia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherland Antilles">Netherland Antilles</option>
    <option value="Netherlands">Netherlands (Holland, Europe)</option>
    <option value="Nevis">Nevis</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau Island">Palau Island</option>
    <option value="Palestine">Palestine</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Phillipines">Philippines</option>
    <option value="Pitcairn Island">Pitcairn Island</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Republic of Montenegro">Republic of Montenegro</option>
    <option value="Republic of Serbia">Republic of Serbia</option>
    <option value="Reunion">Reunion</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="St Barthelemy">St Barthelemy</option>
    <option value="St Eustatius">St Eustatius</option>
    <option value="St Helena">St Helena</option>
    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
    <option value="St Lucia">St Lucia</option>
    <option value="St Maarten">St Maarten</option>
    <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
    <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
    <option value="Saipan">Saipan</option>
    <option value="Samoa">Samoa</option>
    <option value="Samoa American">Samoa American</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Swaziland">Swaziland</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syria">Syria</option>
    <option value="Tahiti">Tahiti</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Togo">Togo</option>
    <option value="Tokelau">Tokelau</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option selected="selected" value="United Kingdom">United Kingdom</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Erimates">United Arab Emirates</option>
    <option value="United States of America">United States of America</option>
    <option value="Uraguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Vatican City State">Vatican City State</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
    <option value="Wake Island">Wake Island</option>
    <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
    <option value="Yemen">Yemen</option>
    <option value="Zaire">Zaire</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
    </select>
                <div class="form__message"></div>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
            </div>
        </div>
        <div class="form__field">
            <label>Phone number</label>
            <div class="input">
                <input id="Phone" name="Phone" type="text" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Contact preference</label>
            <div class="select">
                <div class="select__text">Email</div>
                <select class="required" id="ContactPreference" name="ContactPreference"><option value="Email">Email</option>
    <option value="Phone">Phone</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field hidden capacity-hidden">
            <label class="required">Tour affiliation</label>
            <div class="select">
                <div class="select__text">Select</div>
                <select class="required affiliation" id="Affiliation" name="Affiliation"><option value="">Please select</option>
    <option value="ATP">ATP</option>
    <option value="WTA">WTA</option>
    <option value="ITF">ITF</option>
    <option value="None">None</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field hidden affiliation-hidden">
            <label class="required">IPIN / Playerzone ID</label>
            <div class="input">
                <input class="required" id="IDNumber" name="IDNumber" type="text" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field form__field--submit">
            <span class="button button--next">
                <a href="">
                    Next
                    <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                        <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                            <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                        </g>
                        <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                    </svg>
                </a>
            </span>
        </div>
    </div>
    <div class="form">
        <div class="form__field">
            <label class="required">What type of activity are you reporting?</label>
            <div class="select">
                <div class="select__text">Select</div>
                <select class="required" id="EnquiryType" name="EnquiryType"><option value="">Please select</option>
    <option value="Corruption">Corruption</option>
    <option value="Abuse">Abuse</option>
    <option value="Doping">Doping</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Did it happen online or in person?</label>
            <div class="select">
                <div class="select__text">Select</div>
                <select class="required" id="OnlineOrPerson" name="OnlineOrPerson"><option value="">Please select</option>
    <option value="Online">Online</option>
    <option value="In person">In person</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Where did it take place?</label>
            <div class="input">
                <input id="Where" name="Where" type="text" value="">
                <div class="form__tooltip">
                    e.g name of tournament, tennis club or other location
                </div>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Specific location</label>
            <div class="input">
                <input id="Location" name="Location" type="text" value="">
                <div class="form__tooltip">
                    e.g Locker room, court, gym or restaurant
                </div>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Describe what happened</label>
            <div class="textarea">
                <textarea class="required" cols="20" id="Message" name="Message" rows="2"></textarea>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field form__field--submit">
            <span class="button button--back">
                <a href="">
                    Back
                    <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                        <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                            <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                        </g>
                        <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                    </svg>
                </a>
            </span>
            <span class="button button--next">
                <a href="">
                    Next
                    <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                        <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                            <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                        </g>
                        <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                    </svg>
                </a>
            </span>
        </div>
    </div>
    <div class="form">
        <div class="form__field">
            <label class="required">When did this happen?</label>
            <div class="input">
                <input class="required datepicker" id="When" name="When" type="text" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Upload files, eg. screenshot of the issue.</label>
            <div class="textarea">
                <input class="files" id="Images" multiple="multiple" name="Images" type="file" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Have you reported this to anyone else?</label>
            <div class="radio-required">
                <label class="inline" for="">Yes</label>
                <div class="radio">
                    <input class="reportedto" id="Reported" name="Reported" type="radio" value="True">
                    <span></span>
                </div>
                <label class="inline" for="">No</label>
                <div class="radio">
                    <input checked="checked" class="reportedto" id="Reported" name="Reported" type="radio" value="False">
                    <span></span>
                </div>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field hidden reportedto-hidden">
            <label>Who did you report this to?</label>
            <div class="input">
                <input id="ReportedTo" name="ReportedTo" type="text" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>We’re all done, would you like a receipt of this report?</label>
            <label class="inline" for="">Yes</label>
            <div class="radio">
                <input id="Receipt" name="Receipt" type="radio" value="True">
                <span></span>
            </div>
            <label class="inline" for="">No</label>
            <div class="radio">
                <input checked="checked" id="Receipt" name="Receipt" type="radio" value="False">
                <span></span>
            </div>
        </div>
        <div class="form__field form__field--submit">
            <span class="button button--back">
                <a href="">
                    Back
                    <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                        <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                            <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                        </g>
                        <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                    </svg>
                </a>
            </span>
            <button class="button button--submit" type="submit">
                Submit
                <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                    <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                        <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                    </g>
                    <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                </svg>
            </button>
        </div>
    </div>
    <input name="ufprt" type="hidden" value="729E9D4DBAD817B4905CA8DE35273B8715F13F0E54FC1E3186F1EC393B1B12145A2DB31EA715F3AACEB8BB63B5CDE741155E93ACA641FA6A4C253BF0A670E17319243FF860BD93419956955A6ABB08C4AC8DB756249C978D2D7EF94EED2F3678A948162AEFD9A026972BDC8DD019DB93485B9A8A28F5CCB26D5903EDCE9304A5"></form>`
  }
  else if (i === 'doping') {
    return `<form action="/contact/" enctype="multipart/form-data" method="post" data-post="reportformapi">    <div class="form">
        <div class="form__field">
            <label class="required">Full name</label>
            <div class="input">
                <input class="required" id="Name" name="Name" type="text" value="">
                <div class="form__tooltip">
                    eg. John Smith
                </div>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Email address</label>
            <div class="input">
                <input class="email required" id="Mad" name="Mad" type="email" value="">
                <input class="fvd" id="Email" name="Email" type="email" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Country of residence</label>
            <div class="select">
                <div class="select__text">United Kingdom</div>
                <select id="Country" name="Country"><option value="">Please select</option>
    <option value="Afganistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bonaire">Bonaire</option>
    <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
    <option value="Brunei">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Canary Islands">Canary Islands</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Channel Islands">Channel Islands</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos Island">Cocos Island</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote DIvoire">Cote DIvoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Curaco">Curacao</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="East Timor">East Timor</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands">Falkland Islands</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Ter">French Southern Ter</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Great Britain">Great Britain</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guinea">Guinea</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="Indonesia">Indonesia</option>
    <option value="India">India</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea North">Korea North</option>
    <option value="Korea Sout">Korea South</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Laos">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macau">Macau</option>
    <option value="Macedonia">Macedonia</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Malawi">Malawi</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Midway Islands">Midway Islands</option>
    <option value="Moldova">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Nambia">Nambia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherland Antilles">Netherland Antilles</option>
    <option value="Netherlands">Netherlands (Holland, Europe)</option>
    <option value="Nevis">Nevis</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau Island">Palau Island</option>
    <option value="Palestine">Palestine</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Phillipines">Philippines</option>
    <option value="Pitcairn Island">Pitcairn Island</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Republic of Montenegro">Republic of Montenegro</option>
    <option value="Republic of Serbia">Republic of Serbia</option>
    <option value="Reunion">Reunion</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="St Barthelemy">St Barthelemy</option>
    <option value="St Eustatius">St Eustatius</option>
    <option value="St Helena">St Helena</option>
    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
    <option value="St Lucia">St Lucia</option>
    <option value="St Maarten">St Maarten</option>
    <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
    <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
    <option value="Saipan">Saipan</option>
    <option value="Samoa">Samoa</option>
    <option value="Samoa American">Samoa American</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Swaziland">Swaziland</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syria">Syria</option>
    <option value="Tahiti">Tahiti</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Togo">Togo</option>
    <option value="Tokelau">Tokelau</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option selected="selected" value="United Kingdom">United Kingdom</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Erimates">United Arab Emirates</option>
    <option value="United States of America">United States of America</option>
    <option value="Uraguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Vatican City State">Vatican City State</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
    <option value="Wake Island">Wake Island</option>
    <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
    <option value="Yemen">Yemen</option>
    <option value="Zaire">Zaire</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
    </select>
                <div class="form__message"></div>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
            </div>
        </div>
        <div class="form__field">
            <label>Phone number</label>
            <div class="input">
                <input id="Phone" name="Phone" type="text" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Contact preference</label>
            <div class="select">
                <div class="select__text">Email</div>
                <select class="required" id="ContactPreference" name="ContactPreference"><option value="Email">Email</option>
    <option value="Phone">Phone</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field form__field--submit">
            <span class="button button--next">
                <a href="">
                    Next
                    <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                        <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                            <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                        </g>
                        <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                    </svg>
                </a>
            </span>
        </div>
    </div>
    <div class="form">
    <div class="form__field">
        <label class="required">Please outline your enquiry below</label>
        <div class="textarea">
            <textarea class="required" cols="20" id="Message" name="Message" rows="2"></textarea>
            <div class="form__message"></div>
        </div>
    </div>
    <div class="form__field">
        <label>We’re all done, would you like a receipt of this report?</label>
        <label class="inline" for="">Yes</label>
        <div class="radio">
            <input id="Receipt" name="Receipt" type="radio" value="True">
            <span></span>
        </div>
        <label class="inline" for="">No</label>
        <div class="radio">
            <input checked="checked" id="Receipt" name="Receipt" type="radio" value="False">
            <span></span>
        </div>
    </div>
    <div class="form__field form__field--submit">
        <span class="button button--back">
            <a href="">
                Back
                <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                    <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                        <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                    </g>
                    <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                </svg>
            </a>
        </span>
        <button class="button button--submit" type="submit">
            Submit
            <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                    <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                </g>
                <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
            </svg>
        </button>
    </div>
    </div>
    <input name="ufprt" type="hidden" value="C867FF86C70A5BD901E320CADAD3B9A8803C927D12DC005B7DB27B28B5B87B8469A094C81D9BAEA12A4210537B2665EAF8B8FBDE79DC1451B9D8B56EF8C99B9DE5E86411F8E9CBFCA89A80C8C788D17890D957C2285581022977E166AF88CC4BEBF465DAA2A740E32006F24C6E42DEEA09A9FB1F377A8FB70021B1333BB411E2"></form>`
  }
  // else if (i === 'media') {
    
  // }
  // else if (i === 'education') {
    
  // }
  // else if (i === 'product') {
    
  // }
  else {
    return `<form action="/contact/" enctype="multipart/form-data" method="post" data-post="generalformapi">    <div class="form">
        <div class="form__field">
            <label class="required">In what capacity are you involved in Tennis?</label>
            <div class="select">
                <div class="select__text">Select</div>
                <select class="required capacity" id="UserType" name="UserType"><option value="">Please select</option>
    <option value="Player">Player</option>
    <option value="Coach">Coach</option>
    <option value="Official">Official</option>
    <option value="Staff">Staff</option>
    <option value="Other">Other</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Full name</label>
            <div class="input">
                <input class="required" id="Name" name="Name" type="text" value="">
                <div class="form__tooltip">
                    eg. John Smith
                </div>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label class="required">Email address</label>
            <div class="input">
                <input class="email required" id="Mad" name="Mad" type="email" value="">
                <input class="fvd" id="Email" name="Email" type="email" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Country of residence</label>
            <div class="select">
                <div class="select__text">United Kingdom</div>
                <select id="Country" name="Country"><option value="">Please select</option>
    <option value="Afganistan">Afghanistan</option>
    <option value="Albania">Albania</option>
    <option value="Algeria">Algeria</option>
    <option value="American Samoa">American Samoa</option>
    <option value="Andorra">Andorra</option>
    <option value="Angola">Angola</option>
    <option value="Anguilla">Anguilla</option>
    <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
    <option value="Argentina">Argentina</option>
    <option value="Armenia">Armenia</option>
    <option value="Aruba">Aruba</option>
    <option value="Australia">Australia</option>
    <option value="Austria">Austria</option>
    <option value="Azerbaijan">Azerbaijan</option>
    <option value="Bahamas">Bahamas</option>
    <option value="Bahrain">Bahrain</option>
    <option value="Bangladesh">Bangladesh</option>
    <option value="Barbados">Barbados</option>
    <option value="Belarus">Belarus</option>
    <option value="Belgium">Belgium</option>
    <option value="Belize">Belize</option>
    <option value="Benin">Benin</option>
    <option value="Bermuda">Bermuda</option>
    <option value="Bhutan">Bhutan</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Bonaire">Bonaire</option>
    <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
    <option value="Botswana">Botswana</option>
    <option value="Brazil">Brazil</option>
    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
    <option value="Brunei">Brunei</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Burkina Faso">Burkina Faso</option>
    <option value="Burundi">Burundi</option>
    <option value="Cambodia">Cambodia</option>
    <option value="Cameroon">Cameroon</option>
    <option value="Canada">Canada</option>
    <option value="Canary Islands">Canary Islands</option>
    <option value="Cape Verde">Cape Verde</option>
    <option value="Cayman Islands">Cayman Islands</option>
    <option value="Central African Republic">Central African Republic</option>
    <option value="Chad">Chad</option>
    <option value="Channel Islands">Channel Islands</option>
    <option value="Chile">Chile</option>
    <option value="China">China</option>
    <option value="Christmas Island">Christmas Island</option>
    <option value="Cocos Island">Cocos Island</option>
    <option value="Colombia">Colombia</option>
    <option value="Comoros">Comoros</option>
    <option value="Congo">Congo</option>
    <option value="Cook Islands">Cook Islands</option>
    <option value="Costa Rica">Costa Rica</option>
    <option value="Cote DIvoire">Cote DIvoire</option>
    <option value="Croatia">Croatia</option>
    <option value="Cuba">Cuba</option>
    <option value="Curaco">Curacao</option>
    <option value="Cyprus">Cyprus</option>
    <option value="Czech Republic">Czech Republic</option>
    <option value="Denmark">Denmark</option>
    <option value="Djibouti">Djibouti</option>
    <option value="Dominica">Dominica</option>
    <option value="Dominican Republic">Dominican Republic</option>
    <option value="East Timor">East Timor</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Egypt">Egypt</option>
    <option value="El Salvador">El Salvador</option>
    <option value="Equatorial Guinea">Equatorial Guinea</option>
    <option value="Eritrea">Eritrea</option>
    <option value="Estonia">Estonia</option>
    <option value="Ethiopia">Ethiopia</option>
    <option value="Falkland Islands">Falkland Islands</option>
    <option value="Faroe Islands">Faroe Islands</option>
    <option value="Fiji">Fiji</option>
    <option value="Finland">Finland</option>
    <option value="France">France</option>
    <option value="French Guiana">French Guiana</option>
    <option value="French Polynesia">French Polynesia</option>
    <option value="French Southern Ter">French Southern Ter</option>
    <option value="Gabon">Gabon</option>
    <option value="Gambia">Gambia</option>
    <option value="Georgia">Georgia</option>
    <option value="Germany">Germany</option>
    <option value="Ghana">Ghana</option>
    <option value="Gibraltar">Gibraltar</option>
    <option value="Great Britain">Great Britain</option>
    <option value="Greece">Greece</option>
    <option value="Greenland">Greenland</option>
    <option value="Grenada">Grenada</option>
    <option value="Guadeloupe">Guadeloupe</option>
    <option value="Guam">Guam</option>
    <option value="Guatemala">Guatemala</option>
    <option value="Guinea">Guinea</option>
    <option value="Guyana">Guyana</option>
    <option value="Haiti">Haiti</option>
    <option value="Hawaii">Hawaii</option>
    <option value="Honduras">Honduras</option>
    <option value="Hong Kong">Hong Kong</option>
    <option value="Hungary">Hungary</option>
    <option value="Iceland">Iceland</option>
    <option value="Indonesia">Indonesia</option>
    <option value="India">India</option>
    <option value="Iran">Iran</option>
    <option value="Iraq">Iraq</option>
    <option value="Ireland">Ireland</option>
    <option value="Isle of Man">Isle of Man</option>
    <option value="Israel">Israel</option>
    <option value="Italy">Italy</option>
    <option value="Jamaica">Jamaica</option>
    <option value="Japan">Japan</option>
    <option value="Jordan">Jordan</option>
    <option value="Kazakhstan">Kazakhstan</option>
    <option value="Kenya">Kenya</option>
    <option value="Kiribati">Kiribati</option>
    <option value="Korea North">Korea North</option>
    <option value="Korea Sout">Korea South</option>
    <option value="Kuwait">Kuwait</option>
    <option value="Kyrgyzstan">Kyrgyzstan</option>
    <option value="Laos">Laos</option>
    <option value="Latvia">Latvia</option>
    <option value="Lebanon">Lebanon</option>
    <option value="Lesotho">Lesotho</option>
    <option value="Liberia">Liberia</option>
    <option value="Libya">Libya</option>
    <option value="Liechtenstein">Liechtenstein</option>
    <option value="Lithuania">Lithuania</option>
    <option value="Luxembourg">Luxembourg</option>
    <option value="Macau">Macau</option>
    <option value="Macedonia">Macedonia</option>
    <option value="Madagascar">Madagascar</option>
    <option value="Malaysia">Malaysia</option>
    <option value="Malawi">Malawi</option>
    <option value="Maldives">Maldives</option>
    <option value="Mali">Mali</option>
    <option value="Malta">Malta</option>
    <option value="Marshall Islands">Marshall Islands</option>
    <option value="Martinique">Martinique</option>
    <option value="Mauritania">Mauritania</option>
    <option value="Mauritius">Mauritius</option>
    <option value="Mayotte">Mayotte</option>
    <option value="Mexico">Mexico</option>
    <option value="Midway Islands">Midway Islands</option>
    <option value="Moldova">Moldova</option>
    <option value="Monaco">Monaco</option>
    <option value="Mongolia">Mongolia</option>
    <option value="Montserrat">Montserrat</option>
    <option value="Morocco">Morocco</option>
    <option value="Mozambique">Mozambique</option>
    <option value="Myanmar">Myanmar</option>
    <option value="Nambia">Nambia</option>
    <option value="Nauru">Nauru</option>
    <option value="Nepal">Nepal</option>
    <option value="Netherland Antilles">Netherland Antilles</option>
    <option value="Netherlands">Netherlands (Holland, Europe)</option>
    <option value="Nevis">Nevis</option>
    <option value="New Caledonia">New Caledonia</option>
    <option value="New Zealand">New Zealand</option>
    <option value="Nicaragua">Nicaragua</option>
    <option value="Niger">Niger</option>
    <option value="Nigeria">Nigeria</option>
    <option value="Niue">Niue</option>
    <option value="Norfolk Island">Norfolk Island</option>
    <option value="Norway">Norway</option>
    <option value="Oman">Oman</option>
    <option value="Pakistan">Pakistan</option>
    <option value="Palau Island">Palau Island</option>
    <option value="Palestine">Palestine</option>
    <option value="Panama">Panama</option>
    <option value="Papua New Guinea">Papua New Guinea</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Phillipines">Philippines</option>
    <option value="Pitcairn Island">Pitcairn Island</option>
    <option value="Poland">Poland</option>
    <option value="Portugal">Portugal</option>
    <option value="Puerto Rico">Puerto Rico</option>
    <option value="Qatar">Qatar</option>
    <option value="Republic of Montenegro">Republic of Montenegro</option>
    <option value="Republic of Serbia">Republic of Serbia</option>
    <option value="Reunion">Reunion</option>
    <option value="Romania">Romania</option>
    <option value="Russia">Russia</option>
    <option value="Rwanda">Rwanda</option>
    <option value="St Barthelemy">St Barthelemy</option>
    <option value="St Eustatius">St Eustatius</option>
    <option value="St Helena">St Helena</option>
    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
    <option value="St Lucia">St Lucia</option>
    <option value="St Maarten">St Maarten</option>
    <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
    <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
    <option value="Saipan">Saipan</option>
    <option value="Samoa">Samoa</option>
    <option value="Samoa American">Samoa American</option>
    <option value="San Marino">San Marino</option>
    <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
    <option value="Saudi Arabia">Saudi Arabia</option>
    <option value="Senegal">Senegal</option>
    <option value="Seychelles">Seychelles</option>
    <option value="Sierra Leone">Sierra Leone</option>
    <option value="Singapore">Singapore</option>
    <option value="Slovakia">Slovakia</option>
    <option value="Slovenia">Slovenia</option>
    <option value="Solomon Islands">Solomon Islands</option>
    <option value="Somalia">Somalia</option>
    <option value="South Africa">South Africa</option>
    <option value="Spain">Spain</option>
    <option value="Sri Lanka">Sri Lanka</option>
    <option value="Sudan">Sudan</option>
    <option value="Suriname">Suriname</option>
    <option value="Swaziland">Swaziland</option>
    <option value="Sweden">Sweden</option>
    <option value="Switzerland">Switzerland</option>
    <option value="Syria">Syria</option>
    <option value="Tahiti">Tahiti</option>
    <option value="Taiwan">Taiwan</option>
    <option value="Tajikistan">Tajikistan</option>
    <option value="Tanzania">Tanzania</option>
    <option value="Thailand">Thailand</option>
    <option value="Togo">Togo</option>
    <option value="Tokelau">Tokelau</option>
    <option value="Tonga">Tonga</option>
    <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
    <option value="Tunisia">Tunisia</option>
    <option value="Turkey">Turkey</option>
    <option value="Turkmenistan">Turkmenistan</option>
    <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
    <option value="Tuvalu">Tuvalu</option>
    <option value="Uganda">Uganda</option>
    <option selected="selected" value="United Kingdom">United Kingdom</option>
    <option value="Ukraine">Ukraine</option>
    <option value="United Arab Erimates">United Arab Emirates</option>
    <option value="United States of America">United States of America</option>
    <option value="Uraguay">Uruguay</option>
    <option value="Uzbekistan">Uzbekistan</option>
    <option value="Vanuatu">Vanuatu</option>
    <option value="Vatican City State">Vatican City State</option>
    <option value="Venezuela">Venezuela</option>
    <option value="Vietnam">Vietnam</option>
    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
    <option value="Wake Island">Wake Island</option>
    <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
    <option value="Yemen">Yemen</option>
    <option value="Zaire">Zaire</option>
    <option value="Zambia">Zambia</option>
    <option value="Zimbabwe">Zimbabwe</option>
    </select>
                <div class="form__message"></div>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
            </div>
        </div>
        <div class="form__field">
            <label>Phone number</label>
            <div class="input">
                <input id="Phone" name="Phone" type="text" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field">
            <label>Contact preference</label>
            <div class="select">
                <div class="select__text">Email</div>
                <select class="required" id="ContactPreference" name="ContactPreference"><option value="Email">Email</option>
    <option value="Phone">Phone</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field hidden capacity-hidden">
            <label class="required">Tour affiliation</label>
            <div class="select">
                <div class="select__text">Select</div>
                <select class="required affiliation" id="Affiliation" name="Affiliation"><option value="">Please select</option>
    <option value="ATP">ATP</option>
    <option value="WTA">WTA</option>
    <option value="ITF">ITF</option>
    <option value="None">None</option>
    </select>
                <svg class="select__arrow" id="Ico_DownChev_Blue" data-name="Ico/DownChev/Blue" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8">
                    <path id="Path" d="M0,1.73,1.655,0,6,4.554,10.345,0,12,1.73,6,8Z" fill="#235773"></path>
                </svg>
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field hidden affiliation-hidden">
            <label class="required">IPIN / Playerzone ID</label>
            <div class="input">
                <input class="required" id="IDNumber" name="IDNumber" type="text" value="">
                <div class="form__message"></div>
            </div>
        </div>
        <div class="form__field form__field--submit">
            <span class="button button--next">
                <a href="">
                    Next
                    <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                        <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                            <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                        </g>
                        <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                    </svg>
                </a>
            </span>
        </div>
    </div>
    <div class="form">
    <div class="form__field">
        <label class="required">Please outline your enquiry below</label>
        <div class="textarea">
            <textarea class="required" cols="20" id="Message" name="Message" rows="2"></textarea>
            <div class="form__message"></div>
        </div>
    </div>
    <div class="form__field">
        <label>We’re all done, would you like a receipt of this report?</label>
        <label class="inline" for="">Yes</label>
        <div class="radio">
            <input id="Receipt" name="Receipt" type="radio" value="True">
            <span></span>
        </div>
        <label class="inline" for="">No</label>
        <div class="radio">
            <input checked="checked" id="Receipt" name="Receipt" type="radio" value="False">
            <span></span>
        </div>
    </div>
    <div class="form__field form__field--submit">
        <span class="button button--back">
            <a href="">
                Back
                <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                    <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                        <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                    </g>
                    <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
                </svg>
            </a>
        </span>
        <button class="button button--submit" type="submit">
            Submit
            <svg class="button__arrow" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17">
                <g id="np_chevron_1189476_225773" transform="translate(18 17) rotate(180)">
                    <path id="Path" d="M0,8.5l.9.994L7.678,17,10,15.011,4.114,8.5,10,1.989,7.678,0,.9,7.505Z" transform="translate(0)" class="a"></path>
                </g>
                <path id="Line" d="M13.5.5H.5" transform="translate(0 8)" fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="3" class="b"></path>
            </svg>
        </button>
    </div>
    </div>
    <input name="ufprt" type="hidden" value="92618DF33B16BFDCFABA1E5247C0913B2AC33B0848854C4DEC5B38DE061A361BC063FDF69932B722E4445FDD128E4C7D1697F4A1A144C87067A55D1EE10BF55CFA3E1B6CC3D099A51A341072E29A5D80DD2EB79F9146B3D59697A650F8AA021824E4660BB7EE4B45977E09FF3119BE63676A8E6748B2D35AF077373E465B14F8"></form>`
  }
}