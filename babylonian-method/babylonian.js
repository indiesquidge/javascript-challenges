const squareRoot = (radicand) => {
  var start = radicand, 
   error = 0.00001;
  while((start - radicand/start) > error){
    start = (start + radicand/start)/2;
  }

  radicand = parseFloat(start.toFixed(4));
  
  return radicand
}

module.exports = squareRoot
