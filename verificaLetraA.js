function countA(text){
    let count = 0
    let normalizeText = text.toLowerCase()

    for(let i = 0; i < normalizeText.length; i++){
        if(normalizeText[i] == 'a'){
            count++
        }
    }

    return count
}

const text = 'Se alguem lhe jogar uma pedra, mostre que você é diferente, jogue um tijolo.'
const count = countA(text)
if(count > 0) {
  console.log(`A letra 'a' aparece ${count} vezes nesse texto`)
} else {
  console.log(`A letra 'a' não aparece nesse texto`)
}

