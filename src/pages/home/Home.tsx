import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Warehouse } from '@/data/Warehouse';
import { Factory } from '@/data/Factory';

type State = {
  warehouses: Warehouse[];
  factories: Factory[];
};

const initialState: State = {
  warehouses: [],
  factories: []
};

const Home = (): React.ReactElement => {
  const [warehouses, setWarehouses] = useState(initialState.warehouses);
  const [factories, setFactories] = useState(initialState.factories);

  useEffect(() => {
    axios.get('http://localhost:3000/warehouses.json').then(response => {
      setWarehouses(response.data);
    });

    axios.get('http://localhost:3000/factories.json').then(response => {
      setFactories(response.data);
    });
  }, []);

  return (
    <div className="Home container">
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {_.map(warehouses, (warehouse: Warehouse) => (
            <tr key={`warehouse-row-${warehouse.warehouseId}`}>
              <td>Warehouse</td>
              <td>{warehouse.warehouseName}</td>
              <td width={500}>{warehouse.warehouseDescription}</td>
              <td>
                {warehouse.warehouseAddress.buildingName +
                  ' ' +
                  warehouse.warehouseAddress.streetLine1 +
                  ' ' +
                  warehouse.warehouseAddress.streetLine2}
                <br />
                {warehouse.warehouseAddress.city +
                  ' ' +
                  warehouse.warehouseAddress.stateProvince +
                  ' ' +
                  warehouse.warehouseAddress.zipPostalCode +
                  ' ' +
                  warehouse.warehouseAddress.country +
                  ' '}
              </td>
              <td>
                <Button color="success" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          {_.map(factories, (factory: Factory) => (
            <tr key={`factory-row-${factory.factoryId}`}>
              <td>Factory</td>
              <td>{factory.factoryName}</td>
              <td width={500}>{factory.factoryDescription}</td>
              <td>
                {factory.factoryAddress.buildingName +
                  ' ' +
                  factory.factoryAddress.streetLine1 +
                  ' ' +
                  factory.factoryAddress.streetLine2}
                <br />
                {factory.factoryAddress.city +
                  ' ' +
                  factory.factoryAddress.stateProvince +
                  ' ' +
                  factory.factoryAddress.zipPostalCode +
                  ' ' +
                  factory.factoryAddress.country +
                  ' '}
              </td>
              <td>
                <Button color="success" size="sm" className="mr-2">
                  Edit
                </Button>
                <Button color="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
