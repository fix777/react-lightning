import React, {
  Component,
  AllHTMLAttributes,
} from "react";
import classNames from "classnames";

// tslint:disable-next-line:no-empty-interface
export interface PillContainerProps extends AllHTMLAttributes<HTMLDivElement> {}

export class PillContainer extends Component<PillContainerProps> {
  render() {
    const {
      children,
      className,
      ...others
    } = this.props;
    const clazz = classNames(className, "slds-pill_container");
    return (
      <div
        className={clazz}
        {...others}
      >
        { children }
      </div>
    );
  }
}

export default PillContainer;
