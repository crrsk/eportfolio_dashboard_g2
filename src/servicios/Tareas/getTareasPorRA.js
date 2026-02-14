function getTareasPorRA(){
    return fetch("https://mocki.io/v1/8a179952-0af2-4b9a-87e1-db8205864ad6").then(
        (response)=>{return (response.json())}
        ).catch((error)=>"Error")
}
export default getTareasPorRA;