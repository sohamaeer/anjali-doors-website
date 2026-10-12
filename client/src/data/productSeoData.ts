export interface ProductSeoItem {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  imageAlt: string;
  imageTitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const PRODUCT_SEO_DATA: Record<string, ProductSeoItem> = {
  'fire-rated-doors': {
    metaTitle: 'Fire Rated Doors Manufacturer in India | Anjali Doors',
    metaDescription: 'ARAI certified 60, 120 & 180 min fire rated steel doors manufacturer in India. Galvanized hollow metal construction tested as per BS 476 & IS 3614.',
    keywords: [
      'Fire Rated Doors Manufacturer',
      'Fire Rated Doors India',
      'Fire Resistant Steel Doors',
      'Fire Doors Manufacturer in Mumbai',
      '120 Minute Fire Rated Doors',
      'ARAI Certified Fire Doors',
      'ARAI certified 120 and 180 minute fire rated steel door manufacturer in India',
      'fire rated doors for commercial high rise buildings and hospitals'
    ],
    imageAlt: 'ARAI Certified Fire Rated Steel Doors Manufactured by Anjali Doors Boisar Plant',
    imageTitle: 'Anjali Doors - 120 to 180 Min Certified Fire Rated Steel Door Assembly',
    faqs: [
      {
        question: 'What fire ratings are certified for Anjali Doors Fire Rated Doors?',
        answer: 'Anjali Doors Fire Rated Doors are certified for 60, 120, and 180 minutes of fire resistance tested in accordance with BS 476 Part 20/22 and IS 3614 standards at the Automotive Research Association of India (ARAI) and NABL accredited test laboratories.'
      },
      {
        question: 'What steel grades and core insulation materials are used?',
        answer: 'Our fire rated doors are fabricated using 1.2mm to 1.6mm Galvannealed or CRCA steel sheets for frames and 0.8mm to 1.2mm for door shutters, insulated with high-density non-combustible rockwool or ceramic wool infill to prevent heat transfer.'
      },
      {
        question: 'Can fire rated doors be customized with vision panels and panic hardware?',
        answer: 'Yes, we manufacture custom single and double leaf configurations fitted with clear fire-rated ceramic glass vision panels, UL-listed panic crash exit devices, mortise sashlocks, and heavy-duty automatic door closers tailored to architectural drawings.'
      },
      {
        question: 'What is the manufacturing lead time and supply radius across India?',
        answer: 'Standard manufacturing lead time ranges between 7 to 15 working days depending on quantity and custom BOQ specifications. We supply and deliver directly across Mumbai, Pune, Thane, Palghar, Gujarat, and pan-India project sites.'
      }
    ]
  },

  'pharmaceutical-doors': {
    metaTitle: 'Pharmaceutical Cleanroom Doors Manufacturer India | Anjali Doors',
    metaDescription: 'cGMP compliant pharmaceutical cleanroom doors in SS 304 and galvanized steel. Flush airtight design with PUF core and double glazed flush vision panels.',
    keywords: [
      'Pharmaceutical Doors Manufacturer',
      'Cleanroom Doors India',
      'Clean Room Steel Doors',
      'SS Cleanroom Doors Mumbai',
      'Pharma Cleanroom Doors with Vision Panel',
      'Air tight clean room doors',
      'seamless stainless steel pharmaceutical cleanroom doors with PUF core',
      'cGMP compliant cleanroom doors for pharmaceutical laboratories'
    ],
    imageAlt: 'cGMP Compliant Cleanroom Pharmaceutical Steel Doors by Anjali Doors',
    imageTitle: 'Anjali Doors Stainless Steel Pharmaceutical Cleanroom Flush Door',
    faqs: [
      {
        question: 'Are Anjali Doors pharmaceutical doors compliant with cGMP and FDA guidelines?',
        answer: 'Yes, our pharmaceutical doors are engineered strictly in compliance with cGMP, ISO 14644 cleanroom standards, and FDA norms featuring seamless, completely flush surfaces with zero ledges to eliminate dust accumulation and microbial contamination.'
      },
      {
        question: 'What materials and surface finishes are available for cleanroom doors?',
        answer: 'We manufacture pharma doors in premium Stainless Steel (SS 304 / SS 316) with hair-line or matte finish, as well as Galvanized Iron (GI) coated with anti-microbial, chemical-resistant pure polyester powder coating.'
      },
      {
        question: 'Do these cleanroom doors include flush vision panels and drop seals?',
        answer: 'Every pharmaceutical door can be equipped with flush double-glazed toughened safety glass vision panels with integrated silica gel desiccant to prevent condensation, along with automatic heavy-duty bottom drop seals for airtight compartment isolation.'
      },
      {
        question: 'Can you integrate interlocking systems for airlocks and pass boxes?',
        answer: 'Yes, our cleanroom doors seamlessly integrate with electromagnetic locks, push buttons, and multi-door electronic interlocking controllers (PLC/relay based) for HVAC airlocks, gowning rooms, and production corridors.'
      }
    ]
  },

  'air-tight-doors': {
    metaTitle: 'Air Tight Doors Manufacturer in India | Anjali Doors',
    metaDescription: 'Hermetically sealed airtight steel doors with EPDM perimeter gaskets. Engineered for cleanrooms, laboratories, acoustic soundproofing & isolation areas.',
    keywords: [
      'Air Tight Doors Manufacturer',
      'Acoustic Steel Doors',
      'Airtight Doors India',
      'Airtight Cleanroom Doors',
      'Hermetically Sealed Doors Mumbai',
      'Soundproof Steel Doors',
      'galvanized steel air tight acoustic doors with EPDM rubber gasket',
      'air tight containment doors for laboratories and cleanrooms'
    ],
    imageAlt: 'Hermetically Sealed Airtight Metal Doors by Anjali Doors Boisar',
    imageTitle: 'Anjali Doors - Airtight Acoustic and Containment Steel Door Assembly',
    faqs: [
      {
        question: 'How do Anjali Doors air tight doors ensure zero air leakage?',
        answer: 'Our air tight doors utilize continuous 4-sided food-grade EPDM compression rubber gaskets combined with specialized cam-action heavy-duty compression latches and automatic concealed drop-down bottom seals that hermetically seal upon closure.'
      },
      {
        question: 'What applications are best suited for air tight steel doors?',
        answer: 'They are engineered for bio-safety laboratories (BSL-2/3), pharmaceutical air handling rooms, sound recording and acoustic test chambers, hospital isolation wards, OT suites, and industrial chemical storage areas.'
      },
      {
        question: 'Can these doors provide acoustic sound insulation?',
        answer: 'Yes, when specified with our high-density acoustic mineral wool and PUF composite core, our air tight steel doors achieve certified acoustic attenuation ratings up to 42 dB STC.'
      },
      {
        question: 'What frame profiles and threshold details are provided?',
        answer: 'We offer rebated welded hollow metal frames with flush stainless steel threshold plates or barrier-free drop-down bottom seals allowing smooth passage for hospital stretchers and industrial cleanroom trolleys.'
      }
    ]
  },

  'emergency-exit-doors': {
    metaTitle: 'Emergency Exit Doors with Panic Bar | Anjali Doors India',
    metaDescription: 'NBC compliant emergency fire exit doors with UL-listed panic hardware. Heavy-duty hollow metal steel construction for commercial towers & factories.',
    keywords: [
      'Emergency Exit Doors',
      'Panic Bar Exit Doors',
      'Fire Exit Doors Manufacturer',
      'Emergency Exit Steel Doors Mumbai',
      'Panic Device Fire Exit Doors',
      'Staircase Fire Exit Doors',
      'certified hollow metal emergency exit doors with panic hardware crash bar',
      'commercial emergency escape doors conforming to NBC 2016 regulations'
    ],
    imageAlt: 'Hollow Metal Emergency Exit Doors with Panic Push Bar by Anjali Doors',
    imageTitle: 'Anjali Doors - NBC Compliant Emergency Exit Fire Door with Panic Device',
    faqs: [
      {
        question: 'Are your emergency exit doors compliant with the National Building Code (NBC)?',
        answer: 'Yes, Anjali Doors emergency exit doors are fully compliant with NBC 2016 life safety norms, IS 3614, and local fire authority mandates, providing fail-safe emergency egress pathways in commercial and industrial structures.'
      },
      {
        question: 'What types of panic hardware and exit devices are fitted?',
        answer: 'We supply certified UL-listed panic rim exit devices, touch-bar crash push bars, external trim lever handles with master key cylinders, and vertical rod multi-point panic latching mechanisms for double door egress assemblies.'
      },
      {
        question: 'Can emergency exit doors be connected to the building fire alarm system?',
        answer: 'Yes, our doors can be fitted with magnetic door holders, electric strikes, or motorized fail-safe panic bolts that automatically release upon fire alarm signal trigger to facilitate rapid evacuation.'
      },
      {
        question: 'What fire ratings are available on emergency exit doors?',
        answer: 'Our emergency fire exit doors are available with certified 60, 120, and 180 minute fire ratings tested with intumescent smoke and draft seals.'
      }
    ]
  },

  'safety-doors': {
    metaTitle: 'Metal Safety Doors Manufacturer in India | Anjali Doors',
    metaDescription: 'Heavy-duty insulated metal safety doors with multi-point locking. Superior burglar resistance, thermal PUF core, and elegant finishes for homes & offices.',
    keywords: [
      'Safety Doors Manufacturer',
      'Metal Safety Doors',
      'Steel Security Doors',
      'Laminated Finish Metal Safety Doors',
      'HMPS PUF Safety Doors Mumbai',
      'Residential Main Safety Doors',
      'heavy duty insulated metal safety doors with SS fittings for residential apartments',
      'laminated PUF core steel security main entrance doors'
    ],
    imageAlt: 'Heavy Duty Metal Safety Security Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - Insulated Metal Safety Security Entrance Door',
    faqs: [
      {
        question: 'Why choose a metal safety door over traditional wooden doors?',
        answer: 'Metal safety doors offer exceptional structural integrity, zero termite vulnerability, warp resistance, high fire resistance, and tamper-proof security that wooden doors cannot match over years of exterior exposure.'
      },
      {
        question: 'What locking systems and security hardware come integrated?',
        answer: 'Our metal safety doors come equipped with multi-point mortise security locks, anti-crowbar security strike plates, heavy-duty stainless steel ball-bearing hinges, wide-angle optical peepholes, and digital biometric lock options.'
      },
      {
        question: 'What aesthetic finishes are available for apartment entrances?',
        answer: 'We offer elegant wooden grain sublimation finishes, premium UV-resistant architectural powder coating in customized RAL shades, and decorative stainless steel laser-cut safety grill designs.'
      },
      {
        question: 'Are Anjali Doors safety doors insulated against heat and external noise?',
        answer: 'Yes, our safety doors feature a high-density PUF or mineral honeycomb core that offers high thermal insulation and acoustic noise reduction from common building corridors.'
      }
    ]
  },

  'wood-finished-metal-doors': {
    metaTitle: 'Wood Finished Metal Doors Manufacturer | Anjali Doors India',
    metaDescription: 'Aesthetic wood grain finish steel doors combining authentic timber elegance with fire-resistant steel strength. Ideal for luxury apartments, villas & hotels.',
    keywords: [
      'Wood Finished Metal Doors',
      'Wood Grain Steel Doors',
      'Decorative Metal Doors',
      'Wood Finish Steel Doors Mumbai',
      'Aesthetic Metal Fire Doors',
      'Timber Finish Metal Doors',
      'sublimated wood grain finish galvanized steel doors for luxury apartments and hotels',
      'durable fire resistant wood finished hollow metal entrance doors'
    ],
    imageAlt: 'Sublimated Wood Grain Finish Steel Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - Luxury Wood Finished Galvanized Metal Door',
    faqs: [
      {
        question: 'How is the natural wood grain texture achieved on metal doors?',
        answer: 'We utilize an advanced Italian vacuum heat transfer sublimation process that permanently infuses realistic natural timber grain patterns into durable thermoset powder coatings, ensuring authentic wooden appeal without peeling or fading.'
      },
      {
        question: 'Are wood finished metal doors fire rated and termite proof?',
        answer: 'Yes, unlike real wood which is combustible and susceptible to termites and borer attack, our wood-finish galvanized steel doors are 100% termite proof, moisture resistant, and available with certified 60 to 120 minute fire ratings.'
      },
      {
        question: 'Can you match specific timber species like Teak, Walnut, or Oak?',
        answer: 'Yes, we provide an extensive palette of realistic wood finishes including Burma Teak, American Walnut, Wenge, Natural Oak, and Mahogany in matte and satin textures.'
      },
      {
        question: 'Where are wood finished metal doors commonly specified?',
        answer: 'They are the preferred choice for main entrance doors in residential high-rises, boutique hotel guest rooms, executive corporate boardrooms, and luxury villas requiring both high aesthetics and metal security.'
      }
    ]
  },

  'digital-access-doors': {
    metaTitle: 'Digital Access Doors Manufacturer India | Smart Steel Doors',
    metaDescription: 'High-security steel doors integrated with smart biometric fingerprint, RFID keypad & electric mortise locks. Engineered for server rooms & commercial facilities.',
    keywords: [
      'Digital Access Doors',
      'Smart Lock Steel Doors',
      'Electronic Access Doors',
      'Biometric Steel Doors Mumbai',
      'RFID Keypad Metal Doors',
      'Commercial Digital Access Doors',
      'heavy duty steel doors integrated with biometric fingerprint and RFID access control',
      'smart electronic access hollow metal doors for server rooms and corporate offices'
    ],
    imageAlt: 'Smart Biometric Digital Access Steel Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - Commercial Digital Access Hollow Metal Door Assembly',
    faqs: [
      {
        question: 'What access control technologies can be integrated into these steel doors?',
        answer: 'Our digital access doors support biometric fingerprint scanners, encrypted RFID/NFC card readers, backlit PIN code keypads, Bluetooth/WiFi mobile app unlocking, and centralized building management (BMS) access systems.'
      },
      {
        question: 'How are power cables routed through the steel door leaf and frame?',
        answer: 'Our hollow metal frames and leaves are pre-machined at our Boisar plant with concealed wiring raceways, electric power transfer hinges (EPT), and flush electrical junction boxes for seamless, tamper-proof installation.'
      },
      {
        question: 'What happens in the event of a power outage or fire alarm trip?',
        answer: 'All our digital access door systems feature high-security mechanical key override cylinders and can be configured with fail-safe or fail-secure electrical functions to unlock instantly upon emergency fire alarm activation.'
      },
      {
        question: 'Are these digital access doors suitable for server rooms and IT data centers?',
        answer: 'Yes, they are specifically engineered for high-security applications such as IT server rooms, bank cash counters, hospital pharmacies, and R&D facilities with heavy-duty structural steel reinforcement.'
      }
    ]
  },

  'metal-windows': {
    metaTitle: 'Industrial Metal Windows & Frames Manufacturer | Anjali Doors',
    metaDescription: 'Heavy-duty galvanized steel window frames and fire-rated metal windows with wired glass and louvers. Built for industrial plants, factories & warehouses.',
    keywords: [
      'Metal Windows Manufacturer',
      'Steel Window Frames',
      'Industrial Metal Windows',
      'Fire Rated Metal Windows',
      'Galvanized Steel Windows Mumbai',
      'Commercial Steel Window Casements',
      'fire resistant galvanized steel window frames with wired glass and vision panels',
      'heavy duty architectural metal windows for factories and industrial plants'
    ],
    imageAlt: 'Industrial Galvanized Steel Metal Windows by Anjali Doors Boisar',
    imageTitle: 'Anjali Doors - Fire Rated Commercial Steel Window Frame and Casement',
    faqs: [
      {
        question: 'What types of metal windows does Anjali Doors manufacture?',
        answer: 'We manufacture fixed architectural vision windows, side-hung casement steel windows, top-hung ventilator windows, fire-rated glazed steel windows, and customized industrial louvred window assemblies.'
      },
      {
        question: 'Are fire rated metal window frames available with certified test certificates?',
        answer: 'Yes, our fire rated metal windows are fabricated with reinforced galvanized steel profiles and fitted with certified fire-resistant glass or clear ceramic glass rated for 60 to 120 minutes of fire integrity.'
      },
      {
        question: 'What corrosion protection is applied for coastal or industrial environments?',
        answer: 'Our windows are fabricated from high-grade zinc-coated galvanized steel sheets (120-275 GSM) followed by a 7-tank pre-treatment wash and oven-baked pure polyester powder coating (60-80 microns) for superior weather resistance.'
      },
      {
        question: 'Can you fabricate custom window sizes for industrial factory sheds?',
        answer: 'Yes, we specialize in tailor-made BOQ specifications, manufacturing large span ribbon window frames, mullions, and transom configurations suited for industrial sheds, substations, and manufacturing plants.'
      }
    ]
  },

  'electrical-gate': {
    metaTitle: 'Motorized Electrical Gates Manufacturer India | Anjali Doors',
    metaDescription: 'Heavy-duty automatic electric sliding & swing gates for factories, industrial parks & residential complexes. High-torque drive motors with remote control.',
    keywords: [
      'Electrical Gate Manufacturer',
      'Automatic Sliding Gates',
      'Motorized Gates India',
      'Industrial Motorized Sliding Gates Mumbai',
      'Electric Automated Security Gates',
      'Commercial Entry Gates',
      'heavy duty automated electric sliding gates with remote control drive for factories',
      'industrial motorized security gate systems for logistics parks and commercial estates'
    ],
    imageAlt: 'Motorized Industrial Electric Sliding Gate by Anjali Doors',
    imageTitle: 'Anjali Doors - Automatic Heavy-Duty Electrical Industrial Gate',
    faqs: [
      {
        question: 'What gate mechanisms and motor capacities do you offer?',
        answer: 'We engineer heavy-duty motorized sliding gates, cantilever sliding gates, and bi-parting automated swing gates equipped with high-torque Italian industrial drive gearmotors rated from 500 kg up to 4000 kg gate weights.'
      },
      {
        question: 'What safety sensors and automation features are included?',
        answer: 'Every electrical gate system includes infrared anti-crush safety photocells, flashing warning beacons, auto-stop reverse sensors, wireless RF remote transmitters, and manual clutch key override for power cuts.'
      },
      {
        question: 'Can the electrical gate integrate with boom barriers and RFID boom systems?',
        answer: 'Yes, our control boards interface smoothly with long-range RFID vehicle tags, ANPR number plate recognition cameras, access control push buttons, and automated boom barrier systems.'
      },
      {
        question: 'What structural steel profiles are used in gate fabrication?',
        answer: 'Our gates are constructed with heavy-duty structural hollow sections (SHS/RHS) and galvanized steel sheets, hot-dip galvanized or zinc-rich primed with epoxy PU topcoats to resist harsh outdoor monsoon conditions.'
      }
    ]
  },

  'steel-doors': {
    metaTitle: 'Hollow Metal Steel Doors Manufacturer in India | Anjali Doors',
    metaDescription: 'Heavy-duty galvanized hollow metal steel doors for commercial, industrial & institutional buildings. Flush design with high durability & custom hardware.',
    keywords: [
      'Steel Doors Manufacturer',
      'Hollow Metal Steel Doors',
      'Commercial Steel Doors India',
      'Industrial Steel Doors Mumbai',
      'Flush Metal Steel Doors',
      'Galvanized Sheet Steel Doors',
      'heavy duty galvanized hollow metal steel doors for commercial buildings and factories',
      'custom fabricated flush steel doors with heavy duty hinges and mortise locks'
    ],
    imageAlt: 'Flush Hollow Metal Steel Doors Fabricated by Anjali Doors',
    imageTitle: 'Anjali Doors - Commercial Grade Galvanized Hollow Metal Steel Door',
    faqs: [
      {
        question: 'What makes hollow metal steel doors more durable than standard doors?',
        answer: 'Hollow metal steel doors feature continuous welded internal steel stiffeners, reinforced hinge and lock pre-cut pockets, and a galvanized steel skin that will not warp, rot, crack, or degrade under heavy industrial foot-traffic.'
      },
      {
        question: 'What core insulation choices are available for steel doors?',
        answer: 'Depending on project specifications, we supply steel doors with high-density polyurethane foam (PUF), expanded polystyrene (EPS), bonded paper honeycomb, or non-combustible mineral wool cores.'
      },
      {
        question: 'Can steel doors be supplied pre-hung with frames and factory hardware prepped?',
        answer: 'Yes, Anjali Doors supplies complete door assemblies pre-hung in welded or knock-down frames, factory-mortised and tapped for ANSI or DIN standard hinges, locks, and automatic door closers.'
      },
      {
        question: 'What sheet thicknesses are standard for frames and door shutters?',
        answer: 'We provide 1.2mm, 1.6mm, or 2.0mm galvanized steel for door frames and 0.8mm, 1.0mm, or 1.2mm steel sheets for door leaves according to heavy-duty commercial duty ratings.'
      }
    ]
  },

  'metal-puf-doors': {
    metaTitle: 'Metal PUF Insulated Doors Manufacturer India | Anjali Doors',
    metaDescription: 'High-density polyurethane foam (PUF) core insulated metal doors. Exceptional thermal barrier and acoustic control for cold storage, labs & green buildings.',
    keywords: [
      'Metal PUF Doors',
      'PUF Insulated Doors',
      'Insulated Steel Doors',
      'PUF Core Metal Doors Mumbai',
      'Thermal Insulated Steel Doors',
      'Cold Storage PUF Doors',
      'high density polyurethane foam PUF insulated metal doors for acoustic and thermal control',
      'galvanized steel PUF core doors for commercial and cold chain facilities'
    ],
    imageAlt: 'High Density Metal PUF Insulated Steel Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - Thermal Insulated Polyurethane Foam (PUF) Metal Door',
    faqs: [
      {
        question: 'What is the density and thermal insulation value of the PUF core?',
        answer: 'Our metal PUF doors feature CFC/HCFC-free high-density injected polyurethane foam (40 to 42 kg/m³) with an exceptional thermal conductivity of 0.022 W/mK, delivering substantial energy savings in temperature-controlled spaces.'
      },
      {
        question: 'Where are metal PUF doors typically installed?',
        answer: 'They are widely used in cold storages, walk-in chillers, pharmaceutical warehouses, acoustic auditoriums, green building certified offices, and food processing facilities requiring high thermal resistance.'
      },
      {
        question: 'Are metal PUF doors soundproof and condensation resistant?',
        answer: 'Yes, the monolithic injected PUF core prevents thermal bridging and condensation while providing certified acoustic sound reduction of up to 34 dB against environmental noise.'
      },
      {
        question: 'What surface finishes and skin metals are available?',
        answer: 'We supply metal PUF doors in pre-coated galvanized iron (PPGI), stainless steel (SS 304), or custom powder-coated galvannealed steel in any project-specified RAL color.'
      }
    ]
  },

  'laminated-puf-doors': {
    metaTitle: 'Laminated PUF Doors Manufacturer | Decorative Metal Doors',
    metaDescription: 'Aesthetic high-pressure laminated (HPL) metal PUF doors. Combines premium interior elegance, scratch resistance & thermal insulation for modern spaces.',
    keywords: [
      'Laminated PUF Doors',
      'Decorative PUF Doors',
      'Insulated Laminated Doors',
      'Laminated Steel PUF Doors Mumbai',
      'Interior Insulated Metal Doors',
      'Residential PUF Doors',
      'aesthetic laminated finish metal PUF insulated doors for modern residential and office interiors',
      'scratch resistant laminated hollow metal doors with acoustic core'
    ],
    imageAlt: 'Decorative Laminated PUF Metal Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - Scratch-Resistant Decorative Laminated PUF Door',
    faqs: [
      {
        question: 'What are the benefits of laminated PUF metal doors over wooden laminate doors?',
        answer: 'Laminated PUF metal doors combine the warm, luxurious visual aesthetic of designer laminates with the rust-proof, termite-proof, fire-resistant, and warp-free durability of galvanized steel engineering.'
      },
      {
        question: 'What laminate textures and designs can be chosen?',
        answer: 'We provide an extensive collection of high-pressure architectural laminates including natural wood textures, stone finishes, solid matte pastels, and metallic sheens that are scratch and UV resistant.'
      },
      {
        question: 'Does the laminated surface peel or bubble in humid coastal climates like Mumbai?',
        answer: 'No, we utilize industrial polyurethane reactive (PUR) hot-melt adhesive bonding under hydraulic pressure, guaranteeing zero peeling, blistering, or delamination even under heavy humidity and temperature shifts.'
      },
      {
        question: 'Are laminated PUF doors suitable for residential apartments and corporate cabins?',
        answer: 'Yes, they are ideal for luxury apartment entrances, executive boardrooms, hotel rooms, and healthcare executive suites where soundproofing, thermal insulation, and refined aesthetics are essential.'
      }
    ]
  },

  'industrial-storage-solution': {
    metaTitle: 'Industrial Storage Solutions & Heavy Duty Racks | Anjali Doors',
    metaDescription: 'Custom engineered sheet metal industrial storage solutions, heavy-duty racking systems, and powder-coated storage cabinets for factories & warehouses.',
    keywords: [
      'Industrial Storage Solutions',
      'Heavy Duty Metal Racks',
      'Industrial Cabinets India',
      'Warehouse Storage Metal Systems Mumbai',
      'Industrial Steel Storage Lockers',
      'Custom Metal Storage Racks',
      'custom engineered industrial steel storage solutions and heavy duty racking systems for warehouses',
      'powder coated sheet metal storage enclosures for manufacturing units'
    ],
    imageAlt: 'Heavy Duty Industrial Metal Storage Solutions by Anjali Doors Boisar',
    imageTitle: 'Anjali Doors - Heavy Duty Warehouse Storage Racking and Metal Enclosure System',
    faqs: [
      {
        question: 'What types of industrial storage systems does Anjali Doors manufacture?',
        answer: 'We manufacture heavy-duty warehouse pallet racks, industrial tool cabinets, multi-tier shelving systems, modular steel lockers, chemical storage cabinets, and custom electrical enclosures.'
      },
      {
        question: 'What load bearing capacities are supported?',
        answer: 'Our racking systems and industrial steel shelves are engineered for heavy industrial duty, supporting uniform distributed loads (UDL) from 250 kg per shelf up to 3000 kg per pallet level with FEA structural verification.'
      },
      {
        question: 'What finishes and corrosion protection are used on metal racks?',
        answer: 'All storage components undergo seven-tank chemical degreasing, zinc phosphating, and electrostatic epoxy-polyester powder coating for robust scratch resistance and industrial corrosion protection.'
      },
      {
        question: 'Can you customize storage layout designs for specific warehouse dimensions?',
        answer: 'Yes, our engineering team in Tarapur MIDC provides 2D/3D CAD layouts and bespoke manufacturing tailored to your factory floor space, forklift aisle dimensions, and storage volume.'
      }
    ]
  },

  'window-and-door-fitting': {
    metaTitle: 'Architectural Window & Door Fittings Supplier | Anjali Doors',
    metaDescription: 'Certified stainless steel door fittings, UL panic bars, automatic door closers, mortise locks & architectural hardware for commercial & fire doors.',
    keywords: [
      'Window and Door Fittings',
      'Architectural Hardware India',
      'Door Hardware Supplier',
      'Fire Door Hardware Fittings Mumbai',
      'Stainless Steel Door Hinges and Handles',
      'Commercial Panic Bars and Closers',
      'certified stainless steel door fittings panic hardware and automatic door closers for fire rated assemblies',
      'commercial grade heavy duty architectural hardware for hollow metal doors'
    ],
    imageAlt: 'Certified Stainless Steel Window and Door Fittings by Anjali Doors',
    imageTitle: 'Anjali Doors - Commercial Grade Architectural Door Hardware and Panic Fittings',
    faqs: [
      {
        question: 'Are your door fittings certified for fire rated door assemblies?',
        answer: 'Yes, our architectural door hardware including SS 304 ball-bearing hinges, mortise locks, door closers, and panic crash bars are tested and certified for fire door installations up to 3 hours as per BS EN 1634 and UL standards.'
      },
      {
        question: 'What material grades are used in Anjali Doors fittings?',
        answer: 'We supply high-grade Stainless Steel (SS 304 & SS 316), forged brass, and high-strength zinc alloy hardware with satin brushed, polished, or PVD architectural finishes.'
      },
      {
        question: 'Do you provide complete hardware master keying solutions?',
        answer: 'Yes, we provide advanced grand master keying (GMK) and keyed-alike high-security euro profile cylinder lock systems for corporate towers, hospitals, and educational campuses.'
      },
      {
        question: 'Can you supply hardware matching custom architectural BOQ schedules?',
        answer: 'Yes, our hardware specialists map out complete door hardware schedules (ironmongery specifications) based on architectural door schedules, ensuring 100% compliance with life safety and fire codes.'
      }
    ]
  },

  'fabrication-work': {
    metaTitle: 'Industrial Sheet Metal & Steel Fabrication Services | Anjali Doors',
    metaDescription: 'Custom industrial sheet metal fabrication in Tarapur MIDC Boisar. Precision CNC fiber laser cutting, CNC bending, welding & structural steel works.',
    keywords: [
      'Fabrication Work India',
      'Sheet Metal Fabrication',
      'Industrial Metal Fabrication',
      'CNC Sheet Metal Fabrication Mumbai',
      'Custom Steel Fabrication Boisar MIDC',
      'Industrial Metal Fabrication Services',
      'custom heavy duty sheet metal and structural steel fabrication services in Tarapur MIDC Boisar',
      'precision CNC bending and fiber laser cutting fabrication for industrial projects'
    ],
    imageAlt: 'Industrial Sheet Metal Fabrication Services by Anjali Doors Tarapur MIDC',
    imageTitle: 'Anjali Doors - Precision CNC Laser Cutting and Industrial Steel Fabrication',
    faqs: [
      {
        question: 'What fabrication machinery and equipment are installed at your plant?',
        answer: 'Our state-of-the-art facility in MIDC Tarapur Boisar features high-precision CNC fiber laser cutting machines, multi-axis CNC hydraulic press brakes, MIG/TIG welding stations, and a modern automated powder coating line.'
      },
      {
        question: 'What materials and sheet thicknesses can you fabricate?',
        answer: 'We process Mild Steel (MS) up to 20mm, Stainless Steel (SS 304/316) up to 12mm, Galvanized Iron (GI), and Aluminium with high dimensional tolerances (+/- 0.1mm).'
      },
      {
        question: 'Do you undertake custom OEM structural and enclosure fabrication?',
        answer: 'Yes, we manufacture electrical control panels, acoustic sound enclosures, heavy machinery frames, structural steel platforms, and bespoke architectural metal components.'
      },
      {
        question: 'What quality testing and inspection protocols are maintained?',
        answer: 'Every fabrication batch undergoes rigorous QA checks including weld penetration inspections, digital caliper tolerance verification, coating thickness (DFT) testing, and cross-hatch adhesion checks.'
      }
    ]
  },

  'electric-rolling-shutter': {
    metaTitle: 'Motorized Electric Rolling Shutters Manufacturer | Anjali Doors',
    metaDescription: 'Heavy-duty motorized electric rolling shutters for factories, warehouses & commercial showrooms. Robust galvanized steel slats with automated remote drive.',
    keywords: [
      'Electric Rolling Shutter Manufacturer',
      'Motorized Rolling Shutters',
      'Automatic Rolling Shutters India',
      'Industrial Electric Rolling Shutters Mumbai',
      'Commercial Motorized Shutters',
      'Heavy Duty Shutter Manufacturer',
      'heavy duty motorized electric rolling shutters with central motor and remote automation for warehouses',
      'galvanized steel industrial motorized rolling shutters for factory loading bays'
    ],
    imageAlt: 'Motorized Electric Rolling Shutters for Warehouses by Anjali Doors',
    imageTitle: 'Anjali Doors - Heavy Duty Automated Industrial Electric Rolling Shutter',
    faqs: [
      {
        question: 'What motorized drive systems are used in Anjali Doors electric rolling shutters?',
        answer: 'We equip our rolling shutters with heavy-duty side-mount or center-mount electric gear motors, featuring thermal overload protection, electromagnetic braking, and emergency manual hand-chain drive during power blackouts.'
      },
      {
        question: 'What slat materials and gauge thicknesses are available?',
        answer: 'We fabricate rolling shutter laths using cold-rolled galvanized steel or aluminium profiles ranging from 0.8mm to 1.2mm thickness, available in solid, perforated, or grill patterns for ventilation.'
      },
      {
        question: 'What maximum opening dimensions can be covered?',
        answer: 'Our heavy-duty industrial motorized shutters can span wide warehouse and loading dock openings up to 12 meters in width and 8 meters in height with wind-lock guide rails.'
      },
      {
        question: 'Can the electric shutter be integrated with safety sensors and remote controls?',
        answer: 'Yes, our shutters integrate wireless RF remote controls, safety edge bottom sensors that auto-reverse upon obstacle contact, and fire alarm signal integration for automatic closure.'
      }
    ]
  },

  'louvre-doors': {
    metaTitle: 'Ventilated Louvre Doors Manufacturer India | Anjali Doors',
    metaDescription: 'Weatherproof & acoustic steel louvre doors with fixed chevron blades. Designed for generator rooms, electrical substations, HVAC plant rooms & transformer yards.',
    keywords: [
      'Louvre Doors Manufacturer',
      'Ventilated Steel Doors',
      'Louvered Metal Doors',
      'Acoustic Louvre Doors Mumbai',
      'Generator Room Louvre Doors',
      'HVAC Plant Room Louvre Doors',
      'weatherproof and acoustic galvanized steel louvre doors for generator rooms and transformer yards',
      'custom ventilation louvre metal doors with bird screen and insect wire mesh'
    ],
    imageAlt: 'Ventilated Steel Louvre Doors for Plant Rooms by Anjali Doors',
    imageTitle: 'Anjali Doors - Weatherproof Louvered Metal Door with Insect Mesh',
    faqs: [
      {
        question: 'What free airflow percentage do your louvre doors provide?',
        answer: 'Our louvre doors are engineered with inverted-V and chevron style blades delivering between 40% to 55% free airflow area while maintaining complete sight obscurity and weather resistance.'
      },
      {
        question: 'Are louvre doors fitted with insect and bird screens?',
        answer: 'Yes, every louvre door can be fitted with rear-mounted removable stainless steel bird mesh (12mm x 12mm) or fine insect wire mesh to prevent pests and debris while maintaining continuous ventilation.'
      },
      {
        question: 'Can louvre doors be fabricated with acoustic sound attenuation?',
        answer: 'Yes, for diesel generator (DG) rooms and noisy chillers, we manufacture acoustic louvre doors lined with sound-absorbing perforated metal and mineral wool to dampen machinery noise.'
      },
      {
        question: 'What sheet gauges and corrosion resistance treatments are applied?',
        answer: 'We construct frames from 1.6mm galvanized steel and louvre blades from 1.2mm sheet metal, protected by heavy-duty polyester powder coating to withstand outdoor rain and moisture.'
      }
    ]
  },

  'shaft-doors': {
    metaTitle: 'Fire Rated Shaft Doors Manufacturer India | Anjali Doors',
    metaDescription: 'ARAI certified fire rated shaft doors for electrical and plumbing utility risers. Flush steel construction with cam locks & intumescent fire seals.',
    keywords: [
      'Shaft Doors Manufacturer',
      'Fire Rated Shaft Doors',
      'Utility Shaft Doors India',
      'Electrical Shaft Doors Mumbai',
      'Plumbing Riser Shaft Doors',
      'Fire Resistant Shaft Access Doors',
      'ARAI certified 120 minute fire rated shaft doors for electrical and plumbing utility risers',
      'flush commercial steel shaft access doors with cam lock and master keying'
    ],
    imageAlt: 'Fire Rated Electrical and Plumbing Shaft Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - ARAI Certified Fire Rated Utility Shaft Door Assembly',
    faqs: [
      {
        question: 'Why are fire rated shaft doors mandatory in commercial high-rises?',
        answer: 'Utility shafts create vertical chimney effects during building fires. Our certified 120-minute fire rated shaft doors prevent fire and lethal smoke from spreading vertically across floors through electrical and plumbing risers.'
      },
      {
        question: 'What locking mechanisms are provided on shaft access doors?',
        answer: 'We equip shaft doors with flush quarter-turn coin-turn or triangle key cam locks, budget deadlocks, or master-keyed cylinder mortise locks to prevent unauthorized tampering.'
      },
      {
        question: 'Can shaft doors be flush mounted into drywalls and masonry walls?',
        answer: 'Yes, our shaft door frames are engineered with picture-frame surrounds or concealed beaded frames that allow completely flush seamless installation into brickwork, RCC, or drywall partitions.'
      },
      {
        question: 'What fire test standards do Anjali Doors shaft doors comply with?',
        answer: 'They are tested and certified under IS 3614 and BS 476 Part 20/22 for 60 and 120 minutes of fire resistance at ARAI and NABL accredited test facilities.'
      }
    ]
  },

  'duct-doors-2': {
    metaTitle: 'HVAC Duct Access Doors Manufacturer | Anjali Doors India',
    metaDescription: 'Airtight insulated galvanized steel duct doors for HVAC inspection, ventilation shafts & mechanical plant rooms. High air-tightness & acoustic insulation.',
    keywords: [
      'Duct Doors Manufacturer',
      'HVAC Duct Access Doors',
      'Inspection Duct Doors',
      'Airtight Duct Doors Mumbai',
      'Fire Rated Duct Doors',
      'Service Duct Access Doors',
      'insulated airtight galvanized steel duct doors for HVAC inspection and maintenance',
      'custom fire resistant flush duct access doors for commercial mechanical rooms'
    ],
    imageAlt: 'Airtight HVAC Duct Access Doors by Anjali Doors Boisar',
    imageTitle: 'Anjali Doors - Insulated Galvanized Steel Duct Access Door',
    faqs: [
      {
        question: 'What insulation and sealing is provided on HVAC duct doors?',
        answer: 'Our duct doors feature a 25mm to 50mm high-density thermal insulation core (rockwool or PUF) with closed-cell neoprene or EPDM perimeter gaskets to prevent condensation and air leakage in pressurized duct systems.'
      },
      {
        question: 'What latching hardware is installed on duct doors?',
        answer: 'They feature dual progressive cam-action compression latches with inside and outside operable handles, ensuring a tight perimeter seal under positive or negative HVAC static pressures.'
      },
      {
        question: 'Can duct access doors be fabricated with inspection observation windows?',
        answer: 'Yes, we can incorporate double-glazed tempered safety glass or wire-reinforced observation viewports allowing visual inspection of filters and dampers without breaking the duct seal.'
      },
      {
        question: 'What steel grades are used for duct door construction?',
        answer: 'They are fabricated from heavy-gauge galvanized iron (GI) or Grade SS 304 stainless steel sheets to withstand industrial airflow moisture and prevent rust formation.'
      }
    ]
  },

  'staircase-exit-doors': {
    metaTitle: 'Fire Rated Staircase Exit Doors Manufacturer | Anjali Doors',
    metaDescription: '2-hour fire rated staircase exit doors with panic hardware & smoke seals. Conforming to National Building Code (NBC) for high-rise commercial buildings.',
    keywords: [
      'Staircase Exit Doors',
      'Fire Staircase Doors',
      'Emergency Evacuation Doors',
      'Staircase Fire Rated Doors Mumbai',
      'Fire Exit Stairwell Doors',
      'NBC Compliant Staircase Doors',
      '2 hour fire rated staircase exit doors with panic push bars for commercial high rise towers',
      'National Building Code compliant fire resistant stairwell doors with smoke seal gaskets'
    ],
    imageAlt: '2-Hour Fire Rated Staircase Exit Doors with Panic Bar by Anjali Doors',
    imageTitle: 'Anjali Doors - NBC Compliant Commercial Staircase Fire Exit Door',
    faqs: [
      {
        question: 'What makes staircase exit doors critical during high-rise fire evacuations?',
        answer: 'Stairwells serve as the designated primary pressurized escape route during a fire. Our 2-hour fire rated staircase doors maintain stairwell integrity, blocking toxic smoke, radiant heat, and gases from entering the evacuation stairwell.'
      },
      {
        question: 'Do these doors conform to NBC 2016 Part 4 fire life safety codes?',
        answer: 'Yes, Anjali Doors staircase exit doors strictly meet National Building Code 2016 Part 4 regulations, fitted with certified self-closing devices, intumescent fire seals, and certified panic egress devices.'
      },
      {
        question: 'Can staircase doors include wired or fire-rated vision glass?',
        answer: 'Yes, we provide fire-rated clear ceramic vision panels (up to 120 minutes) allowing occupants to verify that the stairwell is safe and clear before opening the door during an emergency.'
      },
      {
        question: 'What hardware options are provided for controlled stairwell re-entry?',
        answer: 'We provide heavy-duty panic bars with fail-safe electric strike interface or electro-magnetic locks that automatically unlock stairwell doors upon fire alarm activation to allow firefighter access.'
      }
    ]
  },

  'podium-doors-2': {
    metaTitle: 'Podium Doors Manufacturer India | Weatherproof Metal Doors',
    metaDescription: 'Heavy-duty weatherproof exterior steel podium doors connecting parking decks, lobbies & podium gardens. Robust anti-corrosion galvanized construction.',
    keywords: [
      'Podium Doors Manufacturer',
      'Weatherproof Podium Doors',
      'Parking Podium Metal Doors',
      'Podium Deck Steel Doors Mumbai',
      'Commercial Podium Access Doors',
      'Heavy Duty Podium Doors',
      'heavy duty weatherproof exterior steel podium doors separating parking decks and clubhouses',
      'corrosion resistant galvanized metal podium doors with heavy duty weatherstripping'
    ],
    imageAlt: 'Heavy Duty Weatherproof Podium Doors by Anjali Doors Boisar',
    imageTitle: 'Anjali Doors - Commercial Parking and Podium Deck Exterior Steel Door',
    faqs: [
      {
        question: 'Why are podium doors designed differently from standard interior doors?',
        answer: 'Podium doors are exposed to outdoor monsoon weather, wind driving rain, vehicle exhaust fumes, and intense UV sunlight between parking podiums and building lobbies. They require heavy galvanized steel with outdoor weatherstripping.'
      },
      {
        question: 'What weatherproofing features are incorporated into podium doors?',
        answer: 'Our podium doors include heavy-duty exterior EPDM weather seals, stainless steel threshold weather bars, overhead rain drip caps, and multi-point sealing to prevent rainwater ingress.'
      },
      {
        question: 'Can podium doors be supplied with heavy-duty automated closers?',
        answer: 'Yes, we equip them with high-traffic grade-1 overhead door closers and magnetic hold-open systems designed to resist strong outdoor wind gusts common at elevated podium levels.'
      },
      {
        question: 'What finish is recommended for podium doors exposed to weather?',
        answer: 'We recommend pure polyester architectural powder coating (60-80 microns) applied over zinc-phosphated galvanized steel, providing high UV resistance and anti-corrosion longevity.'
      }
    ]
  },

  'lobby-doors': {
    metaTitle: 'Architectural Lobby Doors Manufacturer | Anjali Doors India',
    metaDescription: 'High-aesthetic commercial lobby metal doors with designer vision glass, wood grain finishes & premium handles. Built for corporate headquarters & luxury residences.',
    keywords: [
      'Lobby Doors Manufacturer',
      'Entrance Metal Doors',
      'Commercial Lobby Doors',
      'Luxury Lobby Steel Doors Mumbai',
      'Architectural Entrance Doors',
      'Grand Lobby Metal Doors',
      'bespoke architectural metal lobby doors with decorative vision glass and brass or SS handles',
      'high aesthetic wood grain finished metal lobby entrance doors for corporate headquarters'
    ],
    imageAlt: 'Architectural Commercial Entrance Lobby Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - High Aesthetic Commercial Lobby Steel Entrance Door',
    faqs: [
      {
        question: 'What aesthetic finishes are available for grand entrance lobby doors?',
        answer: 'We offer luxurious sublimated wood-grain finishes, brushed and polished stainless steel cladding, PVD brass and titanium coatings, and modern architectural textured powder coatings.'
      },
      {
        question: 'Can lobby doors accommodate large architectural vision panels?',
        answer: 'Yes, our engineering team manufactures custom narrow-stile steel profiles that accommodate expansive laminated safety glass, tinted glass, or double-glazed insulated units for maximum lobby daylighting.'
      },
      {
        question: 'Can these doors integrate with automated swing operators and sensors?',
        answer: 'Yes, our lobby doors can be integrated with motorized automatic swing door operators, radar motion sensors, push-and-go buttons, and building access control keypads.'
      },
      {
        question: 'Are Anjali Doors lobby doors fire rated?',
        answer: 'Yes, we can engineer high-aesthetic lobby doors with certified 60 or 120-minute fire ratings, combining grand architectural appeal with rigorous fire safety compliance.'
      }
    ]
  },

  'meter-room': {
    metaTitle: 'Electrical Meter Room Doors Manufacturer | Anjali Doors India',
    metaDescription: 'Ventilated steel meter room doors conforming to power discom specifications. Fire resistant galvanized construction with wire mesh louvers & safety locks.',
    keywords: [
      'Meter Room Doors Manufacturer',
      'Electrical Meter Room Doors',
      'Ventilated Meter Doors',
      'Electrical Substation Doors Mumbai',
      'Power Distribution Room Doors',
      'Fire Rated Meter Room Doors',
      'heavy duty galvanized steel ventilated meter room doors conforming to discom electricity board specifications',
      'fire resistant electrical meter room doors with wire mesh ventilation louvers'
    ],
    imageAlt: 'Ventilated Electrical Meter Room Doors by Anjali Doors Boisar',
    imageTitle: 'Anjali Doors - Fire Resistant Ventilated Electrical Meter Room Door',
    faqs: [
      {
        question: 'Do Anjali Doors meter room doors meet electricity board (Discom) specifications?',
        answer: 'Yes, our electrical meter room doors strictly adhere to municipal electricity board regulations (such as MSEDCL, Adani Electricity, Tata Power, and BEST) regarding ventilation ratios, steel gauge, and fire resistance.'
      },
      {
        question: 'Why is ventilation mandatory in electrical meter room doors?',
        answer: 'Power transformers, busbars, and energy meters generate continuous heat and potential electrical fumes. Our doors feature integrated lower and upper louvers with insect wire mesh to dissipate heat and prevent explosion risks.'
      },
      {
        question: 'What fire ratings are available for electrical meter rooms?',
        answer: 'We manufacture meter room doors with certified 120-minute fire resistance ratings to isolate electrical fires from spreading to residential and commercial lobbies.'
      },
      {
        question: 'What locking and grounding features are provided?',
        answer: 'Our meter room doors feature discom-compliant padlock hasp arrangements or master cylinder locks, along with dedicated copper grounding earth studs on the door leaf and frame.'
      }
    ]
  },

  'elv-shaft-doors': {
    metaTitle: 'ELV Shaft Doors Manufacturer in India | Anjali Doors',
    metaDescription: 'Fire rated Extra Low Voltage (ELV) telecommunication shaft doors. Secures data risers, BMS cabling, IT server backbones & fiber optic networks.',
    keywords: [
      'ELV Shaft Doors Manufacturer',
      'Telecommunication Shaft Doors',
      'Low Voltage Riser Doors',
      'Data Riser Shaft Doors Mumbai',
      'Server Room Shaft Doors',
      'IT Networking Riser Doors',
      'secure fire rated ELV telecommunication shaft doors for IT parks and data centers',
      'extra low voltage utility riser access doors with tamper proof hardware'
    ],
    imageAlt: 'Fire Rated ELV Telecommunications Shaft Doors by Anjali Doors',
    imageTitle: 'Anjali Doors - Extra Low Voltage (ELV) Data Riser Shaft Door',
    faqs: [
      {
        question: 'What is the purpose of dedicated ELV shaft doors in commercial buildings?',
        answer: 'ELV shaft doors protect sensitive telecom lines, CAT6/fiber optic data risers, CCTV, fire alarm backbone cabling, and BMS communication cables from tampering, fire exposure, and electromagnetic interference.'
      },
      {
        question: 'What fire resistance rating do your ELV shaft doors carry?',
        answer: 'Our ELV shaft doors are certified for 60 and 120 minutes of fire resistance, preventing fire propagation through telecom risers in IT parks, corporate towers, and data centers.'
      },
      {
        question: 'What security locking arrangements are installed?',
        answer: 'They feature tamper-resistant cam locks, master-keyed mortise cylinders, or microswitch sensors that trigger an alarm in the Central BMS room if an unauthorized shaft door is opened.'
      },
      {
        question: 'Can ELV shaft doors be manufactured in double-leaf and custom riser sizes?',
        answer: 'Yes, we fabricate custom single and double-leaf dimensions engineered to fit full-height cabling rack risers with removable header bars for convenient periodic cable pulling.'
      }
    ]
  }
};
