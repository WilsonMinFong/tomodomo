import React from 'react';

const AppInfo = () => {
  return (
    <div className='app-info'>
      <h1>Information</h1>
      <section className='app-info-contents'>
        <p>
          Tomodomo ('together' in Japanese) is a single-page, project
          management app inspired by Trello. &nbsp;
          <a href='https://github.com/WilsonMinFong/tomodomo'>Source Code</a>
        </p>
        <h2>About the Developer</h2>
        <p>
          Wilson Fong is a software developer who writes robust code
          with an equally robust laugh.  Learn more:
          <nav className='personal-links'>
            <a href='http://wilsonfong.me/'>
              <i className="fa fa-globe" aria-hidden="true"></i>
              Personal Site
            </a>
            <a href='https://github.com/WilsonMinFong'>
              <i className="fa fa-github" aria-hidden="true"></i>
              Github
            </a>
            <a href='https://www.linkedin.com/in/wilsonmfong'>
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              LinkedIn
            </a>
          </nav>
        </p>
      </section>

    </div>
  );
};

export default AppInfo;
