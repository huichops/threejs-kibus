function Map(width, height) {
  this.grid = [];
  for ( var i = 0; i < height; i++ ) {
    this.grid.push([]);
  }
};

Map.prototype.getAdjacent = function(y, x) {
  var adjacent = [],
    i = 0,
    pos = [[0, 0, 1, -1],
           [1, -1, 0, 0]],
    size = pos[0].length;
    
  for (i; i<size; i++) {
    var ii = y + pos[0][i],
      jj = x + pos[1][i];

    console.log(ii, jj);
    if ( ii >= 0 && ii < this.height && jj >= 0 && jj < this.width ) {
      if (this.grid[ii][jj].val == 0) {
        adjacent.push(this.grid[ii][jj]);
      }
    }
  }
  return adjacent;
};

Map.prototype.loadMap = function(array) {
  var i, j, mapped = [];
  for (i = 0; i < array.length; i++) {
    this.width = array.length;
    mapped.push([]);
    for (j = 0; j < array[i].length; j++) {
      this.height = array[i].length;
      mapped[i].push({
        x: j,
        y: i,
        closed: false,
        opened: false,
        papucho: null,
        val: array[i][j] 
      });
    }
  }
  this.grid = mapped;
};

