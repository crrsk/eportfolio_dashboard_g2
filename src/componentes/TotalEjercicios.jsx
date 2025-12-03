
function TotalEjercicios(props){


//    let total = misTemas.parts?.reduce(((sum,b)=>{  console.log(sum); return sum+b.exercises}),0);

 
    return(
        
       <>      
       <p>El total de ejercicios es {props.misTemas.parts.reduce(((sum,b)=>{  console.log(sum); return sum+b.exercises}),0)}</p> 
       </>

             
        
    )       
}

export default TotalEjercicios