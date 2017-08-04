import React, { Component } from "react";

export interface ListBoxProps {
  visible: boolean;
  fieldSet: React.ReactNode;

  updateLookupsState(nextState: any): void;
}

function isDescendant(parent: Element, child: Element) {
  let node = child.parentNode;
  while (node != null) {
    if (node == parent) return true;
    node = node.parentNode;
  }
  return false;
}

export class ListBox extends Component<ListBoxProps> {
  componentWillReceiveProps(nextProps: ListBoxProps) {
    const { visible } = nextProps;
    if (visible) {
      document.addEventListener("click", this.handleClick);
    } else {
      document.removeEventListener("click", this.handleClick);
    }
  }

  handleClick = (e: Event) => {
    const parant = document.querySelector("#search_unique_id");
    if (!parant) return;
    const shouldPrevent = isDescendant(parant, e.target as any); // TODO
    if (!shouldPrevent) this.props.updateLookupsState({ opened: false });
  }

  render() {
    const { fieldSet } = this.props;
    return (
      <div id="listbox-unique-id" role="listbox">
        <ul className="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid" role="presentation">
          <li role="presentation" className="slds-listbox__item">
            { fieldSet }
          </li>
        </ul>
      </div>
    );
  }
}

export default ListBox;
