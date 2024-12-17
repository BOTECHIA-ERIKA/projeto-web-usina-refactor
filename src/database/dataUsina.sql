CREATE TABLE paises(
     iso VARCHAR(2) PRIMARY KEY UNIQUE NOT NULL,
     nome VARCHAR(80) NOT NULL
);

INSERT INTO paises(iso, nome) VALUES 
('AF', 'Afghanistan'),
('AX', 'Aland Islands'),
('AL', 'Albania'),
('DZ', 'Algeria'),
('AS', 'American Samoa'),
('AD', 'Andorra'),
('AO', 'Angola'),
('AI', 'Anguilla'),
('AQ', 'Antarctica'),
('AG', 'Antigua and Barbuda'),
('AR', 'Argentina'),
('AM', 'Armenia'),
('AW', 'Aruba'),
('AU', 'Australia'),
('AT', 'Austria'),
('AZ', 'Azerbaijan'),
('BS', 'Bahamas'),
('BH', 'Bahrain'),
('BD', 'Bangladesh'),
('BB', 'Barbados'),
('BY', 'Belarus'),
('BE', 'Belgium'),
('BZ', 'Belize'),
('BJ', 'Benin'),
('BM', 'Bermuda'),
('BT', 'Bhutan'),
('BO', 'Bolivia'),
('BA', 'Bosnia and Herzegovina'),
('BW', 'Botswana'),
('BV', 'Bouvet Island'),
('BR', 'Brazil'),
('IO', 'British Indian Ocean Territory'),
('BN', 'Brunei Darussalam'),
('BG', 'Bulgaria'),
('BF', 'Burkina Faso'),
('BI', 'Burundi'),
('KH', 'Cambodia'),
('CM', 'Cameroon'),
('CA', 'Canada'),
('CV', 'Cape Verde'),
('KY', 'Cayman Islands'),
('CF', 'Central African Republic'),
('TD', 'Chad'),
('CL', 'Chile'),
('CN', 'China'),
('CX', 'Christmas Island'),
('CC', 'Cocos (Keeling) Islands'),
('CO', 'Colombia'),
('KM', 'Comoros'),
('CG', 'Congo'),
('CD', 'Congo, The Democratic Republic of the'),
('CK', 'Cook Islands'),
('CR', 'Costa Rica'),
('CI', 'Cote D"Ivoire'),
('HR', 'Croatia'),
('CU', 'Cuba'),
('CY', 'Cyprus'),
('CZ', 'Czech Republic'),
('DK', 'Denmark'),
('DJ', 'Djibouti'),
('DM', 'Dominica'),
('DO', 'Dominican Republic'),
('EC', 'Ecuador'),
('EG', 'Egypt'),
('SV', 'El Salvador'),
('GQ', 'Equatorial Guinea'),
('ER', 'Eritrea'),
('EE', 'Estonia'),
('ET', 'Ethiopia'),
('FK', 'Falkland Islands (Malvinas)'),
('FO', 'Faroe Islands'),
('FJ', 'Fiji'),
('FI', 'Finland'),
('FR', 'France'),
('GF', 'French Guiana'),
('PF', 'French Polynesia'),
('TF', 'French Southern Territories'),
('GA', 'Gabon'),
('GM', 'Gambia'),
('GE', 'Georgia'),
('DE', 'Germany'),
('GH', 'Ghana'),
('GI', 'Gibraltar'),
('GR', 'Greece'),
('GL', 'Greenland'),
('GD', 'Grenada'),
('GP', 'Guadeloupe'),
('GU', 'Guam'),
('GT', 'Guatemala'),
('GG', 'Guernsey'),
('GN', 'Guinea'),
('GW', 'Guinea-Bissau'),
('GY', 'Guyana'),
('HT', 'Haiti'),
('HM', 'Heard Island and McDonald Islands'),
('VA', 'Holy See (Vatican City State)'),
('HN', 'Honduras'),
('HK', 'Hong Kong'),
('HU', 'Hungary'),
('IS', 'Iceland'),
('IN', 'India'),
('ID', 'Indonesia'),
('IR', 'Iran, Islamic Republic of'),
('IQ', 'Iraq'),
('IE', 'Ireland'),
('IM', 'Isle of Man'),
('IL', 'Israel'),
('IT', 'Italy'),
('JM', 'Jamaica'),
('JP', 'Japan'),
('JE', 'Jersey'),
('JO', 'Jordan'),
('KZ', 'Kazakhstan'),
('KE', 'Kenya'),
('KI', 'Kiribati'),
('KP', 'Korea, Democratic People"S Republic of'),
('KR', 'Korea, Republic of'),
('KW', 'Kuwait'),
('KG', 'Kyrgyzstan'),
('LA', 'Lao People"S Democratic Republic'),
('LV', 'Latvia'),
('LB', 'Lebanon'),
('LS', 'Lesotho'),
('LR', 'Liberia'),
('LY', 'Libyan Arab Jamahiriya'),
('LI', 'Liechtenstein'),
('LT', 'Lithuania'),
('LU', 'Luxembourg'),
('MO', 'Macao'),
('MK', 'Macedonia, The Former Yugoslav Republic of'),
('MG', 'Madagascar'),
('MW', 'Malawi'),
('MY', 'Malaysia'),
('MV', 'Maldives'),
('ML', 'Mali'),
('MT', 'Malta'),
('MH', 'Marshall Islands'),
('MQ', 'Martinique'),
('MR', 'Mauritania'),
('MU', 'Mauritius'),
('YT', 'Mayotte'),
('MX', 'Mexico'),
('FM', 'Micronesia, Federated estados of'),
('MD', 'Moldova, Republic of'),
('MC', 'Monaco'),
('MN', 'Mongolia'),
('ME', 'Montenegro'),
('MS', 'Montserrat'),
('MA', 'Morocco'),
('MZ', 'Mozambique'),
('MM', 'Myanmar'),
('NA', 'Namibia'),
('NR', 'Nauru'),
('NP', 'Nepal'),
('NL', 'Netherlands'),
('AN', 'Netherlands Antilles'),
('NC', 'New Caledonia'),
('NZ', 'New Zealand'),
('NI', 'Nicaragua'),
('NE', 'Niger'),
('NG', 'Nigeria'),
('NU', 'Niue'),
('NF', 'Norfolk Island'),
('MP', 'Northern Mariana Islands'),
('NO', 'Norway'),
('OM', 'Oman'),
('PK', 'Pakistan'),
('PW', 'Palau'),
('PS', 'Palestinian Territory, Occupied'),
('PA', 'Panama'),
('PG', 'Papua New Guinea'),
('PY', 'Paraguay'),
('PE', 'Peru'),
('PH', 'Philippines'),
('PN', 'Pitcairn'),
('PL', 'Poland'),
('PT', 'Portugal'),
('PR', 'Puerto Rico'),
('QA', 'Qatar'),
('RE', 'Reunion'),
('RO', 'Romania'),
('RU', 'Russian Federation'),
('RW', 'Rwanda'),
('SH', 'Saint Helena'),
('KN', 'Saint Kitts and Nevis'),
('LC', 'Saint Lucia'),
('PM', 'Saint Pierre and Miquelon'),
('VC', 'Saint Vincent and the Grenadines'),
('WS', 'Samoa'),
('SM', 'San Marino'),
('ST', 'Sao Tome and Principe'),
('SA', 'Saudi Arabia'),
('SN', 'Senegal'),
('RS', 'Serbia'),
('SC', 'Seychelles'),
('SL', 'Sierra Leone'),
('SG', 'Singapore'),
('SK', 'Slovakia'),
('SI', 'Slovenia'),
('SB', 'Solomon Islands'),
('SO', 'Somalia'),
('ZA', 'South Africa'),
('GS', 'South Georgia and the South Sandwich Islands'),
('ES', 'Spain'),
('LK', 'Sri Lanka'),
('SD', 'Sudan'),
('SR', 'Suriname'),
('SJ', 'Svalbard and Jan Mayen'),
('SZ', 'Swaziland'),
('SE', 'Sweden'),
('CH', 'Switzerland'),
('SY', 'Syrian Arab Republic'),
('TW', 'Taiwan, Province of China'),
('TJ', 'Tajikistan'),
('TZ', 'Tanzania, United Republic of'),
('TH', 'Thailand'),
('TL', 'Timor-Leste'),
('TG', 'Togo'),
('TK', 'Tokelau'),
('TO', 'Tonga'),
('TT', 'Trinidad and Tobago'),
('TN', 'Tunisia'),
('TR', 'Turkey'),
('TM', 'Turkmenistan'),
('TC', 'Turks and Caicos Islands'),
('TV', 'Tuvalu'),
('UG', 'Uganda'),
('UA', 'Ukraine'),
('AE', 'United Arab Emirates'),
('GB', 'United Kingdom'),
('US', 'United estados'),
('UM', 'United estados Minor Outlying Islands'),
('UY', 'Uruguay'),
('UZ', 'Uzbekistan'),
('VU', 'Vanuatu'),
('VE', 'Venezuela'),
('VN', 'Viet Nam'),
('VG', 'Virgin Islands, British'),
('VI', 'Virgin Islands, U.S.'),
('WF', 'Wallis and Futuna'),
('EH', 'Western Sahara'),
('YE', 'Yemen'),
('ZM', 'Zambia'),
('ZW', 'Zimbabwe');

