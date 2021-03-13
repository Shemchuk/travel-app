import React from 'react';
import '../../css/country-page-map.scss';

const countryPageMap: React.FC = () => (
  <>
    <div className="country_page_map">
      <script
        type="text/javascript"
        charSet="utf-8"
        async
        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6b9da30b9ecdb833f4fb348e3d7a334d6a90085bdc04295aea25b173e7da608d&amp;width=993&amp;height=250&amp;lang=ru_RU&amp;scroll=true"
      />
    </div>
  </>
);

export default countryPageMap;
