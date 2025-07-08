/*
📝 Descrição - Exercício 1: Criar um Proxy que exibe um log ao acessar propriedades.
*/

type User = {
  name: string,
  age: number,
  strong: number,
  defense: number,
  voice: () => string
}

const user: User = {
  name: 'Ryu Kusanagi',
  age: 38,
  strong: 112,
  defense: 62,
  voice: () => 'Eu não perderei essa batalha!'
}

// Criação do interceptador para exibir mensagem de qual propriedade foi acessada e retornar seu valor.
const handler: ProxyHandler<User> = {
  get(target: User, key: keyof User){
    console.log(`Acessando a Prop: ${key}`)
    if(typeof target[key] === 'function'){
      return target[key]()
    }
    return target[key]
  }
}

// Criação da proxy para interceptar interações com o objeto user.
const obj = new Proxy(user, handler)

console.log(obj.name)
