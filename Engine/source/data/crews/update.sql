UPDATE sailingpointdb.dbo.crews
SET clubId=@boatId, boatId=@boatId, skipperId=@skipperId, mainsailtrimmerId=@mainsailtrimmerId, headsailtrimmer1Id=@headsailtrimmer1Id, headsailtrimmer2Id=@headsailtrimmer2Id, bowmanId=@bowmanId
WHERE id=@id;

