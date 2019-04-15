import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';




const SimpleForm = props => {
   
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label>First Name</label>
           <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
            <div>
            <button type="submit">Submit</button>
            <button type="button">
                Clear Values
            </button>
        </div>
        </form>
    )

}

export default reduxForm({
    form: 'simple', // a unique identifier for this form
  })(SimpleForm);