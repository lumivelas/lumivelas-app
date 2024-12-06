import { InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

interface Option {
    code: int;
    display: string;
}

interface Props {
    options: Option[];

    id: string;
    title: string;
}

const LumiSelect: React.FC<Props> = ({ id, title, options }) => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <>
            <InputLabel id={id}>{ title }</InputLabel>
            
            <Select
                id={id}
                label={title}
                labelId={title}
                value={selectedOption}
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