import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './components/KanbanBoard';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<KanbanBoard />, document.getElementById('root'));
registerServiceWorker();
