import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import dimple from '../src/pics/pic.jpg';

function Profile() {
  return (
  <div className="background">
  <div className='container d-flex justify-content-center'><div className='profilecard'>  
<div className="card">
  
      <div className='card-body'>
      <img src={dimple} className='card-img-top' alt='wait a second' ></img>

        <h4 className='card-title '>Dimple Royal</h4>
        <p className='card-text' variant='info'>Software Developer</p>
       <div className='icon'> 
        <span ><a href='https://www.facebook.com/share/wTksxCb2mMai7Z5E/'>
          <FontAwesomeIcon icon={faFacebook} className='fb'> </FontAwesomeIcon></a></span>
        <span>
          <a href='https://www.instagram.com/d__devdas?igsh=MWRtZDg3end5YTQ2OA=='><FontAwesomeIcon className='insta' icon={faInstagram}></FontAwesomeIcon></a>
          </span>
        <span><a href='https://www.linkedin.com/in/dimpul-g?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FontAwesomeIcon icon={faLinkedin} className='linkedin'></FontAwesomeIcon></a></span>
        </div>
        <div className='button'>
        <a href='https://www.facebook.com/share/wTksxCb2mMai7Z5E/'>
        <Button variant='primary' >Connect</Button>
        </a>
        <a href='mailto:dimplechand123@email.com'><Button variant='info'>Message </Button></a>
          </div>
      </div>
    </div>
    </div>
    </div>
       </div>

  )
}

export default Profile