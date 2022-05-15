UPDATE sailingpointdb.dbo.users
SET id=@id, password=@password, sailorId=@sailorId, clubId=@clubId
WHERE email=@email
