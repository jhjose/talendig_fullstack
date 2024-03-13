const formCreateUser = document.getElementById('form-create-user');

formCreateUser.addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value; // event.target.username
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    console.log('state', state)

    axios({
        // get: para obtener datos, post: insertar datos, put: actualizar datos, delete: eleminar datos.
        method: 'post', 
        url: '',
    }).then( response => {
        if(response.status === 200){
            //console.log('response', response);
            response.data.forEach(element => {
                console.log('element', element);
            });
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
                console.log('element', element);

                country_select.innerHTML += `<option value="${element.name.official}">${element.name.official}</option>`;
            });
        }
    }).catch( error => {
        console.log('error', error);
    });
}

getCountries();