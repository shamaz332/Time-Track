import React from 'react'
import { Grid, Form, Image, Card, Button, Input } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cardd from './card';
import CarddTwo from './card2';
import { DD } from './share/data'


class DatePickerr extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}

      />
    );
  }
}
const GridOne = () => (
  <Form>
    <Form.Field>
      <label>Nombre del proyecto</label>
      <input style={{ width: "69%" }} />
      <label>Nombre del proyecto</label>
      <DatePickerr  style={{ width: "69%" }}/>

    </Form.Field>
  </Form>
)
class PopupModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DD,
      selectItem: []
    }
  }
  onDataSelect = (dataId) =>{
    this.setState({ selectItem: dataId })
  }
  handleDelete=(idOfItemToDelete)=> {
    const {selectItem} = this.state;
    const updatedSelection = selectItem.filter(({id}) => {
      return id !== idOfItemToDelete
    })
    this.setState({selectItem:updatedSelection})
  }
  handleMove=(idOfItemToMove) =>{
    const {data,selectItem}=this.state;
    //  ... use for clone array as immutable (not copy as a refference).
    const updatedSelection = [...selectItem];

    const selectedItemObj = data.find((_data) => {  
      const {id} = _data;
      return id === idOfItemToMove
    })
    const updatedData = data.filter(({id}) => {
      return id !== idOfItemToMove
    })
    updatedSelection.push(selectedItemObj);
    this.setState({data:updatedData,selectItem:updatedSelection})
  
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <div style={{ paddingTop: '40px' }}>
                <GridOne />
              </div>
            </Grid.Column>



            <Grid.Column >
              <div style={{ width: '100%', paddingBottom: '5%', paddingTop: '10%' }} >
                <Input
                  icon={{ name: 'search', circular: true, link: true }} />
              </div>
              <div class="vl" style={{borderLeft:'2px solid black',height:'300px',position:'absolute',left:'-5%',marginLeft:'-3px',top:'0'}}></div>

              <CarddTwo data={this.state.selectItem} handleDelete={this.handleDelete} />
              </Grid.Column>

            <Grid.Column >
              <Cardd data={this.state.data} handleMove={this.handleMove}
              />
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </div>
    )
  }
}



export default PopupModel