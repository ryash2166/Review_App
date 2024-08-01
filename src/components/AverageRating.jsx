import React, { useContext } from 'react'
import { ReviewContext } from './context/ReviewContext';

const AverageRating = () => {
    
    const {reviews} = useContext(ReviewContext);

    const calculateAverage = () => {
        let average = reviews.reduce((user,review) => {
            return user + review.rating / reviews.length;
        },0);
        return average > 0 ? average.toFixed(1) : 0;
    }

    return (
        <div className='container my-4'>
            <div className="d-flex justify-content-between align-items-center">
                <p>Reviews : 
                    <span className="badge bg-dark rounded-pill ms-1">
                        {reviews.length}
                    </span>
                </p>
                <p>Average : 
                    <span className="badge bg-warning text-dark rounded-pill ms-1">
                        {
                            calculateAverage()
                        }
                    </span>
                </p>
            </div>
        </div>
    )
}

export default  AverageRating