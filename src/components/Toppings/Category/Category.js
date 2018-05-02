import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ""
    };
  }

  render() {
    return (
      <select
        className="category-selector"
        onChange={e => {
          this.props.setCategory(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="Icing">Icing</option>
        <option value="Nuts">Nuts</option>
        <option value="Fruit">Fruit</option>
        <option value="Savory">Savory</option>
      </select>
    );
  }
}

export default Category;
