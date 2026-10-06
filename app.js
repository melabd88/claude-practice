// Categories data
const CATEGORIES = {
  systemdesign: {
    label: 'System Design',
    headline: 'system design',
    pool: [
      { id: 'graphql', name: 'GraphQL', logo: 'logos/systemdesign_graphql.png', color: '#EC4899', description: 'Query language for APIs. Allows clients to request exactly the data they need, reducing over-fetching.' },
      { id: 'microservices', name: 'Microservices', logo: 'logos/systemdesign_microservices.png', color: '#8B5CF6', description: 'Architectural style using small, independent services. Enables scalability but adds complexity.' },
      { id: 'realtime', name: 'Real-time Architecture', logo: 'logos/systemdesign_realtime.png', color: '#F59E0B', description: 'Systems designed for low-latency, immediate data updates. Uses WebSockets, gRPC, or message queues.' },
      { id: 'search', name: 'Search', logo: 'logos/systemdesign_search.png', color: '#6366F1', description: 'Full-text search capabilities using Elasticsearch, Algolia, or similar. Critical for discoverability.' },
      { id: 'serverless', name: 'Serverless', logo: 'logos/systemdesign_serverless.png', color: '#10B981', description: 'Function-as-a-Service compute. Auto-scales but vendor lock-in and cold starts are concerns.' },
      { id: 'storage', name: 'Object Storage', logo: 'logos/systemdesign_storage.png', color: '#3B82F6', description: 'Cloud storage like S3, GCS. Scalable and cost-effective for unstructured data.' },
      { id: 'caching', name: 'Caching', logo: 'logos/systemdesign_caching.png', color: '#06B6D4', description: 'Reduce latency with Redis, Memcached, or CDN caching. Essential for performance at scale.' },
      { id: 'loadbalancing', name: 'Load Balancing', logo: 'logos/systemdesign_loadbalancing.png', color: '#EF4444', description: 'Distribute traffic across multiple servers. Ensures availability and improves throughput.' },
      { id: 'queues', name: 'Message Queues', logo: 'logos/systemdesign_queues.png', color: '#F97316', description: 'RabbitMQ, Kafka, SQS for async communication. Decouples services and handles spikes.' },
      { id: 'cdn', name: 'CDN', logo: 'logos/systemdesign_cdn.png', color: '#6B7280', description: 'Content delivery network for fast static asset delivery globally.' },
      { id: 'sharding', name: 'Sharding', logo: 'logos/systemdesign_sharding.png', color: '#8B5CF6', description: 'Database partitioning strategy for horizontal scaling. Improves read/write throughput.' },
      { id: 'ratelimit', name: 'Rate Limiting', logo: 'logos/systemdesign_ratelimit.png', color: '#FBBF24', description: 'Control request rates to prevent abuse and ensure fair usage.' },
    ]
  },
  watches: {
    label: 'Watches',
    headline: 'watches',
    pool: [
      { id: 'rolex-sub', name: 'Rolex Submariner', logo: 'logos/watches_rolex-sub.png', color: '#FFD700', description: 'Iconic sports watch known for durability and precision. The most recognizable dive watch in the world.' },
      { id: 'omega-speed', name: 'Omega Speedmaster', logo: 'logos/watches_omega-speed.png', color: '#F97316', description: 'First watch on the moon. Legendary chronograph with incredible heritage and accuracy.' },
      { id: 'casio-f91w', name: 'Casio F-91W', logo: 'logos/watches_casio-f91w.png', color: '#1f2937', description: 'Digital classic. Affordable, reliable, and iconic. The best-selling watch ever.' },
      { id: 'patek-philippe', name: 'Patek Philippe Nautilus', logo: 'logos/watches_patek-philippe.png', color: '#4169E1', description: 'Luxury sports watch. Integrated bracelet design set the standard for prestige watches.' },
      { id: 'apple-watch', name: 'Apple Watch', logo: 'logos/watches_apple-watch.png', color: '#000000', description: 'Smart watch that changed wearables. Fitness tracking and notifications at your wrist.' },
      { id: 'seiko-5', name: 'Seiko 5', logo: 'logos/watches_seiko-5.png', color: '#DC143C', description: 'Affordable automatic watch. Best entry-level mechanical timepiece.' },
      { id: 'cartier-tank', name: 'Cartier Tank', logo: 'logos/watches_cartier-tank.png', color: '#FFD700', description: 'Elegant rectangular watch. Timeless design inspired by military tanks.' },
      { id: 'rolex-datejust', name: 'Rolex Datejust', logo: 'logos/watches_rolex-datejust.png', color: '#C0C0C0', description: 'Classic dress watch. First automatic calendar watch with date window.' },
      { id: 'tudor-black-bay', name: 'Tudor Black Bay', logo: 'logos/watches_tudor-black-bay.png', color: '#8B0000', description: 'Modern vintage watch. Affordable alternative to Rolex sports watches.' },
      { id: 'breitling-navitimer', name: 'Breitling Navitimer', logo: 'logos/watches_breitling-navitimer.png', color: '#000000', description: 'Pilot\'s chronograph. Complex dial with slide rule for aviation calculations.' },
      { id: 'omega-seamaster', name: 'Omega Seamaster', logo: 'logos/watches_omega-seamaster.png', color: '#87CEEB', description: 'Bond\'s watch. Sophisticated dive watch with excellent water resistance.' },
      { id: 'grand-seiko', name: 'Grand Seiko', logo: 'logos/watches_grand-seiko.png', color: '#696969', description: 'Japanese precision. Excellence in timekeeping and finishing.' },
      { id: 'iwc-pilot', name: 'IWC Pilot\'s Watch', logo: 'logos/watches_iwc-pilot.png', color: '#8B4513', description: 'German engineering. Clean, functional design inspired by aviation.' },
      { id: 'chopard-alpine', name: 'Chopard Alpine Eagle', logo: 'logos/watches_chopard-alpine.png', color: '#FFD700', description: 'Modern sports watch. Integrated bracelet with elegant aesthetics.' },
      { id: 'zenith-el-primero', name: 'Zenith El Primero', logo: 'logos/watches_zenith-el-primero.png', color: '#FF6347', description: 'Original automatic chronograph. High-frequency movement for precision.' },
    ]
  },
  cars: {
    label: 'Cars',
    headline: 'cars',
    pool: [
      { id: 'porsche-911', name: 'Porsche 911', logo: 'logos/cars_porsche-911.png', color: '#FF0000', description: 'Iconic sports car. Legendary performance and handling that defined a generation.' },
      { id: 'toyota-supra', name: 'Toyota Supra', logo: 'logos/cars_toyota-supra.png', color: '#FFD700', description: 'Japanese sports legend. Turbocharged performance and tuning potential.' },
      { id: 'ford-mustang', name: 'Ford Mustang', logo: 'logos/cars_ford-mustang.png', color: '#0066CC', description: 'American muscle car. Powerful V8 engines and cultural icon status.' },
      { id: 'tesla-model-s', name: 'Tesla Model S', logo: 'logos/cars_tesla-model-s.png', color: '#FF0000', description: 'Electric performance sedan. Zero to 60 in seconds, revolutionary EV technology.' },
      { id: 'lamborghini-miura', name: 'Lamborghini Miura', logo: 'logos/cars_lamborghini-miura.png', color: '#FF6600', description: 'First supercar. Mid-engine layout changed automotive design forever.' },
      { id: 'ferrari-f40', name: 'Ferrari F40', logo: 'logos/cars_ferrari-f40.png', color: '#FF0000', description: 'Last V12 Ferrari. 478 hp naturally aspirated engine, pure mechanical perfection.' },
      { id: 'mercedes-amg-gtr', name: 'Mercedes-AMG GT R', logo: 'logos/cars_mercedes-amg-gtr.png', color: '#00AA00', description: 'Modern grand tourer. Stunning design with twin-turbo performance.' },
      { id: 'bugatti-veyron', name: 'Bugatti Veyron', logo: 'logos/cars_bugatti-veyron.png', color: '#0000FF', description: 'Hypercar pioneer. First production car to exceed 250 mph.' },
      { id: 'nissan-r33', name: 'Nissan Skyline R33 GT-R', logo: 'logos/cars_nissan-r33.png', color: '#0099FF', description: 'JDM legend. Twin-turbo inline-six and all-wheel-drive dominance.' },
      { id: 'mclaren-f1', name: 'McLaren F1', logo: 'logos/cars_mclaren-f1.png', color: '#FF8C00', description: 'Ultimate supercar. Naturally aspirated V12, carbon fiber pioneer.' },
      { id: 'corvette-c8', name: 'Chevrolet Corvette C8', logo: 'logos/cars_corvette-c8.png', color: '#FF0000', description: 'American supercar. First mid-engine Corvette with incredible value.' },
      { id: 'aston-martin-db5', name: 'Aston Martin DB5', logo: 'logos/cars_aston-martin-db5.png', color: '#00AA00', description: 'Bond\'s car. Timeless elegance with James Bond gadgets.' },
      { id: 'jaguar-xke', name: 'Jaguar E-Type', logo: 'logos/cars_jaguar-xke.png', color: '#0066CC', description: 'Beautiful classic sports car. Considered one of the most gorgeous cars ever made.' },
      { id: 'bmw-m1', name: 'BMW M1', logo: 'logos/cars_bmw-m1.png', color: '#0066CC', description: 'First M supercar. Mid-engine BMW performance and iconic design.' },
      { id: 'delorean-dmc12', name: 'DeLorean DMC-12', logo: 'logos/cars_delorean-dmc12.png', color: '#C0C0C0', description: 'Iconic time machine. Gull-wing doors and stainless steel body.' },
    ]
  },
  films: {
    label: 'Films',
    headline: 'films',
    pool: [
      { id: 'godfather', name: 'The Godfather', logo: 'logos/films_godfather.png', color: '#8B0000', description: 'Mafia epic. Widely considered one of the greatest films ever made.' },
      { id: 'inception', name: 'Inception', logo: 'logos/films_inception.png', color: '#000080', description: 'Mind-bending sci-fi. Stunning visuals and complex narrative about dreams.' },
      { id: 'pulp-fiction', name: 'Pulp Fiction', logo: 'logos/films_pulp-fiction.png', color: '#FFD700', description: 'Tarantino\'s masterpiece. Non-linear storytelling and unforgettable dialogue.' },
      { id: 'parasite', name: 'Parasite', logo: 'logos/films_parasite.png', color: '#228B22', description: 'Social thriller. Korean masterpiece that won Best Picture.' },
      { id: 'shawshank', name: 'The Shawshank Redemption', logo: 'logos/films_shawshank.png', color: '#696969', description: 'Prison drama. Often cited as the greatest film of all time on IMDb.' },
      { id: 'dark-knight', name: 'The Dark Knight', logo: 'logos/films_dark-knight.png', color: '#000000', description: 'Batman superhero film. Elevated comic book movies to art form.' },
      { id: 'interstellar', name: 'Interstellar', logo: 'logos/films_interstellar.png', color: '#000000', description: 'Space odyssey. Emotional journey through wormholes and black holes.' },
      { id: 'forrest-gump', name: 'Forrest Gump', logo: 'logos/films_forrest-gump.png', color: '#FF6347', description: 'American classic. Heartwarming story spanning decades.' },
      { id: 'matrix', name: 'The Matrix', logo: 'logos/films_matrix.png', color: '#00FF00', description: 'Sci-fi revolution. Changed action cinema and visual effects forever.' },
      { id: 'silence-lambs', name: 'The Silence of the Lambs', logo: 'logos/films_silence-lambs.png', color: '#8B4513', description: 'Psychological thriller. Masterful cat-and-mouse narrative.' },
      { id: 'spirited-away', name: 'Spirited Away', logo: 'logos/films_spirited-away.png', color: '#FFB6C1', description: 'Anime masterpiece. Gorgeous animation and rich storytelling.' },
      { id: 'la-la-land', name: 'La La Land', logo: 'logos/films_la-la-land.png', color: '#FFD700', description: 'Musical romance. Modern musical with stunning cinematography.' },
      { id: 'lord-rings-fellowship', name: 'The Lord of the Rings: Fellowship', logo: 'logos/films_lord-rings-fellowship.png', color: '#228B22', description: 'Epic fantasy. Groundbreaking practical effects and worldbuilding.' },
      { id: 'gladiator', name: 'Gladiator', logo: 'logos/films_gladiator.png', color: '#DC143C', description: 'Historical epic. Powerful Russell Crowe performance and battle scenes.' },
      { id: 'blade-runner', name: 'Blade Runner 2049', logo: 'logos/films_blade-runner.png', color: '#FFD700', description: 'Sci-fi noir. Visually stunning cyberpunk sequel.' },
    ]
  }
};

