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

class ClassShow extends PolymerElement {
  constructor(){
    super();
    this.posts = []
    this.loading = true
  }
  static get properties(){
    return{
      posts : {type: Object},
      items : {type: Object},
      loading : {type: Boolean},
      itemLoading : {type: Boolean},
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
        
        *{
          
          font-family: 'El Messiri';
        }
        cute-card{
          width:90%;
          margin:25px 5%;
          display:inline-block;
          transition: all 0.8s ease;
        }
        .img {
          width:100%;
          height:100%;
          object-fit:cover;
        }
        .card-action{
          text-align:center;
        }
        .con{
          width:100%;
          margin-top: 6vh;
        }
      a{
        text-decoration: none;
        color:#444;
      }
        .load{
          height:200px;
          padding:0
        }
        #link *{
            display:block;
        }
        .item {
          display:block;
        }
         
      #content img{
        max-width:98%;
      }
      paper-spinner {
        display:block;
        margin: 20vh auto;
      }
        @media(min-width:700px){
          cute-card{
            width:70%;
            margin:25px calc(10%/2);
            margin-left: 1%;
            float:right;
            display:block;
          }
          #link{
            width:18%;
            margin:25px calc(10%/2);
            margin-right: 0%;
              float:left;
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

      <app-route route="{{route}}" pattern="[[rootPath]]:page/:id/:it" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <iron-ajax
      auto
      url="http://api.anfas1.org/workshop/shop/?shop={{routeData.id}}&req={{routeData.it}}"
      handle-as="json"
      on-response="handleResponse"
      debounce-duration="300"
      loading="{{loading}}"
      headers='{"cache-control": "no-cache"}'>
  </iron-ajax>

  <iron-ajax
  auto
  url="http://api.anfas1.org/workshop/shop/?id={{routeData.id}}"
  handle-as="json"
  on-response="handleResponseItems"
  debounce-duration="300"
  loading="{{itemLoading}}"
  headers='{"cache-control": "no-cache"}'>
</iron-ajax>



      <template is="dom-repeat" items="[[posts]]">
      <div class="con">
      
      <template is="dom-if" if="{{!loading}}">
      <cute-card id="cont">
        <div class="card-content">
        <h1>[[item.topic]]</h1>
        <p id="content" inner-h-t-m-l="{{con}}"></p>
        </div>
        <div class="card-action">
        <p>در تاریخ : [[item.date]]</p>
        </div>
      </cute-card>
      </template>



      <cute-card id="link">
      <div class="card-content">
      <h3>لیست جلسات :</h3>
      
      <template is="dom-repeat" items="[[items]]">
      <a href="class/{{routeData.id}}/[[item.id]]"><paper-button class="item">[[item.topic]]</paper-button></a>
      </template>

            
      <template is="dom-if" if="{{itemLoading}}">
      <paper-spinner active></paper-spinner>
      </template>

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
    this.con = this.posts[0].body
    }
    else{

    }
    
  }
  
  handleResponseItems(res){
    if(res.detail.__data.response != null)
    {
    this.items = res.detail.__data.response
    }
    else{

    }
    
  }
}

window.customElements.define('class-show', ClassShow);
