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
      fact: "",
      index: -1,
      facts: [],
      isRetrieving: false
    };

    this.getCatFact(20, this.displayNextFact.bind(this));
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

  displayNextFact() {
    let index = this.state.index + 1;

    if (!this.state.isRetrieving && (this.state.facts.length - index) <= 10) {
      //re-cat facts
      this.getCatFact(20, this.displayNextFact.bind(this));
      return;
    }

    if ((this.state.facts.length - index) <= 1) {
      return;
    }

    let fact = this.state.facts[index];

    this.setState({fact: fact,
                  index: index});
  }


  getCatFact(number, callback) {
    if (this.state.isRetrieving) {
      return;
    }

    if (!number || number <= 0) {
      number = 20
    }

    let http = require('http');
    let  url = "/api/catfacts/" + number;

    this.setState({isRetrieving: true});

    var request = http.get(url, (response) => {
      response.on('data', (data) => {
        var currentFacts = this.state.facts;
        Array.prototype.push.apply(currentFacts, JSON.parse(data.toString()));
        
        this.setState({facts: currentFacts,
        isRetrieving: false});

        if (callback) {
            callback();
        }
      });
    });
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return (<div><p>{this.state.fact}</p>
      <button onClick={(e) => this.displayNextFact()}>moar meow</button>
      </div>
      );
  }
}

// Prop types validation
CatFact.propTypes = {
  // state: React.PropTypes.object.isRequired,
};

export default CatFact;
