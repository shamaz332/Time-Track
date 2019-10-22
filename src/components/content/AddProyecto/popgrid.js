import React from 'react'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Cardd from './card';
import CarddTwo from './card2';
import { DD } from './share/data'
import './styles.css'
import { InputAdornment } from '@material-ui/core';
class PopupModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DD,
      selectItem: []
    }
  }

  onDataSelect = (dataId) => {
    this.setState({ selectItem: dataId })
  }
  handleDelete = (idOfItemToDelete) => {
    const { selectItem } = this.state;
    const updatedSelection = selectItem.filter(({ id }) => {
      return id !== idOfItemToDelete
    })
    this.setState({ selectItem: updatedSelection })
  }
  handleMove = (idOfItemToMove) => {
    const { data, selectItem } = this.state;
    //  ... use for clone array as immutable (not copy as a refference).
    const updatedSelection = [...selectItem];

    const selectedItemObj = data.find((_data) => {
      const { id } = _data;
      return id === idOfItemToMove
    })
    const updatedData = data.filter(({ id }) => {
      return id !== idOfItemToMove
    })
    updatedSelection.push(selectedItemObj);
    this.setState({ data: updatedData, selectItem: updatedSelection })

  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Box
          display="flex"
          flexWrap="nowrap"
          p={1}
          m={1}>
          <Box p={1} >
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              required
              variant="outlined"
            />
            <br></br>
            <TextField
              autoFocus
              margin="dense"
              id="fecha"
              type="date"
              variant="outlined" />

          </Box>
          <Box p={1} className='box-mar'>
            <TextField
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              variant="outlined"></TextField>
            <CarddTwo data={this.state.selectItem} handleDelete={this.handleDelete} />
          </Box>
          <Box p={1} className='box-mar'>
            <TextField
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
              variant="outlined"
            ></TextField>
            <Cardd data={this.state.data} handleMove={this.handleMove}
            />
          </Box>
          <Box />
        </Box></div>

    )
  }
}
export default PopupModel