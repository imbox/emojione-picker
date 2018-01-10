import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Emoji from "./emoji";

export default class EmojiRow extends PureComponent {
  static propTypes = {
    emojis: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
  };

  _handleEmojiSelect = (ev, emoji) => {
    this.props.onChange(emoji);
  };

  render() {
    const { emojis, style } = this.props;

    return (
      <div className="emoji-row" style={style}>
        {emojis.map(emoji => (
          <Emoji
            {...emoji}
            ariaLabel={emoji.name}
            role="option"
            key={emoji.unicode}
            onSelect={this._handleEmojiSelect}
          />
        ))}
      </div>
    );
  }
}
