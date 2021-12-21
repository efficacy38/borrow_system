import { createSlice } from '@reduxjs/toolkit';

const init_data = {
    borrower_name: "",
    borrow_room: "",
    purpose_id: "",
    purpose: "",
    start_dt: "",
    end_dt: "",
    supervisor: "",
    isOpen: false,
    currentPg: 0,
}

const formDataSlice = createSlice({
    name: "formdata",
    initialState: init_data,
    reducers:{
        setBorrowerName(state, action)
        {
            return {...state, borrower_name: action.payload};
        },
        setBorrowerRoom(state, action)
        {
            return {...state, borrow_room: action.payload};
        },
        setPurposeId(state, action)
        {
            return  {...state, purpose_id: action.payload};
        },
        setPurpose(state, action)
        {
            return {...state, purpose: action.payload};
        },
        setStartDt(state, action)
        {
            return {...state, start_dt: action.payload};
        },
        setEndDt(state, action)
        {
            return {...state, end_dt: action.payload};
        },
        setSupervisor(state, action)
        {
            return {...state, supervisor: action.payload};
        },
        toggleModal(state, action)
        {
            return {...state, isOpen: !state.isOpen};
        },
        nextPage(state, action)
        {
            return {...state, supervisor: action.payload};
        },
        prePage(state, action)
        {
            return {...state, borrower_name: action.payload};
        }
    }
})

export const {setBorrowerName, setPurposeId, setPurpose,
    setStartDt, setEndDt, toggleModal,
    nextPage, prePage, setBorrowerRoom,
    setSupervisor} = formDataSlice.actions;
export default formDataSlice.reducer;