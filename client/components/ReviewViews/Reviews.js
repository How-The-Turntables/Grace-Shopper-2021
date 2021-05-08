import React from 'react';
import AddReview from './AddReview';
import HoverRating from './HoverRating';

import { Button } from '@material-ui/core';



export default function Reviews() {

  return (
    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div className="tab-pane fade" id="reviews" role="tabpanel"       aria-labelledby="reviews-tab" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h4><span>1</span> review for <span>Fantasy T-shirt</span></h4>
          <img className="d-flex mr-3 z-depth-1" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" width="62" alt="Generic placeholder image"/>
            <div className="media-body" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
              <div className="d-sm-flex justify-content-between" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
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
