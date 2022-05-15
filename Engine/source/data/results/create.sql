INSERT INTO sailingpointdb.dbo.races
(regattaId, name, classId, fleetId)
VALUES(@regattaId, @name, @classId, @fleetId);

SELECT SCOPE_IDENTITY() as id