import {connect} from "react-redux";
import FormData from "../views/Form";
import {
    setBorrowerName, setPurposeId, setPurpose,
    setStartDt, setEndDt, toggleModal,
    nextPage, prePage} from "../reducers/formData";

const mapSateToProps = (state) =>({
    borrower_name: state.formData.borrower_name,
    borrow_room: state.formData.borrow_room,
    purpose_id: state.formData.purpose_id,
    purpose: state.formData.purpose,
    start_dt: state.formData.start_dt,
    end_dt: state.formData.end_dt,
    supervisor: state.formData.supervisor,
    isOpen: state.formData.isOpen,
    currentPg: state.formData.currentPg,
})

const mapDispatchToProps = {
    setBorrowerName, setPurposeId, setPurpose,
    setStartDt, setEndDt, toggleModal,
    nextPage, prePage};

export default connect(mapSateToProps, mapDispatchToProps)(FormData);

