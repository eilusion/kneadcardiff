import React from "react";
import "./PaymentForm.scss";
import { TextInput } from './../TextInput/TextInput';

export const PaymentForm = (props) => {

    const onSingleValueChange = (formField, value) => {
        props.onChange({
            ...props.form,
            [formField]: value
        });
    }; 

    return (
        <div className="PaymentForm">
            <TextInput 
                label="card number"
                onChange={(value) => onSingleValueChange("cardNumber", value)}
                value={props.form.cardNumber}
            />
            <div className="PaymentForm__Middle">
                <div className="PaymentForm__mmyy">
                    <TextInput
                        label="mm/yy"
                        onChange={(value) => onSingleValueChange("mmyy", value)}
                        value={props.form.mmyy}
                    />
                </div>
                <div className="PaymentForm__cvc">
                    <TextInput
                        label="cvc"
                        onChange={(value) => onSingleValueChange("cvc", value)}
                        value={props.form.cvc} 
                    />
                </div>
            </div>
            <TextInput
                label="postcode"
                onChange={(value) => onSingleValueChange("postcode", value)}
                value={props.form.postcode} 
            />
        </div>
    );
};