let state = {
  category: 'systemdesign',
  items: [],
  placements: {},
};

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Pick random 10 items from a category pool
function pickRandom10(category) {
  const pool = CATEGORIES[category].pool;
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, 10);
}

// Initialize state from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem('tierlist-state');
    if (saved) {
      state = JSON.parse(saved);
    } else {
      state.items = pickRandom10('systemdesign');
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
    state.items = pickRandom10('systemdesign');
  }
}

// Save state to localStorage
function saveState() {
  try {
    localStorage.setItem('tierlist-state', JSON.stringify(state));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}

// Update headline based on category
function updateHeadline() {
  const category = CATEGORIES[state.category];
  document.querySelector('.headline .highlight').textContent = category.headline;
}

// Switch category
function switchCategory(categoryId) {
  state.category = categoryId;
  state.items = pickRandom10(categoryId);
  state.placements = {};
  saveState();
  updateHeadline();
  renderChips();
  updateCategoryButtons();
}

// Shuffle new items from current category
function shuffleNewItems() {
  state.items = pickRandom10(state.category);
  state.placements = {};
  saveState();
  renderChips();
}

// Render all chips
function renderChips() {
  const unrankedContainer = document.getElementById('unranked-chips');
  unrankedContainer.innerHTML = '';

  state.items.forEach(item => {
    const tier = state.placements[item.id];
    if (!tier) {
      const chipEl = createChipElement(item);
      unrankedContainer.appendChild(chipEl);
    }
  });

  // Render chips in tiers
  document.querySelectorAll('.tier-row').forEach(tierRow => {
    const tier = tierRow.dataset.tier;
    tierRow.innerHTML = '';

    state.items.forEach(item => {
      if (state.placements[item.id] === tier) {
        const chipEl = createChipElement(item);
        tierRow.appendChild(chipEl);
      }
    });
  });
}

// Create a chip element
function createChipElement(item) {
  const chip = document.createElement('div');
  chip.className = 'chip';
  chip.draggable = true;
  chip.dataset.itemId = item.id;
  chip.innerHTML = `
    <img src="${item.logo}" alt="${item.name}" class="chip-logo">
    <span class="chip-text">${item.name}</span>
  `;

  // Drag events
  chip.addEventListener('dragstart', handleDragStart);
  chip.addEventListener('dragend', handleDragEnd);
  chip.addEventListener('touchstart', handleTouchStart);
  chip.addEventListener('touchmove', handleTouchMove);
  chip.addEventListener('touchend', handleTouchEnd);

  // Click to show details
  chip.addEventListener('click', (e) => {
    if (!isDragging) {
      showDetails(item);
    }
  });

  return chip;
}

let isDragging = false;
let draggedChip = null;

function handleDragStart(e) {
  isDragging = true;
  draggedChip = e.target.closest('.chip');
  draggedChip.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', draggedChip.innerHTML);
}

function handleDragEnd(e) {
  isDragging = false;
  draggedChip?.classList.remove('dragging');
  document.querySelectorAll('.tier-row, #unranked-chips').forEach(el => {
    el.classList.remove('drag-over');
  });
}

// Touch drag support
let touchDraggedChip = null;
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
  touchDraggedChip = e.target.closest('.chip');
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}

