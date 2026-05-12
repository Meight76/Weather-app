export function awaitingWeather() {
    const myLocationBtn = document.querySelector("#my-location-btn");
    const myLocationSpan = myLocationBtn.querySelector("span");
    myLocationBtn.classList.add("awaiting");
    myLocationBtn.setAttribute("disabled", "");
    myLocationSpan.textContent = "awaiting weather";
}

export function removeAwaitingWeather() {
    const myLocationBtn = document.querySelector("#my-location-btn");
    const myLocationSpan = myLocationBtn.querySelector("span");
    myLocationBtn.classList.remove("awaiting");
    myLocationBtn.classList.remove("error-btn");
    myLocationBtn.removeAttribute("disabled");
    myLocationSpan.textContent = "use my location";
}

export async function errorAwaitingWeather() {
    const myLocationBtn = document.querySelector("#my-location-btn");
    const myLocationSpan = myLocationBtn.querySelector("span");
    myLocationBtn.classList.remove("awaiting");
    myLocationBtn.classList.add("error-btn");
    myLocationBtn.setAttribute("disabled", "");
    console.log("handling");
    const copy = myLocationBtn.innerHTML;
    myLocationBtn.textContent = "ERROR";
    setTimeout(() => {
        myLocationBtn.innerHTML = copy;
        removeAwaitingWeather();
    }, 2500);

}
