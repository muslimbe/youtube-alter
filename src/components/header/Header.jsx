import './Header.scss'

import { Link } from 'react-router-dom'

import Burger from '../svgs/Burger'
import Logo from '../svgs/Logo'
import SearchIcon from '../svgs/Search-icon'
import IconVideo from '../svgs/Icon-video'
import YoutubeApps from '../svgs/Youtube-apps'
import Notifications from '../svgs/Notifications'
import UserPic from '../../assets/img/Userpic-webp.webp'


function Header () {

  return(

    <header>
      <div className="container">

        <button className="burger">
          <Burger/>
        </button>

        <a href="/" className="site-logo">
          <Logo/>
        </a>

        <form className="search-form">
          <input className="input-search" type="search" placeholder="Search"/>
        </form>

        <ul className="header__list">
          <li className="header__list-item">
            <button className="header__icons">
              <IconVideo/>
            </button>
          </li>

          <li className="header__list-item">
            <button className="header__icons">
             <YoutubeApps/>
            </button>
          </li>

          <li className="header__list-item"> 
            <button className="header__icons"> 
              <div style={{position: 'relative'}}>
                <span className="notification-count">3</span>
              <Notifications/>
              </div>
            </button>
          </li>

        </ul>
       
        <Link>
          <img src={UserPic} alt="user-img" className="user-img"/>
        </Link>

       </div>
    </header>
  
  )
}

export default Header