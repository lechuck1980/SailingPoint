INSERT INTO sailingpointdb.dbo.regattas (name, startdate, enddate, clubId)
VALUES(@name, @startdate, @enddate, @clubId);

SELECT SCOPE_IDENTITY() as id