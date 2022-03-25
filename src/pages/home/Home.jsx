import './home.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// pages

import Channel from '../channel/Channel'

// components

import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Video from '../../components/item/Video'
import RecommendedVideo from '../../components/item/Recommended-video'
import RecChannel from '../../components/item/Recommended-channel'

// img

import gussie from '../../assets/img/channels/gussie.jpg'

function Home () {

  const [imgs, setImgs] = useState([])
  const [users, setUsers] = useState([])
  const [sixUsers, setSixUsers] = useState([])

  useEffect(() => {
                    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
                      .then(async (res) => await res.json())
                      .then(async (data) => {
                                        data = await data.splice(0, 5)
                                        setImgs(data)
                                       });
                  },[])


  useEffect(() => {
                    fetch("https://jsonplaceholder.typicode.com/users")
                      .then( (res) => res.json())
                      .then( (data) => {
                                          let three = data.splice(0, 2)
                                          setUsers(three)

                                          let six = data.splice(0, 5)
                                          setSixUsers(six)

                                       });
                  },[])
  return(
    <>
      <Header/>

      <main className="container-home">
        <Sidebar/>  
        <section> 
          <div className="usr-channel">

            <div className="channel-header">
              <Link to="/channel" className="channel-link">
                <div className="channel-info">
                  <img src={gussie} className="channel-img"/>
                  <h2 className="channel-title">Dollie Blair</h2>
                </div>
              </Link>

              <div className="arrows">
                <button className="left-btn"></button>
                <button className="right-btn"></button>
              </div>
            </div>
         
            {imgs.length > 0 && <ul className="usr-channel__videos">
          
                                  {imgs.map(function(img){
                                    return(
                                      <Video
                                        url={img.url}
                                        key={img.id}
                                      />
                                    )
                                    })}
                                
                                </ul>}
          </div>

          <div className="recommended">

            <div className="channel-header">
              <h2 className="recommended-title">Recommended</h2>
              <div className="arrows">
                <button className="left-btn"></button>
                <button className="right-btn"></button>
              </div>
            </div>
            
            <ul className="rec-list">
              {users.map((user) => {
                
                return(
                  <RecommendedVideo 
                    url="https://via.placeholder.com/600/92c952"
                    name={user.name}
                  />
                )
              })}
            </ul>
          </div>

          <div className="rec-channel">
          
            <div className="channel-header">
              <Link to="/channel" style = {{textDecoration: 'none'}}>
                <h2 className="rec-channel__title">Food & Drink <small>Recommended channel for you</small>
                </h2>
              </Link>

                <button className="btn-subscribe">Subscribe 2.3m</button>

                <div className="arrows">
                  <button className="left-btn"></button>
                  <button className="right-btn"></button>
                </div>

            </div>
            {sixUsers.length > 0 && <ul className="rec-channel-list">
                                  {sixUsers.map(user => {
                                    return(

                                    
                                    <RecChannel
                                      url="https://via.placeholder.com/600/92c952"  
                                      title={user.name}
                                    />
                                    )})}
                                </ul>}
          </div>
        </section>
      </main>

    </>
  )
}

export default Home