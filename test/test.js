var assert = require('assert');

const make = require('../src/make');
const sumOfOther = require('../src/sumOfOther');
const recursion = require('../src/recursion');

describe('sumOfOther', () => {
  it('1',() =>{
    assert.deepEqual(sumOfOther([1,2,3,4,5]),[14,13,12,11,10]);
    assert.deepEqual(sumOfOther([4,5,2,8,100]),[115,114,117,111,19]);
    assert.deepEqual(sumOfOther([1,1,1,1,1,1,1,1,1,1,1,1,1,1]),[13,13,13,13,13,13,13,13,13,13,13,13,13,13]);
  });

  it('2',() =>{
    assert.deepEqual(sumOfOther([-1,-2,-3,-4,-5]),[-14,-13,-12,-11,-10]);
  });

  it('3',()=>{
    assert.deepEqual(sumOfOther([0,0,0,0,2]),[2,2,2,2,0]);
    assert.deepEqual(sumOfOther([0,0,0,0,0,0,0,0]),[0,0,0,0,0,0,0,0]);
  });
});

describe('make', () => {
  it('1',() =>{
    assert.equal(make(4)(2)(1)(6)((a,b) => a + b),13);
    assert.equal(make(4)(2)(1)(6)((a,b) => a * b),48);
    assert.equal(make('a')('n')('d')('r')('e')('i')((a,b) => a + b),"andrei");
  });

  it('2',() =>{
    assert.equal(make(4,2,1)(2,7,5,4)(1,2,3,4)(6,2,2,2)((a,b) => a + b),47);
    assert.equal(make(4)(2)(1)(6)((a,b) => a * b),48);
    });

  it('3',() =>{
    assert.equal(make(0)(0)(0)(0)((a,b) => a + b),0);
    assert.equal(make(0)(0)(0)(0)(0)(0)((a,b) => a * b),0);
  });
});

describe('recursion', () => {
    it('1',() =>{
        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}}, "right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        assert.deepEqual(recursion(tree),[[100], [90, 120], [70,99,110,130]]);
    });

    it('2',() =>{
        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}}, "right":{"value":120,"left":{"value":110},"right":{"value":130,"right":{"value":120}}}};
        assert.deepEqual(recursion(tree),[[100], [90, 120], [70,99,110,130],[120]]);
    });

    it('3',()=>{
        let tree = {"value":100, "right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        assert.deepEqual(recursion(tree),[[100], [120], [110,130]]);
    });
});