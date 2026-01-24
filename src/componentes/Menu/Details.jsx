
import { Link } from 'react-router-dom';
import AccordionDetails from '@mui/material/AccordionDetails';

function Details(props){
    return(
        <>
             <AccordionDetails>
                  <Link to={props.ruta}>{props.nombre}</Link> 
                  
                </AccordionDetails>
        </>
    )
}

export default Details