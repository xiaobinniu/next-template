// @ts-nocheck
function findCombinations(target, start = 1, path = []) {
    if (target === 0) {
        return [path];
    }
    let result = [];
    for (let i = start; i <= target; i++) {
        const newPath = [...path, i];
        const sum = newPath.reduce((acc, num) => acc + num, 0);
        if (sum <= target) {
            const combinations = findCombinations(target, i + 1, newPath);
            result = result.concat(combinations);
        }
    }
    return result;
}

console.log(findCombinations(15));



