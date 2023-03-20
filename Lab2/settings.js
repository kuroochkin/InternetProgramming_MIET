$("#myForm").validate({
    rules: {
        language: {
            required: true,
        },
        cars:{
            required: true,
        }
    },
    messages:{
        language:{
            required: "Некорректный ввод"
        },
        cars:{
            required: "Сделайте выбор!",
        }
    }
});

function validateFirst() {
    var Reg = new RegExp("^[A-zА-яЁё]+$"); 
    var x = document.forms["Form"]["language"].value;
    if (!Reg.test(x)) 
    {
        alert("Необходимо ввести имя на русском языке или на латыни");
        document.forms["Form"]["language"].value = "";
        return false;
    }
}

function validateSecond()
{
    if(document.getElementById("shirt-colors").value == "")
    {   
        alert("Выберите что-то");
        document.getElementById("shirt-colors").value = "red";
        return false;
    }
}

function validateThird()
{
    if (!document.getElementById("languages1").checked || !document.getElementById("languages3").checked)
    {
        alert("Пункт 1 и 3 должны быть выбраны!");
        document.getElementById("languages1").checked = true;
        document.getElementById("languages3").checked = true;

        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function(){
	var item = localStorage.getItem('shirt-colors');
	var select = document.getElementById("shirt-colors");
	select.value = item;
});
function submitForm(){
	var select = document.getElementById("shirt-colors");
	var value = select.options[select.selectedIndex].value;
	localStorage.setItem('shirt-colors', value);
}

    
    


