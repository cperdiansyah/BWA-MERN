import React from 'react';
import PropTypes from 'prop-types';
import Button from 'elements/Button/Button';

export default function MostPicked(props) {
  return (
    <section className="container">
      <h4 className="mb-">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className={`item column-4${index == 0 ? ' row-2' : ' row-1'}`}
            >
              <div className="card car-feature">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light"> per {item.unit}</span>
                </div>
                <figure className="img-Wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="stretch-link d-block text-white"
                    type="link"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

MostPicked.propTypes = {
  data: PropTypes.array,
};