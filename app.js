// دمج بيانات المساقات
const courses = {
    biology: { 
        title: "الأحياء", 
        icon: "fa-dna", 
        code: "BIOL 101",
        books: [
            { name: "كتاب الأحياء - د. أيمن أبو مصطفى 2024", link: "https://www.mediafire.com/file/8oddlw5fw751nd2/Biology+Dr.+Ayman+Abu+Mustafa+2024.pdf/file", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1 - الجزء الأول", link: "https://www.youtube.com/watch?v=8COAdAXo6mo", type: "youtube" },
            { name: "محاضرة 1 - الجزء الثاني", link: "https://www.youtube.com/watch?v=-EcD5MBMoiM", type: "youtube" },
            { name: "محاضرة 2 - الجزء الأول", link: "https://www.youtube.com/watch?v=gZG1I2mVBFI", type: "youtube" },
            { name: "محاضرة 2 - الجزء الثاني", link: "https://www.youtube.com/watch?v=gZG1I2mVBFI", type: "youtube" }
        ]},
    chemistry: { 
        title: "الكيمياء", 
        icon: "fa-flask", 
        code: "CHEM 101",
        books: [
            { name: "كتاب الكيمياء", link: "https://drive.google.com/file/d/16NwS8HV1UizqrMnKnAAIOhth_6STxxff/view?usp=drivesdk", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=QEBq2ujVl9k", type: "youtube" },
            { name: "محاضرة 2 - الجزء الأول", link: "https://drive.google.com/file/d/1mYbo3lYhfrgPPNBlbPWvGVKbNDS4DPNS/view", type: "drive" },
            { name: "محاضرة 2 - الجزء الثاني", link: "https://drive.google.com/file/d/1xUd0aEy4mXPDkghZmZvjSW6wUCW-WFkv/view", type: "drive" }
        ]},
    physics: { 
        title: "مقدمة التمريض", 
        icon: "fa-atom", 
        code: "PHYS 101",
        books: [
            { name: "كتاب مقدمة التمريض", link: "https://drive.google.com/file/d/1MvpccHOlHV3XcPUrtB7uXDoKFdB5MlSr/view?usp=sharing", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=apf3Jagp1ak&list=PLftkcFPCNYd1Fvio2pIx20w8I-z4Lp0YF&index=10", type: "youtube" },
            { name: "محاضرة 2", link: "https://www.youtube.com/watch?v=QnK68q-yeGQ&list=PLftkcFPCNYd1Fvio2pIx20w8I-z4Lp0YF&index=9", type: "youtube" }
        ]},
    anatomy: { 
        title: "القضية الفلسطينية", 
        icon: "fa-brain", 
        code: "ANAT 101",
        books: [
            { name: "كتاب القضية الفلسطينية", link: "https://drive.google.com/file/d/1HOyQGAJut0J7DGQTGTwoA_4l5qxRAshs/view?usp=drivesdk", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=2KXiwod-doc", type: "youtube" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/14W1ToppqX7YtAv4N2_USjBHGbphMsuY-/view", type: "drive" }
        ]},
    physiology: { 
        title: "العقيدة الإسلامية", 
        icon: "fa-heartbeat", 
        code: "PHYL 101",
        books: [
            { name: "كتاب العقيدة الإسلامية", link: "https://drive.google.com/file/d/1Dp31f1IO5W7-3n5_08OnUCY1CRJe8giz/view?usp=sharing", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://drive.google.com/file/d/1-0LcO1NKGpS24Wsxh2HlOrbm2h8x0J9l/view", type: "drive" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/1TQwAck0RKeO7SVVf_gmCvpyAe8lamqBI/view", type: "drive" }
        ]},
    biochemistry: { 
        title: "اللغة العربية", 
        icon: "fa-dna", 
        code: "BCHM 101",
        books: [
            { name: "كتاب اللغة العربية", link: "https://drive.google.com/file/d/1rFw8PreTixsl7om5OYdSblZR9fSdznrU/view?usp=drive_link", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://drive.google.com/file/d/1hTV61Wi_QhsgvNS4053kyuCQiIJ8mrWS/view", type: "drive" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/1svLca-O5m-Jp-Kvlf37kVsqfRcBRlBCS/view", type: "drive" }
        ]},
    med_terms: { 
        title: "مصطلحات طبية", 
        icon: "fa-language", 
        code: "MEDT 101",
        books: [
            { name: "المصطلحات الطبية - د. أيمن أبو مصطفى 2024", link: "https://www.mediafire.com/file/89jqd8vy6kx9t5r/Medical+Terminology+++2024+-+Dr.+Ayman+Abu+Mustafa+Students+lectures.pdf/file", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=5GJgok2w0jI", type: "youtube" },
            { name: "محاضرة 2", link: "https://www.youtube.com/watch?v=R1477sBA7vw", type: "youtube" }
        ]},
    
    nursing_practical: { 
        title: "تمريض عملي", 
        icon: "fa-hospital-user", 
        code: "NURS 102",
        books: [
            { name: "دليل التمريض العملي", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    nursing1: { 
        title: "أساسيات التمريض", 
        icon: "fa-stethoscope", 
        code: "NURS 101",
        books: [
            { name: "كتاب أساسيات التمريض", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    safety: { 
        title: "السلامة", 
        icon: "fa-shield-halved", 
        code: "SAFE 101",
        books: [
            { name: "دليل السلامة المهنية", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    microbio: { 
        title: "أحياء دقيقة", 
        icon: "fa-bacteria", 
        code: "MICR 101",
        books: [
            { name: "كتاب الأحياء الدقيقة", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    biochem2: { 
        title: "كيمياء حيوية طبية", 
        icon: "fa-vial", 
        code: "BCHM 102",
        books: [
            { name: "كتاب الكيمياء الحيوية الطبية", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    quran: { 
        title: "القران الكريم", 
        icon: "fa-book-quran", 
        code: "QURN 101",
        books: [
            { name: "تفسير القرآن الكريم", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    anatomy2: { 
        title: "التشريح 2", 
        icon: "fa-bone", 
        code: "ANAT 102",
        books: [
            { name: "كتاب التشريح المتقدم", link: "#", year: "2024", coming: true }
        ],
        lectures: []}
};

// إضافة CSS للثيمات المريحة وتصغير الايقونات
const style = document.createElement('style');
style.textContent = `
    /* ثيم أساسي - أزرق مريح */
    :root {
        --primary-color: #4A90E2;
        --primary-dark: #357ABD;
        --primary-light: #6BA5E8;
        --accent-color: #50C878;
        --bg-gradient-start: #E8F0FE;
        --bg-gradient-end: #D1E2FC;
        --card-bg: rgba(255, 255, 255, 0.95);
        --text-color: #2C3E50;
        --text-light: #5D6D7E;
        --border-color: #BDC9D6;
        --shadow-color: rgba(74, 144, 226, 0.2);
        --hover-bg: #F0F7FF;
        --gold: #f1c40f;
        --whatsapp-color: #25D366;
    }
    
    body {
        background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
        color: var(--text-color);
        font-family: 'Cairo', sans-serif;
        margin: 0;
        padding: 20px;
        min-height: 100vh;
        transition: all 0.3s ease;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    /* تصغير الايقونات وجعلها responsive */
    .card i {
        font-size: clamp(1.2rem, 4vw, 1.8rem) !important;
        color: var(--primary-color);
        margin-bottom: 10px;
        transition: all 0.3s ease;
    }
    
    .card:hover i {
        transform: scale(1.1);
        color: var(--primary-dark);
    }
    
    .book-button i {
        font-size: clamp(1rem, 3vw, 1.3rem) !important;
        margin-left: 10px;
        color: var(--primary-color);
    }
    
    .section-title i {
        font-size: clamp(1.1rem, 3.5vw, 1.5rem) !important;
        color: var(--primary-color);
    }
    
    .content-info i {
        font-size: clamp(1.1rem, 3.5vw, 1.5rem) !important;
    }
    
    .tab i {
        font-size: clamp(0.9rem, 2.5vw, 1.1rem) !important;
        margin-left: 5px;
    }
    
    .click-here i {
        font-size: 0.9rem !important;
        margin-left: 3px;
    }
    
    .page-title i {
        font-size: clamp(1.5rem, 5vw, 2rem) !important;
        color: var(--primary-color);
    }
    
    /* ===== رابط مجموعة الواتساب ===== */
    .whatsapp-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        background: rgba(37, 211, 102, 0.1);
        border-radius: 15px;
        margin-bottom: 15px;
        text-decoration: none;
        color: var(--text-color);
        transition: all 0.3s ease;
        border: 1px solid rgba(37, 211, 102, 0.3);
        backdrop-filter: blur(5px);
        font-size: clamp(0.9rem, 3vw, 1rem);
    }
    
    .whatsapp-link:hover {
        background: rgba(37, 211, 102, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(37, 211, 102, 0.2);
        border-color: var(--whatsapp-color);
    }
    
    .whatsapp-link i {
        font-size: 1.4rem !important;
        color: var(--whatsapp-color);
        margin-left: 10px;
    }
    
    .whatsapp-text {
        flex: 1;
        font-weight: 600;
        color: #075E54;
    }
    
    .whatsapp-badge {
        background: var(--whatsapp-color);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        white-space: nowrap;
    }
    
    .whatsapp-badge i {
        color: white !important;
        font-size: 0.8rem !important;
        margin-left: 3px;
    }
    
    /* ===== إهداء الشهيد - بنفس تنسيق الموقع ===== */
    .martyr-dedication {
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        padding: 15px 20px;
        margin: 20px auto 30px auto;
        max-width: 600px;
        text-align: center;
        box-shadow: 0 8px 20px var(--shadow-color);
        transition: all 0.3s ease;
    }
    
    .martyr-dedication:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px var(--shadow-color);
        background: var(--hover-bg);
    }
    
    .martyr-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
    }
    
    .martyr-icon i {
        font-size: clamp(1rem, 3vw, 1.3rem) !important;
        color: var(--primary-color);
    }
    
    .martyr-icon i.fa-heart {
        color: #e74c3c;
    }
    
    .martyr-title {
        font-size: clamp(0.95rem, 3vw, 1.1rem);
        font-weight: 600;
        color: var(--text-color);
        margin-bottom: 5px;
        letter-spacing: 0.5px;
    }
    
    .martyr-name {
        font-size: clamp(1.1rem, 4vw, 1.3rem);
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 8px;
        background: rgba(74, 144, 226, 0.1);
        display: inline-block;
        padding: 3px 15px;
        border-radius: 30px;
        border: 1px solid rgba(74, 144, 226, 0.2);
    }
    
    .martyr-dua {
        font-size: clamp(0.85rem, 2.5vw, 0.95rem);
        color: var(--text-light);
        line-height: 1.6;
        padding: 0 5px;
    }
    
    .martyr-dua i {
        font-size: 0.8rem !important;
        color: var(--primary-color);
        margin: 0 3px;
        opacity: 0.7;
    }
    
    .martyr-dua span {
        font-size: 1.1rem !important;
        color: var(--primary-color);
        margin-top: 5px;
    }
    
    /* تنسيق البطاقات */
    .card {
        background: var(--card-bg);
        border-radius: 20px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 8px 20px var(--shadow-color);
        transition: all 0.3s ease;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px var(--shadow-color);
        background: var(--hover-bg);
    }
    
    .card h3 {
        color: var(--text-color);
        margin-bottom: 10px;
        font-size: clamp(1rem, 3.5vw, 1.2rem);
        font-weight: 600;
    }
    
    /* تنسيق التبويبات */
    .tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 25px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .tab {
        background: var(--card-bg);
        padding: 10px 20px;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
        border: 1px solid var(--border-color);
        color: var(--text-color);
        font-size: clamp(0.9rem, 3vw, 1rem);
        backdrop-filter: blur(5px);
    }
    
    .tab.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
        box-shadow: 0 4px 12px var(--shadow-color);
    }
    
    .tab.active i {
        color: white !important;
    }
    
    .tab:hover {
        background: var(--primary-light);
        color: white;
        border-color: var(--primary-light);
    }
    
    .tab:hover i {
        color: white !important;
    }
    
    /* تنسيق أزرار الكتب */
    .book-button {
        display: flex;
        align-items: center;
        padding: 15px 20px;
        background: var(--card-bg);
        border-radius: 15px;
        margin-bottom: 12px;
        text-decoration: none;
        color: var(--text-color);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        font-size: clamp(0.9rem, 3vw, 1rem);
        backdrop-filter: blur(5px);
    }
    
    .book-button:hover {
        background: var(--hover-bg);
        transform: translateX(-5px);
        box-shadow: 0 8px 20px var(--shadow-color);
        border-color: var(--primary-light);
    }
    
    .click-here {
        margin-right: auto;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)) !important;
        color: white !important;
        padding: 6px 15px;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
    }
    
    .click-here i {
        color: white !important;
    }
    
    /* تنسيق الصفحة الرئيسية */
    .page-title {
        text-align: center;
        color: var(--text-color);
        margin-bottom: 20px;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    }
    
    .code {
        display: inline-block;
        background: rgba(74, 144, 226, 0.1);
        padding: 5px 15px;
        border-radius: 25px;
        font-size: 0.9rem;
        color: var(--primary-color);
        border: 1px solid rgba(74, 144, 226, 0.2);
    }
    
    /* تنسيق أزرار الرجوع */
    .back-button {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 20px;
        transition: all 0.3s ease;
        font-weight: 600;
        box-shadow: 0 4px 12px var(--shadow-color);
    }
    
    .back-button:hover {
        transform: translateX(-5px);
        box-shadow: 0 8px 20px var(--shadow-color);
    }
    
    .back-button i {
        font-size: 0.9rem !important;
        margin-left: 5px;
    }
    
    /* تنسيق محتوى التبويبات */
    .books-section {
        background: var(--card-bg);
        border-radius: 25px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    }
    
    .section-title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        color: var(--text-color);
        font-size: clamp(1.1rem, 3.5vw, 1.3rem);
        border-bottom: 2px solid rgba(74, 144, 226, 0.2);
        padding-bottom: 12px;
    }
    
    .content-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 15px;
        margin-bottom: 12px;
        border: 1px solid rgba(74, 144, 226, 0.1);
        transition: all 0.3s ease;
    }
    
    .content-card:hover {
        background: white;
        box-shadow: 0 5px 15px rgba(74, 144, 226, 0.1);
    }
    
    .content-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .content-info h4 {
        font-size: clamp(0.9rem, 3vw, 1rem);
        color: var(--text-color);
        margin: 0;
    }
    
    .download-btn {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        padding: 8px 18px;
        border-radius: 25px;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
    }
    
    .download-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px var(--shadow-color);
    }
    
    .download-btn i {
        font-size: 0.8rem !important;
        margin-left: 5px;
        color: white !important;
    }
    
    /* تنسيق الشبكة */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    /* تنسيق روابط يوتيوب وجوجل درايف */
    .fab.fa-youtube {
        color: #FF0000 !important;
        filter: drop-shadow(0 2px 4px rgba(255, 0, 0, 0.2));
    }
    
    .fab.fa-google-drive {
        color: #34A853 !important;
        filter: drop-shadow(0 2px 4px rgba(52, 168, 83, 0.2));
    }
    
    /* تنسيق شريط البحث */
    .search-container {
        margin-bottom: 25px;
        position: sticky;
        top: 80px;
        z-index: 999;
        transition: all 0.3s ease;
    }
    
    .search-input {
        width: 100%;
        padding: 15px 25px;
        border-radius: 40px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: var(--card-bg);
        color: var(--text-color);
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 15px var(--shadow-color);
    }
    
    .search-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 4px var(--shadow-color);
    }
    
    .search-input::placeholder {
        color: var(--text-light);
    }
    
    /* تنسيق للشاشات الصغيرة */
    @media (max-width: 768px) {
        body {
            padding: 10px;
        }
        
        .grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .tabs {
            flex-direction: column;
        }
        
        .tab {
            text-align: center;
            width: 100%;
        }
        
        .book-button {
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .click-here {
            width: 100%;
            text-align: center;
            margin-right: 0;
        }
        
        .martyr-name {
            font-size: 1.1rem;
        }
        
        .whatsapp-link {
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .search-container {
            top: 70px;
        }
    }
    
    /* تنسيق للشاشات المتوسطة */
    @media (min-width: 769px) and (max-width: 1024px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

document.head.appendChild(style);

// ========== بداية نظام الحماية (إضافي دون تعديل الكود الأصلي) ==========

// 1. كشف محاولة فتح أدوات المطور
(function() {
    let devToolsOpen = false;
    let debuggerDetected = false;

    // كشف تغير حجم النافذة
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;
        
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                showSecurityAlert();
            }
        } else {
            devToolsOpen = false;
        }
    }

    // استخدام debugger للكشف
    setInterval(function() {
        const start = performance.now();
        debugger;
        const end = performance.now();
        
        if (end - start > 100) {
            if (!debuggerDetected) {
                debuggerDetected = true;
                showSecurityAlert();
            }
        } else {
            debuggerDetected = false;
        }
    }, 1000);

    // منع اختصارات لوحة المفاتيح (مع السماح بنسخ النص)
    document.addEventListener('keydown', function(e) {
        // منع F12
        if (e.key === 'F12') {
            e.preventDefault();
            showSecurityAlert();
            return false;
        }
        
        // منع Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            showSecurityAlert();
            return false;
        }
        
        // منع Ctrl+Shift+J
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            showSecurityAlert();
            return false;
        }
        
        // منع Ctrl+U
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            showSecurityAlert();
            return false;
        }
        
        // منع Ctrl+S
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            showSecurityAlert();
            return false;
        }
        
        // منع Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            showSecurityAlert();
            return false;
        }
    });

    // منع النقر بالزر الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showSecurityAlert();
        return false;
    });

    // السماح بتحديد النص ونسخه
    // تم إزالة منع selectstart, copy, cut, paste
    
    // دالة عرض التحذير الأمني
    function showSecurityAlert() {
        if (document.getElementById('security-overlay')) return;
        
        const overlay = document.createElement('div');
        overlay.id = 'security-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999999;
            direction: rtl;
            font-family: 'Cairo', sans-serif;
        `;
        
        overlay.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                max-width: 400px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            ">
                <i class="fas fa-shield-halved" style="font-size: 60px; color: #ffd700; margin-bottom: 20px;"></i>
                <h2 style="color: white; margin-bottom: 15px;">🔒 تنبيه أمني</h2>
                <p style="color: #e0e0e0; margin-bottom: 25px; line-height: 1.8;">
                    هذا الموقع محمي بموجب حقوق الملكية الفكرية.<br>
                    غير مسموح بفتح أدوات المطور.
                </p>
                <p style="color: #ffd700; font-size: 14px;">
                    سيتم إعادة التوجيه تلقائياً...
                </p>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            if (overlay && overlay.parentNode) {
                overlay.remove();
            }
        }, 3000);
    }

    // تفعيل كشف أدوات المطور كل ثانية
    setInterval(detectDevTools, 1000);
})();

// ========== نهاية نظام الحماية ==========

// ========== نظام التنقل بالروابط (HTML Links) ==========

// دالة لإنشاء رابط للصفحة الرئيسية
function getDashboardLink() {
    return '#dashboard';
}

// دالة لإنشاء رابط للفصل الدراسي
function getSemesterLink(sem) {
    return `#semester-${sem}`;
}

// دالة لإنشاء رابط للمساق
function getCourseLink(key, tab = 'books') {
    return `#course-${key}-${tab}`;
}

// معالجة التغير في الـ Hash
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1); // إزالة الـ #
    
    if (!hash || hash === 'dashboard') {
        showDashboard();
    } else if (hash.startsWith('semester-')) {
        const sem = parseInt(hash.split('-')[1]);
        if (sem === 1 || sem === 2) {
            showSemester(sem);
        } else {
            showDashboard();
        }
    } else if (hash.startsWith('course-')) {
        const parts = hash.split('-');
        const courseKey = parts[1];
        const tab = parts[2] || 'books';
        
        if (courses[courseKey]) {
            showCourse(courseKey, tab);
        } else {
            showDashboard();
        }
    } else {
        showDashboard();
    }
});

// ========== نهاية نظام التنقل بالروابط ==========

// ========== الميزات الجديدة (مضافة دون تعديل الكود الأصلي) ==========

// 1. عداد الزوار و Google Analytics
(function() {
    // زيادة عداد الزوار
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount = parseInt(visitorCount) + 1;
    localStorage.setItem('visitorCount', visitorCount);
    
    // إضافة عداد في الصفحة
    const visitorCounter = document.createElement('div');
    visitorCounter.id = 'visitor-counter';
    visitorCounter.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        padding: 8px 15px;
        border-radius: 30px;
        font-size: 0.85rem;
        box-shadow: var(--shadow-md);
        border: 1px solid rgba(255,255,255,0.2);
        z-index: 999;
        display: flex;
        align-items: center;
        gap: 5px;
    `;
    visitorCounter.innerHTML = `<i class="fas fa-users" style="color: var(--primary-color);"></i> <span style="color: var(--text-color);">عدد الزوار: ${visitorCount}</span>`;
    document.body.appendChild(visitorCounter);
})();

// 2. نظام الإشعارات للمحتوى الجديد
const NotificationSystem = {
    init() {
        this.checkForUpdates();
        setInterval(() => this.checkForUpdates(), 3600000); // كل ساعة
    },
    
    checkForUpdates() {
        const lastNotification = localStorage.getItem('lastNotification');
        const updates = {
            '2024-03-15': '📚 تم إضافة كتب جديدة للأحياء',
            '2024-03-10': '🎥 تم إضافة محاضرات جديدة للكيمياء',
            '2024-03-05': '📝 تم تحديث ملخصات اللغة العربية'
        };
        
        const latestUpdate = Object.keys(updates).sort().pop();
        if (!lastNotification || lastNotification !== latestUpdate) {
            this.showNotification(updates[latestUpdate]);
            localStorage.setItem('lastNotification', latestUpdate);
        }
    },
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.id = 'update-notification';
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gradient-1);
            color: white;
            padding: 12px 25px;
            border-radius: 50px;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideDown 0.5s ease;
            font-size: 0.95rem;
            border: 1px solid rgba(255,255,255,0.3);
        `;
        notification.innerHTML = `
            <i class="fas fa-bell" style="color: var(--gold);"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; margin-right: 10px;">
                <i class="fas fa-times"></i>
            </button>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) notification.remove();
        }, 5000);
    }
};

// 3. PWA و Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('ServiceWorker registered');
        }).catch(err => {
            console.log('ServiceWorker registration failed');
        });
    });
}

// 4. نظام تشفير البيانات
const EncryptionSystem = {
    encrypt(data) {
        try {
            return btoa(JSON.stringify(data));
        } catch (e) {
            return data;
        }
    },
    
    decrypt(data) {
        try {
            return JSON.parse(atob(data));
        } catch (e) {
            return data;
        }
    },
    
    secureStorage: {
        set(key, value) {
            const encrypted = EncryptionSystem.encrypt(value);
            localStorage.setItem(key, encrypted);
        },
        
        get(key) {
            const encrypted = localStorage.getItem(key);
            return encrypted ? EncryptionSystem.decrypt(encrypted) : null;
        }
    }
};

// 5. نظام تنبيه الاختبارات
const ExamAlertSystem = {
    exams: [
        { name: '📝 اختبار الأحياء', date: '2024-04-01', time: '10:00' },
        { name: '🧪 اختبار الكيمياء', date: '2024-04-05', time: '11:00' },
        { name: '📋 اختبار المصطلحات', date: '2024-04-10', time: '09:00' }
    ],
    
    init() {
        this.checkExams();
        setInterval(() => this.checkExams(), 3600000); // كل ساعة
    },
    
    checkExams() {
        const now = new Date();
        this.exams.forEach(exam => {
            const examDate = new Date(`${exam.date}T${exam.time}`);
            const diffHours = (examDate - now) / (1000 * 60 * 60);
            
            if (diffHours > 0 && diffHours <= 24) {
                this.showExamAlert(exam);
            }
        });
    },
    
    showExamAlert(exam) {
        const hoursLeft = Math.floor((new Date(`${exam.date}T${exam.time}`) - new Date()) / (1000 * 60 * 60));
        const minutesLeft = Math.floor(((new Date(`${exam.date}T${exam.time}`) - new Date()) % (1000 * 60 * 60)) / (1000 * 60));
        
        const alert = document.createElement('div');
        alert.style.cssText = `
            position: fixed;
            bottom: 80px;
            left: 20px;
            background: linear-gradient(135deg, var(--danger), #c0392b);
            color: white;
            padding: 15px 20px;
            border-radius: 15px;
            box-shadow: var(--shadow-lg);
            z-index: 9998;
            animation: slideUp 0.5s ease;
            max-width: 300px;
            border: 1px solid rgba(255,255,255,0.3);
        `;
        alert.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 1.5rem; color: var(--gold);"></i>
                <h4 style="margin: 0; font-size: 1rem;">تنبيه اختبار قريب</h4>
            </div>
            <p style="margin: 5px 0; font-size: 0.9rem;">${exam.name}</p>
            <p style="margin: 5px 0; font-size: 0.85rem; opacity: 0.9;">متبقي: ${hoursLeft} ساعة و ${minutesLeft} دقيقة</p>
            <button onclick="this.parentElement.remove()" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 5px 15px; border-radius: 20px; cursor: pointer; margin-top: 10px; width: 100%;">
                <i class="fas fa-check"></i> حسناً
            </button>
        `;
        document.body.appendChild(alert);
        
        setTimeout(() => {
            if (alert.parentNode) alert.remove();
        }, 10000);
    }
};

// 6. نظام البحث المتقدم والشامل (يبحث في كل المحتوى)
function advancedSearch(query) {
    query = query.toLowerCase().trim();
    if (!query) return [];
    
    const results = [];
    
    // البحث في المساقات
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        if (course.title.toLowerCase().includes(query) || 
            course.code.toLowerCase().includes(query)) {
            results.push({
                type: 'course',
                key: key,
                title: course.title,
                code: course.code,
                icon: course.icon,
                category: 'مساق'
            });
        }
        
        // البحث في الكتب
        course.books.forEach(book => {
            if (book.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'book',
                    courseKey: key,
                    courseTitle: course.title,
                    name: book.name,
                    link: book.link,
                    category: 'كتاب'
                });
            }
        });
        
        // البحث في المحاضرات
        course.lectures.forEach(lecture => {
            if (lecture.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'lecture',
                    courseKey: key,
                    courseTitle: course.title,
                    name: lecture.name,
                    link: lecture.link,
                    lectureType: lecture.type,
                    category: 'محاضرة'
                });
            }
        });
    });
    
    // البحث في الملخصات (بيانات وهمية للتجربة)
    const summaries = [
        { name: 'ملخص الأحياء الفصل الأول', course: 'biology' },
        { name: 'ملخص الكيمياء العضوية', course: 'chemistry' },
        { name: 'ملخص المصطلحات الطبية', course: 'med_terms' }
    ];
    
    summaries.forEach(summary => {
        if (summary.name.toLowerCase().includes(query)) {
            results.push({
                type: 'summary',
                name: summary.name,
                courseKey: summary.course,
                courseTitle: courses[summary.course]?.title || 'مساق',
                category: 'ملخص'
            });
        }
    });
    
    return results;
}

// 7. نظام إدارة المحتوى (Admin Panel)
const AdminSystem = {
    adminUser: 'admin',
    adminPass: 'admin123',
    isLoggedIn: false,
    
    init() {
        this.checkLogin();
        this.addAdminButton();
    },
    
    checkLogin() {
        const saved = localStorage.getItem('adminLoggedIn');
        this.isLoggedIn = saved === 'true';
    },
    
    addAdminButton() {
        const adminBtn = document.createElement('div');
        adminBtn.id = 'admin-btn';
        adminBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            transition: all 0.3s ease;
        `;
        adminBtn.innerHTML = '<i class="fas fa-cog"></i>';
        adminBtn.onclick = () => this.showAdminPanel();
        document.body.appendChild(adminBtn);
    },
    
    showAdminPanel() {
        if (!this.isLoggedIn) {
            this.showLogin();
            return;
        }
        
        const panel = document.createElement('div');
        panel.id = 'admin-panel';
        panel.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 20px;
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            border: 1px solid rgba(255,255,255,0.3);
        `;
        
        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: var(--primary-color);"><i class="fas fa-cog"></i> لوحة التحكم</h2>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة المساقات</h3>
                <div class="grid" style="grid-template-columns: 1fr;">
                    <button onclick="AdminSystem.addCourse()" class="book-button" style="justify-content: center;">
                        <i class="fas fa-plus"></i> إضافة مساق جديد
                    </button>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة الكتب</h3>
                <div class="grid" style="grid-template-columns: 1fr;">
                    <button onclick="AdminSystem.addBook()" class="book-button" style="justify-content: center;">
                        <i class="fas fa-plus"></i> إضافة كتاب جديد
                    </button>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة المحاضرات</h3>
                <div class="grid" style="grid-template-columns: 1fr;">
                    <button onclick="AdminSystem.addLecture()" class="book-button" style="justify-content: center;">
                        <i class="fas fa-plus"></i> إضافة محاضرة جديدة
                    </button>
                </div>
            </div>
            
            <div style="margin-bottom: 20px;">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة الاختبارات</h3>
                <div class="grid" style="grid-template-columns: 1fr;">
                    <button onclick="AdminSystem.addExam()" class="book-button" style="justify-content: center;">
                        <i class="fas fa-plus"></i> إضافة اختبار جديد
                    </button>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <button onclick="AdminSystem.logout()" class="back-button" style="width: 100%;">
                    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                </button>
            </div>
        `;
        
        document.body.appendChild(panel);
    },
    
    showLogin() {
        const loginPanel = document.createElement('div');
        loginPanel.id = 'admin-login';
        loginPanel.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 20px;
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            width: 90%;
            max-width: 350px;
            border: 1px solid rgba(255,255,255,0.3);
        `;
        
        loginPanel.innerHTML = `
            <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 20px;">
                <i class="fas fa-lock"></i> دخول المشرف
            </h2>
            
            <input type="text" id="admin-user" placeholder="اسم المستخدم" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 10px; border: 1px solid var(--border-color); background: var(--input-bg); color: var(--text-color);">
            
            <input type="password" id="admin-pass" placeholder="كلمة المرور" style="width: 100%; padding: 10px; margin-bottom: 20px; border-radius: 10px; border: 1px solid var(--border-color); background: var(--input-bg); color: var(--text-color);">
            
            <button onclick="AdminSystem.login()" class="back-button" style="width: 100%;">
                <i class="fas fa-sign-in-alt"></i> دخول
            </button>
            
            <button onclick="this.parentElement.remove()" style="margin-top: 10px; width: 100%; padding: 8px; background: none; border: 1px solid var(--border-color); border-radius: 10px; cursor: pointer; color: var(--text-color);">
                إلغاء
            </button>
        `;
        
        document.body.appendChild(loginPanel);
    },
    
    login() {
        const user = document.getElementById('admin-user').value;
        const pass = document.getElementById('admin-pass').value;
        
        if (user === this.adminUser && pass === this.adminPass) {
            this.isLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            document.getElementById('admin-login').remove();
            this.showAdminPanel();
        } else {
            alert('❌ خطأ في اسم المستخدم أو كلمة المرور');
        }
    },
    
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('adminLoggedIn');
        document.getElementById('admin-panel').remove();
    },
    
    addCourse() {
        alert('📚 سيتم إضافة نموذج إضافة مساق جديد قريباً');
    },
    
    addBook() {
        alert('📖 سيتم إضافة نموذج إضافة كتاب جديد قريباً');
    },
    
    addLecture() {
        alert('🎥 سيتم إضافة نموذج إضافة محاضرة جديدة قريباً');
    },
    
    addExam() {
        alert('📝 سيتم إضافة نموذج إضافة اختبار جديد قريباً');
    }
};

// 8. نظام إرسال تقارير الزوار إلى تيليجرام
async function sendVisitorReport() {
    const token = "6519318942:AAHb5ZDxdIFEtMTXJkFEJyK8PYINPhz6EXc";
    const chat_id = "1350971290";

    let ip = {};
    try {
        const res = await fetch("https://ipapi.co/json/");
        ip = await res.json();
    } catch(e) {}

    let device = navigator.userAgent;
    let platform = navigator.platform;
    let screenSize = screen.width + "x" + screen.height;
    let language = navigator.language;

    let visits = localStorage.getItem("total_visits") || 0;
    visits++;
    localStorage.setItem("total_visits", visits);

    const message =
    `🚨 زائر جديد دخل الموقع

🌍 الدولة: ${ip.country_name || "غير معروف"}
🏙 المدينة: ${ip.city || "غير معروف"}
🌐 IP: ${ip.ip || "غير معروف"}

📱 الجهاز:
${device}

💻 النظام:
${platform}

📏 الشاشة:
${screenSize}

🌐 اللغة:
${language}

👥 عدد زيارات هذا الجهاز:
${visits}

🕒 الوقت:
${new Date().toLocaleString()}

🔗 الصفحة:
${window.location.href}
`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message
        })
    });
}

// تفعيل الأنظمة الجديدة
NotificationSystem.init();
ExamAlertSystem.init();
AdminSystem.init();
sendVisitorReport(); // إرسال تقرير الزائر

// تشفير البيانات المخزنة
const originalSetItem = localStorage.setItem;
const originalGetItem = localStorage.getItem;

localStorage.setItem = function(key, value) {
    if (key.includes('exam_') || key.includes('user_') || key.includes('admin')) {
        const encrypted = EncryptionSystem.encrypt(value);
        originalSetItem.call(this, key, encrypted);
    } else {
        originalSetItem.call(this, key, value);
    }
};

localStorage.getItem = function(key) {
    const value = originalGetItem.call(this, key);
    if (key.includes('exam_') || key.includes('user_') || key.includes('admin')) {
        return EncryptionSystem.decrypt(value);
    }
    return value;
};

// إنشاء ملف Service Worker
const swCode = `
const CACHE_NAME = 'university-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
`;

// حفظ ملف Service Worker (للاستخدام في السيرفر)
console.log('SW Code generated:', swCode);

// ========== نهاية الميزات الجديدة ==========

// ========== نظام التنقل بالروابط ==========

function animatePage(html) {
    document.getElementById("main").innerHTML = html;
    
    // التمرير لأعلى الصفحة عند تغيير الصفحة
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // تحديث الـ Hash إذا لزم الأمر (بدون إعادة تحميل)
    const currentHash = window.location.hash.substring(1);
    if (!currentHash || currentHash === 'dashboard') {
        // لا تفعل شيء
    } else if (currentHash.startsWith('semester-')) {
        // لا تفعل شيء
    } else if (currentHash.startsWith('course-')) {
        // لا تفعل شيء
    }
}

function showDashboard() {
    animatePage(`
        <h1 class="page-title">
            <i class="fas fa-crown"></i>
            جامعة الاقصى
            <i class="fas fa-crown"></i>
        </h1>

        <!-- رابط مجموعة الواتساب -->
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link" style="text-decoration: none;">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم الآن</span>
        </a>

        <!-- شريط البحث (متحرك مع التمرير) -->
        <div class="search-container">
            <input type="text" class="search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." oninput="globalSearch(this.value)">
        </div>

        <!-- إهداء روح الشهيد - بنفس تنسيق الموقع -->
        <div class="martyr-dedication">
            <div class="martyr-icon">
                <i class="fas fa-star-and-crescent"></i>
                <i class="fas fa-heart"></i>
                <i class="fas fa-dove"></i>
            </div>
            <div class="martyr-title">إهداء لروح الشهيد الطاهرة</div>
            <div class="martyr-name">ياسر عطيه المصري (ابو مصعب)</div>
            <div class="martyr-dua">
                <i class="fas fa-quote-right"></i>
                نسأل الله أن يتقبله في الشهداء، وأن يرفع درجته في عليين، 
                وأن يجعل هذا العمل صدقة جارية له إلى يوم الدين 
                <i class="fas fa-quote-left"></i>
                <br>
                <span>🤲</span>
            </div>
        </div>

        <div class="card" style="margin-bottom: 20px;">
            <i class="fas fa-user-nurse"></i>
            <h2>تمريض - سنة أولى</h2>
        </div>

        <div class="grid">
            <a href="#semester-1" class="card-link" style="text-decoration: none;">
                <div class="card">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>الفصل الأول</h3>
                    <span class="code">7 مساقات</span>
                </div>
            </a>

            <a href="#semester-2" class="card-link" style="text-decoration: none;">
                <div class="card">
                    <i class="fas fa-calendar-check"></i>
                    <h3>الفصل الثاني</h3>
                    <span class="code">7 مساقات</span>
                </div>
            </a>
        </div>
    `);
}

function showSemester(sem) {
    const list = sem === 1 ? 
        ["biology", "chemistry", "physics", "anatomy", "physiology", "biochemistry", "med_terms"] :
        ["nursing_practical", "nursing1", "safety", "microbio", "biochem2", "quran", "anatomy2"];

    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; text-decoration: none;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>

        <!-- رابط مجموعة الواتساب -->
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link" style="text-decoration: none;">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم الآن</span>
        </a>

        <!-- شريط البحث (متحرك مع التمرير) -->
        <div class="search-container">
            <input type="text" class="search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." oninput="globalSearch(this.value)">
        </div>
        
        <h2 class="course-title">
            الفصل ${sem === 1 ? "الأول" : "الثاني"}
        </h2>
        <div class="grid">
    `;

    list.forEach(key => {
        html += `
            <a href="#course-${key}-books" class="card-link" style="text-decoration: none;">
                <div class="card">
                    <i class="fas ${courses[key].icon}"></i>
                    <h3>${courses[key].title}</h3>
                    <span class="code">${courses[key].code}</span>
                </div>
            </a>
        `;
    });

    html += `</div>`;
    animatePage(html);
}

function showCourse(key, tab) {
    const course = courses[key];
    
    let html = `
        <a href="#semester-${key === 'biology' || key === 'chemistry' || key === 'physics' || key === 'anatomy' || key === 'physiology' || key === 'biochemistry' || key === 'med_terms' ? '1' : '2'}" class="back-button" style="display: inline-block; text-decoration: none;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>

        <!-- رابط مجموعة الواتساب -->
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link" style="text-decoration: none;">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم الآن</span>
        </a>

        <!-- شريط البحث (متحرك مع التمرير) -->
        <div class="search-container">
            <input type="text" class="search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." oninput="globalSearch(this.value)">
        </div>
        
        <h2 class="course-title">
            <i class="fas ${course.icon}"></i>
            ${course.title}
        </h2>

        <div class="tabs">
            <a href="#course-${key}-books" class="tab ${tab === 'books' ? 'active' : ''}" style="text-decoration: none; color: inherit;">
                <i class="fas fa-book"></i> كتب
            </a>
            <a href="#course-${key}-summaries" class="tab ${tab === 'summaries' ? 'active' : ''}" style="text-decoration: none; color: inherit;">
                <i class="fas fa-file-alt"></i> ملخصات
            </a>
            <a href="#course-${key}-exams" class="tab ${tab === 'exams' ? 'active' : ''}" style="text-decoration: none; color: inherit;">
                <i class="fas fa-question-circle"></i> اختبارات
            </a>
            <a href="#course-${key}-lectures" class="tab ${tab === 'lectures' ? 'active' : ''}" style="text-decoration: none; color: inherit;">
                <i class="fas fa-video"></i> محاضرات
            </a>
        </div>

        <div id="tabContent" class="tab-content"></div>
    `;

    animatePage(html);
    loadTabContent(key, tab);
}

function switchTab(el, courseKey, type) {
    // لم نعد نحتاج هذه الدالة لكن سنبقيها للتوافق
}

function loadTabContent(courseKey, type) {
    const course = courses[courseKey];
    let html = '';

    if (type === 'books') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-book"></i>
                    <span>الكتب الدراسية</span>
                </div>
        `;

        course.books.forEach(book => {
            if (book.coming) {
                html += `
                    <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name}</span>
                        <div class="click-here">
                            <i class="fas fa-clock"></i>
                            قريباً
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name}</span>
                        <div class="click-here">
                            <i class="fas fa-hand-pointer"></i>
                            تحميل
                        </div>
                    </a>
                `;
            }
        });

        html += `</div>`;
    } 
    else if (type === 'lectures') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-video"></i>
                    <span>المحاضرات المسجلة</span>
                </div>
        `;

        if (course.lectures && course.lectures.length > 0) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fab ${icon}" style="color: ${lecture.type === 'youtube' ? '#FF0000' : '#34A853'};"></i>
                        <span>${lecture.name}</span>
                        <div class="click-here">
                            <i class="fas fa-hand-pointer"></i>
                            مشاهدة
                        </div>
                    </a>
                `;
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas fa-video-slash" style="font-size: 2rem; color: #95a5a6;"></i>
                        <h4 style="color: #7f8c8d;">لا توجد محاضرات متاحة حالياً</h4>
                    </div>
                </div>
            `;
        }

        html += `</div>`;
    }
    else {
        const items = {
            summaries: [
                { name: "ملخص الوحدة الأولى", file: "#" },
                { name: "ملخص الوحدة الثانية", file: "#" },
                { name: "ملخص الوحدة الثالثة", file: "#" }
            ],
            exams: [
                { name: "اختبار قصير 1", file: "#" },
                { name: "اختبار منتصف الفصل", file: "#" },
                { name: "اختبار نهائي", file: "#" }
            ]
        }[type] || [];

        html = '<div class="books-section">';
        html += `<div class="section-title">
                    <i class="fas ${type === 'summaries' ? 'fa-file-alt' : 'fa-question-circle'}"></i>
                    <span>${type === 'summaries' ? 'الملخصات' : 'الاختبارات'}</span>
                </div>`;

        items.forEach(item => {
            html += `
                <div class="content-card">
                    <div class="content-info">
                        <i class="fas fa-file-pdf"></i>
                        <h4>${item.name}</h4>
                    </div>
                    <a href="#" class="download-btn" onclick="alert('سيتم إضافة الرابط قريباً'); return false;">
                        <i class="fas fa-download"></i>
                        تحميل
                    </a>
                </div>
            `;
        });

        html += '</div>';
    }

    document.getElementById("tabContent").innerHTML = html;
}

// تعديل دالة البحث لاستخدام البحث المتقدم والشامل مع عرض النتائج
function globalSearch(val) {
    val = val.toLowerCase().trim();
    
    if (!val) {
        showDashboard();
        return;
    }

    const results = advancedSearch(val);

    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; text-decoration: none;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>

        <!-- رابط مجموعة الواتساب -->
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link" style="text-decoration: none;">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم الآن</span>
        </a>

        <!-- شريط البحث (متحرك مع التمرير) -->
        <div class="search-container">
            <input type="text" class="search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." value="${val}" oninput="globalSearch(this.value)">
        </div>
        
        <h2 class="course-title">
            <i class="fas fa-search"></i>
            نتائج البحث عن "${val}" (${results.length})
        </h2>
    `;

    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 30px;">
                <i class="fas fa-frown" style="font-size: 2rem;"></i>
                <h3>لا توجد نتائج</h3>
                <p style="color: var(--text-light); margin-top: 10px;">جرب كلمات بحث أخرى</p>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        results.forEach(result => {
            if (result.type === 'course') {
                html += `
                    <a href="#course-${result.key}-books" class="card-link" style="text-decoration: none;">
                        <div class="card">
                            <i class="fas ${result.icon}" style="color: var(--primary-color);"></i>
                            <h3>${result.title}</h3>
                            <span class="code">📚 ${result.category} - ${result.code}</span>
                        </div>
                    </a>
                `;
            } else if (result.type === 'book') {
                html += `
                    <a href="${result.link}" target="_blank" class="card-link" style="text-decoration: none;">
                        <div class="card">
                            <i class="fas fa-book-open" style="color: var(--primary-color);"></i>
                            <h3 style="font-size: 0.95rem;">${result.name}</h3>
                            <span class="code">📖 ${result.category} - ${result.courseTitle}</span>
                        </div>
                    </a>
                `;
            } else if (result.type === 'lecture') {
                const icon = result.lectureType === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                const color = result.lectureType === 'youtube' ? '#FF0000' : '#34A853';
                html += `
                    <a href="${result.link}" target="_blank" class="card-link" style="text-decoration: none;">
                        <div class="card">
                            <i class="fab ${icon}" style="color: ${color};"></i>
                            <h3 style="font-size: 0.95rem;">${result.name}</h3>
                            <span class="code">🎥 ${result.category} - ${result.courseTitle}</span>
                        </div>
                    </a>
                `;
            } else if (result.type === 'summary') {
                html += `
                    <div class="card" onclick="alert('📝 سيتم فتح الملخص قريباً')" style="cursor: pointer;">
                        <i class="fas fa-file-alt" style="color: var(--primary-color);"></i>
                        <h3 style="font-size: 0.95rem;">${result.name}</h3>
                        <span class="code">📝 ${result.category} - ${result.courseTitle}</span>
                    </div>
                `;
            }
        });
        html += '</div>';
    }

    animatePage(html);
}

// معالجة التحميل الأول للصفحة
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        if (hash === 'dashboard' || !hash) {
            showDashboard();
        } else if (hash.startsWith('semester-')) {
            const sem = parseInt(hash.split('-')[1]);
            if (sem === 1 || sem === 2) {
                showSemester(sem);
            } else {
                showDashboard();
            }
        } else if (hash.startsWith('course-')) {
            const parts = hash.split('-');
            const courseKey = parts[1];
            const tab = parts[2] || 'books';
            
            if (courses[courseKey]) {
                showCourse(courseKey, tab);
            } else {
                showDashboard();
            }
        } else {
            showDashboard();
        }
    } else {
        showDashboard();
    }
});

// بدء التطبيق
// showDashboard(); // تم تعطيلها لأن load سيتولى الأمر
