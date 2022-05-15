UPDATE sailingpointdb.dbo.races
SET regattaId=@regattaId, name=@name, classId=@classId, fleetId=@fleetId
WHERE id=@id;

