function isFibonacci(num){
    if (num == 0 || num == 1){
        return true
    }

    let previous = 0
    let current = 1

    while(current < num){
        let next = previous + current 
        previous = current
        current = next   
    }

    return current == num
}

if(isFibonacci(5)){
    console.log("Esse número pertence a sequência de Fibonacci")
}
else{
    console.log("Esse número não pertence a sequência de Fibonacci")
}