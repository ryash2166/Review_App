import React, { useContext } from 'react'
import { ReviewContext } from './context/ReviewContext';
import ListItem from './ListItem'

const ReviewList = () => {
  const {reviews } = useContext(ReviewContext);

  return (
    <>
      <h4>Reviews</h4>
      <ul className='mt-4 list-group'>
          {
              reviews.map(review => <ListItem  
                  key={review.id} 
                  review={review} 
              />)
          }
      </ul>
    </>
  )
}


export default ReviewList