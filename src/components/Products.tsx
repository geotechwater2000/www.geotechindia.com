import { useState, useEffect, useRef } from 'react';
import {
  Droplets, Filter, RefreshCw, Zap, FlaskConical, Recycle,
  ChevronDown, ChevronRight, Bot, Cloud, Settings, Beaker,
  Waves, Package
} from 'lucide-react';

/* ─── Data ─── */

const waterTreatmentProducts = [
  {
    name: 'Softener System',
    desc: 'Ion-exchange based water softener that removes hardness-causing calcium and magnesium ions. Ideal for boilers, cooling towers, and domestic supply to prevent scale formation and extend equipment life.',
  },
  {
    name: 'Dual Media Filter (DMF)',
    desc: 'Two-layer filter bed using sand and anthracite media to remove suspended solids, turbidity, and sediments. High flow rate, easy backwash, and low operating cost make it a preferred pre-treatment solution.',
  },
  {
    name: 'Mixed Media Filter (MMF)',
    desc: 'Multi-layered filter combining sand, garnet, and anthracite for superior particle removal. Provides better effluent quality than single or dual media filters, suitable for industrial and municipal water.',
  },
  {
    name: 'Nano Filter',
    desc: 'Membrane-based nanofiltration system that effectively removes divalent ions, organic compounds, and color from water. Operates between ultrafiltration and reverse osmosis for selective separation.',
  },
  {
    name: 'RO System',
    desc: 'Reverse Osmosis system using semi-permeable membranes to remove dissolved solids, heavy metals, bacteria, and viruses. Produces high-purity water for drinking, pharma, food processing, and industrial use.',
  },
  {
    name: 'IR System',
    desc: 'Iron Removal system designed to eliminate dissolved and suspended iron from groundwater and borewell water. Prevents staining, odor, and equipment damage caused by iron contamination.',
  },
  {
    name: 'DM System',
    desc: 'Demineralization system using cation and anion exchange resins to produce mineral-free water. Essential for boiler feed water, pharmaceutical processes, and high-purity industrial applications.',
  },
  {
    name: 'UF System',
    desc: 'Ultrafiltration system using hollow-fiber membranes to remove bacteria, viruses, colloids, and suspended particles. Provides consistent water quality with low energy consumption and minimal chemical use.',
  },
  {
    name: 'Ion Exchange System',
    desc: 'Versatile ion exchange system for selective removal of specific ions including nitrates, fluorides, heavy metals, and hardness. Customizable resin selection for targeted contaminant removal.',
  },
];

const stpProducts = [
  {
    name: 'ASP System',
    desc: 'Activated Sludge Process — biological treatment using aerobic microorganisms to degrade organic matter in wastewater. Reliable, proven technology for municipal and industrial sewage treatment.',
  },
  {
    name: 'EASP System',
    desc: 'Extended Aeration Activated Sludge Process offering longer aeration times for complete stabilization of organic matter. Produces low-volume, well-stabilized sludge with minimal odor.',
  },
  {
    name: 'MBBR',
    desc: 'Moving Bed Biofilm Reactor uses free-floating plastic carriers as biofilm support media. Compact footprint, high treatment efficiency, and easy operation make it ideal for space-constrained sites.',
  },
  {
    name: 'FBBR',
    desc: 'Fixed Bed Biofilm Reactor with stationary media providing high surface area for biofilm growth. Excellent for treating high-strength wastewater with consistent effluent quality.',
  },
  {
    name: 'MBR',
    desc: 'Membrane Bioreactor combines activated sludge with ultrafiltration membranes for superior effluent quality. Compact system suitable for water reuse applications and stringent discharge standards.',
  },
  {
    name: 'SBR',
    desc: 'Sequential Batch Reactor treats wastewater in timed cycles — fill, react, settle, decant. Highly flexible, efficient nitrogen and phosphorus removal, ideal for variable flow conditions.',
  },
  {
    name: 'UASB',
    desc: 'Upflow Anaerobic Sludge Blanket reactor for high-strength organic wastewater. Energy-efficient with biogas recovery potential, suitable for food processing and industrial effluents.',
  },
  {
    name: 'Bio Tank',
    desc: 'Compact integrated biological treatment tank combining primary, secondary, and tertiary treatment in a single modular unit. Ideal for small communities, resorts, and commercial establishments.',
  },
];

