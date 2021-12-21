import React from 'react';
import {MDBInput} from 'mdbreact';
import CheckBox from '../../reuse/CustomCheck';

function selectPage() {
    return (
        <div>
            <h2>選擇日期</h2>
            <MDBInput label="選擇租借日期" type="date"/>
            <h2>選擇院別</h2>
            <h2>選擇教室</h2>
            <h2>選擇監督教師(超過8點需要填寫)</h2>
        </div>
    )
}

export default selectPage
