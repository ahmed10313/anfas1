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
import './shared-styles.js';

class Home extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .header {
          background-image: url('images/7ekvXy.jpg');
          background-size: cover;
          width:100%;
          height:94vh;
          background-repeat:no-repeat;
          background-position:center;
          text-align:left;
          box-shadow:0 0 6px #333;
        }
        .header > img {
          width:80%;
          margin: 15vh calc(20%/2);
        }


        @media(min-width:700px){
          .header > img {
            width:30%;
            margin: 20vh calc(20%/2);
          }
        }
        @media(min-width:1024px){
          .header > img {
            width:25%;
            margin: 20vh calc(20%/2);
          }
        }
        @media(min-width:1440px){
          .header > img {
            width:20%;
            margin: 25vh calc(20%/2);
          }
        }
        @media(min-width:2560px){
          .header > img {
            width:20%;
            margin: 20vh calc(20%/2);
          }
        }
      </style>
      <div class="header">
        <img src="images/anfas1.png" />
      </div>
    `;
  }
}

window.customElements.define('home-page', Home);
