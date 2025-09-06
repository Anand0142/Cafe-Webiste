import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text7">Welcome to Hipsters Cafe</span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Experience the perfect blend of coffee and creativity at our
                  modern cafe.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6">Explore Menu</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Order Now</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img alt={props.image1Alt} src="/Photos/burger.png" className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image2Alt} src="/Photos/french.png" className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image3Alt} src="/Photos/main photo.png" className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image4Alt} src="/Photos/pastha.png" className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image5Alt} src="/Photos/salad.png" className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image6Alt} src="/Photos/seating.png" className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1" />
          </div>
          <div className="thq-animated-group-horizontal">
            <img alt={props.image1Alt} src="/Photos/burger.png" className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image2Alt} src="/Photos/french.png" className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image3Alt} src="/Photos/main photo.png" className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image4Alt} src="/Photos/pastha.png" className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image5Alt} src="/Photos/salad.png" className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1" />
            <img alt="Hero Image" src="/Photos/seating.png" className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1" />
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img alt={props.image7Alt} src="/Photos/burgr and coffe.png" className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image8Alt} src="/Photos/manuchuriya.png" className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image9Alt} src="/Photos/seating2.png" className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image10Alt} src="/Photos/noodles.png" className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image11Alt} src="/Photos/All items.png" className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image12Alt} src="/Photos/momos.png" className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1" />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img alt={props.image7Alt} src="/Photos/burgr and coffe.png" className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image8Alt} src="/Photos/manuchuriya.png" className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image9Alt} src="/Photos/seating2.png" className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image10Alt} src="/Photos/noodles.png" className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1" />
            <img alt={props.image11Alt} src="/Photos/All items.png" className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1" />
            <img alt="Hero Image" src="/Photos/momos.png" className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1" />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }a
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  image1Alt: 'Hero Image 1',
  image2Alt: 'Hero Image 2',
  image3Alt: 'Hero Image 3',
  image4Alt: 'Hero Image 4',
  image5Alt: 'Hero Image 5',
  image6Alt: 'Hero Image 6',
  image7Alt: 'Hero Image 7',
  image8Alt: 'Hero Image 8',
  image9Alt: 'Hero Image 9',
  image10Alt: 'Hero Image 10',
  image11Alt: 'Hero Image 11',
  image12Alt: 'Hero Image 12',
  heading1: undefined,
  content1: undefined,
  action1: undefined,
  action2: undefined,
}

Hero17.propTypes = {
  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  action2: PropTypes.element,
}

export default Hero17
