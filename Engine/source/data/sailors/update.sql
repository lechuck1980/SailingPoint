UPDATE sailingpointdb.dbo.sailors
SET name=@name, surname=@surname, sex=@sex, borndate=@borndate, address=@address, countryId=@countryId, state=@state, city=@city
WHERE id=@id;

