let n=5, znak='#';
for (i=1; i<=n; i++){
let red=' '.repeat(n-i)+znak.repeat(i)
+' '+znak.repeat(i)+' '.repeat(n-i);
console.log(red);}