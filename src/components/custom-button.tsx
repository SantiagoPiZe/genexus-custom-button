import { Component, Prop, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "custom-button",
  styleUrl: "../assets/token.css",
  shadow: true,
})
export class CustomButton {
  /**
   * This attribute specifies the text of label inside the button
   */
  @Prop() label: string;
  /**
   * This attribute specifies the width of the button
   * @default 250px
   */
  @Prop() width: string;

  /**
   * This attribute specifies the height of the button
   * @default 100px
   */
  @Prop() height: string;
  /**
   * This attribute specifies if the button is disabled or not
   */

  @Prop() disabled: boolean;
  /**
   * This attribute specifies the font size of the label inside the button
   * @default 16px
   */
  @Prop() fontSize: string;
  /**
   * This attribute specifies the background color of the button on its defualt state
   * @default #778da9
   */
  @Prop() background: string;
  /**
   * This attribute specifies the border size of the button
   * @default 3px
  */
  @Prop() borderSize: string;
  /**
  * This attribute specifies the border color of the button
  * @default #5e7797
  */
  @Prop() borderColor: string;
  /**
  * This attribute specifies the background color of the button on its hovered state
  * @default #778da9
  */
  @Prop() hoverColor: string;
  /**
  * This attribute specifies the border color of the button on its hovered state
  * @default #778da9
  */
  @Prop() hoverBorderColor: string;

  @Event() customButtonEvent: EventEmitter<void>;

  handleClick = () => {
    this.customButtonEvent.emit();
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      this.customButtonEvent.emit();
    }
  };

  render() {
    const buttonStyle = {
      fontSize: this.fontSize,
      background: this.background,
      borderWidth: this.borderSize,
      borderColor: this.borderColor,
      width: this.width,
      height: this.height,
    };

    const hoverStyle = {
      background: this.hoverColor,
      borderColor: this.hoverBorderColor,
    };

    return (
      <button
        class="gx-custom-button"
        type="button"
        aria-disabled={this.disabled}
        disabled={this.disabled}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        style={buttonStyle}
      >
        {this.label}
        <style>
          {`.gx-custom-button:hover {
            background: ${hoverStyle.background} !important;
            border-color: ${hoverStyle.borderColor} !important;
          }`}
        </style>
      </button>
    );
  }
}
