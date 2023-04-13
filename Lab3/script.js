const inputCountry = document.querySelector('#country');
const inputCapital = document.querySelector('#capital');

inputCountry.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'countries.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.response);
            console.log(request.response);
            
            inputCapital.value = data.countries[inputCountry.value]; 
            
        }
    });
});