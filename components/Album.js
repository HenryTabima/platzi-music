import React, { PropTypes, Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';
import fetch from 'isomorphic-fetch';

const Item = styled(Col)`
  margin-bottom: 1em;
`;

const Thumb = styled.img`
  width: 155px;
  max-width: 100%;
`;

const Title = styled.h4`
  font-family: ${props => props.theme.font.title};
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

const Text = styled.p`
  color: #4b4e5a;
  font-family: ${props => props.theme.font.title};;
  font-size: .9rem;
  margin: 0;
`;


class Album extends Component {
  render() {
    return (
      <Item onClick={this.handleClick}>
        <Thumb src={this.props.images[0].url} />
        <Title>{this.props.artists[0].name}</Title>
        <Text>{this.props.name}</Text>
      </Item>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
}


export default Album;
