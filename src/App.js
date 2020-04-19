import React from 'react';

import { DashboardComponent } from './modules/dashboard/components';
import './App.scss';

function App () {
    return (
        <div className='App'>
            <article className='App-container'>
                <DashboardComponent />
            </article>
        </div>
    );
}

export default App;
