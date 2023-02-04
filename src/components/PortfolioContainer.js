import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    // if (currentPage === 'Portfolio') {
    //   return <Portfolio />;
    // }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
