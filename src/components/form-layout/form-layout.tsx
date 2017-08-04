import React, { Component } from "react";
// import classNames from "classnames";

export type FormLayoutType = "base" | "compound";

export interface RowElement {
  size: string;
  label: string;
  control: React.ReactNode;
}

export interface Row {
  rowElement: RowElement[];
}

export interface FormElement {
  legend: string;
  row: Row[];
}

export interface FormLayoutProps {
  type: FormLayoutType;
  formElement: FormElement[];
  onSubmit?(event?: React.FormEvent<HTMLFormElement>): void;
}

export class FormLayout extends Component<FormLayoutProps> {
  private formRef: HTMLFormElement;

  componentDidMount() {
    console.dir(this.formRef);
  }

  render() {
    const {
      formElement,
      onSubmit,
    } = this.props;

    return (
      <form
        className="slds-form slds-form_compound"
        ref={(form: HTMLFormElement) => this.formRef = form}
        onSubmit={onSubmit}
      >
        {
          formElement.map((fe, feIndex: number) => (
            <fieldset key={feIndex} className="slds-form-element">
              <legend className="slds-form-element__label slds-text-title_caps">{ fe.legend }</legend>
              <div className="slds-form-element__group">
                {
                  fe.row.map((fer, ferIndex: number) => (
                    <div key={ferIndex} className="slds-form-element__row">
                      {
                        fer.rowElement.map((fere, fereIndex: number) => (
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

export default FormLayout;
