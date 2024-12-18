function loadContent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading ${file}: `, error);
        });
}

loadContent('navigation.html', 'navigation');  
loadContent('footer.html', 'footer');    