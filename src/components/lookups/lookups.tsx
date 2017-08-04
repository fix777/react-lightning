import React, { Component } from "react";
import classNames from "classnames";

import ListBox from "./list-box";
import PillList, { PillListProps } from "./../pill-list/pill-list";
import Icon from "./../icon";
import FormLayout, { FormLayoutProps } from "./../form-layout/form-layout";

function noop() {} // tslint:disable-line:no-empty

export interface LookupsProps {
  placeholder?: string;
  form: FormLayoutProps;
  activeFilters: PillListProps;

  onFilter?(form?: HTMLFormElement, event?: React.FormEvent<HTMLFormElement>): void;
}

export interface LookupsState {
  focused: boolean;
  opened: boolean;
}

export class Lookups extends Component<LookupsProps, LookupsState> {
  static defaultProps: Partial<LookupsProps> = {
    placeholder: "Search...",
  };

  state: LookupsState = {
    focused: false,
    opened: false,
  };

  handleComboboxFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState(
      { focused: true, }
    );
  }

  handleComboboxBlur = (event: React.FocusEvent<HTMLInputElement>) => {
  // handleComboboxBlur = (event: any) => {
  // handleComboboxBlur = () => {
    // console.log(event.dispatchConfig);
    // for (const [prop, value] of Object.entries(event)) {
    //   console.log("prop: ", prop);
    //   console.log("value: ", value);
    // }
    event.preventDefault();
    this.setState(
      { focused: false }
    );
  }

  toggleOpen = () => {
    this.setState(
      (prevState: LookupsState): Partial<LookupsState> => ({ opened: !prevState.opened })
    );
  }

  handleAdvancedFilterClick = () => {
    this.toggleOpen();
  }

  handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.persist();
    const { currentTarget: form } = e;
    const { onFilter = noop } = this.props;
    onFilter(form, e);
    this.toggleOpen();
  }

  render() {
    const { focused, opened } = this.state;
    const {
      placeholder,
      form,
      activeFilters,
    } = this.props;

    const comboboxContainerClazz = classNames(
      "slds-combobox_container slds-has-object-switcher",
      {
        "slds-has-input-focus": focused,
      }
    );

    const comboboxClazz = classNames(
      "slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click trash-slds-combobox-lookup",
      {
        "slds-is-open": opened,
      },
    );

    return (
      <div className="slds-grid">
        <div className="slds-col">
          <div role="listbox" aria-orientation="horizontal">
            <PillList {...activeFilters} />
          </div>
        </div>
        <div className="slds-col">
          <div id="search_unique_id" className={comboboxContainerClazz}>
            <div
              className={comboboxClazz}
              aria-expanded="false"
              aria-haspopup="listbox"
              role="combobox"
            >
              <div className="slds-combobox__form-element slds-input-has-icon slds-input-has-icon_left-right">
                <span className="slds-icon_container slds-icon-utility-search slds-input__icon slds-input__icon_left" title="Description of icon when needed">
                  <Icon type="search" />
                  <span className="slds-assistive-text">Description of icon</span>
                </span>
                <input
                  type="text"
                  className="slds-input"
                  aria-autocomplete="list"
                  aria-controls="listbox-unique-id"
                  autoComplete="off"
                  role="textbox"
                  placeholder={placeholder}
                  onFocus={this.handleComboboxFocus}
                  onBlur={this.handleComboboxBlur}
                />
                <span
                  className="slds-icon_container slds-icon-utility-filterList slds-input__icon slds-input__icon_right react-lightning-cursor_pointer"
                  title="Advanced Filter"
                  onClick={this.handleAdvancedFilterClick}
                >
                  <Icon type="filterList" />
                  <span className="slds-assistive-text">Advanced Filter</span>
                </span>
              </div>
              <ListBox
                visible={opened}
                fieldSet={
                  <div style={{ padding: 10 }}>
                    <FormLayout {...form} onSubmit={this.handleFilter} />
                  </div>
                }
                updateLookupsState={nextState => this.setState(nextState)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lookups;
