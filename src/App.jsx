import { useEffect, useState } from 'react';

const company = {
  name: 'S&S Global Exports & Services Private Limited',
  shortName: 'S&S Global',
  phone: '+91 70042 49138',
  email: 'info@ssglobalexports.com',
  website: 'www.ssglobalexports.com',
  hours: 'Mon - Sat: 08H - 20H',
  address: 'Konra, C/O Anwar Hussain, Shadi Mohalla, Konra, Barhi, Hazaribag, Jharkhand - 825405, India',
  cin: 'U12300JH2026PTC022222',
  gstin: '20ABTCS6866P1Z8',
  pan: 'ABTCS6866P',
  tagline: 'Delivering Excellence, Connecting Worlds.',
};

const nav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Commodities', path: '/commodities' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  ['Sourcing & Procurement', 'Supplier discovery, product sourcing, pricing coordination, and procurement support for import and export requirements.'],
  ['Customs Clearance & Compliance', 'Documentation readiness, regulatory guidance, and shipment coordination designed to reduce border delays.'],
  ['Warehousing & Distribution', 'Inventory handling, storage coordination, and domestic distribution support for moving goods efficiently.'],
  ['Quality Control & Inspection', 'Product checks, inspection coordination, and standards review before cargo moves through the trade chain.'],
  ['Market Research & Buyer Identification', 'Market entry research and buyer discovery to help businesses reach new trade opportunities.'],
  ['Export Documentation', 'Invoice, packing, shipment, and regulatory documentation support for smoother export execution.'],
  ['Logistics & Risk Management', 'Route planning, cargo coordination, shipment visibility, and contingency support for international trade.'],
  ['Supply Chain Optimization', 'Process improvement across sourcing, freight, warehousing, documentation, and delivery workflows.'],
];

const industries = [
  ['Consumer Goods', 'Everyday essentials, retail products, and high-demand merchandise moved through reliable supply channels.'],
  ['Healthcare Products', 'Medical equipment, healthcare supplies, and sensitive products handled with regulatory awareness.'],
  ['Industrial Equipment', 'Machinery, spare parts, and industrial components for manufacturing and construction markets.'],
  ['Food & Beverages', 'Fresh, safe, and quality-focused food and beverage trade support.'],
  ['Automotive', 'Vehicles, parts, accessories, and automotive technology import-export coordination.'],
  ['Technology & Electronics', 'Electronics and high-tech components moved with secure, compliant logistics support.'],
  ['Textiles & Apparel', 'Fabric, garments, apparel lines, and textile supply support for global fashion and manufacturing.'],
];

const commodities = [
  ['Petroleum Products', 'Fuel and energy-related products handled with safety, documentation, and compliance awareness.'],
  ['Minerals', 'Mineral resources sourced through careful supplier checks and authenticity review.'],
  ['Forest Products', 'Timber and forest products with attention to transparent sourcing and chain-of-custody.'],
  ['Agricultural Produce', 'Agricultural goods handled for freshness, quality, and timely delivery.'],
  ['Chemicals', 'Industrial and specialty chemicals coordinated with safety and compliance requirements.'],
  ['Electronics', 'High-tech products and components supported through secure international logistics.'],
  ['Textiles', 'Textile import and export support for manufacturing, wholesale, and fashion businesses.'],
  ['Food Processing', 'Food processing goods and perishable supply chains supported with timely cargo movement.'],
];

const sustainability = [
  ['Eco-Friendly Sourcing & Packaging', 'Reducing environmental impact through better sourcing choices and packaging awareness.'],
  ['Fair Trade Partnerships', 'Encouraging equitable business relationships and responsible supplier engagement.'],
  ['Community Engagement', 'Supporting long-term value in sourcing regions through responsible trade relationships.'],
  ['Renewable Energy Integration', 'Supporting trade in renewable energy components and green transition products.'],
  ['Waste Management', 'Coordinating movement of recycling, waste processing, and sustainability-focused equipment.'],
  ['Water Conservation', 'Helping trade water conservation technologies and resources for sustainable operations.'],
  ['Sustainable Transportation', 'Promoting efficient route choices and lower-impact transportation solutions.'],
];

const process = [
  'Customer places order and shares product requirements',
  'Product specifics, price, route, and documentation are confirmed',
  'Payment and commercial terms are processed',
  'Cargo is received, checked, packed, and prepared',
  'Shipment is coordinated through planned logistics routes',
  'Delivery is verified and client feedback is collected',
];

