import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {

  return (
    <header>
      <div>
        <h1 style={{ fontSize: 55 }}>Zoë Rorvig</h1>
      </div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
