import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/Profile';
import Projects from './assets/Projects';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;