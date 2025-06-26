# 🎓 Curso Microsoft Project - Rubens do Carmo

## 🖱️ Atalhos

- `ALT + F + T` ~> Abrir menu de configurações
- `ALT + SHIFT + 1` ~> Recolher toda seleção
- `SHIFT + SPACE` ~> Selecionar linha

## 🛠️ Campos Personalizados

- Quantidade de dias corridos
  ```
    DateDiff("d";[Início];[Término])
  ```

## 🤖 Macros

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

## 📅 Sumário do curso

| AULA | SEÇÃO | CONTEÚDO                                           | OBSERVAÇÕES                                                  |
| ---- | ----- | -------------------------------------------------- | ------------------------------------------------------------ |
| 05   | 01    | Configurações do projeto.                          |                                                              |
| 06   | 02    | Configurações Escala de tempo, coluna, grade.      |                                                              |
| 08   | 02    | Configurações Calendário.                          | Recesso(folga), Feriados, meio expediente.                   |
| 09   | 02    | Identificar Entregas(WBS), Listar Atividades.      | Formulação da Estrutura analítica do projeto                 |
| 12   | 03    | Configuração de caledário padrão                   | Arquivo ~> Opções ~> Cronograma                              |
| 13   | 03    | Tipos de Relacionamentos                           |                                                              |
| 16   | 03    | Restrição x Data limite                            | inTask ~> Avançado                                           |
| 18   | 03    | Tarefas Periódicas                                 | Tarefa ~> Tarefa ~> Periódica                                |
| 23   | 04    | Fórmula de trabalho                                |                                                              |
| 24   | 04    | Tipos de Tarefas                                   | Duração fixa x trabalho fixo x unidades fixas                |
| 25   | 04    | Adição de recursos nas tarefas                     | Tarefa ~> Display ~> Uso da Tarefa                           |
| 27   | 04    | Contorno de Trabalho                               | Distribuíção ao longo da execução                            |
| 32   | 04    | Fast Tracking                                      | Antecipação de tarefas sem comprometer cronograma            |
| 34   | 04    | Salvar Linha de base                               | Projeto ~> Definir linha de base                             |
| 35   | 04    | Referência Hammock                                 | CTRL C+V especial para seguir parâmetro de referência        |
| 37   | 05    | Criação de Tabela Personalizada                    | Modos de exibição da tabela criada                           |
| 38   | 06    | Data Status                                        | Data da medição do cronograma                                |
| 39   | 06    | Configuração de Aba de comandos                    | Reagendar trabalho / `Sempre atualizar custo após conclusão` |
| 41   | 06    | Fórmula das Análise de valor agregado              |                                                              |
| 44   | 06    | Campos Personalizados                              | Campos, Tipos, Atributos, Exibição                           |
| 47   | 06    | Correção das Fórmulas da Análise de valor agregado |                                                              |
|      |       |                                                    |                                                              |
|      |       |                                                    |                                                              |
|      |       |                                                    |                                                              |
|      |       |                                                    |                                                              |
|      |       |                                                    |                                                              |
|      |       |                                                    |                                                              |

### 📋 Notes

#### SEÇÃO 1

#### SEÇÃO 2

- SEÇÃO 2, AULA 03 - Project ~> Alterar Periodo de trabalho
  <hr>

- SEÇÃO 2, AULA 06 - Configuração da Escala de Tempo
<hr>

#### SEÇÃO 3

- SEÇÃO 3, AULA 04 - Tipos de Relacionamentos

  - TI - TÉRMINO A INÍCIO / II - INÍCIO A INÍCIO
  - TT - TÉRMINO A TÉRMINO / IT - INÍCIO A TÉRMINO (Encerra após inicio da sucessora )
  
<hr>

#### SEÇÃO 4

- SEÇÃO 4, AULA 23 - TRABALHO = DURAÇÃO X UNIDADE X HR/DIA
<hr>

- SEÇÃO 4, AULA 24 - Tipos de Tarefas:

  - Se ela tem tempo fixo, use **Duração Fixa**.
  - Se ela tem esforço fixo, use **Trabalho Fixo**.
  - Se os recursos são constantes e o restante pode mudar, **Unidades Fixas** (padrão) serve bem.
  <hr>

- SEÇÃO 4, AULA 25 - Atribuição de Recursos

  - Recursos do tipo orçamento só podem ser atribuídas na tarefa mãe do projeto.
  <hr>

- SEÇÃO 4, AULA 27 - Tipos de contorno

  | Nome do Contorno      | Descrição                                                             |
  | --------------------- | --------------------------------------------------------------------- |
  | **Plano**             | Distribui o trabalho de forma igual todos os dias                     |
  | **Início Rápido**     | Começa com muito trabalho e vai diminuindo                            |
  | **Fim Rápido**        | Começa leve e o trabalho vai aumentando até o fim                     |
  | **Pico Central**      | Pouco no início e no fim, com mais trabalho no meio da tarefa         |
  | **Pico Final**        | Começa com pouco e o maior esforço é no final                         |
  | **Pico Inicial**      | Muito trabalho no início, e vai diminuindo ao longo dos dias          |
  | **Subida**            | O esforço aumenta dia após dia (ex: 1h, depois 2h, depois 3h...)      |
  | **Descida**           | Começa com bastante esforço e vai diminuindo gradualmente             |
  | **Manual (Contorno)** | Você define manualmente quantas horas por dia o recurso irá trabalhar |

<hr>

#### SEÇÃO 5

