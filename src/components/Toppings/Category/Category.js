import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ""
    };
    this.changeCategory = this.changeCategory.bind(this);
  }
  changeCategory(val) {
    this.setState({ category: val });
  }

  render() {
    return (
      <select className="category-selector">
        <option value="All">All</option>
        <option value="Icing">Icing</option>
        <option value="Nuts">Nuts</option>
        <option value="Fruit">Fruit</option>
        <option value="Savory">Savory</option>
      </select>
    );
  }
}

export default Category;
