function Map(widht, height) {
  grid = [height];
  grid.forEach(function(row) {
    row = [width];
  });
}

Map.prototype.getAdjacent(y, x) {
  var adjacent = [],
    i = 0,
    pos = [[0, 0, 1, -1],
           [1, -1, 0, 0]],
    size = pos[0].length;
    
  for (i; i<size; i++) {
    var ii = y + pos[0][i],
      jj = x + pos[1][i];

    if ( ii >= 0 && ii < this.height && jj >= 0 && jj < this.width ) {
      if (array[ii][jj].val == 0) {
        adjacent.push(array[ii][jj]);
      }
    }
  }
  return adjacent;
};

Map.prototype.loadMap(array) {
  var i, j, mapped = [];
  for (i = 0; i < array.length; i++) {
    mapped.push([]);
    for (j = 0; j < array[i].length; j++) {
      mapped[i].push({
        x: j,
        y: i,
        closed: false,
        opened: false,
        papucho: null,
        val: array[j][i] 
      });
    }
  }
  this.grid = mapped;
};

