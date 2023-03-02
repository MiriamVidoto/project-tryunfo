import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;

    return (
      <div className="cardPreview">
        <h3 data-testid="name-card">{ cardName }</h3>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card"><em>{ cardDescription }</em></p>
        <p><strong>Velocidade:</strong></p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p><strong>Força:</strong></p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p><strong>Inteligência:</strong></p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card"><em>{ cardRare }</em></p>
        { cardTrunfo && (
          <p data-testid="trunfo-card"><strong>Super Trunfo</strong></p>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
