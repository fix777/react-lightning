import React, { Component } from "react";

export interface IconProps {
  type: string; // TODO
}

export class Icon extends Component<IconProps> {
  render() {
    const { type } = this.props;

    return (
      <svg className="slds-icon slds-icon slds-icon_x-small slds-icon-text-default" aria-hidden="true">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`/assets/icons/utility-sprite/svg/symbols.svg#${type}`}></use>
      </svg>
    );
  }
}

export default Icon;
