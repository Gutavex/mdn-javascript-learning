# Diferentes Tipos de Seletores

| Nome do Seletor | O que ele seleciona            | Exemplo             |
|-----------------|--------------------------------|---------------------|
| Seletor de Tipo | Todos os elementos de um tipo  | `p`                 |
| Seletor de Classe | Todos os elementos com uma classe específica | `.classe`           |
| Seletor de ID   | O elemento com um ID específico| `#id`               |
| Seletor de Atributo | Elementos com um atributo específico | `[atributo]`       |
| Seletor Descendente | Elementos que são descendentes de um elemento específico | `div p`             |
| Seletor de Filho | Elementos que são filhos diretos de um elemento específico | `div > p`           |
| Seletor de Irmão Adjacente | Elemento que é o próximo irmão imediato de um elemento específico | `h1 + p`           |
| Seletor de Irmão Geral | Elementos que são irmãos de um elemento específico | `h1 ~ p`            |
| Seletor Universal | Todos os elementos           | `*`                 |
| Seletor de Pseudo-classe | Elementos em um estado específico | `a:hover`          |
| Seletor de Pseudo-elemento | Uma parte específica de um elemento | `p::first-line`    |

## CSS é uma Modelo em CAIXAS

Como esperado, o layout CSS é baseado principalmente no modelo de caixas. 
Cada um dos blocks que ocupam espaço na sua página tem propriedades como essas:

padding, o espaço ao redor do conteúdo (ex.: ao redor do texto de um parágrafo).
border, a linha sólida do lado de fora do padding.
margin, o espaço externo a um elemento.

> Exemplo de estrutura:
![alt text](margin-border-padding.png)


```markdown
> **Nota:** O modelo de caixas é fundamental para entender o layout CSS. 
> 
> ![Modelo de Caixas](https://via.placeholder.com/150)
> 
> - **Padding:** Espaço ao redor do conteúdo. (ex.: ao redor do texto de um parágrafo).
> - **Border:** Linha sólida ao redor do padding. (linha sólida do lado de fora do padding)
> - **Margin:** Espaço externo ao elemento.
```