function getRoles(){
    return fetch("https://mocki.io/v1/d9edaab9-df73-4104-9849-bbea25e9670f").then(
        (response)=>{
            return (response.json())
        }
        ).catch((error)=>"Error")
}
export default getRoles;