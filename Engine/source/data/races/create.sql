INSERT INTO sailingpointdb.dbo.results
([position], scoring, raceId, crewId)
VALUES(@position, @scoring, @raceId, @crewId);


SELECT SCOPE_IDENTITY() as id