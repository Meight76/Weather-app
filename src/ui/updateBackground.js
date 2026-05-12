export default function updateBackgroundGradient(isDayProperty) {
    if (!isDayProperty) {
        document.body.style.background = `linear-gradient(to bottom,
        #0f172a, #1e293b, #334155)`;
    } else {
        document.body.style.background = `linear-gradient(#60a5fa, #fde68a)`;
    }
}
