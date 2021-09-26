import React from 'react';
import WarehouseTable from '@/pages/home/WarehouseTable/WarehouseTable';
import FactoryTable from '@/pages/home/FactoryTable/FactoryTable';

const Home = (): React.ReactElement => {
  return (
    <div className="home-container container">
      <div className="header my-5">
        <h1>Vandelay Industries</h1>
      </div>
      <WarehouseTable />
      <FactoryTable />
    </div>
  );
};

export default Home;
