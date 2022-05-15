UPDATE sailingpointdb.dbo.results
SET [position]=@position, scoring=@scoring, raceId=@raceId, crewId=@crewId
WHERE id=@id;

