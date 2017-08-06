import React, { Component } from "react";

import Container from "./pill-container";

import Icon from "./../icon";
import Button from "./../button";

// function noop(...args: any[]) { return args; }
function noop() {} // tslint:disable-line:no-empty

export interface PillProps {
  pillKey?: string;
  label?: React.ReactNode;
  closable?: boolean;

  onClose?(props?: PillProps, event?: React.SyntheticEvent<HTMLButtonElement>): void;
  unmountMe?(): void;
}

export class Pill extends Component<PillProps> {
  static container: typeof Container;

  static defaultProps: Partial<PillProps> = {
    label: "Pill Label",
    closable: false,
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
    <Button
      className="slds-button_icon slds-pill__remove"
      onClick={onClose}
    >
      <Icon type="close" />
    </Button>
  );
}
