import './banner.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function Banner(props) {
  return (
    <div className="lo-banner">
      <div className="image-container">
        <img className="imgBanner" alt="banner" src={props.imgBanner} />
        {/* <div className="after">
          <div className="titleImage">
            <img className="img-fluid" alt="title-featured" src={props.imgTitle} />
          </div>
          <div className="synopsis">
            {props.synopsis}
          </div>
          <div className="call-to-action mt-3">
            <div className="row">
              <div className="col-md-5">
                <button onClick={props.onClickPlay} className="btn-play">
                  <div className="row">
                    <div className="col-3 my-auto">
                      <FontAwesomeIcon icon={faPlay} /> 
                    </div>
                    <div className="col-7">
                      <span className="playFont"> Putar</span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-md-7">
                <button onClick={props.onClickDetails} className="btn-information ml-3">
                  <div className="row">
                    <div style={{padding: 0}} className="col-2 my-auto">
                      <FontAwesomeIcon style={{fontSize: "25px"}} icon={faInfoCircle} /> 
                    </div>
                    <div className="col-10">
                      <span className="playFont"> Selengkapnya</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    
  );
}

export default Banner;
