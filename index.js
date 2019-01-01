//1 
let a = 'block'
switch (a) {
    case 'block':
        console.log('block');
        break;
    case (a && parseInt(a) === 0):
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
        break;
}