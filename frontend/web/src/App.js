import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Login/Home';
import LoginChoice from './component/LoginChoice';
import LoginForm from './component/LoginForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login-choice" element={<LoginChoice />} />
                <Route path="/login-form" element={<LoginForm />} />
            </Routes>
        </Router>
    );
};

export default App;