import React from 'react'
import Select from '../reuse/Select';
import {MDBBtn} from 'mdbreact';

const institute = [
    '科技學院',
    '管理學院',
    '教育學院',
    '人文學院',
]

function index(props) {
    console.log(props)
    return (
        <div>
            <Select options={institute} handleChange={props.setSelectinstitute} value={props.selectinstitute} label="選擇學院" />
            <Select options={props.rooms[props.selectinstitute].map((item) => item.roomName)} handleChange={props.setSelectRoom} value={props.selectRoom} label="選擇教室" />
            <MDBBtn onClick={props.toggleModal}>預約</MDBBtn>
        </div>
    )
}

export default index
