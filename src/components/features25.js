import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  const [slide, setSlide] = useState(0) // for sliding between 2 images

  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        {/* Tabs */}
        <div className="features25-tabs-menu">
          {/* Tab 1 (active & clickable) */}
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text4">Interactive Menu Cards</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text2">
                      Engage customers with interactive menu cards showcasing delicious offerings.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>

          {/* Tab 2 (disabled → text only, no active bar) */}
          <div className="features25-tab-horizontal2 disabled-tab">
            <div className="features25-divider-container2"></div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text3">Smooth Order Flow</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      Effortless order flow for customers to place their orders seamlessly.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>

          {/* Tab 3 (disabled → text only, no active bar) */}
          <div className="features25-tab-horizontal3 disabled-tab">
            <div className="features25-divider-container3"></div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text6">Testimonials Showcase</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text1">
                      Display customer testimonials to build trust and credibility for the cafe.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="features25-image-container">
          {activeTab === 0 && (
            <div className="slider-container">
              <img
                alt={props.feature1ImgAlt}
                src={slide === 0 ? props.feature1ImgSrc : props.feature1ImgSrc2}
                className="features25-image1 thq-img-ratio-16-9 slide-image"
              />
              {/* Arrow button only for Tab 1 */}
              <button
                className="slide-btn"
                onClick={() => setSlide((slide + 1) % 2)}
              ></button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1ImgAlt: 'Interactive Menu Cards Image',
  feature1ImgSrc: '/Photos/All items.png',   // first image
  feature1ImgSrc2: '/Photos/Hotel.png', // second image
  feature2ImgAlt: 'Smooth Order Flow Image Alt',
  feature3ImgAlt: 'Testimonials Showcase Image Alt',
  feature1Title: undefined,
  feature1Description: undefined,
  feature2Title: undefined,
  feature2Description: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
}

Features25.propTypes = {
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgSrc2: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
}

export default Features25
