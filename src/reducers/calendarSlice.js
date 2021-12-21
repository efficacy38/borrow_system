import { createSlice } from "@reduxjs/toolkit";

const init_data = [
    {borrower_name: "chill 分", borrow_room: "科三 113", purpose: "耍廢", start_dt: "2021-03-05T20:00:00", end_dt: "2021-03-05T22:00:00"},
    {borrower_name: "chill 分", borrow_room: "科三 113", purpose: "耍廢", start_dt: "2021-03-05T20:00:00", end_dt: "2021-03-05T22:00:00"},
    {borrower_name: "strong", borrow_room: "科三 113", purpose: "耍廢", start_dt: "2021-03-05T20:00:00", end_dt: "2021-03-05T22:00:00"},
];

const todosSlice = createSlice({
  name: "calendarEvent",
  initialState: init_data,
  reducers: {
  },
});

export const { } = todosSlice.actions;
export default todosSlice.reducer;