import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class App extends Component {
  state = {
    warehouses: []
  }
  componentWillMount() {
    axios.get('http://localhost:3000/warehouses')
  }
  render() {
      return (
        <div className="App container">
          <Table>
            <thead>
              <tr>
                  <th>Heading</th>
                  <th>Heading</th>
                  <th>Heading</th>
                  <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button color="success" size="sm" className="mr-2">Edit</Button>
                  <Button color="danger" size="sm">Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
   }
}

export default App;
