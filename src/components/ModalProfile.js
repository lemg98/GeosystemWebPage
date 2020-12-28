import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalProfile(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p>
      <TextField
        id="outlined-read-only-input"
        label="Nombre"
        defaultValue="Cesar"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <br/>
      <br/> 
      <TextField
        id="outlined-read-only-input"
        label="Email"
        defaultValue="lemg@gmail.com"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      </p>
      <Button 
        type="button"  
        variant="contained" 
        color='secondary' onClick={props.handleClose}
      >
        Cerrar
      </Button>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
