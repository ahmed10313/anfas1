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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/neon-animation/neon-animation';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/app-layout/app-layout-behavior/app-layout-behavior';
import '@polymer/paper-button/paper-button';
import '@cute/cute-toolbar/cute-toolbar';
import '@polymer/paper-spinner/paper-spinner';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>   :host {
        display: block;
        --cute-toolbar-background: #FFF;
        --paper-tabs-selection-bar-color: var(--paper-light-blue-100);
      }
      .red,home-app {
        width:100%;
        height:300px;
      }
      h3{
        font-size:18px;
        margin:10px 20px;
      }
      h3 > p {
        font-size:10px;
        color:#555;
        display:inline-block;
        padding: auto 10px;
      }
      app-drawer{
        z-index:2000
      }
      #fixed {
        height:40px;
        display:block;
      }
      .tool{
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row wrap;
        flex-flow: row wrap;
        justify-content:flex-start;
        align-items:center;
        margin:auto 15px;
      }
      .tool > img {
        object-fit:cover;
        height: 30px;
        margin:auto 15px
      }
      .tool > div {
        text-align:left;
        -webkit-flex: 1 auto;
        flex: 1 auto;
        padding:15px 5px;
      }
      #banner {
        width:100%;
        box-shadow:0 0 5px #222;
      }
      .hidden{
        opacity:0;
      }
      cute-toolbar{
        --cute-toolbar-tall : 50 px;
      }
      iron-selector#dra > *{
        display:block;
      }
      #prof {
        width:60%;
        margin:30px 20%;
        object-fit:cover;
  
      }
      .footer{
        position: relative;
        padding:30px;
        text-align:center;
        box-shadow:0 0 5px #222;
        background-color:#888;
      }
      paper-spinner {
        display:block;
        margin: 10vh auto;
      }
      app-drawer{
        --app-drawer-content-container: {
          background-color: #eee;
        }
      }
      @media(max-width:600px){
        cute-toolbar{
          --cute-toolbar-tall : 50 px;
        }
      .tool > div {
        display:none
      }
      }
      @media(min-width:600px){
        #menu{
          display:none
        }
      }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

        <!-- Main content -->

        <cute-toolbar fixed animated shadow>
        <div class="tool">
        <paper-icon-button id="menu" icon="my-icons:menu" on-click="toggle"></paper-icon-button>
          
        <h3>انفاس
        <p>موسسه فرهنگی اجتماعی</p>
        </h3>   
          <div>
          <iron-selector selected="{{routeData.page}}" attr-for-selected="href" id="#dra">
          <paper-button href="home">صفحه اصلی</paper-button>
          <paper-button href="edu">دوره ها و کارگاه ها</paper-button>
          <paper-button href="blog">مطالب</paper-button>
          <paper-button on-click="goto">ثبت نام در سمن انفاس</paper-button>
          <paper-button>درباره ما</paper-button>
          </iron-selector>
          </div> 
        </div>
        </cute-toolbar>
        <div id="fixed"></div>




        <neon-animated-pages class="flex" 
        selected='{{page}}'
        attr-for-selected='name'
        entry-animation='slide-from-left-animation'
        exit-animation='slide-right-animation'>
          
        <home-page name="home"><paper-spinner active></paper-spinner></home-page>
        <edu-page name="edu"><paper-spinner active></paper-spinner></edu-page>
        <blog-page name="blog"><paper-spinner active></paper-spinner></blog-page>
        <post-show name="post"><paper-spinner active></paper-spinner></post-show>
        <shop-show name="shop"><paper-spinner active></paper-spinner></shop-show>
        <class-show name="class"><paper-spinner active></paper-spinner></class-show>


        <login-page name="login"><paper-spinner active></paper-spinner></login-page>


        <my-view404 name="view404"><paper-spinner active></paper-spinner></my-view404>

        </neon-animated-pages>

<app-drawer id="drawer" align="right" swipe-open>
<img src="images/anfas.png" id="prof"/>
<iron-selector selected="{{routeData.page}}" attr-for-selected="href" id="dra">
<paper-button href="home">صفحه اصلی</paper-button>
<paper-button href="edu">دوره ها و کارگاه ها</paper-button>
<paper-button href="blog">مطالب</paper-button>
<paper-button >درباره ما</paper-button>
</iron-selector>
</app-drawer>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'home';
    } else if (['home', 'edu', 'blog', 'login', 'post', 'shop', 'class'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

      this.$.drawer.close();
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'home':
        import('./home-page.js');
        break;
      case 'edu':
        import('./edu-page.js');
        break;
      case 'blog':
        import('./blog-page.js');
        break;
      case 'post':
        import('./post-show.js');
        break;
      case 'shop':
        import('./shop-show.js');
        break;
      case 'class':
        import('./class-show.js');
        break;
      case 'login':
        import('./login.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }

  toggle()
  {
    this.$.drawer.toggle();
  }

  goto(){
    window.location = "http://register.anfas1.org/";
  }
}

window.customElements.define('my-app', MyApp);
