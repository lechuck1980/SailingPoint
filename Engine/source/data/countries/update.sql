UPDATE sailingpointdb.dbo.countries
SET name=@name, twochar=@twochar, threechar=@threechar
WHERE id=@id;

