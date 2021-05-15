import React, { Fragment } from 'react'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {

}

const Reviews = (props: Props) => {
   return (
      <Fragment>
         <div className="review-container" id="reviews-section">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="arr-cont">
               <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </div>
            <div className="review">
               <img src="/assets/images/manash.jpg" alt="" />
               <h3>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ad facilis maiores sed magnam, rerum tempora voluptate, explicabo, unde aut quidem rem! Libero consectetur dolorem corporis officia, neque nesciunt repellendus.
               </h3>
            </div>
            <div className="arr-cont">
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
         </div>
      </Fragment>
   )
}

export default Reviews
