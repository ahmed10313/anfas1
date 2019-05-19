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
import '@cute/cute-helpers/loaders/lazy-placeholder'
class EDU extends PolymerElement {
  constructor(){
    super();
    this.shops = []
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
        :host {
          display: block;
        }
        cute-card{
          width:90%;
          margin:25px 5%;
          display:inline-block;
        }
        .img {
          width:100%;
          object-fit:cover;
        }
        .card-action{
          text-align:left;
        }
        .head{
          height:30px;
          width:100%;
        }
        .card-content > p{
          height:100px;
          overflow: hidden;
        }
      a{
        text-decoration: none;
        color:#444;
      }
        .load{
          height:200px;
          padding:0
        }
        @media(min-width:700px){
          cute-card{
            width:30%;
            margin:25px calc(10%/7);
          }
          .load{
            display:inline-block;
            height:200px;
            width:30%;
            margin:25px calc(10%/7);
            padding:0
          }
        }
      </style>
      <div class="head"></div>
      
      <iron-ajax
          auto
          url="http://api.anfas1.org/workshop/"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300"
          loading="{{loading}}">
      </iron-ajax>

      <template is="dom-repeat" items="[[shops]]">
      <cute-card animated>
      <img src="[[item.image]]" class="img"/>
        <div class="card-content">
        <h1>[[item.topic]]</h1>
        <p>[[item.body]]</p>
        </div>
        <div class="card-action">
          <a href="shop/[[item.id]]"><paper-button>بیشتر</paper-button></a>
        </div>
      </cute-card>
      </template>

      
<template is="dom-if" if="{{loading}}">
<div class="card load"><lazy-placeholder></lazy-placeholder></div>
<div class="card load"><lazy-placeholder></lazy-placeholder></div>
<div class="card load"><lazy-placeholder></lazy-placeholder></div>
</template>
    `;
  }

  handleResponse(res){
    this.shops = res.detail.__data.response
  }
}

window.customElements.define('edu-page', EDU);
