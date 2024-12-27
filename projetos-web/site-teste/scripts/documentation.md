## Document.querySelector()

A função `Document.querySelector()` retorna o primeiro elemento dentro do documento que corresponde ao seletor ou grupo de seletores especificado. Se nenhuma correspondência for encontrada, `null` é retornado.

### Sintaxe

```javascript
element = document.querySelector(selectors);

Parâmetros
selectors: Uma string contendo um ou mais seletores CSS separados por vírgulas.
Valor de Retorno
O primeiro Element dentro do documento que corresponde ao grupo de seletores especificado, ou null se nenhuma correspondência for encontrada.

Exemplos de Uso

Selecionando um único elemento

// Seleciona o primeiro elemento com a classe "example"
var element = document.querySelector('.example');

Selecionando um elemento dentro de um contexto específico

// Seleciona o primeiro elemento <p> dentro do elemento com ID "container"
var container = document.getElementById('container');
var paragraph = container.querySelector('p');

Notas
Se você precisar de todos os elementos que correspondem ao seletor, use Document.querySelectorAll().
O seletor é avaliado no contexto do documento ou do elemento no qual o método é chamado.
Referências
Document.querySelector() - MDN

Espero que isso ajude a entender o uso da função `Document.querySelector()`.
Espero que isso ajude a entender o uso da função `Document.querySelector()`.


### Tipos de Dados em JavaScript

Observe que as variáveis podem conter valores que têm diferentes tipos de dados:

| Variável | Explicação | Exemplo |
| --- | --- | --- |
| **String** | Esta é uma sequência de texto conhecida como string. Para significar que o valor for uma string, coloque-a entre aspas simples. | `let myVariable = 'Bob';` |
| **Number** | Isto é um número. Os números não têm aspas. | `let myVariable = 10;` |
| **Boolean** | Este é um valor Verdadeiro/Falso. As palavras `true` e `false` são palavras-chave especiais que não precisam de aspas. | `let myVariable = true;` |
| **Array** | Esta é uma estrutura que permite armazenar vários valores em uma única referência. | `let myVariable = [1, 'Bob', 'Steve', 10];` |
| | Refere-se a cada membro do array assim: `myVariable[0]`, `myVariable[1]`, etc. | |
| **Object** | Isso pode ser qualquer coisa. Tudo em JavaScript é um objeto e pode ser armazenado em uma variável. Tenha isso em mente enquanto aprende. | `let myVariable = document.querySelector('h1');` |

Todos os exemplos acima também.


## Eventos
