/* 
https://leetcode.com/problems/surrounded-regions/description/

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the
border of the board are not flipped to 'X'. Any 'O' that is not on the border
and it is not connected to an 'O' on the border will be flipped to 'X'. Two
cells are connected if they are adjacent cells connected horizontally or
vertically.

TYPE: ARRAY, MATRIX, VERY GOOD, FAVORITE, ISLANDS

Solution:   https://leetcode.com/submissions/detail/259286726/  661.93%

The idea is simple. First we scan across the border of the matrix and try to get
the list of elements which are zero with their coords.  We call such elements
badGuys. We mark the badGuys with $ sign to identify them later.
            
Then we simply prepare of queue of elements to process from this list and see if
there are any neighboring elements of the badGuys.  For this we dequeue a badGuy
and check if there are any neighboring bad guys.  As we get any more badGuys we
keep adding them to the queue to process later and mark the badGuys as $.  Once
all the elements in the queue are processed, we have found all the bad guys in
the matrix.
            
Then we just iterate through the matrix in n^2 time and get any good guys and
mark them as X.  In the same traversal of the matrix we also mark the identified
bad guys back to zero to return the final matrix answer.

 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (board.length < 3 || board[0] < 3) return board;
    var badGuys = scanBorder(board);
    processBadGuys(badGuys, board);
    for (var x = 0; x < board.length; x++) {
        for (var y = 0; y < board[0].length; y++) {
            if (board[x][y] == 'O') board[x][y] = 'X';
            if (board[x][y] == '$') board[x][y] = 'O';
        }
    }
};


var scanBorder = function(board){
    var badGuys = [];
    var x=0, y=0;
    while(y<board[x].length){
        pushAndMarkBadGuys(x,y,badGuys,board);
        y++;
    }
    y = board[x].length-1;
    while(x<board.length){
        pushAndMarkBadGuys(x,y,badGuys,board);
        x++;
    }
    x = board.length-1;
    while(y>0){
        pushAndMarkBadGuys(x,y,badGuys,board);
        y--;        
    }
    while(x>0){
        pushAndMarkBadGuys(x,y,badGuys,board);
        x--;        
    }
    return badGuys;
}


var pushAndMarkBadGuys = function (x, y, badGuys, board) {
    if(board[x][y]=='O'){
        board[x][y] = '$';
        badGuys.push(''+x+','+y);
    }
};

var processBadGuys = function(badGuys,board){
    var badGuysQueue = badGuys;
    while(badGuysQueue.length>0){
        var badGuy = badGuysQueue.shift();
        var badGuyCoords = badGuy.split(',');
        var x = Number.parseInt(badGuyCoords[0]), y = Number.parseInt(badGuyCoords[1]);
        if(isXnYValid(x+1,y,board)) pushAndMarkBadGuys(x+1,y,badGuysQueue,board);
        if(isXnYValid(x-1,y,board)) pushAndMarkBadGuys(x-1,y,badGuysQueue,board);
        if(isXnYValid(x,y+1,board)) pushAndMarkBadGuys(x,y+1,badGuysQueue,board);
        if(isXnYValid(x,y-1,board)) pushAndMarkBadGuys(x,y-1,badGuysQueue,board);
    }
}


var isXnYValid = function (x, y, board) {
    return (x >= 0 && x < board.length && y >= 0 && y < board[0].length);
}

var main = function () {
    var board = [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]];
    var ans = [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]];
    solve(board);
    console.log(JSON.stringify(board) == JSON.stringify(ans));
    board = [["X", "X", "X", "X"], ["X", "O", "O", "X"], ["X", "X", "O", "X"], ["X", "O", "X", "X"]];
    ans = [["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "X", "X", "X"], ["X", "O", "X", "X"]];
    solve(board);
    console.log(JSON.stringify(board) == JSON.stringify(ans));
    board = [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "O", "O", "X", "O", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "X", "O", "X", "O", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]];
    ans = [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "O", "O", "X", "O", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "X", "O", "X", "O", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "X", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], ["X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]];
    solve(board);
    console.log(JSON.stringify(board) == JSON.stringify(ans));
};




main();