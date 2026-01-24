import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import NuevaEvidencia from '../componentes/nuevaEvidencia/NuevaEvidencia';
import ProgresoCompletoAlumno from '../componentes/ProgresoAlumno/ProgresoCompletoAlumno'
import RevisionesPendientes from '../componentes/RevisionesPendientes/RevisionesPendientes';

function FuncionalidadEstudiante() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

   return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="MI PROGRESO COMPLETO" value="1" />
            <Tab label="SUBIR NUEVA EVIDENCIA" value="2" />
            <Tab label="MIS REVISIONES PENDIENTES" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><ProgresoCompletoAlumno></ProgresoCompletoAlumno></TabPanel>
        <TabPanel value="2"><NuevaEvidencia></NuevaEvidencia></TabPanel>
        <TabPanel value="3"><RevisionesPendientes></RevisionesPendientes></TabPanel>
      </TabContext>
    </Box>
  );
}
export default FuncionalidadEstudiante



