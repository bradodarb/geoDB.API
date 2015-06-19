CREATE TABLE geoDB.cities
(
    id              BIGSERIAL PRIMARY KEY,
    cityName        VARCHAR(100) NOT NULL,
    countryCode     VARCHAR(5) NOT NULL DEFAULT 'NA',
    weight          INT NOT NULL DEFAULT 0
);



CREATE TABLE geoDB.countries
(
    id              BIGSERIAL PRIMARY KEY,
    countryCodeFIPS        VARCHAR(5) NOT NULL DEFAULT 'NA',
    countryCodeISO     VARCHAR(5) NOT NULL DEFAULT 'NA',
    topLevelDomain     VARCHAR(5) NOT NULL DEFAULT 'NA',
    countryName     VARCHAR(50) NOT NULL,
    weight          INT NOT NULL DEFAULT 0
);

ALTER TABLE geoDB.countries ADD CONSTRAINT u_countrycodefips UNIQUE (countrycodefips);

ALTER TABLE geoDB.cities
ADD FOREIGN KEY (countrycode) 
REFERENCES geoDB.countries(countrycodefips)