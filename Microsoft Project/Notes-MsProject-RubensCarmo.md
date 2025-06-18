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

## 📅 Cronograma do curso

| AULA | SEÇÃO | CONTEÚDO                                      | OBSERVAÇÕES                                       |
| ---- | ----- | --------------------------------------------- | ------------------------------------------------- |
| 05   | 01    | Configurações do projeto.                     |                                                   |
| 06   | 02    | Configurações Escala de tempo, coluna, grade. |                                                   |
| 08   | 02    | Configurações Calendário.                     | Recesso(folga), Feriados, meio expediente.        |
| 09   | 02    | Identificar Entregas(WBS), Listar Atividades. | Formulação da Estrutura analítica do projeto      |
| 12   | 03    | Configuração de caledário padrão              | Arquivo ~> Opções ~> Cronograma                   |
| 13   | 03    | Tipos de Relacionamentos                      |                                                   |
| 16   | 03    | Restrição x Data limite                       | inTask ~> Avançado                                |
| 18   | 03    | Tarefas Periódicas                            | Tarefa ~> Tarefa ~> Periódica                     |
| 23   | 04    | Formula de trabalho                           |                                                   |
| 24   | 04    | Tipos de Tarefas                              | Duração fixa x trabalho fixo x unidades fixas     |
| 25   | 04    | Adição de recursos nas tarefas                | Tarefa ~> Display ~> Uso da Tarefa                |
| 27   | 04    | Contorno de Trabalho                          | Distribuíção ao longo da execução                 |
| 32   | 04    | Fast Tracking                                 | Antecipação de tarefas sem comprometer cronograma |
|      |       |                                               |                                                   |

### 📋 Notes

- SEÇÃO 2, AULA 03 - Project ~> Alterar Periodo de trabalho
<hr>

- SEÇÃO 2, AULA 06 - Configuração da Escala de Tempo
<hr>

- SEÇÃO 3, AULA 04 - Tipos de Relacionamentos

  - TI - TÉRMINO A INÍCIO / II - INÍCIO A INÍCIO
  - TT - TÉRMINO A TÉRMINO / IT - INÍCIO A TÉRMINO (Encerra após inicio da sucessora )
  <hr>

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

## 🎉 Extras

[] Recurso do tipo custo

[] Custo de orçamento

[] Custo de trabalho

[] Contorno de trabalho

[] Recurso de material

[] Gráfico de recurso

```markdown
**Projeto Vídeo Institucional V1.0**

- **Etapa 1 - Criação**
  - Fazer Brainstorming de Criação: 4h
  - Criar Roteiro: 10d
  - Criar Storyboard: 3d
- **Etapa 2 - Planejamento**
  - Selecionar Casting: 5d
  - Selecionar Locações de Filmagem: 10d
  - Definir Equipamentos de Filmagem: 1d
  - Definir Equipe de Filmagem: 1d
  - Definir Equipamentos de Áudio: 1d
  - Definir Equipe de Áudio: 1d
  - Definir Equipamentos de Iluminação: 1d
  - Definir Equipe de Iluminação: 1d
  - Planejar Produção e Operação: 2,5d
  - Planejar Montagem de Cenários: 2d
  - Planejar Figurino: 1d
  - Planejar Deslocamento das Equipes: 0,5d
  - Definir Cronograma de Filmagem: 2d
  - Definir Cronograma de Edição: 2d
  - Criar Orçamento e Planejamento Financeiro: 2d
- **Etapa 3 - Execução**
  - Contratações dos Serviços e Equipes: 2d
  - Realizar Ajustes no Local: 1d
  - Montar Cenário: 1d
  - Montar Equipamentos de Filmagem: 4h
  - Montar Equipamentos de Áudio: 4h
  - Montar Equipamentos de Iluminação: 4h
  - Testar Equipamentos: 4h
  - Realizar Ensaios: 1d
  - Realizar Filmagem: 1d
  - Desmontar Local: 0,5d
  - Limpar Local: 0,5d
- **Etapa 4 - Pós Produção**
  - Decupar Material: 1d
  - Editar Vídeo: 3d
  - Inserir Efeitos Especiais: 5d
  - Realizar Tratamento e Correções: 2d
  - Renderizar: 4h
```
