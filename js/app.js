'use strict';

document.addEventListener('DOMContentLoaded', function() {

  function CookieStand(name, minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.hourlySales = [];

    this.getRandomCustomers = function() {
      return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    };

    this.calculateHourlySales = function() {
      for (var hour = 6; hour <= 19; hour++) {
        var customers = this.getRandomCustomers();
        var cookiesSold = Math.floor(customers * this.avgCookiesPerCustomer); // Round down to remove decimal points
        this.hourlySales.push(cookiesSold);
      }
    };

    this.render = function() {
      var tableRow = document.createElement('tr');
      var locationCell = document.createElement('td');
      locationCell.textContent = this.name;
      tableRow.appendChild(locationCell);

      for (var hour = 6; hour <= 11; hour++) {
        var salesCell = document.createElement('td');
        salesCell.textContent = this.hourlySales[hour - 6];
        tableRow.appendChild(salesCell);
      }

      var noonSalesCell = document.createElement('td');
      noonSalesCell.textContent = this.hourlySales[6];
      tableRow.appendChild(noonSalesCell);

      for (var hour = 13; hour <= 19; hour++) {
        var salesCell = document.createElement('td');
        salesCell.textContent = this.hourlySales[hour - 6];
        tableRow.appendChild(salesCell);
      }

      var totalCell = document.createElement('td');
      totalCell.textContent = this.calculateDailyTotal();
      tableRow.appendChild(totalCell);

      salesTable.appendChild(tableRow);
    };

    this.calculateDailyTotal = function() {
      var total = 0;
      for (var hour = 0; hour < this.hourlySales.length; hour++) {
        total += this.hourlySales[hour];
      }
      return total;
    };
  }

  var salesTable = document.getElementById('sales-table');

  function renderTableHeader() {
    var tableRow = document.createElement('tr');
    var headerCell = document.createElement('th');
    headerCell.textContent = 'Location';
    tableRow.appendChild(headerCell);

    for (var hour = 6; hour <= 11; hour++) {
      var headerCell = document.createElement('th');
      headerCell.textContent = hour + ':00am';
      tableRow.appendChild(headerCell);
    }

    var noonHeaderCell = document.createElement('th');
    noonHeaderCell.textContent = '12:00pm';
    tableRow.appendChild(noonHeaderCell);

    for (var hour = 1; hour <= 7; hour++) {
      var headerCell = document.createElement('th');
      headerCell.textContent = hour + ':00pm';
      tableRow.appendChild(headerCell);
    }

    var totalHeaderCell = document.createElement('th');
    totalHeaderCell.textContent = 'Daily Location Total';
    tableRow.appendChild(totalHeaderCell);

    salesTable.appendChild(tableRow);
  }

  function renderTableFooter() {
    var tableRow = document.createElement('tr');
    var footerCell = document.createElement('td');
    footerCell.textContent = 'Totals';
    tableRow.appendChild(footerCell);

    var grandTotal = 0;
    for (var hour = 6; hour <= 19; hour++) {
      var totalCell = document.createElement('td');
      var hourlyTotal = 0;

      hourlyTotal += seattle.hourlySales[hour - 6] + tokyo.hourlySales[hour - 6] + dubai.hourlySales[hour - 6] + paris.hourlySales[hour - 6] + lima.hourlySales[hour - 6];
      grandTotal += hourlyTotal;

      totalCell.textContent = hourlyTotal;
      tableRow.appendChild(totalCell);
    }

    var grandTotalCell = document.createElement('td');
    grandTotalCell.textContent = grandTotal;
    tableRow.appendChild(grandTotalCell);

    salesTable.appendChild(tableRow);
  }

  var seattle = new CookieStand('Seattle', 23, 65, 6.3);
  var tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
  var dubai = new CookieStand('Dubai', 11, 38, 3.7);
  var paris = new CookieStand('Paris', 20, 38, 2.3);
  var lima = new CookieStand('Lima', 2, 16, 4.6);

  renderTableHeader();
  seattle.calculateHourlySales();
  tokyo.calculateHourlySales();
  dubai.calculateHourlySales();
  paris.calculateHourlySales();
  lima.calculateHourlySales();
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
  renderTableFooter();

});


