# 🔹 **Proxy em JavaScript: Guia Completo**
O **Proxy** é uma API nativa do JavaScript que permite **interceptar e redefinir operações** em objetos, como leitura (`get`), escrita (`set`), deleção (`deleteProperty`), e muitas outras. Ele é útil para criar **validações, logs, caching dinâmico e programação reativa**.  

## 🔹 **1. Sintaxe e Funcionamento**
A sintaxe básica do `Proxy` envolve dois elementos principais:  

- **Target (Alvo)** → O objeto original que será "protegido" ou modificado.  
- **Handler (Manipulador)** → Um objeto com métodos que interceptam operações no `target`.  

```js
const handler = {
  get(target, prop) {
    console.log(`Acessando a propriedade: ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(`Modificando ${prop} para ${value}`);
    target[prop] = value;
    return true;
  }
};

const pessoa = new Proxy({ nome: "Igor", idade: 25 }, handler);

console.log(pessoa.nome); // Acessando a propriedade: nome
pessoa.idade = 30; // Modificando idade para 30
```

## 🔹 **2. Métodos do Handler**
A `Proxy API` permite interceptar várias operações com **traps** (métodos do handler).  

| Método | Intercepta |
|--------|------------|
| `get` | Acesso a propriedades (`obj.prop`) |
| `set` | Atribuição de valores (`obj.prop = valor`) |
| `has` | Operador `in` (`"prop" in obj`) |
| `deleteProperty` | Remoção de propriedades (`delete obj.prop`) |
| `apply` | Chamadas de função (`funcao()`) |
| `construct` | Instanciação com `new` (`new Classe()`) |
| `getPrototypeOf` | `Object.getPrototypeOf(obj)` |
| `setPrototypeOf` | `Object.setPrototypeOf(obj, proto)` |
| `isExtensible` | `Object.isExtensible(obj)` |
| `preventExtensions` | `Object.preventExtensions(obj)` |
| `defineProperty` | `Object.defineProperty(obj, prop, descriptor)` |
| `getOwnPropertyDescriptor` | `Object.getOwnPropertyDescriptor(obj, prop)` |
| `ownKeys` | `Object.keys(obj)`, `Object.getOwnPropertyNames(obj)` |

## 🔹 **Lista de Métodos (Traps) do Proxy**
### **1. get(target, prop, receiver)**
➡️ Intercepta o acesso a propriedades de um objeto.  
```js
const handler = {
  get(target, prop) {
    console.log(`Acessando ${prop}`);
    return target[prop];
  }
};

const obj = new Proxy({ nome: "Igor" }, handler);
console.log(obj.nome); // Acessando nome → Igor
```

### **2. set(target, prop, value, receiver)**
➡️ Intercepta a atribuição de valores a propriedades.  
```js
const handler = {
  set(target, prop, value) {
    console.log(`Alterando ${prop} para ${value}`);
    target[prop] = value;
    return true;
  }
};

const obj = new Proxy({}, handler);
obj.nome = "Lucas"; // Alterando nome para Lucas
```

### **3. has(target, prop)**
➡️ Intercepta o operador `in`.  
```js
const handler = {
  has(target, prop) {
    console.log(`Verificando existência de ${prop}`);
    return prop in target;
  }
};

const obj = new Proxy({ idade: 25 }, handler);
console.log("idade" in obj); // Verificando existência de idade → true
```

### **4. deleteProperty(target, prop)**
➡️ Intercepta a exclusão de propriedades (`delete`).  
```js
const handler = {
  deleteProperty(target, prop) {
    console.log(`Tentando deletar ${prop}`);
    return false; // Impede a exclusão
  }
};

const obj = new Proxy({ nome: "Ana" }, handler);
delete obj.nome; // Tentando deletar nome
console.log(obj.nome); // Ana (não foi deletado)
```

### **5. apply(target, thisArg, args)**
➡️ Intercepta chamadas de funções.  
```js
const somar = (a, b) => a + b;

