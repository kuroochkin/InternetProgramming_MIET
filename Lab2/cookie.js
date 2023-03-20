$(document).ready(function() {
  
    $('form').submit(function(event) {
      let textValue = $('#lang').val();
      let selectValue = $('#shirt-colors').val();
      let checkbox1Value = $('#languages1').prop('checked');
      let checkbox2Value = $('#languages2').prop('checked');
      let checkbox3Value = $('#languages3').prop('checked');
      let isValid = true;
  
  
      // Если форма не валидна, предотвратить отправку данных
      if (!isValid) {
        event.preventDefault();
      } else {
        event.preventDefault(); // отменяем стандартное действие отправки формы
        textValue = document.getElementById("lang").value;
        selectValue = document.getElementById("shirt-colors").value;
        checkbox1Value = document.getElementById("languages1").checked;
        checkbox2Value = document.getElementById("languages2").checked;
        checkbox3Value = document.getElementById("languages3").checked;
        setCookie("textValue", textValue, 365);
        setCookie("selectValue", selectValue, 365);
        setCookie("languages1", checkbox1Value, 365);
        setCookie("languages2", checkbox2Value, 365);
        setCookie("languages3", checkbox3Value, 365);
        alert("Values saved to cookies!");
      }
    });
  });

  // функция для установки куки
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // функция для получения значения куки по имени
  function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  
  
  // заполняем поля и чекбоксы сохраненными значениями при загрузке страницы
  window.onload = function() {
      let textValue = getCookie("textValue");
    if (textValue) {
      document.getElementById("lang").value = textValue;
    }
    let selectValue = getCookie("selectValue");
    if (selectValue) {
      document.getElementById("shirt-colors").value = selectValue;
    }
    let languages1 = getCookie("languages1");
    if (languages1) {
      document.getElementById("languages1").checked = languages1;
    }
    let languages2 = getCookie("languages2");
    if (languages2) {
      document.getElementById("languages2").checked = languages2;
    }
    let languages3 = getCookie("languages3");
    if (languages3) {
      document.getElementById("languages3").checked = languages3;
    }
  };

//   $(window).on('resize', function() {
//     let win = $(this);
    
//     if (win.width <= 480) {
//       $('#green').hide();
//       $('#pink').hide();
//     }
//   });

 
