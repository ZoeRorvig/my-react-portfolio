import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        // if (currentPage === 'Portfolio') {
        //   return <Portfolio />;
        // }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        // if (currentPage === 'Resume') {
        //   return <Resume />;
        // }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
