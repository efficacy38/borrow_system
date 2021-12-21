import { combineReducers } from "redux";
import calendarEventReducer from "./calendarSlice";
import formDataReducer from "./formData";
import controlSelect from './controlSelect';

export default combineReducers({
    calendarEvent: calendarEventReducer,
    formData: formDataReducer,
    controlSelect: controlSelect,
});