
const api = {
  endpoint:  "https://api.openweathermap.org/data/2.5/",
  key: "5aba262d0a344571d86332b66e88ec9f"
}


const input = document.querySelector("#input"); // доступ к полю ввода
input.addEventListener("keypress", enter); // подслушка и запуск функции

function enter(e) {
  if (e.key === "Enter") { // если событие нажатие enter (13 это код клавиши)
    getInfo(input.value); //вызываем функцию поиск когда есть доступ к тому, что пишет пользователь
  }
}

async function getInfo (data) { // параметр data нужен для сохранения и переноса информации
const res = await fetch(`${api.endpoint}weather?q=${data}&lang=ru&units=metric&appID=${api.key}`); // результат это запрос на сторонний сервер и данным который ввел пользователь система , мы выбираем метрическую и ключ. все это копируется заучивать не надо
const result = await res.json();
console.log(result);
displayResult(result); // функция показать результат в нашем приложении
}



function displayResult(result) { // описание ф-ции
    let city = document.querySelector("#city"); // переменная сити с доступом в графу в html
    city.textContent = `${result.name}`; // отобразить город ( если нужно и страну, то через запятую: ${result.sys.country} )
    city.style = "display:block";
    
    getOurDate(); // вызов функции получить Дату
    

    let temperature = document.querySelector("#temperature"); // доступ к температуре
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`; // отобразить температуру (смотрим в console.log в общем результате как эти поля называются в этом приложении по тому же принципу что и изображение и советы)

    let feelsLike = document.querySelector("#feelsLike"); // доступ к температу по ощущениям
    feelsLike.innerHTML = "ощущается как: " + `${Math.round(result.main.feels_like)}<span>°</span>`; // отобразить тем-ру по ощущениям
    
    let conditions = document.querySelector("#conditions"); // доступ к графе состояние
    conditions.textContent = `${result.weather[0].description}`; // отобразить , это например, ясно, облачно и тд

    let humidity = document.querySelector('#humidity'); //доступ к графе влажность
    humidity.innerHTML = "Влажность: " + `${result.main.humidity}<span> %</span>`;

    let wind = document.querySelector('#wind'); //доступ к графе ветер
    wind.innerHTML = "Ветер: " + `${Math.round(result.wind.speed)}<span> м/с</span>`;

    let pressure = document.querySelector('#pressure'); // доступ к графе давление
    pressure.innerHTML = "Давление: " +`${Math.round((result.main.pressure)*0.750064)}<span> мм. рт. ст. </span>`; // получение данных о давлении, перевод из гектопаскалей в мм рт ст и вывод результата пользователю
    
/*
// обычная иконка
    let myIcon = document.querySelector('.weather-icon'); // доступ к иконке
    myIcon.innerHTML = `<img src="icons_weather/${result.weather[0].icon}.png"/>`; // отображение своей иконки
*/


    let variation = document.querySelector("#variation"); // доступ к минимальной и максимальной температуре
    variation.innerHTML = `${Math.round(result.main.temp_max)}<span>°</span>` + " " + "/" + " " + `${Math.round(result.main.temp_min)}<span>°</span>`; // отображение, значок градуса(это тег, поэтому innerHTML) добавляем сами и округление
    

    getIcon();
    // getIcon(condition);
}


function getOurDate() { // описание функции получить Дату
    const myDate = new Date(); // в константе указываем сегодняшнюю дату
    const days = ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."]; // константа массив с днями, пример взяли готовой конструкции JS с сайта https://www.w3schools.com/
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]; // константа массив с месяцами
  
    let day = days[myDate.getDay()]; // получаем текущий день недели из массива

    let todayDate = myDate.getDate(); // получаем текущее число

    let month = months[myDate.getMonth()]; // получаем текущий месяц из массива

    let year = myDate.getFullYear(); // готовый метод взяли с сайта https://www.w3schools.com/

    let showDate = document.querySelector("#date"); // показать дату доступ к дате в html
    showDate.textContent = `${day}` + "," + " " + `${todayDate}` + " " + `${month}` + " " + `${year}` //показываем дату пользователю

    
}

function getIcon(condition) {

    let weatherIcon = document.querySelector('.weather-icon');
    let conditionsIcon = `https://openweathermap.org/img/wn/${condition}@2x.png`;

    if(conditionsIcon === "https://openweathermap.org/img/wn/01d@2x.png"){
        weatherIcon.src = `icons_animated/01d.svg`;
    }

    if (conditionsIcon === "https://openweathermap.org/img/wn/01n@2x.png"){
        weatherIcon.src = `icons_animated/01n.svg`;
    }

    if(conditionsIcon === "https://openweathermap.org/img/wn/02d@2x.png"){
        weatherIcon.src = `icons_animated/02d.svg`;
    }

    if (conditionsIcon === "https://openweathermap.org/img/wn/02n@2x.png"){
        weatherIcon.src = `icons_animated/02n.svg`;
    }

    if (conditionsIcon === "03d"){
        weatherIcon.src = `icons_animated/03d.svg`;
    }

    if (conditionsIcon === "03n"){
        weatherIcon.src = `icons_animated/03n.svg`;
    }

    if (conditionsIcon === "04d"){
        weatherIcon.src = `icons_animated/04d.svg`;
    }

    if (conditionsIcon === "https://openweathermap.org/img/wn/04n@2x.png"){
        weatherIcon.src = `icons_animated/04n.svg`;
    }

    if (conditionsIcon === "09d"){
        weatherIcon.src = `icons_animated/09d.svg`;
    }

    if (conditionsIcon === "09n"){
        weatherIcon.src = `icons_animated/09n.svg`;
    }

    if (conditionsIcon === "10d"){
        weatherIcon.src = `icons_animated/10d.svg`;
    }

    if (conditionsIcon === "10n.png"){
        weatherIcon.src = `icons_animated/10n.svg`;
    }

    if (conditionsIcon === "11d"){
        weatherIcon.src = `icons_animated/11d.svg`;
    }

    if (conditionsIcon === "11n"){
        weatherIcon.src = `icons_animated/11n.svg`;
    }

    if (conditionsIcon === "13d"){
        weatherIcon.src = `icons_animated/13d.svg`;
    }

    if (conditionsIcon === "13n"){
        weatherIcon.src = `icons_animated/13n.svg`;
    }

    if (conditionsIcon === "50d"){
        weatherIcon.src = `icons_animated/50d.svg`;
    }

    if (conditionsIcon === "50n"){
        weatherIcon.src = `icons_animated/50n.svg`;
    }


    
    
}









