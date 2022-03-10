import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'
import ReactTypingEffect from 'react-typing-effect'
import pic from '../img/pic.jpg'

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className='typography'>
      
      <div className="pic">
            <img src={pic} alt="profile" className="profilepic" />
        </div>
          <h1>Hi I'm<span> Pakawat Noosaard </span></h1>
          <ReactTypingEffect text={['I am a Web Developer']} speed={80} eraseDelay={200} className="typingeffect" />
          <p>Let me introduce myself. My nicknamename is Nut</p>
          <p>I’m 23 years old. My birthday is the 30th of September 1998.

          </p>

          <div className='icons'>
          <div className='icon i-facebook'><FacebookIcon /></div>
          <div className='icon i-github'><GitHubIcon /></div>
          <div className='icon i-youtube'><YoutubeIcon /></div>
          </div>
          </div>
          
          
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
  .pic {
    img{
        width: 30%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }      
    border-radius: 50%;
    &:hover {
      background: white;
      filter: contrast(50%);
    }
  }
  .typingeffect {
    text-decoration: bolder;
    font-size: 40px;
  }
`;

export default HomePage