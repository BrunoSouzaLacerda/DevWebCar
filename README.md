Trabalho final de Desenvolvimento web onde a proposta era Criar uma aplicação ReactJS para o cadastro e listagem de informações fornecidas por uma API REST. 

Alunos: Bruno de Souza Lacerda, Felipe Schandler Silva, Gustavo Colman Martins

O Backend foi desenvolvido com Java, através do framework Spring.
O Frontend foi desenvolvido com ReactJS.

##Base Url
http://localhost:8080

Endpoints
1. Listar Todos os Carros
Endpoint: /carros
Método: GET
Descrição: Retorna uma lista de todos os carros cadastrados.

2. Buscar Carro por ID
Endpoint: /carros/id/{id}
Método: GET
Descrição: Retorna os detalhes de um carro específico pelo ID.
Parâmetros:
  URL: id - ID do carro

3. Buscar Carro por Nome
Endpoint: /carros/nome/{nome}
Método: GET
Descrição: Retorna uma lista de carros que possuem {nome} no nome. EX. {nome} = Lancer  retornará Lancer, Lancer 2.0, Lancer 2.0T (Caso exista no BD)
Parâmetros:
  URL: nome - Nome do carro (ou parte do nome)

4. Cadastrar Novo Carro
Endpoint: /carros
Método: POST
Descrição: Cadastra um novo carro.
Parâmetros:
  Body
  {
    "marca": "Chevrolet",
    "nome": "Corsa",
    "imagem": "https://torkone.com.br/wp-content/uploads/2022/12/CORSA-1.4.jpg",
    "valor": 10000
  }
  
5. Atualizar Carro
Endpoint: /carros/{id}
Método: PUT
Descrição: Atualiza as informações de um carro específico.
Parâmetros:
  URL: id - ID do carro
    Body
  {
    "marca": "Chevrolet",
    "nome": "Corsa",
    "imagem": "https://torkone.com.br/wp-content/uploads/2022/12/CORSA-1.4.jpg",
    "valor": 10000
  }

6. Deletar Carro
Endpoint: /carros/{id}
Método: DELETE
Descrição: Remove um carro específico.
Parâmetros:
  URL: id - ID do carro







URL: id - ID do carro
