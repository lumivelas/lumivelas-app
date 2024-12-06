import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import LumiSelect from '../forms/LumiSelect';

interface Props {
    open: boolean;
    onClose: Function;
}

const NewCandle: React.FC<Props> = ({ open, onClose }) => {
    
    function handleClose() {
        console.log('Teste')
    }

    return (
        <Dialog
            open={open}
            fullWidth={true}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Nova vela
            </DialogTitle>
            <DialogContent className='flex flex-col justify-center'>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LumiSelect id='arroma' title='Arroma' options={[ { code: "10", display: "Citronela"}, { code: "20", display: "Madeira do oriente"} ]} />
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <LumiSelect id='adicional' title='Adicional' options={[ { code: "10", display: "Teste 1"} ]} />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose(false)}>Disagree</Button>
                <Button onClick={() => onClose(true)} autoFocus>
                Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewCandle;