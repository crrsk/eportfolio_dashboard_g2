//Import de MUI para SELECT
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function SelectorTareaRA(props) {
  
        const [tarea, setTarea] = React.useState('');

        const handleChange = (event) => {
            setTarea(event.target.value);
            props.manejarEvidencia(event.target.value)
        } 

        const tareas=props.tareas

        function imprimeRA(ra){
            
            return <MenuItem value={ra}>{ra.observaciones}</MenuItem>
        }
    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tarea}
                        label="Tarea"
                        onChange={handleChange}
                    >
                        {tareas.lista.map(imprimeRA)}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default SelectorTareaRA