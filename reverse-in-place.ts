function reverse(chars: string[]) {
  for(let i = 0; i < chars.length/2; i++) {
    const currentChar = chars[i];
    chars[i] = chars[chars.length - i - 1];
    chars[chars.length - i - 1] = currentChar;
  }
}

const charArray = ['a','b','c','d','e'];
console.log(charArray);
reverse(charArray);
console.log(charArray);
