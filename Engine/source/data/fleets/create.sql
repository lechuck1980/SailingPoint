INSERT INTO sailingpointdb.dbo.fleets
(name)
VALUES(@name);

SELECT SCOPE_IDENTITY() as id