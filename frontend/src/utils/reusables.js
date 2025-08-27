export default function firstLetterCaps(word){
     return word.split(' ').map(w => w[0].slice(0,1).toUpperCase() + w[1].slice(1)).join('')
}