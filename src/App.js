import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Modal, Button } from '@mui/material'
import { useState } from 'react';

const data = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    occupation: 'Commander',
    house: 'Stark',
    allegiance: 'Night\'s Watch',
    status: 'Alive',
    location: 'Castle Black',
    skills: ['swordsmanship', 'leadership'],
    education: 'Self-taught',
    nickname: 'Lord Snow',
    title: 'King in the North',
    motto: 'Winter is Coming',
    birthplace: 'Winterfell',
    birthDate: '283 AC'
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 4,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 5,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 6,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 7,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 8,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 9,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 10,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
  {
    id: 11,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 42,
    occupation: 'Queen',
    house: 'Lannister',
    allegiance: 'House Lannister',
    status: 'Deceased',
    location: 'King\'s Landing',
    skills: ['political strategy', 'manipulation'],
    education: 'Royal upbringing',
    nickname: 'Queen Cersei',
    title: 'Queen of the Seven Kingdoms',
  },
]

export default function BasicTable() {
  const [rows, setRows] = useState(data);
  const [pagination, setPagination] = useState({ page: 0, rowsPerPage: 5, start: 0, countData: 5 });
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState({ coloumn: "", total: "", modal: false, inputData: "", inputDataColumn: "" });
  const [hide, setHide] = useState([{ allow: false, column: "" }]);
  // const rows = data;

  const keys = Object.keys(rows[0]);

  const handleChangePage = (e, newPage) => {
    console.log(newPage, "eeeeeeeeeeeeeeeeeeeeeeeeeeeee", pagination.rowsPerPage);
    setPagination({ ...pagination, page: newPage, start: newPage > pagination.page ? pagination.start + pagination.rowsPerPage : pagination.start - pagination.rowsPerPage, countData: newPage > pagination.page ? pagination.countData + pagination.rowsPerPage : pagination.countData - pagination.rowsPerPage });
    console.log(newPage, "newwwwwwwwwwwwwww", pagination.page);
  }

  console.log(pagination, "paginationsssssssssss");

  const handleChangeRowsPerPage = (e) => {
    setPagination({ ...pagination, rowsPerPage: parseInt(e.target.value, 10), page: 0, start: 0, countData: parseInt(e.target.value, 10) });
  }

  const sortAscendingByProperty = (property, full) => {
    if (full) {
      const sortedData = [...data].sort((a, b) => {
        keys.map((key) => {
          if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            return a[key] - b[key];
          } else {
            return ('' + a[key]).localeCompare('' + b[key]);
          }
        })
      });
      setRows(sortedData);
      setOpenModal("");
    } else {
      const sortedData = [...data].sort((a, b) => {
        if (typeof a[property] === 'number' && typeof b[property] === 'number') {
          return a[property] - b[property];
        } else {
          return ('' + a[property]).localeCompare('' + b[property]);
        }
      });
      setRows(sortedData);
      setOpenModal("");
    }
  }

  const sortDescendingByProperty = (property, full) => {
    if (full) {
      const sortedData = [...rows].sort((a, b) => {
        keys.map((key) => {
          if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            return b[key] - a[key];
          } else {
            return ('' + b[key]).localeCompare('' + a[key]);
          }
        })
      });

      console.log(`Sorted in descending order by ${property}:`);
      console.log(sortedData, "sortttttttt");
      setRows(sortedData);
      setOpenModal("");
    } else {
      const sortedData = [...rows].sort((a, b) => {
        if (typeof a[property] === 'number' && typeof b[property] === 'number') {
          return b[property] - a[property];
        } else {
          return ('' + b[property]).localeCompare('' + a[property]);
        }
      });

      console.log(`Sorted in descending order by ${property}:`);
      console.log(sortedData, "sortttttttt");
      setRows(sortedData);
      setOpenModal("");
    }
  }
  // console.log(rows, "rowssssssssssssssssssssssssssssssssssss");
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const searchInColumn = (column) => {
    const searchTerm = search.inputDataColumn
    const searchResults = data.filter(item => {
      if (typeof item[column] === 'string') {
        return item[column].toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof item[column] === 'number') {
        return item[column] === Number(searchTerm);
      }
      return false;
    });

    console.log(`Search results in column ${column} for "${searchTerm}":`);
    console.log(searchResults);

    setRows(searchResults);
    setOpenModal("");
  }

  const searchInTable = () => {
    const searchTerm = search.inputData;
    const searchResults = data.filter(item => {
      for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
          if (typeof item[key] === 'string' && item[key].toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
          } else if (typeof item[key] === 'number' && item[key] === Number(searchTerm)) {
            return true;
          }
        }
      }
      return false;
    });

    console.log(`Search results for "${searchTerm}" in the whole table:`);
    console.log(searchResults);

    setRows(searchResults);
  }

  const hidefunction = (column) => {
    // (hide.allow && hide.column === key) ? "#fff" : "#000"
    return hide.some((itm) => itm.column === column && itm.allow);
  }
  console.log(hide, "hideeeeeeeeeeeeeeeeeeeeeeeeeeee");
  return (
    <div>
      <label >{"search from table : "}</label>
      
      <input onChange={(e) => { setSearch({ ...search, inputData: e.target.value }) }} value={search.inputData} /> <br />
      <br />
      <button onClick={() => { searchInTable() }}>Search In Table</button><br />
      <br />
      <h4>CLICK HEADER TO FILTER SPECIFY DETAILS:</h4>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size={'medium'}>
          <TableHead>
            <TableRow>
              {keys.map((key) => <TableCell style={{ border: "1px solid #000", fontWeight: "bold", textAlign: "center", cursor: "pointer" }} key={key} onClick={() => { setOpenModal(key) }}>{key}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(pagination.start, pagination.countData).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {keys.map((key) => <TableCell component="th" scope="row" style={{ border: "1px solid #000", textAlign: "center", color: hidefunction(key) ? "#fff" : "#000", backgroundColor: hidefunction(key) ? "gray" : "" }}>{row[key]}</TableCell>)}

              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={pagination.rowsPerPage}
          page={pagination.page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
          <h2>{ }</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {hidefunction(openModal) ? <><Button variant="contained" onClick={() => {
              setHide(dta => [...dta, dta.map((itm) => {
                if (itm.column === openModal) {
                  return itm.allow = false;
                }
              })]); setOpenModal("")
            }}>display</Button> <br />
              <Button variant="contained" onClick={handleCloseModal}>Close</Button><br />
            </> :
              <>
                <Button variant="contained" onClick={() => { sortAscendingByProperty(openModal) }}>Sort Ascending</Button><br />
                <Button variant="contained" onClick={() => { sortDescendingByProperty(openModal) }}>Sort Descending</Button><br />
                <Button variant="contained" onClick={() => { sortAscendingByProperty(openModal, "full") }}>Sort Ascending multiple</Button><br />
                <Button variant="contained" onClick={() => { sortDescendingByProperty(openModal, "full") }}>Sort Descending multiple</Button><br />
                <input onChange={(e) => { setSearch({ ...search, inputDataColumn: e.target.value }) }} value={search.inputDataColumn} /> <br />
                <Button variant="contained" onClick={() => { searchInColumn(openModal) }}>search In Column</Button> <br />
                <Button variant="contained" onClick={() => { setHide(dta => [...dta, { allow: true, column: openModal }]); setOpenModal("") }}>hide</Button> <br />
                <Button variant="contained" onClick={handleCloseModal}>Close</Button><br />
              </>}
          </div>
        </div>
      </Modal>

    </div>
  );
}