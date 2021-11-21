<template>
  <div class="about-us">
    <div>
      <div class="about-us--title">ჩვენს შესახებ</div>
      <div class="about-us--desc">{{ desc }}</div>
    </div>
    <div class="contact-us">
      <div class="contact-us--info">
        <div class="contact-us--info-title">დაგვიკავშირდით</div>
        <div class="contact-us--info-phone">
          <div>
            <img
              class="contact-us--info-phone-logo"
              :src="'/assets/phone-outlined.svg'"
              alt=""
            />
          </div>
          <a href="">
            <div>{{ phone }}</div>
          </a>
        </div>
        <div class="contact-us--info-mail">
          <div>
            <img
              class="contact-us--info-mail-logo"
              :src="'/assets/mail-outlined.svg'"
              alt=""
            />
          </div>
          <div>{{ mail }}</div>
        </div>
        <div class="contact-us--info-socials">
          <div>
            <a href="">
              <img
                class="contact-us--info-socials-facebook"
                :src="'/assets/facebook.svg'"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="">
              <img
                class="contact-us--info-socials-instagram"
                :src="'/assets/instagram.svg'"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div class="ask-to-call">
        <div class="ask-to-call--title">
          ან დაგვიტოვეთ ნომერი და ჩვენ დაგიკავშირდებით
        </div>
        <div class="form">
          <form>
            <div class="column">
              <label>თქვენი სახელი</label>
              <input type="name" />
            </div>
            <div class="column">
              <label>თქვენი ნომერი</label>
              <input type="phone" />
            </div>
          </form>
        </div>
        <button class="contact_submit">გამოგზავნა</button>
      </div>
    </div>
    <div class="contact-us--mob">
      <div>დაგვიკავშირდით</div>
      <div class="contact-us--mob-info">
        <div class="contact-us--mob-info--mob">
          <img
            class="contact-us--info-phone-logo"
            :src="'/assets/phone-outlined.svg'"
            alt=""
          />
          <a href="tel:+577126964"> 577126964 </a>
        </div>
        <div class="contact-us--mob-info--email">
          <img
            class="contact-us--info-mail-logo"
            :src="'/assets/mail-outlined.svg'"
            alt=""
          />
          altax@gmail.com
        </div>
        <div class="contact-us--mob-info--facebook">
          <img
            class="contact-us--info-socials-facebook"
            :src="'/assets/facebook.svg'"
            alt=""
          />
        </div>
        <div class="contact-us--mob-info--instagram">
          <img
            class="contact-us--info-socials-instagram"
            :src="'/assets/instagram.svg'"
            alt=""
          />
        </div>
      </div>
      <div>ან დაგვიტოვეთ ნომერი და ჩვენ დაგიკავშირდებით</div>
      <div class="contact-us--mob-form">
        <div class="mob-column">
          <label></label>
          <input type="name" placeholder="თქვენი სახელი" />
        </div>
        <div class="mob-column">
          <label></label>
          <input type="phone" placeholder="თქვენი ნომერი" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: "ლორემ იპსუმ საპირისწამლეს ნახავდა კაბები ძეთა ორალური ტახტისმაძიებელს პატივმოყვარეობა. დამწიფებულ გაიყოლებდა დადგენილება ძეთა გაეჭრა გაცოფებული რეალისტებს დიდებასა კრინოლინი ანალიზზე. ცხოვრობდა მანძილი გადმომდგარს ვოლტერს გაეჭრა ფშაველაზე. მოვარჩენ დაგვრჩა ძაღლმა ოქროსი ბაბილონსა გავკარებივარ ხვალ.ლორემ იპსუმ საპირისწამლეს ნახავდა კაბები ძეთა ორალური ტახტისმაძიებელს პატივმოყვარეობა. დამწიფებულ, ლორემ იპსუმ საპირისწამლეს ნახავდა კაბები ძეთა ორალური ტახტისმაძიებელს პატივმოყვარეობა. დამწიფებულ გაიყოლებდა დადგენილება ძეთა გაეჭრა გაცოფებული რეალისტებს დიდებასა კრინოლინი ანალიზზე. ცხოვრობდა მანძილი გადმომდგარს ვოლტერს გაეჭრა ფშაველაზე. მოვარჩენ დაგვრჩა ძაღლმა ოქროსი ბაბილონსა გავკარებივარ ხვალ. ლორემ იპსუმ საპირისწამლეს ნახავდა კაბები ძეთა ორალური ტახტისმაძიებელს პატივმოყვარეობა. დამწიფებულ გაიყოლებდა დადგენილება ძეთა გაეჭრა გაცოფებული რეალისტებს დიდებასა კრინოლინი ანალიზზე. ცხოვრობდა მანძილი გადმომდგარს ვოლტერს გაეჭრა ფშაველაზე. მოვარჩენ დაგვრჩა ძაღლმა ოქროსი ბაბილონსა გავკარებივარ ხვალ.ლორემ იპსუმ საპირისწამლეს ნახავდა კაბები ძეთა ორალური ტახტისმაძიებელს პატივმოყვარეობა. დამწიფებულ, ლორემ იპსუმ საპირისწამლეს ნახავდა კაბები ძეთა ორალური ტახტისმაძიებელს პატივმოყვარეობა. დამწიფებულ გაიყოლებდა დადგენილება ძეთა გაეჭრა გაცოფებული რეალისტებს დიდებასა კრინოლინი ანალიზზე. ცხოვრობდა მანძილი გადმომდგარს ვოლტერს გაეჭრა ფშაველაზე. მოვარჩენ დაგვრჩა ძაღლმა ოქროსი ბაბილონსა გავკარებივარ ხვალ.",
      phone: "577126964",
      mail: "altax@gmail.com",
    };
  },
};
</script>

