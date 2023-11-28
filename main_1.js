const readline = require('readline');

function randomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr.sort((a, b) => a - b);
}

function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);

        if (arr[m] === target) {
            return m;
        } else if (arr[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return -1;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Len?: ', (length) => {
    rl.question('Min val: ', (min) => {
        rl.question('Max val: ', (max) => {
            const arr = randomArray(parseInt(length), parseInt(min), parseInt(max));
            console.log('Generate arr:', arr);
            rl.question('Num: ', (target) => {
                const index = binarySearch(arr, parseInt(target));

                if (index !== -1) {
                    console.log(`Num ${target} find ${index}`);
                } else {
                    console.log(`Num ${target} doesnt find`);
                }

                rl.close();
            });
        });
    });
});