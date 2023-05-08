# REGRAS DE NOMENCLATURA DE VARIÁVEIS

## Ao criar variáveis dentro de um script .js, deve-se sempre respeitar a regra de que seu nome (identificador) não pode conter caracteres especiais, tais como ( @, #, !, %, \*, -, & ), ou qualquer outro caractere especial, exceto o sinal de cifra ( $ ) e o underscore ( \_ ).

#

### Os únicos caracteres que podem ser utilizados são:

    Sinal de cifra ($)
    Underscore/Underline/Sublinhado (_)

Exemplos permitidos:

    $nome
    $idade
    _nome
    _idade

Exemplos não permitidos:

    @valordepedido
    @totalvendas
    variavel-1
    !variavel-2

#

## Além dos caracteres especiais, as variáveis também não podem iniciar com caracteres numéricos. Porém, é possível utilizar caracteres numéricos no meio ou final da variável.

#

### Obs: Caso não saiba, são considerados caracteres numéricos os ( 1, 2, 3, 4, 5, 6, 7, 8, 9 e 0 ).

#

### Exemplos permitidos:

    $nome1;
    $idade1;
    _nome2;
    _idade2;

### Exemplos não permitidos:

    1ºvalordepedido;
    2ºtotalvendas;
    1ºvariavel;
    2ºvariavel;

#

## Dentro do Javascript assim como em outras linguagens de programação existem palavras reservadas da lingua estas não podem ser utilizadas como nome de

variáveis dentro do script.

Exemplos de palavras reservadas ao Javascript:

    let;
    const;
    function;
    if;
    else;
    return;

#

## Em Javascript o padrão da convenção para criação das variáveis é o modelo camelCase.

    O nome "camelCase" é derivado do fato de que as letras maiúsculas no meio da palavra lembram as corcovas de um camelo.
    Portanto ao criar uma variável devemos iniciar a primeira palavra com letra minuscula e a proxima palavra obrigatóriamente deve possuir a primeira letra Maiuscula,
    as demais palavras caso houver tambem devem iniciar com a primeira letra maiúscula.

    Por exemplo, se quisermos criar uma variável para armazenar a data de nascimento de um usuário, podemos nomeá-la como "dataDeNascimento".
    Outro exemplo seria uma variável para armazenar o nome completo de um usuário, que poderia ser chamada de "nomeCompleto".

    O modelo camelCase é amplamente utilizado em várias linguagens de programação,
    incluindo JavaScript, Java, C#, Ruby, Python e outras.
    A adoção de um padrão consistente de nomenclatura, como o camelCase, ajuda a tornar o código mais legível e fácil de entender,
    especialmente quando outros desenvolvedores precisam trabalhar no mesmo código.
