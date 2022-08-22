describe('Test isWeekday function' , function(){
    it("It should return 'false' when input isn't part of weekdays' ", function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it("Or else it should return 'true' when input is part of weekdays", function(){
        assert.equal(isWeekday('Tuesday'), true);
    });

});
