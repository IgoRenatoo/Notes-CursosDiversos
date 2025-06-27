# 🎓 Curso Microsoft Project - Rubens do Carmo

## 🚀 Atalhos Essenciais

Aqui estão alguns atalhos úteis para agilizar o trabalho no Microsoft Project:

- **`ALT + F + T`**: Abre o menu de configurações do Project.
- **`ALT + SHIFT + 1`**: Recolhe toda a seleção de tarefas.
- **`SHIFT + SPACE`**: Seleciona a linha inteira.

## 🛠️ Campos Personalizados

### Quantidade de dias corridos

Para calcular a quantidade de dias corridos entre o início e o término de uma tarefa, use a seguinte fórmula:

```
  DateDiff("d";[Início];[Término])
```

## 🤖 Macros Úteis

As macros abaixo podem automatizar algumas ações no seu projeto:

- DisplayTask - Exibir / Recolher tarefas
  ```vba
    Sub RecolherTudo()
        OutlineShowAllTasks
        OutlineHideSubTasks
    End Sub
  ```
- TimeScale - Configuração da Escala de tempo
  ```vba
    Sub TimeScale()
      TimescaleEdit MajorUnits:=4, MinorUnits:=4, MajorLabel:=19,
      MinorLabel:=21, MajorAlign:=1, MinorAlign:=1, MajorCount:=1,
      MinorCount:=1, MinorTicks:=True, Enlarge:=120, Separator:=True,
      TopUnits:=2, TopLabel:=7, TopAlign:=0, TopCount:=1, TierCount:=3
    End Sub
  ```
- DisplayDetails - Exibir detalhes da task
  ```vba
    Sub Detalhes()
      ToggleTaskDetails
    End Sub
  ```
- DisplayResourceGraphic - Exibir gráfico de recursos
  ```vba
    Sub DisplayResourceGraphic()
        WindowActivate TopPane:=False
        ViewApplyEx Name:="Gráf&ico de Recursos", ApplyTo:=1
    End Sub
  ```

## 🗓️ Sumário Detalhado do Curso

| AULA | SEÇÃO | CONTEÚDO                                           | OBSERVAÇÕES                                                 |
| ---- | ----- | -------------------------------------------------- | ----------------------------------------------------------- |
| 05   | 01    | Configurações do projeto.                          |                                                             |
| 06   | 02    | Configurações Escala de tempo, coluna, grade.      |                                                             |
| 08   | 02    | Configurações Calendário.                          | Recesso (folga), Feriados, meio expediente.                 |
| 09   | 02    | Identificar Entregas (WBS), Listar Atividades.     | Formulação da Estrutura Analítica do Projeto.               |
| 12   | 03    | Configuração de calendário padrão                  | Arquivo ~> Opções ~> Cronograma.                            |
| 13   | 03    | Tipos de Relacionamentos                           |                                                             |
| 16   | 03    | Restrição x Data limite                            | inTask ~> Avançado.                                         |
| 18   | 03    | Tarefas Periódicas                                 | Tarefa ~> Tarefa ~> Periódica.                              |
| 23   | 04    | Fórmula de trabalho                                |                                                             |
| 24   | 04    | Tipos de Tarefas                                   | Duração fixa x trabalho fixo x unidades fixas.              |
| 25   | 04    | Adição de recursos nas tarefas                     | Tarefa ~> Display ~> Uso da Tarefa.                         |
| 27   | 04    | Contorno de Trabalho                               | Distribuição ao longo da execução.                          |
| 32   | 04    | Fast Tracking                                      | Antecipação de tarefas sem comprometer cronograma.          |
| 34   | 04    | Salvar Linha de base                               | Projeto ~> Definir linha de base.                           |
| 35   | 04    | Referência Hammock                                 | CTRL C+V especial para seguir parâmetro de referência.      |
| 37   | 05    | Criação de Tabela Personalizada                    | Modos de exibição da tabela criada.                         |
| 38   | 06    | Data Status                                        | Data da medição do cronograma.                              |
| 39   | 06    | Configuração de Aba de comandos                    | Reagendar trabalho / Sempre atualizar custo após conclusão. |
| 41   | 06    | Fórmula das Análise de valor agregado              |                                                             |
| 44   | 06    | Campos Personalizados                              | Campos, Tipos, Atributos, Exibição.                         |
| 47   | 06    | Correção das Fórmulas da Análise de valor agregado |                                                             |
| 48   | 06    | Planilha de Gerenciamento de Risco                 |                                                             |
| 49   | 06    | Criação de Filtros Personalizados                  |                                                             |
|      |       |                                                    |                                                             |
|      |       |                                                    |                                                             |
|      |       |                                                    |                                                             |
|      |       |                                                    |                                                             |