const etpProducts = [
  {
    name: 'Physico-Chemical ETP',
    desc: 'Treats industrial effluents using coagulation, flocculation, and sedimentation for removal of suspended solids, color, and heavy metals. Suitable for textile, dyeing, and chemical industries.',
  },
  {
    name: 'Biological ETP',
    desc: 'Aerobic and anaerobic biological treatment for high-BOD/COD industrial wastewater from food processing, pharma, and distillery industries. Produces treated water suitable for reuse.',
  },
  {
    name: 'Electrocoagulation ETP',
    desc: 'Advanced electrochemical process using metal electrodes to coagulate, flocculate, and separate contaminants. Chemical-free treatment ideal for oily wastewater and metal finishing effluents.',
  },
  {
    name: 'Zero Liquid Discharge (ZLD)',
    desc: 'Complete water recovery system eliminating liquid discharge entirely. Combines evaporation, crystallization, and membrane technologies to achieve 100% water reuse and solid waste only output.',
  },
  {
    name: 'Combined (Physico-Bio) ETP',
    desc: 'Integrated system combining physical, chemical, and biological processes for comprehensive treatment of complex industrial effluents. Meets stringent CPCB/TNPCB discharge standards.',
  },
  {
    name: 'Effluent Recycling System',
    desc: 'Advanced tertiary treatment and recycling of treated effluents for reuse in process, cooling, or gardening. Reduces fresh water consumption and effluent disposal costs significantly.',
  },
];

const rentalProducts = [
  { capacity: '10 LPH', flow: '10 Litres per hour', ideal: 'Small offices, labs, households' },
  { capacity: '25 LPH', flow: '25 Litres per hour', ideal: 'Small commercial establishments' },
  { capacity: '50 LPH', flow: '50 Litres per hour', ideal: 'Restaurants, clinics, schools' },
  { capacity: '100 LPH', flow: '100 Litres per hour', ideal: 'Medium offices, hostels' },
  { capacity: '250 LPH', flow: '250 Litres per hour', ideal: 'Hospitals, large offices' },
  { capacity: '500 LPH', flow: '500 Litres per hour', ideal: 'Industries, apartment complexes' },
  { capacity: '1000 LPH', flow: '1000 Litres per hour', ideal: 'Large industries, townships' },
  { capacity: 'Custom', flow: 'Any capacity', ideal: 'Any size on request' },
];

const aiProducts = [
  {
    name: 'Robotic Operators',
    icon: <Bot size={20} />,
    desc: 'Fully automated robotic systems for remote operation, monitoring, and control of water treatment plants. Reduces manual intervention, improves consistency, and enables 24/7 unmanned operation.',
  },
  {
    name: 'AI Upgradation',
    icon: <Zap size={20} />,
    desc: 'Transform your existing conventional water treatment system into an AI-powered smart plant. We retrofit sensors, actuators, and AI controllers without major structural modifications.',
  },
  {
    name: 'Cloud View Technology',
    icon: <Cloud size={20} />,
    desc: 'Real-time remote monitoring of all plant parameters via cloud dashboard accessible from any device, anywhere. Live data logging, alerts, trend analysis, and compliance reports at your fingertips.',
  },
  {
    name: 'Upgradation Without Civil Works',
    icon: <Settings size={20} />,
    desc: 'Upgrade your existing plant to modern standards without costly civil reconstruction. Our modular approach delivers full performance improvements with minimal disruption to operations.',
  },
  {
    name: 'Predictive Maintenance AI',
    icon: <RefreshCw size={20} />,
    desc: 'AI-based predictive analytics that anticipate equipment failures before they occur. Reduces downtime, lowers maintenance costs, and extends the operational life of critical plant components.',
  },
  {
    name: 'Smart Dosing System',
    icon: <FlaskConical size={20} />,
    desc: 'Automated intelligent chemical dosing systems that optimize chemical consumption based on real-time water quality parameters, reducing costs and ensuring consistent treatment performance.',
  },
];

const chemicalProducts = [
  {
    name: 'Settling Treatment',
    icon: <Droplets size={20} />,
    desc: 'Gravity-based sedimentation combined with chemical coagulants to rapidly settle suspended particles and colloidal matter. Used as primary treatment for reducing TSS before further processing.',
  },
  {
    name: 'Coagulation Treatment',
    icon: <Beaker size={20} />,
    desc: 'Addition of coagulant chemicals (alum, FeCl3, PAC) to destabilize and aggregate colloidal particles for easy removal. First step in conventional water and wastewater treatment.',
  },
  {
    name: 'Flocculation System',
    icon: <Filter size={20} />,
    desc: 'Gentle agitation with polymer flocculants to form large, settleable floc from coagulated particles. Paired with sedimentation tanks for effective removal of turbidity, color, and suspended solids.',
  },
  {
    name: 'DAF System',
    icon: <Waves size={20} />,
    desc: 'Dissolved Air Flotation uses micro-bubbles to float suspended solids, oils, and fats to the surface for skimming. Highly effective for food processing, dairy, and petroleum wastewater.',
  },
  {
    name: 'Disinfection System',
    icon: <Zap size={20} />,
    desc: 'Multi-technology disinfection using chlorination, UV irradiation, or ozonation to eliminate pathogens, bacteria, and viruses. Ensures treated water meets safe drinking water and reuse standards.',
  },
];

