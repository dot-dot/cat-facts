import React from 'react';
import config from '../../../config/app';

/*
 * @class CatFact
 * @extends React.Component
 */
class CatFact extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      title: "hur dur",
      fact: ""
    };

    this.getCatFact();
  }

  /*
   * AppRootly PureRenderMixin
   *
   * in React 0.13 there is no way to attach mixins to ES6 classes
   * this is a workaround to solve this
   * http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins
   *
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  // shouldComponentUpdate () {
  //   return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  // }

  getCatFact() {
    console.log('retrieving a cat fact');
    let http = require('http');
    let  url = "/api/facts";

    var request = http.get(url, (response) => {
      response.on('data', (data) => {
        var facts = JSON.parse(data.toString()).facts;

        this.setState({fact: facts[0]});
      });
    });
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    console.log('render called');
    return (<div><p>{this.state.fact}</p>
      <button onClick={(e) => this.getCatFact()}>moar meow</button>
      </div>
      );
  }
}

// Prop types validation
CatFact.propTypes = {
  // state: React.PropTypes.object.isRequired,
};

export default CatFact;
