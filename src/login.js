/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js'
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@cute/cute-card/cute-card'
import '@polymer/iron-ajax/iron-ajax'
import '@polymer/paper-input/paper-input'
import '@polymer/iron-form/iron-form'
import '@polymer/paper-toast/paper-toast'
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js';

class LoginPage extends PolymerElement {
  constructor(){
    super();
    this.thu = "no"
  }
  static get properties(){
    return{
      params : {type: Object},
      user : String,
      pass : String,
      routeData: Object,
      subroute: Object,
      thu: String
    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
      @-webkit-keyframes loading {
        from {transform: translateX(-110%); -webkit-transform: translate3d(-110%,0,0);}
        to {transform: translateX(110%);-webkit-transform: translate3d(110%,0,0);}
    }
    @keyframes loading {
        from { transform: translateX(-110%); -webkit-transform: translate3d(-110%,0,0);}
        to { transform: translateX(110%);-webkit-transform: translate3d(110%,0,0);}
    }
      *{
          
        font-family: 'El Messiri';
      }
        :host {
          display: block;
          width:100%;
          height:100vh;
        }
        a{text-decoration:none; color:#222}
        cute-card{
          width:90%;
          height:fit-content;
          margin:auto;
          display:block;
          position:absolute;
          left:0;
          right:0;
          top:0;
          bottom:0;
        }
        .card-action{
          text-align:left;
        }
        .progress{
          width:100%;
          height:3px;
          overflow: hidden;
          background: #ccc;
      }
      .progress > div {
          width: 100%;
          height: 100%;
          background: #888;
          -webkit-animation: loading 1s linear infinite;
          animation: loading 1s linear infinite;
      }
        @media(min-width:700px){
          cute-card{
            width:40%;
          }
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <iron-ajax
          id="http"
          url="http://api.anfas1.org/login.php?username={{user}}&password={{pass}}"
          handle-as="text"
          on-response="handleResponse"
          debounce-duration="300"
          loading="{{loading}}">
      </iron-ajax>

      
      <iron-ajax
      id="getToken"
      url="http://api.anfas1.org/cms/token.php?token={{pass}}"
      handle-as="text"
      on-response="getTokenRes"
      debounce-duration="300"
      loading="{{loading}}">
  </iron-ajax>


      <cute-card>
        <div class="card-content">
        
          <iron-form id="loginForm">
            <form action="cms/" id="form">
                  <h3>ورود به پنل مدیریت</h3>
                  <paper-input label="نام کاربری" name="username" value="{{user}}" required></paper-input>
                  <paper-input label="کلمه عبور" type="password" name="password" value="{{pass}}" required></paper-input>
                  </div>
                  <div class="card-action">
                  <paper-button on-click="submit">ورود</paper-button>
                  
                  <template is="dom-if" if="{{loading}}"><div class="progress"><div></div></div></template>
                  </div>
            </form>
        <iron-form>
      </cute-card>
      <paper-toast id="toast"></paper-toast>
      

      <app-localstorage-document key="athu" data="{{thu}}">
      </app-localstorage-document>
      <app-localstorage-document key="user" data="{{user}}">
      </app-localstorage-document>
    `;
  }

  submit(e){
    this.$.loginForm.submit()
  }
  handleResponse(e)
  {
    if(e.detail.__data.response == "Invalid")
    {
      this.$.toast.text = "نام کاربری یا رمز اشتباه است"
      this.$.toast.open();
      history.back();
    }
    if(e.detail.__data.response == "valid")
    {
      this.routeData.page="cms"
      this.$.toast.text = "هدایت به پنل..."
      this.$.toast.open();
      this.$.getToken.generateRequest();
    }
  }
  getTokenRes(e){
    this.thu= e.detail.__data.response;
    window.location = "cms"
  }

  connectedCallback()
  {
    super.connectedCallback();
    var me = this;
    this.$.loginForm.addEventListener('iron-form-submit', function(event) {
      me.$.http.generateRequest()
    });
  }



}

window.customElements.define('login-page', LoginPage);
