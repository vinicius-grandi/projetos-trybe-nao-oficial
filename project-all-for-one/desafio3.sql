/*
CREATE PROCEDURE tablespk(IN tableName varchar(50))
BEGIN
   SET @val = (
       SELECT k.COLUMN_NAME as pk
        FROM information_schema.table_constraints t
        LEFT JOIN information_schema.key_column_usage k
        USING(constraint_name,table_schema,table_name)
        WHERE t.constraint_type='PRIMARY KEY'
            AND t.table_schema='northwind'
            AND t.table_name=tableName
   );
            
    SET @id = CONCAT('SELECT ',@val,' FROM products');
    PREPARE sqlTxt FROM @id;
	EXECUTE sqlTxt;
END */
SELECT id FROM products;
