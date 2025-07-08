# 🔹 **Decorators em JavaScript: Guia Completo**
Os **decorators** são uma funcionalidade avançada do JavaScript usada para modificar o comportamento de classes, métodos, propriedades e parâmetros. Eles são inspirados em outras linguagens, como Python e TypeScript, e permitem um desenvolvimento mais modular e reutilizável.  

## 🔹 **1. Sintaxe e Funcionamento**
Os decorators são funções que recebem um **alvo** (classe, método, propriedade, etc.) e podem modificar seu comportamento. Eles são usados com o caractere `@` antes do nome da função decorator.  

### 🛠 **Exemplo de Uso**

```ts
function LogarClasse(construtor: Function) {
  console.log(`Classe criada: ${construtor.name}`);
}

@LogarClasse
class Produto {
  constructor(public nome: string, public preco: number) {}
}
```
📌 **Explicação**:
- O decorator `LogarClasse` recebe a classe `Produto` e imprime o nome da classe no console sempre que for definida.

### 🔹 **Tipos de Decorators**
1️. **Decorators de Classe**  
Aplica-se diretamente sobre uma classe.  

```ts
function Congelar(construtor: Function) {
  Object.freeze(construtor);
  Object.freeze(construtor.prototype);
}

@Congelar
class ContaBancaria {}
```

2️. **Decorators de Método**  
Modifica o comportamento de um método específico.  

```ts
function LogarExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Executando: ${propertyKey} com argumentos ${args}`);
    return metodoOriginal.apply(this, args);
  };
  return descriptor;
}

class Calculadora {
  @LogarExecucao
  somar(a: number, b: number) {
    return a + b;
  }
}
```

3️. **Decorators de Propriedade**  
Aplica-se diretamente sobre uma propriedade de uma classe.  

```ts
function Imutavel(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class Configuracao {
  @Imutavel
  tema = "claro";
}
```

4️. **Decorators de Parâmetro**  
Modifica como um parâmetro de um método é tratado.  

```ts
function ParamLog(target: any, methodName: string, paramIndex: number) {
  console.log(`O parâmetro de índice ${paramIndex} do método ${methodName} foi decorado!`);
}

class Servico {
  executar(@ParamLog usuario: string) {
    console.log(`Executando serviço para ${usuario}`);
  }
}
```

## 🔹 **2. Cenários de Uso**  
Os decorators são úteis para:  

✅ **Registro e Logging**  
Registra chamadas de métodos ou instâncias de classes.  

✅ **Validação de Dados**  
Verifica se os parâmetros de um método seguem regras específicas.  

✅ **Controle de Acesso**  
Restringe o acesso a métodos baseando-se em permissões.  

✅ **Modificação de Propriedades**  
Torna propriedades imutáveis ou preenche valores automaticamente.  

✅ **Inversão de Controle (IoC) e Injeção de Dependências**  
Facilitam a criação de frameworks que gerenciam objetos dinamicamente.  

## 🔹 **3. Alternativas para Substituir Decorators**  
Caso os decorators não sejam suportados, pode-se usar:  

🔹 **Funções Factory**  
Criam objetos pré-configurados para modificar comportamentos.  

```js
function CriarClasseBase() {
  return class {
    log() {
      console.log("Classe Base");
    }
  };
}

const MinhaClasse = CriarClasseBase();
const obj = new MinhaClasse();
obj.log();
```

🔹 **Herança de Classe**  
Extende comportamentos sem modificar a classe original.  

```js
class Base {
  log() {
    console.log("Executando...");
  }
}

class SubClasse extends Base {
  log() {
    console.log("Log personalizado antes");
    super.log();
  }
}
```

🔹 **Proxy**  
Intercepta chamadas a métodos e altera sua execução.  

```js
const obj = {
  nome: "Produto",
  preco: 100
};

const proxy = new Proxy(obj, {
  get(target, prop) {
    console.log(`Acessando propriedade ${prop}`);
    return target[prop];
  }
});

console.log(proxy.nome);
```

## 🔹 **4. Prós e Contras**  
✅ **Prós**  
✔️ Código mais modular e reutilizável  
✔️ Facilita a aplicação de padrões como **AOP (Aspect-Oriented Programming)**  
✔️ Reduz código repetitivo  

❌ **Contras**  
⚠️ Não suportado nativamente em JS puro (precisa de TypeScript ou Babel)  
⚠️ Pode ser difícil de debugar  
⚠️ Maior complexidade na manutenção  

## 🔹 **5. Curva de Aprendizado**  
📌 **Fácil →** Entender a sintaxe básica e aplicar em métodos e propriedades.  
📌 **Intermediário →** Criar decorators dinâmicos e aplicar em projetos reais.  
📌 **Avançado →** Integrar decorators em frameworks e bibliotecas.  

## 🔹 **6. Roadmap para Aprender Decorators**  
1️⃣ Entender Funções de Alta Ordem em JavaScript
2️⃣ Estudar Proxies e Reflect API
3️⃣ Explorar Decorators em TypeScript
4️⃣ Criar Decorators Simples
5️⃣ Aplicar Decorators em Projetos Reais
6️⃣ Usar Decorators com Injeção de Dependências

## 🔹 **7. Exercícios para Praticar**  
### 🟢 **Iniciante**  
1. Criar um decorator que loga quando uma classe é instanciada.  
2. Criar um decorator que impede a modificação de uma propriedade.  
3. Criar um decorator que exibe os argumentos de um método chamado.  

### 🟡 **Intermediário**  
4. Criar um decorator para validar se um parâmetro de um método é do tipo correto.  
5. Criar um decorator para contar quantas vezes um método foi chamado.  
6. Criar um decorator que armazena os valores de retorno de um método (memoization).  

### 🔴 **Avançado**  
7. Criar um decorator que impede que um método seja chamado mais de uma vez por segundo.  
8. Criar um decorator para autenticação antes de executar um método.  
9. Criar um decorator que automaticamente converte strings de entrada em maiúsculas.
10. Criar um decorator que adiciona um cache a funções que fazem chamadas de API.  

## 🔹 **Conclusão**  

Decorators são um recurso poderoso para tornar o código mais modular e organizado, sendo amplamente usados em frameworks modernos como NestJS e Angular. Dominá-los exige uma base sólida em **funções, Proxies e Reflect API**, mas os benefícios fazem valer a pena! 🚀
