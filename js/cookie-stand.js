// cookie-stand.js

// Constructor function for Cookie Stand
function CookieStand(location, hourlySales) {
    this.location = location;
    this.hourlySales = hourlySales.split(',').map(Number);
    this.totalSales = 0;
}

// Function to add a new Cookie Stand to the table
function addCookieStand(event) {
    event.preventDefault();
    
    // Retrieve form inputs
    const locationInput = document.getElementById('location');
    const hourlySalesInput = document.getElementById('hourlySales');

    // Create a new Cookie Stand instance
    const newCookieStand = new CookieStand(locationInput.value, hourlySalesInput.value);

    // Add the new Cookie Stand row to the table
    addCookieStandRow(newCookieStand);

    // Clear form inputs
    locationInput.value = '';
    hourlySalesInput.value = '';
}

// Function to add a new Cookie Stand row to the table
function addCookieStandRow(cookieStand) {
    // Access the table body
    const tableBody = document.querySelector('#cookieStandTable tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Add location cell
    const locationCell = document.createElement('td');
    locationCell.textContent = cookieStand.location;
    newRow.appendChild(locationCell);

    // Add hourly sales cells
    cookieStand.hourlySales.forEach((sales) => {
        const hourlySalesCell = document.createElement('td');
        hourlySalesCell.textContent = sales;
        newRow.appendChild(hourlySalesCell);
    });

    // Calculate and add total sales cell
    const totalSalesCell = document.createElement('td');
    totalSalesCell.textContent = cookieStand.hourlySales.reduce((a, b) => a + b, 0);
    newRow.appendChild(totalSalesCell);

    // Append the row to the table
    tableBody.appendChild(newRow);

    // Update the footer
    updateFooter();
}

// Function to update the footer row with total sales per hour
function updateFooter() {
    const tableBody = document.querySelector('#cookieStandTable tbody');
    const footerRow = document.getElementById('footerRow');
    const hourlyTotalCell = document.getElementById('hourlyTotal');

    const totals = Array.from({ length: 12 }, () => 0);

    // Calculate totals
    tableBody.querySelectorAll('tr').forEach((row) => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            if (index > 0 && index < 13) {
                totals[index - 1] += parseInt(cell.textContent) || 0;
            }
        });
    });

    // Update hourly totals in the footer
    hourlyTotalCell.textContent = '';
    totals.forEach((total) => {
        const cell = document.createElement('td');
        cell.textContent = total;
        hourlyTotalCell.appendChild(cell);
    });
}
