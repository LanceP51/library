import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Library from './components/library';

ReactDOM.render(<Router>
        <Library />
</Router>
, document.getElementById('root'));
