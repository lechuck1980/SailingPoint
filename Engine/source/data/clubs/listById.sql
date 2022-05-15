SELECT id, name, shortname, address, countryId, state, city
FROM sailingpointdb.dbo.clubs
WHERE id = @id;
