import React from 'react';
import '../css/login-page.scss';

const LoginPage: React.FC = () => (
  <>
    <div className="login-page-wrapper">
      <div className="form-wrapper">
        <form className="login-page-form">
          <input type="text" id="first-name" placeholder="first-name" />
          <input type="text" id="last-name" placeholder="last-name" />
          <input type="file" id="avatar" accept="image/*" />
          <input type="password" id="password" placeholder="password" />
          <input type="submit" id="send" value="send" />
        </form>
        <div className="avatar-wrapper">
          <div className="avatar-img" id="avatar-img" />
        </div>
      </div>
    </div>
  </>
);

export default LoginPage;
