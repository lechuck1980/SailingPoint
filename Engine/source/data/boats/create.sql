INSERT INTO sailingpointdb.dbo.boats
(name, sailnumber, classId)
VALUES(@name, @sailnumber, @clubId);


SELECT SCOPE_IDENTITY() as id