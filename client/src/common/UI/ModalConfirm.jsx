import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ModalConfirm extends Component {

    render() {
        const {openModal, clientSelectd, handleConfirme, handleClose} = this.props
        return (
            <Dialog
                open={openModal}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"Atenção"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Desenha <b>{clientSelectd.blackList ? "adicionar ": "remover "}</b>o Cpf/Cnpj <b>{clientSelectd.cpfCnpj}</b> a Black-List ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirme} color="primary">
                        Confirmar
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}