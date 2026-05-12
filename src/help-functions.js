export function capitalize(string) {
    const words = string.trim().toLowerCase().split(" ");
    const newString = words.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    console.log(newString.join(""));
    return newString.join(" ");
}

export function findNextHourIndex(hourArray) {
    const nextHourIndex = hourArray.findIndex(time => {
        const hour = new Date(time).getHours();
        const day = new Date(time).getDate();
        const currentDay = new Date().getDate();
        const currentHour = new Date().getHours();
        if (hour + 1 > currentHour && day === currentDay) {
            console.log(time);
            return true;
        }
    });
    return nextHourIndex;
}
