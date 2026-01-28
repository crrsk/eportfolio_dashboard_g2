function getTareasPorRA(){
    return fetch("http://eportfolio.test/api/v1/resultados-aprendizaje/1/tareas").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getRoles;