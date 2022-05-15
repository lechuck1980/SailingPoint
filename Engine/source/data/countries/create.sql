INSERT INTO sailingpointdb.dbo.countries
(name, twochar, threechar)
VALUES(@name, @twochar, @threechar);



SELECT SCOPE_IDENTITY() as id