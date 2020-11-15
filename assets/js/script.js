let spn  = document.createElement('span');
spn.textContent = 'Span.Carlos';
spn.style.border = ' 3px solid red';
spn.style.color = 'red';
spn.style.padding = '30px';
let getspn = document.querySelector('.menu');
getspn.appendChild(spn);


let title1 = document.createElement('h1');
title1.textContent = 'H1.Slogan';
let gettitle = document.querySelector('.containerA');
gettitle.appendChild(title1)
title1.style.color = 'red';
title1.style.padding = '0 20px';

let title2 = document.createElement('H3');
title2.textContent = 'H3.Texto bacana, que nos ajuda em algo...'
gettitle.appendChild(title2)
title2.style.color = 'red';
title2.style.padding = '0 20px';

let title3 = document.createElement('h3');
title3.textContent = 'ONG ESPERANÇA 2020 | JOINVILLE - SC';
let getfooter = document.querySelector('footer');
getfooter.appendChild(title3)
title3.style.color = 'red';
title3.style.textAlign = "center";
