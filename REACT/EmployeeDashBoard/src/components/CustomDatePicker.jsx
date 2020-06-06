import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function CustomDatePicker(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [error, setError]= React.useState(false);
  const handleDateChange = (date) => {
    if(date.getTime() > new Date().getTime()){
      console.log("INVALID DOB");
      setError(true);
    }else{
      setSelectedDate(date);
      setError(false);
      props.handleDateChange(date)
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          error={error}
          variant="inline"
          format="dd-MM-yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date Of Birth"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
