import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'reactstrap';
import axios from 'axios';
import { Factory } from '@/data/Factory';

type State = {
  editMode: boolean;
  factories: Factory[];
};

const initialState: State = {
  editMode: false,
  factories: []
};

const FactoryTable = (): React.ReactElement => {
  const [factories, setFactories] = useState(initialState.factories);
  const [editMode, setEditMode] = useState(initialState.editMode);

  useEffect(() => {
    const fetchFactories = async () => {
      const response = await axios.get('http://localhost:3000/factories.json');
      setFactories(response.data);
    };

    try {
      fetchFactories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleBlur = () => setEditMode(false);

  const handleEdit = () => setEditMode(!editMode);

  const handleDelete = (index: number) => {
    factories.splice(index, 1);
    setFactories([...factories]);
  };

  return (
    <div className="factory-table-container">
      <h2>Factories</h2>
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
          {_.map(factories, (factory: Factory, index: number) => (
            <tr key={`factory-row-${factory.factoryId}`}>
              <td>Factory</td>
              {editMode ? (
                <td className="form-group">
                  <input
                    id={`${factory.factoryId}-name`}
                    name="name"
                    type="text"
                    className="form-control"
                    defaultValue={factory.factoryName}
                    onChange={event => (factory.factoryName = event.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
              ) : (
                <td>{factory.factoryName}</td>
              )}
              {editMode ? (
                <td className="form-group">
                  <input
                    id={`${factory.factoryId}-description`}
                    name="description"
                    type="text"
                    className="form-control"
                    defaultValue={factory.factoryDescription}
                    onChange={event => (factory.factoryDescription = event.target.value)}
                    onBlur={handleBlur}
                  />
                </td>
              ) : (
                <td>{factory.factoryDescription}</td>
              )}
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

export default FactoryTable;
