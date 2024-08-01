import React, { useContext, useEffect, useState } from 'react'
import { ReviewContext } from './context/ReviewContext';

const ListItem = ({review}) =>  {
    const [disabled,setDisabled] = useState(false);
    const {removeReview, editReview, reviewToEdit, showRating} = useContext(ReviewContext);

    useEffect(() => {
        if(reviewToEdit.review && reviewToEdit.review.id === review.id){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
    },[reviewToEdit,review.id]);

    const deleteReview = (id) => {
        removeReview(id);
    }

    const fillTheReviewToEdit = (review) => {
        editReview(review);
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-start'>
            <div className="ms-2 me-auto">
                <div className='fw-bold'>Title : {review.title}</div>
                <div className='mt-2'>
                    <p>Description : {review.description}</p>
                    <p>  
                        {
                            showRating(review.rating)
                        }
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <button 
                    disabled={disabled}
                    onClick={() => deleteReview(review.id)}
                    className="btn btn-sm btn-danger mb-2">
                    <i className="bi bi-trash"></i>
                </button>
                <button 
                    onClick={() => fillTheReviewToEdit(review)}
                    className="btn btn-sm btn-warning">
                    <i className="bi bi-pencil"></i>
                </button>
            </div>
        </li>
    )
}

export default ListItem