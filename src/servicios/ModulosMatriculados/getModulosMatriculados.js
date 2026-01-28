function getModulosMatriculados(){
    return fetch("http://eportfolio.test/api/v1/modulos-matriculados").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosMatriculados;