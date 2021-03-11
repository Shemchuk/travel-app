import React from 'react';
import '../css/country_page_style.css';

const CountryPage = () => (
  <>
    Country page
    <section className="country_page_wrapper">
      <div className="country_page_informer">
        <div className="country_page_title">
          <span className="country_page_name_title">France</span>
          <span className="country_page_name_subtitle">Paris</span>
        </div>
        <div className="country_page_weather">
          <span className="weather">
            10
            <sup className="weather_sup">
              O
            </sup>
            C
          </span>
          <img className="weather_img" src="../img/weather.PNG" alt="weather" />
        </div>
        <div className="country_page_clock">
          <div className="clock">
            <div className="page_clock">18 : 53 : 55</div>
            <div className="page_calendar">Wednesday, March 10</div>
          </div>
          <div className="page_currency">
            <div className="currency">₣ 100.00</div>
            <div className="currency">€ 100.00</div>
            <div className="currency">$ 100.00</div>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="left_button">
          <div className="left_button_tap">
            <div className="left_top_hr" />
            <div className="left_bottom_hr" />
          </div>
        </div>
        <div className="body_gallery" />
        <div className="right_button">
          <div className="right_button_tap">
            <div className="right_top_hr" />
            <div className="right_bottom_hr" />
          </div>
        </div>
      </div>
      <div className="country_page_map">
        {/* <script {type = "text/javascript" charSet="utf-8" async
                  src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6b9da30b9ecdb833f4fb348e3d7a334d6a90085bdc04295aea25b173e7da608d&amp;width=993&amp;height=250&amp;lang=ru_RU&amp;scroll=true"}></script>
      */}
      </div>
      <div className="country_page_video">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video src="https://www.youtube.com/watch?v=8yb9zpDia40" width="100%" />
      </div>
    </section>
  </>
);

export default CountryPage;
