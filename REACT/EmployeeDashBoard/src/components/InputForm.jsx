import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CustomDatePicker from '../components/CustomDatePicker'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';

const PurpleSwitch = withStyles({
    switchBase: {
      color: red[300],
      '&$checked': {
        color: green[500],
      },
      '&$checked + $track': {
        backgroundColor: green[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  
class InputForm extends React.Component {
    handleToggleChange=(event)=>{
      console.log("Toggled ",event);
    }
    render() {
        return (
            <form>
                <Grid container xs={12}>
                    <TextField
                        fullWidth={true}
                        id="outlined-helperText"
                        label="Designation"
                        placeholder="Enter Designaion"
                        variant="outlined"
                    />
                </Grid>
                <br />
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <TextField fullWidth={true}
                            id="outlined-helperText"
                            label="First Name"
                            placeholder="Enter First Name"
                            variant="outlined"
                        />
                    </Grid>
                    <div>&nbsp; &nbsp;</div>
                    <Grid item xs={5}>
                        <TextField fullWidth={true}
                            id="outlined-helperText"
                            label="Last Name"
                            placeholder="Enter Last Name"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <div>&nbsp;</div>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                    <FormControlLabel
        control={<PurpleSwitch //checked={state.checkedB}
        onChange={(event)=>this.handleToggleChange(event)}
         name="checkedB" />}
        label="Is The Employee Lateral?"
      />
         </Grid>
                    <Grid item xs={5}>
                    <CustomDatePicker title={"Start Date"} />
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default InputForm