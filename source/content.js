

const timeoutShowRandomJudgement = 400;
const timeoutRemoveBody = 200;
const judgementTexts = [
    "Please stop, it's making you lazy!",
    "You can do it on your own, believe me!",
    "I'd rather have you doing it ethically!",
    "Try another approach, it'll educate you better!",
    "If it'd actually be intelligent, at least..",
];


function showRandomJudgementAfterTimeout() {
    setTimeout(showRandomJudgement, timeoutShowRandomJudgement);
}

function removeBodyAfterTimeout() {
    setTimeout(removeBody, timeoutRemoveBody);
}


function showRandomJudgement() {
    const judgementIndex = Math.floor(randomRange(0, judgementTexts.length));
    alert(judgementTexts[judgementIndex]);
    removeBodyAfterTimeout();
}

function removeBody() {
    document.body.remove();
}


function randomRange(minInclusive, maxExclusive) {
    return Math.random() * ((maxExclusive - 1) - minInclusive) + minInclusive;
}


function main() {
    showRandomJudgementAfterTimeout();
}


main();

