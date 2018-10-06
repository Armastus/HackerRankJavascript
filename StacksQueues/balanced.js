function isBalanced(s) {
    let sArrLength = s.split('');
    let theStack = [];
    let balanced = "YES";

    for(let ii of sArrLength) {
        switch(ii) {
            case '{':
            case '[':
            case '(':
                theStack.push(ii);
                break;
            case '}':
                if (theStack === null || theStack.pop() !== '{')
                    balanced = "NO";
                break;
            case ']':
                if (theStack === null || theStack.pop() !== '[')
                    balanced = "NO";
                break;
            case ')':
                if (theStack === null || theStack.pop() !== '(')
                    balanced = "NO";
                break;
        }
    }

    if(theStack === null) {
        balanced = "NO";
    }
    console.log(balanced);
}

isBalanced("{{[[(())]]}}");
isBalanced("{[(])}");
isBalanced("({(){}[]})[]");


// console.log(balancedBrackets("{[(])}"));