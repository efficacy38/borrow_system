import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import Calendar from './EventCalendar';
import ReservationTime from './ReservationTime';

function index(props) {
    return (
        <MDBRow>
            <MDBCol size="12" sm="9">
                <div className="m-3">
                <Calendar {...props} />
                </div>
            </MDBCol>
            <MDBCol size="12" sm="3">
                <ReservationTime {...props}/>
            </MDBCol>
        </MDBRow>

    )
}

export default index