SELECT * FROM paises;

CREATE TABLE estados (
        UF VARCHAR(2) NOT NULL PRIMARY KEY UNIQUE,
        state VARCHAR(100) NOT NULL UNIQUE,
        ISO_paises VARCHAR(2) NOT NULL,
        FOREIGN KEY (ISO_paises) REFERENCES paises(ISO)
        ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO estados (UF, state, ISO_paises)
VALUES
('AC', 'Acre', 'BR'),
('AL', 'Alagoas', 'BR'),
('AP', 'Amapá', 'BR'),
('AM', 'Amazonas', 'BR'),
('BA', 'Bahia', 'BR'),
('CE', 'Ceará', 'BR'),
('DF', 'Distrito Federal', 'BR'),
('ES', 'Espírito Santo', 'BR'),
('GO', 'Goiás', 'BR'),
('MA', 'Maranhão', 'BR'),
('MT', 'Mato Grosso', 'BR'),
('MS', 'Mato Grosso do Sul', 'BR'),
('MG', 'Minas Gerais', 'BR'),
('PA', 'Pará', 'BR'),
('PB', 'Paraíba', 'BR'),
('PR', 'Paraná', 'BR'),
('PE', 'Pernambuco', 'BR'),
('PI', 'Piauí', 'BR'),
('RJ', 'Rio de Janeiro', 'BR'),
('RN', 'Rio Grande do Norte', 'BR'),
('RS', 'Rio Grande do Sul', 'BR'),
('RO', 'Rondônia', 'BR'),
('RR', 'Roraima', 'BR'),
('SC', 'Santa Catarina', 'BR'),
('SP', 'São Paulo', 'BR'),
('SE', 'Sergipe', 'BR'),
('TO', 'Tocantins', 'BR');

SELECT * FROM estados;

DROP TABLE cidades;

CREATE TABLE cidades (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(100) NOT NULL,
    UF_estados VARCHAR(2) NOT NULL,
    FOREIGN KEY (UF_estados) REFERENCES estados(UF)
    ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO cidades (nome, UF_estados)
VALUES
('São Paulo', 'SP'),
('Campinas', 'SP'),
('Santo André', 'SP'),
('São Bernardo do Campo', 'SP'),
('Osasco', 'SP'),
('Sorocaba', 'SP'),
('Ribeirão Preto', 'SP'),
('São José dos Campos', 'SP'),
('Guarulhos', 'SP'),
('Piracicaba', 'SP'),
('Bauru', 'SP'),
('Santos', 'SP'),
('Jundiaí', 'SP'),
('Mogi das Cruzes', 'SP'),
('Franca', 'SP'),
('Taubaté', 'SP'),
('Barueri', 'SP'),
('Limeira', 'SP'),
('Indaiatuba', 'SP'),
('Araraquara', 'SP'),
('Presidente Prudente', 'SP'),
('São Vicente', 'SP'),
('Diadema', 'SP'),
('Carapicuíba', 'SP'),
('Itaquaquecetuba', 'SP'),
('Suzano', 'SP'),
('Catanduva', 'SP'),
('Atibaia', 'SP'),
('São José do Rio Preto', 'SP'),
('Itu' , 'SP'),
('São Caetano do Sul',  'SP'),
('São Bernardo do Campo', 'SP')
;

SELECT * FROM cidades;

SELECT id FROM cidades WHERE cidades.nome= 'São Paulo';


CREATE TABLE bairros (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    bairro VARCHAR(100) NOT NULL,
    id_cidades INTEGER NOT NULL,
    FOREIGN KEY (id_cidades) REFERENCES cidades(id)
    ON UPDATE CASCADE ON DELETE CASCADE
)


INSERT INTO bairros(bairro, id_cidades) VALUES
('IPIRANGA', 1),
('SACOMÃ', 1),
('CHACARA KLABIN', 1),
('VILA MARIANA', 1),
('HELIOPOLIS', 1),
('CURSINO', 1)
;

SELECT * FROM bairros;

-- COMENTARIO: A TABELA CEP NÃO EXISTE NO ESQUEMA DEVIDO A DETALHES DO CEP PODER SER PUXADO DE API PELO QUE CEP VAI COM LOGRADOUROS;


CREATE TABLE tipos_logradouros(
    codigo VARCHAR(20) NOT NULL PRIMARY KEY UNIQUE,
    tipo_logradouro VARCHAR(100) NOT NULL   
);

INSERT INTO tipos_logradouros (codigo, tipo_logradouro) VALUES
('A', 'Área'),
('AC', 'Acesso'),
('ACA', 'Acampamento'),
('ACL', 'Acesso Local'),
('AD', 'Adro'),
('AE', 'Área Especial'),
('AER', 'Aeroporto'),
('AL', 'Alameda'),
('AMD', 'Avenida Marginal Direita'),
('AME', 'Avenida Marginal Esquerda'),
('AN', 'Anel Viário'),
('ANT', 'Antiga Estrada'),
('ART', 'Artéria'),
('AT', 'Alto'),
('ATL', 'Atalho'),
('A V', 'Área Verde'),
('AV', 'Avenida'),
('AVC', 'Avenida Contorno'),
('AVM', 'Avenida Marginal'),
('AVV', 'Avenida Velha'),
('BAL', 'Balneário'),
('BC', 'Beco'),
('BCO', 'Buraco'),
('BEL', 'Belvedere'),
('BL', 'Bloco'),
('BLO', 'Balão'),
('BLS', 'Blocos'),
('BLV', 'Bulevar'),
('BSQ', 'Bosque'),
('BVD', 'Boulevard'),
('BX', 'Baixa'),
('C', 'Cais'),
('CAL', 'Calçada'),
('CAM', 'Caminho'),
('CAN', 'Canal'),
('CH', 'Chácara'),
('CHA', 'Chapadão'),
('CIC', 'Ciclovia'),
('CIR', 'Circular'),
('CJ', 'Conjunto'),
('CJM', 'Conjunto Mutirão'),
('CMP', 'Complexo Viário'),
('COL', 'Colônia'),
('COM', 'Comunidade'),
('CON', 'Condomínio'),
('COR', 'Corredor'),
('CPO', 'Campo'),
('CRG', 'Córrego'),
('CTN', 'Contorno'),
('DSC', 'Descida'),
('DSV', 'Desvio'),
('DT', 'Distrito'),
('EB', 'Entre Bloco'),
('EIM', 'Estrada Intermunicipal'),
('ENS', 'Enseada'),
('ENT', 'Entrada Particular'),
('EQ', 'Entre Quadra'),
('ESC', 'Escada'),
('ESD', 'Escadaria'),
('ESE', 'Estrada Estadual'),
('ESI', 'Estrada Vicinal'),
('ESL', 'Estrada de Ligação'),
('ESM', 'Estrada Municipal'),
('ESP', 'Esplanada'),
('ESS', 'Estrada de Servidão'),
('EST', 'Estrada'),
('ESV', 'Estrada Velha'),
('ETA', 'Estrada Antiga'),
('ETC', 'Estação'),
('ETD', 'Estádio'),
('ETN', 'Estância'),
('ETP', 'Estrada Particular'),
('ETT', 'Estacionamento'),
('EVA', 'Evangélica'),
('EVD', 'Elevada'),
('EX', 'Eixo Industrial'),
('FAV', 'Favela'),
('FAZ', 'Fazenda'),
('FER', 'Ferrovia'),
('FNT', 'Fonte'),
('FRA', 'Feira'),
('FTE', 'Forte'),
('GAL', 'Galeria'),
('GJA', 'Granja'),
('HAB', 'Núcleo Habitacional'),
('IA', 'Ilha'),
('IND', 'Indeterminado'),
('IOA', 'Ilhota'),
('JD', 'Jardim'),
('JDE', 'Jardinete'),
('LD', 'Ladeira'),
('LGA', 'Lagoa'),
('LGO', 'Lago'),
('LOT', 'Loteamento'),
('LRG', 'Largo'),
('LT', 'Lote'),
('MER', 'Mercado'),
('MNA', 'Marina'),
('MOD', 'Modulo'),
('MRG', 'Projeção'),
('MRO', 'Morro'),
('MTE', 'Monte'),
('NUC', 'Núcleo'),
('NUR', 'Núcleo Rural'),
('OUT', 'Outeiro'),
('PAR', 'Paralela'),
('PAS', 'Passeio'),
('PAT', 'Pátio'),
('PC', 'Praça'),
('PCE', 'Praça de Esportes'),
('PDA', 'Parada'),
('PDO', 'Paradouro'),
('PNT', 'Ponta'),
('PR', 'Praia'),
('PRL', 'Prolongamento'),
('PRM', 'Parque Municipal'),
('PRQ', 'Parque'),
('PRR', 'Parque Residencial'),
('PSA', 'Passarela'),
('PSG', 'Passagem'),
('PSP', 'Passagem de Pedestre'),
('PSS', 'Passagem Subterrânea'),
('PTE', 'Ponte'),
('PTO', 'Porto'),
('Q', 'Quadra'),
('QTA', 'Quinta'),
('QTS', 'Quintas'),
('R', 'Rua'),
('R I', 'Rua Integração'),
('R L', 'Rua de Ligação'),
('R P', 'Rua Particular'),
('R V', 'Rua Velha'),
('RAM', 'Ramal'),
('RCR', 'Recreio'),
('REC', 'Recanto'),
('RER', 'Retiro'),
('RES', 'Residencial'),
('RET', 'Reta'),
('RLA', 'Ruela'),
('RMP', 'Rampa'),
('ROA', 'Rodo Anel'),
('ROD', 'Rodovia'),
('ROT', 'Rotula'),
('RPE', 'Rua de Pedestre'),
('RPR', 'Margem'),
('RTN', 'Retorno'),
('RTT', 'Rotatória'),
('SEG', 'Segunda Avenida'),
('SIT', 'Sitio'),
('SRV', 'Servidão'),
('ST', 'Setor'),
('SUB', 'Subida'),
('TCH', 'Trincheira'),
('TER', 'Terminal'),
('TR', 'Trecho'),
('TRV', 'Trevo'),
('TUN', 'Túnel'),
('TV', 'Travessa'),
('TVP', 'Travessa Particular'),
('TVV', 'Travessa Velha'),
('UNI', 'Unidade'),
('V', 'Via'),
('V C', 'Via Coletora'),
('V L', 'Via Local'),
('VAC', 'Via de Acesso'),
('VAL', 'Vala'),
('VCO', 'Via Costeira'),
('VD', 'Viaduto'),
('V-E', 'Via Expressa'),
('VER', 'Vereda'),
('VEV', 'Via Elevado'),
('VL', 'Vila'),
('VLA', 'Viela'),
('VLE', 'Vale'),
('VLT', 'Via Litorânea'),
('VPE', 'Via de Pedestre'),
('VRT', 'Variante'),
('ZIG', 'Zigue-Zague');

SELECT * FROM tipos_logradouros;

CREATE TABLE tipos_complementos(
    codigo VARCHAR(20) NOT NULL PRIMARY KEY UNIQUE,
    tipo_logradouro VARCHAR(100) NOT NULL   
);

INSERT INTO tipos_complementos (codigo, tipo_logradouro) VALUES
('APTO', 'Apartamento'),
('BL', 'Bloco'),
('CASA', 'Casa'),
('CJ', 'Conjunto'),
('LJ', 'Loja'),
('SIT', 'Sitio'),
('ADR', 'Andar'),
('SL', 'SALA'),
('TR', 'TERREO');

SELECT * FROM tipos_complementos;


CREATE TABLE usuarios (
 id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
 primeiro_nome VARCHAR(200) NOT NULL,
 ultimo_sobrenome VARCHAR(200) NOT NULL,
 username VARCHAR(19) NOT NULL UNIQUE,
 password_hash VARCHAR(120) NOT NULL,
 created_at VARCHAR(20) NOT NULL DEFAULT (DATETIME('NOW')),
 updated_at VARCHAR(20) NOT NULL DEFAULT (DATETIME('NOW')),
 is_active BLOB(1) DEFAULT 1
);

INSERT INTO usuarios (primeiro_nome, ultimo_sobrenome, username, password_hash) VALUES
('ÉRIKA', 'LEITE', '@ERI-BOTECHIA', '$2y$12$bdLG8lGgu2ERjergmZwcb.W6DPqEf.0OE9tzFlor55u6AlGDfjwoa'),
('VERONICA', 'GRAZIANI', '@VEH-GRAZIANI', '$2y$12$bdLG8lGgu2ERjergmZwcb.W6DPqEf.0OE9tzFlor55u6AlGDfjwoa');
SELECT * FROM usuarios;

CREATE TABLE logradouros (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    codigo_tipos_logradouros VARCHAR(20) NOT NULL,
    logradouro VARCHAR(100) NOT NULL,
    codigo_tipos_complementos VARCHAR(20) DEFAULT NULL,
    complemento VARCHAR(100) DEFAULT NULL,
    CEP VARCHAR(15) NOT NULL,
    FOREIGN KEY (codigo_tipos_logradouros) REFERENCES tipos_logradouros(codigo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigo_tipos_complementos) REFERENCES tipos_complementos(codigo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    responsavel VARCHAR(100) NOT NULL,
    user_id INTEGER DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE usuarios(
     id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
     nome_completo VARCHAR(600) NOT NULL,
     username VARCHAR(20) NOT NULL UNIQUE,
     password_hash VARCHAR(120) NOT NULL,
     created_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW'));
     updated_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW'));
);

SELECT * FROM USUARIOS;


CREATE TABLE voluntarios(
    id_usuarios INTEGER NOT NULL,
    codigo INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
    grupo_participante VARCHAR(100) DEFAULT NULL,
    tipo_voluntario VARCHAR(100) DEFAULT NULL,
    is_active BLOB(1) NOT NULL DEFAULT 1,
    created_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    updated_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

SELECT * FROM voluntarios;

DROP TABLE voluntarios;

CREATE TABLE compradores(
    id_usuarios INTEGER NOT NULL,
    codigo INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
    created_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    updated_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);


SELECT * FROM compradores;

CREATE TABLE administradores(
    id_usuarios INTEGER NOT NULL,
    codigo INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
    departamento VARCHAR(100) NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    created_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    updated_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    is_active BLOB(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE
)

SELECT * FROM administradores;


CREATE TABLE api_admin(
   codigo INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
   id_usuarios INT NOT NULL,
   api_key VARCHAR(200) NOT NULL UNIQUE,
   FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
   ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO API_ADMIN(id_usuarios, api_key) VALUES (
 1, '$2y$12$Pr7TJGDFCEtlfFdfRgDaKumM49u5e5j45FzZFWa38ZrGpZlG8GGN'
);


CREATE TABLE profiles(
    id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
    id_usuarios INTEGER,
    codigo_voluntarios INTEGER DEFAULT NULL,
    codigo_compradores INTEGER DEFAULT NULL,
    codigo_administradores INTEGER DEFAULT NULL,
    codigo_api_admin INTEGER DEFAULT NULL,
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigo_voluntarios) REFERENCES voluntarios(codigo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigo_compradores) REFERENCES compradores(codigo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigo_api_admin) REFERENCES api_admin(codigo)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigo_administradores) REFERENCES codigo_administradores(codigo)
    ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE profiles;

INSERT INTO profiles (id_usuarios, codigo_api_admin)VALUES(2,1);
INSERT INTO profiles (id_usuarios)VALUES(2);

SELECT * FROM profiles;

CREATE TABLE telefones(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    codigo_paises VARCHAR(2) NOT NULL,
    codigo_ddd VARCHAR(2) NOT NULL,
    numero_telefone VARCHAR(15) NOT NULL,
    is_whatsapp BLOB(1) NOT NULL DEFAULT 1,
    id_usuarios INTEGER DEFAULT NULL,
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

SELECT * FROM telefones;

INSERT INTO telefones (codigo_paises, codigo_ddd, numero_telefone, id_usuarios) VALUES(
'55', '11', '5511967112604', 1
);

CREATE TABLE emails(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(200) NOT NULL,
    id_usuarios INTEGER DEFAULT NULL,
    is_email_primario BLOB(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (id_usuarios) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
DROP TABLE emails;
INSERT INTO emails(email, id_usuarios)VALUES(
 'veronicagraziani@gmail.com',2
);

SELECT * FROM emails;

CREATE TABLE posts_tipo(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    tipo VARCHAR(200) NOT NULL UNIQUE
)

INSERT INTO posts_tipo (tipo) values ('PRODUTO'),
 ('BLOG'),
 ('EVENTO'),
 ('COMENTARIOS'),
 ('COLABORADORES'),
 ('TICKET')
;

SELECT * FROM posts_tipo;

CREATE TABLE posts (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    codigo VARCHAR(120) NOT NULL UNIQUE,
    id_posts_tipo INTEGER NOT NULL DEFAULT 1,
    posts_reference INTEGER DEFAULT NULL,
    titulo VARCHAR(60) NOT NULL,
    content VARCHAR(140) NOT NULL,
    AUTOR INTEGER NOT NULL,
    created_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    updated_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW')),
    FOREIGN KEY (AUTOR) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_posts_tipo) REFERENCES posts_tipo(id)
    ON UPDATE CASCADE ON DELETE CASCADE ,
    FOREIGN KEY (posts_reference)REFERENCES posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
SELECT * FROM posts
INNER JOIN produto_stock ON posts.id = produto_stock.id_posts
INNER JOIN produto_financeiro ON produto_financeiro.id_post = produto_stock.id_posts
INNER JOIN produto_detalhes ON produto_detalhes.id_post = produto_stock.id_posts;


DROP TABLE posts;


INSERT INTO posts(codigo, id_posts_tipo, titulo, content, autor) VALUES(
'555b8e12-4d5b-4a51-a16d-eb451d5e5ec1', 1, 'RELÓGIO USINA ECO-CULTURAL', 'Lindo relógio de parede feito com material reciclavel', 1 
);



CREATE TABLE likes_dislikes(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    like_or_dislike BLOB(1) NOT NULL DEFAULT 1,
    id_usuarios INTEGER NOT NULL,	
    id_posts INTEGER NOT NULL,
    FOREIGN KEY (id_posts) REFERENCES posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
DROP TABLE likes_dislikes;
SELECT * FROM likes_dislikes;


CREATE TABLE produto_stock (
    id_posts INTEGER NOT NULL,
    localizacao VARCHAR(200) DEFAULT NULL,
    is_unique_size BLOB(1) DEFAULT 0,
    unico INT DEFAULT NULL,
    pp INT DEFAULT NULL,
    m INT DEFAULT NULL,
    g INT DEFAULT NULL,
    gg INT DEFAULT NULL,
    xg INT DEFAULT NULL,
    xxg INT DEFAULT NULL,
    total_estoque INT DEFAULT NULL,
    total_vendido INT DEFAULT NULL,
    is_sold_out BLOB(1) NOT NULL DEFAULT 0,
    created_at VARCHAR DEFAULT (DATETIME('NOW')),
    updated_at VARCHAR DEFAULT (DATETIME('NOW')),
    responsavel INT NOT NULL,
    FOREIGN KEY (id_posts) REFERENCES posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (responsavel) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
DROP TABLE produto_financeiro;
INSERT INTO produto_stock (id_posts, localizacao, is_unique_size, unico, total_estoque, total_vendido, is_sold_out, responsavel)values(
    1, NULL, 1, 10, 10 , 0 , 0, 1
);
SELECT * FROM produto_stock;

CREATE TABLE produto_financeiro(
    id_post INTEGER DEFAULT NULL,
   preco_base DECIMAL(10,2) DEFAULT NULL,	
   desconto_decimal DECIMAL(3,2) DEFAULT NULL,
   responsavel INT NOT NULL,
   CREATED_AT VARCHAR DEFAULT(DATETIME('NOW')),
   UPDATED_AT VARCHAR DEFAULT(DATETIME('NOW')),
    FOREIGN KEY (id_post) REFERENCES posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY (responsavel) REFERENCES users(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
DROP TABLE produto_financeiro;

INSERT INTO produto_financeiro(id_post, preco_base, desconto_decimal, responsavel) VALUES(
   1, 50.00, 0.10, 1
);

SELECT * FROM produto_financeiro;

CREATE TABLE produto_detalhes(
 id_post INTEGER NOT NULL,
 descricao VARCHAR(200) NOT NULL,
 cor VARCHAR(20) NOT NULL DEFAULT "BRANCO", 
 responsavel INT NOT NULL,
 FOREIGN KEY (id_post) REFERENCES posts(id)
 ON UPDATE CASCADE ON DELETE CASCADE,
 FOREIGN KEY (responsavel) REFERENCES users(id)
 ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO produto_detalhes(id_post, descricao, cor, responsavel) VALUES(
    1, 'DECORAÇÃO', 'ORANGE', 1
);

SELECT 


CREATE TABLE eventos_detalhes(
  id_post INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
  horario_inicio VARCHAR(20) NOT NULL,
  horario_termino VARCHAR(20) DEFAULT NULL,
  data_evento VARCHAR(20) NOT NULL,
  local_evento INT NOT NULL ,
  id_usuarios INT NOT NULL,
  FOREIGN KEY (local_evento) REFERENCES logradouros(id)
  ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
  ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_post) REFERENCES posts(id)
  ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE midias;
CREATE TABLE midias (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    id_posts INT DEFAULT NULL,
    id_profiles_avatar INT DEFAULT NULL,
    id_profiles_cover INT DEFAULT NULL,
    url_midia VARCHAR(200) NOT NULL,
    is_youtube BLOB(1) NOT NULL DEFAULT 0,
    is_spotify BLOB(1) NOT NULL DEFAULT 0,
    is_mp3 BLOB(1) NOT NULL DEFAULT 0,
    is_img BLOB(1) NOT NULL DEFAULT 0,
    id_usuarios INT NOT NULL,
    FOREIGN KEY (id_posts) REFERENCES posts(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_profiles_avatar) REFERENCES profiles(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_profiles_cover) REFERENCES profiles(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO midias(id, id_posts, url_midia, is_img, id_usuarios) VALUES(
    1, 1, 'https://i.postimg.cc/Xqv2QVtt/product-1.png', 1, 1
);

SELECT * FROM midias;
-- COMMENT: `SELECT midias.url FROM midias WHERE midias.post_id=${post.id}`;


CREATE TABLE purchase_products(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE
);


CREATE TABLE purchases_products(
  purchases_products_id INTEGER NOT NULL,
  productId INTEGER NOT NULL,
  quantity NOT NULL DEFAULT 1, 
  FOREIGN KEY (purchases_products_id) REFERENCES purchases(id)
  ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (productId) REFERENCES posts(id)
  ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE purchases_shipping(
   purchases_products_id INTEGER NOT NULL,
   delivery_address INTEGER DEFAULT NULL,
   correio_tracking_code VARCHAR(150) DEFAULT NULL,
   delivery_responsable VARCHAR(200) NOT NULL,
   FOREIGN KEY (purchases_products_id) REFERENCES purchases(id)
   ON UPDATE CASCADE ON DELETE CASCADE ,
   FOREIGN KEY (delivery_address) REFERENCES logradouros(id)
   ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE purchases_payment (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE,
    id_purchases_products INTEGER NOT NULL,
    is_credit_card BLOB(1) NOT NULL DEFAULT 0, 
    is_debit_card BLOB(1) NOT NULL DEFAULT 0,
    is_pix BLOB(1) NOT NULL DEFAULT 0,
    is_boleto BLOB(1) NOT NULL DEFAULT 0,
    is_mercado_pago BLOB(1) NOT NULL DEFAULT 0,
    bank_name VARCHAR(100) DEFAULT NULL,
    pix_number VARCHAR(255) DEFAULT NULL,
    boleto_code VARCHAR(255) DEFAULT NULL,
    created_at VARCHAR(30) NOT NULL DEFAULT(DATETIME('NOW')),
    dia_pagamento VARCHAR(2) DEFAULT NULL,
    nro_parcelas INTEGER(2) DEFAULT 0,
    valor_parcela DECIMAL(10,2) DEFAULT 0.00, 
    FOREIGN KEY (id_purchases_products) REFERENCES purchases_products(id)
    ON UPDATE CASCADE ON DELETE CASCADE
)



CREATE TABLE purchases_ticket (
    purchase INTEGER NOT NULL,
    ticket_code VARCHAR(255) NOT NULL,
    qr_code VARCHAR(255) NOT NULL,
    FOREIGN KEY (purchase) references purchases_products(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
SELECT * FROM posts
INNER JOIN produto_stock ON posts.id = produto_stock.id_posts
INNER JOIN produto_financeiro ON produto_financeiro.id_post = produto_stock.id_posts
INNER JOIN produto_detalhes ON produto_detalhes.id_post = produto_stock.id_posts
INNER JOIN midias ON midias.id_posts = posts.id
INNER JOIN usuarios ON posts.AUTOR = usuarios.id;
--INNER JOIN likes_dislikes ON likes_dislikes.id_posts = posts.id;