import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class CategoryHeader extends PureComponent {
  static propTypes = {
    category: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired,
    headingDecoration: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  render() {
    const { category, headingDecoration, style } = this.props;

    return (
      <div className="emoji-category-header" style={style}>
        <h2 className="emoji-category-title">
          {category.title}
        </h2>
        <div className="emoji-category-heading-decoration">
          {headingDecoration}
        </div>
      </div>
    );
  }
}
