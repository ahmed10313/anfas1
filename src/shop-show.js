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
import '@polymer/paper-spinner/paper-spinner';
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'

class Shop extends PolymerElement {
  constructor(){
    super();
    this.posts = []
    this.loading = true
  }
  static get properties(){
    return{
      posts : {type: Object},
      loading : {type: Boolean},
      req : {type:Number, value:0},
      routeData: Object,
      subroute: Object
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
          height:100%;
          object-fit:cover;
        }
        .card-action{
          text-align:center;
        }
        .head{
          height:85vh;
          width:100%;
          box-shadow:0 0 10px #333;
        }
        .con{
          width:100%;
          margin-top: -35vh;
        }
      a{
        text-decoration: none;
        color:#444;
      }
        .load{
          height:200px;
          padding:0
        }
        
      paper-spinner {
        display:block;
        margin: 20vh auto;
      }
        @media(min-width:700px){
          cute-card{
            width:70%;
            margin:25px calc(10%/2);
            margin-left: 2.5%;
            float:right;
            display:block;
          }
          #link{
              
            width:15%;
            margin:25px calc(10%/2);
            margin-right: 0%;
          }
          #link *{
              display:block;
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
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page/:id" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <iron-ajax
          auto
          url="http://api.anfas1.org/workshop/?req={{routeData.id}}"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300"
          loading="{{loading}}">
      </iron-ajax>

      <template is="dom-repeat" items="[[posts]]">
      
      <div class="head"><img src="[[item.image]]" class="img"/></div>
      <div class="con">
      <cute-card id="cont">
        <div class="card-content">
        <h1>[[item.topic]]</h1>
        <p>[[item.body]]</p>
        </div>
        <div class="card-action">
        </div>
      </cute-card>
      
      <cute-card id="link">
      <div class="card-content">
      <h3>لیست جلسات :</h3>
      <paper-button>جلسه 1</paper-button>
      <paper-button>جلسه 2</paper-button>
      <paper-button>جلسه 3</paper-button>
      <paper-button>جلسه 4</paper-button>
      <paper-button>جلسه 5</paper-button>
      <paper-button>جلسه 6</paper-button>
      <paper-button>جلسه 7</paper-button>
      <paper-button>جلسه 8</paper-button>
      <paper-button>جلسه 9</paper-button>
      <paper-button>جلسه 10</paper-button>
      <paper-button>جلسه 11</paper-button>
      </div>
      </cute-card>
      </div>
      </template>

      
<template is="dom-if" if="{{loading}}">
<paper-spinner active></paper-spinner>
</template>

    `;
  }

  handleResponse(res){
    if(res.detail.__data.response != null)
    {
    this.posts = res.detail.__data.response
    }
    else{

    }
    
  }
}

window.customElements.define('shop-show', Shop);
