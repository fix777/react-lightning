import React, { Component } from "react";

export interface WithUnmountChildState {
  renderChild: boolean;
}

export interface ExtraProps {
  unmountMe?(): void;
}

export function unmountChild<P>(Child: React.ComponentType<P & ExtraProps>): React.ComponentClass<P> {
  return (
    class WithUnmountChild extends Component<P, WithUnmountChildState> {
      state: WithUnmountChildState = {
        renderChild: true,
      };

      handleUnmountChild = () => {
        this.setState({ renderChild: false });
      }

      render() {
        const { props, state } = this;
        const { renderChild } = state;

        if (!renderChild) return null;

        return (
          <Child {...props} unmountMe={this.handleUnmountChild} />
        );
      }
    }
  );
}
