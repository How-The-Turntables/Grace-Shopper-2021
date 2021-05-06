import React from 'react';
import AddReview from './AddReview';
import HoverRating from './HoverRating';



export default function Reviews() {

  return (
    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
      <div className="tab-pane fade" id="reviews" role="tabpanel"       aria-labelledby="reviews-tab">
          <h5><span>1</span> review for <span>Fantasy T-shirt</span></h5>
          <div className="media mt-3 mb-4"></div>
          <img className="d-flex mr-3 z-depth-1" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" width="62" alt="Generic placeholder image"/>
          <div className="media-body">
            <div className="d-sm-flex justify-content-between">
              <p className="mt-1 mb-2">
                <strong>Marthasteward </strong>
                <span>– </span><span>January 28, 2020</span>
              </p>

            </div>
            <p className="mb-0">Nice one, love it!</p>
          </div>
       </div>

       <HoverRating/>

       <AddReview />

    </div>

)};
