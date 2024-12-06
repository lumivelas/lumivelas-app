import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

interface Option {
    code: string;
    display: string;
}

interface Props {
    options: Option[];

    id: string;
    title: string;
}

const LumiSelect: React.FC<Props> = ({ id, title, options }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event: SelectChangeEvent<string>) => {
        const newOption = event.target.value||'';
        if (newOption) {
            setSelectedOption(newOption);
        }
    };

    return (
        <>
            <InputLabel id={id}>{title}</InputLabel>
           
            <Select
                id={id}
                label={title}
                labelId={title}
                value={selectedOption}
                onChange={handleChange}
            >
                {
                    options.map(option => (
                        <MenuItem key={option.code} value={option.code}>{option.display}</MenuItem>        
                    ))
                }
            </Select>
        </>
    );
};

export default LumiSelect;