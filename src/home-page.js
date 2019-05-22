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
import './edu-page'
import '@cute/cute-card/cute-card'
import '@polymer/neon-animation/neon-animation';
class Home extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        *{
          
          font-family: 'El Messiri';
        }
        h2{
          padding:50px 2% 0px;
        }
        cute-card {
          padding: 0;
          position:relative;
        }
        cute-card > .img{
          width:100%;
          height:200px;
          background: linear-gradient(to right, orange, black);
          position:absolute
        }
        .image {
          width:100%;
          height:200px;
          object-fit:cover;
          mix-blend-mode: luminosity
        }
        .card-action {
          padding : 10px;
          text-align:left;
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
          cute-card {
            width:30%;
            margin:25px calc(9%/6);
            display:inline-block;
          }
        }
        @media(min-width:1024px){
          .header > img {
            width:25%;
            margin: 20vh calc(20%/2);
          }
          cute-card {
            width:29%;
            display:inline-block;
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

      
      <cute-card animated>
        <div class="img"></div>
        <img src="images/IMG_1.jpg" class="image"/>
        <div class="card-content">
        <h1>چشم انداز</h1>
        <p>توسعه فردی متوازن در تمام ابعاد زندگی</p>
        <br /><br /><br /><br /><br /><br />
        </div>
        <div class="card-action">
        <paper-button>بیشتر</paper-button>
        </div>
      </cute-card>

      
      <cute-card animated>
      <div class="img"></div>
      <img src="images/IMG_2.jpg"  class="image"/>
      <div class="card-content">
        <h1>ماموریت</h1>
        <p>ترویج تفکر ارزشی و فرآهم کردن فرصت کسب مهارت های اساسی زندگی بر پایه خودآگاهی و درک رابطه خود با جهان هستی</p>
        <br /><br /><br /><br /><br />
        </div>
        <div class="card-action">
        <paper-button>بیشتر</paper-button>
        </div>
      </cute-card>

      
      <cute-card animated>
      <div class="img"></div>
      <img src="images/IMG_3.jpg"  class="image"/>
      <div class="card-content">
        <h1>اهداف</h1>
        <p>کاهش آسیب های اجتماعی بحرانی با ارائه و اجرای راه حل ها در حوزه آسیب های اجتماعی بنیادین 
   <br />     ایجاد انگیزه برای تغییر و توسعه فردی در جوانان 
   <br />     ترویج هدفگذاری صحیح در بین جوانان 
   <br />     ارائه و آموزش شیوه های مدرن تغییر و توسعه فردی 
   <br />     آموزش مهارت های اساسی زندگی به کودکان و نوجوانان از طریق تغییر رفتار والدین</p>
      </div>
      <div class="card-action">
      <paper-button>بیشتر</paper-button>
      </div>
      </cute-card>



      <h2>کارگاه های اموزشی</h2>
      <edu-page></edu-page>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();
  }
}

window.customElements.define('home-page', Home);
