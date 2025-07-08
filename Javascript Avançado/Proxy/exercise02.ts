/*
📝 Descrição - Exercício 2: Criar um Proxy que impede a modificação de uma chave do objeto.
*/

type Product = {
  id: number,
  name: string,
  price: number,
  category: string
}

const product: Product = { 
  id: 1,
  name: 'Sabão',
  price: 4.99,
  category: 'Limpeza'
}

const handler: ProxyHandler<Product> = {
  set: (target: Product, key: keyof Product, newValue: never ) => {
    if(key === 'id'){      
      console.log('Não é possível alterar o ID do produto!')
      return true
    } else {
      target[key] = newValue
      return true
    }
  }
}

const obj = new Proxy(product, handler)

console.log('1', 'ID: ', obj.id, 'Nome: ', obj.name)
obj.name = 'Sabão em Pó'
console.log('2', 'ID: ', obj.id, 'Nome: ', obj.name) // Exibi a alteração do nome do produto.
obj.id = 2 // Ao tentar trocar o ID do produto, retorna um erro!
console.log('3', 'ID: ', obj.id, 'Nome: ', obj.name) 
