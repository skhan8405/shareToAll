import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const columns = [
  {
  id: 'id', 
  align: 'center',
  label: '#',
  minWidth: 170
  },
  {
  id: 'name', 
  align: 'center',
  label: 'First Name',
  minWidth: 170
},
  { id: 'code', align: 'center', label: 'Last Name', minWidth: 100 },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'size',
    label: 'DOB(YYYY-MM-dd)',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString(),
  },
  {
    id: 'designation',
    label: 'Designation',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

//   const useStyles = makeStyles({
//     root: {
//       width: '100%',
//     },
//     container: {
//       maxHeight: 440,
//     },
//   });

//   const classes = useStyles();
class EmployeeTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rowsPerPage: 10,
      page: 1,
    }
  }
  createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  handleChangeRowsPerPage = () => {

  }

  handleChangePage = () => {

  }

  render() {
    return (
      <Paper /*className={classes.root}*/
      >
        <TableContainer /*className={classes.container}*/
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
                {
                  this.props.getAllDataSet_.map(dataRow=>{
                    var row=dataRow.employee;
                    return(
                      <TableRow>  


                      <StyledTableCell align={"center"}>
                      {row.id}
                      </StyledTableCell>

                      <StyledTableCell align={"center"}>
                      {row.firstName}
                      </StyledTableCell>

                      <StyledTableCell align={"center"}>
                      {row.lastName}
                      </StyledTableCell>

                      <StyledTableCell align={"center"}>
                      {row.location ==null ? "-": row.location}
                      </StyledTableCell>

                      <StyledTableCell align={"center"}>
                      {row.dateOfBirth}
                      </StyledTableCell>

                      <StyledTableCell align={"center"}>
                      {row.designation}
                      </StyledTableCell>

                      </TableRow>

                    );
                  })
                      
                }
            </TableBody>
            {/* <TableBody>
            {this.state.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody> */}
          </Table>
        </TableContainer>
        {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={this.state.rowsPerPage}
        page={this.state.page}
        onChangePage={()=>{this.handleChangePage()}}
        onChangeRowsPerPage={()=>{this.handleChangeRowsPerPage()}}
      /> */}
      </Paper>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    getAllDataSet_: state.getAllData
  }
}

const mapDispatchToProps={};
export default connect(mapStateToProps, mapDispatchToProps)( EmployeeTable);