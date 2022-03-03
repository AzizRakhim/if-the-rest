// If16

/*
let n = 8481;
let a, b, c, d;

a = n / 10000;
b = (n / 1000) % 10;
c = (n / 100) % 10;
d = (n / 10) % 10;
n %= 10;



console.log(Math.floor(a) + Math.floor(b) + Math.floor(c) + Math.floor(d) + Math.floor(n));
*/

// If17

/*
let n = 123;
let a, b, c, d, e;

a = Math.floor(n / 10000);
b = Math.floor((n / 1000) % 10);
c = Math.floor((n / 100) % 10);
d = Math.floor((n / 10) % 10);
e = Math.floor(e = n % 10);

if(n >= 10 && n <= 99){
  if(d % 2 != 0 && e % 2 != 0){
    console.log(d + e); 
  } else if (e % 2 != 0){
    console.log(e);
  } else {
    console.log(d);
  }
} else if(n >= 100 && n <= 999){
    if(c % 2 != 0 && d % 2 != 0 && e % 2 != 0){
      console.log(c + d + e); 
    } else if (c % 2 != 0 && d % 2 != 0){
        console.log(c + d);
    } else if (c % 2 != 0 && e % 2 != 0){
      console.log(c + e);
    } else if (d % 2 != 0 && e % 2 != 0){
        console.log(d + e);
    } else if (c % 2 != 0){
         console.log(c);
    } else if (e % 2 != 0){
        console.log(e);
    } else {
        console.log(d);
    }
}
*/

// For38

/*
let n = 4;
let s = 0;

for(let i = 1; i <= n; i++){
  let k = 1;
  for(let j = n; j >= i; j--){
    k *= i;
  }

  s += k
}

console.log(s);
*/