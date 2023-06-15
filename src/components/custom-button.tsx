import { Component, Prop, h, Event, EventEmitter} from "@stencil/core";

@Component({
  tag: "custom-button",
  styleUrl: "../assets/token.css",
  shadow: true,
})
export class CustomButton {
  @Prop() label: string;
  @Prop() disabled: boolean;
  @Prop() fontSize: string;
  @Prop() background: string;
  @Prop() borderSize: string;
  @Prop() borderColor: string;
  @Prop() hoverColor: string;
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
