import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <div className="container">
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="name"
              id="name"
              placeholder="nome da carta"
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="descricao">
            Descrição
            <textarea
              data-testid="description-input"
              name="descricao"
              id="descricao"
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="attr1">
            Atributo 1
            <input
              type="text"
              data-testid="attr1-input"
              name="attr1"
              id="attr1"
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="attr2">
            Atributo 2
            <input
              type="text"
              data-testid="attr2-input"
              name="attr2"
              id="attr2"
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="attr3">
            Atributo 3
            <input
              type="text"
              data-testid="attr3-input"
              name="attr3"
              id="attr3"
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="image"
              id="image"
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="rare">
            Raridade
            <select
              data-testid="rare-input"
              name="rare"
              id="rare"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div className="container">
          <label htmlFor="trunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              name="trunfo"
              id="trunfo"
            />
            Super Trunfo
          </label>
        </div>

        <div className="container">
          <button type="submit" data-testid="save-button">Salvar</button>
        </div>

      </form>
    );
  }
}

export default Form;
