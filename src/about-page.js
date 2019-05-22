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

class About extends PolymerElement {
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
        .img {
          width:100%;
          object-fit:cover;
        }
        .card-action{
          text-align:right;
        }
        .head{
          width:100%;
          box-shadow:0 0 10px #333;
        }
        .con{
          width:100%;
          margin-top: -10vh;
          
          font-family: 'El Messiri';
        }
        #content{
          
          font-family: 'El Messiri';
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
      
      <div class="head"><img src="images/about.jpg" class="img"/></div>
      <div class="con">
      <cute-card animated>
        <div class="card-content">
        <h1>درباره انفاس</h1>
        <p>
        "
      <br />  انجمن فرهنگی اجتماعی سیمرغ" با نام اختصاری "انفاس" یک سازمان مردم نهاد (سمن) با موضوع پیشگیری از آسیب های اجتماعی و اولین سازمان از این نوع در شهرستان بجستان است. سمن انفاس با تلاش و پیگیری های مجدانه اعضای هیات موسس در دی ماه 1396 مراحل ثبت قانونی خود را به اتمام رساند و پس از ثبت رسمی، پروانه فعالیت خود را در تاریخ 08/11/1396 از فرمانداری شهرستان بجستان دریافت نمود.
رویکرد انفاس در پیشگیری از آسیب های اجتماعی، تمرکز بر آسیب های اجتماعی بنیادین و درمان آن ها برای تاثیر در کاهش و کنترل روند رو به افزایش آسیب های اجتماعی بحرانی است. محققان علوم رفتاری، آسیب های اجتماعی را به دو دسته آسیب های بنیادین و آسیب های بحرانی تقسیم بندی می کنند. طبق این دسته بندی، آسیب های اجتماعی همچون طلاق، اعتیاد، مهاجرت، خودکشی و امثال آن ها که بصورت ملموس در جامعه قابل مشاهده هستند را آسیب های اجتماعی بحرانی می نامند. دلیل ظهور چنین آسیب هایی در اجتماع به وجود آسیب هایی در حوزه باورها، ارزش ها و نگرش های افراد برمی گردد که در اصطلاح به آن ها آسیب های اجتماعی بنیادین می گویند. در پیشگیری از آسیب های اجتماعی توجه به این نکته حائز اهمیت است که آسیب های اجتماعی بحرانی ریشه در آسیب های بنیادین دارند و بر همین اساس برنامه های پیشگیرانه در راستای کاهش آسیب های بنیادین تاثیر فزینده ای بر پیشگیری و کاهش آسیب های اجتماعی بحرانی  و کنترل آن ها در آینده خواهد داشت. انفاس با پیش بینی چالش های آینده به طراحی راه حل های پیشگیرانه در زمان حال می پردازد. <br />
تیم تحقیق و توسعه انفاس با هدف کاهش آسیب های بنیادین در اولین اقدام ابتکاری خود دوره ی "بیداری قهرمان درون" را طراحی و اجرا کردند. "بیداری قهرمان درون" با یک رویکرد علمی و با ارائه تمرینات هدفمند و حساب شده، مخاطبین خود را گام به گام وارد یک سفر ذهنی چالش برانگیز می کند بگونه ای که مخاطب در طول این سفر نه تنها فرصت آگاه شدن از باورها، ارزش ها و نگرش های خود را می یابد بلکه به روشی مجهز می شود که بوسیله آن توانایی بازبینی و در صورت لزوم تغییر باورها، ارزش ها و نگرش های خود را خواهد داشت. اگر بخواهیم دوره ی "بیداری قهرمان درون" را در یک جمله خلاصه کنیم آن جمله این خواهد بود که: برای انجام تغییرات مثبت و پایدار در رفتارتان بایستی از تغییر باورها، ارزش ها و نگرش هایتان در ذهن ناخودآگاه شروع کنید. طبق تحقیقات و نظرات متخصصین علوم رفتاری و روانشناسان هر روشی غیر از این، چیزی جز خستگی و سرخوردگی و ناامیدی از انجام تغییر را برای شما در پی نخواهد داشت. چنانچه نگاهی به طرح ها و اقدامات جاری و یا آینده انفاس بیاندازید، نفوذ این رویکرد را در آن ها به وضوح تشخیص خواهید داد.<br />
انفاس سازمانی خودجوش مردمی و متعلق به مردم است که بوسیله تعدادی از جوانان شهرستان بجستان شکل گرفته که بصورت سازمان یافته در پی تحقق اهداف بشر دوستانه آن هستند. شما با عضویت در انفاس می توانید در تحقق این اهداف بشردوستانه سهیم باشید.
        </p>
        </div>
        <div class="card-action">
          <p>تماس با ما : <a href="tel:0912 505 5871">0912 505 5871</a></p>
          <p> ایمیل : <a href="mailto: kaamyab.y@gmail.com">kaamyab.y@gmail.com</a> </p>
        </div>
      </cute-card>
      </div>

    `;
  }

}

window.customElements.define('about-page', About);
