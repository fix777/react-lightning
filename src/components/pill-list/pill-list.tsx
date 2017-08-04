import React, { Component } from "react";

import PillListItem from "./pill-list-item";
import { PillProps } from "./../pill/pill";

export interface PillListProps {
  dataSource: PillProps[];
}

export class PillList extends Component<PillListProps> {
  render() {
    const {
      dataSource,
    } = this.props;

    return (
      <ul className="slds-listbox slds-listbox_inline slds-p-top_xxx-small" role="group" aria-label="Selected Options:">
        {
          dataSource.map((pill, index) => (
            <PillListItem
              key={index}
              {...pill}
            />
          ))
        }
      </ul>
    );
  }
}

export default PillList;
