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
import '@cute/cute-card/cute-card'
import '@cute/cute-helpers/loaders/progress'
import '@polymer/iron-ajax/iron-ajax'
import '@polymer/paper-button/paper-button'
import '@polymer/iron-icons/iron-icons'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js'
import '@cute/cute-helpers/loaders/lazy-placeholder'
import '@polymer/paper-toast/paper-toast'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
class Shop extends PolymerElement {
  static get properties(){
    return {
        posts : Object,
        loading :Boolean,
        user : String,
        athu : String,
        requ : Boolean
    }
}
  static get template() {
    return html`
      <style>
      :host {
        display: block;
        padding: 10px 20px;
        text-align:center;
      }
      *{
        
          font-family: 'El Messiri';
        }
        a{text-decoration:none; color:#222;}
      cute-card {
          width:97%;
          margin:auto 1.5%;
      }
      #h3{
          float:right;
      }
      .new {
          float:left;
      }
      h5 {
          display:inline-block;
          text-align:right;
          float:right;
          margin:0;
          padding:17px;
          line-height:0;
      }
      .item {
          width:100%;
          display:block;
          clear:both;
      }
      .item:hover {
          background-color:rgb(236, 236, 236);
      }
      .options{
          text-align:left;
          display:inline-block;
          float:left;
      }
      .small{
          width:35px;
          height:35px;
      }

      .load {
        width:100%;
        height:20px;
        margin:2px auto;
      }
      .dl{clear:both; height: 30px;}
      </style> 
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page/:tab/:id" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      <br /><br />
      <iron-ajax
      auto
      url="http://api.anfas1.org/workshop/?req={{routeData.id}}"
      handle-as="json"
      on-response="getinfo"
      debounce-duration="300"
      loading="{{loading}}">
  </iron-ajax>

      <iron-ajax 
          auto
          id="ajax"
          url="http://api.anfas1.org/workshop/shop/?id={{routeData.id}}"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300"
          loading="{{requ}}">
      </iron-ajax>

      <cute-card>
      <template is="dom-if" if="{{requ}}"><cute-progress></cute-progress></template>

        <div class="card-content">
        <a href="cms/newclass/{{routeData.id}}" class="new"><paper-icon-button icon="add"></paper-icon-button></a>
        <a on-click="refresh" class="new"><paper-icon-button icon="cached"></paper-icon-button></a>
            <h3 id="h3">کارگاه : {{shopName}}</h3>
            <div class="dl"></div>
            <template is="dom-repeat" items="[[posts]]">
            <div class="item">
                <h5>[[item.topic]]</h5>
                    <div class="options">
                    <a href="class/{{routeData.id}}/[[item.id]]"><paper-icon-button icon="link" class="small"></paper-icon-button></a>
                    <paper-icon-button icon="delete" class="small" on-click="delete" arg="[[item.id]]"></paper-icon-button>
                    </div>
            </div>
            </template>
            <div class="dl"></div>
        </div>
      </cute-card>


      <iron-ajax
          id="request"
          handle-as="text"
          on-response="functionRes"
          debounce-duration="300"
          loading="{{requ}}">
      </iron-ajax>

      
<app-localstorage-document key="athu" data="{{athu}}">
</app-localstorage-document>
<app-localstorage-document key="user" data="{{user}}">
</app-localstorage-document>
<paper-toast id="log"></paper-toast>
    `;
  }
  refresh(){this.$.ajax.generateRequest()}


  delete(e){
    var id = e.model.__data.item.id
    this.$.request.url="http://api.anfas1.org/cms/workshop/class/delete/?class="+this.routeData.id+"&id="+id+"&"+this.PEREMESSION()
    this.$.request.generateRequest();
  }



  // component Functions
  //***************************** */
  
  functionRes(res){
    if(res.detail.__data.response == "Deleted") this.log("کلاس حذف شد")
    else this.log("خطا : "  + res.detail.__data.response)

    this.refresh();
  }

  getinfo(e){
    this.shopName = e.detail.__data.response[0].topic
  }

  handleResponse(res){
    
    this.posts = res.detail.__data.response
    
    console.log(this.posts)
  }

  log(msg){
    this.$.log.text=msg;
    this.$.log.open();
  }

  PEREMESSION()
  {
    return "user="+this.user+"&athu="+this.athu
  }

}

window.customElements.define('shop-cms', Shop);
