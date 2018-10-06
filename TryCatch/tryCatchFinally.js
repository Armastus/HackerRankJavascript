function reverseString(s) {
    /** best way for interview **/
    let temp = "";
    //
    // for (let ii = s.length - 1; ii >= 0; ii--) {
    //     temp += s[ii];
    // }
    //
    // console.log(temp);

    /** Javascript way **/
    try {
        temp = s.split("").reverse().join("");
    } catch (e){
        console.log(e.message + '\n' + s);
    } finally {
        console.log(temp);
    }
}

reverseString("1234");