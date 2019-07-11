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
import './edupart-page'
import '@cute/cute-card/cute-card'
import '@polymer/neon-animation/neon-animation';
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js';
class Home extends PolymerElement {
  static get properties(){
    return {
      introduction : {type: Boolean, value: true}
    }
  }
  static get template() {
    return html`
    
      <style include="shared-styles">

@-webkit-keyframes text-shadow-drop-center {
  0% {
    text-shadow: 0 0 0 cyan;
    color:#000;
  }
  100% {
    text-shadow: 0 0 5px white;
    color:#888;
  }
}
@keyframes text-shadow-drop-center {
  0% {
    text-shadow: 0 0 0 cyan;
    color:#000;
  }
  100% {
    text-shadow: 0 0 5px white;
    
    color:#888;
  }
}

        :host {
          display: block;
        }
        *{
          
          font-family: 'El Messiri';
        }
        .container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          grid-column-gap: 20px;
          grid-row-gap: 20px;
          justify-items: stretch;
          align-items: stretch;
       }
        h2{
          padding:50px 2% 0px;
        }
        cute-card {
          padding: 0;
          position:relative;
          margin-top:20px;
          min-height:250px;
          height:250px;
          text-shadow:0 0 5px #FFF;
        }
        cute-card > img{
          width:100%;
          height:100%;
          position:absolute;
          mix-blend-mode: luminosity;
          filter : brightness(250%)
        }
        cute-card:nth-child(2) > img{
          width:100%;
          height:100%;
          position:absolute;
          mix-blend-mode: luminosity;
          filter : brightness(1000%)
        }
        .card-action {
          padding : 10px;
          text-align:left;
        }
        .header {
          background-image: url('images/7ekvXy.jpg');
          background-size: cover;
          width:100%;
          height:100vh;
          background-repeat:no-repeat;
          background-position:center;
          text-align:left;
          box-shadow:0 0 6px #333;
        }
        .header > img {
          width:80%;
          margin: 15vh calc(20%/2);
        }

        li > a{
          text-decoration:none;
          color: #222;
          font-weight:bold;
          text-shadow:0 0 5px #FFFFFF;
        }


        .one{
          
	-webkit-animation: text-shadow-drop-center 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) infinite alternate both;
  animation: text-shadow-drop-center 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) infinite alternate both;
        }
        .two{

          -webkit-animation: text-shadow-drop-center 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.3s infinite alternate both;
	        animation: text-shadow-drop-center 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.3s infinite alternate both;
        }

        .tree{

          -webkit-animation: text-shadow-drop-center 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.6s infinite alternate both;
	        animation: text-shadow-drop-center 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) 0.6s infinite alternate both;
        }
        @media(min-width:700px){
          .header > img {
            width:30%;
            margin: 20vh calc(20%/2);
          }
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            justify-items: stretch;
            align-items: stretch;
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

      <div class="container">
      <cute-card animated>
        <img src="images/IMG_1.jpg"/>
        <div class="card-content">
        <h1>چشم انداز</h1>
        <p>توسعه فردی متوازن در تمام ابعاد زندگی</p>
        </div>
      </cute-card>

      
      <cute-card animated>
      <img src="images/IMG_2.jpg" />
      <div class="card-content">
        <h1>ماموریت</h1>
        <p>ترویج تفکر ارزشی و فرآهم کردن فرصت کسب مهارت های اساسی زندگی بر پایه خودآگاهی و درک رابطه خود با جهان هستی</p>
        <ul>
        <li> <a href="arzesh" class="one">تفکر ارزشی</a> </li>
        <li> <a href="maharat" class="two">مهارت های زندگی</a> </li>
        <li> <a href="know" class="tree">خودآگاهی و درک رابطه خود با جهان هستی</a> </li>
        </ul>
        </div>
      </cute-card>

      
      <cute-card animated>
      <img src="images/IMG_3.jpg"/>
      <div class="card-content">
        <h1>اهداف</h1>
        <p>کاهش آسیب های اجتماعی بحرانی با ارائه و اجرای راه حل ها در حوزه آسیب های اجتماعی بنیادین 
   <br />     ایجاد انگیزه برای تغییر و توسعه فردی در جوانان 
   <br />     ترویج هدفگذاری صحیح در بین جوانان 
   <br />     ارائه و آموزش شیوه های مدرن تغییر و توسعه فردی 
   <br />     آموزش مهارت های اساسی زندگی به کودکان و نوجوانان از طریق تغییر رفتار والدین</p>
      </div>
      </cute-card>
</div>


      <h2>کارگاه های اموزشی</h2>
      <part-page></part-page>


      
      <app-localstorage-document key="mession" data="{{introduction}}">
      </app-localstorage-document>
<template is="dom-if" if="{{introduction}}">

<div style="position:fixed; right:13px; bottom:13px;">
<a href="arzesh" style="text-decoration:none; color:#333">
  <paper-button on-click="mkfls" style="background-color:#EEE; box-shadow:0 0 13px #444">اشنایی با ماموریت انفاس</paper-button>
</a>
</div>

</template>
    `;
  }
mkfls(){
  
  this.introduction = false;
}
  connectedCallback() {
    super.connectedCallback();
  }

  ready() {
    super.ready();
  }
}

window.customElements.define('home-page', Home);
