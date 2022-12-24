for(let i = 2; i<100; i++)
{
    let remainder = 1
    
    for(j=2; j<i; j++) 
     {if(i%j == 0){remainder = 0}}

    if(remainder!=0){console.log(`${i} is a prime number`)}
}

     
