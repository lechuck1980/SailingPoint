UPDATE sailingpointdb.dbo.regattas
SET name=@name, startdate=@startdate, enddate=@enddate, clubId=@clubId
WHERE id=@id;