/* ─── Sub-components ─── */

function ProductCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="product-card">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 flex-shrink-0" />
        <div>
          <h4 className="font-heading font-bold text-sm text-ocean-800 mb-1">{name}</h4>
          <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function AccordionSection({
  id,
  icon,
  title,
  subtitle,
  open,
  onToggle,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-sky-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-card transition-shadow duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-sky-50/50 transition-colors duration-200 text-left"
        aria-expanded={open}
        aria-controls={`acc-${id}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div>
            <div className="font-heading font-bold text-ocean-800 text-base">{title}</div>
            <div className="text-slate-500 text-xs mt-0.5">{subtitle}</div>
          </div>
        </div>
        <div className={`text-sky-500 transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`accordion-content ${open ? 'open' : ''}`} id={`acc-${id}`}>
        <div className="px-6 pb-6 pt-2 bg-sky-50/30">{children}</div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function Products() {
  const [open, setOpen] = useState<string | null>('water');
  const [openWaste, setOpenWaste] = useState<string | null>('stp');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in-section">
          <p className="section-subtitle">Our Solutions</p>
          <h2 className="section-title">
            Complete Water &amp; Waste
            <br />
            <span className="text-gradient">Treatment Products</span>
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            From basic filtration to AI-powered smart systems — Geotech offers end-to-end solutions
            for water treatment, wastewater management, and environmental compliance.
          </p>
        </div>

        {/* Category tabs */}
        <div className="fade-in-section space-y-4">
          {/* 1. Water Treatment */}
          <AccordionSection
            id="water"
            icon={<Droplets size={20} />}
            title="Water Treatment"
            subtitle="9 advanced treatment systems for pure, safe water"
            open={open === 'water'}
            onToggle={() => toggle('water')}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
              {waterTreatmentProducts.map((p) => (
                <ProductCard key={p.name} name={p.name} desc={p.desc} />
              ))}
            </div>
          </AccordionSection>

          {/* 2. Wastewater Treatment */}
          <AccordionSection
            id="waste"
            icon={<Recycle size={20} />}
            title="Wastewater Treatment"
            subtitle="Comprehensive STP and ETP systems"
            open={open === 'waste'}
            onToggle={() => toggle('waste')}
          >
            <div className="space-y-4 mt-2">
              {/* STP Sub-accordion */}
              <div className="border border-sky-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenWaste((p) => (p === 'stp' ? null : 'stp'))}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-sky-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                      <Waves size={16} />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm text-ocean-800">Sewage Treatment Plant (STP)</span>
                      <span className="ml-2 tag text-xs">8 systems</span>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-sky-400 transition-transform duration-300 ${openWaste === 'stp' ? 'rotate-90' : ''}`}
                  />
                </button>
                <div className={`accordion-content ${openWaste === 'stp' ? 'open' : ''}`}>
                  <div className="px-5 pb-5 pt-2 grid sm:grid-cols-2 gap-3">
                    {stpProducts.map((p) => (
                      <ProductCard key={p.name} name={p.name} desc={p.desc} />
                    ))}
                  </div>
                </div>
              </div>

              {/* ETP Sub-accordion */}
              <div className="border border-sky-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenWaste((p) => (p === 'etp' ? null : 'etp'))}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white hover:bg-sky-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      <FlaskConical size={16} />
                    </div>
                    <div>
                      <span className="font-heading font-bold text-sm text-ocean-800">Effluent Treatment Plant (ETP)</span>
                      <span className="ml-2 tag text-xs">6 systems</span>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-sky-400 transition-transform duration-300 ${openWaste === 'etp' ? 'rotate-90' : ''}`}
                  />
                </button>
                <div className={`accordion-content ${openWaste === 'etp' ? 'open' : ''}`}>
                  <div className="px-5 pb-5 pt-2 grid sm:grid-cols-2 gap-3">
                    {etpProducts.map((p) => (
                      <ProductCard key={p.name} name={p.name} desc={p.desc} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* 3. Waste Management */}
          <AccordionSection
            id="waste-mgmt"
            icon={<Package size={20} />}
            title="Waste Management"
            subtitle="Integrated solid and liquid waste management solutions"
            open={open === 'waste-mgmt'}
            onToggle={() => toggle('waste-mgmt')}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {[
                { name: 'Organic Waste Converter', desc: 'Converts food and organic waste into manure or biogas through controlled biological decomposition. Ideal for hotels, hospitals, and large commercial kitchens.' },
                { name: 'Sewage Sludge Management', desc: 'Comprehensive solutions for sludge thickening, dewatering, and disposal. Reduces sludge volume, handles disposal, and recovers biogas energy from organic sludge.' },
                { name: 'Leachate Treatment', desc: 'Specialized systems to treat highly contaminated leachate from landfills and solid waste dumps. Prevents groundwater contamination and meets regulatory discharge norms.' },
                { name: 'Industrial Waste Segregation', desc: 'Integrated systems for categorizing, storing, and channeling industrial wastes for treatment or safe disposal in compliance with CPCB and TNPCB guidelines.' },
                { name: 'Compost Systems', desc: 'Automated composting solutions for converting organic waste into high-quality soil conditioner. Reduces landfill burden and creates value from waste.' },
                { name: 'Biogas Recovery Plant', desc: 'Anaerobic digestion systems that generate biogas from organic and agricultural waste for on-site energy use. Combines waste management with renewable energy generation.' },
              ].map((p) => (
                <ProductCard key={p.name} name={p.name} desc={p.desc} />
              ))}
            </div>
          </AccordionSection>

          {/* 4. AI Water & Wastewater */}
          <AccordionSection
            id="ai"
            icon={<Bot size={20} />}
            title="AI Water & Wastewater Treatment System"
            subtitle="Smart, connected, and future-ready treatment technology"
            open={open === 'ai'}
            onToggle={() => toggle('ai')}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {aiProducts.map((p) => (
                <div key={p.name} className="product-card">
                  <div className="flex items-start gap-3">
                    <div className="product-icon-wrap w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-ocean-800 mb-1">{p.name}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* 5. Chemical Treatment */}
          <AccordionSection
            id="chemical"
            icon={<FlaskConical size={20} />}
            title="Chemical Treatment System"
            subtitle="Precision chemical processes for water clarity and safety"
            open={open === 'chemical'}
            onToggle={() => toggle('chemical')}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {chemicalProducts.map((p) => (
                <div key={p.name} className="product-card">
                  <div className="flex items-start gap-3">
                    <div className="product-icon-wrap w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-ocean-800 mb-1">{p.name}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>

          {/* 6. Rental System */}
          <AccordionSection
            id="rental"
            icon={<RefreshCw size={20} />}
            title="RO Rental Plant System"
            subtitle="Zero installation charges · Free maintenance · Flexible capacities"
            open={open === 'rental'}
            onToggle={() => toggle('rental')}
          >
            <div className="mt-2">
              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Zero Installation Charges', sub: 'No upfront installation cost' },
                  { label: 'Free Maintenance', sub: 'Complete AMC included in rental' },
                  { label: 'Flexible Capacities', sub: '10 LPH to custom sizes' },
                ].map((h) => (
                  <div key={h.label} className="bg-white border border-sky-200 rounded-xl px-5 py-4 text-center shadow-sm">
                    <div className="font-heading font-bold text-sm text-sky-600 mb-1">{h.label}</div>
                    <div className="text-slate-500 text-xs">{h.sub}</div>
                  </div>
                ))}
              </div>

              {/* Capacity table */}
              <div className="overflow-x-auto rounded-xl border border-sky-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sky-600 text-white">
                      <th className="text-left px-5 py-3 font-semibold rounded-tl-xl">Capacity</th>
                      <th className="text-left px-5 py-3 font-semibold">Flow Rate</th>
                      <th className="text-left px-5 py-3 font-semibold rounded-tr-xl">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalProducts.map((r, i) => (
                      <tr
                        key={r.capacity}
                        className={`${i % 2 === 0 ? 'bg-white' : 'bg-sky-50/50'} border-t border-sky-100 hover:bg-sky-50 transition-colors`}
                      >
                        <td className="px-5 py-3 font-heading font-bold text-sky-700">{r.capacity}</td>
                        <td className="px-5 py-3 text-slate-600">{r.flow}</td>
                        <td className="px-5 py-3 text-slate-500">{r.ideal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs text-slate-500 bg-sky-50 border border-sky-100 rounded-xl p-4 leading-relaxed">
                <strong className="text-sky-700">All Rental Plans Include:</strong> Complete system installation,
                commissioning, periodic maintenance, filter replacement, membrane cleaning, and technical support.
                Systems are available in standard capacities and fully customized to any size requirement.
                Contact us for tailored rental packages.
              </p>
            </div>
          </AccordionSection>
        </div>
      </div>
    </section>
  );
}
