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

class MyView404 extends PolymerElement {
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
        h1 {
          font-size:100px;
          color:#777;
          line-height:5px
        }
        p{
          color:#777;
        }
      </style>
      <div class="box">
        <h1>404</h1>
        <p>متاسفانه صفحه مورد نظر یافت نشد. 
        <a href="[[rootPath]]">بازگشت به صفحه اصلی</a></p>
        <h2>😕</h2>
      </div>
    `;
  }
}

window.customElements.define('my-view404', MyView404);
