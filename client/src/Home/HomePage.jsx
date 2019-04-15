import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { cloneDeep } from 'lodash';

import { getClients, createClient, getClientById, updateClient } from '../redux/clients/actions';
import { getItensClients, showClient, clientUpdate } from '../redux/clients/selectors';
import navigateTo from '../navigation/navigation'

import {ModalConfirm} from '../common/UI'
import { ToastManager } from '../common/UI';

import MaterialTable from 'material-table'

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Warning from '@material-ui/icons/Warning';

const styles = theme => ({
    blacklist: {
      opacity: .2
    },
  });


class HomePage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            openModalConfim: false,
            clientSelectd:{}
          };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickShow = this.handleClickShow.bind(this);

        this.handleClickEdit = this.handleClickEdit.bind(this);
        this.handleClickClientPageId = this.handleClickClientPageId.bind(this);
        this.handleClickClientPage = this.handleClickClientPage.bind(this);
        this.handleClickReduxFormPage = this.handleClickReduxFormPage.bind(this);
        this.handleClickBlackList = this.handleClickBlackList.bind(this);
    }

    componentDidMount() {
        console.log(">>>HomePage componentDidMount")
        this.props.getClients();
    }

   
    handleConfirme = () => {
        console.log(">>>>handleConfirme<<<")
        const clientSelectd = cloneDeep(this.state.clientSelectd);
        this.setState({ 
            openModalConfim: false,
            clientSelectd:{}
        });
        this.props.updateClient(clientSelectd,clientSelectd._id)
            .then(() => {
                console.log(">>>BLACKLIST>>",this.props.clientEdit)
                ToastManager.showSuccessMessage(`Cpf/Cnpj ${this.props.clientEdit.cpfCnpj} ${this.props.clientEdit.blackList ? " adicionado " : " removido "}a Black-List`);
                this.props.getClients();
            })
            .catch(err => {
                console.log(">>err", err)
            })
    }

    handleClose = () => {
        this.setState({ 
            openModalConfim: false,
            clientSelectd:{}
        });
    }


    handleClickBlackList = item => {
        const clientSelectd = cloneDeep(item)
        clientSelectd.blackList = clientSelectd.blackList ? false : true
        console.log(">>>Item",clientSelectd)
        this.setState({ 
            openModalConfim: true,
            clientSelectd:clientSelectd
        });
    };

    handleClick = () => {
        console.log(">>>handleClick");
        let client = {
            "firstName": "React Teste 2",
            "lastName": "Action 2",
            "email": "react2@teste.com",
            "cpfCnpj": "33096202000138",
            "address": " Rua Redux",
            "phone": "222222222"
        }

        this.props.createClient(client)
            .then((response) => {
                console.log(">>>createClient", response)
                this.props.history.push('/client');
            })
            .catch(err => {
                console.log(">>err", err)
            })
    }

    handleClickShow = () => {
        const _id = "5cafca36261b7c6beae4b8bb"
        this.props.getClientById(_id)
            .then((response) => {
                console.log(">>>Show", response)
            })
            .catch(err => {
                console.log(">>err", err)
            })
    }

    handleClickEdit = () => {
        const _id = "5cafca36261b7c6beae4b8bb"
        let client = {
            "firstName": "EDIT React Teste 1",
            "lastName": "Action",
            "email": "react@teste.com",
            "cpfCnpj": "88860369061",
            "address": " Rua Redux",
            "phone": "222222222"
        }
    }

    handleClickClientPageId = () => {
        let idClient = '5cafca36261b7c6beae4b8bb'
        const { url } = this.props.match

        navigateTo(`/updateClient/${idClient}`)
        //this.props.history.push(`/updateClient/${idClient}`);
    }

    handleClickClientPageIdNew = () => {
        let idClient = '5cafca36261b7c6beae4b8bb'
       // this.props.history.push(`/updateClient/${idClient}`);
    }


    handleClickClientPage = () => {
        //this.props.history.push('/newClient');
        const { url } = this.props.match

        navigateTo(`/newClient`)
    }

    handleClickReduxFormPage = () => {
        this.props.history.push('/redeux-form');
    }

  

    render() {
        console.log(">>>PROPS", this.props)
        const { clients, classes } = this.props
        return (
            <React.Fragment>
                <div>
                    <h1>List all</h1>
                    <button onClick={this.handleClick}>
                        Save
                    </button>
                    <button onClick={this.handleClickShow}>
                        Show
                    </button>
                    <button onClick={this.handleClickEdit}>
                        Edit
                    </button>
                    <button onClick={this.handleClickClientPageId}>
                        Client ID
                    </button>
                    <button onClick={this.handleClickClientPage}>
                        Client
                    </button>
                    <button onClick={this.handleClickReduxFormPage}>
                        Fomr
                    </button>
                </div>
                <div>
                    <MaterialTable
                   
                        columns={[
                            { title: 'First Name', field: 'firstName' },
                            { title: 'Last Name', field: 'lastName' },
                            { title: 'Email', field: 'email' },
                            { title: 'Cpf/Cnpj', field: 'cpfCnpj' },
                            {
                                title: 'Black-List',
                                field: 'blackList',
                                render: rowData => {
                                  const blackList = rowData.blackList
                                  console.log(">>>rowData",rowData.blackList)
                                  return (
                                    
                                    <IconButton onClick={() => this.handleClickBlackList(rowData)}  className={!rowData.blackList ? classes.blacklist : null}>
                                        <Warning fontSize="small" />
                                    </IconButton>

                                  )
                                },
                              },
                        ]}
                        data={clients}
                        title="Clients"
                    />
                </div>
                <ModalConfirm
                    openModal={this.state.openModalConfim}
                    clientSelectd={this.state.clientSelectd}
                    handleConfirme={this.handleConfirme}
                    handleClose={this.handleClose}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    clients: getItensClients(state),
    clientById: showClient(state),
    clientEdit: clientUpdate(state)
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            getClients,
            createClient,
            getClientById,
            updateClient
        },
        dispatch
    );

export default compose(
    withStyles(styles),
    connect(mapStateToProps,mapDispatchToProps)
  )(HomePage);