## 📝 Anotações por Seção

### Seção 1

Esta seção aborda as configurações iniciais do projeto.

### Seção 2

- **Aula 03**: Para alterar o período de trabalho, navegue em Project ~> Alterar Período de Trabalho.
- **Aula 06**: Entenda como configurar a escala de tempo para uma visualização otimizada.

### Seção 3

- **Aula 04**: **Tipos de Relacionamentos entre Tarefas**:
  - **TI - Término a Início**: A tarefa sucessora começa após o término da predecessora.
  - **II - Início a Início**: A tarefa sucessora começa quando a predecessora começa.
  - **TT - Término a Término**: A tarefa sucessora termina quando a predecessora termina.
  - **IT - Início a Término**: A tarefa sucessora termina quando a predecessora começa.

### Seção 4

- **Aula 23**: 🧮 **Fórmula para o cálculo do trabalho**:

  - TRABALHO = DURAÇÃO × UNIDADE × HORAS/DIA

- **Aula 24**: **Tipos de Tarefas**:

  - Se a tarefa tem um tempo definido: use **Duração Fixa**.
  - Se o esforço para a tarefa é constante: use **Trabalho Fixo**.
  - Se a quantidade de recursos é a prioridade: use **Unidades Fixas** (padrão).

- **Aula 25**: **Atribuição de Recursos**:

  - Recursos do tipo orçamento só podem ser atribuídos à tarefa-mãe do projeto.

- **Aula 27**: **Tipos de Contorno de Trabalho**:

  | Nome do Contorno      | Descrição                                                               |
  | --------------------- | ----------------------------------------------------------------------- |
  | **Plano**             | Distribui o trabalho de forma igual todos os dias.                      |
  | **Início Rápido**     | Começa com muito trabalho e vai diminuindo.                             |
  | **Fim Rápido**        | Começa leve e o trabalho vai aumentando até o fim.                      |
  | **Pico Central**      | Pouco trabalho no início e no fim, com mais trabalho no meio da tarefa. |
  | **Pico Final**        | Começa com pouco e o maior esforço é no final.                          |
  | **Pico Inicial**      | Muito trabalho no início e vai diminuindo ao longo dos dias.            |
  | **Subida**            | O esforço aumenta dia após dia (ex: 1h, depois 2h, depois 3h...).       |
  | **Descida**           | Começa com bastante esforço e vai diminuindo gradualmente.              |
  | **Manual (Contorno)** | Você define manualmente quantas horas por dia o recurso irá trabalhar.  |

### Seção 5

- **Aula 37**: **Criação de Tabela e Exibição Personalizada (Análise de Valor Agregado - EVM)**:

  | Nº  | Nome do Campo         | Nome Sugerido na Planilha                 |
  | --- | --------------------- | ----------------------------------------- |
  | 1   | Id                    |                                           |
  | 2   | Nome                  | Nome da Tarefa                            |
  | 3   | COTA                  | Valor Plan. (BCWS)                        |
  | 4   | Trabalho Real         |                                           |
  | 5   | Trabalho restante     | Trab. Rest.                               |
  | 6   | % Concluída           | % Concl.                                  |
  | 7   | % Física concluída    | % Física                                  |
  | 8   | COTE                  | Valor Agreg. (BCWP)                       |
  | 9   | Custo Real            | Custo Real (ACWP)                         |
  | 10  | IDC                   | Índice de Desempenho de Custo (CPI)       |
  | 11  | IDA                   | Índice de Desempenho de Prazo (SPI)       |
  | 12  | IDAC                  | Índice de Desempenho para Terminar (TCPI) |
  | 13  | EAT: Est. Final (EAC) | Estimativa ao Término (EAC)               |

