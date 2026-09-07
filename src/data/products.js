// =========================================================
// DATA PRODUK MARTABAK5G
// Ganti nilai "image" dengan URL foto asli kamu nanti.
// Semua gambar terpusat di sini supaya mudah diganti.
// =========================================================

export const CATEGORIES = [
  { id: "semua", label: "Semua" },
  { id: "manis", label: "Manis" },
  { id: "telur", label: "Telur" },
  { id: "premium", label: "Premium" },
];

// Foto di bawah ini sudah diverifikasi (dicek judul/alt aslinya di sumbernya)
// benar-benar foto martabak manis / martabak mini, dari Unsplash & Pexels
// (gratis, bebas pakai komersial). Tetap sangat disarankan ganti dengan
// foto martabak buatanmu sendiri begitu sudah ada.
export const PRODUCTS = [
  {
    id: 1,
    name: "Martabak Original",
    description: "Martabak manis klasik dengan taburan meses dan mentega gurih.",
    price: 20000,
    category: "manis",
    badge: "Favorit",
    image: "https://images.unsplash.com/photo-1776073975852-435302bbbe7a?w=600&q=80",
  },
  {
    id: 2,
    name: "Martabak Coklat",
    description: "Lumeran coklat premium di setiap gigitan yang lembut.",
    price: 23000,
    category: "manis",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1776073976386-2e7f9a220c4e?w=600&q=80",
  },
  {
    id: 3,
    name: "Martabak Keju",
    description: "Keju parut melimpah dengan rasa gurih yang bikin nagih.",
    price: 25000,
    category: "manis",
    badge: null,
    image: "https://images.unsplash.com/photo-1776073975866-1867ddd306d3?w=600&q=80",
  },
  {
    id: 4,
    name: "Martabak Coklat Keju",
    description: "Perpaduan manis coklat dan gurih keju dalam satu loyang.",
    price: 28000,
    category: "manis",
    badge: "Favorit",
    image: "https://images.unsplash.com/photo-1776073975923-91e45221f088?w=600&q=80",
  },
  {
    id: 5,
    name: "Martabak Oreo",
    description: "Taburan oreo renyah di atas adonan martabak yang lembut.",
    price: 28000,
    category: "manis",
    badge: null,
    image: "https://images.unsplash.com/photo-1776073975885-8f955bc74a76?w=600&q=80",
  },
  {
    id: 6,
    name: "Martabak Kacang Coklat",
    description: "Kombinasi kacang tanah cincang dan coklat leleh yang klasik.",
    price: 27000,
    category: "manis",
    badge: null,
    image: "https://images.unsplash.com/photo-1776073976391-cefe3169481e?w=600&q=80",
  },
  {
    id: 7,
    name: "Martabak Red Velvet",
    description: "Sentuhan modern red velvet dengan cream cheese lembut.",
    price: 30000,
    category: "premium",
    badge: "Premium",
    image: "https://images.pexels.com/photos/37240958/pexels-photo-37240958.jpeg?w=600&q=80",
  },
  {
    id: 8,
    name: "Martabak Premium 5G",
    description: "Signature Martabak5G, full topping: coklat, keju, kacang, susu.",
    price: 35000,
    category: "premium",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1771120790521-515467792fbf?w=600&q=80",
  },
];

// CATATAN PENTING soal foto martabak telur:
// Aku tidak menemukan foto stok GRATIS yang bisa dipastikan benar-benar
// martabak telur (kebanyakan hasil pencarian ada di situs berbayar seperti
// iStock/Shutterstock/Getty). Supaya tidak salah lagi sepertimu alami di
// foto sebelumnya, 4 foto di bawah ini pakai foto street food/proses masak
// Indonesia yang sudah terverifikasi asli — TAPI belum tentu persis martabak
// telur. Sangat disarankan ganti 4 gambar ini dengan foto martabak telur
// asli dari tokomu begitu tersedia.
export const MARTABAK_TELUR = [
  {
    id: 101,
    name: "Martabak Telur Ayam",
    description: "Martabak telur klasik isi daging ayam cincang dan rempah.",
    price: 25000,
    category: "telur",
    badge: null,
    image: "https://images.pexels.com/photos/31694685/pexels-photo-31694685.jpeg?w=600&q=80",
  },
  {
    id: 102,
    name: "Martabak Telur Spesial",
    description: "Isian lebih tebal dengan campuran daun bawang dan bumbu spesial.",
    price: 30000,
    category: "telur",
    badge: "Favorit",
    image: "https://images.pexels.com/photos/31694686/pexels-photo-31694686.jpeg?w=600&q=80",
  },
  {
    id: 103,
    name: "Martabak Telur Sapi",
    description: "Daging sapi cincang gurih dengan kulit renyah berlapis.",
    price: 35000,
    category: "telur",
    badge: null,
    image: "https://images.pexels.com/photos/37031316/pexels-photo-37031316.jpeg?w=600&q=80",
  },
  {
    id: 104,
    name: "Martabak Telur 5G Special",
    description: "Signature telur, isian double daging dan keju leleh di dalamnya.",
    price: 40000,
    category: "telur",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1771120790521-515467792fbf?w=600&q=80",
  },
];

export const ALL_PRODUCTS = [...PRODUCTS, ...MARTABAK_TELUR];

// Foto hero terverifikasi: martabak manis yang tersaji rapi di piring (Pexels)
export const HERO_IMAGE =
  "https://images.pexels.com/photos/37240958/pexels-photo-37240958.jpeg?w=900&q=80";

// Foto about terverifikasi: martabak mini dengan topping warna-warni (Unsplash)
export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1776073976391-cefe3169481e?w=800&q=80";

// Nomor WhatsApp placeholder — ganti dengan nomor toko asli
export const WHATSAPP_NUMBER = "6281234567890";

export const formatRupiah = (value) =>
  "Rp" + value.toLocaleString("id-ID");
