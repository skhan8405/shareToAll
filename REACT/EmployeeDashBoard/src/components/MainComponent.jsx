import React from 'react';
import Headers from '../components/Header';
import Divider from '@material-ui/core/Divider';
import CreateEmployeeComponent from '../components/Header';
import SearchComponent from '../components/Header'
import EmployeeTable from '../components/Header';

class MainComponent extends React.Component{

    componentWillReceiveProps(props){
        console.log("props in MainComponent ", props);
    }
    render(){
        return(
            <div className="mainDiv">
            <Headers/>
            <br/>
           <CreateEmployeeComponent/>
            <br/>   
            <Divider variant="middle" />
            <br/>
            <SearchComponent/>
            <br/>
            <Divider variant="middle" />
            <br/>
            <EmployeeTable/>
          </div>
        )
    }
}

export default MainComponent