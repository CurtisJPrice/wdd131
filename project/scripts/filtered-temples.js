const temples = [
    {
        templeName: "???-1",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 1, 1996",
        area: 4200,
        imageUrl:
            "???"
    },
    {
        templeName: "???-2",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 2, 1996",
        area: 42000,
        imageUrl:
            "???"
    },
    {
        templeName: "???-3",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 3, 1996",
        area: 420,
        imageUrl:
            "???"
    },
    {
        templeName: "???-4",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 4, 1997",
        area: 570,
        imageUrl:
            "???"
    },
    {
        templeName: "???-5",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 5, 1997",
        area: 5700,
        imageUrl:
            "???"
    },
    {
        templeName: "???-6",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 6, 1997",
        area: 57000,
        imageUrl:
            "???"
    },
    {
        templeName: "???-7",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 7, 1998",
        area: 990,
        imageUrl:
            "???"
    },
    {
        templeName: "???-8",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 8, 1998",
        area: 9900,
        imageUrl:
            "???"
    },
    {
        templeName: "???-9",
        location: "???",
        describe: "???",
        sourceUrl:
            "???",
        dedicated: "November 9, 1998",
        area: 99000,
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
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1997);
        } else if (filter === 'new') {
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 1998);
        } else if (filter === 'large') {
            filteredTemples = temples.filter(temple => temple.area > 80000);
        } else if (filter === 'small') {
            filteredTemples = temples.filter(temple => temple.area < 700);
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
            templeDedicated.textContent = `Park Founded: ${temple.dedicated}`;

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