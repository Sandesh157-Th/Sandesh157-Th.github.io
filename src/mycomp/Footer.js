import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='row'>
        <div className='col'>
          <img src='' className='logo'></img>
          <p>
            Hackeath is the most popular website designing company

            This HTML file is a template.
            If you open it directly in the browser, you will see an empty page.

            You can add webfonts, meta tags, or analytics to this file.
            The build step will place the bundled scripts into thetag.

              To begin the development, run `npm start` or `yarn start`.
              To create a production bundle, use `npm run build` or `yarn build`.
          
          </p>
        </div>
        <div className='col'>
          <h3>Office</h3>
          <p>Kalawad Road</p>
          <p>MotaMowa,Ratkot</p>
          <p>Gujrat, PIN 360001, India</p>
         <p className='Email_id'>hack.eath157@gmail.com</p>
          <p>+91 98558447381</p>
        </div>
        <div className='col'>
          <h3>Quick_Links</h3>
          <ul>
            <li><a hrefLang='#'>Home</a></li>
            <li><a hrefLang='#'>About_Us</a></li>
            <li><a hrefLang='#'>Services</a></li>
            <li><a hrefLang='#'>Contact</a></li>
          </ul>
        </div>
        <div className='col'>
          <h3>Newsletter</h3>
          <form>
            <ion-icon  name="mail-open-outline"></ion-icon>
            <input type='text' placeholder='Enter your Email_id' required></input>
            <button className='buttonx' type='submit'><ion-icon name="arrow-forward-outline"></ion-icon></button>
          </form>
          <div className='social-icon'>
            <a hrefLang='https://www.facebook.com/hackeath'><ion-icon name="logo-facebook"></ion-icon></a>
            <a hrefLang='https://www.instagram.com/_sandesh_shahi/'><ion-icon name="logo-instagram"></ion-icon></a>
            <a hrefLang='https://www.linkedin.com/in/sandesh-shahi-94b37823a/'><ion-icon name="logo-whatsapp"></ion-icon></a>
            <a hrefLang='whatsapp'><ion-icon name="logo-linkedin"></ion-icon></a>

          </div>
        </div>
      </div>
      <hr></hr>
      <p className='copyright'>
        HackEath &copy; 2022-All Rights Reserved
      </p>
    </footer>




  )
}
