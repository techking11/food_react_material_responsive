import { Button, Container, Fab, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip, makeStyles } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    fab: {
        position: "fixed",
        bottom: 15,
        right: 15,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh",
        }
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    }
}));

export default function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if(reason === 'clickaway') return;
    setOpenAlert(false);
  }

  return (<>
        <Tooltip title="Add" aria-label="add" onClick={() => (setOpen(true))}>
            <Fab color="primary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <TextField 
                            id="standard-basic" 
                            label="Title" 
                            size="small" 
                            style={{width: "100%"}} 
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField 
                            id="outlined-multiline-static" 
                            multiline
                            rows={4}
                            defaultValue="Tell your Story"
                            variant="outlined"
                            label = "Description"
                            size="small"
                            style={{width: "100%"}} 
                         />
                    </div>
                    <div className={classes.item}>
                        <TextField select label="Visibility" value="Public">
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel component="Legend">Who can comment ?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel 
                            value="Everybody"
                            control = {<Radio size="small" />}
                            label="Everybody"
                            />
                            <FormControlLabel 
                            value="My Friends"
                            control = {<Radio size="small" />}
                            label="My Friends"
                            />
                            <FormControlLabel 
                            value="Nobody"
                            control = {<Radio size="small" />}
                            label="Nobdoy"
                            />
                            <FormControlLabel 
                            value="Custom"
                            disabled
                            control = {<Radio size="small" />}
                            label="Custom(Premium)"
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant="outlined" color="primary" style={{marginRight: 20}} onClick={() => setOpenAlert(true)}>Create</Button>
                        <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "left"}}>
            <Alert onClose={handleClose} severity="success">
                This is a success message
            </Alert>
        </Snackbar>
    </>
  )
}