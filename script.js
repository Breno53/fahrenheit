function converterParaFahrenheit() {
    let celsius = document.getElementById("celsius").value;

    if (celsius === "" || isNaN(celsius)) {
        document.getElementById("resultado").innerHTML = "⚠️ Digite um valor válido em Celsius.";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultado").innerHTML = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function converterParaCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;

    if (fahrenheit === "" || isNaN(fahrenheit)) {
        document.getElementById("resultado").innerHTML = "⚠️ Digite um valor válido em Fahrenheit.";
        return;
    }

    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultado").innerHTML = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}
