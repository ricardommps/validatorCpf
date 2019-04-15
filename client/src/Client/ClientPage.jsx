import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Form, Field, reduxForm, isValid, isSubmitting, getFormValues } from 'redux-form';

import { getClients, createClient, getClientById, clean } from '../redux/clients/actions';
import { getItensClients, showClient } from '../redux/clients/selectors';

import { obrigatorio, validateEmail, formatCpfCnpj, validateCpfCnpj, formatPhone } from '../common/validation/validation';

import TextField from '@material-ui/core/TextField';

import { ToastManager } from '../common/UI';

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
        error={Boolean(touched && error)}
        id={`standard_${label}`}
        label={label}
        helperText={touched && error}
        margin="normal"
        {...input}
        {...custom}
    />
  )

class ClientPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            typePerson: 'fisica',
          }
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({ typePerson: event.target.value });
    };

    componentDidMount() {
        const { idClient } = this.props.match.params;
        if (idClient) {
            this.props.getClientById(idClient)
            .then((result) => {
                console.log("CLIENTBYID>>",result)
                this.props.initialize(this.props.clientById)
            })
        }


    }

    handleSave = () => {
        console.log("<<<Form Submit values>>>", this.props.formCriarContaValues)
        const client = this.props.formCriarContaValues;

        this.props.createClient(client)
        .then((response) => {
            ToastManager.showSuccessMessage("Cliente criado com sucesso!");
            this.props.history.push('/client');
        })
        .catch(err => {
            console.log(">>err", err)
        })
    }

    render() {
        const { clientById, handleSubmit, pristine, reset, valid, submitting  } = this.props;
        const typePerson = this.state.typePerson
        console.log(">>>PROPS>>>",this.props)
        return (
            <React.Fragment>
                {typePerson}
                <Form onSubmit={handleSubmit(this.handleSave)}>
                    <div>
                        <Field
                            autoComplete="firstName"
                            name="firstName"
                            type="text"
                            component={renderTextField}
                            label="First Name"
                            validate={[obrigatorio]}
                        />
                    </div>
                    <div>
                        <Field
                            autoComplete="lastName"
                            name="lastName"
                            component={renderTextField}
                            type="text"
                            label="Last Name"
                            validate={[obrigatorio]}
                        />
                    </div>
                    <div>
                        <Field
                            autoComplete="email"
                            name="email"
                            component={renderTextField}
                            type="email"
                            label="Email"
                            validate={[obrigatorio, validateEmail]}
                        />
                    </div>
                    <div>
                        <Field
                            autoComplete="address"
                            name="address"
                            component={renderTextField}
                            type="text"
                            label="address"
                            validate={[obrigatorio]}
                        />
                    </div>
                    <div>
                        <Field
                            autoComplete="phone"
                            name="phone"
                            component={renderTextField}
                            type="text"
                            label="Phone"
                            validate={[obrigatorio]}
                            normalize={formatPhone}
                        />
                    </div>
                    <div>
                        <Field
                            autoComplete="cpfCnpj"
                            name="cpfCnpj"
                            component={renderTextField}
                            type="text"
                            label="CPF/CNPJ"
                            validate={[
                                obrigatorio, 
                                validateCpfCnpj
                            ]}
                            normalize={formatCpfCnpj}
                        />
                    </div>
                    <div>
                        <button type="submit"  disabled={!valid || submitting}>
                        Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                        </button>
                    </div>
                    
                </Form>

            </React.Fragment>

        )
    }
}

const FORM_ID = 'form_create_client';

const mapStateToProps = state => ({
    clientById: showClient(state),
    formCriarContaValues: getFormValues(FORM_ID)(state),
    valid: isValid(FORM_ID)(state),
    submitting: isSubmitting(FORM_ID)(state),
    initialValues:showClient(state),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getClientById,
            createClient,
            clean
        },
        dispatch
    );

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    reduxForm({ form: FORM_ID, touchOnChange: true, touchOnBlur: false, enableReinitialize: true })
)(ClientPage);


