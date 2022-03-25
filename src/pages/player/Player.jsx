import './Player.scss'

// images

import playingVideo from  '../../assets/img/playing-video.jpg'
import channelImg from '../../assets/img/channels/food-and-drink.png'

// components

import Header from '../../components/header/Header'
import NextVideo from '../../components/item/Next-video'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Player () {

  const [imgs, setImgs] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then((res) => res.json())
      .then((data) => {
                        data = data.splice(0, 3)
                        setImgs(data)
                       });
  },[])

  return(
    <>
      <Header/>
      <main className="player-main">

      <div className="playing-video-wrapper">
        <img src={playingVideo} alt="" className="playing-video-img"/>

        <h3 className="playing-video-name">Dude You Re Getting A Telescope</h3>

        <div className="playing-video-info">
          <p className="playing-video-views">123k views</p>
          <button className="like-btn btns">123k</button>  
          <button className="dislike-btn btns">435k</button>  
          <Link className="share-btn btns">Share</Link>
          <button className="more-btn">
            <span className="more-btn-dots"></span>
            <span className="more-btn-dots"></span>
            <span className="more-btn-dots"></span>
          </button>
        </div>

        <hr />


        <div style={{display: 'flex'}}>
          <img src={channelImg} alt="" style={{width: '80px', height: '80px' , marginRight: '12px'}}/>
          <div>
            <h3 className="current-channel-name">Food & Drink</h3>
            <p className="current-channel-publish">Published on 14 Jun 2019</p>
            <p className="current-channel-desc">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
            <button className="btn-show-more">Show more</button>
          </div>

          <button className="subscribe-btn">Subscribe 2.3m</button>
        </div>

      </div>

      <div className="next-video-wrapper">
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h2 className="next-videos-title">Next</h2>
          <p className="next-video-autoplay">AUTOPLAY</p>
          <span className="icon-autoplay"></span>
        </div>

        {imgs.length > 0 && <ul className="next-videos-list">
                              {imgs.map((img) => {
                                return(
                                  <NextVideo url={img.url}/>
                                )
                              })}
         
                            </ul>
          }
      </div>
      </main>
    </>
  )

}

export default Player