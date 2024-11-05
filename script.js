// Search functionality with partial matches
document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const sections = document.querySelectorAll('.download-section');

    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        // Check if section text includes the search term, allowing partial matches
        if (text.includes(filter)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});
