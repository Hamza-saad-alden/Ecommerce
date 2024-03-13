import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type startProp = {
  id: number
}

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);



  return (
    <div className="mb-2 fs-5" style={{ transition: ".2s" }}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              className='d-none'
              onClick={() => setRating(ratingValue)}
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              icon={faStar}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );

}

export default Star;