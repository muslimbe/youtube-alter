import './Channel.scss'

// components

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import UsersVideos from '../../components/item/Users-videos'

// images
import coverImg from '../../assets/img/channelpagecover.jpg'
import channelImg from '../../assets/img/chpageusr.jpg'
import Bell from '../../components/svgs/Bell'
import SearchIcon from '../../components/svgs/Search-icon'

import Flora from '../../assets/img/channels/flora.jpg'
import Violet from '../../assets/img/channels/violet.jpg'
import Philip from '../../assets/img/channels/philip.jpg'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'



function Channel () {

  const [photos, setPhotos] = useState([])
  const [imgs, setImgs] = useState([])

  useEffect(() => {
                     fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
                     .then((res) => res.json())
                     .then((data) => {
                                      let decPhotos = data.splice(0, 1)
                                      setPhotos(decPhotos)
                                      let decImgs = data.splice(0, 5)
                                      setImgs(decImgs)
                     })
  }, [])

  return(
    <>

      <Header/>
      <main className="channel-page">
        <Sidebar/>
        <section className="channel-page-section">
          <img src={coverImg} alt="" className="cover-img"/>

          <div className="channel-info">
            <img src={channelImg} alt="" className="ch-page-usr-img"/>
            <div style={{marginRight: "auto"}}>
              <h2 className="ch-page-ch-name">Margaret Phelps</h2>
              <p className="ch-page-counter">245K subscribed</p>
            </div>

            <Bell/>
            <button className="ch-page-subs-btn">Subscribe 2.3m</button>
          </div>

          <div className="parts-wrapper">
            <div className="channel-nav-wrapper">
              <div className="channel-nav">
                <nav>
                  <ul className="nav-list">
                    <li className="nav-list_item">
                      <Link to="/" className="channel-nav-wrapper_link">
                        Home
                      </Link>
                    </li>

                    <li className="nav-list_item">
                      <Link className="channel-nav-wrapper_link">
                        Videos
                      </Link>
                    </li>

                    <li className="nav-list_item">
                      <Link className="channel-nav-wrapper_link">
                        Playlists
                      </Link>
                    </li>

                    <li className="nav-list_item">
                      <Link className="channel-nav-wrapper_link">
                        Channels
                      </Link>
                    </li>

                    <li className="nav-list_item">
                      <Link className="channel-nav-wrapper_link">
                        Discussion
                      </Link>
                    </li>

                    <li className="nav-list_item">
                      <Link className="channel-nav-wrapper_link">
                        About
                      </Link>
                    </li>

                  </ul>

                </nav>
                  <SearchIcon/>
              </div>
            

              <div className="channel-nav-video">
              {photos.length > 0 && 
                photos.map((photo) => {
                return(
                  <Link to="/video/2">
                    <img src={photo.url} alt="" className="channel-nav-video-img"/>
                  </Link>
                  )})}
            
                <div>
                  <h3 className="current-video-title">Choosing The Best Audio Player Software For Your Computer
                  </h3>
                  <p className="current-video-desc">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. 
                  </p>
                  <p className="current-video-info">11k views  ·  6 months ago</p>
                </div>

              </div>
            </div>

            <div>
              <h3 className="rec-channel-title">Recommended channel</h3>
              <ul className="rec-channel_list">
                <li className="rec-channel_item">
                  <Link className="rec-channel_link">
                    <img src={Flora} alt="channel-img" className="rec-channel_img"/>
                    <h3 className="rec-channel_name">Flora Benson</h3>
                  </Link>
                </li>

                <li className="rec-channel_item">
                  <Link className="rec-channel_link">
                    <img src={Violet} alt="channel-img" className="rec-channel_img"/>
                    <h3 className="rec-channel_name">Violet Cobb</h3>
                  </Link>
                </li>

                <li className="rec-channel_item">
                  <Link className="rec-channel_link">
                    <img src={Philip} alt="channel-img" className="rec-channel_img"/>
                    <h3 className="rec-channel_name">Phillip Mullins</h3>
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          <div className="users-videos-header">
            <h3 className="users-videos-title">Margaret Phelps videos</h3>

            <div className="arrows">
              <button className="left-btn"></button>
              <button className="right-btn"></button>
            </div>
          </div>

          {imgs.length > 0 && <ul className="users-videos-list">
            {imgs.map((img) => {
              return(
                <UsersVideos url={img.url}/>
                )
            })}

          </ul>}

        </section>
      </main>

    </>
  )
}

export default Channel