### Seção 6

- **Aula 39**: **Configuração de Aba de Comandos**:

  - Vá em Arquivo ~> Opções ~> Personalizar Faixa de Opções. No grupo 'Tarefas', crie um novo grupo chamado 'Outros' e adicione 'Reagendar trabalho'.

- **Aulas 41 a 47**: **Fórmulas de Análise de Valor Agregado**:

  | Sigla    | Nome Completo                   | Tradução / Descrição |
  | -------- | ------------------------------- | -------------------- |
  | **BCWS** | Budgeted Cost of Work Scheduled | Valor Planejado      |
  | **BCWP** | Budgeted Cost of Work Performed | Valor Agregado       |
  | **ACWP** | Actual Cost of Work Performed   | Custo Real           |
  | **BAC**  | Budget at Completion            | Orçamento no Término |

  📌 **Indicadores:**

  - `CPI = Valor Agregado(BCWP) ÷ Custo Atual(ACWP)` - Mostra se o projeto está **dentro do orçamento**
  - `SPI = Valor Agregado(BCWP) ÷ Valor Planejado(BCWS)` - Mostra se o projeto está **adiantado ou atrasado**
  - `ETC = Valor Planejado Total(BAC) - Valor Agregado(BCWP)` - Estimativa do quanto falta para **entregar o projeto**
  - `EAC = Custo Atual(ACWP) +  Estimativa para Completar(ETC) ÷ Índice de desempenho de custo(CPI)` - Estimativa de como **irá terminar o projeto**
  <!-- O que foi gasto + (O que falta agregar ÷ índice de desempenhho de custo) -->
  - `TCPI = Estimativa para completar(ETC) ÷ (Valor Planejado Total(BAC) - Custo Atual(ACWP))` - Projeção de como **irá terminar o projeto**

  **Definição dos Campos Personalizados com Fórmulas:**

  - **Campo: BCWS da Tarefa**

    - **Tipo**: Custo
    - **Cálculo de Tarefas Resumo**: Soma
    - **Fórmula**:
      ```vb
        IIf(Not [Ativo] Or [Término da Linha de Base] = ProjDateValue("ND") Or [Data de Status] = ProjDateValue("ND") Or
        [Data de Status] < [Início da Linha de Base];
          0;
          IIf([Data de Status] > [Término da Linha de Base] Or [% Concluída] = 100;
            1;
            IIf([Marco] = True And [Término da Linha de Base] = [Data de Status];
              1;
              ProjDateDiff([Início da Linha de Base]; [Data de Status]) / [Duração da Linha de Base]
            )
          )
        ) * [Custo da Linha de Base]
      ```

  - **Campo: CPI da Tarefa**

    - **Tipo**: Número
    - **Cálculo de Tarefas Resumo**: Usar Fórmula
    - **Fórmula**:
      ```vb
        IIf([COTE] = 0 Or [Custo Real] = 0; 0; [COTE] / [Custo Real])
      ```

  - **Campo: SPI da Tarefa**

    - **Tipo**: Número
    - **Cálculo de Tarefas Resumo**: Usar Fórmula
    - **Fórmula**:
      ```vb
        IIf([BCWS da Tarefa] = 0; 0; [COTE] / [BCWS da Tarefa])
      ```

  - **Campo: TCPI da Tarefa**

    - **Tipo**: Número
    - **Cálculo de Tarefas Resumo**: Usar Fórmula
    - **Fórmula**:
      ```vb
        IIf([Custo da Linha de Base] = 0 Or [COTE] = 0;
          0;
          IIf([Custo da Linha de Base] - [COTE] >= 0 And [Custo da Linha de Base] - [Custo Real] = 0;
            1;
            IIf([Custo da Linha de Base] - [COTE] = 0 And [Custo da Linha de Base] - [Custo Real] <> 0;
              0;
              ([Custo da Linha de Base] - [COTE]) / ([Custo da Linha de Base] - [Custo Real])
            )
          )
        )
      ```

  - **Campo: EAC da Tarefa**

    - **Tipo**: Custo
    - **Cálculo de Tarefas Resumo**: Usar Fórmula
    - **Fórmula**:
      ```vb
        IIf([Custo da Linha de Base] = 0 Or [Custo Real] = 0;
          0;
          IIf([COTE] = 0 And [Custo Real] > 0 Or [COTE] = 0 And [Custo Real] = 0;
            [Custo Real];
            [Custo Real] + (([Custo da Linha de Base] - [COTE]) / ([COTE] / [Custo Real]))
          )
        )
      ```

