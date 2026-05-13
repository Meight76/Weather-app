export default function updateBackground(isDayProperty) {
    const geralInfo = document.querySelector("#geral-infos");
    const nextHoursInfo = document.querySelector("#next-hours");

    geralInfo.classList.add("glass");
    nextHoursInfo.classList.add("filled");

    if (!isDayProperty) {
        document.body.style.background = `linear-gradient(to bottom,
        #0f172a, #1e293b, #334155)`;
    } else {
        document.body.style.background = `linear-gradient(#60a5fa, #fde68a)`;
    }
}