const proxySomar = new Proxy(somar, {
  apply(target, thisArg, args) {
    console.log(`Chamando função com args: ${args}`);
    return target(...args);
  }
});

console.log(proxySomar(3, 5)); // Chamando função com args: 3,5 → 8
```

### **6. construct(target, args, newTarget)**
➡️ Intercepta a criação de instâncias com `new`.  
```js
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const proxyPessoa = new Proxy(Pessoa, {
  construct(target, args) {
    console.log(`Criando instância de Pessoa com args: ${args}`);
    return new target(...args);
  }
});

const usuario = new proxyPessoa("Carlos"); // Criando instância de Pessoa com args: Carlos
```

### **7. getPrototypeOf(target)**
➡️ Intercepta `Object.getPrototypeOf(obj)`.  
```js
const obj = {};
const proxy = new Proxy(obj, {
  getPrototypeOf(target) {
    console.log("Interceptando getPrototypeOf");
    return Object.getPrototypeOf(target);
  }
});

console.log(Object.getPrototypeOf(proxy)); // Interceptando getPrototypeOf
```

### **8. setPrototypeOf(target, prototype)**
➡️ Intercepta `Object.setPrototypeOf(obj, proto)`.  
```js
const handler = {
  setPrototypeOf(target, prototype) {
    console.log("Alterando protótipo");
    return true;
  }
};

const obj = new Proxy({}, handler);
Object.setPrototypeOf(obj, Array.prototype); // Alterando protótipo
```

### **9. isExtensible(target)**
➡️ Intercepta `Object.isExtensible(obj)`.  
```js
const obj = {};
const proxy = new Proxy(obj, {
  isExtensible(target) {
    console.log("Verificando se é extensível");
    return Object.isExtensible(target);
  }
});

console.log(Object.isExtensible(proxy)); // Verificando se é extensível → true
```

### **10. preventExtensions(target)**
➡️ Intercepta `Object.preventExtensions(obj)`.  
```js
const handler = {
  preventExtensions(target) {
    console.log("Impedindo extensões");
    return Object.preventExtensions(target);
  }
};

const obj = new Proxy({}, handler);
Object.preventExtensions(obj); // Impedindo extensões
```

### **11. defineProperty(target, prop, descriptor)**
➡️ Intercepta `Object.defineProperty(obj, prop, descriptor)`.  
```js
const handler = {
  defineProperty(target, prop, descriptor) {
    console.log(`Definindo propriedade ${prop}`);
    return Reflect.defineProperty(target, prop, descriptor);
  }
};

const obj = new Proxy({}, handler);
Object.defineProperty(obj, "nome", { value: "Mariana", writable: true }); // Definindo propriedade nome
```

### **12. getOwnPropertyDescriptor(target, prop)**
➡️ Intercepta `Object.getOwnPropertyDescriptor(obj, prop)`.  
```js
const handler = {
  getOwnPropertyDescriptor(target, prop) {
    console.log(`Obtendo descrição de ${prop}`);
    return Object.getOwnPropertyDescriptor(target, prop);
  }
};

const obj = new Proxy({ nome: "João" }, handler);
console.log(Object.getOwnPropertyDescriptor(obj, "nome")); // Obtendo descrição de nome
```

### **13. ownKeys(target)**
➡️ Intercepta `Object.keys(obj)`, `Object.getOwnPropertyNames(obj)`, `Object.getOwnPropertySymbols(obj)`.  
```js
const handler = {
  ownKeys(target) {
    console.log("Interceptando chaves");
    return Object.keys(target);
  }
};

