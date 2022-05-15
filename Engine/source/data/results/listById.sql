SELECT id, [position], scoring, raceId, crewId
FROM sailingpointdb.dbo.results
WHERE id = @id;
