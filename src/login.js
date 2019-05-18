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
import '@cute/cute-card/cute-card'
import '@polymer/iron-ajax/iron-ajax'
import '@polymer/paper-input/paper-input'
class LoginPage extends PolymerElement {
  constructor(){
    super();
    this.post = []
    this.loasd = true
  }
  static get properties(){
    return{
      shops : {type: Object},
      loading : {type: Boolean}
    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
      *{
          
        font-family: 'El Messiri';
      }
        :host {
          display: block;
          width:100%;
          height:100vh;
        }
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

        @media(min-width:700px){
          cute-card{
            width:40%;
          }
        }
      </style>
      <cute-card>
        <div class="card-content">
        <h3>ورود به پنل مدیریت</h3>
        <paper-input label="نام کاربری"></paper-input>
        <paper-input label="کلمه عبور" type="password"></paper-input>
        </div>
        <div class="card-action">
        <paper-button>ورود</paper-button>
        </div>
      </cute-card>
    `;
  }
}

window.customElements.define('login-page', LoginPage);
