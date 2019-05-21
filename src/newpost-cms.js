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
import '@polymer/paper-input/paper-input'
import '@vaadin/vaadin-rich-text-editor/vaadin-rich-text-editor.js';
var img;
class newPost extends PolymerElement {
    static get properties(){
        return {
            posts : Object,
            loading :Boolean,
            user : String,
            athu : String,
            requ : Boolean,
            content : String,
            topic : String,
            image : String,
            date : String,
            summ: String
        }
    }
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
          text-align:right;
        }
        *{
          
            font-family: 'El Messiri';
          }
          a{text-decoration:none; color:#222;}
        cute-card {
            width:97%;
            margin:auto 1.5%;
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
      <br /><br />

      <cute-card>
      <template is="dom-if" if="{{requ}}"><cute-progress></cute-progress></template>
      {{image}}
      <div class="card-content">
      <paper-input value="{{topic}}" label="موضوع"></paper-input>
      <paper-input type="file" id="myFile" on-change="_handleFiles"></paper-input>
      <vaadin-rich-text-editor id="editor">
      </vaadin-rich-text-editor>
      <paper-input value="{{summ}}" label="خلاصه"></paper-input>
      </div>
        <div class="card-action">
            <paper-button on-click="post">انتشار</paper-button>
        </div>
      </cute-card>
<br />
<br />
<br />

      <iron-ajax
          id="request"
          handle-as="text"
          on-response="functionRes"
          debounce-duration="300"
          method="POST"
          headers='{"Content-Type": "application/json"}'
          content-type="application/x-www-form-urlencoded"
          loading="{{requ}}">
      </iron-ajax>

      
<app-localstorage-document key="athu" data="{{athu}}">
</app-localstorage-document>
<app-localstorage-document key="user" data="{{user}}">
</app-localstorage-document>
<paper-toast id="log"></paper-toast>
    `;
  }


  post(e){
var tt = this;
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       console.log(xhttp.responseText)
    }
};
xhttp.open("POST", "http://api.anfas1.org/cms/blog/new/", true);
var fd = new FormData();

fd.append("user", this.user);
fd.append("athu", this.athu);
fd.append("topic", this.topic);
fd.append("body", this.$.editor.htmlValue);
fd.append("image", img);
fd.append("summ", this.summ);
xhttp.send(fd);
  }

  _handleFiles(e) {
    console.log(this.$.myFile.inputElement.inputElement.files[0])
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       img = xhttp.responseText
       console.log(img)
    }
};
xhttp.open("POST", "http://api.anfas1.org/upload.php", true);
var fd = new FormData();
fd.append("file", this.$.myFile.inputElement.inputElement.files[0]);
xhttp.send(fd);
  
  }


  // component Functions
  //***************************** */
  
  functionRes(res){
      console.log(res)
    if(res.detail.__data.response == "done") this.log("نوشته انتشار یافت")
    else this.log("خطا : "  + res.detail.__data.response)
  }

  log(msg){
    this.$.log.text=msg;
    this.$.log.open();
  }

  PEREMESSION()
  {
    return "user="+this.user+"&athu="+this.athu
  }

  connectedCallback()
  {
      super.connectedCallback()
  }

}

window.customElements.define('newpost-cms', newPost);
