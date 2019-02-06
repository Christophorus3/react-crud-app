import React, { Component } from 'react';

class ProductItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onEdit() {
    this.setState({ isEditing: true});


  }

  onEditSubmit(event) {
    event.preventDefault();

    this.setState({ isEditing: false});

    this.props.onEdit(this.nameInput.value, this.priceInput.value, this.props.name);
  }

  render() {
    const { name, price, onDelete } = this.props;

    return (
      <div key={name}>
        {
          this.state.isEditing
            ? (
              <form onSubmit={this.onEditSubmit}>
                <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                <button>Done</button>
              </form>
            )
            : (
              <div>
                <span>{name}</span>
                {` | `}
                <span>{price}</span>
                {` | `}
                <button onClick={() => {this.onEdit()}}>Edit</button>
                {` | `}
                <button onClick={() => {onDelete(name)}}>Delete</button>
              </div>
            )
        }
      </div>
    )
  }
}

export default ProductItem