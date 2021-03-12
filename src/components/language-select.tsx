import React from 'react';
// import Lang from '../models/lang';

const LanguageSelect: React.FC = () => (
  <>
    <select className="lang" name="lang" id="lang">
      {/* <option value={Lang.EN}> */}
      <option value="EN">
        {/* <Link to="en">en</Link> */}
        EN
      </option>
      {/* <option value={Lang.RU}> */}
      <option value="RU">
        {/* <Link to="ru">ru</Link> */}
        RU
      </option>
      <option value="BY">
        BY
      </option>
    </select>
  </>
);

export default LanguageSelect;
