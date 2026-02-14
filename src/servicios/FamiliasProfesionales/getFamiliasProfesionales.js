function getFamiliasProfesionales() {
    return fetch('https://mocki.io/v1/bf297d7d-fe8a-4315-b95c-137d1555400c')
    .then((response => { return (response.json()) })
    ).catch((error) => "Error")
} 

export default getFamiliasProfesionales