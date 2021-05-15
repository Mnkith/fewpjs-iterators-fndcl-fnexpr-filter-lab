function findMatching(ds, nm){
  // return ds.filter(d)
  return ds.filter(d => { return d.toLowerCase() === nm.toLowerCase() })
}


function fuzzyMatch(ds, nm){
  return ds.filter(  d => { return d.startsWith(nm) })
}

function matchName(ds, nm){
  return ds.filter(d => { return d.name === nm })
}