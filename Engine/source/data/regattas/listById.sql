SELECT id, name, startdate, enddate, clubId
FROM sailingpointdb.dbo.regattas
WHERE id = @regattaId;
