function mapExample() {
    const blah = {'a': 1, 'b': 2, 'c' : 3};

    for(const [key, value] of Object.entries(blah)) {
        console.log(key, value);
    }
    return blah;
}

console.log(mapExample());