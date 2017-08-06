import React, {
  Component,
  SyntheticEvent,
} from "react";
import classNames from "classnames";
import withClickOutside from "react-click-outside";

import Input from "./../input";
import Pill from "./../pill";

const { container: PillContainer } = Pill;

// function noop() {} // tslint:disable-line:no-empty

export interface LookupsProps {
  placeholder?: string;
  selections: any[];
  candidates: any[];

  onInputChange?(value: string, e: SyntheticEvent<HTMLInputElement>): void;
}

export interface LookupsState {
  opened: boolean;
}

export class Lookups extends Component<LookupsProps, LookupsState> {
  static defaultProps: Partial<LookupsProps> = {
    placeholder: "Search...",
    selections: [],
    candidates: [],
  };

  state: LookupsState = {
    opened: false,
  };

  handleInputFocus = () => {
    this.toggleOpen(true);
  }

  toggleOpen = (nextOpened?: boolean) => {
    this.setState(
      (prevState: LookupsState): Partial<LookupsState> => ({ opened: (typeof nextOpened != "boolean") ? (!prevState.opened) : nextOpened })
    );
  }

  handleClickOutside = () => {
    this.toggleOpen(false);
  }

  handleSelectionContainerClick = () => {
    this.toggleOpen();
  }

  renderInput = () => {
    const {
      selections,
      placeholder,
      onInputChange,
    } = this.props;
    const { opened } = this.state;
    if (selections.length && !opened) return null;

    return (
      <Input
        placeholder={placeholder}
        icons={{
          right: "search",
        }}
        onFocus={this.handleInputFocus}
        onInputChange={onInputChange}
      />
    );
  }

  renderSelections = () => {
    const { selections } = this.props;

    if (!selections.length) return null;

    const renderSelection = (item, i: number) => {
      return (
        <Pill key={i} {...item} />
      );
    };

    return (
      <PillContainer
        onClick={this.handleSelectionContainerClick}
      >
        { selections.map(renderSelection) }
      </PillContainer>
    );
  }

  renderLookupList = () => {
    const { candidates } = this.props;

    const displayItems = candidates; // TODO

    const renderLookupItem = (item, i: number) => {
      return (
        <li key={i} role="presentation" className="slds-listbox__item">
          { item }
        </li>
      );
    };

    return (
      <div role="listbox">
          <ul className="slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_fluid" role="presentation">
            { displayItems.map(renderLookupItem) }
          </ul>
      </div>
    );
  }

  render() {
    const {
    } = this.props;
    const {
      opened,
    } = this.state;

    const comboboxContainerClazz = classNames("slds-combobox_container");

    const comboboxClazz = classNames(
      "slds-combobox",
      "slds-dropdown-trigger",
      "slds-dropdown-trigger_click",
      "trash-slds-combobox-lookup",
      {
        "slds-is-open": opened,
      },
    );

    return (
      <div className={comboboxContainerClazz}>
        <div
          className={comboboxClazz}
          aria-expanded="false"
          aria-haspopup="listbox"
          role="combobox"
        >
          { this.renderInput() }
          { this.renderSelections() }
          { this.renderLookupList() }
        </div>
      </div>
    );
  }
}

export default withClickOutside(Lookups);