const obj = new Proxy({ a: 1, b: 2 }, handler);
console.log(Object.keys(obj)); // Interceptando chaves → [ 'a', 'b' ]
```

## 🔹 **3. Cenários de Uso**
Os `Proxy` são úteis para:  

✅ **Validação de entrada** → Bloqueia valores inválidos antes de serem atribuídos.  
✅ **Registro de ações (Logging)** → Monitora acessos e alterações de propriedades.  
✅ **Cache automático** → Armazena resultados para evitar cálculos repetitivos.  
✅ **Programação reativa** → Útil para frameworks como Vue.js, onde mudanças nos dados reagem na UI.  
✅ **Proteção contra exclusão** → Impede a remoção acidental de propriedades.  

## 🔹 **4. Alternativas para Substituir Proxy**
Se `Proxy` não for uma opção, algumas alternativas são:  

🔹 **Object.defineProperty()** → Permite definir getters e setters para interceptar acessos e modificações.  

```js
const pessoa = {};
Object.defineProperty(pessoa, "nome", {
  get() {
    console.log("Acessando nome");
    return "Igor";
  },
  set(value) {
    console.log(`Alterando nome para ${value}`);
  }
});

pessoa.nome; // Acessando nome
pessoa.nome = "Lucas"; // Alterando nome para Lucas
```

🔹 **Herança de Classes** → Cria um comportamento modificado herdando de uma classe base.  

```js
class Usuario {
  set idade(value) {
    if (value < 0) throw new Error("Idade inválida!");
    this._idade = value;
  }
  get idade() {
    return this._idade;
  }
}

const user = new Usuario();
user.idade = -5; // Erro: Idade inválida!
```

🔹 **Funções Wrappers** → Encapsulam objetos e interceptam acessos manualmente.  

```js
function criarObjetoSeguro(obj) {
  return {
    get(prop) {
      console.log(`Acessando ${prop}`);
      return obj[prop];
    },
    set(prop, value) {
      console.log(`Alterando ${prop} para ${value}`);
      obj[prop] = value;
    }
  };
}

const seguro = criarObjetoSeguro({ nome: "Igor" });
seguro.get("nome"); // Acessando nome
seguro.set("nome", "Lucas"); // Alterando nome para Lucas
```

## 🔹 **5. Prós e Contras**  
✅ **Prós**  
✔️ Permite manipulação dinâmica de objetos.  
✔️ Substitui `Object.defineProperty()` de forma mais poderosa.  
✔️ Facilita o desenvolvimento de **frameworks reativos**.  

❌ **Contras**  
⚠️ Pode afetar a performance devido ao overhead de interceptação.  
⚠️ Não é suportado em versões antigas do JavaScript (ex: IE11).  
⚠️ Complexidade maior do que abordagens tradicionais.  

## 🔹 **6. Curva de Aprendizado**  
**Fácil →** Entender `get` e `set`.  
**Intermediário →** Aplicar `deleteProperty`, `apply` e `construct`.  
**Avançado →** Criar sistema dinâmico de interceptação.  

## 🔹 **7. Roadmap para Aprender Proxy**
1️. Dominar objetos e métodos nativos de manipulação (`Object.defineProperty`)  
2️. Explorar `get` e `set` do `Proxy`  
3️. Usar `deleteProperty` e `has`  
4️. Aplicar `apply` e `construct` para modificar funções e classes  
5️. Criar cache dinâmico e validações avançadas  
6️. Construir um sistema reativo com `Proxy`  

## 🔹 **8. Exercícios para Praticar**
### 🟢 **Iniciante**
1. Criar um `Proxy` que exibe um log ao acessar propriedades.  
2. Criar um `Proxy` que impede a modificação de um objeto.  
3. Criar um `Proxy` que converte valores de string em maiúsculas.  

### 🟡 **Intermediário** 
4. Criar um `Proxy` que armazena valores acessados em um cache.  

### 🔴 **Avançado**
5. Criar um `Proxy` que converte funções síncronas em assíncronas.  
6. Criar um `Proxy` para proteção de APIs, bloqueando acessos não autorizados.  
7. Criar um `Proxy` para monitorar chamadas de métodos.

## 🔹 **Conclusão**
O `Proxy` é um recurso avançado e poderoso do JavaScript, permitindo controle total sobre objetos e funções. Dominá-lo pode elevar a capacidade de criar sistemas dinâmicos, seguros e eficientes! 🚀
