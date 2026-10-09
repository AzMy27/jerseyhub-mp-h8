var products = [
  {
    name: "PSG Home",
    category: "Ligue 1",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/psg-home-24-25.jpg",
    desc: "Jersey kebanggaan kota Paris. Tampil elegan dengan warna biru khas PSG dipadukan aksen merah-putih.",
  },
  {
    name: "PSG Away",
    category: "Ligue 1",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/psg-away-24-25.jfif",
    desc: "Desain tandang minimalis yang cocok untuk gaya kasual di luar lapangan maupun saat bermain.",
  },
  {
    name: "Real Madrid Home",
    category: "LaLiga",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/real-madrid-home-24-25.avif",
    desc: "Seragam putih ikonik dari sang raja Eropa. Dilengkapi material penyejuk premium.",
  },
  {
    name: "Real Madrid Away",
    category: "LaLiga",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/real-madrid-away-24-25.jfif",
    desc: "Warna alternatif memukau yang memancarkan aura juara Los Blancos di markas lawan.",
  },
  {
    name: "Arsenal Home",
    category: "Premier League",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/arsenal-home-24-25.jfif",
    desc: "Meriam London telah siap! Kombinasi merah dan putih klasik untuk para Gooners sejati.",
  },
  {
    name: "Arsenal Away",
    category: "Premier League",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/arsenal-away-24-25.jfif",
    desc: "Tampil beda dengan desain modern yang terinspirasi dari kejayaan Arsenal di masa lalu.",
  },
  {
    name: "Bayern Munich Home",
    category: "Bundesliga",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/bayern-munich-home-24-25.jfif",
    desc: "Die Roten! Merah menyala melambangkan dominasi Bayern di tanah Jerman dan Eropa.",
  },
  {
    name: "Bayern Munich Away",
    category: "Bundesliga",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/bayern-munich-away-24-25.jfif",
    desc: "Desain tandang yang kokoh dan taktis, merepresentasikan gaya permainan spartan ala Bavaria.",
  },
  {
    name: "Inter Milan Home",
    category: "Serie A",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/inter-milan-home-24-25.jfif",
    desc: "Nerazzurri kembali beraksi! Strip hitam-biru klasik dengan sentuhan bahan ringan premium.",
  },
  {
    name: "Inter Milan Away",
    category: "Serie A",
    stock: 50,
    price: 250000,
    year: "2024-2025",
    image: "/assets/inter-milan-away-24-25.jfif",
    desc: "Gaya elegan khas Milan. Jersey yang tidak hanya cocok untuk bertanding, tapi juga untuk bergaya santai.",
  },
];

const productGrid = document.getElementById("products-grid");
const categoryFilter = document.getElementById("category-filter");

function renderProducts(data) {
  let cardGridHTML = "";

  if (data.length === 0) {
    productGrid.innerHTML = `<p class="text-center col-span-full text-gray-600 font-bold-py-12">Produk dari liga ini kosong.</p>`;
    return;
  }

  for (let rows = 0; rows < data.length; rows++) {
    let hargaIndo = data[rows].price.toLocaleString("id-ID");
    cardGridHTML += `
        <div
          class="flex flex-col bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto"
        >
          <span class="text-secondary font-bold text-lg mb-2">${data[rows].name}</span>
          <div class="overflow-hidden rounded-lg mb-4">
            <img
            src="${data[rows].image}"
            alt="${data[rows].name}"
            class="h-64 w-full rounded-lg object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <p class="text-sm text-gray-700 mb-4 flex-grow">${data[rows].desc}</p>
          <h3 class="text-xl font-bold text-primary-dark mb-4">Rp. ${hargaIndo}</h3>
          <button
            type="button"
            onclick="addToCart('${data[rows].name}', ${data[rows].price})"
            class="bg-primary hover:bg-primary-dark text-white text-center py-2 rounded-lg shadow-lg font-semibold transition-colors"
          >
            Tambah
          </button>
        </div>`;
  }
  if (productGrid) {
    productGrid.innerHTML = cardGridHTML;
  }
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", function () {
    let pilihan = categoryFilter.value;
    if (pilihan === "Semua") {
      renderProducts(products);
    } else {
      let produkTerpilih = products.filter(function (baju) {
        return baju.category === pilihan;
      });
      renderProducts(produkTerpilih);
    }
  });
}

function addToCart(nama, harga) {}

window.onload = function () {
  renderProducts(products);
};
