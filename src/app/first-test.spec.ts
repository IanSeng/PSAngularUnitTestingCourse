describe('my first test', () => {
    let sut; 

    beforeEach(() => {
        sut = {}
    })

    it('should be ture if true', () => {
        // arrange
        sut.a = false;

        // act 
        sut.a = true;

        // asset 
        expect(sut.a).toBe(true);
    })
})