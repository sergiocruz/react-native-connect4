jest.dontMock('../../../../components/connect4/lib/match-vertical');
var isVertical = require('../../../../components/connect4/lib/match-vertical');

describe('isVertical', function() {

  it('should match first vertical row', function() {

    var grid = [
      [ 0, 0, 1, 1, 1, 1],
      [ 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isVertical(grid)).toBe(true);
  });


  it('should match last vertical row', function() {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 1, 1, 1, 1 ]
    ];

    expect(isVertical(grid)).toBe(true);
  });


  it('empty grid should not match vertically', function() {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isVertical(grid)).toBe(false);
  });

  it('should not match vertically', function() {

    // buggy grid from that someone found on Slack
    var grid = [
      [ 0, 2, 1, 1, 2, 1 ],
      [ 0, 0, 2, 2, 1, 2 ],
      [ 0, 0, 1, 1, 2, 1 ],
      [ 0, 0, 2, 2, 1, 2 ],
      [ 0, 0, 1, 1, 2, 1 ],
      [ 0, 0, 2, 2, 1, 2 ],
      [ 0, 0, 0, 1, 2, 1 ]
    ];

    expect(isVertical(grid)).toBe(false);
  });


});
