import { connect } from "react-redux";
import Calendar from '../views/Calendar';
import {setStartDt} from '../reducers/formData';

const mapStateToProps = (state) =>{
    return {
        calendarEvents:state.calendarEvent,
        start_dt:""
    }
}

const mapDispatchToProps = {setStartDt};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
