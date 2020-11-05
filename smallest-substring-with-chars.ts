console.log(findSmallest('abbcdefgbeffb', ['b', 'f']));

function findSmallest(inputString: string, includeChars: string[]): string | undefined {
    const charIndices: Record<string, number> = {};

    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i];
        if (includeChars.includes(currentChar)) {
            charIndices[currentChar] = i;
        }
        if (Object.keys(charIndices).length === includeChars.length) {
            const indicesArray = Object.values(charIndices);
            const result = inputString.slice(Math.min(...indicesArray), Math.max(...indicesArray) + 1);
            const result2 = findSmallest(inputString.slice(i), includeChars);
            if (!result2 || result.length < result2.length) return result;
            return result2
        }
    }
    return undefined;
}
