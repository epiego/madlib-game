
import { dom-utilities.js } from '../dom-utilities.js';
test('sync input to element', (expect) => {
    //Arrange
    const input = document.createElement('input');
    const span = document.createElement('span');
    const expected = 'banana';
    input.value = expected;
    
    //Act 
    sync(input, span);


    export
    //Expect
    expect.equal(span.textContent, expected);
});

