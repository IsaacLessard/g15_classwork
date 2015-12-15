module.exports={
  fizzbuzz: function(num){
      var array = [];
      for(i=0;i<num;i++){

        var n = i+1;
        if (n%3==0 && n%5==0){
            array[i]="fizzbuzz";
          }
        else if (n%3==0){
            array[i]="fizz";
          }
        else if (n%5==0){
            array[i]="buzz";
          }
        else {array[i]=n;}
      }
      return array;
    }

}
