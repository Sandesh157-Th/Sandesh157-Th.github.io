import React from 'react'
import Video from './Add1.mp4'
import Image from './nobackimg.png'
import image from './nobackimg2.png'
export default function Bodyap() {
  return (
    <div className='Body'>

      <div className='main'>
        <list className='sidebar'>

          <ul>

            <li className='side'> <button className='button1'><a hrefLang='#'>Gallery</a></button></li>
             <li className='side'> <button className='button1'><a hrefLang='#'>Reaserch</a></button></li>
            <li className='side'> <button className='button1'><a hrefLang='#'>Services</a></button></li>
            <li className='side'> <button className='button1'><a hrefLang='#'>Blog</a></button></li>
          </ul>
        </list>
        <div className='addsection'>
          {/* <div className='add1'>
            <h4>AddSection</h4>
            <video src={Video}  autoPlay muted loop>
            </video>
          </div> */}

        </div>
      </div>

      <section className='main_comp'>
        <div className='Body-text'>
          <p className='text-big'>WE ARE THE BEST </p>
          <p className='text-small'>
            The licenses for most software are designed to take away your
            freedom to share and change it.  By contrast, the GNU General Public
            Licenses are intended to guarantee your freedom to share and change
            free software--to make sure the software is free for all its users.
          </p>

          <div className='buttons'>
            <button className='Body_buttons'>Explore More</button>
            <button className='Body_buttons'>Get Started</button>
          </div>
        </div>
        <div className='Image_sec'>
              <img src={Image} ></img>

        </div>
      </section>


    </div>
  )
}
