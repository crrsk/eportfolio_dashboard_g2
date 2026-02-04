function getRoles(){
    return fetch("http://eportfolio.test/api/v1/roles").then(
        (response)=>{
            return (response.json())
        }
        ).catch((error)=>"Error")
}
export default getRoles;