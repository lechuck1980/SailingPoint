INSERT INTO sailingpointdb.dbo.clubs
(name, shortname, address, countryId, state, city)
VALUES(@name, @shortname, @address, @countryId, @state, @city);


SELECT SCOPE_IDENTITY() as id