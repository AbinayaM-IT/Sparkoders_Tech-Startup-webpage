function showDetails(productId) {
    const detailsDiv = document.getElementById(`details-${productId}`);
    if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
        detailsDiv.style.display = 'block';
    } else {
        detailsDiv.style.display = 'none';
    }
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}
window.addEventListener('resize', adjustLayout);

function adjustLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 480) {
        document.body.style.backgroundColor = "#EFEFEF";
    } else if (screenWidth < 768) {
        document.body.style.backgroundColor = "#D9D9D9";
    } else {
        document.body.style.backgroundColor = "#FFFFFF";
    }
}
function toggleNav() {
    document.body.classList.toggle('nav-open');
}

// Initial call to set layout on page load
adjustLayout();

