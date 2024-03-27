// ========= SYNC FUNCTIONS =========
//first_function(); // 250 MB
//second_function(); // 1,250 MB
//endFunction(); // 75 MB

fetch("https://restcountries.com/v3.1/all")
    .then(response => {
        response.text();
    }).catch(err => {
        console.log('err', err)
    })

const response = await fetch("https://restcountries.com/v3.1/all");

if(response.status === 200){
    response.data.forEach(element => {
        country_select.innerHTML += `<option value="${element.name.official}">${element.name.official}</option>`;
    });
}


// ========== ASYNC FUNCTIONS ============
async function requestCoutries(){
    const response = await fetch("https://restcountries.com/v3.1/all", {method: 'get', headers: {}}); 

    if(response.status === 200){
        return response.data;
    }
}

const countries_all = await requestCoutries();

const countries_for_customers = await requestCoutries();


countries_all.forEach(element => {
    country_select.innerHTML += `<option value="${element.name.official}">${element.name.official}</option>`;
});


/* SIMPLE ASYNC FUNCTION */
async function getCustomers(){
    return await fetch("/customers")
        .then(response => response.text());
}

const customers = await getCustomers();


async function requestCoutries(){
    const response = await fetch("https://restcountries.com/v3.1/all", {method: 'get', headers: {}}); 

    if(response.status === 200){
        response.data.forEach(element => {
            country_select.innerHTML += `<option value="${element.name.official}">${element.name.official}</option>`;
        });
    }
}