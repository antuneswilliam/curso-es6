//alert('Opa');

import soma, { sub, mult } from './funcoes';
import somaFunction from './soma';
import * as funcoes from './funcoes';
import ClasseUsuario, { idade } from './functions';
import ClasseUsuario2, { idade as idadeUsuario } from './functions';

document.getElementById('aula21').onclick = () => {
    console.log(soma(1, 2));
    console.log(sub(1, 2));
    console.log(mult(1, 2));
    
    console.log(somaFunction(1, 2));
    
    // console.log(funcoes.soma(1,2)); // não funciona por ser default
    console.log(funcoes.sub(1,2));
    console.log(funcoes.mult(1,2));
    
    ClasseUsuario.info();
    console.log(idade);
    
    console.log(idadeUsuario);
    
}

