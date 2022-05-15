SELECT id, email, [password], sailorId, clubId
FROM sailingpointdb.dbo.users
WHERE email = @id;