<style>
.about-us {
  background-color: #f0f0f0;
  padding: 0 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.about-us--title {
  font-size: 32px;
  margin: 60px 0 24px;
  font-family: "MarkGEOCAPS-Bold";
}
.about-us--desc {
  font-size: 16px;
  line-height: 1.8;
  padding-left: 24px;
  border-left: 2px solid #000;
  font-family: "MarkGEO-Light";
}
.contact-us--info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
}
.contact-us--info-title {
  font-size: 32px;
  margin-bottom: 74px;
  font-family: "MarkGEOCAPS-Bold";
}
.contact-us--info-phone,
.contact-us--info-mail {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
  font-family: "MarkGEO-Light";
}
.contact-us--info-phone-logo,
.contact-us--info-mail-logo {
  margin-right: 8px;
}
.contact-us {
  margin-top: 30px;
  margin-bottom: 80px;
  display: flex;
}
.contact-us--info-socials {
  display: flex;
}
.contact-us--info-socials-facebook {
  margin-right: 48px;
}
.ask-to-call--title {
  font-size: 24px;
  font-family: "MarkGEOCAPS-Bold";
}
.ask-to-call {
  background: #fff;
  padding: 24px;
  border-radius: 40px;
  align-content: space-between;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
.column {
  display: flex;
  flex-direction: column;
}
.form {
  display: flex;
  flex-direction: column;
  margin-top: 48px;
}
.form form {
  display: flex;
  justify-content: space-between;
}
input {
  border-radius: 6;
  padding: 15px 150px 15px 5px;
  font-size: 16px;
  font-family: "MarkGEO-Light";
}
label {
  margin-bottom: 16px;
  font-family: "MarkGEO-Light";
}
.contact_submit {
  color: white;
  background-color: #e3000f;
  padding: 15px 25px;
  border: 0;
  margin-top: 32px;
  font-family: "MarkGEOCAPS-Bold";
  align-self: center;
}

@media screen and (max-width: 1190px) {
  .about-us--title {
    margin: 30px 0;
    font-size: 24px;
  }
  .about-us--desc {
    font-size: 14px;
  }
  .contact-us--info-title {
    font-size: 24px;
  }
  .ask-to-call--title {
    font-size: 18px;
  }
  .form input {
    padding: 15px 70px 15px 15px;
  }
  .form label {
    font-size: 14px;
  }
}
@media screen and (min-width: 992px) {
  .contact-us--mob {
    display: none;
  }
  .about-us {
    height: 100vh;
  }
}
@media screen and (max-width: 992px) {
  .contact-us {
    display: none;
  }
  .contact-us--mob {
    display: block;
    text-align: center;
  }
  .about-us {
    justify-content: space-around;
  }
  .contact-us--mob-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0;
  }
  .mob-column {
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
}

@media screen and (max-width: 700px) {
  .about-us--desc {
    font-size: 12px;
  }
  .partners {
    display: flex;
    flex-direction: column;
  }
  .about-us {
    padding: 30px;
  }
}
</style>