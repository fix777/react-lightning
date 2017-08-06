import React, { Component } from "react";
import classNames from "classnames";

export interface IconProps {
  className?: string;
  type: string; // TODO
  size?: string;
}

export class Icon extends Component<IconProps> {
  static defaultProps: Partial<IconProps> = {
    size: "x-small",
  };

  render() {
    const {
      className,
      type,
      size,
    } = this.props;

    const clazz = classNames(className, "slds-icon slds-icon-text-default", {
      [`slds-icon_${size}`]: !!size,
    });

    return (
      <svg className={clazz} aria-hidden="true">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`/assets/icons/utility-sprite/svg/symbols.svg#${type}`}></use>
      </svg>
    );
  }
}

export default Icon;
