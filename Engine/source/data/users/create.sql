INSERT INTO sailingpointdb.dbo.users
(email, password, sailorId, clubId)
VALUES(@email, @password, @sailorId, @clubId);



SELECT SCOPE_IDENTITY() as id