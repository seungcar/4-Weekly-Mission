import useFetchCardsData from '../hooks/useFetchCardsData';
import noCardImg from '../images/no-image.svg';
import { Link } from 'react-router-dom';
// import loadingImg from '../images/loading-spinner.svg';

function CardListItem() {
  const data = useFetchCardsData();
  const handleImageError = (e) => {
    e.target.src = { noCardImg };
  };

  return (
    <div className="cards-container">
      {data.map(
        ({
          url,
          id,
          imageSource,
          title,
          timePassed,
          description,
          formattedDate,
        }) => (
          <Link to={url} key={id}>
            <div className="card">
              <img
                src={imageSource || noCardImg}
                alt={title}
                className="card-image"
                onError={handleImageError}
              />
              <p className="text-container">
                <span>{timePassed}</span>
                <p>{description}</p>
                <p className="date-number">{formattedDate}</p>
              </p>
            </div>
          </Link>
        )
      )}
    </div>
  );
}

export default CardListItem;
