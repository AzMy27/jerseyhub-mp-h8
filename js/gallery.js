const galleries = [
  {
    name: "Paris Saint-Germain",
    year: "2025-2026",
    image: "psg-ucl-25-26.jfif",
    desc: "Juara dramatis lewat adu penalti 4-3 melawan Arsenal di final",
  },
  {
    name: "Paris Saint-Germain",
    year: "2024-2025",
    image: "psg-ucl-24-25.jfif",
    desc: "Pesta gol di final, libas Inter Milan 5-0 untuk kunci gelar",
  },
  {
    name: "Real Madrid",
    year: "2023-2024",
    image: "madrid-ucl-23-24.jfif",
    desc: "Tampil solid dan kalahkan Borussia Dortmund 2-0 di partai puncak",
  },
  {
    name: "Manchester City",
    year: "2022-2023",
    image: "city-ucl-22-23.jfif",
    desc: "Kunci gelar pertama lewat kemenangan tipis 1-0 atas Inter Milan",
  },
  {
    name: "Real Madrid",
    year: "2021-2022",
    image: "madrid-ucl-21-22.jfif",
    desc: "Comeback elegan, tekuk Liverpool 1-0 dan raih trofi ke-14",
  },
  {
    name: "Chealsea",
    year: "2020-2021",
    image: "chealse-ucl-20-21.jfif",
    desc: "Tampil disiplin, Chealsea tumbangkan Man City 1-0 di final",
  },
];

const gridGallery = document.getElementById("galleries-grid");

function renderGalleries() {
  let cardGridHTML = "";

  for (let rows = 0; rows < galleries.length; rows++) {
    cardGridHTML += `
        <div
          class="flex flex-col bg-primary-dark p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto group"
        >
          <div class="overflow-hidden rounded-lg mb-4">
            <img
              src="/assets/ucl-win/${galleries[rows].image}"
              alt="${galleries[rows].name}"
              class="h-64 w-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <span class="text-accent font-bold text-xl mb-2 text-center tracking-wide">${galleries[rows].name}</span>
          <h3 class="text-xl font-semibold text-gray-400 border-b border-gray-700 mb-3 pb-2">${galleries[rows].year}</h3>
          <p class="text-sm text-gray-300 flex-grow leading-relaxed ">${galleries[rows].desc}</p>
        </div>
    `;
  }
  gridGallery.innerHTML = cardGridHTML;
}

window.onload = function () {
  renderGalleries();
};
