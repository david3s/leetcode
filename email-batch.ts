interface Message {
    address: string,
    content: string
}

function createOptimalBatch(messages: Message[]) {
    const tracker: Record<string, number> = {};

    const result: Message[][] = [];

    for (const message of messages) {
        const currentAddressIndex = tracker[message.address];
        if (isNaN(currentAddressIndex)) {
            tracker[message.address] = 0;
            addToResult(message, 0);
        } else {
            tracker[message.address] = currentAddressIndex + 1;
            addToResult(message, tracker[message.address]);
        }
    }

    function addToResult(message: Message, index: number) {
        if (result.length <= index) {
            result.push([]);
        }
        const resultArray = result[index];
        resultArray.push(message);
    }

    return result;
}

console.log(createOptimalBatch(
    [{
        address: 'ada@email.com',
        content: 'ada email content 1'
    },{
        address: 'bob@email.com',
        content: 'bob email content 1'
    },{
        address: 'ada@email.com',
        content: 'ada email content 2'
    }]
)

// try in https://www.typescriptlang.org/play)
