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
import '@polymer/iron-ajax/iron-ajax'
import '@polymer/paper-button/paper-button'
import '@polymer/iron-icons/iron-icons'
import '@polymer/paper-icon-button/paper-icon-button.js';
class Posts extends PolymerElement {
    static get properties(){
        return {
            posts : Object
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
        cute-card {
            width:97%;
            margin:auto 1.5%;
        }
        #h3{
            float:right;
        }
        #new {
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
        .dl{clear:both; height: 30px;}
      </style>
      <br /><br />
      <iron-ajax
            auto
          id="ajax"
          url="http://api.anfas1.org/blog/"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300">
      </iron-ajax>

      <cute-card>
        <div class="card-content">
            <paper-icon-button id="new" icon="add"></paper-icon-button>
            <h3 id="h3">مطالب بلاگ</h3>
            <div class="dl"></div>


            <template is="dom-repeat" items="[[posts]]">
            <div class="item">
                <h5>[[item.topic]]</h5>
                    <div class="options">
                        <paper-icon-button icon="link" class="small"></paper-icon-button>
                        <paper-icon-button icon="delete" class="small"></paper-icon-button>
                        <paper-icon-button icon="assignment" class="small"></paper-icon-button>
                    </div>
            </div>
            </template>
            <div class="dl"></div>
        </div>
      </cute-card>

    `;
  }

  handleResponse(res){
    this.posts = res.detail.__data.response
    console.log(res)
    
  }
}

window.customElements.define('posts-cms', Posts);
