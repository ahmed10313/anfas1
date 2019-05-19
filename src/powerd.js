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

class Powered extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
          text-align:center;
        }
        .box{
          margin-top:30vh;
        }
        a {
          color:#555;
          text-decoration:none
        }
        h1,h2,h3,h4 {
          color:#777;
        }
        p{
          color:#777;
        }
      </style>
      <div class="box">

      <h1 class="header-animation">ANFAS</h1>
      <h2>Cultural and Social Awakening</h2>
      <br />
      <h4>Powered By Hussain Nazarnejad. Polymer-Cli version 3.0</h4>

      </div>
    `;
  }
}

window.customElements.define('powered-page', Powered);
