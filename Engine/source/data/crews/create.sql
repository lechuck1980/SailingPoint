INSERT INTO sailingpointdb.dbo.crews
(clubId, boatId, skipperId, mainsailtrimmerId, headsailtrimmer1Id, headsailtrimmer2Id, bowmanId)
VALUES(@clubId, @boatId, @skipperId, @mainsailtrimmerId, @headsailtrimmer1Id, @headsailtrimmer2Id, @bowmanId);

SELECT SCOPE_IDENTITY() as id