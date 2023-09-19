let currentPage = 1;
const itemsPerPage = 12;
let tagsData = [];

function loadTagsData() {
    fetch('tags.json')
        .then(response => response.json())
        .then(data => {
            tagsData = data.tags;
            updatePage();
        })
        .catch(error => console.error(error));
}

function nextPage() {
    if (currentPage < getTotalPages()) {
        currentPage++;
        updatePage();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

function getTotalPages() {
    return Math.ceil(tagsData.length / itemsPerPage);
}

function updatePage() {
    const tableBody = document.querySelector('#elementTable tbody');
    tableBody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < tagsData.length; i++) {
        const tag = tagsData[i];
        const row = `
            <tr>
                <td>${tag.element}</td>
                <td>${tag.description}</td>
                <td>${tag.attributes.join(', ')}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    }
}

const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');

previousBtn.addEventListener('click', previousPage);
nextBtn.addEventListener('click', nextPage);

window.addEventListener('load', loadTagsData);
