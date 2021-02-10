import React, { Component } from "react";

export class EditItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateAdding(key, value) {
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== id);
    this.setState({ list: updateList });
  }
  render() {
    return (
      <div className="App">
        <div>
          <div> Adding new Item </div>
          <input
            type="text"
            placeholder="add new item to sell"
            value={this.state.newItem}
            onChange={e => this.updateAdding("newItem", e.target.value)}
          />
          <button onClick={() => this.addItem()}>add</button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>delet</button>
                </li>
              );
            })}
          </ul>

          
        </div>
      </div>
    );
  }
}

export default EditItems;
