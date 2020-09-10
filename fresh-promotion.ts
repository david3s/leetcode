function freshPromotion(codeList: string[][], cart: string[]): number {
  let codeListI = 0
  let cartR = cart
  while(codeListI < codeList.length && cartR.length > 0) {
    const [result, cartR2] = findMatch(codeList[codeListI++], cartR)
    cartR = cartR2
    if (result === 0) return 0
  }
  if (codeListI < codeList.length) return 0
  return 1
}

function findMatch(code: string[], cart: string[]): [number, string[]] {
   let codeI = 0;
   let cartI = 0;
   while (codeI < code.length && cartI < cart.length) {
     if (code[codeI] === 'anything' || code[codeI] === cart[cartI]) {
      codeI = codeI + 1
     } else {
       codeI = 0
     }
    cartI = cartI + 1
   }
   if (codeI === code.length) return [1, cart.slice(cartI)]
   else return [0, cart.slice(codeI)]
}

console.log(
  freshPromotion(
    [['apple', 'apple'],['banana', 'orange', 'banana'], ['anything']],
    ['orange', 'apple', 'apple', 'banana', 'orange', 'banana', 'apple']
  )
)
