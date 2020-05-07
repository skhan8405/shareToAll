import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Headers extends React.Component{
    render(){
        return(
            <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                Akhshaya Kendram Employee Dash Board
              </Typography>
              <br/>
            </Toolbar>
          </AppBar>
        )
    }
}

export default Headers