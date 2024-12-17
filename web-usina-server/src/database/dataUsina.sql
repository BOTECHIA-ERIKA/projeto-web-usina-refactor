
CREATE TABLE users(
     id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
     nome_completo VARCHAR(600) NOT NULL,
     email_recovery VARCHAR(200) NOT NULL UNIQUE,
     username VARCHAR(20) NOT NULL UNIQUE,
     password_hash VARCHAR(120) NOT NULL
     is_alive INTEGER NOT NULL DEFAULT 1,
     created_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW'));
     updated_at VARCHAR(30) NOT NULL DEFAULT (DATETIME('NOW'));
);

CREATE TABLE ROLES(
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
        role VARCHAR(20) NOT NULL UNIQUE
);
CREATE TABLE AGENDAS (
     id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
     tagAgenda VARCHAR(60) NOT NULL,
)

CREATE TABLE REPORT_CAUSES(
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
        report_id VARCHAR(600) NOT NULL,
);




CREATE TABLE dashboards(
        id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
        key VARCHAR(180) NOT NULL UNIQUE,
        user_id INTEGER NOT NULL,
        roles_id INTEGER NOT NULL DEFAULT 1,
        agendas_id INTEGER DEFAULT NULL,
        REPORT_CAUSES_id INTEGER DEFAULT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id),
        ON UPDATED CASCADE ON DELETE CASCADE,
        FOREIGN KEY(roles_id) REFERENCES roles(id),
        ON UPDATED CASCADE ON DELETE CASCADE
        FOREIGN KEY(agendas_id) REFERENCES agendas(id),
        ON UPDATED CASCADE ON DELETE CASCADE,
        FOREIGN KEY(REPORT_CAUSES_id) REFERENCES REPORT_CAUSES(id),
        ON UPDATED CASCADE ON DELETE CASCADE
);

INSERT INTO ROLES VALUES
    ('ROLE_1', 'idealizador'),
    ( 'ROLE_2', 'admin'),
    ('ROLE_3', 'voluntario_geral'),
    ('ROLE_4','voluntario_especifico'),
    ('ROLE_5', 'cadastrado')
;

SELECT * FROM ROLES;


CREATE TABLE countries(
    ISO VARCHAR(2) NOT NULL PRIMARY KEY UNIQUE,
    country VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO countries (ISO, country)
VALUES
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
('FM', 'Micronesia, Federated States of'),
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
('US', 'United States'),
('UM', 'United States Minor Outlying Islands'),
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


    SELECT * FROM countries;

    CREATE TABLE states (
        UF VARCHAR(2) NOT NULL PRIMARY KEY UNIQUE,
        state VARCHAR(100) NOT NULL UNIQUE,
        ISO_countries VARCHAR(2) NOT NULL,
        FOREIGN KEY (ISO_countries) REFERENCES countries(ISO)
        ON UPDATE CASCADE ON DELETE CASCADE
    );


    INSERT INTO states (UF, state, ISO_countries)
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


SELECT states.UF, states.name, states.ISO_countries, countries.name FROM states INNER JOIN countries WHERE countries.code = states.ISO_countries;

CREATE TABLE cities (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    city VARCHAR(100) NOT NULL,
    UF_states VARCHAR(2) NOT NULL,
    FOREIGN KEY (UF_states) REFERENCES states(UF)
    ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO cities (name, state_id)
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
('Atibaia', 'SP');


SELECT * FROM cities;

-- mais uma correcao feita mediante a concerto de erro inicial proprio
CREATE TABLE NEIGHBORHOOD   (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
   id_cities INTEGER NOT NULL,
    FOREIGN KEY (id_cities) REFERENCES cities(id)
    ON UPDATE CASCADE ON DELETE CASCADE
)

SELECT * FROM "NEIGHBORHOOD";


SELECT * FROM locations;
CREATE TABLE locations (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    location VARCHAR(100) NOT NULL,
    location_number INTEGER NOT NULL,
    type_complement VARCHAR(100),
    complement VARCHAR(100),
    NEIGHBORHOOD_id INTEGER NOT NULL,
    city_id INTEGER NOT NULL,
    FOREIGN KEY (city_id) REFERENCES cities(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (NEIGHBORHOOD_id) REFERENCES NEIGHBORHOOD(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);

 CREATE TABLE addresses (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    address_tag VARCHAR(100) NOT NULL,
    location_id INTEGER NOT NULL,
    agendas_id INTEGER NOT NULL,
    FOREIGN KEY (location_id) REFERENCES locations(id)
    ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (agendas_id) REFERENCES agendas(id)
    ON UPDATE CASCADE ON DELETE CASCADE
);
DROP TABLE addresses;


-- HAVIA PENSADO EM FAZER A TABELA FULL HOURS
-- COMO INVERTI O PROCESSO DE DIAGRAMAÇÃO NA CORREÇÃO DE ESTE PASSO QUE EM
-- REALIDADE É ESSENCIAL PARA O FUNCIONAMENTO DO SISTEMA
-- NÃO EXISTE A POSSIBILIDADE DE IMPLEMENTAR FULL HOURS DA MANEIRA QUE FOI PROPOSTO 
-- COM 4 DIGITOS SERIA IMPOSSIVEL HORAS QUEBRADAS PELO QUE OPTEI USAR
-- STRING COM PADRAO VINDO DE API POR ISOString() sobre const today = new   Date()
-- O VALOR É EQUIVALENTE AO TIPO (DATETIME('NOW')) DO BANCO SQLITE
-- O MESMO FOI EMPREGADO COM LINGUAGEM SQL A TRAVÉS DE QUERY BUILDER KNEX PASSO QUE DEVE SER CORRIGIDO PARA ADEQUACAO A MONGO DB USANDO MONGOOSE\
-- AINDA QUE A MISTURA DE 2 BANCOS (1 RELACIONAL DE ARQUIVO LOCAL COMO SQLITE E UM BANCO DE DADOS NÃO RELACIONAL COMO MONGO, VIRIA PERFEITAMENTE AO SISTEMA FINAL PELA NECESSIDADE DE OCUTACAO DE DADOS SENSIVEIS COMO POR EXEMPLO EM COMPRA UM ENDERECO OU CPF, PRECISO APROFUNDAR O TEMA ANTES DE UMA DECISAO QUE FAÇA O SISTEMA FUNCIONAR BEM 
--CREATE TABLE full_hours(
  --  id INTEGER NOT NULL UNIQUE PRIMARY KEY AUTOINCREMENT, 
  --  hour VARCHAR(5) NOT NULL UNIQUE
--)
--drop table full_hours;
-- FULL MINUTES É O MESMO CASO DE FULL_HOURS, TABELA INECESSARIA CORRECAO REALIZADA NO DIAGRAMA EM REFATORACAO DE CODIGO ONDE TODAS AS TABELAS FORAM APAGADAS PARA A CONSTRUCAO DE UM DB NA ORDEM QUE SE PEDE AS TECNICAS ADEQUADAS E CORRETAS NAO USADAS ANTERIORMENTE
--CREATE TABLE full_minutes (
  --  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  --  minute VARCHAR(5) NOT NULL UNIQUE
--);

