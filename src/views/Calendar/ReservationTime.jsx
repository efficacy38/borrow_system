import React from "react";
import styles from "./ReservationTime.module.css";
import {MDBCard} from 'mdbreact';

function ReservationTime({calendarEvents}) {
  return (
    <div className="h-100 d-flex flex-row flex-column">
      <div className={`${styles.eventContainerHeader} d-flex p-3`}>
        <h2>查看日期區間教室預約狀況</h2>
      </div>

      <div className={`${styles.eventContainer} w-100 flex-grow-1`}>
          {
          calendarEvents.map((item)=>(<MDBCard className="d-flex">
            {item.borrower_name} {new Date(item.start_dt).getHours()} - {new Date(item.end_dt).getHours()} 借 {item.borrow_room} 來 {item.purpose}
          </MDBCard>))
          }
        
      </div>
    </div>
  );
}

export default ReservationTime;
