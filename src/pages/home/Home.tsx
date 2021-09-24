import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

type State = {
  warehouses: any[];
};

const initialState: State = {
  warehouses: [],
};

const Home = (): React.ReactElement => {
  const [warehouses, setWarehouses] = useState(initialState.warehouses);

  // state = {
  //   warehouses: [],
  // };

  // componentWillMount() {
  //   axios.get("http://localhost:3000/warehouses");
  // }

  useEffect(() => {
    axios.get(" http://localhost:3000/warehouses");
  }, []);

  return (
    <div className="Home container">
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
            <td />
            <td />
            <td />
            <td>
              <Button color="success" size="sm" className="mr-2">
                Edit
              </Button>
              <Button color="danger" size="sm">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
