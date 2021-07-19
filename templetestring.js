const nome = "rebeca"
const concatenaçao = 'olá ' + nome + '!'
//no templete string eu posso quebrar linha
const template = `
 olá
 ${nome}!`
console.log(concatenaçao, template)

//expressões..
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`ei...${up('cuidado')}!`)