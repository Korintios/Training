function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}