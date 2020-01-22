class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
        
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'William';
    }

    mostraUsuario() {
        console.log(this.usuario);
        
    }
}

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    minhaLista.add('Novo To Do');
}

minhaLista.mostraUsuario();

// Método estático não precisa de construtor
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));
