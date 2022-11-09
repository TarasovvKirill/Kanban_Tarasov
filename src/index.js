import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import TaskContent from './components/taskContent/TaskContent'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/tasks/:taskId' element={<TaskContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

