// Banco de perguntas com suporte opcional para dicas
const perguntas = [
		{
            pergunta: "Qual foi a primeira rua oficial do Brasil?",
            alternativas: ["Sete de Setembro", "Rua Chile", "Rua da Graça", "Sete Portas"],
            correta: 1 ,
			dica: "Fundada em 1549, pelo primeiro governador-geral Tomé de Souza, já foi chamada de Rua Direita do Palácio."
        },
		{
            pergunta: "Qual desses consagrados compositores brasileiros morou muitos anos em Salvador?",
            alternativas: ["Tom Jobim", "Toquinho", "Vinicius de Moraes", "Chico Buarque"],
            correta: 2 ,
            dica: 'Foi o autor do sucesso da MPB "Tarde em Itapuã"'
        },
		{
            pergunta: "Qual instituição é conhecida como a “Casa do Conhecimento dos Tribunais de Contas”?",
            alternativas: ["Instituto Serzedello Corrêa", "Associação dos Servidores do Tribunal de Contas do Estado da Bahia", "Associação dos Membros dos Tribunais de Contas do Brasil", "Instituto Rui Barbosa"],
            correta: 3 ,
			dica: "Esta instituição é nomeada em homenagem ao patrono dos tribunais de contas!"
        },
		{
            pergunta: "Quem é considerado o Pai da Axé Music?",
            alternativas: ["Bell Marques", "Moraes Moreira", "Osmar Macedo", "Luiz Caldas"],
            correta: 3
        },
        {
            pergunta: "Qual dessas personalidades teve envolvimento direto com a Guerra de Canudos?",
            alternativas: ["Pedro de Alcântara", "José Joaquim Seabra", "Antônio Conselheiro", "Virgulino Ferreira da Silva"],
            correta: 2 ,
			dica: "A guerra de Canudos ocorreu de 1896 a 1897, no sertão da Bahia"
        },
        {
            pergunta: "A que órgão compete a proteção de bens, serviços e locais públicos?",
            alternativas: ["Polícia Federal", "Polícia Civil", "Polícia Militar", "Guarda Municipal"],
            correta: 3
        },
        {
            pergunta: "Qual desses locais NÃO é uma atração turística da região de Mata de São João, na Bahia?",
            alternativas: ["Projeto Tamar", "Castelo Garcia D’Ávila", "Reserva da Sapiranga", "Cachoeira da Fumaça"],
            correta: 3
        },
{
            pergunta: "Qual desses compositores nasceu no estado da Bahia?",
            alternativas: ["Luiz Gonzaga", "Alceu Valença", "Claudia Leitte", "Pitty"],
            correta: 3
        },
{
            pergunta: "Quem é o escritor cuja obra se notabilizou por expressar a linguagem do povo?",
            alternativas: ["Machado de Assis", "José de Alencar", "Graciliano Ramos", "Jorge Amado"],
            correta: 3
        },
{
            pergunta: "Bolinho da culinária baiana feito de feijão fradinho e frito no azeite de dendê:",
            alternativas: ["Abará", "Bolinho de estudante", "Cocada", "Acarajé"],
            correta: 3 ,
            dica: 'Este prato típico foi trazido para o Brasil pelos povos Iorubás da Nigéria e do Benim'
        },
{
            pergunta: "Qual é o(a) padroeiro(a) da cidade de Salvador/BA?",
            alternativas: ["Santo Antônio", "São Francisco Xavier", "Nossa Senhora da Conceição da Praia", "Senhor do Bonfim"],
            correta: 1 ,
	dica: "Você sabia? Este Padroeiro se consolidou após a grande praga de febre amarela que assolou a cidade em 1686!"
        },
{
            pergunta: "Qual dessas frutas não é nativa do Brasil?",
            alternativas: ["Caju", "Jabuticaba", "Manga", "Goiaba"],
            correta: 2 ,
	dica: "Fruta originária do sudeste da Ásia, trazida ao Brasil pelos portugueses durante as grandes navegações de 1500s"
        },
{
            pergunta: "Considerado o pai da psiquiatria no Brasil, revolucionou o tratamento das doenças mentais:",
            alternativas: ["Paulo Amarante", "Milton Santos", "Juliano Moreira", "Luiz Gama"],
            correta: 2 ,
	dica: "Um hospital famoso, em Salvador, tem o seu nome."
        },
{
            pergunta: "Animal híbrido e estéril, muito utilizado para transporte de cargas e montaria. Seu nome é dito de forma pejorativa:",
            alternativas: ["Anta", "Cavalo", "Mula", "Cabra"],
            correta: 2
        },
{
            pergunta: "Geógrafo baiano, foi um dos grandes nomes da renovação da geografia no Brasil:",
            alternativas: ["Milton Nascimento", "Camafeu de Oxóssi", "Milton Santos", "Juarez Paraíso"],
            correta: 2
        },
{
            pergunta: "Nasceu na Ilha de Itaparica, liderou um grupo de 200 pessoas na batalha contra os portugueses e inspirou a criação do termo “surra de cansanção”:",
            alternativas: ["Maria Quitéria", "Maria Felipa", "Joana Angélica", "Chica da Silva"],
            correta: 1
        },
{
            pergunta: "Quais desses pratos são típicos da culinária baiana, considerados como “comida de terreiro” e oferecidos aos orixás?",
            alternativas: ["Maniçoba, bolinho de estudante e cuscuz", "Vatapá, caruru e acarajé", "Moqueca, peixe vermelho e feijoada", "Xinxim, beiju e acaçá"],
            correta: 1
	
        },
{
            pergunta: "Qual dessas criaturas do folclore brasileiro é conhecida por virar as embarcações dos pescadores do Rio São Francisco?",
            alternativas: ["Papa-Figo", "Caipora", "Yara", "Nego D’Água"],
            correta: 3 , 
            dica: 'Segundo sua lenda, ele(a) pode ser evitado com oferendas de peixes ou derramando cachaça antes de uma pescaria.'
        },
{
            pergunta: "Qual o significado da expressão “Pensar na morte da bezerra”?",
            alternativas: ["Morte", "Perigo", "Teimosia", "Falta de atenção"],
            correta: 3
        },
{
            pergunta: "Na obra “Vidas Secas”, de Graciliano Ramos, que animal representa a personagem “Baleia”?",
            alternativas: ["Papagaio", "Baleia", "Cachorro", "Preá"],
            correta: 2
        },
{
            pergunta: "Qual o significado da expressão nordestina “Cabra da Peste”?",
            alternativas: ["Pessoa medrosa", "Pessoa valente", "Pessoa irritante", "Pessoa doente"],
            correta: 1
        },
{
            pergunta: "Qual destes santos ou santa é brasileiro e nascido no estado da Bahia?",
            alternativas: ["São Félix", "Santo Antônio de Jesus", "São Jorge", "Santa Dulce dos Pobres"],
            correta: 3
        },
		{
            pergunta: "Qual desses animais não pode ser encontrado no estado da Bahia?",
            alternativas: ["Golfinho", "Boto-cor-de-rosa", "Esquilo", "Raposa"],
            correta: 1
        },
{
            pergunta: "Qual setor do TCE recebe as dúvidas, sugestões e manifestações dos cidadãos?",
            alternativas: ["Recepção", "Assessoria de Comunicação", "Ouvidoria", "Escola de Contas"],
            correta: 2
        },
{
            pergunta: "Qual o nome do projeto itinerante do TCE que realiza visitas nas escolas da Bahia?",
            alternativas: ["Conta Comigo!", "Educação na Veia", "Ouvidoria Vai à Escola", "Caminhos de Contas"],
            correta: 2
        },
{
            pergunta: "Cantor baiano, considerado pai do rock brasileiro, famoso por suas músicas contestadoras, com referências místicas:",
            alternativas: ["Tom Zé", "Cazuza", "Raul Seixas", "Marcelo Nova"],
            correta: 2 , dica: 'Também é conhecido pelo apelido de "Maluco Beleza".'
        },
{
            pergunta: "Qual a sigla da universidade baiana considerada a primeira do Brasil, fundada por Dom João VI em 1808?",
            alternativas: ["UNEB", "UFBA", "UCSAL", "UEFS"],
            correta: 1 , dica: 'Foi fundada como a Escola de Cirurgia da Bahia'
        },
{
            pergunta: "Como o cidadão pode fazer uma denúncia de irregularidade ao TCE/BA?",
            alternativas: ["Apenas presencialmente", "Somente por e-mail", "Via protocolo eletrônico", "Por e-mail, correspondência, WhatsApp, telefone ou presencialmente"],
            correta: 3
        },
        {
            pergunta: "Qual desses órgãos pode ser considerado o antecessor dos Tribunais de Contas do Brasil?",
            alternativas: ["Diretoria de Documentação Histórica", "Casa de Arrecadação dos Direitos", "Conselho da Fazenda", "Casa da Moeda"],
            correta: 2
        },
	
{
            pergunta: "Grande pensador da educação, criou o modelo da Escola Parque:",
            alternativas: ["Paulo Freire", "Anísio Teixeira", "Darcy Ribeiro", "Rubem Alves"],
            correta: 1
        },
{
            pergunta: "Quem é o autor baiano que escreveu várias novelas de sucesso na TV brasileira?",
            alternativas: ["Adonias Filho", "Dias Gomes", "João Ubaldo Ribeiro", "Jorge Amado"],
            correta: 1
        },
{
            pergunta: "Escritor baiano, foi membro da Academia Brasileira de Letras. Escreveu “Viva o Povo Brasileiro”:",
            alternativas: ["João Ubaldo Ribeiro", "Jorge Amado", "Graciliano Ramos", "Ariano Suassuna"],
            correta: 0
        },
{
            pergunta: "Quem é o Patrono dos Tribunais de Contas do Brasil?",
            alternativas: ["Marechal Deodoro da Fonseca", "Ruy Barbosa", "Floriano Peixoto", "Serzedello Corrêa"],
            correta: 1
        },
{
            pergunta: "Qual o ano de inauguração do Centro Administrativo da Bahia (CAB)?",
            alternativas: ["1980", "1950", "1978", "1972"],
            correta: 3
        },
		{
            pergunta: "Qual dessas cidades baianas é conhecida por sua produção de urânio?",
            alternativas: ["Mucugê", "Caetité", "Ourolândia", "Lençóis"],
            correta: 1
        }, 
		{
            pergunta: "Primeiro(a) engenheiro(a) negro(a) a se formar na Escola Militar do Rio de Janeiro, nascido(a) na cidade de Cachoeira/BA. Idealizou e projetou a ferrovia Curitiba/Paranaguá:",
            alternativas: ["Enedina Alves Marques", "Antônio Joaquim de Souza", "Teodoro Sampaio", "André Rebouças"],
            correta: 3 , dica: 'Durante a Guerra do Paraguai, desenvolveu um torpedo que foi utilizado com sucesso.'
        },
{
            pergunta: "Na obra literária “O Homem que Sabia Javanês”, de Lima Barreto, qual a cidade natal do personagem Castelo?",
            alternativas: ["Canavieiras", "Tucano", "Salvador", "Castro Alves"],
            correta: 0 , dica: 'Ao contrário do que o seu nome sugere, por muitos anos sua economia prosperou com o cultivo de cacau.'
        },
{
            pergunta: "Em qual ano o Tribunal de Contas do Estado da Bahia foi extinto pela ditadura do Estado Novo?",
            alternativas: ["1939", "1935", "1942", "1964"],
            correta: 2
        },
{
            pergunta: "Em que ano o Tribunal de Contas do Estado da Bahia foi criado?",
            alternativas: ["2000", "1964", "1915", "1922"],
            correta: 2
        },
{
            pergunta: "O que não é da competência dos Tribunais de Contas do Estado?",
            alternativas: ["Aplicar multas", "Calcular as cotas de impostos repassados aos municípios pelo estado", "Emitir pareceres prévios para a Assembleia Legislativa", "Executar a apreensão de administradores estaduais que cometem irregularidades"],
            correta: 3
        },


   
        {
            pergunta: "Qual é a forma de Estado adotada pelo Brasil?",
            alternativas: ["Presidencialista", "Federativa", "Parlamentarista", "Republicana"],
            correta: 1
        },
        {
            pergunta: "Qual dessas pessoas jurídicas pode se enquadrar no conceito de administração pública direta?",
            alternativas: ["Autarquias", "Agências reguladoras", "Órgãos públicos", "Empresas públicas"],
            correta: 2
        },
        {
            pergunta: "O abuso de poder na gestão pública que ocorre quando o servidor público age sem a devida competência recebe o nome de:",
            alternativas: ["Excesso de poder", "Desvio de Finalidade", "Falsidade ideológica", "Prevaricação"],
            correta: 0
        },
        {
            pergunta: "Qual dessas atribuições NÃO é da competência dos Tribunais de Contas?",
            alternativas: ["Julgar as contas dos chefes do Poder Executivo", "Apreciar a legalidade dos atos de admissão de pessoal", "Sustar a execução de atos impugnados", "Disponibilizar à Justiça Eleitoral a relação dos gestores com contas desaprovadas para fins de inelegibilidade"],
            correta: 0
        },
    
		{
            pergunta: "Qual é a cidade natal da heroína baiana Maria Quitéria?",
            alternativas: ["Xique-Xique", "Feira de Santana", "Itaparica", "Salvador"],
            correta: 1
        },
{
            pergunta: "O Banco do Brasil e a Caixa Econômica Federal são:",
            alternativas: ["Autarquias federais", "Fundações públicas", "Órgãos públicos", "Empresas estatais"],
            correta: 3
        },
{
            pergunta: "Quem foi o responsável pela proposta que deu origem ao Tribunal de Contas da União (TCU)?",
            alternativas: ["Anísio Teixeira", "Marquês de Pombal", "Visconde de Cairu", "Ruy Barbosa"],
            correta: 3
        },
{
            pergunta: "Qual a idade máxima para que crianças tenham acesso a creches e pré-escolas?",
            alternativas: ["6 anos", "5 anos", "4 anos", "12 anos"],
            correta: 1
        },
{
            pergunta: "Qual é o percentual mínimo da receita dos impostos que a Constituição Federal previu para ser aplicado na educação pelos estados e municípios?",
            alternativas: ["12%", "15%", "18%", "25%"],
            correta: 3
        },
{
            pergunta: "Qual dos títulos a seguir não faz parte da obra do escritor baiano Jorge Amado?",
            alternativas: ["Tocaia Grande", "Capitães da Areia", "Corpo Vivo", "Terras do Sem Fim"],
            correta: 2
        },
{
            pergunta: "Quem é conhecido como “O Poeta dos Escravos” e fez parte da geração do Romantismo?",
            alternativas: ["Tobias Barreto", "Castro Alves", "Gonçalves Dias", "Cassiano Ricardo"],
            correta: 1
        },
{
            pergunta: "Cantor e compositor, foi ministro da Cultura:",
            alternativas: ["Caetano Veloso", "Chico Buarque", "Gilberto Gil", "Moraes Moreira"],
            correta: 2
        },

		{
            pergunta: "Quantos ministros compõem o TCU?",
            alternativas: ["7", "9", "11", "13"],
            correta: 1
        },
		{
            pergunta: "Qual situação não pode ser fiscalizada pelo TCE/BA?",
            alternativas: ["Falta de merenda nas escolas estaduais", "Falta de manutenção em estradas administradas por empresas terceirizadas", "Má qualidade da água fornecida nas cidades da Bahia", "Bullying entre alunos da escola estadual"],
            correta: 3
        },
        {
            pergunta: "Qual dessas ações adotadas pelos Tribunais de Contas não pode ser considerada como de cunho preventivo e orientador?",
            alternativas: ["Auditorias Operacionais", "Termos de Ajustamento de Gestão", "Alertas aos gestores sobre limites da Lei de Responsabilidade Fiscal (LRF)", "Emissão de Parecer Prévio sobre as Contas do Governo"],
            correta: 3
        },
        {
            pergunta: "No processo de julgamento de uma conta pública no TCE, qual setor é responsável por iniciar a instrução ou por produzir o relatório inicial?",
            alternativas: ["Coordenadoria de Controle Externo (CCE)", "Procuradoria-Geral do Estado (PGE)", "Ministério Público de Contas (MPC)", "Gabinetes de Conselheiro"],
            correta: 0
        },
        {
            pergunta: "A Constituição Federal de 1988 (CF/88) determina que os Poderes Legislativo, Executivo e Judiciário manterão, de forma integrada:",
            alternativas: ["O sistema de controle interno", "O sistema de controle externo", "O sistema de controladorias", "O sistema de corregedorias"],
            correta: 0
        },
        {
            pergunta: "São considerados como agentes políticos:",
            alternativas: ["Ministros de Estado", "Auditores Fiscais", "Procuradores Federais", "Controladores Gerais da União"],
            correta: 0
        },
       
		{
            pergunta: "O que significa a sigla REDA na gestão pública?",
            alternativas: ["Regime Especial de Direito Administrativo", "Regime Especial da Administração", "Regime Diferenciado de Agentes Públicos", "Regime Extraordinário da Administração"],
            correta: 0
        },
		{
            pergunta: "As Normas de Auditoria Governamental (NAGs) aplicáveis ao controle externo brasileiro foram construídas com base:",
            alternativas: ["em práticas internacionais", "em práticas exclusivamente nacionais", "em práticas de auditoria privada", "na jurisprudência do TCU"],
            correta: 0
        },
{
            pergunta: "Quem foi o paraense responsável por implantar o Tribunal de Contas da União (TCU) quando ocupou o cargo de Ministro da Fazenda de 1892 a 1893?",
            alternativas: ["Serzedello Corrêa", "Ruy Barbosa", "Floriano Peixoto", "Alberto Engelhard"],
            correta: 0
        },
{
            pergunta: "Em que documento se materializam as diretrizes, metas e estratégias que devem reger as iniciativas na área da Educação?",
            alternativas: ["Plano Plurianual (PPA)", "Lei de Diretrizes Orçamentárias (LDO)", "Plano Nacional de Educação (PNE)", "Plano Estratégico para Educação e Cultura (PEEC)"],
            correta: 2
        },
{
            pergunta: "Como são conhecidas as unidades de Educação Corporativa no âmbito dos Tribunais de Contas?",
            alternativas: ["Escolas de Governo", "Escolas de Contas", "Escolas de Auditoria Pública", "Escolas Governamentais"],
            correta: 1
        },
{
            pergunta: "Qual das alternativas a seguir consta de uma cláusula pétrea prevista na Constituição Federal de 1988 (CF/88)?",
            alternativas: ["forma republicana", "voto direto, secreto, periódico e universal", "sistema presidencialista", "direitos e garantias coletivas"],
            correta: 1
        },
{
            pergunta: "Qual a idade mínima para se tornar Conselheiro dos Tribunais de Contas?",
            alternativas: ["30 anos", "35 anos", "40 anos", "45 anos"],
            correta: 1
        }, 
		{
            pergunta: "Artista multifacetado, foi diretor da Pinacoteca do Estado de São Paulo e diretor do Museu Afro Brasil:",
            alternativas: ["João Timótheo", "Benedito José de Andrade", "Wilson Tibério", "Emanoel Araújo"],
            correta: 3
        },
 /////PERGUNTAS NOVAS 12/11 BRASIL
    {
            pergunta: "Quem tem a obrigação de prestar contas ao Tribunal de Contas da União (TCU)?",
            alternativas: ["Órgãos e entidades que recebam recursos de seus estados", "Somente órgãos públicos federais", "Somente políticos e gestores de Brasília", "Todo e qualquer órgão, entidade ou pessoa que receba fundos de origem federal"],
            correta: 3
        },
        {
            pergunta: "Qual o nome do importante aquífero sul-americano, cuja área abrange o Mato Grosso do Sul, o Paraná, a Argentina e o Uruguai?",
            alternativas: ["Aquífero Alter do Chão", "Aquífero Urucuia", "Aquífero Guarani", "Aquífero Nubiano"],
            correta: 2 
        }, 
 {
            pergunta: "Quem é responsável por fiscalizar as contas do ICMBio, autarquia federal conhecida por gerir os parques nacionais?",
            alternativas: ["O Tribunal de Contas do Estado onde se encontra o parque", "O Ministério da Fazenda", "O Tribunal de Contas da União", "Secretaria do Meio Ambiente do estado onde se encontra o parque"],
            correta: 2
             
        },  {
            pergunta: "Pico mais alto do Brasil, localiza-se no maior estado do país:",
            alternativas: ["Pico da Neblina", "Monte Roraima", "Alto do Barbado", "Pico das Agulhas Negras"],
            correta: 0
           
        },  {
            pergunta: "Em qual estado ocorre o Festival Folclórico de Parintins, conhecido pela disputa entre os bois-bumbás Garantido e Caprichoso?",
            alternativas: ["Pará", "Amazonas", "Tocantins", "Maranhão"],
            correta: 1

        },  {
            pergunta: "Local mais ocidental do país, integrou-se ao Brasil oficialmente como estado somente em 1962:",
            alternativas: ["Rondônia", "Amapá", "Acre", "Roraima"],
            correta: 2
           
        },  {
            pergunta: "Principal evento cultural de Cruzeiro do Sul, no Acre, é famoso por reunir gastronomia com música, agricultura e exposições:",
            alternativas: ["Carnaval", "Festival da Farinha", "Festival Folclórico de Parintins", "Micareta de Feira"],
            correta: 1
            
        },  {
            pergunta: "Qual é a capital do estado de Rondônia, fundada em 1914?",
            alternativas: ["Roraima", "Vilhena", "Porto Velho", "Rio Branco"],
            correta: 2
        
        },  {
            pergunta: "Figura histórica brasileira, o estado de Rondônia foi nomeado em sua homenagem:",
            alternativas: ["Dom Pedro II", "José Joaquim Seabra", "Marechal Cândido Rondon", "Chico Mendes"],
            correta: 2
        },  {
            pergunta: "Capital do estado do Amapá, famosa por ser cortada pela Linha do Equador e banhada pelo Rio Amazonas:",
            alternativas: ["Porto Velho", "Amapá", "Macapá", "Porto Grande"],
            correta: 2
           
        },  {
            pergunta: "Linha imaginária horizontal, divide o planeta Terra entre norte e sul, e cruza o monumento do Marco Zero, no Macapá:",
            alternativas: ["Trópico de Câncer", "Trópico de Capricórnio", "Meridiano de Greenwich", "Linha do Equador"],
            correta: 3
            
        },  {
            pergunta: "Estado do Norte do Brasil, abriga o monte que inspirou o autor britânico Sir Arthur Conan Doyle a escrever “O Mundo Perdido”:",
            alternativas: ["Roraima", "Amapá", "Amazonas", "Pará"],
            correta: 0
           
        },  {
            pergunta: "Qual a capital do estado de Roraima, conhecida por ser a única do Brasil a se localizar totalmente acima da Linha do Equador?",
            alternativas: ["Belo Horizonte", "Boa Vista", "Rondônia", "Alto Alegre"],
            correta: 1
            
        },  {
            pergunta: "Qual é o estado mais novo do Brasil, criado em 1988, que abriga a maior ilha fluvial do mundo?",
            alternativas: ["Acre", "Maranhão", "Pará", "Tocantins"],
            correta: 3
          
        },  {
            pergunta: "Maior parque estadual do Tocantins, é famoso por suas dunas de areias douradas, fervedouros e serras:",
            alternativas: ["Parque Estadual do Jalapão", "Parque Nacional do Araguaia", "Parque Estadual do Lajeado", "Parque Nacional das Nascentes do Parnaíba"],
            correta: 0
          
        },  {
            pergunta: "Qual é o prato típico do Pará, servido com jambu e baseado em um caldo de tucupi com camarão?",
            alternativas: ["Pato no Tucupi", "Vatapá", "Maniçoba", "Tacacá"],
            correta: 3
             
        },  {
            pergunta: "Ilha na foz do Rio Amazonas, famosa por ter a única polícia montada em búfalos do mundo:",
            alternativas: ["Ilha de Paquetá", "Ilha do Governador", "Ilha do Bananal", "Ilha de Marajó"],
            correta: 3
            
        },  {
            pergunta: "Qual é o pico localizado no Rio Grande do Norte, conhecido por ser o único vulcão extinto do Brasil que mantém sua forma?",
            alternativas: ["Pico da Neblina", "Serra da Mantiqueira", "Monte Roraima", "Pico do Cabugi"],
            correta: 3
        },  {
            pergunta: "Qual estado é o maior produtor de petróleo terrestre do Brasil?",
            alternativas: ["Rio de Janeiro", "Espírito Santo", "Rio Grande do Norte", "Bahia"],
            correta: 2

        },  {
            pergunta: "Em qual estado fica o Parque Nacional Serra da Capivara, considerado Patrimônio Mundial pela Unesco, conhecido por seus fósseis e pinturas rupestres?",
            alternativas: ["Sergipe", "Alagoas", "Piauí", "Ceará"],
            correta: 2
         
        },  {
            pergunta: "Qual desses prestigiados escritores brasileiros não é nascido no Ceará?",
            alternativas: ["José de Alencar", "Rachel de Queiroz", "Adolfo Caminha", "Machado de Assis"],
            correta: 3
           
        },  {
            pergunta: "Qual o estado natal de Antônio Conselheiro, figura histórica conhecida por fundar a comunidade de Canudos, no interior da Bahia?",
            alternativas: ["Alagoas", "Bahia", "Ceará", "Paraíba"],
            correta: 2
            
        },  {
            pergunta: "Escritor, poeta e dramaturgo brasileiro, nascido em João Pessoa, escreveu “O Auto da Compadecida”:",
            alternativas: ["Ariano Suassuna", "Dias Gomes", "Luís da Câmara Cascudo", "Jorge Amado"],
            correta: 0
            
        },  {
            pergunta: "Educador e filósofo pernambucano, desenvolveu um método inovador para a educação de adultos, sendo homenageado internacionalmente:",
            alternativas: ["Anísio Teixeira", "Milton Santos", "Paulo Freire", "Darcy Ribeiro"],
            correta: 2
            
        },  {
            pergunta: "O arquipélago de Fernando de Noronha, conhecido por suas riquezas naturais, faz parte de qual estado?",
            alternativas: ["Pernambuco", "Alagoas", "Piauí", "Ceará"],
            correta: 0
            
        },  {
            pergunta: "Em qual estado se localizava o Quilombo dos Palmares, o maior do Brasil?",
            alternativas: ["Alagoas", "Bahia", "Piauí", "Minas Gerais"],
            correta: 0
            
        },  {
            pergunta: "Quem foi o primeiro presidente do Brasil na República Velha?",
            alternativas: ["Marechal Deodoro da Fonseca", "Marechal Floriano Peixoto", "Getúlio Vargas", "Juscelino Kubitschek"],
            correta: 0
            
        },  {
            pergunta: "Entre quais estados fica a foz do Rio São Francisco?",
            alternativas: ["Bahia e Sergipe", "Alagoas e Pernambuco", "Bahia e Alagoas", "Sergipe e Alagoas"],
            correta: 3
           
        },  {
            pergunta: "Em qual estado do país ficam as praias com maior radioatividade natural?",
            alternativas: ["Bahia", "Rio de Janeiro", "São Paulo", "Espírito Santo"],
            correta: 3
            
        },  {
            pergunta: "Quais são as três capitais do Brasil cujos territórios abrangem ilhas?",
            alternativas: ["Vitória, Salvador e Belém", "São Luís, Rio de Janeiro e São Paulo", "São Luís, Florianópolis e Vitória", "Marajó, São Luís e Florianópolis"],
            correta: 2
           
        },  {
            pergunta: "Em qual estado se localiza a nascente do Rio São Francisco?",
            alternativas: ["Bahia", "Mato Grosso", "Minas Gerais", "Goiás"],
            correta: 2
            
        }, 
{
            pergunta: "Qual a iguaria típica do estado de Minas Gerais, difundida em todo o Brasil, feita com polvilho e queijo?",
            alternativas: ["Canjica", "Vatapá", "Pão de Queijo", "Ginga com tapioca"],
            correta: 2
            
        },{
            pergunta: "No topo de qual morro do Rio de Janeiro fica o monumento do Cristo Redentor?",
            alternativas: ["Pão de Açúcar", "Pico da Bandeira", "Morro do Alemão", "Corcovado"],
            correta: 3
            
        },{
            pergunta: "Importante pintor(a) brasileiro(a), teve  grande influência no modernismo. É autor(a) das obras “A Boba” e “A Estudante”:",
            alternativas: ["Anita Malfatti", "Romero Britto", "Oswald de Andrade", "Tarsila do Amaral"],
            correta: 0
            
        },{
            pergunta: "Cartunista brasileiro, criou “A Turma da Mônica” e a “Turma da Mata”:",
            alternativas: ["Antônio Cedraz", "Mauricio de Sousa", "Laerte", "Angeli"],
            correta: 1
            
        },{
            pergunta: "Qual país da América Latina faz fronteira com o estado de Mato Grosso?",
            alternativas: ["Bolívia", "Equador", "Peru", "Paraguai"],
            correta: 0
            
        },{
            pergunta: "Em qual estado se localiza o Parque Nacional da Chapada dos Guimarães, famoso por sua fauna?",
            alternativas: ["Mato Grosso", "Goiás", "Minas Gerais", "Mato Grosso do Sul"],
            correta: 0
            
        },{
            pergunta: "Em qual estado fica o Parque Nacional da Serra da Bodoquena, famoso por seus rios de águas cristalinas?",
            alternativas: ["Mato Grosso", "Maranhão", "São Paulo", "Mato Grosso do Sul"],
            correta: 3
            
        },{
            pergunta: "Qual rio é considerado como o principal do Pantanal?",
            alternativas: ["Rio São Francisco", "Rio Amazonas", "Rio de Contas", "Rio Paraguai"],
            correta: 3
            
        },{
            pergunta: "Qual órgão é responsável por auditar as contas do Parque Nacional da Chapada dos Veadeiros, localizado em Goiás?",
            alternativas: ["Tribunal de Contas do Estado de Goiás (TCE-GO)", "Tribunal de Contas dos Municípios do Estado de Goiás (TCM-GO)", "Ministério da Fazenda", "Tribunal de Contas da União (TCU)"],
            correta: 3
            
        },{
            pergunta: "Qual o bioma predominante no estado de Goiás?",
            alternativas: ["Caatinga", "Mata Atlântica", "Cerrado", "Pampa"],
            correta: 2
            
        },{
            pergunta: "Qual Unidade Federativa do Brasil não possui municípios?",
            alternativas: ["Distrito Federal", "Amapá", "Goiás", "Minas Gerais"],
            correta: 0
            
        },{
            pergunta: "Qual o formato do Plano Piloto de Brasília, elaborado pelo arquiteto Lúcio Costa?",
            alternativas: ["Círculo", "Estrela", "Avião", "Lua"],
            correta: 2
            
        },{
            pergunta: "Qual o nome popular da usina hidrelétrica localizada na divisa do Paraná com o Paraguai?",
            alternativas: ["Chesf Paulo Afonso", "Três Gargantas", "Itaipu", "Itatiaia"],
            correta: 2
            
        },{
            pergunta: "Qual é a árvore ameaçada de extinção, tipicamente encontrada na região sul do Brasil, que é considerada símbolo do Paraná?",
            alternativas: ["Araucária", "Jabuticabeira", "Umbuzeiro", "Pequizeiro"],
            correta: 0
            
        },{
            pergunta: "Qual o nome das estruturas encontradas na costa brasileira, compostas principalmente por conchas, famosas por sua importância arqueológica e presentes na Ilha de Santa Catarina?",
            alternativas: ["Pirâmides", "Sambaquis", "Geoglifos", "Megalitos"],
            correta: 1
            
        },{
            pergunta: "Qual o nome do parque localizado na Penha, em Santa Catarina, fundado por um publicitário cujo personagem, um cowboy, se popularizou no país?",
            alternativas: ["Hopi Hari", "Beach Park", "Beto Carreiro World", "Magic Park"],
            correta: 2
            
        },{
            pergunta: "Qual o gentílico utilizado para se referir aos habitantes do Rio Grande do Sul?",
            alternativas: ["Barriga-Verde", "Gaúcho", "Potiguar", "Capixaba"],
            correta: 1
            
        },{
            pergunta: "Quem foi a revolucionária brasileira conhecida como a “Heroína dos Dois Mundos” após participar na Revolução Farroupilha e na unificação da Itália?",
            alternativas: ["Anita Malfatti", "Maria Quitéria", "Ana Néri", "Anita Garibaldi"],
            correta: 3
            
        },{
            pergunta: "Qual o nome do livro publicado por Carolina Maria de Jesus, em 1960, que foi um sucesso de vendas e narrava a experiência dela como moradora de São Paulo?",
            alternativas: ["Quarto de Despejo", "Olhos D’Água", "O Avesso da Pele", "Clara dos Anjos"],
            correta: 0
            
        },{
            pergunta: "Importante ativista brasileiro(a) nascido(a) no Acre, lutou pela preservação ambiental da Amazônia, tendo sido(a) homenageado(a) em uma canção de Luiz Gonzaga:",
            alternativas: ["Dorothy Stang", "Chico Mendes", "Sônia Guajajara", "Aponema Meireles"],
            correta: 1
            
        },
        
        //////////VIDA SELVAGEM////////////
        {
            pergunta: "Qual desses animais é uma ave típica de manguezais, tem bico curvado e é famosa por suas penas vermelhas?",
            alternativas: ["Garça", "Coruja", "Guará", "Calopsita"],
            correta: 2
            
        },{
            pergunta: "Animal conhecido como “O maior felino das Américas”, ainda pode ser encontrado em algumas reservas de Mata Atlântica:",
            alternativas: ["Lobo-guará", "Gato-mourisco", "Onça-pintada", "Jaguatirica"],
            correta: 2
            
        },{
            pergunta: "Espécie de ave nativa, inspirou uma música de Luiz Gonzaga e pode ser encontrada na Caatinga:",
            alternativas: ["Pomba-asa-branca", "Gavião", "Perdiz", "Bem-te-vi"],
            correta: 0
            
        },{
            pergunta: "Qual desses animais é um mamífero, conhecido por um focinho alongado e uma longa língua, que utiliza para capturar formigas e cupins?",
            alternativas: ["Papa-mosca", "Tamanduá-Bandeira", "Preá", "Garça"],
            correta: 1
            
        },{
            pergunta: "Réptil muito comum em zonas de mata, costuma viver na copa das árvores e se alimenta principalmente de folhas.",
            alternativas: ["Jabuti", "Bicho-preguiça", "Lagartixa", "Iguana"],
            correta: 3
            
        },{
            pergunta: "Qual planta, segundo uma famosa canção de Luiz Gonzaga, tem uma florada que indica a chegada de chuva no sertão?",
            alternativas: ["Goiabeira", "Xique-xique", "Inhame", "Mandacaru"],
            correta: 3
            
        },{
            pergunta: "Qual desses peixes é uma espécie invasora, conhecida por causar danos ao litoral brasileiro?",
            alternativas: ["Peixe-Leão", "Peixe-Vermelho", "Robalo", "Tucunaré"],
            correta: 0
            
        },{
            pergunta: "Qual desses biomas NÃO existe na Bahia?",
            alternativas: ["Cerrado", "Mata Atlântica", "Pampa", "Caatinga"],
            correta: 2
            
        },{
            pergunta: "Qual dessas frutas é nativa do Brasil?",
            alternativas: ["Banana", "Melão", "Pitanga", "Limão"],
            correta: 2
            
        },{
            pergunta: "Primeiro parque nacional marinho do Brasil, fica no sul da Bahia e é uma das maiores formações de corais:",
            alternativas: ["Baía de Todos-os-Santos", "Costa dos Coqueiros", "Península de Maraú", "Parque Nacional Marinho dos Abrolhos"],
            correta: 3
            
        },{
            pergunta: "Qual o nome do ponto mais alto do Nordeste, localizado na Chapada Diamantina?",
            alternativas: ["Pico do Barbado", "Pico da Neblina", "Pico da Bandeira", "Monte Roraima"],
            correta: 0
            
        },{
            pergunta: "Maior rio totalmente brasileiro, é apelidado de “Velho Chico”:",
            alternativas: ["Rio Amazonas", "Rio São Francisco", "Rio Paraná", "Rio Paraguaçu"],
            correta: 1
            
        },{
            pergunta: "Qual desses animais é um réptil marinho que escolhe as praias como local de desova?",
            alternativas: ["Jabuti-piranga", "Jacaré de papo amarelo", "Tartaruga-verde", "Sucuri"],
            correta: 2
            
        },{
            pergunta: "Grande rio baiano, suas águas foram represadas pela Usina Hidrelétrica de Pedra do Cavalo e abastecem Salvador e sua região metropolitana:",
            alternativas: ["Rio de Contas", "Rio Paraguaçu", "Rio São Francisco", "Rio Jacuípe"],
            correta: 1
            
        },{
            pergunta: "Qual desses órgãos é responsável por executar ações, programas e políticas relacionadas ao Meio Ambiente, Recursos Hídricos e Proteção à Biodiversidade na Bahia?",
            alternativas: ["INEMA - Instituto do Meio Ambiente e Recursos Hídricos", "SAEB - Secretaria da Administração", "SEFAZ - Secretaria da Fazenda", "IBAMA - Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis"],
            correta: 0
            
        },{
            pergunta: "Qual cidade da Bahia é famosa por sua produção de ouro, datada desde o século 18?",
            alternativas: ["Caetité", "Salvador", "Jacobina", "Juazeiro"],
            correta: 2
            
        },{
            pergunta: "Qual é o plano estadual responsável por identificar espécies ameaçadas de extinção no estado da Bahia, conservar ecossistemas e habitats e prevenir a perda da diversidade ambiental?",
            alternativas: ["PEPB - Plano Estadual de Proteção da Biodiversidade", "PAPA - Plano Americano de Proteção Ambiental", "SEIA - Sistema Estadual de Informações Ambientais", "PEPDEC - Política Estadual de Proteção e Defesa Civil"],
            correta: 0
            
        },{
            pergunta: "Qual o prazo de elaboração de um Plano de Manejo pelas unidades de conservação ambiental?",
            alternativas: ["1 ano", "3 anos", "5 anos", "10 anos"],
            correta: 2
            
        },{
            pergunta: "Qual dessas etapas de um ciclo de políticas públicas estaduais NÃO está no escopo do TCE?",
            alternativas: ["Formação", "Implementação", "Monitoramento", "Avaliação"],
            correta: 0
            
        },{
            pergunta: "Em quais regiões hidrográficas nacionais a Bahia está inserida?",
            alternativas: ["Bacia do Atlântico Nordeste Oriental e Ocidental", "Bacia do Atlântico Sul e Bacia do Nordeste", "Bacia do São Francisco e Bacia do Atlântico Leste", "Bacia do São Francisco e Bacia do Atlântico Nordeste"],
            correta: 2
            
        },{
            pergunta: "Qual o nome da barragem localizada no Rio Paraguaçu, na cidade de Cachoeira, responsável por abastecer cerca de 60% da água consumida em Salvador e região metropolitana?",
            alternativas: ["Baixa da Égua", "Pedra do Bode", "Alto do Cabrito", "Pedra do Cavalo"],
            correta: 3
            
        },{
            pergunta: "Quem pode fazer uma denúncia de crime ambiental?",
            alternativas: ["Somente servidores públicos", "Somente pessoas afetadas", "Somente pesquisadores", "Toda e qualquer pessoa"],
            correta: 3
            
        },{
            pergunta: "Quantas Bacias Hidrógraficas da Bahia são compartilhadas com outros estados?",
            alternativas: ["2", "5", "9", "12"],
            correta: 2
            
        },{
            pergunta: "Qual é o principal objetivo da Política Estadual de Proteção e Defesa Civil (PEPDEC)?",
            alternativas: ["Arrecadar impostos estaduais", "Capacitar policiais e outros membros da Secretaria de Segurança Pública", "Promover ações de prevenção e mitigação, voltadas à proteção contra desastres", "Prevenir e combater o crime organizado"],
            correta: 2
            
        },{
            pergunta: "Onde foi criado o Conselho Estadual de Proteção e Defesa Civil (CEPDEC)?",
            alternativas: ["Na Secretaria da Fazenda, junto com o secretário", "No Ministério Público, em conjunto com o procurador-geral", "Na Assembleia Legislativa, em conjunto com o governador do estado", "No Instituto do Meio Ambiente e Recursos Hídricos, em conjunto com o diretor-geral"],
            correta: 2
            
        },{
            pergunta: "Como podem ser feitas consultas sobre qualidade, disponibilidade, uso e conservação de recursos ambientais, como a água?",
            alternativas: ["Através da plataforma do Sistema Estadual de Informações Ambientais (SEIA)", "Pela Ouvidoria da Polícia Militar Ambiental", "Pelo site do Tribunal de Contas do Estado", "Através de visita ao Conselho de Segurança Pública"],
            correta: 0
            
        },{
            pergunta: "No Estado da Bahia, qual desses animais tem proteção legal especial por ser silvestre?",
            alternativas: ["Peixe-leão", "Cavalo", "Ouriço-caxeiro", "Gato-doméstico"],
            correta: 2
            
        },{
            pergunta: "Quais dessas cidades baianas são conhecidas pela produção de esmeraldas?",
            alternativas: ["Pindobaçu e Campo Formoso", "Jacobina e Itaitu", "Morro do Chapéu e Campinas", "Xique-Xique e Ibotirama"],
            correta: 0
            
        },{
            pergunta: "Quantos municípios costeiros a Bahia tem?",
            alternativas: ["10", "22", "53", "124"],
            correta: 2
            
        },{
            pergunta: "Quem deverá implementar a Política Estadual de Proteção e Defesa Civil (PEPDEC)?",
            alternativas: ["A Secretaria de Segurança Pública", "O Estado da Bahia, em conjunto com os municípios", "O Brasil inteiro", "O Tribunal de Contas do Estado da Bahia"],
            correta: 1
            
        },{
            pergunta: "Qual dessas atitudes não é um exemplo de ação prevista na Política Estadual de Meio Ambiente e Proteção à Diversidade?",
            alternativas: ["Educação ambiental nas escolas", "Uso de energia solar nas sedes de instituições", "Ignorar povos de comunidades tradicionais no planejamento das políticas ambientais", "Incentivo fiscal para empresas que mantenham floresta nativa em seus terrenos"],
            correta: 2
            
        },{
            pergunta: "Qual princípio da Política Estadual de Meio Ambiente e de Proteção à Diversidade visa evitar danos ao meio ambiente antes que aconteçam?",
            alternativas: ["Prevenção e precaução", "Princípio da isonomia", "Princípio de voto direto, secreto e universal", "Princípio de uso exclusivo dos recursos pelo Estado"],
            correta: 0
            
        },{
            pergunta: "Faz parte dos objetivos do Zoneamento Ambiental, presente na Política Estadual de Meio Ambiente e de Proteção à Diversidade:",
            alternativas: ["Permitir ocupação de terras sem planejamento", "Eliminar participação da sociedade nas políticas públicas", "Aumentar o valor comercial dos terrenos ocupados", "Promover uso racional de recursos ambientais"],
            correta: 3
            
        },{
            pergunta: "Impedir ou dificultar uma fiscalização ambiental pode ser considerada o quê?",
            alternativas: ["Um direito do empreendedor", "Uma forma de garantir licenciamento", "Uma infração administrativa", "Uma prática sem importância"],
            correta: 2
            
        },{
            pergunta: "Qual dessas ações é um exemplo de gestão correta de resíduos sólidos?",
            alternativas: ["Realizar a queima de lixo em matagais", "Descartar lixo no oceano", "Picotar e misturar todas as embalagens", "Separar e disponibilizar o lixo adequadamente"],
            correta: 3
            
        },{
            pergunta: "Quem é responsável pelo destino final de poluentes gerados por uma fábrica?",
            alternativas: ["A própria empresa geradora", "Os moradores próximos", "A prefeitura do município", "O Tribunal de Contas do Estado"],
            correta: 0
            
        },{
            pergunta: "Segundo a Política Estadual de Meio Ambiente e de Proteção à Diversidade, quem deve ser comunicado imediatamente em caso de vazamento acidental de produtos tóxicos no meio ambiente?",
            alternativas: ["A imprensa local", "A delegacia de polícia", "O órgão ambiental que gerou a licença", "A prefeitura local"],
            correta: 2
            
        },{
            pergunta: "Qual dessas plantas é uma palmeira endêmica do estado da Bahia, Sergipe e Alagoas, já tendo sido considerada como vulnerável de risco de extinção?",
            alternativas: ["Coqueiro", "Ipê-Amarelo", "Piaçava", "Pau-Brasil"],
            correta: 2
            
        },{
            pergunta: "De quanto em quanto tempo devem ser feitas revisões do Plano Estadual de Mudança de Clima?",
            alternativas: ["Ao menos a cada 2 anos", "Ao menos a cada 5 anos", "Ao menos a cada 7 anos", "Ao menos a cada 10 anos"],
            correta: 0
            
        },{
            pergunta: "Quem estabelece os padrões de qualidade ambiental e de controle de poluentes?",
            alternativas: ["Exclusivamente as próprias empresas", "Somente as prefeituras", "A população local", "O CEPRAM ou, na sua ausência, o INEMA"],
            correta: 3
            
        },{
            pergunta: "Segundo a lei da Política Estadual de Recursos Hídricos da Bahia, em situações de falta de água, qual uso tem prioridade?",
            alternativas: ["Irrigação de plantações", "Abastecimento das indústrias", "Consumo Humano", "Atividades comerciais"],
            correta: 2
            
        },{
            pergunta: "Qual divisão territorial é usada para gerenciar e planejar recursos hídricos?",
            alternativas: ["Municípios", "Regiões Metropolitanas", "Biomas", "Bacias Hidrográficas"],
            correta: 3
            
        },{
            pergunta: "Qual região recebe prioridade em ações de garantia de disponibilidade de água?",
            alternativas: ["Região Litorânea", "Polo industrial", "Grandes Cidades", "Região Semiárida"],
            correta: 3
            
        },{
            pergunta: "Quem deve aprovar o Plano Estadual de Recursos Hídricos (PERH)?",
            alternativas: ["O Tribunal de Contas do Estado da Bahia", "O Conselho Estadual de Recursos Hídricos (CONERH)", "A Assembleia Legislativa", "O IBAMA"],
            correta: 1
            
        },{
            pergunta: "Para que serve a classificação de fontes de água estaduais?",
            alternativas: ["Definir níveis de poluição e priorizar políticas públicas", "Permitir a cobrança de valores maiores pelo consumo da água", "Impedir a utilização dos rios pela população", "Determinar os proprietários de lagos, poços e açudes"],
            correta: 0
            
        },{
            pergunta: "Quem realiza as auditorias do Fundo Estadual de Recursos Hídricos?",
            alternativas: ["A Secretaria da Fazenda e a Embasa", "A Assembleia Legislativa e a Secretaria de Infraestrutura Hídrica e Saneamento", "O Conselho Estadual de Recursos Hídricos (CONERH) e o Tribunal de Contas da União", "O controle interno da Administração Pública e o Tribunal de Contas do Estado"],
            correta: 3
            
        },{
            pergunta: "Para que serve o pagamento de uma Compensação Ambiental?",
            alternativas: ["Para que as empresas possam comprar o direito de poluir", "Para compensar danos causados por empreendimentos ao meio ambiente", "Para financiar ações da Secretaria da Fazenda", "Para evitar a proteção ambiental"],
            correta: 1
            
        },{
            pergunta: "Quem deve fazer a aprovação de alterações no Plano de Bacia Hidrográfica?",
            alternativas: ["O respectivo Comitê de Bacia Hidrográfica", "O Tribunal de Contas do Estado", "A Secretaria da Fazenda", "O Governador"],
            correta: 0
            
        },{
            pergunta: "Qual dessas não é uma atribuição do Conselho Estadual de Recursos Hídricos?",
            alternativas: ["Estabelecer prazos, metas e condições para que o esgoto seja tratado antes de seu lançamento", "Enquadrar e reduzir os níveis de poluição nas águas", "Realizar a cobrança de uso de recursos hídricos", "Impedir o acesso da população às praias"],
            correta: 3
            
        }, {
            pergunta: "Quem é responsável por recuperar áreas degradadas por poluição ambiental?",
            alternativas: ["A população local", "A Assembleia Legislativa", "O gerador da poluição", "O Ibama"],
            correta: 2
            
        },
];
