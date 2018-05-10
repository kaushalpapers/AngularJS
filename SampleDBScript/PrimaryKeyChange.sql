set serveroutput on;
    DECLARE
        CNT1 NUMBER(2);            
    BEGIN  
    
	ALTER TABLE city
DROP CONSTRAINT pk_city;

ALTER TABLE city
ADD CONSTRAINT pk_city PRIMARY KEY (city_id, buildtime, time);
    
END;
/ 
      
