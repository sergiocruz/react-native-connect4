jest.dontMock('../../../../components/connect4/lib/match-horizontal');
var isHorizontal = require('../../../../components/connect4/lib/match-horizontal');

describe('isHorizontal', function() {

  it('should match first horizontal row', function() {

    var grid = [
      [ 0, 0, 0, 0, 2, 1],
      [ 0, 0, 0, 0, 2, 1],
      [ 0, 0, 0, 0, 2, 1],
      [ 0, 0, 0, 0, 0, 1 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isHorizontal(grid)).toBe(true);
  });


  it('should match second horizontal row', function() {

    var grid = [
      [ 0, 0, 0, 0, 1, 1 ],
      [ 0, 0, 0, 0, 1, 2 ],
      [ 0, 0, 0, 0, 1, 1 ],
      [ 0, 0, 0, 0, 1, 2 ],
      [ 0, 0, 0, 0, 2, 1 ],
      [ 0, 0, 0, 0, 2, 2 ],
      [ 0, 0, 0, 0, 2, 1 ]
    ];

    expect(isHorizontal(grid)).toBe(true);
  });

  it('empty grid should not match horizontally', function() {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isHorizontal(grid)).toBe(false);
  });

  it('should not match horizontally', function() {

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

    expect(isHorizontal(grid)).toBe(false);
 });


});
