import React, { Component } from "react";

import { unmountChild } from "./../__util/unmountChild";

import Pill from "./../pill";
import { PillProps } from "./../pill/pill";

export class PillListItem extends Component<PillProps> {
  render() {
    const { props } = this;

    return (
      <li role="presentation" className="slds-listbox__item">
        <Pill {...props} />
      </li>
    );
  }
}

export default unmountChild(PillListItem);
