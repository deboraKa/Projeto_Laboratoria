Projeto do laboratório:

O cliente solicitou a criação de um processo capaz de trazer a cotação do cambio e suas variações
ao longo da semana, sendo necessário trazer uma solução para extração e processamento de dados para
gerar alguns relatórios semanais, por isso necessitam da cotação do dólar.

Origem e especificação dos dados
• Os dados estão sendo disponibilizados por uma API do banco central.
Ambiente de desenvolvimento
• O cliente que vai disponibilizar o acesso ao ambiente de desenvolvimento e todas as ferramentas
especificas na arquitetura proposta neste documento.

*Processo de desenvolvimento até etapa final

As atividades do pipeline estão enumeradas a seguir.
1. Azure SQL Para realizar este projeto foi necessário entender os dados que seriam usados para a
elaboração do relatório. Foi utilizado um arquivo no formato CSV para popular as tabelas. Foi
criado um Schema, uma tabela Stage e uma Tabela final na plataforma Azure SQL.

3. Data Factory Foi criado uma pipeline contendo: Copy Data que contém o API do banco central
e popula a tabela Stage. Depois um procedimento armazenado converte os tipos de dados para o
formato Float,Datetime, e converte vírgula para ponto, facilitando assim a leitura e entendimento
das informações. Por fim um segundo Copy Data que recebe os dados da tabela final e armazena
os dados no Blob no formato Parquet.

5. Azure Data Lake Storage Depois de convertidos estes dados retornam em um arquivo no formato
Parquet, armazenado em um container.

# Projetos_BancoDeDados
