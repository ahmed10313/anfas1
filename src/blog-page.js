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
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';

class Blog extends PolymerElement {
  constructor(){
    super();
    this.posts = []
    this.loading = true
    this.last = false
  }
  static get properties(){
    return{
      posts : {type: Object},
      loading : {type: Boolean},
      req : {type:Number, value:0},
      last : Boolean
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
        }
        img {
          width:100%;
          object-fit:cover;
        }
        .card-action{
          text-align:left;
        }
        .head{
          height:90vh;
          width:100%;
          background-image: url('images/blog.jpg');
          background-size:cover;
          background-position: center;
          box-shadow:0 0 15px #333;
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
          height:400px;
          padding:0
        }
        @media(min-width:700px){
          cute-card{
            width:30%;
            margin:25px calc(10%/7);
          }
          .load{
            display:inline-block;
            height:400px;
            width:30%;
            margin:25px calc(10%/7);
            padding:0
          }
        }
      </style>
      <div class="head"></div>
      <div class="con">
      <iron-ajax
          id="ajax"
          url="http://api.anfas1.org/blog/?req={{req}}"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300"
          loading="{{loading}}"
          headers='{"cache-control": "no-cache"}'>
      </iron-ajax>

      <template is="dom-repeat" items="[[posts]]">
      <cute-card animated>
      <img src="[[item.image]]" />
        <div class="card-content">
        <h1>[[item.topic]]</h1>
        <p>[[item.summ]]</p>
        </div>
        <div class="card-action">
          <a href="post/[[item.ID]]"><paper-button>بیشتر</paper-button></a>
        </div>
      </cute-card>
      </template>

      
<template is="dom-if" if="{{loading}}">
<div class="card load"><lazy-placeholder></lazy-placeholder></div>
<div class="card load"><lazy-placeholder></lazy-placeholder></div>
<div class="card load"><lazy-placeholder></lazy-placeholder></div>
</template>

<iron-scroll-threshold scroll-target="document" on-lower-threshold="loadMoreData" id="threshold">

</iron-scroll-threshold>
</div>
    `;
  }

  handleResponse(res){
    if(res.detail.__data.response != null)
    {
    this.last=false;
    this.loaded(res.detail.__data.response)
    }
    else{
      this.last= true
    }
    
  }
  
  loadMoreData(){
    if(!this.loading)if(!this.last)this.$.ajax.generateRequest();
    setTimeout(() => {
      this.$.threshold.clearTriggers();
    }, 2000);
  }
  
  loaded(e) {
    if(e[2] != null) this.req = e[2].ID
    else{
    if(e[1] != null) this.req = e[1].ID
    else{
    if(e[0] != null) this.req = e[0].ID
    }
    }


    if(!this.last)
    {
      var repeat = false;
    var self = this;
    var people = e;
    if(e[2] == this.req) repeat = true
    else{
    if(e[1] == this.req) repeat = true
    else{
    if(e[0] == this.req) repeat = true
    }
    }
    people.forEach(function(element) 
    {
      if(!repeat) self.push('posts', element)
    });
  }
  }
  connectedCallback() {
    super.connectedCallback();
    this.$.ajax.generateRequest()
  }
}

window.customElements.define('blog-page', Blog);
