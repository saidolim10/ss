let names = prompt(`Ismingizni kriting`)

let word = prompt(`Bironta harf kriting`)


// alert(`${names} ismining ichida ${word} harfi ${names.includes(word)}`)

if (names.includes(word)) {
    alert(`${names} ismining ichida ${word} harfi mavjud`)
    
} else{
    alert(`${names} ismining ichida ${word} harfi mavjud emas`)
}
