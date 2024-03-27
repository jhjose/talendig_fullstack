const file1 = fetch('https://restcountries.com/v3.1/all');
const file2 = fetch('https://restcountries.com/v3.1/all');

const promises = [file1, file2];

async function res(){
    const response = promises.map(async promise => {
        promise.then(res => {
            console.log('res', res)
        })
        return await promise;
    })

    return response;
}

res();
