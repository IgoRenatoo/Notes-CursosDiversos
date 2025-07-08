/*
📝 Descrição - Exercício 3: Criar um Proxy que converte valores de string em maiúsculas.
*/

type Message = {
  title: string,
  content: string | null
}

const message: Message = {
  title: 'Proibido',
  content: null
}

const handler: ProxyHandler<Message> = {
  set(target: Message, key: keyof Message, newValue: string){
    if(key !== 'content'){
      console.log(`❌ Não é possível trocar o item '${key}' !!`)
      return true
    }
    target[key] = newValue.toUpperCase()
    return true
  }
}

const obj = new Proxy(message, handler)

obj.content = 'Proibido entrar na Piscina!'

console.log(obj)