- **Aula 48**: **Planilha de Gerenciamento de Risco**

  Para criar a planilha de gerenciamento de risco, inclua os campos na **ordem exata**, pois algumas fórmulas dependem de campos anteriores. O formato do campo é **Tarefa**.

  1.  **Possui Risco?**

  - **Tipo**: Sinalizador
  - **Atributos**: Nenhum

  2.  **Prazo de Resolução do Risco**

  - **Tipo**: Data
  - **Atributos**: Nenhum

  3.  **Nome do Risco**

  - **Tipo**: Texto
  - **Atributos**: Nenhum

  4.  **Responsável do Risco**

  - **Tipo**: Texto
  - **Atributos**: Nenhum

  5.  **Descrição do Impacto do Risco**

  - **Tipo**: Texto
  - **Atributos**: Nenhum

  6.  **Status do Risco**

  - **Tipo**: Texto
  - **Atributos**: Tabela de Pesquisa
  - **Valores**: Aberto, Fechado

  7.  **Categoria do Risco**

  - **Tipo**: Texto
  - **Atributos**: Tabela de Pesquisa
  - **Valores**: Riscos Técnicos, Riscos de Qualidade, Riscos de Gerenciamento, Riscos Organizacionais, Riscos Externos, Outros

  8.  **Atuação do Risco**

  - **Tipo**: Texto
  - **Atributos**: Tabela de Pesquisa
  - **Valores**: Eliminar, Transferir, Mitigar, Aceitar Ativo, Aceitar Passivo

  9.  **Impacto do Risco**

  - **Tipo**: Texto
  - **Atributos**: Tabela de Pesquisa
  - **Valores**: Muito Baixo, Baixo, Médio, Alto, Muito Alto

  10. **Valor do Impacto**

  - **Tipo**: Número
  - **Atributos**: Fórmula
  - **Fórmula**:
    ```vb
      IIf([Impacto do Risco]="",0,
        IIf([Impacto do Risco]="Muito Baixo",1,
          IIf([Impacto do Risco]="Baixo",2,
            IIf([Impacto do Risco]="Médio",3,
              IIf([Impacto do Risco]="Alto",4,
                IIf([Impacto do Risco]="Muito Alto",5,"")
              )
            )
          )
        )
      )
    ```

  11. **Probabilidade do Risco**

  - **Tipo**: Número
  - **Atributos**: Nenhum

  12. **Status da Probabilidade**

  - **Tipo**: Texto
  - **Atributos**: Fórmula
  - **Fórmula**:
    ```vb
      IIf([Probabilidade do Risco]>=100,"Fato",
        IIf([Probabilidade do Risco]=0,"Sem Risco",
          IIf([Probabilidade do Risco]>70,"Muito Alta",
            IIf([Probabilidade do Risco]>50,"Alta",
              IIf([Probabilidade do Risco]>30,"Média",
                IIf([Probabilidade do Risco]>10,"Baixa",
                  IIf([Probabilidade do Risco]>0,"Muito Baixa")
                )
              )
            )
          )
        )
      )
    ```

  13. **Severidade do Risco**

  - **Tipo**: Número
  - **Atributos**: Fórmula
  - **Fórmula**:
    ```vb
      IIf([Probabilidade do Risco]=0 Or [Valor do Impacto]=0, 0,
        ([Probabilidade do Risco]/100)*[Valor do Impacto])
    ```

  14. **Grau do Risco**

  - **Tipo**: Texto
  - **Atributos**: Fórmula + Sinalizador (Escolha ícones e cores conforme preferir)
  - **Fórmula**:
    ```vb
      IIf([Severidade do Risco]=0,"Sem Risco",
        IIf([Severidade do Risco]<1,"Risco Irrelevante",
          IIf([Severidade do Risco]<2,"Risco Baixo",
            IIf([Severidade do Risco]<3,"Risco Moderado",
              IIf([Severidade do Risco]<4,"Risco Elevado","Risco Extremo")
            )
          )
        )
      )
    ```
  - **Dados do Sinalizador**: Sem Risco, Risco Irrelevante, Risco Baixo, Risco Moderado, Risco Elevado, Risco Extremo.

  15. **Custo do Risco**

  - **Tipo**: Custo
  - **Atributos**: Fórmula
  - **Fórmula**:
    ```vb
      ([Probabilidade do Risco]/100)*[Custo]
    ```

