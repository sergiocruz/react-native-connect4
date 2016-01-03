jest.dontMock('../../../../components/connect4/lib/board');
jest.dontMock('../../../../components/connect4/lib/matches');
jest.dontMock('../../../../components/connect4/lib/match-horizontal');
jest.dontMock('../../../../components/connect4/lib/match-vertical');
jest.dontMock('../../../../components/connect4/lib/match-diagonal');

var Board = require('../../../../components/connect4/lib/board');

describe('The Board Class', function() {

  var board;

  beforeEach(function() {
    board = new Board();
  });

  it('should have an empty state on init', function() {

    // Should include an empty grid
    expect(board.grid).toEqual([
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ]);

    // Should have zero inserts
    expect(board.inserts).toBe(0);

    // Should be active
    expect(board.isActive).toBe(true);

    // Red should be the first player
    expect(board.nextPlayer).toEqual('red');

  });

  it('should add pieces to first column', function() {
    board.addPiece(0, 'red');
    board.addPiece(0, 'blue');
    board.addPiece(0, 'red');
    expect(board.grid[0][5]).toBe('red');
  });

  it('should add pieces to third column', function() {
    board.addPiece(4, 'red');
    expect(board.grid[4][5]).toBe('red');

    board.addPiece(4, 'blue');
    expect(board.grid[4][4]).toBe('blue');

    board.addPiece(4, 'red');
    expect(board.grid[4][3]).toBe('red');
  });

  it('should increase number of inserts each time addPiece is called', function() {
    board.addPiece(0, 'red');
    board.addPiece(0, 'blue');
    board.addPiece(0, 'red');
    board.addPiece(0, 'blue');

    expect(board.inserts).toBe(4);
  });

  it('should change the next player each time addPiece is called', function() {
    board.addPiece(0, 'red');
    expect(board.nextPlayer, 'blue');

    board.addPiece(0, 'blue');
    expect(board.nextPlayer, 'red');
  });

  it('should end game because of vertical win', function() {

    // Simulate real gameplay, red should win.
    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(0, 'red');

    // Game Over?
    expect(board.isActive).toBe(false);
  });

  it('should end game because of horizontal win', function() {

    // Simulate real gameplay, red should win.
    board.addPiece(0, 'red');
    board.addPiece(0, 'blue');
    board.addPiece(1, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(2, 'red');
    board.addPiece(2, 'blue');
    board.addPiece(3, 'red');

    // Game Over?
    expect(board.isActive).toBe(false);
  });

  it('should end game because of diagonal win', function() {

    // Simulating this:
    //       R
    //     R R
    // B R R B
    // R B B B

    // Simulate real gameplay, red should win.
    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(1, 'red');
    board.addPiece(2, 'blue');
    board.addPiece(2, 'red');
    board.addPiece(3, 'blue');
    board.addPiece(2, 'red');
    board.addPiece(3, 'blue');
    board.addPiece(3, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(3, 'red');

    // Game Over?
    expect(board.isActive).toBe(false);

  });

  it('should end game when there is a tie', function() {

    // A tie happens when the board is full but no wins:

    /**
     * Columns 0 and 1
     */
    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');

    board.addPiece(1, 'red');
    board.addPiece(0, 'blue');
    board.addPiece(1, 'red');
    board.addPiece(0, 'blue');

    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');
    board.addPiece(0, 'red');
    board.addPiece(1, 'blue');

    /**
     * Columns 2 and 3
     */
    board.addPiece(2, 'red');
    board.addPiece(3, 'blue');
    board.addPiece(2, 'red');
    board.addPiece(3, 'blue');

    board.addPiece(3, 'red');
    board.addPiece(2, 'blue');
    board.addPiece(3, 'red');
    board.addPiece(2, 'blue');

    board.addPiece(2, 'red');
    board.addPiece(3, 'blue');
    board.addPiece(2, 'red');
    board.addPiece(3, 'blue');

    /**
     * Columns 4 and 5
     */
    board.addPiece(4, 'red');
    board.addPiece(5, 'blue');
    board.addPiece(4, 'red');
    board.addPiece(5, 'blue');

    board.addPiece(5, 'red');
    board.addPiece(4, 'blue');
    board.addPiece(5, 'red');
    board.addPiece(4, 'blue');

    board.addPiece(4, 'red');
    board.addPiece(5, 'blue');
    board.addPiece(4, 'red');
    board.addPiece(5, 'blue');

    /**
     * Column 6
     */
    board.addPiece(6, 'red');
    board.addPiece(6, 'blue');
    board.addPiece(6, 'red');
    board.addPiece(6, 'blue');
    board.addPiece(6, 'red');
    board.addPiece(6, 'blue');

    // Tie should have happened
    expect(board.didSomebodyWin()).toBe(false);
    expect(board.isGameTied()).toBe(true);

    // Board should be inactive (since there was a tie)
    expect(board.isActive).toBe(false);

  });


});