- SEÇÃO 5, AULA 37 - Tabela e exibição personalizada

  - Nome da Tabela: **Análise de Valor Agregado (EVM - Earned Value Management)**

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

<hr>

#### SEÇÃO 6

- SEÇÃO 6, AULA 39 - Configuração de Aba de comandos

  - Arquivo ~> Opções ~> Personalizar Faixa de Opções ~> Em 'Tarefas' criar novo grupo 'Outros', adicionar: `Reagendar trabalho`
  <hr>

- SEÇÃO 6, AULA 41 a 47 - Fórmulas Análise de Valor Agregado

  | Sigla    | Nome Completo                   | Tradução / Descrição |
  | -------- | ------------------------------- | -------------------- |
  | **BCWS** | Budgeted Cost of Work Scheduled | Valor Planejado      |
  | **BCWP** | Budgeted Cost of Work Performed | Valor Agregado       |
  | **ACWP** | Actual Cost of Work Performed   | Custo Atual          |
  | **BAC**  | Budget at Completion            | Orçamento no Término |

  📌 Indicadores **CPI** (Índice de desempenho de custo) e **SPI** (Índice de desempenho de prazo).

  - `CPI = Valor Agregado(BCWP) ÷ Custo Atual(ACWP)` - Mostra se o projeto está **dentro do orçamento**
  - `SPI = Valor Agregado(BCWP) ÷ Valor Planejado(BCWS)` - Mostra se o projeto está **adiantado ou atrasado**
  - `ETC = Valor Planejado Total(BAC) - Valor Agregado(BCWP)` - Estimativa do quanto falta para **entregar o projeto**
  - `EAC = Custo Atual(ACWP) +  Estimativa para Completar(ETC) ÷ Índice de desempenho de custo(CPI)` - Estimativa de como **irá terminar o projeto**
  <!-- O que foi gasto + (O que falta agregar ÷ índice de desempenhho de custo) -->
  - `TCPI = Estimativa para completar(ETC) ÷ (Valor Planejado Total(BAC) - Custo Atual(ACWP))` - Projeção de como **irá terminar o projeto**

  📌 Campo: **BCWS da Tarefa**

  - **Tipo:** Custo
  - **Cálculo de Tarefas Resumo:** Soma
  - **Fórmula:**

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

  📌 Campo: **CPI da Tarefa**

  - **Tipo:** Número
  - **Cálculo de Tarefas Resumo:** Usar Fórmula
  - **Fórmula:**

  ```vb
    IIf([COTE] = 0 Or [Custo Real] = 0; 0; [COTE] / [Custo Real])
  ```

  📌 Campo: **SPI da Tarefa**

  - **Tipo:** Número
  - **Cálculo de Tarefas Resumo:** Usar Fórmula
  - **Fórmula:**

  ```vb
    IIf([BCWS da Tarefa] = 0; 0; [COTE] / [BCWS da Tarefa])
  ```

  📌 Campo: **TCPI da Tarefa**

  - **Tipo:** Número
  - **Cálculo de Tarefas Resumo:** Usar Fórmula
  - **Fórmula:**

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

  📌 Campo: **EAC da Tarefa**

  - **Tipo:** Custo
  - **Cálculo de Tarefas Resumo:** Usar Fórmula
  - **Fórmula:**

  ```vb
    IIf([Custo da Linha de Base] = 0 Or [Custo Real] = 0;
      0;
      IIf([COTE] = 0 And [Custo Real] > 0 Or [COTE] = 0 And [Custo Real] = 0;
        [Custo Real];
        [Custo Real] + (([Custo da Linha de Base] - [COTE]) / ([COTE] / [Custo Real]))
      )
    )
  ```

<hr>

## 🎉 Extras

### Indicadores para análise de valor agregado.

#### 📌 **1. BCWS – Budgeted Cost of Work Scheduled (Custo Planejado do Trabalho Agendado)**

🔹 **Valor Planejado (PV – Planned Value)** ~> É o custo planejado para o trabalho que **deveria ter sido concluído** até uma determinada data.

🔹 **Exemplo:** Se até hoje o projeto deveria ter gasto R\$ 10.000 (segundo o cronograma), então o BCWS = R\$ 10.000.

#### 📌 **2. BCWP – Budgeted Cost of Work Performed (Custo Planejado do Trabalho Realizado)**

🔹 **Valor Agregado (EV – Earned Value)** ~> É o custo planejado para o trabalho que **foi realmente concluído** até o momento.

🔹 **Exemplo:** Se você já concluiu 50% de um trabalho orçado em R\$ 20.000, então o BCWP = R\$ 10.000.

### 📌 **3. ACWP – Actual Cost of Work Performed (Custo Real do Trabalho Realizado)**

🔹 **Custo Real (AC – Actual Cost)** ~> É o **custo real** gasto para realizar o trabalho até o momento.

🔹 **Exemplo:** Se você gastou R\$ 12.000 para concluir aquele mesmo trabalho de R\$ 10.000, o ACWP = R\$ 12.000.

#### 📊 Exemplo numérico

| Indicador | Valor                                    |
| --------- | ---------------------------------------- |
| **BCWS**  | R\$ 15.000 _(o que deveria estar feito)_ |
| **BCWP**  | R\$ 12.000 _(o que foi realmente feito)_ |
| **ACWP**  | R\$ 13.500 _(o que foi realmente gasto)_ |

(Exibir ~> [Fórmulas](#fórmulas))

**Análises:**

- Projeto **atrasado**, pois BCWP < BCWS
- Projeto **acima do orçamento**, pois ACWP > BCWP
<hr>
