function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Animal.prototype.fazerSom = function() {
    throw new Error('O método fazerSom deve ser implementado nas subclasses');
}

function Cachorro(nome, idade) {
    Animal.call(this, nome, idade);
}

Cachorro.prototype = Object.create(Animal.prototype);

Cachorro.prototype.fazerSom = function() {
    return "Au Au!";
}


function Gato(nome, idade) {
    Animal.call(this, nome, idade);
}

Gato.prototype = Object.create(Animal.prototype);

Gato.prototype.fazerSom = function() {
    return "Miau!";
}

const animal1 = new Cachorro("Rex", 3);
const animal2 = new Gato("Whiskers", 5);
const animal3 = new Cachorro("Buddy", 2);

// Acessando atributos e métodos das instâncias
console.log(`${animal1.nome} tem ${animal1.idade} anos e faz: ${animal1.fazerSom()}`);
console.log(`${animal2.nome} tem ${animal2.idade} anos e faz: ${animal2.fazerSom()}`);
console.log(`${animal3.nome} tem ${animal3.idade} anos e faz: ${animal3.fazerSom()}`);
