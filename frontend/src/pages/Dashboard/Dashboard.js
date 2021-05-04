import React from 'react';
import { Sidebar } from '../../components/Sidebar/index';

import style from './Dashboard.module.scss';

const Dashboard = () => {
    return(
        <div>
            <div>
                <Sidebar text={'dashboard'}/>
            </div>
            <div className={style.container}>
                <h1>Dashboard</h1>
            </div>
        </div>

    )
}

export default Dashboard;