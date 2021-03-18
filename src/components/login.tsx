import React from 'react';
import '../css/login-page.scss';

const LoginPage: React.FC = () => {
  const clearField = () => {
    // @ts-ignore
    document.getElementById('first-name').value = '';
    // @ts-ignore
    document.getElementById('last-name').value = '';
    // @ts-ignore
    document.getElementById('avatar').value = '';
    // @ts-ignore
    document.getElementById('password').value = '';
  };

  return (
    <>
      <div className="login-page-wrapper">
        <div className="form-wrapper">
          <form className="login-page-form">
            <input type="text" id="first-name" placeholder="first-name" autoComplete="off" />
            <input type="text" id="last-name" placeholder="last-name" autoComplete="off" />

            <input type="file" id="avatar" accept="image/*" />

            <input type="password" id="password" placeholder="password" autoComplete="off" />
            <input type="submit" id="send" value="send" />
            <input type="button" id="clear" value="clear" onClick={clearField} />
          </form>
          <div className="avatar-wrapper">
            <div className="avatar-img" id="avatar-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
