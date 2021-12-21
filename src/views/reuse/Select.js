import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

function CistomizeSelect({ options, value, handleChange, label }) {
    return (
        <div style={{ width: "100%", margin:"10px"}}>
            <FormControl style={{ width: "100%" }}>
                <InputLabel>{label}</InputLabel>
                <Select
                    id="demo-simple-select"
                    value={value}
                    onChange={(e) => { handleChange(e.target.value);}}
                >
                    <MenuItem disabled value="請選擇">請選擇</MenuItem>
                    {
                        options.map(item => (
                            <MenuItem value={item}>{item}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    )
}

export default CistomizeSelect