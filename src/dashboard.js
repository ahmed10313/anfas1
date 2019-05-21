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
import '@polymer/paper-input/paper-input'
import '@polymer/iron-form/iron-form'
import '@polymer/paper-toast/paper-toast';
import '@polymer/app-storage/app-localstorage/app-localstorage-document.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/neon-animation/neon-animation';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-spinner/paper-spinner';

class Dashboard extends PolymerElement {
  constructor(){
    super();
    this.THU = ""
  }
  static get properties(){
    return{
      params : {type: Object},
      user : String,
      routeData: Object,
      subroute: Object,
      athu: String,
      access: Boolean,
      tab: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
      @-webkit-keyframes loading {
        from {transform: translateX(-110%); -webkit-transform: translate3d(-110%,0,0);}
        to {transform: translateX(110%);-webkit-transform: translate3d(110%,0,0);}
    }
    @keyframes loading {
        from { transform: translateX(-110%); -webkit-transform: translate3d(-110%,0,0);}
        to { transform: translateX(110%);-webkit-transform: translate3d(110%,0,0);}
    }
    .header-animation {
                text-align:center;
                margin-top:20vh;
                color:#444;
    }
    h2,h3,h4{color:#666; text-align:center;}
      *{
          
        font-family: 'El Messiri';
      }
        :host {
          display: block;
          width:100%;
          height:100vh;
        }
        a{text-decoration:none; color:#222}
        cute-card{
          width:90%;
          height:fit-content;
          margin:auto;
          display:block;
          position:absolute;
          left:0;
          right:0;
          top:0;
          bottom:0;
        }
        .card-action{
          text-align:left;
        }
        .progress{
          width:100%;
          height:3px;
          overflow: hidden;
          background: #ccc;
      }
      .progress > div {
          width: 100%;
          height: 100%;
          background: #888;
          -webkit-animation: loading 1s linear infinite;
          animation: loading 1s linear infinite;
      }

      .menu{
          position:fixed;
          left:0;
          right:0;
          bottom:0;
          height:fit-content;
          background-color:#FFF;
          box-shadow:0 0 3px #555;
          padding:5px auto;
          display:block;
      }
        @media(min-width:700px){
          cute-card{
            width:40%;
          }
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page/:tab" data="{{routeData}}" tail="{{subroute}}">
      </app-route>


      <!-- Main CMS Content -->

      <template is="dom-if" if="{{access}}">  
      
      
      
            <neon-animated-pages class="flex" 
            selected='{{tab}}'
            attr-for-selected='name'
            entry-animation='slide-from-left-animation'
            exit-animation='slide-right-animation'>
                        
                <powered-page name="power"><paper-spinner active></paper-spinner></powered-page>
                <workshop-cms name="workshop"><paper-spinner active></paper-spinner></workshop-cms>
                <posts-cms name="posts"><paper-spinner active></paper-spinner></posts-cms>
                <newpost-cms name="newpost"><paper-spinner active></paper-spinner></newpost-cms>
    
            </neon-animated-pages>

            <div class="menu">
            
            <iron-selector selected="{{routeData.tab}}" attr-for-selected="href">
                <paper-button href="workshop">کارگروه ها</paper-button>
                <paper-button href="posts">مطالب</paper-button>
                <paper-button on-click="logOut"><a href=""> خروج </a></paper-button>
            </iron-selector>
            </div>
      </template>

        <!-- End CMS Content -->


<app-localstorage-document key="athu" data="{{athu}}">
</app-localstorage-document>
<app-localstorage-document key="user" data="{{user}}">
</app-localstorage-document>

      <iron-ajax
        auto
          id="http"
          url="http://api.anfas1.org/cms/athu.php?user={{user}} &athu={{athu}}"
          handle-as="text"
          on-response="handleResponse"
          debounce-duration="300"
          loading="{{loading}}">
      </iron-ajax>

      <paper-toast id="toast"></paper-toast>

    `;
  }
  handleResponse(e){
      console.log(e.detail.__data.response)
      if(e.detail.__data.response == "true")
      this.access = true;

      this.login()
  }
  connectedCallback()
  {
    super.connectedCallback();
    this.$.access = false;
    this.$.toast.text="در حال بررسی اطلاعات کاربری..."
    this.$.toast.open();
  }


  static get observers() {
    return [
      '_routePageChanged(routeData.tab)'
    ];
  }

  _routePageChanged(tab) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!tab) {
      this.tab = 'power';
    } else if (['power', 'workshop', 'posts', 'newpost'].indexOf(tab) !== -1) {
      this.tab = tab;
    } else {
      this.tab = 'view404';
    }
  }

  _pageChanged(tab) {
    
    switch (tab) {
        case 'power':
        import('./powerd.js');
        break;
    case 'workshop':
        import('./workshop-cms.js');
        break;
    case 'posts' :
        import('./posts-cms.js');
        break;
    case 'newpost' :
        import('./newpost-cms.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }

logOut(){
    this.athu = ""
    this.user = "";
}

login()
{
    if(!this.access){
    if(this.athu == ""){
        window.location="login"
    }
    }
}


}

window.customElements.define('dashboard-app', Dashboard);
