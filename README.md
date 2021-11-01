# api-Jogo-da-velha
- API stateless que responde qual movimento resulta na melhor jogada para o jogador "o" dado o seguinte tabuleiro.
- O board é representado como uma string de 9 caracteres (a string vai passar por um
processo de encode, exemplo: BASE_URL?board=%20xxo%20%20o%20%20 ), onde cada
caracter é representado pela letra "x", "o" ou um espaço. O board deve ser lido da
esquerda para a direita, de cima para baixo.
## Exemplo
- https://apijogodavelha.herokuapp.com/ticktacktoe?board=o%20x%20xx%20oo

## Requisitos
- Nodejs 10 ou superior;

## Rodando local

```
npm install
```

```
npm start
```