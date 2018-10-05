const map = new Map();

function sockMerchant(n, ar) {
    let counter = 1;
    let sockPair = 0;

    // map.set(counter, ar);
    // console.log(map.entries());
    for (let ii = 0; ii < n; ii++) {
        // console.log(ii);
        // console.log(ar[ii]);
        // map.set(counter, ar[ii]);
        // for (let value of ar) {
        // console.log(map.entries());
        // console.log(map.values().next().value);
        // console.log(ar[ii + 1]);
        if(!map.has(ar[ii])) {
            map.set(ar[ii], counter);
            // if(map.has(ar[ii]))
            // console.log(map.entries());
        } else if (map.has(ar[ii])) {
            map.set("",counter+=1);
            // if (map.values().next().value === 2) {
            //     counter = 1;
            //     // map.set(ar[ii], counter - 1);
            // //     // map.clear();
            // //     counter = 1;
            //     sockPair+=1;
            // } else {
            //     map.set(ar[ii], counter += 1);
            // }
        }
        console.log(map.entries());
            // if (map.values().next().value) {
            //     map.set(counter += 1, value);
            //     // console.log(map.keys().next().value);
            //     if (map.has(2)) {
            //         sockPair += 1;
            //         counter = 0;
            //         // console.log(map.keys());
            //         // console.log("I'm here");
            //     }
            // }
            // console.log(value);
        }
    return sockPair;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));