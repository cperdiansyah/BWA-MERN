import React from 'react';
import PropTypes from 'prop-types';

import Button from 'elements/Button/Button';

import imgHero from 'assets/images/img_hero.jpg';
import frameHero from 'assets/images/frame_hero.png';

import iconTravel from 'assets/images/icons/icon_traveler.svg';
import iconCities from 'assets/images/icons/icon_cities.svg';
import iconTreasure from 'assets/images/icons/icon_treasure.svg';

import formatNumber from 'utils/formatNumber';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pe-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-4 fw-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me
          </Button>

          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={iconTravel}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}
                <span className="text-gray-500 fw-light"> travelers</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                width="36"
                height="36"
                src={iconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}
                <span className="text-gray-500 fw-light"> treasures</span>
              </h6>
            </div>

            <div className=" col-auto">
              <img
                width="36"
                height="36"
                src={iconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}
                <span className="text-gray-500 fw-light"> cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl5">
          <div
            className="image-hero"
            style={{ width: 400, height: 370, float: 'right' }}
          >
            <img
              src={imgHero}
              alt="Room With Couches"
              className="img-fluid position-absolute w-75"
              style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            <img
              src={frameHero}
              alt="Room With frame"
              className="img-fluid position-absolute  w-75"
              style={{ margin: '0 -15px -15px 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
Hero.propTypes = {
  data: PropTypes.object,
  refMostPicked: PropTypes.shape({
    current: PropTypes.shape({
      offsetTop: PropTypes.number,
    }),
  }),
};
