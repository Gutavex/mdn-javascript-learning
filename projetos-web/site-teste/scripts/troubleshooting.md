# Troubleshooting

Esta seção fornece soluções para problemas comuns que você pode encontrar ao usar este projeto.

## Problema 1: Botão não responde ao clique

### Sintomas
- O botão na interface do usuário não responde quando clicado.

### Causa
- O evento de clique não está sendo corretamente associado ao botão.

### Solução
1. Verifique se o seletor do botão está correto no código JavaScript.
2. Certifique-se de que o script está sendo carregado após o botão ser renderizado no DOM.

#### Exemplo de Código:
```javascript
// Certifique-se de que o script é executado após o DOM ser carregado
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.querySelector('#meu-botao');
    button.addEventListener('click', () => {
        alert('Botão clicado!');
    });
});
```
# Problema 2: Dados não são salvos no localStorage

### Sintomas
- Os dados não são persistidos no localStorage após a atualização da página.

### Causa
- O método `localStorage.setItem` pode não estar sendo chamado corretamente.

### Solução
1. Verifique se a chave e o valor estão sendo passados corretamente para `localStorage.setItem`.
2. Certifique-se de que o navegador suporta `localStorage`.

#### Exemplo de Código:
```javascript
// Armazena um item no localStorage
localStorage.setItem('username', 'Gustavo');

// Recupera o item armazenado
const username = localStorage.getItem('username');
console.log(username); // Output: Gustavo
```

# Problema 3: Erro 404 ao carregar um recurso

### Sintomas
- O navegador retorna um erro 404 ao tentar carregar um recurso (arquivo JavaScript, CSS, imagem, etc.).

### Causa
- O caminho para o recurso pode estar incorreto.

### Solução
1. Verifique se o caminho para o recurso está correto no HTML ou JavaScript.
2. Certifique-se de que o recurso existe no local especificado.

#### Exemplo de Código:
```html
<!-- Caminho correto para o arquivo JavaScript -->
<script src="scripts/main.js"></script>