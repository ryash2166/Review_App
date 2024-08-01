import {createContext, useState} from 'react';

export const ReviewContext = createContext(null);

const ReviewContextProvider = (props) => {
    const [reviews,setReviews] = useState([]);
    const [reviewToEdit,setReviewToEdit] = useState({
      review: null,
      updating: false
    });
  
    const addReview = (review) => {
      setReviews([review, ...reviews]);
    }
  
    const editReview = (review) => {
      setReviewToEdit({
        review,
        updating: true
      });
    }
  
    const updateReview = (review) => {
      setReviews(reviews.map(item => item.id === review.id ?
        {...item,...review} : item));
      setReviewToEdit({
        review: null,
        updating: false
      });
    }
  
    const removeReview = (id) => {
      setReviews(reviews.filter(review => review.id !== id));
    }

    const showRating = (rating) => {
        switch(rating){
            case 1:
                return <i className="bi bi-star-fill text-warning"></i>
            case 2:
                return (
                    <>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </>
                )
            case 3:
                return (
                    <>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </>
                )
            case 4:
                return  (
                    <>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </>
                )
            case 5:
                return (
                    <>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                        <i className="bi bi-star-fill text-warning"></i>
                    </>
                )
            default:
                return 'something went wrong!'
        }
    }

    const value = { reviews, addReview, editReview,
        updateReview, reviewToEdit, removeReview , showRating }
  return (
    <ReviewContext.Provider value={ value }>
      {props.children}
    </ReviewContext.Provider>
  )
}

export default ReviewContextProvider
