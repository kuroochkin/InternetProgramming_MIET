const countrySelect = document.getElementById('country');
const citySelect = document.getElementById('city');

countrySelect.addEventListener('change', function() {
    if (countrySelect.value == '') {
        citySelect.innerHTML = '<option value=""> Выберите город </option>';
        return;
    }

    const request = new XMLHttpRequest();
    request.open('GET', 'countries.json'); 
    request.onload = function() {
        if (request.status == 200) {
            const cities = JSON.parse(request.responseText)[countrySelect.value];
            let options = '<option value=""> Выберите город </option>';
            cities.forEach(function(city) {
                options += `<option value="${city}">${city}</option>`;
            });
            citySelect.innerHTML = options; 
        }
    };
    request.send();
});