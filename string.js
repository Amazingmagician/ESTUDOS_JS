const escola = "Cod3r"

console.log(escola.charAt(4))//pega o 4 caractere

console.log(escola.charAt(5))//não dá erro

console.log(escola.charCodeAt(3))//pega o numero na tabela ascci
console.log(escola.indexOf('3'))//pega o valor 3
console.log(escola.substring(1))//vai do começo ate o final
console.log(escola.substring(0, 3))//do inical passando pelo meio é indo ate o final

console.log('escola '.concat(escola).concat("!"))//contatenar
console.log(escola.replace(3, 'e'))//substituir

console.log('ana,maria,joana'.split(','))//criar um array idependente
