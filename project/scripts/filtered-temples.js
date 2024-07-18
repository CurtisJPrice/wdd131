const temples = [
    {
        templeName: "???-1",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-2",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-3",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-4",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-5",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-6",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-7",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-8",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },
    {
        templeName: "???-9",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "???",
        area: 54,
        imageUrl:
            "???"
    },

];



document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = new Date(document.lastModified).toLocaleDateString();

    yearSpan.textContent = currentYear;
    lastModifiedSpan.textContent = lastModifiedDate;

    // Hamburger menu functionality
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.classList.add('nav-toggle');
    nav.prepend(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        navToggle.textContent = nav.classList.contains('open') ? '✖' : '☰';
    });

    const templeContainer = document.getElementById('temple-container');
    const links = document.querySelectorAll('nav ul li a');

    function updateTitle(filter) {
        const titleElement = document.querySelector('main h2');
        const capitalizedFilter = filter.charAt(0).toUpperCase() + filter.slice(1);
        titleElement.textContent = capitalizedFilter + ' Parks List';
    }

    function displayTemples(filter) {
        templeContainer.innerHTML = '';
        let filteredTemples = temples;

        if (filter === 'old') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        } else if (filter === 'new') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
        } else if (filter === 'large') {
            filteredTemples = temples.filter(temple => temple.area > 90000);
        } else if (filter === 'small') {
            filteredTemples = temples.filter(temple => temple.area < 10000);
        }

        updateTitle(filter);

        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');

            const templeImage = document.createElement('img');
            templeImage.src = temple.imageUrl;
            templeImage.alt = temple.templeName;
            templeImage.loading = 'lazy';

            const templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            const templeLocation = document.createElement('p');
            templeLocation.textContent = `Park Location: ${temple.location}`;

            const templeDescribe = document.createElement('p');
            templeDescribe.textContent = `Park Description: ${temple.describe}`;

            const templeSource = document.createElement('p');
            templeSource.textContent = `Source: ${temple.sourceUrl}`;

            const templeDedicated = document.createElement('p');
            templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

            const templeArea = document.createElement('p');
            templeArea.textContent = `Area: ${temple.area} sq ft`;

            templeCard.appendChild(templeImage);
            templeCard.appendChild(templeName);
            templeCard.appendChild(templeLocation);
            templeCard.appendChild(templeDescribe);
            templeCard.appendChild(templeSource);
            templeCard.appendChild(templeDedicated);
            templeCard.appendChild(templeArea);

            templeContainer.appendChild(templeCard);
        });
    }

    displayTemples('home');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const filter = event.target.dataset.filter;
            displayTemples(filter);
        });
    });
});