/*
📝 Descrição - Exercício 4: Criar um Proxy que armazena valores acessados em um cache.
*/

type User = {
  name: string,
  age: number,
  heath: number,
  defense: number
}

const user: User = {
  name: 'Athena Olympk',
  age: 21,
  heath: 72,
  defense: 84
}

const keyUser: (keyof User)[] = Object.keys(user) as (keyof User)[]
let cache: { key: keyof User; value: string | number }[] = []

// Criação do interceptador para armazenar no cache todos valores acessados.
const handler: ProxyHandler<User> = {
  get(target, key) {
    cache.push({key: key as keyof User, value: target[key as keyof User]})
  }
}

// Criação da proxy para interceptar interações com o objeto user.
const obj = new Proxy(user, handler)

for (let i = 0; i < 5; i++){
  const randomIndex = Math.floor(Math.random() * keyUser.length)
  const addKey = keyUser[randomIndex]
  obj[addKey]
}

console.log(cache)
