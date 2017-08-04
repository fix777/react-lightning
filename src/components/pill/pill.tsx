import React, { Component } from "react";

import Icon from "./../icon";

// function noop(...args: any[]) { return args; }
function noop() {} // tslint:disable-line:no-empty

export type PillType = "base";

export interface PillProps {
  type?: PillType;
  pillKey?: string;
  label: React.ReactNode;
  closable?: boolean;

  onClose?(props?: PillProps, event?: React.SyntheticEvent<HTMLButtonElement>): void;
  unmountMe?(): void;
}

export interface PillState {
  visible: boolean;
}

export class Pill extends Component<PillProps, PillState> {
  static defaultProps: Partial<PillProps> = {
    type: "base",
    label: "Pill Label",
    closable: false,
  };

  state: PillState = {
    visible: true,
  };

  onClose = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.persist();
    const { props } = this;
    const { onClose = noop, unmountMe = noop } = props;
    unmountMe();
    onClose(props, event);
  }

  render() {
    const {
      label,
    } = this.props;

    return (
      <span className="slds-pill">
        <span className="slds-pill__label">{ label }</span>
        { isClosable(this) }
      </span>
    );
  }
}

export default Pill;

export function isClosable(ctx: Pill) {
  const { closable } = ctx.props;
  if (!closable) return null;
  const { onClose } = ctx;
  return (
    <button
      className="slds-button slds-button_icon slds-button_icon slds-pill__remove"
      title="Remove"
      onClick={onClose}
    >
      <Icon type="close" />
      <span className="slds-assistive-text">Remove</span>
    </button>
  );
}
