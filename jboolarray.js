function BoolArray(){
  this.ar=[];
  this.length=0;
}

BoolArray.prototype.set = function set(idx,val){
    this.ar[((idx/31) >> 0)] |= 1<<(idx%31);
    if(idx>this.length)
    this.length=idx;
}

BoolArray.prototype.get = function get(idx ){
   return (this.ar[((idx/31) >> 0)])>>(idx%31) & 1;
}
