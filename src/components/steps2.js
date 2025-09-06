import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              People’s Favorite Thing Here
            </h2>
            <p className="thq-body-large">
              Our guests often describe this place as more than just a café. 
              From romantic seating perfect for intimate conversations to unique themes, 
              varied menu options, and a lively yet cozy vibe, every detail is designed to create
               memorable moments. It’s where comfort, flavor, and ambiance beautifully come together
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Explore More</span>
              </button>
            </div>
          </div>

          <div className="steps2-container3">
            {/* 01 */}
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                <span className="steps2-text29">Romantic Seating</span>
              </h2>
              <span className="steps2-text14 thq-body-small">
                <span className="steps2-text25">
                  Relax in our cozy romantic seating, designed for intimate moments
                  and heartfelt conversations.
                </span>
              </span>
              <label className="steps2-text15 thq-heading-3">01</label>
            </div>

            {/* 02 */}
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                <span className="steps2-text29">Quaint Little Place</span>
              </h2>
              <span className="steps2-text14 thq-body-small">
                <span className="steps2-text25">
                  A charming and cozy spot, perfect for enjoying peaceful meals away
                  from the rush.
                </span>
              </span>
              <label className="steps2-text18 thq-heading-3">02</label>
            </div>

            {/* 03 */}
            <div className="steps2-container6 thq-card">
               <h2 className="thq-heading-2">
                <span className="steps2-text29">Variation</span>
              </h2>
              <span className="steps2-text14 thq-body-small">
                <span className="steps2-text25">
                  From classic favorites to exciting new flavors, there’s always
                  something different to try
                </span>
              </span>
              <label className="steps2-text21 thq-heading-3">03</label>
            </div>

            {/* 04 */}
            <div className="steps2-container7 thq-card">
               <h2 className="thq-heading-2">
                <span className="steps2-text29">Good Options</span>
              </h2>
              <span className="steps2-text14 thq-body-small">
                <span className="steps2-text25">
                  A wide range of choices on the menu ensures there’s something for 
                  every mood and taste.
                </span>
              </span>
              <label className="steps2-text24 thq-heading-3">04</label>
            </div>

            {/* 05 */}
            <div className="steps2-container8 thq-card">
              <h2 className="thq-heading-2">
                {props.step5Title ?? (
                  <Fragment>
                    <span className="steps2-text33">Fancy Crowd</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text34 thq-body-small">
                {props.step5Description ?? (
                  <Fragment>
                    <span className="steps2-text35">
                      Experience an elegant atmosphere surrounded by a lively and 
                      fashionable crowd.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text36 thq-heading-3">05</label>
            </div>

            {/* 06 */}
            <div className="steps2-container9 thq-card">
              <h2 className="thq-heading-2">
                {props.step6Title ?? (
                  <Fragment>
                    <span className="steps2-text37">Theme</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text38 thq-body-small">
                {props.step6Description ?? (
                  <Fragment>
                    <span className="steps2-text39">
                      Enjoy a beautifully designed space with unique themes that enhance 
                      your dining experience.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text40 thq-heading-3">06</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Description: undefined,
  step2Description: undefined,
  step3Description: undefined,
  step4Description: undefined,
  step5Description: undefined,
  step6Description: undefined,
  step1Title: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step4Title: undefined,
  step5Title: undefined,
  step6Title: undefined,
}

Steps2.propTypes = {
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step3Description: PropTypes.element,
  step4Description: PropTypes.element,
  step5Description: PropTypes.element,
  step6Description: PropTypes.element,
  step1Title: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Title: PropTypes.element,
  step5Title: PropTypes.element,
  step6Title: PropTypes.element,
}

export default Steps2
