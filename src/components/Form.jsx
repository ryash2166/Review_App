import React, { useContext, useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { v4 as uuidv4 } from 'uuid';
import { ReviewContext } from './context/ReviewContext';

const Form = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [rating, setRating] = useState(0); 
    const {addReview, reviewToEdit, updateReview } = useContext(ReviewContext);
    
    useEffect(() => {
        if(reviewToEdit.updating){
            setTitle(reviewToEdit.review.title);
            setDescription(reviewToEdit.review.description);
            setRating(reviewToEdit.review.rating * 20);
        }
    },[reviewToEdit])

    const handleRating = (rate) => {
        setRating(rate);
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(reviewToEdit.updating){
            const review = {
                id: reviewToEdit.review.id,
                title,
                description,
                rating: rating > 5 ? rating / 20 : rating
            }
            updateReview(review);
        }else{
            const review = {
                id: uuidv4(),
                title,
                description,
                rating: rating / 20
            }
            addReview(review);
        }
        setTitle('')
        setDescription('')
        setRating(0);
    }

    const isDisabled = () => {
        if( !rating > 0){
            return true;
        }
    }

    const OnClickReset = () => {
        setTitle('')
        setDescription('')
        setRating(0);
    }

    
    return (
        <form className='mt-5' onSubmit={(e) => formSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='title' className='form-label'>Title</label>
                <input 
                    type='text' 
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='form-control' 
                    placeholder='Title' required />
            </div>
            
            <div className='mb-3'>
                <label htmlFor='description' className='form-label'>Description</label>
                <textarea 
                    className='form-control' 
                    name='description' 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    rows='3' required></textarea>
            </div>
            <div className='mb-3'>
                <p>Rating</p>
                <Rating onClick={handleRating} ratingValue={rating} />
            </div>
            <div className='mb-3'>
                <button
                    disabled={isDisabled()} 
                    type='submit' 
                    className={`btn btn-${reviewToEdit.updating ?  'warning' : 'primary'}`}>
                    {
                        reviewToEdit.updating ? 'Update' : 'Submit'
                    }
                </button>
                <button
                    type='button'
                    onClick={OnClickReset}
                    className='btn btn-danger ms-2'
                >
                    Reset
                </button>
            </div>
        </form>
    )
}

export default Form