function getRoles(){
    return fetch("http://eportfolio.test/api/v1/roles/1").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getRoles;