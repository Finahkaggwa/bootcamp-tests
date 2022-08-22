describe('Test the regCheck function' , function(){
    it("It should return 'true' when input ends with 'reg location initials' ", function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it("Or else it should return 'false' ", function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });

});
