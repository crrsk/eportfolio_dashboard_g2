function postTareasPorRA() {
    return fetch('http://eportfolio.test/api/v1/tareas')
    .then((response => { return (response.json()) })
    ).catch((error) => "Error")
} 

export default postTareasPorRA