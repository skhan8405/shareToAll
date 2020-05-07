import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

class SearchComponent extends React.Component {

    handleSearch = () => {
        console.log("Searching");
    }
    render() {
        return (
            <Grid>
                <Typography paragraph={true} align={"center"} variant="h6">
                    Search An Employee
          </Typography>
                <Grid container xs={12}>
                    <div>&nbsp; &nbsp;</div>
                    <Grid item xs={3}>
                        <TextField
                            autoFocus={true}
                            fullWidth={true}
                            id="outlined-helperText"
                            label="Employee Id"
                            placeholder="Enter Employee Id"
                            variant="outlined"
                        />
                    </Grid>
                    <div>&nbsp; &nbsp;</div>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth={true}
                            id="outlined-helperText"
                            label="First Name"
                            placeholder="Enter First Name"
                            variant="outlined"
                        />
                    </Grid>
                    <div>&nbsp; &nbsp;</div>
                    <Grid item xs={3}>
                        <TextField
                            fullWidth={true}
                            id="outlined-helperText"
                            label="Designation"
                            placeholder="Enter Designaion"
                            variant="outlined"
                        />
                    </Grid>
                    <div>&nbsp; &nbsp;</div>
                    <div className="searchButton">
                    <Grid item xs={1}>
                        <Button
                            onClick={() => this.handleSearch()}
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SearchIcon />}
                        >
                            Search
                    </Button>
                    </Grid>
                    </div>
                </Grid>
                <br />
            </Grid>
        )
    }
}

export default SearchComponent
