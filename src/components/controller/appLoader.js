import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b3523ec7116948a7a3546bfdd233ce0e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
