/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"
import React, { Component,useState } from "react";
import { Form, Field } from "@progress/kendo-react-form"

import {subscribe} from "klaviyo-subscribe"

const Input = (fieldProps) => {
  const {
    fieldType, label, value, visited, touched, valid,
    onChange, onBlur, onFocus, validationMessage, placeholder
  } = fieldProps;
  const invalid = !valid && visited;
  return (
    <div onBlur={onBlur} onFocus={onFocus}>
      <label>
        { label }
        <input
          type={fieldType}
          className={invalid ? "invalid" : ""}
          value={value}
          onChange={onChange}
          placeHolder={placeholder} />
      </label>
      { invalid && 
        (<div className="required">{validationMessage}</div>) }
    </div>
  );
};

const emailValidator = (value) => (
  new RegExp(/\S+@\S+\.\S+/).test(value) ? "" : "Please enter a valid email."
);
const requiredValidator = (value) => {
  return value ? "" : "This field is required";
}

export const KlaviyoForm = () => {

  const listId = "RRLRyX";

  const [formState, setFormState] = useState(true)

  const handleSubmit = (data, event) => {
    const email = data.email
    // console.log(`
    //   const email = ${email}
    // `);
    subscribe(listId, data.email).then(response => {
      // alert(`success`)
      setFormState(false)
    });
    event.preventDefault();
  }

  return (
    <>
      {formState ? (
        <Form
        onSubmit={handleSubmit}
        initialValues={{
          email: ""
        }}
        render={(formRenderProps) => (
          <form onSubmit={formRenderProps.onSubmit} className={'emailForm'}>

            <Field
              label=""
              name="email"
              fieldType="email"
              class="Input-Email"
              placeholder={"Enter your email"}
              component={Input}
              validator={[requiredValidator, emailValidator]} />

            <button disabled={!formRenderProps.allowSubmit}>
              Join the Waitlist
            </button>
          </form>
        )}>
        </Form>
      ) : (
        <div sx={{fontSize: '16px', backgroundColor: 'text', px: '15px', py: '10px', color: 'light', fontWeight: '600', fontFamily: 'body', textTransform: 'uppercase'}}>You're in! Keep a close eye on your inbox</div>
      )}
    </>
  )
}



