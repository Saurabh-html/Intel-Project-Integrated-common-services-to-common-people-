document.querySelectorAll('.details-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const name = this.getAttribute('data-name');
        const location = this.getAttribute('data-location');
        const stream = this.getAttribute('data-stream');
        const rating = this.getAttribute('data-rating');
        const detailsPage = window.open('', '_blank');
        detailsPage.document.write(`
            <html>
            <head>
                <title>${name} Details</title>
                <style>
                    body {
                        font-family: sans-serif;
                        margin: 0;
                        padding: 20px;
                        background-color: #f4f4f4;
                    }
                    h1 {
                        color: #6A5ACD;
                    }
                    .content {
                        background-color: white;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                </style>
            </head>
            <body>
                <div class="content">
                    <h1>${name} Details</h1>
                    <p><strong>Location:</strong> ${location}</p>
                    <p><strong>Stream:</strong> ${stream}</p>
                    <p><strong>Rating:</strong> ${rating}</p>
                    <p><strong>Contact Email:</strong> <a href="mailto:contact@${name.toLowerCase().replace(/ /g, '')}.com">contact@${name.toLowerCase().replace(/ /g, '')}.com</a></p>
                    <p><strong>Fee Structure:</strong> INR 75,000 per annum</p>
                    <p><strong>Classes:</strong> Nursery to 12th (for schools) / Undergraduate to Postgraduate (for colleges)</p>
                    <p>Additional details about ${name} can be provided here.</p>
                </div>
            </body>
            </html>
        `);
    });
});

// JavaScript for search functionality
document.getElementById('searchBar').addEventListener('keyup', function() {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#detailsTable tr');
    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const location = row.cells[1].textContent.toLowerCase();
        const stream = row.cells[2].textContent.toLowerCase();
        if (name.includes(filter) || location.includes(filter) || stream.includes(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
