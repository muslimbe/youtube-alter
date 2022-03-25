import { Link } from 'react-router-dom'
import './Next-video.scss'

function NextVideo ({url}) {

  return(
    <li className="next-video-item" >
      <Link to="/video/2" className="next-video-link"> 
        {/* <span className="video-duration">sdsd</span> */}
        <img src={url} alt="next-video-img" className="next-video-img"/>
          <h4 className="next-video-title">A Brief History Of Creation</h4>
          <div className="next-video-info-wrapper">
            <p className="next-video-view-times">80k views</p>
            <p className="next-video-name">Dollie Blair</p>
          </div>
      </Link>
    </li>
  )
}

export default NextVideo