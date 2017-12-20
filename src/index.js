import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard';
import registerServiceWorker from './registerServiceWorker';
import './css/Index.css';

ReactDOM.render(<KanbanBoard />, document.getElementById('root'));
registerServiceWorker();
