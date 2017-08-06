import React, {
  Component,
} from "react";
import classNames from "classnames";

import FormCompound from "./form-compound";

export type FormLayout = "stacked" | "horizontal";

export interface FormProps {
  className?: string;
  layout?: FormLayout;
}

export class Form extends Component<FormProps> {
  static compound: typeof FormCompound;

  render() {
    const {
      className,
      layout,
    } = this.props;

    const clazz = classNames(className, {
      [`slds-form_${layout}`]: !!layout,
    });

    return (
      <form
        className={clazz}
      >
        <fieldset className="slds-form-element">
          <legend className="slds-form-element__legend slds-form-element__label">Checkbox Group label</legend>
          <div className="slds-form-element__control">
            <span className="slds-checkbox">
              <input type="checkbox" name="default" id="checkbox-21" value="on" />
              <label className="slds-checkbox__label" htmlFor="checkbox-21">
                <span className="slds-checkbox_faux"></span>
                <span className="slds-form-element__label">All opportunities owned by you</span>
              </label>
            </span>
            <span className="slds-checkbox">
              <input type="checkbox" name="default" id="checkbox-22" value="on" />
              <label className="slds-checkbox__label" htmlFor="checkbox-22">
                <span className="slds-checkbox_faux"></span>
                <span className="slds-form-element__label">All contacts in the account owned by you</span>
              </label>
            </span>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
