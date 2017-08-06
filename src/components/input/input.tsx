import React, {
  Component,
  SyntheticEvent,
  AllHTMLAttributes,
} from "react";
import classNames from "classnames";
import omit from "lodash.omit";

import Icon from "./../icon";

import uuid from "./../__util/uuid";

export interface InputProps extends AllHTMLAttributes<HTMLInputElement> {
  htmlReadOnly?: boolean;
  modifier?: string;
  icons?: {
    left?: string;
    right?: string;
  };

  onInputChange?(value: string, e: SyntheticEvent<HTMLInputElement>): void;
}

export class Input extends Component<InputProps> {
  static defaultProps: Partial<InputProps> = {
    id: `input-${uuid()}`,
    htmlReadOnly: false,
    icons: {},
  };

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const { onInputChange } = this.props;
    if (typeof onInputChange == "function") onInputChange(value, e);
  }

  renderJustInput = () => {
    const {
      modifier,
      className,
      htmlReadOnly,
      ...others
    } = this.props;

    const restInputProps = omit(others, ["icons", "onInputChange"]);

    const clazz = classNames(className, "slds-input", {
      [`slds-input_${modifier}`]: !!modifier,
    });

    return (
      <input
        className={clazz}
        readOnly={htmlReadOnly}
        {...restInputProps}
        onChange={this.onChange}
      />
    );
  }

  renderIcon = (iconType?: string) => {
    if (!iconType) return null;
    return (
      <Icon
        className="slds-input__icon slds-input__icon_right"
        type={iconType}
      />
    );
  }

  renderInput = () => {
    const {
      icons = {}, // Just for type assertion (strictNullChecks)
    } = this.props;

    if (!Object.values(icons).some(Boolean)) return this.renderJustInput();

    const containerClazz = classNames(
      "slds-input-has-icon",
      {
        [`slds-input-has-icon_left`]: !!icons.left && !icons.right,
        [`slds-input-has-icon_right`]: !!icons.right && !icons.left,
        [`slds-input-has-icon_left-right`]: !!icons.right && !!icons.left,
      }
    );

    return (
      <div className={containerClazz}>
        { this.renderIcon(icons.left) }
        { this.renderJustInput() }
        { this.renderIcon(icons.right) }
      </div>
    );
  }

  render() {
    return this.renderInput();
  }
}

export default Input;
