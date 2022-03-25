import { Link } from 'react-router-dom'

import './Sidebar.scss'

// icons
import IconHome from '../svgs/sidebar-icons/Icon-home'
import IconTrending from '../svgs/sidebar-icons/Icon-trending'
import IconSubscriptions from '../svgs/sidebar-icons/Icon-subscriptions'

import IconLibrary from '../svgs/sidebar-icons/Icon-library'
import IconHistory from '../svgs/sidebar-icons/Icon-history'
import IconWatchLater from '../svgs/sidebar-icons/Icon-watchlater'
import IconFavourites from '../svgs/sidebar-icons/Icon-favourites'
import IconLiked from '../svgs/sidebar-icons/Icon-liked'
import IconMusic from '../svgs/sidebar-icons/Icon-music'
import IconGames from '../svgs/sidebar-icons/Icon-games'
import IconDown from '../svgs/sidebar-icons/Icon-down'
import Setting from '../svgs/sidebar-icons/Icon-setting'

// jpgs

import gussie from '../../assets/img/channels/gussie.jpg'
import nora from '../../assets/img/channels/nora.jpg'
import belle from '../../assets/img/channels/belle.jpg'
import eunice from '../../assets/img/channels/eunice.jpg'
import emma from '../../assets/img/channels/emma.jpg'
import leah from '../../assets/img/channels/leah.jpg'

function Sidebar () {

  return(
    
    <div className="container-sidebar">

      <ul className="sidebar__main-list">

        <li className="sidebar__item">
          <Link className="sidebar__link home">
            <div className="icon-wrapper">
              <IconHome/>
            </div>
            <p className="sidebar__text">Home</p>
          </Link>
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
          <div className="icon-wrapper">
            <IconTrending/>
          </div>
            <p className="sidebar__text">Trending</p>
          </Link>
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
            
          <div className="icon-wrapper">
            <IconSubscriptions/>
          </div>
            <p className="sidebar__text">Subscriptions</p>
          </Link>
        </li>

      </ul>

      <ul className="sidebar__second-list">
        <li className="sidebar__item">
          <Link className="sidebar__link">
          <div className="icon-wrapper">
            <IconLibrary/>
          </div>
            <p className="sidebar__text">Library</p>
          </Link>  
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
            <div className="icon-wrapper">
            <IconHistory/>
          </div>
            <p className="sidebar__text">History</p>
          </Link>
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
            <div className="icon-wrapper">
            <IconWatchLater/>
          </div>
            <p className="sidebar__text">Watch later</p>
          </Link>
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
            <div className="icon-wrapper">
            <IconFavourites/>
          </div>
            <p className="sidebar__text">Favourites</p>
          </Link>
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
            <div className="icon-wrapper">
            <IconLiked/>
          </div>
            <p className="sidebar__text">Liked videos</p>
          </Link>
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
            <div className="icon-wrapper">
            <IconMusic/>
          </div>
            <p className="sidebar__text">Music</p>
          </Link>
        </li>

        <li className="sidebar__item">
          <Link className="sidebar__link">
            <div className="icon-wrapper">
            <IconGames/>
          </div>
            <p className="sidebar__text">Games</p>
          </Link>
        </li>

        <li className="sidebar__item">
            <button className="btn-show-more">
              <div className="icon-wrapper">
                <IconDown/>
              </div>
              <p className="sidebar__text">Show more</p>
            </button>
        </li>
      </ul>

{/* subscriptions */}

      <h3 className="sidebar__subs-title">Subscriptions</h3>

      <ul className="sidebar__channels-list">

        <li className="sidebar__channel ">
          <Link to="/channel" className="channles-link">
            <img src={gussie} alt="channel-img" className="side-channel-img"/>
            <h4 className="channel-name">Gussie Singleton</h4>
          </Link>
        </li>

        <li className="sidebar__channel ">
         <Link to="/channel" className="channles-link">
            <img src={nora} alt="channel-img" className="side-channel-img"/>
           <h4 className="channel-name">Nora Francis</h4>
          </Link>
        </li>

        <li className="sidebar__channel ">
         <Link to="/channel" className="channles-link">
           <img src={belle} alt="channel-img" className="side-channel-img"/>
            <h4 className="channel-name">Belle Briggs</h4>
          </Link>
        </li>

        <li className="sidebar__channel ">
         <Link to="/channel" className="channles-link">
            <img src={eunice} alt="channel-img" className="side-channel-img"/>
            <h4 className="channel-name">Eunice Cortez</h4>
          </Link>
        </li>

        <li className="sidebar__channel ">
          <Link to="/channel" className="channles-link">
            <img src={emma} alt="channel-img" className="side-channel-img"/>
            <h4 className="channel-name">Emma Hanson</h4>
          </Link>
        </li>

        <li className="sidebar__channel ">
          <Link to="/channel" className="channles-link">
            <img src={leah} alt="channel-img" className="side-channel-img"/>
            <h4 className="channel-name">Leah Berry</h4>
          </Link>
        </li>
      </ul>

      <Link className="sidebar__link setting-link">
        <Setting/>
        <p className="sidebar__setting">
          Setting
        </p>
      </Link>

    </div>
  )
} 

export default Sidebar