import { connect } from 'react-redux';
import { setSelectinstitute, setSelectRoom } from '../reducers/controlSelect';
import controlSelect from '../views/ControlSelect';
import { toggleModal } from "../reducers/formData";
const mapStateToProps = (state) => (
    {
        rooms: state.controlSelect.rooms,
        selectinstitute: state.controlSelect.selectinstitute,
        selectRoom: state.controlSelect.selectRoom,
    }
)

const mapDispathToProps = { setSelectRoom, setSelectinstitute, toggleModal };

export default connect(mapStateToProps, mapDispathToProps)(controlSelect);

