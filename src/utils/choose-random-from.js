export default function chooseRandomFrom(items) {
    return items[Math.floor(Math.random()*items.length)];
}