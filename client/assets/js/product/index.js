var lotion = {
    name: "Illiyoon Ceramide Ato Lotion",
    price: 20,
    skinProtection: true,
    protectionLevel: 4
};

class Order {
    constructor(method, target) {
        this.method = method;
        this.target = target;
        this.serve();
    }
    options(method, target) {
        return {
            method: method,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(target)
        }
    }
    async readAPI(path) {
        return await fetch(`http://localhost:3500/controllers/product/${path}`, this.options(this.method, this.target))
    }
    async serve() {
        console.log("hello");
        
        const receive = await (await this.readAPI('order')).json();
        console.log(receive);
    }
}

let getOrder = new Order('post', lotion)