- **Aula 49**: **Criação de Filtros Personalizados**

  ### Filtro "Tarefas de Hoje"

  | Campo           | Condição           | Valor      | Significado                                                           |
  | --------------- | ------------------ | ---------- | --------------------------------------------------------------------- |
  | **Ativo**       | é igual a          | Sim        | Filtra apenas tarefas ativas (não inativas ou desativadas).           |
  | **Resumo**      | é igual a          | Não        | Exclui tarefas de resumo (só mostra tarefas reais, não agrupamentos). |
  | **% concluída** | é diferente de     | 100%       | Mostra apenas tarefas **não finalizadas**.                            |
  | **Término**     | é maior ou igual a | "Hoje é:"? | Garante que a data de término seja **hoje ou depois**.                |
  | **Início**      | é menor ou igual a | "Hoje é:"? | Garante que a data de início seja **hoje ou antes**.                  |

  **Observação**: Para filtrar tarefas da semana, use `"Início da semana é:"?` e `"No final da semana é:"?` nos campos **Início** e **Término**, respectivamente.

## 🎉 Extras: Análise de Valor Agregado (EVM)

A Análise de Valor Agregado (EVM) é uma ferramenta poderosa para medir o desempenho do projeto.

### 1. BCWS – Budgeted Cost of Work Scheduled (Valor Planejado - PV)

- É o custo planejado para o trabalho que **deveria ter sido concluído** até uma determinada data.
- **Exemplo**: Se, de acordo com o cronograma, o projeto deveria ter gasto R$ 10.000 até hoje, então o BCWS = R$ 10.000.

### 2. BCWP – Budgeted Cost of Work Performed (Valor Agregado - EV)

- É o custo planejado para o trabalho que **foi realmente concluído** até o momento.
- **Exemplo**: Se você já concluiu 50% de um trabalho orçado em R$ 20.000, então o BCWP = R$ 10.000.

### 3. ACWP – Actual Cost of Work Performed (Custo Real - AC)

- É o **custo real** gasto para realizar o trabalho até o momento.
- **Exemplo**: Se você gastou R$ 12.000 para concluir aquele mesmo trabalho de R$ 10.000, o ACWP = R$ 12.000.

### 📊 Exemplo Numérico

| Indicador | Valor                                 |
| --------- | ------------------------------------- |
| **BCWS**  | R$ 15.000 (o que deveria estar feito) |
| **BCWP**  | R$ 12.000 (o que foi realmente feito) |
| **ACWP**  | R$ 13.500 (o que foi realmente gasto) |

**Análises Deste Exemplo:**

- O projeto está **atrasado**, pois **BCWP < BCWS**.
- O projeto está **acima do orçamento**, pois **ACWP > BCWP**.
