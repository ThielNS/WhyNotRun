
export const getApi = () => (dispatch) => 
    fetch('https://private-000f3-technologies1.apiary-mock.com/technology')
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