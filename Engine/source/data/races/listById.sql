SELECT id, regattaId, name, classId, fleetId
FROM sailingpointdb.dbo.races
WHERE id = @id;
