const mostRecurrent = (set) => {
 return set.reduce(
    (a,b,i,arr)=>
     (arr.filter(v=>v===a).length>=arr.filter(v=>v===b).length?a:b),
    null)
}

module.exports = mostRecurrent
