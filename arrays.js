let movies =['RRR','PK','Run','KGF','Ready','King Kong'];
//indexing
console.log(movies[0]);
console.log(movies.indexOf('KGF'));
console.log(movies.at(-3));
console.log(movies.length);
//Slicing
console.log(movies.slice(2,5));
//adding element
console.log([...movies,'Barfi']);
console.log(['Batman',...movies,'Barfi']);
console.log([...movies.slice(0,4),'100days',...movies.slice(4)]);
//adding element at 4th position
console.log([...movies.slice(0,4),'welcome',...movies.slice(4)]);
//replace element at 4th position in array
console.log(movies);
movies[3]='hero';
console.log(movies);
//WAP to store 5 friends name in an array and get first three characters of second element
const a=['zaid','fawaz','omar','abc','dfa']
console.log(a[1].slice(0,3));
//removing elements from array
console.log(movies);
movies.pop();//removes last element from array
console.log(movies);
movies.shift();//removes first element from array
console.log(movies);
//removing multiple elements from array
movies= [...movies,'flash','exit14','nh10']
console.log(movies);
movies.splice(2,2);
console.log(movies);