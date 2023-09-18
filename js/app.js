'use strict';
console.log('app js is running!');
// let hours = ['6am','7am']; 

let seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlySales: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
    calculateHourlySales: function () {
        for (let hour = 6; hour <= 19; hour++) {

            let customers = this.getRandomCustomers();
            // console.log('customers per hour!',customers); 
            let cookiesSold = Math.floor(customers * this.avgCookiesPerCustomer);
            // console.log('cookies?',cookiesSold);
            this.hourlySales.push(cookiesSold);
        }
    }
};
//does object exist
console.log(seattle);
//added our computed values to our object
seattle.calculateHourlySales();
let seattleSalesList = document.getElementById('seattle-sales-list');
for (let hour = 6; hour <= 19; hour++) {
    let listItem = document.createElement('li');
    listItem.textContent = hour + 'am: ' + seattle.hourlySales[hour - 6] + ' cookies';
    seattleSalesList.appendChild(listItem);
};

console.log(seattleSalesList);

let tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    hourlySales: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
    calculateHourlySales: function () {
        for (let hour = 6; hour <= 19; hour++) {
            let customers = this.getRandomCustomers();
            let cookiesSold = Math.floor(customers * this.avgCookiesPerCustomer);
            this.hourlySales.push(cookiesSold);
        }
    }
};

tokyo.calculateHourlySales();

let tokyoSalesList = document.getElementById('tokyo-sales-list');
for (let hour = 6; hour <= 19; hour++) {
    let listItem = document.createElement('li');
    listItem.textContent = hour + 'am: ' + tokyo.hourlySales[hour - 6] + ' cookies';
    tokyoSalesList.appendChild(listItem);
};

let dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    hourlySales: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
    calculateHourlySales: function () {
        for (let hour = 6; hour <= 19; hour++) {
            let customers = this.getRandomCustomers();
            let cookiesSold = Math.floor(customers * this.avgCookiesPerCustomer);
            this.hourlySales.push(cookiesSold);
        }
    }
};

dubai.calculateHourlySales();

let dubaiSalesList = document.getElementById('dubai-sales-list');
for (let hour = 6; hour <= 19; hour++) {
    let listItem = document.createElement('li');
    listItem.textContent = hour + 'am: ' + dubai.hourlySales[hour - 6] + ' cookies';
    dubaiSalesList.appendChild(listItem);
};

let paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookiesPerCustomer: 2.3,
    hourlySales: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
    calculateHourlySales: function () {
        for (let hour = 6; hour <= 19; hour++) {
            let customers = this.getRandomCustomers();
            let cookiesSold = Math.floor(customers * this.avgCookiesPerCustomer);
            this.hourlySales.push(cookiesSold);
        }
    }
};

paris.calculateHourlySales();

let parisSalesList = document.getElementById('paris-sales-list');
for (let hour = 6; hour <= 19; hour++) {
    let listItem = document.createElement('li');
    listItem.textContent = hour + 'am: ' + paris.hourlySales[hour - 6] + ' cookies';
    parisSalesList.appendChild(listItem)
};

let lima = {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    hourlySales: [],
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    },
    calculateHourlySales: function () {
        for (let hour = 6; hour <= 19; hour++) {
            let customers = this.getRandomCustomers();
            let cookiesSold = Math.floor(customers * this.avgCookiesPerCustomer);
            this.hourlySales.push(cookiesSold);
        }
    }
};

lima.calculateHourlySales();

let limaSalesList = document.getElementById('lima-sales-list');
for (let hour = 6; hour <= 19; hour++) {
    let listItem = document.createElement('li');
    listItem.textContent = hour + 'am: ' + lima.hourlySales[hour - 6] + ' cookies';
    limaSalesList.appendChild(listItem);
};
