//console.log(greet("Josephine"));
describe('Test my greet function' , function(){
    it("It should return 'Hello, Bob' when called with 'Bob' ", function(){
        assert.equal(greet('Bob'),'Hello, Bob');

       //assert.deepEqual([2,2],[2,2]);
    });
    it("It should return 'Hello, Amitah' when called with 'Amitah' ", function(){
        assert.equal(greet('Amitah'),'Hello, Amitah');

       //assert.deepEqual([2,2],[2,2]);
    });

});
