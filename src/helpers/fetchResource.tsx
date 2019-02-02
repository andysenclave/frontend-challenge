import React, { Component } from 'react';
import axios from 'axios';

interface fetchResourceProps {
  url: string,
  props: Object
};

const fetchResource = ({ url, props }: fetchResourceProps) => (Content) => {
  class FetchResource extends Component {
    state = {
      data: null,
      isLoading: false,
      error: null
    }

    componentDidMount () {
      this.setState ({ isLoading: true });
      
      axios.get(url)
        .then(result => this.setState({
          data: result.data,
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
    }

    render() {
      return <Content { ...this.props } { ...this.state } />;
    }
  }
}

export default fetchResource;