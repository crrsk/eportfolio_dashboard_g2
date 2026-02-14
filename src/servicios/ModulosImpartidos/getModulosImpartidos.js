function getModulosImpartidos(){
    return fetch("https://mocki.io/v1/1436d19a-288e-4939-a9d0-d35b1652b336").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getModulosImpartidos;
