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

var payLoadMap={};
class InputForm extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleToggleChange=(event)=>{
      console.log("Toggled ",event.target.name);
      this.setState({
          [event.target.name]: event.target.checked
      })
    }
    collectSavePayLoad=()=>{
        payLoadMap["firstName"] = this.state.firstName  === undefined ? "" : this.state.firstName;
        payLoadMap["lastName"] = this.state.lastName === undefined ? "" : this.state.lastName;
        payLoadMap["designation"] = this.state.designation === undefined ? "" : this.state.designation;
        payLoadMap["isEmployeeLateral"] = this.state.isEmployeeLateral === undefined ? false : this.state.isEmployeeLateral
        payLoadMap["dateOfBirth"] = this.state.dateOfBirth === undefined ? this.formatDate(new Date()) : this.state.dateOfBirth;
        console.log("PAY LOAD MAP ", payLoadMap)
        
    }
    handleTextChange=(event)=>{
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    handleDateChange=(date)=>{
        var dateOfBirthInFormat = this.formatDate(date);
        console.log("DATE IS ", dateOfBirthInFormat )
        this.setState({
            dateOfBirth : dateOfBirthInFormat
        })
    }

    formatDate=(date)=>{
        var dateOfBirth= new Date(date);
        var month = dateOfBirth.getMonth() + 1;
        var day= dateOfBirth.getDate();
        var year=  dateOfBirth.getFullYear();
        if(month < 10){
            console.log("LESS THAN 10")
            month = "0"+month;
        }
        if(day <10){
            day = "0"+day;
        }

        return year + "-" + month + "-" + day;
    }
    render() {
        return (
            <form>
                <Grid container xs={12}>
                    <TextField
                        fullWidth={true}
                        id="outlined-helperText-designation"
                        label="Designation"
                        placeholder="Enter Designaion"
                        variant="standard"
                        name={"designation"}
                        onChange={(event)=>this.handleTextChange(event)}
                    />
                </Grid>
                <br />
                <Grid container xs={12}>
                    <Grid item xs={6}>
                        <TextField fullWidth={true}
                            id="outlined-helperText-firstName"
                            label="First Name"
                            placeholder="Enter First Name"
                            variant="outlined"
                            onChange={(event)=>this.handleTextChange(event)}
                            name={"firstName"}
                        />
                    </Grid>
                    <div>&nbsp; &nbsp;</div>
                    <Grid item xs={5}>
                        <TextField fullWidth={true}
                            id="outlined-helperText-lastName"
                            label="Last Name"
                            placeholder="Enter Last Name"
                            variant="outlined"
                            onChange={(event)=>this.handleTextChange(event)}
                            name={"lastName"}
                        />
                    </Grid>
                </Grid>
                <div>&nbsp;</div>
                <Grid container xs={12}>
                    <Grid item xs={6}>
                    <FormControlLabel
        control={<PurpleSwitch //checked={state.checkedB}
        onChange={(event)=>this.handleToggleChange(event)}
         name="isEmployeeLateral" />}
         id="toggle-isLateral"
        label="Is The Employee Lateral?"
      />
         </Grid>
                    <Grid item xs={5}>
                    <CustomDatePicker handleDateChange={this.handleDateChange}/>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default InputForm