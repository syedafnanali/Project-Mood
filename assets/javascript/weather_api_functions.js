var queryurlweather = "https://api.openweathermap.org/data/2.5/weather?q="
var apiKeyweather = "########################33333"
console.log(queryurlweather + "chicago" + "&apikey=" + apiKeyweather)

$('#submitBtn').click(function () {

    $('#weather').hide();
    $('.vids').css('opacity', 0.7);
    queryurlweather = "https://api.openweathermap.org/data/2.5/weather?q="

    if (parseInt($('#city').val())) {
        queryurlweather = queryurlweather.replace('q', 'zip');
        queryurlweather += parseInt($('#city').val()) + "&apikey=" + apiKeyweather;

    } else {
        queryurlweather = "https://api.openweathermap.org/data/2.5/weather?q=";
        queryurlweather += $('#city').val() + "&apikey=" + apiKeyweather;
    }
    
    $(".vids").show(1500);

    $.ajax({
        url: queryurlweather,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.main.temp);
        console.log(response.weather[0].main + "+weather");

        var weather = ["Haze", "Clouds", "Sunny", "Snow", "Clear", "Rain", "Mist", "Drizzle", "Fog", "Mist"];
        var gifs = {
            Clouds: ["./assets/images/cloudy1.gif", "./assets/images/cloudy2.gif", "./assets/images/cloudy3.gif", "./assets/images/cloudy4.gif", "./assets/images/cloudy5.gif"],
            Snow: ["./assets/images/snowy1.gif", "./assets/images/snowy2.gif", "./assets/images/snowy3.gif", "./assets/images/snowy4.gif", "./assets/images/snowy5"],
            Rain: ["./assets/images/rainy1.gif", "./assets/images/rainy2.gif", "./assets/images/rainy3.gif", "./assets/images/rainy4.gif", "./assets/images/rainy5.gif"],
            Sunny: ["./assets/images/sunny1.gif", "./assets/sunny2.gif", "./assets/images/sunny3.gif", "./assets/images/sunny4.gif", "./assets/images/sunny5.gif"],
            Fog: ["./assets/images/fog1.gif", "./assets/images/fog2gif", "./assets/images/fog3.gif", "./assets/images/fog4.gif", "./assets/images/fog5.gif"],
            Drizzle: ["./assets/images/drizzle1.gif", "./assets/images/drizzle2.gif", "./assets/images/drizzle3.gif", "./assets/images/drizzle4.gif", "./assets/images/drizzle5.gif"],
            Clear: ["./assets/images/clear1.gif", "./assets/images/clear2.gif", "./assets/images/clear3.gif", "./assets/images/clear4.gif", "./assets/images/clear4.gif"]
        };

        var random = Math.floor(Math.random() * 4);
        var temp = response.main.temp;
        var icon = response.weather[0].icon;
        var wthr = response.weather[0].main;
        var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";

        $("body").css('background', `url(${gifs[`${wthr}`][random]}) no-repeat center center`);
        $('body').css('background-size', "cover");
        $(".weatherDisplay").html(`<img id='iconImg' src=${iconUrl} alt='Icon depicting current weather.'>`);
        $(".weatherDisplay").append(`<p id='tempDisp'> ${temp} </p>`);
        $(".weatherDisplay").append(`<p id='tempDisp'> ${response.name} </p>`);
        $(".weatherDisplay").append(`<p id='tempDisp'> ${response.weather[0].main} </p>`);

    })
});

// });