const countryCodes = [
  ['+91', 'India'],
  ['+1', 'United States / Canada'],
  ['+44', 'United Kingdom'],
  ['+971', 'United Arab Emirates'],
  ['+966', 'Saudi Arabia'],
  ['+974', 'Qatar'],
  ['+965', 'Kuwait'],
  ['+968', 'Oman'],
  ['+65', 'Singapore'],
  ['+60', 'Malaysia'],
  ['+86', 'China'],
  ['+81', 'Japan'],
  ['+82', 'South Korea'],
  ['+49', 'Germany'],
  ['+33', 'France'],
  ['+39', 'Italy'],
  ['+31', 'Netherlands'],
  ['+61', 'Australia'],
  ['+27', 'South Africa'],
  ['+234', 'Nigeria'],
];

function navigate(path) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function Link({ to, children, className }) {
  return (
    <a
      className={className}
      href={to}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRoute = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleRoute);
    return () => window.removeEventListener('popstate', handleRoute);
  }, []);

  const Page = routes[path] || HomePage;

  return (
    <main>
      <Header activePath={path} />
      <Page />
      <Footer />
    </main>
  );
}

function Header({ activePath }) {
  return (
    <>
      <header className="topbar">
        <a href={`tel:${company.phone}`} className="topbar-link">{company.phone}</a>
        <span>{company.hours}</span>
        <a href={`mailto:${company.email}`} className="topbar-link">{company.email}</a>
      </header>
      <nav className="navbar" aria-label="Main navigation">
        <Link className="brand" to="/">
          <span className="brand-mark">S&S</span>
          <span>{company.shortName}</span>
        </Link>
        <div className="navlinks">
          {nav.map((item) => (
            <Link className={activePath === item.path ? 'active' : ''} to={item.path} key={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="quote-btn" to="/contact">Get a Quote</Link>
      </nav>
    </>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <img src="/assets/global-export-hero.png" alt="Container port logistics operation" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Import - Export - Global Trade - Business Services</p>
          <h1>Connecting markets, delivering excellence</h1>
          <p>{company.name} supports global trade with reliable service, customer focus, and long-term market value. {company.tagline}</p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/contact">Request shipment support</Link>
            <Link className="secondary-btn" to="/services">Explore services</Link>
          </div>
        </div>
        <div className="hero-stats" aria-label="Company highlights">
          <div><strong>Global</strong><span>Worldwide network mindset</span></div>
          <div><strong>Reliable</strong><span>Commitment to quality</span></div>
          <div><strong>Focused</strong><span>Customer-first support</span></div>
        </div>
        <LogisticsMotion variant="hero" />
      </section>
      <section className="section intro">
        <SectionIntro eyebrow="Core Capabilities" title="End-to-end trade support from sourcing to delivery" />
        <CardGrid items={services.slice(0, 4)} />
      </section>
      <FeatureBand />
      <ProcessSection />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A trade partner built for global reach and reliable service" />
      <section className="section split">
        <div>
          <p className="eyebrow">Bridging Markets</p>
          <h2>Simplifying international commerce for growing businesses</h2>
          <p>
            S&S Global Exports & Services Private Limited helps businesses connect with international
            markets through organized sourcing, documentation support, logistics coordination, and
            responsive trade communication.
          </p>
        </div>
        <div className="detail-stack">
          <InfoBlock title="Mission" text="Offer transparent, quality-driven import and export services that create long-term client relationships." />
          <InfoBlock title="Vision" text="Build a dependable trade ecosystem where businesses can access global markets with confidence." />
          <InfoBlock title="Network" text="Work with manufacturers, suppliers, buyers, and logistics partners to deliver the right products at the right time." />
        </div>
      </section>
      <CompanyDetails />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Import, export, and logistics solutions for practical trade needs" />
      <section className="section">
        <SectionIntro eyebrow="What We Handle" title="Tailor-made services across the trade chain" />
        <CardGrid items={services} />
      </section>
      <ProcessSection />
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Connecting businesses across multiple sectors" />
      <section className="section">
        <SectionIntro eyebrow="Industries Served" title="Flexible support for complex markets" />
        <CardGrid items={industries} />
      </section>
      <CtaBand title="Need support for a sector not listed?" text="Share your product category, market, and trade requirement so the team can assess the right route." />
    </>
  );
}

function CommoditiesPage() {
  return (
    <>
      <PageHero eyebrow="Commodities" title="Diverse offerings with quality and compliance awareness" />
      <section className="section">
        <SectionIntro eyebrow="Portfolio" title="Commodity categories for global sourcing and movement" />
        <CardGrid items={commodities} />
      </section>
      <FeatureBand />
    </>
  );
}

function SustainabilityPage() {
  return (
    <>
      <PageHero eyebrow="Sustainability" title="Responsible global trade for long-term value" />
      <section className="section">
        <SectionIntro eyebrow="Responsible Practices" title="Better choices across sourcing, packaging, and movement" />
        <CardGrid items={sustainability} />
      </section>
      <section className="section split light">
        <div>
          <p className="eyebrow">Trade With Confidence</p>
          <h2>Assured quality, transparent sourcing, and ethical partnerships</h2>
        </div>
        <p>
          The company’s approach is built around clear communication, supplier visibility,
          quality checks, and responsible route choices that support clients and communities.
        </p>
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Start a trade conversation" />
      <section className="section contact">
        <div>
          <p className="eyebrow">Get In Touch</p>
          <h2>Share your shipment details and requirements</h2>
          <p>
            Include product, origin, destination, quantity, timing, and service type so the team can
            prepare a focused import, export, or logistics response.
          </p>
          <div className="contact-list">
            <InfoBlock title="Registered Office" text={company.address} />
            <InfoBlock title="Phone" text={company.phone} />
            <InfoBlock title="Email" text={company.email} />
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

function PageHero({ eyebrow, title }) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{company.tagline}</p>
      <LogisticsMotion variant="page" />
    </section>
  );
}

function SectionIntro({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function CardGrid({ items }) {
  return (
    <div className="card-grid">
      {items.map(([title, text], index) => (
        <article className="info-card" key={title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function FeatureBand() {
  return (
    <section className="section split light">
      <LogisticsMotion variant="section" />
      <div>
        <p className="eyebrow">Quality & Compliance</p>
        <h2>Built on transparent sourcing and dependable documentation</h2>
      </div>
      <div className="feature-list">
        <InfoBlock title="Global Reach" text="A worldwide network mindset for sourcing, buyer connection, and cargo movement." />
        <InfoBlock title="Trust & Reliability" text="A commitment to quality, clear communication, and timely trade execution." />
        <InfoBlock title="Customer Focused" text="Support designed around client goals, product needs, and market timelines." />
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section process">
      <LogisticsMotion variant="process" />
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Process</p>
          <h2>A clear path from inquiry to delivered cargo</h2>
        </div>
      </div>
      <div className="timeline">
        {process.map((step, index) => (
          <div className="timeline-item" key={step}>
            <span>{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompanyDetails() {
  return (
    <section className="section company">
      <div>
        <p className="eyebrow">Company Details</p>
        <h2>Registered and ready for business communication</h2>
      </div>
      <div className="company-panel">
        <div className="company-emblem" aria-hidden="true"><span>S&S</span></div>
        <dl>
          <div><dt>Registered Office</dt><dd>{company.address}</dd></div>
          <div><dt>Website</dt><dd>{company.website}</dd></div>
          <div><dt>CIN</dt><dd>{company.cin}</dd></div>
          <div><dt>GSTIN</dt><dd>{company.gstin}</dd></div>
          <div><dt>PAN</dt><dd>{company.pan}</dd></div>
        </dl>
      </div>
    </section>
  );
}

function LogisticsMotion({ variant }) {
  return (
    <div className={`motion-lane motion-lane-${variant}`} aria-hidden="true">
      <div className="route-line route-line-one" />
      <div className="route-line route-line-two" />
      <span className="motion-unit plane">✈</span>
      <span className="motion-unit ship"><i /></span>
      <span className="motion-unit truck"><i /></span>
      <span className="motion-unit train"><i /><i /><i /><i /></span>
    </div>
  );
}

function InfoBlock({ title, text }) {
  return (
    <div className="info-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function CtaBand({ title, text }) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">Request a Quote</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="primary-btn" to="/contact">Contact Us</Link>
    </section>
  );
}

function ContactForm() {
  return (
    <form className="contact-form">
      <label>Name<input type="text" name="name" placeholder="Your name" /></label>
      <label>Email<input type="email" name="email" placeholder="you@example.com" /></label>
      <label>Phone
        <div className="phone-row">
          <select name="countryCode" defaultValue="+91" aria-label="Country code">
            {countryCodes.map(([code, country]) => (
              <option value={code} key={`${code}-${country}`}>{code} {country}</option>
            ))}
          </select>
          <input type="tel" name="phone" placeholder="Phone number" />
        </div>
      </label>
      <label>Service
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Export Services</option>
          <option>Import Services</option>
          <option>Logistics / Supply Chain</option>
          <option>Business Services</option>
        </select>
      </label>
      <label>Trade requirement<textarea name="message" rows="4" placeholder="Product, route, quantity, timeline" /></label>
      <button type="button">Submit inquiry</button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{company.name}</strong>
        <p>{company.address}</p>
        <p>CIN: {company.cin} | GSTIN: {company.gstin}</p>
      </div>
      <div>
        <a href={`tel:${company.phone}`}>{company.phone}</a>
        <a href={`mailto:${company.email}`}>{company.email}</a>
        <span>{company.website}</span>
      </div>
    </footer>
  );
}

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/services': ServicesPage,
  '/industries': IndustriesPage,
  '/commodities': CommoditiesPage,
  '/sustainability': SustainabilityPage,
  '/contact': ContactPage,
};

export default App;
