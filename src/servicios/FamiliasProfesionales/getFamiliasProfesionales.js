function getFamiliasProfesionales() {
    return fetch('http://eportfolio.test/api/v1/familias_profesionales')
    .then((response => { return (response.json()) })
    ).catch((error) => "Error")
} 

export default getFamiliasProfesionales