import React from 'react';import './App.css';
import Headers from '../src/components/Header';
import Divider from '@material-ui/core/Divider';
import CreateEmployeeComponent from '../src/components/CreateEmployee';
import SearchComponent from '../src/components/SearchComponent'
import EmployeeTable from '../src/components/EmployeeTable';
import { connect } from 'react-redux'
import callBackEndForCompleteData from '../src/actions/callBackEndForGetAll'

class App extends React.Component{

  componentDidMount(){
    //calling backEND for resultSET
    this.props.callBackEndForCompleteData("http://localhost:8081/employee");

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

const mapStateToProps=(state)=>{
  console.log("STATE on APP.JS ", state);
  return{
    getAllData: state.getAllData
  }}

const mapDispatchToProps={callBackEndForCompleteData};

export default connect(mapStateToProps, mapDispatchToProps)(App);
