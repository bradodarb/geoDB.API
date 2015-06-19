
SELECT 
       REPLACE([CountryCode_FIPS], ' ', '') as countrycodefips
      ,REPLACE([CountryCode_ISO], ' ', '') as countrycodeiso
      ,REPLACE([TopLevelDomain], ' ', '') as topleveldomain
      ,REPLACE([CountryName], ' ', '') as countryname
      ,[Weight] as weight
  FROM [dbo].[GeoLookup].[Countries]
GO

SELECT 
       REPLACE([CountryCode], ' ', '') as countrycodefips
      ,REPLACE([CityName], ' ', '') as cityName
      ,[Weight] as weight
  FROM [dbo].[GeoLookup].[Cities]
GO
 