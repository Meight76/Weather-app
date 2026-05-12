export default function measureBtnListen() {
    const measureBtn = document.querySelector("#measure-btn");

    measureBtn.addEventListener("click", (e) => {
        e.currentTarget.value = e.currentTarget.value === "celsius" ? "fahrenheit" : "celsius";
        measureBtn.querySelector("span").textContent = e.currentTarget.value;
    });
}
