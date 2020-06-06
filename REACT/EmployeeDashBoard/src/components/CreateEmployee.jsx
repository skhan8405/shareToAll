import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import InputForm from '../components/InputForm'


class CreateEmployeeComponent extends React.Component {

  constructor(props) {
    super();
    this.state = {
      isOpen: false
    }
    this.child = React.createRef();

  }
  handleClose = () => {
    console.log("DIALOG CLOSED");
    this.setState({
      isOpen: false
    })
  }

  handleSubmitAction=()=>{
    console.log("SAVED CLICKED");
    this.child.current.collectSavePayLoad("XSC");
    // this.setState({
    //   isOpen: false
    // })
  }
  handleOpen = () => {
    console.log("DIALOG OPEN");
    this.setState({
      isOpen: true
    })
  }
  render() {
    return (
      <Container>
        <Grid item xs={2}>
          <div className="create-employee-button">
        <Button fullWidth={true}
        onClick={()=>this.handleOpen()}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Create
      </Button>
          </div>
        </Grid>
        <Dialog maxWidth={"md"} fullWidth onClose={() => this.handleClose()} aria-labelledby="customized-dialog-title" open={this.state.isOpen}>
          <MuiDialogTitle id="customized-dialog-title" onClose={() => this.handleClose()}>
            Create An Employee
          <IconButton style={{ left: "650px" }}/*aria-label="close" className={classes.closeButton}*/ onClick={() => this.handleClose()}>
              <CloseIcon />
            </IconButton>
          </MuiDialogTitle>
          <MuiDialogContent dividers>
            <InputForm ref={this.child}/>
          </MuiDialogContent>
          <MuiDialogActions>
            <Button autoFocus onClick={() => this.handleSubmitAction()} color="primary">
              Save changes
          </Button>
          </MuiDialogActions>
        </Dialog>
      </Container>
    );
  }
}

export default CreateEmployeeComponent
