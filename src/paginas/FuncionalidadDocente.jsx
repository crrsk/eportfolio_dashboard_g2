import AsignarRevisiones from "../componentes/AsignarRevisiones/AsignarRevisiones";
import EvaluarEvidencias from "../componentes/EvaluarEvidencias/EvaluarEvidencias";
import PlanificarCriterios from "../componentes/PlanificarCriterios/PlanificarCriterios";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react'
function FuncionalidadDocente(){

const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="PLANIFICAR CRITERIOS" value="1" />
            <Tab label="EVALUAR EVIDENCIAS" value="2" />
            <Tab label="ASIGNAR REVISIONES" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><PlanificarCriterios></PlanificarCriterios></TabPanel>
        <TabPanel value="2"><EvaluarEvidencias></EvaluarEvidencias></TabPanel>
        <TabPanel value="3"><AsignarRevisiones></AsignarRevisiones></TabPanel>
      </TabContext>
    </Box>
  );
}
export default FuncionalidadDocente