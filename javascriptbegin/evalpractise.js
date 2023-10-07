//fizz buzz programe
function fizzbuz(num){

    let arr=[];

    for(i=1;i<=num;i++){
        if(i%3==0 && i%5==0)
        arr.push('fizzbuzz')
        else if(i%3==0)
        arr.push('fizz')
        else if(i%5==0)
        arr.push('buzz')
        else
        arr.push(i.toString())
    }
        return arr
}
    console.log(fizzbuz(15))