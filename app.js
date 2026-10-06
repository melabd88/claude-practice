// Concepts data
const CONCEPTS = [
  { id: 'graphql', name: 'GraphQL', icon: '📊', color: '#EC4899', description: 'Query language for APIs. Allows clients to request exactly the data they need, reducing over-fetching.' },
  { id: 'microservices', name: 'Microservices', icon: '🔧', color: '#8B5CF6', description: 'Architectural style using small, independent services. Enables scalability but adds complexity.' },
  { id: 'realtime', name: 'Real-time Architecture', icon: '⚡', color: '#F59E0B', description: 'Systems designed for low-latency, immediate data updates. Uses WebSockets, gRPC, or message queues.' },
  { id: 'search', name: 'Search', icon: '🔍', color: '#6366F1', description: 'Full-text search capabilities using Elasticsearch, Algolia, or similar. Critical for discoverability.' },
  { id: 'serverless', name: 'Serverless', icon: '☁️', color: '#10B981', description: 'Function-as-a-Service compute. Auto-scales but vendor lock-in and cold starts are concerns.' },
  { id: 'storage', name: 'Object Storage', icon: '📦', color: '#3B82F6', description: 'Cloud storage like S3, GCS. Scalable and cost-effective for unstructured data.' },
  { id: 'caching', name: 'Caching', icon: '💾', color: '#06B6D4', description: 'Reduce latency with Redis, Memcached, or CDN caching. Essential for performance at scale.' },
  { id: 'loadbalancing', name: 'Load Balancing', icon: '⚖️', color: '#EF4444', description: 'Distribute traffic across multiple servers. Ensures availability and improves throughput.' },
  { id: 'queues', name: 'Message Queues', icon: '📬', color: '#F97316', description: 'RabbitMQ, Kafka, SQS for async communication. Decouples services and handles spikes.' },
  { id: 'cdn', name: 'CDN', icon: '🌐', color: '#6B7280', description: 'Content delivery network for fast static asset delivery globally.' },
  { id: 'sharding', name: 'Sharding', icon: '🗂️', color: '#8B5CF6', description: 'Database partitioning strategy for horizontal scaling. Improves read/write throughput.' },
  { id: 'ratelimit', name: 'Rate Limiting', icon: '🚦', color: '#FBBF24', description: 'Control request rates to prevent abuse and ensure fair usage.' },
];

let state = {
  chips: {},
};

// Initialize state from localStorage
function loadState() {
  try {
    const saved = localStorage.getItem('tierlist-state');
    if (saved) {
      state = JSON.parse(saved);
    } else {
      // Initialize all chips as unranked
      CONCEPTS.forEach(concept => {
        state.chips[concept.id] = null;
      });
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
    CONCEPTS.forEach(concept => {
      state.chips[concept.id] = null;
    });
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

// Render all chips
function renderChips() {
  const unrankedContainer = document.getElementById('unranked-chips');
  unrankedContainer.innerHTML = '';

  CONCEPTS.forEach(concept => {
    const tier = state.chips[concept.id];
    if (!tier) {
      const chipEl = createChipElement(concept);
      unrankedContainer.appendChild(chipEl);
    }
  });

  // Render chips in tiers
  document.querySelectorAll('.tier-row').forEach(tierRow => {
    const tier = tierRow.dataset.tier;
    tierRow.innerHTML = '';

    CONCEPTS.forEach(concept => {
      if (state.chips[concept.id] === tier) {
        const chipEl = createChipElement(concept);
        tierRow.appendChild(chipEl);
      }
    });
  });
}

// Create a chip element
function createChipElement(concept) {
  const chip = document.createElement('div');
  chip.className = 'chip';
  chip.draggable = true;
  chip.dataset.conceptId = concept.id;
  chip.innerHTML = `
    <div class="chip-icon" style="background: ${concept.color}; border-radius: 50%; color: white; font-size: 0.75rem;">
      ${concept.icon}
    </div>
    <span class="chip-text">${concept.name}</span>
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
      showDetails(concept);
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
    const conceptId = touchDraggedChip.dataset.conceptId;
    const tier = tierRow.dataset.tier;
    state.chips[conceptId] = tier;
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
      const conceptId = draggedChip.dataset.conceptId;
      const tier = tierRow.dataset.tier;
      state.chips[conceptId] = tier;
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
    const conceptId = draggedChip.dataset.conceptId;
    state.chips[conceptId] = null;
    saveState();
    renderChips();
  }
});

// Show details modal
function showDetails(concept) {
  document.getElementById('modal-icon').textContent = concept.icon;
  document.getElementById('modal-title').textContent = concept.name;
  document.getElementById('modal-description').textContent = concept.description;
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

// Reset button
document.getElementById('reset-btn').addEventListener('click', () => {
  if (confirm('Reset all rankings to unranked?')) {
    CONCEPTS.forEach(concept => {
      state.chips[concept.id] = null;
    });
    saveState();
    renderChips();
  }
});

// Download PNG
document.getElementById('download-btn').addEventListener('click', () => {
  downloadAsImage();
});

function downloadAsImage() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Dimensions
  const padding = 40;
  const titleHeight = 120;
  const tierHeight = 80;
  const tierLabelWidth = 60;
  const chipHeight = 40;
  const chipGap = 12;

  const width = 1200;
  const height = titleHeight + (4 * tierHeight) + (2 * padding);

  canvas.width = width;
  canvas.height = height;

  // Background
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, width, height);

  // Title
  ctx.fillStyle = '#1f2937';
  ctx.font = 'bold 40px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('Rank the system design stack', padding, padding + 40);

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

    CONCEPTS.forEach(concept => {
      if (state.chips[concept.id] === tier) {
        // Chip background
        ctx.fillStyle = '#e5e7eb';
        ctx.beginPath();
        ctx.roundRect(chipX, chipY, 120, chipHeight, 20);
        ctx.fill();

        // Chip text
        ctx.fillStyle = '#1f2937';
        ctx.fillText(concept.icon + ' ' + concept.name, chipX + 10, chipY + chipHeight / 2);
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
    a.download = 'system-design-tier-list.png';
    a.click();
    URL.revokeObjectURL(url);
  });
}

// Copy to clipboard button (hidden for now, could be enabled later)
document.getElementById('copy-btn').addEventListener('click', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1200;
  canvas.height = 600;
  ctx.fillStyle = '#f5f5f5';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  canvas.toBlob(blob => {
    const item = new ClipboardItem({ 'image/png': blob });
    navigator.clipboard.write([item]).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  });
});

// Initialize
loadState();
renderChips();
