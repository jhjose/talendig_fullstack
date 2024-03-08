let lastname = '';
let conditional1 = lastname === '' ? 'Martinez' : 'Rodriguez' ;
let can_start;

switch(conditional1){
    case 'Martinez':
        can_start = true;
    break;
    case 'Rodriguez':
        can_start = false;
    break;
    default:
        can_start = true;
    break;
}

alert(conditional1);