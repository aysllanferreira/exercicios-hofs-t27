# Boas-vindas ao repositório do exercícios do aulão de HOFs!
Este projeto foi desenvolvido por Aysllan Ferreira, enquanto estudante na Trybe para servir como material de apoio para as pessoas estudantes se prepararem para o projeto Zoo Functions.

# Orientações
	
<details>
<summary><strong>‼ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git@github.com:aysllanferreira/exercicios-hofs-t27.git`

* Entre na pasta do repositório que você acabou de clonar:

	*  `cd exercicios-hofs-t27`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Não é necessário criar sua branch. 

	* Todo projeto deve ser realizado no seu PC, não necessitando assim fazer o git push para o remoto.
	
</details>

<details>
<summary><strong>🎛 Linter</strong></summary><br />

Para simular um ambiente real de projeto, nós usaremos o [ESLint](https://eslint.org/) para fazer a análise do código.

Para identificar os erros localmente, use no seu terminal o comando:

```bash
npm run lint
```
Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.
	
</details>

<details>
<summary><strong>🛠 Testes</strong></summary><br />

Para os testes serem realizados com exito, certifique-se que a versão do seu node seja de fato a versão 16.

```bash
node -v
```

Caso você esteja utilizando outra versão, você pode usar este comando para alterar sua versão para 16.

```bash
nvm use 16
```

Todos os requisitos serão testados pelo Jest. Para rodar todos os testes, basta rodar no terminal o comando.

```bash
npm test
```
Caso queira testar apenas uma função rode o comando abaixo:

```bash
npm test tests/nome-do-arquivo
```


Por exemplo:

```bash
npm test tests/ex01.spec.js
```

</details>

<br>

### Boa sorte!!!
<br>

# Requisitos

## 1. `Exercício 01`.

<details>
  <summary>
  Retorne um array transformando os items em emails.
  </summary> <br />

- Retorne um array transformando os items em emails.
- Transforme no seguinte formato: nome.sobrenome@aulao.com

**O que será testado:**

- Retorna um array transformando os items do objeto em emails.

</details><br>

## 2. `Exercício 02`.

<details>
  <summary>
  Retorna um array de objetos que contenha somente as pessoas do sexo feminino.
  </summary> <br />

**O que será testado:**

- Retorna um array de objetos que contenha somente as pessoas do sexo feminino.

</details><br>

## 3. `Exercício 03`.

<details>
  <summary>
  Retorne um valor booleano as pessoas com as idades específicadas.
  </summary> <br />

**O que será testado:**

- Retorna false se todas as pessoas tiverem mais de 20 anos
- Retorna true se alguma das pessoas não tiverem mais de 40 anos

</details><br>

## 4. `Exercício 04`.

<details>
  <summary>
  Retorne as pessoas mais velha e mais nova.
  </summary> <br />

**O que será testado:**

- Retorna a pessoa mais velha do objeto.
- Retorna a pessoa mais nova do objeto.

</details><br>

## 5. `Exercício 05`.

<details>
  <summary>
  Retorne a soma do array!
  </summary> <br />

**O que será testado:**

- Retorna a soma de todos os números do array usando forEach.
- Retorna a soma de todos os números do array usando reduce.

</details><br>

## 6. `Exercício 06`.

<details>
  <summary>
  Retorne os animais na ordem pedida.
  </summary> <br />

**O que será testado:**

- Retorne o array por ordem decrescente de idade.

</details><br>

## 7. `Exercício 07`.

<details>
  <summary>
  Retorne a raça primeiro animal que tenha idade maior que 5 anos.
  </summary> <br />

**O que será testado:**

- Encontre os animais que tem a idade maior que 5 anos e retorne a raça do primeiro encontrado

</details><br>

## 8. `Exercício 08`.

<details>
  <summary>
  Multiplique o valor do array.
  </summary> <br />

- Multiplique todos os números do array por 2
- Retorne um array com o resultado no seguinte formato.
```bash
[ '3 * 2 = 6', '5 * 2 = 10', '1 * 2 = 2'...]
```

**O que será testado:**

- Deverá retornar um array com os valores multiplicados por 2 no formato exigido.

</details><br>

## 9. `Exercício 09`.

<details>
  <summary>
  Encontre uma pessoa seja por nome ou sobrenome.
  </summary> <br />

- Crie uma funcao passando por parametro um nome.
- Esse parametro deve ser capaz de encontrar a pessoa seja por nome ou sobrenome.
- Deve retornar o nome no seguinte formato:
```bash
Nome: João Silva
```


**O que será testado:**

- Deve ser possivel encontrar uma pessoa usando seu nome ou sobrenome e retornar no formato exigido.

</details><br>

## 10. `Exercício 10`.

<details>
  <summary>
  Encontre uma pessoa seja por ID, nome ou sobrenome e retorne as pessoas independente de quantos parametros forem passados.
  </summary> <br />

- Encontre a pessoa seja por ID ou por nome.
- Deve ser possivel passar quantos parametros forem necessarios.

**O que será testado:**

- Deverá encontrar a pessoa independente se o parametro seja um ID, nome ou sobrenome.
- Deverá retornar as pessoas independente de quantos parametros forem passados.

</details><br>