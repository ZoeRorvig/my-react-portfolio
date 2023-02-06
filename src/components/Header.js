import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {

  return (
    <header>
      <div>
        <h1>Zoe Rorvig</h1>
      </div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}
