import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable

function EventCalendar({ calendarEvents, setStartDt }) {
  const calendarRef = useRef();
  const config = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    events: calendarEvents.map((item) => ({
      title: `${item.borrower_name} 借 ${item.borrow_room}`,
      start: item.start_dt,
      end: item.end_dt,
    })),
    theme: "lux",
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "today",
    },
    timeZone: "UTC",
    editable: true,
    selectable: true,
    eventClick: function (info) {
      setStartDt(info.startStr);
      calendarRef.current.getApi().select(info.event.start);
    },
    select: function (info) {
      setStartDt(info.startStr);
    },
    selectAllow: function (info) {
      if (info.end.getDate() - info.start.getDate() > 1) return false;
      else return true;
    },
  };

  return <FullCalendar {...config} ref={calendarRef} />;
}

export default EventCalendar;
