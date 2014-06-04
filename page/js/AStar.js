function aStar(map, start, end) {
  var open = [],
    current,
    neighbors,
    neighbor,
    i, newG;

  open.push(start);
  start.f = 0;
  start.g = 0;
  start.opened = true;

  while (open.length) {


    current = open.pop();
    //console.log(current);
  
    current.closed = true;

    if (matchPos(current, end)) {
      console.log('found');
      return buildPath(current);
    }

    neighbors = map.getAdjacent(current.y, current.x);
    console.log(neighbors);
    //neighbors = getAdjacent(map, current.y, current.x);

    for (i = 0; i<neighbors.length; i++) {
      //console.log(neighbor);
      neighbor = neighbors[i];

      if (neighbor.closed) {
        continue;
      }

      newG = current.g + 1;

      console.log(newG, neighbor.g);
      if (!neighbor.opened || newG < neighbor.g) {
        neighbor.g = newG;
        neighbor.h = neighbor.h || manhattan(neighbor, end);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.papucho = current;

        if (!neighbor.opened) {
          open.push(neighbor);
          neighbor.opened = true;
        }

      }
    }
    open = open.sort(function(a, b) {
              return a.f - b.f;
            }).reverse();
  }

  return [];
}

function manhattan(start, end) {

  var dx = Math.abs(end.x - start.x),
    dy = Math.abs(end.y - start.y);

  return dx + dy;
}

function matchPos(a, b) {
  if (a.x == b.x &&
      a.y == b.y) {
        return true;
      }
  else {
    return false;
  }
}

function contains(element, array) {
  return array.indexOf(element) < 0 ? false : true;
}

function getFirst(array) {
  return array[0];
}

function getAdjacent(array, y, x) {
}

function buildPath(node) {
  path = [];
  while (node) {
    path.push(node);
    node = node.papucho;
  }
  return path.reverse();
}

