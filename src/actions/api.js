export const getTasks = () => (dispatch) => {
    fetch('https://private-f0cf3-tweet.apiary-mock.com/todolists')
        .then(response => response.json())
        .then((responseData) => {
           dispatch({type: 'GET_TECH', payload: responseData})
        })
        .catch(error => {
            console.log(error, "erro");
        })
    
 }