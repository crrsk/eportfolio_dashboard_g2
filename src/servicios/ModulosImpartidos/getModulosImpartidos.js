function getModulosImpartidos(){
    return fetch("http://eportfolio.test/api/v1/modulos-impartidos").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosImpartidos;