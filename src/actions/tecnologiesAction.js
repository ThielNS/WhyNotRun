export const getApi = () => (dispatch) =>
    fetch('https://private-de89f-technologies2.apiary-mock.com/technologies')
        .then(response => response.json())
        .then((responseData) => {
            dispatch({ type: 'GET_TECH', payload: responseData })
        })
        .catch(error => {
            console.log(error, "erro");
        })



const filterTechs = (technology) => (dispatch) => ({
    type: 'GET_TECH',
    payload: technology
})