const formCreateUser = document.getElementById('form-create-user');

formCreateUser.addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value; // event.target.username
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const data = {
        username: username,
        email: email,
        password: password,
        state: state,
        country: country,
    }

    // Alternatives: fetch, XMLHttpRequest
    axios({
        // get: para obtener datos, post: insertar datos, put: actualizar datos, delete: eleminar datos.
        method: 'post', 
        url: 'http://localhost:3330/users/create',
        data: data,
    }).then( response => {
        console.log('response', response);

        if(response.status === 200){
            
        }
    }).catch( error => {
        console.log('error', error);
    });

});
 
function getCountries(){
    let country_select = document.getElementById('country');

    axios({
        // get: para obtener datos, post: insertar datos, put: actualizar datos, delete: eleminar datos.
        method: 'get', 
        url: 'https://restcountries.com/v3.1/all',
    }).then( response => {
        if(response.status === 200){
            
            response.data.forEach(element => {
                //console.log('element', element);

                country_select.innerHTML += `<option value="${element.name.official}">${element.name.official}</option>`;
            });
        }
    }).catch( error => {
        console.log('error', error);
    });
}

function getUsers(){
    axios({
        method: 'get', 
        url: 'http://localhost:3330/users/list',
    }).then( response => {
        console.log('response', response)
    }).catch( error => {
        console.log('error', error);
    });
}

getCountries();
getUsers();