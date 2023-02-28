# Informações da api e banco de dados
 É uma api que se baseia em informações de um banco de dados escolar em mariaDd, o projeto foi feito com Node.js, Express e Sequelize e uso de MVC para a estruturação e organização dele.
 O projeto ainda tem alguns pacotes de proteção a informações que ajudam na proteção de dados de algum usúario, utilizando bcrypt, helmet, jwt, cors, entre outros...
 
 ## Atenção!
 
 Para o cadastro de algum aluno, usúario ou foto **é necessário um token** para que a ação seja possível.
 
 É necessário vincular um banco de dados com estrutura similar ao do projeto em um arquivo .env para que a api seja consumida corretamente.

Para rodar o servidor da api: 
        

    npm run start


Caso queira buildar o projeto:

    npm run build
    
