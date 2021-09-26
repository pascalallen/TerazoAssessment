import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import axios from 'axios';
import { Warehouse } from '@/data/Warehouse';

type State = {
  editMode: boolean;
  warehouses: Warehouse[];
};

const initialState: State = {
  editMode: false,
  warehouses: []
};

const WarehouseTable = (): React.ReactElement => {
  const [warehouses, setWarehouses] = useState(initialState.warehouses);
  const [editMode, setEditMode] = useState(initialState.editMode);

  useEffect(() => {
    const fetchWarehouses = async (): Promise<any> => {
      const response = await axios.get('http://localhost:3000/warehouses.json');
      setWarehouses(response.data);
    };

    try {
      fetchWarehouses();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBlur = () => setEditMode(false);

  const handleEdit = () => setEditMode(!editMode);

  const handleDelete = (index: number) => {
    warehouses.splice(index, 1);
    setWarehouses([...warehouses]);
  };

  return (
    <div className="warehouse-table-container">
      <h2>Warehouses</h2>
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
          {_.map(warehouses, (warehouse: Warehouse, index: number) => (
            <tr key={`warehouse-row-${warehouse.warehouseId}`}>
              <td>Warehouse</td>
              {editMode ? (
                <td className="form-group">
                  <input
                    id={`${warehouse.warehouseId}-name`}
                    name="name"
                    type="text"
                    className="form-control"
                    defaultValue={warehouse.warehouseName}
                    onChange={event => (warehouse.warehouseName = event.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
              ) : (
                <td>{warehouse.warehouseName}</td>
              )}
              {editMode ? (
                <td className="form-group">
                  <input
                    id={`${warehouse.warehouseId}-description`}
                    name="description"
                    type="text"
                    className="form-control"
                    defaultValue={warehouse.warehouseDescription}
                    onChange={event => (warehouse.warehouseDescription = event.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
              ) : (
                <td>{warehouse.warehouseDescription}</td>
              )}
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
                <Button color="success" size="sm" className="edit-button" onClick={handleEdit}>
                  Edit
                </Button>
                <Button color="danger" size="sm" onClick={() => handleDelete(index)}>
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

export default WarehouseTable;
