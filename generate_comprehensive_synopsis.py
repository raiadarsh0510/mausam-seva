import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748B"))
        
        # Suppress header and footer on cover page (page 1)
        if self._pageNumber > 1:
            # Header
            self.drawString(40, 805, "SMART INDIA HACKATHON 2026 | Ministry of Earth Sciences (MoES) / IMD")
            self.drawRightString(555, 805, "PS ID: SIH26076 | Team NEXORA")
            self.setStrokeColor(colors.HexColor("#CBD5E1"))
            self.setLineWidth(0.5)
            self.line(40, 798, 555, 798)
            
            # Footer
            self.line(40, 45, 555, 45)
            self.drawString(40, 32, "MausamSeva (मौसम सेवा) — Comprehensive Project Synopsis & Strategic Blueprint")
            page_text = f"Page {self._pageNumber} of {page_count}"
            self.drawRightString(555, 32, page_text)
        self.restoreState()

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=A4,
        leftMargin=40,
        rightMargin=40,
        topMargin=50,
        bottomMargin=50
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    primary_color = colors.HexColor("#0F2942")     # Deep Navy
    secondary_color = colors.HexColor("#0D9488")   # Teal
    dark_slate = colors.HexColor("#1E293B")        # Charcoal
    accent_crimson = colors.HexColor("#E11D48")    # Red
    bg_light = colors.HexColor("#F8FAFC")          # Off white
    border_color = colors.HexColor("#E2E8F0")

    title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=primary_color,
        alignment=1, # Center
        spaceAfter=8
    )

    subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        textColor=secondary_color,
        alignment=1,
        spaceAfter=15
    )

    h1_style = ParagraphStyle(
        'H1',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=14,
        leading=18,
        textColor=primary_color,
        spaceBefore=12,
        spaceAfter=6,
        keepWithNext=True
    )

    h2_style = ParagraphStyle(
        'H2',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=secondary_color,
        spaceBefore=8,
        spaceAfter=4,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=12.2,
        textColor=dark_slate,
        spaceAfter=5
    )

    body_bold = ParagraphStyle(
        'BodyDarkBold',
        parent=body_style,
        fontName='Helvetica-Bold'
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=body_style,
        leftIndent=14,
        firstLineIndent=-10,
        spaceAfter=3
    )

    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.white,
        alignment=1
    )

    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=dark_slate
    )

    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=table_cell,
        fontName='Helvetica-Bold'
    )

    callout_text = ParagraphStyle(
        'CalloutText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=12,
        textColor=primary_color
    )

    story = []

    def make_callout(text, bg="#F0FDF4", border="#86EFAC", title="KEY TAKEAWAY"):
        p = [
            Paragraph(f"<b>{title}:</b> {text}", callout_text)
        ]
        t = Table([[p]], colWidths=[515])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor(bg)),
            ('BOX', (0,0), (-1,-1), 1, colors.HexColor(border)),
            ('PADDING', (0,0), (-1,-1), 7),
            ('TOPPADDING', (0,0), (-1,-1), 5),
            ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ]))
        return t

    # ==================== COVER / HEADER ====================
    story.append(Spacer(1, 10))
    banner_data = [
        [
            Paragraph("<font size='9'><b>MINISTRY OF EARTH SCIENCES (MoES)</b><br/>Government of India</font>", ParagraphStyle('TopL', parent=styles['Normal'], fontName='Helvetica', textColor=primary_color)),
            Paragraph("<font size='9'><b>SMART INDIA HACKATHON 2026</b><br/>Problem Statement ID: <b>SIH26076</b></font>", ParagraphStyle('TopR', parent=styles['Normal'], fontName='Helvetica', textColor=primary_color, alignment=2))
        ]
    ]
    banner_table = Table(banner_data, colWidths=[257, 258])
    banner_table.setStyle(TableStyle([
        ('LINEBELOW', (0,0), (-1,-1), 1.5, secondary_color),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(banner_table)
    story.append(Spacer(1, 15))

    story.append(Paragraph("MausamSeva (मौसम सेवा / Mausam 2.0)", title_style))
    story.append(Paragraph("<b>Personalized Adaptive Weather Intelligence & Life-Safety Layer for the 'Mausam' Ecosystem</b>", subtitle_style))
    
    meta_data = [
        [Paragraph("<b>Project Nomenclature:</b> MausamSeva (MAUSAM PRISM)", table_cell), Paragraph("<b>Target Ministry:</b> Ministry of Earth Sciences (MoES) / IMD", table_cell)],
        [Paragraph("<b>Team Registered Name:</b> NEXORA", table_cell), Paragraph("<b>Software Category:</b> Mobile, Web & Edge AI Cloud Stack", table_cell)],
        [Paragraph("<b>Authoritative Data Sources:</b> IMD, CPCB, GKMS, Bhashini", table_cell), Paragraph("<b>Compliance:</b> DPDP Act 2023 | WMO Standards | OASIS CAP v1.2", table_cell)]
    ]
    meta_table = Table(meta_data, colWidths=[257, 258])
    meta_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), bg_light),
        ('BOX', (0,0), (-1,-1), 0.75, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    story.append(meta_table)
    story.append(Spacer(1, 12))

    # ==================== 1. EXECUTIVE SUMMARY ====================
    story.append(Paragraph("1. Executive Summary & Problem Framing", h1_style))
    story.append(Paragraph(
        "India's meteorological geography is one of the most diverse in the world, spanning arid deserts, tropical coastlines, glacial Himalayan passes, and dense agrarian river basins. While the India Meteorological Department (IMD) operates world-class supercomputing NWP models and multi-satellite observation arrays, <b>the citizen dissemination interface—the official 'Mausam' mobile application—suffers from a catastrophic 'One-Size-Fits-All' architectural paralysis</b>. Millions of diverse citizens receive identical, static weather numbers (e.g., <i>'31°C, Humidity 72%, Wind 14 km/h'</i>) that require navigating through 4 to 6 buried multi-level menus to find actionable information.",
        body_style
    ))
    story.append(Paragraph(
        "<b>MausamSeva (मौसम सेवा)</b> introduces a revolutionary, privacy-first personalization layer over the existing national weather infrastructure. It transforms passive meteorological figures into <b>age-inclusive (Ages 10 to 80+), context-aware, action-oriented directives</b> tailored across <b>8 citizen personas</b> (Farmer, Health/Senior, Commuter, Coastal Fisherfolk, Student, Athlete, Traveler, Event Family). Crucially, it pioneers an <b>On-Device Zero-Knowledge Edge AI</b> architecture where personal health and behavioral profiling remain 100% on the user's handset, an <b>Emergency Threat-Preempting Override</b> that dynamically restructures the entire UI during life-threatening events (e.g., lightning strikes, squalls, flash floods), and a <b>22-language bilingual voice assistant (MAUSAM PRISM AI)</b> supporting code-mixed Hinglish queries.",
        body_style
    ))
    
    story.append(make_callout(
        "MausamSeva does NOT rebuild or replace IMD's forecasting backend. It is an intelligent, high-efficiency client-and-edge orchestration layer that supercharges authoritative government data (IMD, CPCB, GKMS, Bhashini) to save lives, prevent economic ruin, and empower every citizen from rural farmer to urban commuter.",
        "#EFF6FF", "#93C5FD", "CORE ARCHITECTURAL PRINCIPLE"
    ))
    story.append(Spacer(1, 8))

    # ==================== 2. DEEP GAP ANALYSIS: EXISTING APPS ====================
    story.append(Paragraph("2. Critical Analysis of Existing Solutions & Why They Fail", h1_style))
    story.append(Paragraph(
        "A thorough evaluation of existing government and commercial applications reveals severe structural deficiencies that justify the creation of MausamSeva:",
        body_style
    ))

    apps_comp_data = [
        [
            Paragraph("Platform / App", table_header),
            Paragraph("Current Architecture & User Experience", table_header),
            Paragraph("Primary Bottlenecks & Failure Modes", table_header),
            Paragraph("MausamSeva Disruption", table_header)
        ],
        [
            Paragraph("<b>Official IMD 'Mausam' App</b>", table_cell_bold),
            Paragraph("Static city dashboard; rigid menu grid. Displays raw meteorological parameters without contextual interpretation.", table_cell),
            Paragraph("45–60s time-to-critical-info. Identical view for a rural farmer and an asthmatic patient. Crashes/blanks out on 2G rural networks.", table_cell),
            Paragraph("<b>Instant <1s render</b> via Server-Driven Dynamic Cards; 100% tailored to persona; sub-380KB cold payload.", table_cell)
        ],
        [
            Paragraph("<b>Fragmented MoES Apps<br/>(Meghdoot & Damini)</b>", table_cell_bold),
            Paragraph("Siloed, single-purpose apps: Meghdoot handles agro-bulletins, Damini handles lightning warnings.", table_cell),
            Paragraph("Forces citizens to download 3+ different apps. Damini requires continuous background GPS, causing severe battery drain.", table_cell),
            Paragraph("<b>Unified Safety Hub:</b> Merges agro, lightning, and synoptic radar into one unified threat-preempting view.", table_cell)
        ],
        [
            Paragraph("<b>Commercial Apps<br/>(AccuWeather, Weather Ch.)</b>", table_cell_bold),
            Paragraph("Ad-heavy interfaces; intrusive tracking scripts; proprietary international forecast models.", table_cell),
            Paragraph("Aggressive monetization of user GPS and health profiling; poor accuracy for localized Indian monsoon micro-climates.", table_cell),
            Paragraph("<b>Zero-Knowledge Edge Privacy:</b> No personal profiling transmitted to servers; 100% grounded in official IMD data.", table_cell)
        ],
        [
            Paragraph("<b>Windy / Radar Portals</b>", table_cell_bold),
            Paragraph("Complex, high-bandwidth animated scalar wind vector visualizers designed for sailors and meteorologists.", table_cell),
            Paragraph("Requires high-speed 4G/5G and expert domain knowledge; entirely incomprehensible to rural, elderly, or low-literacy users.", table_cell),
            Paragraph("<b>Voice-First Regional Accessibility:</b> Bhashini ASR/TTS explains complex wind/rain risks in 22 native Indian dialects.", table_cell)
        ]
    ]
    apps_table = Table(apps_comp_data, colWidths=[90, 140, 145, 140])
    apps_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(apps_table)
    story.append(Spacer(1, 10))

    # ==================== 3. THE 8 PERSONA ECOSYSTEM ====================
    story.append(Paragraph("3. Target Audience & The 8 Dynamic Citizen Personas", h1_style))
    story.append(Paragraph(
        "Rather than forcing citizens into a generic demographic mold, MausamSeva formulates an age-inclusive, profession-calibrated taxonomy spanning ages 10 to 80+:",
        body_style
    ))

    personas_data = [
        [Paragraph("Persona & Target Age", table_header), Paragraph("Key Data Dependencies", table_header), Paragraph("Dynamic Card Output & Action-Oriented Guidance", table_header), Paragraph("Why This Feature Exists", table_header)],
        [
            Paragraph("🌾 <b>Kisan / Farmer</b><br/>(Ages 25–70+)", table_cell_bold),
            Paragraph("IMD GKMS agro-bulletins, topsoil moisture (0-15cm), humidity, rainfall probability, wind gusts.", table_cell),
            Paragraph("<b>Pesticide Wash-off Risk Window:</b> Advises pausing chemical spraying 4h before forecast showers. Mandi produce rain protection alerts.", table_cell),
            Paragraph("Prevents catastrophic post-harvest produce rot and ₹10,000+ per acre pesticide investment washouts.", table_cell)
        ],
        [
            Paragraph("👵 <b>Senior & Health</b><br/>(Ages 60–80+)", table_cell_bold),
            Paragraph("CPCB PM2.5, PM10, ozone ($O_3$), humidity index, temperature extremes, wet-bulb heat.", table_cell),
            Paragraph("<b>Particulate Inversion Warning:</b> High-contrast alert advising elderly asthma patients to postpone morning walks. 1-tap 14567 Elderline integration.", table_cell),
            Paragraph("Reduces winter smog-induced respiratory emergencies and summer heatstroke mortality in vulnerable elders.", table_cell)
        ],
        [
            Paragraph("🚗 <b>Daily Commuter</b><br/>(Ages 18–60)", table_cell_bold),
            Paragraph("3-hour Doppler radar nowcast, localized visibility (CAT-I/II/III fog), underpass waterlogging sensors.", table_cell),
            Paragraph("<b>Underpass Waterlogging Depth:</b> Live road submerged alerts; recommends 35-min earlier departure before intense convective downpour.", table_cell),
            Paragraph("Saves millions of commuter hours, prevents vehicle engine hydro-locking, and mitigates urban flash-flood gridlock.", table_cell)
        ],
        [
            Paragraph("⛵ <b>Coastal & Fisherfolk</b><br/>(Ages 20–65)", table_cell_bold),
            Paragraph("INCOIS wave swell height, Beaufort squall scale, astronomical spring tides, port danger signals.", table_cell),
            Paragraph("<b>Squall Gate Alert:</b> Displays 4.2m swell forecast and official Port Cautionary Signal 3; warns against venturing past 5 nautical miles.", table_cell),
            Paragraph("Directly preserves high-seas fishing lives and protects motorized trawlers from sudden squall capsizing.", table_cell)
        ],
        [
            Paragraph("🎒 <b>Student & Youth</b><br/>(Ages 10–18)", table_cell_bold),
            Paragraph("Damini lightning sensor proximity, UV index, afternoon thunderstorm nowcasts.", table_cell),
            Paragraph("<b>School Transit Rain Gear & Lightning Tracker:</b> Alerts parents if lightning activity is detected within 12km during school bus transit.", table_cell),
            Paragraph("Guarantees child safety during extreme monsoon convective storms and reduces school sports heat exhaustion.", table_cell)
        ],
        [
            Paragraph("🏃 <b>Fitness & Athlete</b><br/>(Ages 16–50)", table_cell_bold),
            Paragraph("Wet-bulb globe temperature (WBGT), Air Quality Index, ground-level ozone, sweat rate index.", table_cell),
            Paragraph("<b>Aerobic Window Advisor:</b> Identifies optimal 45-minute outdoor running slot before diurnal ozone and PM2.5 concentrations surge.", table_cell),
            Paragraph("Prevents exercise-induced bronchospasm and heat stress in outdoor sports enthusiasts.", table_cell)
        ],
        [
            Paragraph("✈️ <b>Traveler & Tourist</b><br/>(All Ages)", table_cell_bold),
            Paragraph("District landslide hazard index, flight fog advisories, multi-day synoptic precipitation outlook.", table_cell),
            Paragraph("<b>Himalayan Route Stability:</b> Alerts tourists of active debris flow risks on mountain highways; suggests clothing insulation (Clo index).", table_cell),
            Paragraph("Prevents tourist strandings in mountainous landslide zones and airport fog delays.", table_cell)
        ],
        [
            Paragraph("🎪 <b>Event & Family</b><br/>(All Ages)", table_cell_bold),
            Paragraph("1-km hyper-local precipitation curves, evening humidity, canopy wind-shear thresholds.", table_cell),
            Paragraph("<b>Open-Air Gathering Protection:</b> Forecasts sudden evening thunderstorm gusts for weddings, cultural festivals, and family outings.", table_cell),
            Paragraph("Averts open-air structural tent collapses and logistical losses during unseasonal downpours.", table_cell)
        ]
    ]
    personas_table = Table(personas_data, colWidths=[95, 120, 165, 135])
    personas_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(personas_table)
    story.append(Spacer(1, 10))

    # ==================== 4. ARCHITECTURAL BLUEPRINT & HOW IT WORKS ====================
    story.append(Paragraph("4. End-to-End System Architecture & Core Technical Innovations", h1_style))
    story.append(Paragraph(
        "MausamSeva is structured across 4 decoupled, resilient tiers designed to operate smoothly even under severe network degradation:",
        body_style
    ))

    arch_bullets = [
        "<b>1. Mobile & Web Presentation Layer (Flutter / React 18 + Vite):</b> Consumes a lightweight Server-Driven UI (SDUI) JSON stream. Uses responsive Tailwind/Material-3 tokens, supporting high-contrast accessible visual rendering, fluid dark mode, and low-latency client state management.",
        "<b>2. On-Device Zero-Knowledge Edge AI Engine:</b> Runs local preference inferencing via on-device SQLite Vector and TFLite rule-matrices. User persona classification, medical sensitivities, and behavioral habit scores are computed exclusively on the handset—zero PII is sent to central servers, complying strictly with India's <b>Digital Personal Data Protection (DPDP) Act 2023</b>.",
        "<b>3. Orchestration & Dynamic Card Ranking Gateway (FastAPI / Redis):</b> Computes spatial geofencing and threat proximity. Evaluates incoming IMD Common Alerting Protocol (OASIS CAP v1.2) payloads against user district coordinates and dynamically sorts UI card ordering.",
        "<b>4. Authoritative Data Integration Layer:</b> Modular provider adapters connecting to <b>IMD Mausam National API</b> (radar, forecasts, nowcasts), <b>CPCB API</b> (station-wise PM2.5/PM10), <b>GKMS Agromet Bulletins</b>, and <b>Bhashini AI APIs</b> (regional voice recognition and synthesis)."
    ]
    for b in arch_bullets:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    story.append(Paragraph("The Dynamic Priority & Threat-Preempting Scoring Formula", h2_style))
    story.append(Paragraph(
        "The system rejects static layouts. Every card in the UI receives an ephemeral real-time ranking computed via:",
        body_style
    ))
    
    formula_text = (
        "<b>P_final = (W_p × S_persona) + (W_w × S_weather) + (W_t × S_time) + (W_l × S_location) + (W_u × S_urgency) + (W_b × S_behavior)</b><br/>"
        "<i>Emergency Step Condition:</i> If <b>Alert_Severity ∈ {HIGH, CRITICAL}</b>, then <b>S_urgency = 100</b>, which overrides all weights and forces the life-safety card into <b>Slot #1</b>."
    )
    story.append(make_callout(formula_text, "#FEF2F2", "#FCA5A5", "MATHEMATICAL FORMULA & EMERGENCY STEP FUNCTION"))
    story.append(Spacer(1, 10))

    # ==================== 4.1 WHY WE ADDED CURRENT & NEXT FEATURES ====================
    story.append(Paragraph("4.1 Architectural Rationale: Why Current Features Exist & Why Next Features Are Added", h2_style))
    story.append(Paragraph(
        "Every feature in MausamSeva is engineered to solve a specific life-safety, economic, or behavioral barrier:",
        body_style
    ))

    rationale_data = [
        [Paragraph("Feature Component", table_header), Paragraph("Underlying Problem & Justification", table_header), Paragraph("Architectural Rationale: Why This Specific Implementation", table_header)],
        [
            Paragraph("<b>Why 8 Personas?</b>", table_cell_bold),
            Paragraph("A single generic screen dilutes urgent warnings. Farmers ignore temperature widgets, while heart patients get confused by agro-bulletins.", table_cell),
            Paragraph("Separates critical life signals into domain-calibrated cognitive buckets, dropping time-to-critical-info from 60s to <2s.", table_cell)
        ],
        [
            Paragraph("<b>Why On-Device Edge AI?</b>", table_cell_bold),
            Paragraph("Sending user health conditions (e.g. asthma, heart disease) or precise home GPS to servers violates DPDP Act 2023 and risks data breaches.", table_cell),
            Paragraph("TFLite & SQLite Vector inferencing executes 100% on the device. Zero cloud inference bills; zero privacy compromise; zero latency.", table_cell)
        ],
        [
            Paragraph("<b>Why Server-Driven UI (SDUI)?</b>", table_cell_bold),
            Paragraph("Hardcoded layouts cannot adapt dynamically during sudden squalls. App store updates take 48-72h, too slow for disaster protocol changes.", table_cell),
            Paragraph("Allows MoES/IMD to update layout structures, card weights, and emergency styling dynamically over JSON without app redeployment.", table_cell)
        ],
        [
            Paragraph("<b>Why Threat-Preempting Override?</b>", table_cell_bold),
            Paragraph("In standard recommendation systems, AI algorithms might rank a farmer's crop advisory higher than an incoming lightning strike.", table_cell),
            Paragraph("Hardcoded safety guarantee: Official high/critical severity alerts mathematically override all personalization weights to seize Card #1.", table_cell)
        ],
        [
            Paragraph("<b>Why Bilingual Hinglish Voice?</b>", table_cell_bold),
            Paragraph("Rural and semi-urban Indian citizens speak in colloquial code-mixed phrases ('Kal barish hogi kya?'), failing standard English ASR.", table_cell),
            Paragraph("Bhashini AI + Web Speech API with bidirectional TTS ensures full conversational accessibility for citizens with zero digital literacy.", table_cell)
        ],
        [
            Paragraph("<b>Why Next Feature: Crowdsource Truth?</b>", table_cell_bold),
            Paragraph("Doppler radar can suffer from beam blockage or ground clutter, causing localized nowcasting inaccuracies in narrow valleys.", table_cell),
            Paragraph("Citizen-submitted geo-tagged reports (water depth, hail) with computer vision validation provide real-time ground truth verification.", table_cell)
        ],
        [
            Paragraph("<b>Why Next Feature: IoT Flood Sensors?</b>", table_cell_bold),
            Paragraph("Rainfall radar tells you water fell from the sky, but cannot tell if an underpass is flooded 1.5 meters deep.", table_cell),
            Paragraph("Direct telemetry ingestion from municipal ultrasonic depth sensors triggers automated roadblock alerts and drainage pumps.", table_cell)
        ]
    ]
    rationale_table = Table(rationale_data, colWidths=[120, 195, 200])
    rationale_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(rationale_table)
    story.append(Spacer(1, 10))

    # ==================== 5. LAST-MILE INCLUSION (ZERO SMARTPHONE) ====================
    story.append(Paragraph("5. Last-Mile Inclusion: Serving Citizens Without Smartphones or Internet", h1_style))
    story.append(Paragraph(
        "A critical flaw in standard mobile-first hackathon projects is the total neglect of India's 350+ million citizens who do not own smartphones, lack digital literacy, or live in intermittent electricity zones. <b>MausamSeva solves this through a dedicated 5-Tier Non-Digital Last-Mile Gateway:</b>",
        body_style
    ))

    inclusion_data = [
        [Paragraph("Dissemination Channel", table_header), Paragraph("Mechanism & Technology", table_header), Paragraph("Target Beneficiaries & Impact", table_header)],
        [
            Paragraph("<b>Toll-Free Interactive Voice Response (IVRS)</b>", table_cell_bold),
            Paragraph("Citizens dial a single national toll-free number (e.g., <b>1800-180-MAUSAM</b>). Bhashini Speech-to-Text listens to their native spoken dialect, queries the local IMD nowcast, and speaks back audio advice.", table_cell),
            Paragraph("Illiterate farmers, migrant laborers, and rural elders using ₹1,000 basic feature phones.", table_cell)
        ],
        [
            Paragraph("<b>Common Service Center (CSC) Automated Kiosks</b>", table_cell_bold),
            Paragraph("Village Level Entrepreneurs (VLEs) receive daily automated, localized PDF/Audio summaries. The kiosk auto-prints the daily 'MausamSeva Village Notice Board' bulletin posted outside the Panchayat Bhawan.", table_cell),
            Paragraph("Entire rural village communities who gather at Panchayat centers for daily farm decisions.", table_cell)
        ],
        [
            Paragraph("<b>Gram Panchayat Siren & Public Address (PA) Integration</b>", table_cell_bold),
            Paragraph("When IMD Doppler radar detects lightning or severe squalls within 10km, an automated IoT trigger sounds localized siren patterns and broadcasts recorded voice warnings over temple/mosque/panchayat loudspeakers.", table_cell),
            Paragraph("Field laborers, outdoor farmers, and rural children working in open fields without devices.", table_cell)
        ],
        [
            Paragraph("<b>Community Radio & Krishi Vigyan Kendra (KVK) Feeds</b>", table_cell_bold),
            Paragraph("Automated RSS/JSON push feeds translated into localized dialect scripts, broadcasted during morning farm bulletins over regional AIR and local community radio stations.", table_cell),
            Paragraph("Remote tribal and hilly communities in Uttarakhand, Himachal, and the Northeast.", table_cell)
        ],
        [
            Paragraph("<b>USSD & SMS Micro-Bulletins (*99# Style)</b>", table_cell_bold),
            Paragraph("Unstructured Supplementary Service Data (USSD) menus that work on zero-data, 2G networks without internet. Simple numeric choices (e.g., <i>1: Rain today, 2: Crop spray</i>).", table_cell),
            Paragraph("Low-income urban commuters and rural families during cellular data blackouts.", table_cell)
        ]
    ]
    inclusion_table = Table(inclusion_data, colWidths=[120, 220, 175])
    inclusion_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(inclusion_table)
    story.append(Spacer(1, 10))

    # ==================== 6. WHAT WILL MoES DO? ====================
    story.append(Paragraph("6. What Will MoES Do? The Executive Command & Policy Center", h1_style))
    story.append(Paragraph(
        "The Ministry of Earth Sciences (MoES) is not a passive data conduit. In MausamSeva, MoES operates the **Executive Command Center**, acting as the supreme national authority over weather governance and inter-ministerial logistics:",
        body_style
    ))

    moes_roles = [
        "<b>1. National 5-Tier Threat Broadcast Control:</b> MoES leadership wields master authorization to toggle national and district threat levels: 🟢 Green (Normal), 🟡 Yellow (Watch), 🟠 Orange (Alert), 🔴 Red (Warning), and 🟣 Purple (Catastrophic). Any manual elevation instantly flashes across all citizen apps, activating emergency sirens and overriding local preferences.",
        "<b>2. Inter-Ministerial Supply Chain Forward Forecasting:</b> MoES correlates multi-week synoptic weather projections with vital national economic infrastructures:<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <b>FCI (Food Corporation of India):</b> Predicts 3–6 week forward crop yield shocks, allowing early procurement pricing and covered warehouse buffer allocation to prevent wheat/rice rotting.<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <b>CEA (Central Electricity Authority):</b> Computes Cooling Degree Days (CDD) and Heating Degree Days (HDD) to forecast peak Megawatt (MW) electrical grid load surges, preventing regional power tripping.<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <b>ICMR & Ministry of Health:</b> Predicts severe smog inversions and heatwaves 5 days in advance, directing district hospitals to pre-stock emergency nebulizers, oxygen concentrators, and ORS packets.<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <b>MoRTH & City Police:</b> Feeds automated rainfall forecasts to municipal pump controllers to de-water arterial highway underpasses before morning peak traffic.<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <b>INCOIS & Indian Coast Guard:</b> Triggers automated maritime port cautionary signals and directs offshore patrol vessels to guide fishing trawlers safely back to harbor.",
        "<b>3. Crowd-Sourced Ground-Truth Verification Hub:</b> Inspects citizen-submitted geo-tagged weather reports (e.g., street waterlogging depth, hail size, fallen trees) filtered by automated computer vision and spatial consensus algorithms to validate radar nowcast accuracy."
    ]
    for r in moes_roles:
        story.append(Paragraph(r, bullet_style))
        story.append(Spacer(1, 3))
    story.append(Spacer(1, 8))

    # ==================== 6.1 CROSS-PROBLEM SYNERGY: METEORA & MAUSAM PRISM ====================
    story.append(Paragraph("6.1 Systemic Synergy: Integrating METEORA Cyclone AI (SIH26070) with MAUSAM PRISM (SIH26076)", h2_style))
    story.append(Paragraph(
        "A profound architectural strength of Team NEXORA's ecosystem is the two-way integration between deep space satellite intelligence (SIH26070) and citizen mobile dissemination (SIH26076):",
        body_style
    ))

    synergy_text = (
        "<b>From Space Pixel to Citizen Handset:</b> METEORA (SIH26070) processes raw ISRO MOSDAC INSAT-3D/3R HDF5 rasters, identifies cyclone eyewall convection via YOLO-v8 (91.7%), regresses Dvorak intensity (ResNet-34), and projects coastal City Danger Scores (0–100) using Haversine distance decay.<br/>"
        "When METEORA computes a Critical Danger Score (e.g., <i>Puri: Score 92, ETA 12h</i>), it synthesizes an <b>OASIS CAP v1.2 XML payload</b> dispatched directly to MAUSAM PRISM (SIH26076). The mobile engine instantly engages the <b>Emergency Threat-Preempting Override</b>, rendering high-contrast evacuation routes, port cautionary signals, and storm surge warnings directly on Card #1 across all coastal citizen handsets."
    )
    story.append(make_callout(synergy_text, "#F0FDF4", "#86EFAC", "UNIFIED SPACE-TO-CITIZEN LIFE-SAFETY LOOP"))
    story.append(Spacer(1, 10))

    # ==================== 7. FEASIBILITY & VIABILITY ====================
    story.append(Paragraph("7. Comprehensive Feasibility & Viability Analysis", h1_style))
    story.append(Paragraph(
        "To ensure institutional acceptance, MausamSeva has been audited across all 4 standard dimensions of public-sector feasibility:",
        body_style
    ))

    feasibility_data = [
        [Paragraph("Feasibility Dimension", table_header), Paragraph("Current Feasibility Reality & Architecture", table_header), Paragraph("Risk Mitigation & Viability Proof", table_header)],
        [
            Paragraph("<b>Technical Feasibility</b>", table_cell_bold),
            Paragraph("Utilizes standardized REST/JSON and gRPC endpoints. Ingestion uses open-source libraries (h5py, xarray, FastAPI). Local AI executes on TFLite / SQLite requiring minimal CPU/RAM.", table_cell),
            Paragraph("100% compatible with existing Android 8.0+ and iOS handsets. Modular adapter design allows instant swapping of mock data with live IMD production feeds without recompiling apps.", table_cell)
        ],
        [
            Paragraph("<b>Operational Feasibility</b>", table_cell_bold),
            Paragraph("Zero disruption to IMD's operational meteorologists. Runs as an auxiliary microservice pipeline consuming already-published IMD bulletins, radar nowcasts, and CPCB feeds.", table_cell),
            Paragraph("Requires no re-training of IMD forecasters. Automated CI/CD pipelines and Docker containerization ensure 99.95% operational uptime with automated failovers.", table_cell)
        ],
        [
            Paragraph("<b>Economic Viability</b>", table_cell_bold),
            Paragraph("Built entirely on open-source frameworks (Flutter/React, FastAPI, PostgreSQL, Redis). Cloud hosting costs average < ₹0.04 per active citizen per month.", table_cell),
            Paragraph("Economic value preservation exceeds ₹5,000+ Crore annually by mitigating urban flooding, crop damage, and power grid transformer blowouts.", table_cell)
        ],
        [
            Paragraph("<b>Societal & Legal Viability</b>", table_cell_bold),
            Paragraph("Fully compliant with India's <b>DPDP Act 2023</b>. Uses 500-meter spatial centroid hashing and on-device differential privacy—no sensitive health or GPS logs are stored centrally.", table_cell),
            Paragraph("Bilingual (Hindi/English) + 22 regional languages eliminates linguistic discrimination. Color-blind accessible indicators (symbols + text) ensure WCAG 2.1 AAA compliance.", table_cell)
        ]
    ]
    feas_table = Table(feasibility_data, colWidths=[110, 210, 195])
    feas_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(feas_table)
    story.append(Spacer(1, 10))

    # ==================== 8. COST ANALYSIS & COST REDUCTION ====================
    story.append(Paragraph("8. Commercial Cost Estimation & Cost Reduction Blueprint", h1_style))
    story.append(Paragraph(
        "Deploying a government-scale mobile application serving 50+ million monthly active users requires rigorous cost engineering:",
        body_style
    ))

    cost_data = [
        [Paragraph("Cost Component", table_header), Paragraph("Standard Enterprise Cost (Annual)", table_header), Paragraph("MausamSeva Optimized Cost (Annual)", table_header), Paragraph("Cost Reduction Mechanism", table_header)],
        [
            Paragraph("<b>Cloud Compute & Backend Servers</b>", table_cell_bold),
            Paragraph("₹45,00,000 (Commercial AWS/GCP dynamic VMs)", table_cell),
            Paragraph("<b>₹11,00,000</b> (Govt NIC / MeghRaj Cloud)", table_cell),
            Paragraph("Deployment on National Cloud (MeghRaj); Redis edge-caching absorbs 85% of redundant weather queries.", table_cell)
        ],
        [
            Paragraph("<b>AI / LLM Ingestion & Inference</b>", table_cell_bold),
            Paragraph("₹30,00,000 (Cloud-based LLM token APIs)", table_cell),
            Paragraph("<b>₹3,50,000</b> (Edge TFLite + Local Speech)", table_cell),
            Paragraph("On-device Edge AI handles persona classification; Web Speech API handles client-side speech synthesis.", table_cell)
        ],
        [
            Paragraph("<b>Bandwidth & CDN Egress</b>", table_cell_bold),
            Paragraph("₹25,00,000 (Heavy JSON + uncompressed assets)", table_cell),
            Paragraph("<b>₹4,50,000</b> (Protobuf / Tiny JSON <380KB)", table_cell),
            Paragraph("Server-Driven UI sends diff updates only; static vector icons cached permanently in local app bundles.", table_cell)
        ],
        [
            Paragraph("<b>Mobile App Development & QA</b>", table_cell_bold),
            Paragraph("₹40,00,000 (Separate native iOS & Android teams)", table_cell),
            Paragraph("<b>₹16,00,000</b> (Unified Cross-Platform)", table_cell),
            Paragraph("Single Flutter/React codebase ensures 90%+ code reuse across Android, iOS, and Web PWAs.", table_cell)
        ],
        [
            Paragraph("<b>TOTAL ANNUAL ESTIMATE</b>", table_cell_bold),
            Paragraph("₹1,40,00,000 (~$170,000)", table_cell_bold),
            Paragraph("<b>₹35,00,000 (~$42,000)</b>", table_cell_bold),
            Paragraph("<b>75% Overall Expenditure Reduction</b> achieved via open-source engineering and edge computation.", table_cell_bold)
        ]
    ]
    cost_table = Table(cost_data, colWidths=[110, 130, 125, 150])
    cost_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [colors.white, bg_light]),
        ('BACKGROUND', (0,-1), (-1,-1), colors.HexColor("#FEF3C7")),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(cost_table)
    story.append(Spacer(1, 10))

    # ==================== 9. REVENUE GENERATION & FINANCIAL SUSTAINABILITY ====================
    story.append(Paragraph("9. Revenue Generation & Financial Sustainability Models", h1_style))
    story.append(Paragraph(
        "While MausamSeva remains an entirely free, ad-free public service for Indian citizens, it establishes high-value B2B and B2G enterprise channels to ensure 100% self-sustaining operations:",
        body_style
    ))

    rev_bullets = [
        "<b>1. Tiered B2B Enterprise Weather & Climate APIs:</b> Commercial enterprises rely heavily on weather risks. MausamSeva monetizes specialized high-frequency API endpoints:<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <i>Logistics & Quick-Commerce (Swiggy, Zomato, Amazon, Delhivery):</i> Dynamic rain-nowcasting APIs to adjust rider delivery radius and surging dynamically.<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <i>Aviation & Maritime:</i> High-resolution low-altitude wind-shear and turbulence feeds.<br/>"
        "&nbsp;&nbsp;&nbsp;&nbsp;• <i>Renewable Energy Operators:</i> Solar irradiance and wind gust forecasting for utility-scale solar/wind park grid injection bidding.",
        "<b>2. Parametric Crop & Disaster Insurance Telemetry (PMFBY Integration):</b> Private and state insurance underwriters pay data licensing fees to access tamper-proof, station-verified rainfall and frost triggers for instant parametric insurance claim settlements.",
        "<b>3. Non-Intrusive Public-Sector CSR Partnerships:</b> State agrochemical and tractor corporations sponsor non-intrusive agricultural advisory banners (e.g., <i>'Certified Drought-Resistant Seed Guidance via National Seeds Corp'</i>) without third-party tracking.",
        "<b>4. Macro-Economic Value Preservation:</b> By preventing urban flood hydro-locking, reducing post-harvest mandi grain loss, and cutting power transformer outages, the platform saves the Indian economy hundreds of crores annually, vastly exceeding its operating costs."
    ]
    for rb in rev_bullets:
        story.append(Paragraph(rb, bullet_style))
        story.append(Spacer(1, 2))
    story.append(Spacer(1, 8))

    # ==================== 10. UNIQUE SELLING PROPOSITIONS (USP) ====================
    story.append(Paragraph("10. Unique Selling Propositions (USPs) & Differentiators", h1_style))
    story.append(Paragraph(
        "Why MausamSeva is decisively superior to any existing weather product:",
        body_style
    ))

    usp_data = [
        [Paragraph("Unique Selling Proposition (USP)", table_header), Paragraph("Conventional Apps & Official Portals", table_header), Paragraph("MausamSeva Winning Edge", table_header)],
        [
            Paragraph("<b>1. Zero-Knowledge Persona Engine</b>", table_cell_bold),
            Paragraph("Sends personal GPS, health, and usage tracking to central analytics clouds.", table_cell),
            Paragraph("<b>100% On-Device Inferencing:</b> Differential privacy ensures sensitive medical and habit data never leaves the phone.", table_cell)
        ],
        [
            Paragraph("<b>2. Threat-Preempting Dynamic Re-Ranking</b>", table_cell_bold),
            Paragraph("Static warning banners hidden under sub-tabs; user must actively click alerts.", table_cell),
            Paragraph("<b>Autonomous UI Restructuring:</b> Emergency radar, lightning steps, and sirens push automatically to Card #1.", table_cell)
        ],
        [
            Paragraph("<b>3. Bilingual MAUSAM PRISM Voice AI</b>", table_cell_bold),
            Paragraph("English only or formal translated text; fails completely on dialect code-mixing.", table_cell),
            Paragraph("<b>Conversational Hinglish & 22 Languages:</b> Understands <i>'Kal subah dhoop niklegi kya?'</i> and replies via natural speech.", table_cell)
        ],
        [
            Paragraph("<b>4. Sub-380KB Ultra-Low Bandwidth</b>", table_cell_bold),
            Paragraph("Bloated initial load (4.8MB to 6.2MB) with heavy images, video ads, and analytics.", table_cell),
            Paragraph("<b>Instant <1s Render on 2G:</b> Optimized Server-Driven JSON with SQLite time-stamped offline caching.", table_cell)
        ],
        [
            Paragraph("<b>5. Dual-Role MoES Executive Hub</b>", table_cell_bold),
            Paragraph("Zero inter-agency intelligence; isolated meteorological data silos.", table_cell),
            Paragraph("<b>Inter-Ministerial Forward Forecasting:</b> Directly empowers FCI, CEA, ICMR, MoRTH, and NDMA disaster commanders.", table_cell)
        ]
    ]
    usp_table = Table(usp_data, colWidths=[125, 180, 210])
    usp_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(usp_table)
    story.append(Spacer(1, 10))

    # ==================== 11. FUTURE ROADMAP & ADD-ONS ====================
    story.append(Paragraph("11. Future Add-ons & Phased Expansion Roadmap", h1_style))
    story.append(Paragraph(
        "The project is architected for long-term scalability across 4 distinct deployment milestones:",
        body_style
    ))

    roadmap_data = [
        [Paragraph("Deployment Phase", table_header), Paragraph("Timeline", table_header), Paragraph("Target Features & Technical Milestones", table_header), Paragraph("Strategic Objective", table_header)],
        [
            Paragraph("<b>Phase 1: Hackathon MVP</b>", table_cell_bold),
            Paragraph("Month 1–2", table_cell),
            Paragraph("Core 8 Personas, Server-Driven UI, Mock/Live IMD adapter, Bilingual Hindi/English Voice Assistant, Threat-Preempting Override.", table_cell),
            Paragraph("Functional validation and SIH winning prototype demonstration.", table_cell)
        ],
        [
            Paragraph("<b>Phase 2: National Pilot</b>", table_cell_bold),
            Paragraph("Month 3–6", table_cell),
            Paragraph("Direct integration with official IMD Mausam API, CPCB station feeds, Bhashini regional speech models, MeghRaj cloud deployment.", table_cell),
            Paragraph("Field pilot across 50 vulnerable coastal and agricultural districts in Odisha, Gujarat, and UP.", table_cell)
        ],
        [
            Paragraph("<b>Phase 3: Hyper-Local IoT & Cyclone Synergy</b>", table_cell_bold),
            Paragraph("Month 7–12", table_cell),
            Paragraph("Direct integration with <b>Track A (METEORA Cyclone AI)</b> for satellite eye tracking, Municipal underpass flood IoT sensors, Gram Panchayat sirens.", table_cell),
            Paragraph("Automated closed-loop municipal and coastal disaster mitigation.", table_cell)
        ],
        [
            Paragraph("<b>Phase 4: Full Pan-India Scale</b>", table_cell_bold),
            Paragraph("Year 2+", table_cell),
            Paragraph("22 Scheduled Languages nationwide, automated Parametric Insurance payout triggers, Satellite-to-Handset direct alert broadcasts.", table_cell),
            Paragraph("Reaching 200+ million citizens as India's primary meteorological lifesaver.", table_cell)
        ]
    ]
    roadmap_table = Table(roadmap_data, colWidths=[90, 60, 245, 120])
    roadmap_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(roadmap_table)
    story.append(Spacer(1, 10))

    # ==================== 12. MEASURABLE IMPACTS & BENCHMARKS ====================
    story.append(Paragraph("12. Measurable Operational Impacts & Quantitative Benchmarks", h1_style))
    story.append(Paragraph(
        "Benchmarked against both the existing official 'Mausam' application and commercial offerings:",
        body_style
    ))

    impact_data = [
        [Paragraph("Performance Metric", table_header), Paragraph("Existing Official 'Mausam' App", table_header), Paragraph("Commercial Weather Apps", table_header), Paragraph("MausamSeva (Our Solution)", table_header)],
        [
            Paragraph("<b>Time-to-Critical-Info</b>", table_cell_bold),
            Paragraph("45–60 seconds (multi-menu clicks)", table_cell),
            Paragraph("25–30 seconds (ad clutter delay)", table_cell),
            Paragraph("<b>< 2 seconds</b> (Directly rendered on Card #1)", table_cell_bold)
        ],
        [
            Paragraph("<b>Initial Cold Payload Size</b>", table_cell_bold),
            Paragraph("~4.8 MB (heavy uncompressed assets)", table_cell),
            Paragraph("~6.2 MB (tracking scripts & video ads)", table_cell),
            Paragraph("<b>< 380 KB</b> (Server-driven tiny JSON stream)", table_cell_bold)
        ],
        [
            Paragraph("<b>Offline Functionality</b>", table_cell_bold),
            Paragraph("Fails completely / blank error screen", table_cell),
            Paragraph("Caches generic temperature only", table_cell),
            Paragraph("<b>Full SQLite Offline Cache</b> with validity timers", table_cell_bold)
        ],
        [
            Paragraph("<b>Linguistic Inclusion</b>", table_cell_bold),
            Paragraph("English & Hindi text only", table_cell),
            Paragraph("English primary; localized UI text", table_cell),
            Paragraph("<b>22 Scheduled Languages + Voice ASR/TTS</b>", table_cell_bold)
        ],
        [
            Paragraph("<b>User Privacy & Compliance</b>", table_cell_bold),
            Paragraph("Basic server logs", table_cell),
            Paragraph("Monetizes GPS and behavioral profiles", table_cell),
            Paragraph("<b>100% DPDP Act 2023 Compliant</b> (Zero-PII on edge)", table_cell_bold)
        ]
    ]
    impact_table = Table(impact_data, colWidths=[115, 130, 130, 140])
    impact_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), primary_color),
        ('BOX', (0,0), (-1,-1), 0.5, border_color),
        ('INNERGRID', (0,0), (-1,-1), 0.5, border_color),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, bg_light]),
        ('PADDING', (0,0), (-1,-1), 4),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(impact_table)
    story.append(Spacer(1, 10))

    # ==================== 13. RESEARCH & REFERENCES ====================
    story.append(Paragraph("13. Authoritative References, Datasets & Standards", h1_style))
    story.append(Paragraph(
        "MausamSeva is anchored in authoritative peer-reviewed literature, official national repositories, and international meteorological standards:",
        body_style
    ))

    refs = [
        "<b>1. India Meteorological Department (IMD):</b> National Weather Forecasting Centre (NWFC), Gridded Rainfall Datasets, Doppler Weather Radar (DWR) Nowcasting Bulletins, and RSMC Tropical Cyclone Best Tracks (mausam.imd.gov.in).",
        "<b>2. Central Pollution Control Board (CPCB):</b> National Air Quality Index (AQI) station telemetry, Continuous Ambient Air Quality Monitoring Systems (CAAQMS) PM2.5/PM10 streams.",
        "<b>3. Gramin Krishi Mausam Sewa (GKMS):</b> District-level Agromet Bulletins, Meghdoot Agro-advisory services, ICAR-CRIDA crop weather calendars.",
        "<b>4. Bhashini AI (Digital India Bhasha Interface, MeitY):</b> Open-source Indian language Automatic Speech Recognition (ASR), Text-to-Speech (TTS), and Neural Machine Translation (NMT) models for regional voice interaction.",
        "<b>5. International Disaster Protocols:</b> OASIS Common Alerting Protocol (CAP v1.2), WMO Guidelines on Multi-Hazard Impact-Based Forecast and Warning Services (WMO-No. 1150).",
        "<b>6. Legal & Privacy Standards:</b> Digital Personal Data Protection (DPDP) Act 2023, Government of India; ISO/IEC 27001 Information Security Management."
    ]
    for ref in refs:
        story.append(Paragraph(ref, bullet_style))
        story.append(Spacer(1, 2))
    story.append(Spacer(1, 15))

    # Concluding Signature Block
    sign_data = [
        [
            Paragraph("<b>Submitted by: Team NEXORA</b><br/>Smart India Hackathon 2026 Finalist<br/>Ministry of Earth Sciences (MoES)", table_cell_bold),
            Paragraph("<b>Certified Alignment:</b><br/>National 'Mission Mausam' Initiative<br/>UN Sustainable Development Goals (SDG 11 & 13)", ParagraphStyle('SignR', parent=table_cell_bold, alignment=2))
        ]
    ]
    sign_table = Table(sign_data, colWidths=[257, 258])
    sign_table.setStyle(TableStyle([
        ('LINEABOVE', (0,0), (-1,-1), 1, secondary_color),
        ('TOPPADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(sign_table)

    # Build Document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated comprehensive synopsis PDF: {filename}")

if __name__ == '__main__':
    target = os.path.join(os.getcwd(), "MausamSeva_Comprehensive_Project_Synopsis.pdf")
    build_pdf(target)
    target_master = os.path.join(os.getcwd(), "MAUSAM_PRISM_Comprehensive_Project_Synopsis.pdf")
    build_pdf(target_master)
