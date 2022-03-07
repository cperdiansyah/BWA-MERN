import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';

import landingPage from 'json/landingPage.json';
export default class LadingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} refMostPicked={this.refMostPicked} />
        <MostPicked
          data={landingPage.mostPicked}
          refMostPicked={this.refMostPicked}
        />
        <Categories data={landingPage.categories}></Categories>
        <Testimoni data={landingPage.testimonial} />
       
      </>
    );
  }
}
