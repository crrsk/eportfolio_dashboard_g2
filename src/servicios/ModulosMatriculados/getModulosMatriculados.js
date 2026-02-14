function getModulosMatriculados(){
    return fetch("https://mocki.io/v1/4cf5acde-c3de-4e67-81a0-e1f14e9dc0f4").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosMatriculados;