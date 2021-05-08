import React from 'react';
import AddReview from './AddReview';
import HoverRating from './HoverRating';

import { Button } from '@material-ui/core';



export default function Reviews(props) {
  const reviews = Object.values(props)
  console.log('REVIEWS ',  reviews)
  // console.log('PROPS', props)
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
        <h4><span>{reviews.length}</span> Review</h4>
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
        {reviews[0].map((review) => {
          console.log(review)
          return (
          <div key={review.id} border-style='solid'>
            <p className="mt-1 mb-2">
            <strong>Tommy Lee </strong>
            <span>– </span><span>{(new Date(review.createdAt)).toString().slice(0,16)}</span>
            </p>
            <strong><span>{review.stars}</span> out of 5 Stars</strong>

            <p className="mb-0">{review.comment}</p>
          </div>
          )
        })}

        </div>
      </div>
      </div>
       <HoverRating/>
       <AddReview />

    </div>

)};

