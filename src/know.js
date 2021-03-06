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

class Know extends PolymerElement {
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
          box-shadow:0 0 10px #333;
        }
        .card-action{
          text-align:right;
        }
        .head{
          width:100%;
        }
        .con{
          width:100%;
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
      
      <div class="head">
      <img src="images/know.jpg" /></div>
      <div class="con">
      <cute-card animated>
        <div class="card-content">

        <h1>خودآگاهی و درک رابطه خود با جهان هستی</h1>
 
        <p>
        با یادگیری مهارت های زندگی ما درک خود را از دنیای پیرامونمان گسترش داده و خودمان را به ابزارهایی که برای یک زندگی پربار و موفق نیاز داریم مجهز می کنیم. یافتن راه هایی که بر چالش های زندگی غلبه کنیم، چالش هایی که در دنیای تغییرات سریع و شتابان اجتناب ناپذیرند. زیستنی مثمر و موفق!
اما آیا تا بحال حقیقتا به معنای این واژگان زیبا اندیشیده ایم؟ مثمر، موفق، خوشبخت و سایر کلمات و اصطلاحاتی که آنگونه زیستن آرزوی همه انسان هاست. به فرض یادگیری تمامی مهارت های ضروری مورد نیاز آنگونه که سازمان های مختلف از جمله سازمان بهداشت جهانی (WHO) می گویند، آیا به مطلوب دست خواهیم یافت؟ واقعا با داشتن تمامی این ابزارها قادر به فائق آمدن بر چالش های زندگی خواهیم بود؟
        </p>

        <p>
        سوالی که اینجا مطرح می شود این است که این ابزارها را در چه جهتی و یا چه سمت و سویی می خواهیم بکار بگیریم؟ برای تحقق کدامین اهداف و یا ارزش ها؟ اصلا واژه های موفقیت، خوشبختی و یا کامیابی برای من به چه معناست؟ در چه صورتی می توانم خودم را موفق، خوشبخت یا کامیاب بنامم!؟ بازنگری در معنای این واژگان و تعریف مجدد آن ها بر اساس معیارهای اصیل مشخص خواهند کرد که ما چه ابزارهایی برای موفق، خوشبخت و یا کامیاب زیستن نیاز داریم و همچنین چگونه بایستی آن ها را بکارگیریم! 
اینجا دقیقا جایی است که خودآگاهی به کمک ما می آید. بسیاری از مردم یادگیری را با تحصیلات رسمی یکی می دانند، اما در واقع یادگیری یک فرآیند پیوسته در لحظه به لحظه طول عمر ماست که بطور مداوم درک ما در مورد خودمان و جهان هستی را گسترش داده و موجب بهبود کیفیت زندگی ما می شود. مسیر خودآگاهی در دوره ها و کارگاه های انفاس دارای دو شاخه اصلی است: 1- شناخت خود به مثابه یک گونه ی انسانی (بعد مادی و بعد غیر مادی) 2- شناخت خود به مثابه یک فرد (نقاط قوت و ضعف و ...) در طی این مسیر که یک مسیر مطمئن و آزمایش شده برای توسعه فردی است، با تلاش در انجام و تفکر بر تمرینات ارائه شده بخوبی قادر خواهید بود سوالات مطرح شده در خصوص نوع نیاز و جهت بکارگیری ابزارها برای خودتان پاسخ دهید و همچنین تعریف دقیقی از موفقیت و یا خوشبختی برای خودتان داشته باشید و البته تعاریفی منحصر به شخص خودتان! چرا که هیچکس بخوبی خودتان نمی تواند تشخیص دهد که چه چیز مناسب شماست، و صد البته بعد از خودآگاهی.
گام گذاردن در مسیر خودآگاهی به این شیوه موجب پرورش سایر مهارت های مورد نیاز به صورت هماهنگ و یکپارچه و متناسب خواهد شد. اولین مزیت شروع به یادگیری مهارت ها از مهارت خودآگاهی این است که شما بطور واضح خواهید دانست به چه مهارت هایی برای تجربه یک زندگی با کیفیت نیاز دارید و خودآگاهی چگونگی بدست آوردن آن ها را به شما نشان خواهد داد! شما اهداف زندگی و البته اهداف پنهان که تا بحال در زندگی روزمره توجهی به آن ها نداشتید را کشف خواهید کرد و همچنین انگیزه لازم برای حرکت برای تحقق آن ها را نیز در این مسیر بدست خواهید آورد. دلایل بسیاری وجود دارد که چرا بهتر است از خودآگاهی شروع کنیم ودر اینجا به همین اندک بسنده می کنم و صد البته که همین موارد ذکر شده برای من کفایت می کند تا در مسیر خودآگاهی بیشتر تلاش کنم و آن را اولویت اول خود بدانم! شما چطور؟
        </p>

        <p>
        فرض کنید تمام مهارت ها را مسلط هستید اما همانطور که در بالا بیان شد مطمئن نیستید که این ابزار ها را در چه جهتی استفاده کنید چرا که اهداف واقعیتان کاملا برایتان واضح نیست و حقیقتا نمی توانید بین اهداف واقعی و اهداف کاذبتان تمایزی قائل شوید. در چنین شرایطی آیا در اختیار داشتن این ابزارها و استفاده از آن ها تضمینی برای رسیدن به مطلوب خواهد بود؟ مسلما نه تنها موفقیت و یا خوشبختی پایدار در انتظار ما نخواهد بود بلکه کامیابی ما در زندگی در هاله ای از ابهام خواهد بود. همچنانکه امام صادق (ع)  به زیبایی می فرمایند: عمل کننده ی بدون بصیرت و فکر، همانند کسی است که به بیراهه می رود و سرعت حرکت در این مسیر چیزی جز دور شدن از مقصد به او نمی افزاید.
        </p>
        </div>
      </cute-card>
      </div>
      <div style="position:fixed; right:13px; bottom:13px;">
      <a href="edu">
        <paper-button style="background-color:#EEE; box-shadow:0 0 13px #444">دوره ها و کارگاه ها</paper-button>
      </a>
    </div>
    `;
  }

}

window.customElements.define('know-page', Know);
