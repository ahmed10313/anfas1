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

class Maharat extends PolymerElement {
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
      <img src="images/maharat.jpg" /></div>
      <div class="con">
      <cute-card animated>
        <div class="card-content">

        <h1>مهارت های زندگی</h1>
        <p>
        اصطلاح "مهارت های زندگی" به کلیه مهارت هایی گفته می شود که به شما کمک می کنند بیشترین بهره ممکن را از زندگی خود ببرید.   
        </p>
        
        <p>هر مهارتی که در زندگی برایتان مفید است می تواند یک مهارت زندگی در نظر گرفته شود. بنا به مقطعی که در آن زندگی می کنید از بستن بندهای کفشتان تا شنا کردن، رانندگی کردن، استفاده از کامپیوتر، دوست یابی و ... هر کدام می توانند یکی از مهارت های اساسی زندگی برای شما به حساب آیند. اما بطور کلی مهارت هایی که برای سازگاری و مواجهه مثبت و سازنده با چالش های زندگی مورد نیازند، "مهارت های اساسی زندگی" نامیده می شوند یا به عبارت دیگر، مهارت هایی که به شخص این امکان را می دهند که بتواند نسبت به مسائل زندگی بطور کارآمد و موثر واکنش نشان دهد.
        </p>
        
        <p>
        بنابراین با توجه به شرایط (اهداف شخصی، نوع شخصیت و ...) برای هر شخصی ممکن است لیست متفاوتی از مهارت ها به عنوان مهارت های اساسی زندگی در نظر گرفته شود، مهارت هایی که ممکن است برای شخص دیگر آنچنان ضروری بنظر نرسد.
        </p>
        
        <p>
            <h3>مهارت های اساسی زندگی</h3>
            هیچ لیست مشخصی از مهارت های زندگی وجود ندارد. بسته به شرایط زندگی، فرهنگ، باورها، سن، موقعیت جغرافیایی و غیره ممکن است لیست های مختلف ارائه شده بوسیله نهادها و سازمان های مختلف هر کدام کم و بیش برای شما مناسب باشد. با این حال سازمان بهداشت جهانی، در سال 1999، شش حوزه کلیدی مهارت های زندگی را شناسایی کرده است:
            <br />
            خودآگاهی و همدلی که دو بخش کلیدی هوش هیجانی هستند. این مهارت ها کمک می کنند خودتان را به مثابه جزئی از جهان هستی بشناسید، جایگاه خودتان و ارتباط و شیوه تعامل آن را با سایر ارکان نظام هستی بدانید و همچنین بتوانید احساس دیگران را درک کنید بگونه ای که گویا تجربیات آن ها برای خودتان اتفاق افتاده است. این مهارت در انفاس پایه، اساس و محور تمامی مهارت های دیگر در نظر گرفته شده و یادگیری تمامی مهارت های دیگر در گرو آن است، چرا که انسان خودآگاه قادر است بذر سایر مهارت ها را در وجود خود بسادگی پرورش داده و آن ها را بصورت متعادل بارور کند.
            <br />
            تصمیم گیری و حل مساله: این مهارت ها برای درک مسائل و یافتن راه حل برای آن ها، به تنهایی یا با دیگران، و اقدام برای رفع آن ها به شما کمک می کنند.
مهارت های ارتباطی و ارتباطات بین فردی: این حوزه بطور کلی مهارت هایی  را که برای ارتباط و کار با مردم بصورت فردی یا اجتماعی نیاز است در بر می گیرد. بویژه انتقال و دریافت پیام بصورت نوشتاری یا شفایی. 
تفکر خلاقانه و تفکر انتقادی: این حوزه بطور کلی توانایی اندیشیدن و تفکر به شیوه های غیر معمول و متفاوت در مورد مسائل و یافتن راه حل ها یا ایده های جدید به همراه توانایی ارزیابی اطلاعات و درک ارتباط آن ها.
<br />
مهارت های ابراز وجود و خودداری یا خودکنترلی: این ها مهارت های مورد نیاز برای ایستادگی برای استیفای حقوق خود و دیگران است
انعطاف پذیری و توانایی فائق آمدن بر مشکلات: این مهارت ها توانایی بازیابی خود از شکست ها و برخورد با آن ها به مثابه فرصت هایی برای یادگیری و یا کسب تجربه را بیان می کنند

        </p>
        
        <p>
        همچنین مهارت های ضروری زندگی در مقاطع مختلف زندگی برای شما متفاوت خواهند بود. برای مثال:
<br />


  زمانی که دانش آموز یا  دانشجو هستید به مهارت های مطالعه نیاز دارید. دانستن این نکات که چگونه خودتان را برای مطالعه آماده کنید، تحقیق انجام دهید و یا اینکه چگونه یک پایان نامه یا رساله بنویسید. این ها مهارت هایی نیستند که هر شخصی در جامعه نیاز داشته باشد.
  زمانی که معامله ای مثل خرید یک خانه انجام می دهید شما به مهارت های مذاکره کردن نیاز دارید و البته مقدار زیادی صبر و اخلاق خوش هم باید چاشنی آن ها باشد. اگر متاهل و صاحب فرزند هستید این مهارت ها جزو لیست مهارت های اساسی زندگی شما خواهند بود.
  شما به مهارت هایی نیاز دارید که قابلیت استخدام شما را بالا ببرند و همچنین برای اینکه شغل دلخواهتوان را داشته باشید نیاز دارید که بدانید چگونه درخواست شغلی تنظیم کنید و چگونه یک مصاحبه شغلی موفق انجام دهید.
  زمانی که شغلی دارید احتمالا نیاز به توسعه مهارت های رهبری کردن در خودتان دارید، خصوصا زمانی که یک تیم یا گروه را سرپرستی می کنید.
  وقتی که ازدواج می کنید، به مهارت های فرزندپروری نیاز دارید. همچنین ممکن است مهارت های مدیریت زمان و سازماندهی کردن بسیار با اهمیت تر برایتان جلوه کنند.
        </p>

        <p>

        اما...
        <br />
.... در کنار تمام این ها شاید مهمترین مهارت زندگی توانایی و اشتیاق به یادگیری مداوم باشد.
        </p>
        
        </div>
      </cute-card>
      </div>


      <div style="position:fixed; right:13px; bottom:13px;">
        <a href="know">
          <paper-button style="background-color:#EEE; box-shadow:0 0 13px #444">بعدی</paper-button>
        </a>
      </div>

    `;
  }

}

window.customElements.define('maharat-page', Maharat);
