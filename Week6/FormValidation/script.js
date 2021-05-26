let regularExpressionConstructor = new RegExp('abc');
console.log('the regular experession constructor is ', regularExpressionConstructor);

let newStr = "ajdsfjofivnafoihodusihofoinewaouihda;ofhanofna";
let newABCString = newStr.replace(regularExpressionConstructor, '123');
console.log('Our 123 string is ', newABCString);