function handleTouchMove(e) {
  if (!touchDraggedChip) return;
  e.preventDefault();
}

function handleTouchEnd(e) {
  if (!touchDraggedChip) return;

  const touch = e.changedTouches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  const tierRow = target?.closest('.tier-row');

  if (tierRow) {
    const itemId = touchDraggedChip.dataset.itemId;
    const tier = tierRow.dataset.tier;
    state.placements[itemId] = tier;
    saveState();
    renderChips();
  }

  touchDraggedChip = null;
}

// Drag over and drop
document.querySelectorAll('.tier-row').forEach(tierRow => {
  tierRow.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    tierRow.classList.add('drag-over');
  });

  tierRow.addEventListener('dragleave', (e) => {
    if (e.target === tierRow) {
      tierRow.classList.remove('drag-over');
    }
  });

  tierRow.addEventListener('drop', (e) => {
    e.preventDefault();
    tierRow.classList.remove('drag-over');
    if (draggedChip) {
      const itemId = draggedChip.dataset.itemId;
      const tier = tierRow.dataset.tier;
      state.placements[itemId] = tier;
      saveState();
      renderChips();
    }
  });
});

// Unranked tray drop
document.getElementById('unranked-chips').addEventListener('dragover', (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  e.currentTarget.closest('.tray')?.classList.add('drag-over');
});

