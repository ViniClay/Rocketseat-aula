SELECT * FROM person WHERE nome LIKE "V%"
--SELECT: selecionar;
--FROM: local de onde irá selecionar;
--WHERE: condição, utiliza-se a Primary Key;
--LIKE: igual [% para representar não relevância];
--operadores matemáticos {+, -, *, /, %} ;
--operadores lógicos:
    --{AND, OR, NOT BETWEEN, BETWEEN, IN, NOT IN, IS NULL, IS NOT NULL};
INSERT INTO person (nome, cpf, profissao) VALUES ("Vinícius Clay", 12345678945, "vendedor")
--INSERT: inserir;
--INTO: em, onde será inserido o dado;
--VALUES: valores;
UPDATE person SET nome="Vinícius Clay Silva", profissao="autônomo" WHERE id=053493
--UPDATE: atualizar dados;
--SET: definir, dados atualizados;
DELETE FROM person WHERE id=053493
--DELETE FROM: deletar de;
--assim como o UPDATE, se não for informado o WHERE, o comando será aplicado a *(todos);
SELECT person.nome, person.cpf, empresa.nome FROM person JOIN empresa 
    ON empresa.id_empresa = person.id_empresa WHERE empresa.id_empresa = 2
--JOIN: "juntar", tabela a vincular;
--ON: vínculo, escrito como: [tabela1].PrimaryKey = [tabela2].ForeignKey;
SELECT * FROM person as prs LEFT OUTER JOIN empresa as emp ON prs.id_empresa = emp.id_empresa
--as: altera o nome do valor no SELECT, aparece na visualização mas não na tabela;
--LEFT OUTER JOIN: vincular tabela incluso valores nulos;
SELECT * FROM person ORDER BY nome DESC
--ORDER BY: ordenar por, alfabético ou numérico;
--DESC: decrescente;
SELECT * FROM person LIMIT 3 OFFSET 2
--LIMIT: a quantidade de valores a ser buscados;
--OFFSET: quantos valores serão pulados; neste caso: 3, 4, 5;
SELECT empresa.id_empresa, COUNT(nome) FROM person JOIN empres ON person.id_empresa = empresa.id_empresa 
    GROUP BY empresa.id_empresa HAVING empresa.id_empresa >= 2
--COUNT(): irá contar a quantidade de valores não nulos;
--GROUP BY: agrupar valores iguais;
--HAVING: mesmo que WHERE mas para tabelas vinculadas, teste lógico;

--on BeeKeeper:
CREATE TABLE person (id INTEGER PRIMARY KEY, nome TEXT, CPF INTEGER UNIQUE)
--CREATE TABLE: criar tabela;
--tipos de dados: INTEGER(número inteiro), TEXT(texto), DATATIME(data);
--tipos de campos: 
    --PRIMARY KEY(chave única, identificador), FOREIGN KEY(identificador para vínculo), UNIQUE(único);
ALTER TABLE person RENAME COLUMN TO cliente
--ALTER TABLE: alterar tabela;
--RENAME: renomear, pode ser usada para alterar o nome da tabela;
--COLUMN: coluna;
--TO: para, destino;
DROP TABLE person
--DROP: apagar, deletar tabela, CUIDADO! perderá tudo.