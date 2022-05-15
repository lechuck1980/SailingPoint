UPDATE sailingpointdb.dbo.clubs
SET name=@name, shortname=@shortname, address=@address, countryId=@countryId, state=@state, city=@city
WHERE id=@id;