document.getElementById('unranked-chips').addEventListener('dragleave', (e) => {
  e.currentTarget.closest('.tray')?.classList.remove('drag-over');
});

document.getElementById('unranked-chips').addEventListener('drop', (e) => {
  e.preventDefault();
  e.currentTarget.closest('.tray')?.classList.remove('drag-over');
  if (draggedChip) {
    const itemId = draggedChip.dataset.itemId;
    state.placements[itemId] = null;
    saveState();
    renderChips();
  }
});

// Show details modal
function showDetails(item) {
  document.getElementById('modal-logo').src = item.logo;
  document.getElementById('modal-logo').alt = item.name;
  document.getElementById('modal-title').textContent = item.name;
  document.getElementById('modal-description').textContent = item.description;
  document.getElementById('details-modal').classList.add('active');
}

// Close modal
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('details-modal').classList.remove('active');
});

document.getElementById('details-modal').addEventListener('click', (e) => {
  if (e.target.id === 'details-modal') {
    document.getElementById('details-modal').classList.remove('active');
  }
});

// Category buttons
function updateCategoryButtons() {
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-category="${state.category}"]`).classList.add('active');
}

document.querySelectorAll('.category-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const categoryId = btn.dataset.category;
    switchCategory(categoryId);
  });
});

// Reset button
document.getElementById('reset-btn').addEventListener('click', () => {
  state.placements = {};
  saveState();
  renderChips();
});

// Shuffle button
document.getElementById('shuffle-btn').addEventListener('click', () => {
  shuffleNewItems();
});

// Download PNG
document.getElementById('download-btn').addEventListener('click', () => {
  downloadAsImage();
});

function downloadAsImage() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const padding = 40;
  const titleHeight = 120;
  const tierHeight = 80;
  const tierLabelWidth = 60;
  const chipHeight = 40;

  const width = 1200;
  const height = titleHeight + (4 * tierHeight) + (2 * padding);

  canvas.width = width;
  canvas.height = height;

  // Background
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, width, height);

  // Title
  const category = CATEGORIES[state.category];
  ctx.fillStyle = '#1f2937';
  ctx.font = 'bold 40px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`Rank the ${category.headline}`, padding, padding + 40);

  // Tiers
  const tiers = ['S', 'A', 'B', 'C'];
  const tierColors = ['#EF4444', '#F97316', '#EAAB04', '#22C55E'];

  let y = titleHeight;

  tiers.forEach((tier, index) => {
    const color = tierColors[index];

    // Tier label
    ctx.fillStyle = color;
    ctx.fillRect(padding, y, tierLabelWidth, tierHeight);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(tier, padding + tierLabelWidth / 2, y + tierHeight / 2);

    // Tier row background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(padding + tierLabelWidth + 20, y, width - padding * 2 - tierLabelWidth - 20, tierHeight);
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 2;
    ctx.strokeRect(padding + tierLabelWidth + 20, y, width - padding * 2 - tierLabelWidth - 20, tierHeight);

    // Chips in this tier
    let chipX = padding + tierLabelWidth + 40;
    let chipY = y + 20;
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#1f2937';

    state.items.forEach(item => {
      if (state.placements[item.id] === tier) {
        // Chip background
        ctx.fillStyle = '#e5e7eb';
        ctx.beginPath();
        ctx.roundRect(chipX, chipY, 120, chipHeight, 20);
        ctx.fill();

        // Chip text
        ctx.fillStyle = '#1f2937';
        ctx.fillText(item.name, chipX + 10, chipY + chipHeight / 2);
        chipX += 130;
      }
    });

    y += tierHeight;
  });

  // Download
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${category.headline}-tier-list.png`;
    a.click();
    URL.revokeObjectURL(url);
  });
}

// Initialize
loadState();
updateHeadline();
renderChips();
updateCategoryButtons();
