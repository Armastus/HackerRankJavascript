var map = new Map;
// function harmlessRansomNote(noteText, magazineText) {
//     var noteArr = noteText.split(' ');
//     let magazineArr = magazineText.split(' ');
//     var magazineObj = {};
//
//     //Hashtables!!!!!!!!!!!!!!!!!!
//     magazineArr.forEach(word => {
//         if(!magazineObj[word]) {
//             magazineObj[word] = 0;
//         }
//         magazineObj[word]++;
//     });
//
//     var noteIsPossible = true;
//     noteArr.forEach(word => {
//         if(magazineObj[word]) {
//             magazineObj[word]--;
//             if(magazineObj[word] < 0) {
//                 noteIsPossible = false;
//             }
//         } else {
//             noteIsPossible = false;
//         }
//     });
//     return noteIsPossible;
// }

function sockMerchant(n, ar) {
    let sockPairs = 0;
    let sockObj = {};

    // for (const pairs of Object.keys(ar)) {
    //     if(!sockObj[pairs]) {
    //         sockObj[pairs] = 0;
    //     }
    //     sockObj[pairs]++;
    // }
    // console.log(sockObj);

    return sockPairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

console.log(sockMerchant());