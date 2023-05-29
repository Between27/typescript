function reverseWords(str: string): string {
    let tab = str.split(' ')

    for (let i=0; i<tab.length;i++){
        let text : string
            text = tab[i].toString()
            let inverse = text.split('').reverse().join('')
            tab[i] = inverse
        }
    return tab.join(' ');

}
function di() {
    let a = 'je veux tester cela'

    let tabl = a.split(' ')
    let result = ''
    for (let c of tabl ) {
        let mot = c.split('')
        let prem = mot[ 0 ]
        mot.push(prem)
        mot.shift()
        mot.push('ay')
        result += mot.join('') + " "
    }

}


