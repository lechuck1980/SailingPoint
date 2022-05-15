SELECT id, name, surname, sex, borndate, address, countryId, state, city
FROM sailingpointdb.dbo.sailors
WHERE id = @id;
