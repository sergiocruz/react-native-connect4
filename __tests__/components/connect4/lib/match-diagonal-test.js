jest.dontMock('../../../../components/connect4/lib/match-diagonal');
var isDiagonal = require('../../../../components/connect4/lib/match-diagonal')

describe('isDiagonal', function() {

  it('should match diagonal row top right', function() {

    var grid = [
      [ 0, 0, 0, 0, 0, 1 ],
      [ 0, 0, 0, 0, 1, 0 ],
      [ 0, 0, 0, 1, 0, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });


  it('should match fourth row top right', function() {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 1, 0, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 1, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });

  it('should match first row top left', function() {

    var grid = [
      [ 1, 0, 0, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
      [ 0, 0, 0, 1, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });

  it('should match last row top left', function() {

    // Grid from a real game
    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 1, 2, 2, 1 ],
      [ 0, 0, 0, 1, 2, 1 ],
      [ 0, 0, 0, 2, 1, 2 ],
      [ 0, 0, 0, 1, 2, 1 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });

  it('should not match with empty grid', function() {

    // Grid from a real game
    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(false);
  });


  it('should not match with buggy grid', function() {

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

    expect(isDiagonal(grid)).toBe(false);
 });


});
