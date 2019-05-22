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

class Post extends PolymerElement {
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
      subroute: Object,
      con: html
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
        #content img{
          max-width:98%;
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
            width:90%;
            margin:25px calc(10%/2);
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
          url="http://api.anfas1.org/blog/post.php?req={{routeData.id}}"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300"
          loading="{{loading}}">
      </iron-ajax>

      <template is="dom-repeat" items="{{posts}}" mutable-data>
      
      <div class="head"><img src="[[item.image]]" class="img"/></div>
      <div class="con">
      <cute-card animated>
        <div class="card-content">
        <h1>[[item.topic]]</h1>
        <p id="content" inner-h-t-m-l="{{con}}"></p>
        </div>
        <div class="card-action">
          <p> نوشته شده در تاریخ [[item.date]]</p>
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
}

window.customElements.define('post-show', Post);
