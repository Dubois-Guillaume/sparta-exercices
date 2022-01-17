function isItPainting(piece) {
  if (piece.type === "painting"){
    return true;
  }else {
    return false;
  }
}

function canTakeArtPieces(pieces) {
  console.log(pieces);
  return (pieces.every(isItPainting));
}



// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
