Trabalho final de Desenvolvimento web onde a proposta era Criar uma aplicação ReactJS para o cadastro e listagem de informações fornecidas por uma API REST. 

Alunos: Bruno de Souza Lacerda, Felipe Schandler Silva, Gustavo Colman Martins

O Backend foi desenvolvido com Java, através do framework Spring.
O Frontend foi desenvolvido com ReactJS.

##Base Url
http://localhost:8080

Endpoints<br>
1. Listar Todos os Carros<br>
Endpoint: /carros<br>
Método: GET<br>
Descrição: Retorna uma lista de todos os carros cadastrados.<br>

2. Buscar Carro por ID<br>
Endpoint: /carros/id/{id}<br>
Método: GET<br>
Descrição: Retorna os detalhes de um carro específico pelo ID.<br>
Parâmetros:<br>
  URL: id - ID do carro<br>

3. Buscar Carro por Nome<br>
Endpoint: /carros/nome/{nome}<br>
Método: GET<br>
Descrição: Retorna uma lista de carros que possuem {nome} no nome. EX. {nome} = Lancer  retornará Lancer, Lancer 2.0, Lancer 2.0T (Caso exista no BD)<br>
Parâmetros:<br>
  URL: nome - Nome do carro (ou parte do nome)<br>

4. Cadastrar Novo Carro<br>
Endpoint: /carros<br>
Método: POST<br>
Descrição: Cadastra um novo carro.<br>
Parâmetros:<br>
  Body<br>
  {<br>
    "marca": "Chevrolet",<br>
    "nome": "Corsa",<br>
    "imagem": "https://torkone.com.br/wp-content/uploads/2022/12/CORSA-1.4.jpg",<br>
    "valor": 10000<br>
  }
  
6. Atualizar Carro<br>
Endpoint: /carros/{id}<br>
Método: PUT<br>
Descrição: Atualiza as informações de um carro específico.<br>
Parâmetros:<br>
  URL: id - ID do carro<br>
    Body<br>
  {<br>
    "marca": "Chevrolet",<br>
    "nome": "Corsa",<br>
    "imagem": "https://torkone.com.br/wp-content/uploads/2022/12/CORSA-1.4.jpg",<br>
    "valor": 10000<br>
  }<br>

7. Deletar Carro<br>
Endpoint: /carros/{id}<br>
Método: DELETE<br>
Descrição: Remove um carro específico.<br>
Parâmetros:<br>
  URL: id - ID do carro<br>

