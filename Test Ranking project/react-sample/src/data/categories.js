export const CATEGORIES = {
  systemdesign: {
    label: 'System Design',
    headline: 'system design',
    pool: [
      { id: 'graphql', name: 'GraphQL', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg', color: '#EC4899', description: 'Query language for APIs. Allows clients to request exactly the data they need, reducing over-fetching.' },
      { id: 'microservices', name: 'Microservices', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=150&fit=crop', color: '#8B5CF6', description: 'Architectural style using small, independent services. Enables scalability but adds complexity.' },
      { id: 'realtime', name: 'Real-time Architecture', image: 'https://images.unsplash.com/photo-1551633440-0117d3fa6f8b?w=150&h=150&fit=crop', color: '#F59E0B', description: 'Systems designed for low-latency, immediate data updates. Uses WebSockets, gRPC, or message queues.' },
      { id: 'search', name: 'Search', image: 'https://images.unsplash.com/photo-1516534775068-bb57e5f4ae14?w=150&h=150&fit=crop', color: '#6366F1', description: 'Full-text search capabilities using Elasticsearch, Algolia, or similar. Critical for discoverability.' },
      { id: 'serverless', name: 'Serverless', image: 'https://images.unsplash.com/photo-1551228555-57ac7d1f1033?w=150&h=150&fit=crop', color: '#10B981', description: 'Function-as-a-Service compute. Auto-scales but vendor lock-in and cold starts are concerns.' },
      { id: 'storage', name: 'Object Storage', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=150&fit=crop', color: '#3B82F6', description: 'Cloud storage like S3, GCS. Scalable and cost-effective for unstructured data.' },
      { id: 'caching', name: 'Caching', image: 'https://images.unsplash.com/photo-1516534775068-bb57e5f4ae14?w=150&h=150&fit=crop', color: '#06B6D4', description: 'Reduce latency with Redis, Memcached, or CDN caching. Essential for performance at scale.' },
      { id: 'loadbalancing', name: 'Load Balancing', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150&h=150&fit=crop', color: '#EF4444', description: 'Distribute traffic across multiple servers. Ensures availability and improves throughput.' },
      { id: 'queues', name: 'Message Queues', image: 'https://images.unsplash.com/photo-1551228555-57ac7d1f1033?w=150&h=150&fit=crop', color: '#F97316', description: 'RabbitMQ, Kafka, SQS for async communication. Decouples services and handles spikes.' },
      { id: 'cdn', name: 'CDN', image: 'https://images.unsplash.com/photo-1551733236-0a10680bff26?w=150&h=150&fit=crop', color: '#6B7280', description: 'Content delivery network for fast static asset delivery globally.' },
      { id: 'sharding', name: 'Sharding', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150&h=150&fit=crop', color: '#8B5CF6', description: 'Database partitioning strategy for horizontal scaling. Improves read/write throughput.' },
      { id: 'ratelimit', name: 'Rate Limiting', image: 'https://images.unsplash.com/photo-1551228555-57ac7d1f1033?w=150&h=150&fit=crop', color: '#FBBF24', description: 'Control request rates to prevent abuse and ensure fair usage.' },
    ]
  },
  watches: {
    label: 'Watches',
    headline: 'watches',
    pool: [
      { id: 'rolex-sub', name: 'Rolex Submariner', image: 'https://images.unsplash.com/photo-1523959915649-7ad79cdd311d?w=150&h=150&fit=crop', color: '#FFD700', description: 'Iconic sports watch known for durability and precision. The most recognizable dive watch in the world.' },
      { id: 'omega-speed', name: 'Omega Speedmaster', image: 'https://images.unsplash.com/photo-1509941943102-1c69b480e149?w=150&h=150&fit=crop', color: '#F97316', description: 'First watch on the moon. Legendary chronograph with incredible heritage and accuracy.' },
      { id: 'casio-f91w', name: 'Casio F-91W', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&h=150&fit=crop', color: '#1f2937', description: 'Digital classic. Affordable, reliable, and iconic. The best-selling watch ever.' },
      { id: 'patek-philippe', name: 'Patek Philippe Nautilus', image: 'https://images.unsplash.com/photo-1521170541831-fbc97d28f25e?w=150&h=150&fit=crop', color: '#4169E1', description: 'Luxury sports watch. Integrated bracelet design set the standard for prestige watches.' },
      { id: 'apple-watch', name: 'Apple Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop', color: '#000000', description: 'Smart watch that changed wearables. Fitness tracking and notifications at your wrist.' },
      { id: 'cartier-tank', name: 'Cartier Tank', image: 'https://images.unsplash.com/photo-1578242326567-bc8eb77dc1ab?w=150&h=150&fit=crop', color: '#FFD700', description: 'Elegant rectangular watch. Timeless design inspired by military tanks.' },
      { id: 'rolex-datejust', name: 'Rolex Datejust', image: 'https://images.unsplash.com/photo-1617635884301-91530c9df0ec?w=150&h=150&fit=crop', color: '#C0C0C0', description: 'Classic dress watch. First automatic calendar watch with date window.' },
      { id: 'breitling-navitimer', name: 'Breitling Navitimer', image: 'https://images.unsplash.com/photo-1585152272962-f69bcc22d265?w=150&h=150&fit=crop', color: '#000000', description: 'Pilot\'s chronograph. Complex dial with slide rule for aviation calculations.' },
      { id: 'omega-seamaster', name: 'Omega Seamaster', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=150&h=150&fit=crop', color: '#87CEEB', description: 'Bond\'s watch. Sophisticated dive watch with excellent water resistance.' },
      { id: 'grand-seiko', name: 'Grand Seiko', image: 'https://images.unsplash.com/photo-1609427281969-fa937e0b13b6?w=150&h=150&fit=crop', color: '#696969', description: 'Japanese precision. Excellence in timekeeping and finishing.' },
      { id: 'iwc-pilot', name: 'IWC Pilot\'s Watch', image: 'https://images.unsplash.com/photo-1581578731548-c64695c952952?w=150&h=150&fit=crop', color: '#8B4513', description: 'German engineering. Clean, functional design inspired by aviation.' },
      { id: 'chopard-alpine', name: 'Chopard Alpine Eagle', image: 'https://images.unsplash.com/photo-1586941487556-ec6d6e82d46f?w=150&h=150&fit=crop', color: '#FFD700', description: 'Modern sports watch. Integrated bracelet with elegant aesthetics.' },
    ]
  },
  cars: {
    label: 'Cars',
    headline: 'cars',
    pool: [
      { id: 'porsche-911', name: 'Porsche 911', image: 'https://images.unsplash.com/photo-1569345820891-41549fb143d8?w=150&h=150&fit=crop', color: '#FF0000', description: 'Iconic sports car. Legendary performance and handling that defined a generation.' },
      { id: 'toyota-supra', name: 'Toyota Supra', image: 'https://images.unsplash.com/photo-1585751918954-d77e24dd30bf?w=150&h=150&fit=crop', color: '#FFD700', description: 'Japanese sports legend. Turbocharged performance and tuning potential.' },
      { id: 'ford-mustang', name: 'Ford Mustang', image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=150&h=150&fit=crop', color: '#0066CC', description: 'American muscle car. Powerful V8 engines and cultural icon status.' },
      { id: 'tesla-model-s', name: 'Tesla Model S', image: 'https://images.unsplash.com/photo-1560958089-b8a46dd52d12?w=150&h=150&fit=crop', color: '#FF0000', description: 'Electric performance sedan. Zero to 60 in seconds, revolutionary EV technology.' },
      { id: 'lamborghini-miura', name: 'Lamborghini Miura', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=150&h=150&fit=crop', color: '#FF6600', description: 'First supercar. Mid-engine layout changed automotive design forever.' },
      { id: 'ferrari-f40', name: 'Ferrari F40', image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=150&h=150&fit=crop', color: '#FF0000', description: 'Last V12 Ferrari. 478 hp naturally aspirated engine, pure mechanical perfection.' },
      { id: 'mercedes-amg-gtr', name: 'Mercedes-AMG GT R', image: 'https://images.unsplash.com/photo-1562162440-0-46a0bb15a86?w=150&h=150&fit=crop', color: '#00AA00', description: 'Modern grand tourer. Stunning design with twin-turbo performance.' },
      { id: 'bugatti-veyron', name: 'Bugatti Veyron', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=150&h=150&fit=crop', color: '#0000FF', description: 'Hypercar pioneer. First production car to exceed 250 mph.' },
      { id: 'nissan-r33', name: 'Nissan Skyline R33 GT-R', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=150&h=150&fit=crop', color: '#0099FF', description: 'JDM legend. Twin-turbo inline-six and all-wheel-drive dominance.' },
      { id: 'mclaren-f1', name: 'McLaren F1', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=150&h=150&fit=crop', color: '#FF8C00', description: 'Ultimate supercar. Naturally aspirated V12, carbon fiber pioneer.' },
      { id: 'corvette-c8', name: 'Chevrolet Corvette C8', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop', color: '#FF0000', description: 'American supercar. First mid-engine Corvette with incredible value.' },
      { id: 'aston-martin-db5', name: 'Aston Martin DB5', image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=150&h=150&fit=crop', color: '#00AA00', description: 'Bond\'s car. Timeless elegance with James Bond gadgets.' },
    ]
  },
  films: {
    label: 'Films',
    headline: 'films',
    pool: [
      { id: 'godfather', name: 'The Godfather', image: 'https://images.unsplash.com/photo-1533050487297-86d7a13bcdd5?w=150&h=150&fit=crop', color: '#8B0000', description: 'Mafia epic. Widely considered one of the greatest films ever made.' },
      { id: 'inception', name: 'Inception', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=150&h=150&fit=crop', color: '#000080', description: 'Mind-bending sci-fi. Stunning visuals and complex narrative about dreams.' },
      { id: 'pulp-fiction', name: 'Pulp Fiction', image: 'https://images.unsplash.com/photo-1535016120754-e32375c9cc1c?w=150&h=150&fit=crop', color: '#FFD700', description: 'Tarantino\'s masterpiece. Non-linear storytelling and unforgettable dialogue.' },
      { id: 'parasite', name: 'Parasite', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2e3467?w=150&h=150&fit=crop', color: '#228B22', description: 'Social thriller. Korean masterpiece that won Best Picture.' },
      { id: 'shawshank', name: 'The Shawshank Redemption', image: 'https://images.unsplash.com/photo-1489599849228-ed4dc6900cd3?w=150&h=150&fit=crop', color: '#696969', description: 'Prison drama. Often cited as the greatest film of all time on IMDb.' },
      { id: 'dark-knight', name: 'The Dark Knight', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=150&h=150&fit=crop', color: '#000000', description: 'Batman superhero film. Elevated comic book movies to art form.' },
      { id: 'interstellar', name: 'Interstellar', image: 'https://images.unsplash.com/photo-1478720568477-152d9e3fb523?w=150&h=150&fit=crop', color: '#000000', description: 'Space odyssey. Emotional journey through wormholes and black holes.' },
      { id: 'forrest-gump', name: 'Forrest Gump', image: 'https://images.unsplash.com/photo-1489599849228-ed4dc6900cd3?w=150&h=150&fit=crop', color: '#FF6347', description: 'American classic. Heartwarming story spanning decades.' },
      { id: 'matrix', name: 'The Matrix', image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=150&h=150&fit=crop', color: '#00FF00', description: 'Sci-fi revolution. Changed action cinema and visual effects forever.' },
      { id: 'silence-lambs', name: 'The Silence of the Lambs', image: 'https://images.unsplash.com/photo-1489599849228-ed4dc6900cd3?w=150&h=150&fit=crop', color: '#8B4513', description: 'Psychological thriller. Masterful cat-and-mouse narrative.' },
      { id: 'spirited-away', name: 'Spirited Away', image: 'https://images.unsplash.com/photo-1613910478ef93de46b63b07f50c8e7e?w=150&h=150&fit=crop', color: '#FFB6C1', description: 'Anime masterpiece. Gorgeous animation and rich storytelling.' },
      { id: 'la-la-land', name: 'La La Land', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=150&h=150&fit=crop', color: '#FFD700', description: 'Musical romance. Modern musical with stunning cinematography.' },
    ]
  }
};

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function pickRandom10(category) {
  const pool = CATEGORIES[category].pool;
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, 10);
}

const SCHEMA_VERSION = 2;

export function loadState() {
  try {
    const saved = localStorage.getItem('tierlist-state-v2');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.version === SCHEMA_VERSION && data.category && data.items && data.placements) {
        return data.state;
      }
    }
  } catch (e) {
    console.warn('Failed to load state:', e);
  }
  return null;
}

export function saveState(state) {
  try {
    localStorage.setItem('tierlist-state-v2', JSON.stringify({ version: SCHEMA_VERSION, state }));
  } catch (e) {
    console.warn('Failed to save state:', e);
  }
}
