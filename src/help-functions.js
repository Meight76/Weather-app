export function capitalize(string) {
    const words = string.trim().toLowerCase().split(" ");
    const newString = words.map(item => item.charAt(0).toUpperCase() + item.slice(1));
    console.log(newString.join(""));
    return newString.join(" ");
}
