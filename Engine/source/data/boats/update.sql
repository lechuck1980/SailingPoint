UPDATE sailingpointdb.dbo.boats
SET name=@name, sailnumber=@sailnumber, classId=@classId
WHERE id=@id;
