import React, {
  Component,
  AllHTMLAttributes,
} from "react";
import classNames from "classnames";

export type ButtonModifier = "neutral" | "brand" | "inverse" | "destructive" | "success";

export interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  className?: string;
  modifier?: ButtonModifier;
}

export class Button extends Component<ButtonProps> {
  render() {
    const {
      children,
      className,
      modifier,
      ...others
    } = this.props;

    const clazz = classNames(className, "slds-button", {
      [`slds-button_${modifier}`]: !!modifier,
    });

    return (
      <button
        className={clazz}
        {...others}
      >
        { children }
      </ button>
    );
  }
}

export default Button;
