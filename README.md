# NomedoProjeto

**Número da Lista**: 26<br>
**Conteúdo da Disciplina**: D&C<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 17/0011267 |  Giovanna Borges Bottino |
| 18/0119818  |  Felipe Boccardi Silva Agustini |

## Sobre 
Uma aplicação que auxilia fãs de animes (Otakus) a escolherem os melhores animes dada uma lista de recomendações da api jikan. O ajuda otaku recebe N lista ordenadas por preferencia pessoal e retorna um ranking de melhores animes e quantas inversões ha de diferença entre usuarios.

## Screenshots
![imagem 1](/public/screen1.PNG)

![imagem 2](/public/screen2.PNG)

![imagem 3](/public/screen3.PNG)


## Instalação 
**Linguagem**: JavaScript<br>
**Framework**: React & Node<br>

Como há muitas necessidades de modulos, foi feito um Docker e Docker-compose para facilitar o uso. Por isso para o uso dessa aplicação é preciso do Docker e o Docker-compose instalado. 

## Uso 

Dentro da pasta principal

Primeiro crie a imagem e rode o projeto:

```
docker-compose up --build
```
em seguida acesse em um navegador http://localhost:3000/

## Outros 
Esta aplicação tem como finalidade apresentar o conhecimento da equipe na matéria de Projeto de Algoritimos disponivel na universidade de brasilia no ano de 2022. Ela utiliza um algoritimo de contagem de inversões baseadas em dadas listas de usuarios e requisições a api de recomendação de animes da jikan disponivel através do link https://docs.api.jikan.moe/#tag/recommendations. Além disso as imagens diponiveis dos animes não pertecem a nós e podem ser retiradas caso necessário. Por fim os integrantes do grupo não se indetificam como otakus.
