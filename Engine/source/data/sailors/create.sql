INSERT INTO sailingpointdb.dbo.sailors
(name, surname, sex, borndate, address, countryId, state, city)
VALUES(@name, @surname, @sex, @borndate, @address, @countryId, @state, @city);


SELECT SCOPE_IDENTITY() as id