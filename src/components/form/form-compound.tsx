import React, { Component } from "react";
// import classNames from "classnames";

export interface FormElements {
  size: string;
  label: string;
  control: React.ReactNode;
}

export interface FormElementRows {
  formElements: FormElements[];
}

export interface FormElementGroup {
  formElementRows: FormElementRows[];
}

export interface FieldSet {
  legend: string;
  formElementGroup: FormElementGroup;
}

export interface FormCompoundProps {
  fieldsets: FieldSet[];

  onSubmit?(event?: React.FormEvent<HTMLFormElement>): void;
}

export class FormCompound extends Component<FormCompoundProps> {
  render() {
    const {
      fieldsets,
      onSubmit,
    } = this.props;

    return (
      <form
        className="slds-form slds-form_compound"
        onSubmit={onSubmit}
      >
        {
          fieldsets.map((fe, feIndex: number) => (
            <fieldset key={feIndex} className="slds-form-element">
              <legend className="slds-form-element__label slds-text-title_caps">{ fe.legend }</legend>
              <div className="slds-form-element__group">
                {
                  fe.formElementGroup.formElementRows.map((fer, ferIndex: number) => (
                    <div key={ferIndex} className="slds-form-element__row">
                      {
                        fer.formElements.map((fere, fereIndex: number) => (
                          <div key={fereIndex} className={`slds-form-element slds-size_${fere.size}`}>
                            <label className="slds-form-element__label">{ fere.label }</label>
                            { fere.control }
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </fieldset>
          ))
        }
        <fieldset className="slds-form-element">
          <div className="slds-form-element__control slds-text-align_right">
              <input type="submit" className="slds-button slds-button_brand" defaultValue="Ok" />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default FormCompound;
