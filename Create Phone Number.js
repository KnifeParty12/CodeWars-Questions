function x(numb) {
return '(' + numb.slice(0,3).join('') + ') ' + numb.slice(3,6).join('') + '-' + numb.slice(6).join('');

}

console.log(x([1,2,3,4,5,6,7,8,9,0]));
