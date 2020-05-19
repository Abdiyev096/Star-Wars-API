import React, { Component } from 'react';

import Spinner from '../spinner/';
import ErrorBoundry from '../error-boundry';

const withData = (View, getData) => {
  return class extends Component {

    state = {
    items: null
  }

  componentDidMount() {
    getData()
          .then(items => {
            this.setState({
              items
            })
          })
  }

    render() {
      const {items} = this.state;

     if(!items) {
       return <Spinner />
     }

     return (
       <ErrorBoundry>
           <View {...this.props} data={items} />
       </ErrorBoundry>
     )
  }
 }
}

export default withData;