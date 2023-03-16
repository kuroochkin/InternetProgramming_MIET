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