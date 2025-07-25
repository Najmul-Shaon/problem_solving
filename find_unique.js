function lonelyinteger(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    count ^= a[i];
  }
  console.log(count);
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
