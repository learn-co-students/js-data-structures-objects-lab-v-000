const driver = {}

function updateDriverWithKeyAndValue(d,k,v){
  return Object.assign({...d}, {[k]: v})
}

function destructivelyUpdateDriverWithKeyAndValue(d,k,v) {
  return Object.assign(d, {[k]: v})
}

function deleteFromDriverByKey(d,k) {
  let newO = Object.assign({...d})
  delete newO[k];
  return newO;
}

function destructivelyDeleteFromDriverByKey(d,k) {
  delete d[k];
  return d;
}