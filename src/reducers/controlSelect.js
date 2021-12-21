import { createSlice } from "@reduxjs/toolkit";

const init_data = {
    rooms: {
        "科技學院": [
            { department: "資工系", roomName: "科三 113", remark: "投影設備線(hdmi)在後方櫃子，投影機要轉成視頻模式(不是hdmi)才能使用" },
            { department: "資工系", roomName: "科三 207", remark: "投影設備線(hdmi)在後方櫃子，投影機要轉成視頻模式(不是hdmi)才能使用" },
            { department: "資工系", roomName: "科三 208", remark: "投影設備線(hdmi)在後方櫃子，投影機要轉成視頻模式(不是hdmi)才能使用" },
            { department: "資工系", roomName: "科三 108", remark: "投影設備線(hdmi)在後方櫃子，投影機要轉成視頻模式(不是hdmi)才能使用" },
        ],
        "管理學院": [
            { department: "資管系", roomName: "管院 226" },
            { department: "資管系", roomName: "管院 225" },
            { department: "資管系", roomName: "管院 224" },
            { department: "資管系", roomName: "管院 223" },
        ],
        "教育學院": [
            { department: "國比系", roomName: "綜合教育大樓B 102" },
            { department: "國比系", roomName: "綜合教育大樓B 101" },
            { department: "國比系", roomName: "綜合教育大樓B 100" },
            { department: "國比系", roomName: "綜合教育大樓B 001" },
        ],
        "人文學院": [
            { department: "英文系", roomName: "人103" },
            { department: "英文系", roomName: "人100" },
            { department: "英文系", roomName: "人101" },
            { department: "英文系", roomName: "人100" },
        ],
    },
    selectinstitute: "科技學院",
    selectRoom: "請先選擇院別",
};

const controlSelect = createSlice({
    name: "controlSelect",
    initialState: init_data,
    reducers: {
        setSelectinstitute(state, action) {
            return { ...state, selectinstitute: action.payload, selectRoom: "請選擇" };
        },
        setSelectRoom(state, action) {
            return { ...state, selectRoom: action.payload };
        }
    },
});

export const { setSelectinstitute, setSelectRoom } = controlSelect.actions;
export default controlSelect.reducer;