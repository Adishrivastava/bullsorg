import React, { Fragment } from 'react'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {

}

const Reviews = (props: Props) => {
   return (
      <Fragment>
         <div className="review-container" id="reviews-section">
            <div className="arr-cont">
               <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </div>
            <div className="">

               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ad facilis maiores sed magnam, rerum tempora voluptate, explicabo, unde aut quidem rem! Libero consectetur dolorem corporis officia, neque nesciunt repellendus.
            </div>
            <div className="arr-cont">
               <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
         </div>
      </Fragment>
   )
}

export default Reviews
