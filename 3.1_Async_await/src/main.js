import axios from 'axios';
import exercicios from './exercicios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);    
        } catch (error) {
            console.warn('Erro na API');
        }
        
    }
}

//
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 5000);
});

async function executaPromise() {
    const response = await minhaPromise();

    console.log(response);
}

document.getElementById('aula').onclick = () => { 
    Api.getUserInfo('antuneswilliam');
    Api.getUserInfo('antuneswilliamn');
    executaPromise();
}