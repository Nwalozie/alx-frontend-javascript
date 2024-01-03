export default function returnHowManyArguments(...args) {
    let length = 0;
    let arg;
    for (arg of args) length += 1;
    return length;
}