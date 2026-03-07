// دمج بيانات المساقات مع إضافة semester لكل مساق
const courses = {
    biology: { 
        title: "الأحياء", 
        icon: "fa-dna", 
        code: "BIOL 101",
        semester: 1,
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
        semester: 1,
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
        semester: 1,
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
        semester: 1,
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
        semester: 1,
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
        semester: 1,
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
        semester: 1,
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
        semester: 2,
        books: [
            { name: "دليل التمريض العملي", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    nursing1: { 
        title: "أساسيات التمريض", 
        icon: "fa-stethoscope", 
        code: "NURS 101",
        semester: 2,
        books: [
            { name: "كتاب أساسيات التمريض", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    safety: { 
        title: "السلامة", 
        icon: "fa-shield-halved", 
        code: "SAFE 101",
        semester: 2,
        books: [
            { name: "دليل السلامة المهنية", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    microbio: { 
        title: "أحياء دقيقة", 
        icon: "fa-bacteria", 
        code: "MICR 101",
        semester: 2,
        books: [
            { name: "كتاب الأحياء الدقيقة", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    biochem2: { 
        title: "كيمياء حيوية طبية", 
        icon: "fa-vial", 
        code: "BCHM 102",
        semester: 2,
        books: [
            { name: "كتاب الكيمياء الحيوية الطبية", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    quran: { 
        title: "القران الكريم", 
        icon: "fa-book-quran", 
        code: "QURN 101",
        semester: 2,
        books: [
            { name: "تفسير القرآن الكريم", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    anatomy2: { 
        title: "التشريح 2", 
        icon: "fa-bone", 
        code: "ANAT 102",
        semester: 2,
        books: [
            { name: "كتاب التشريح المتقدم", link: "#", year: "2024", coming: true }
        ],
        lectures: []}
};

// تعريف جميع المتغيرات المستخدمة في CSS
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
        --danger: #e74c3c;
        --success: #2ecc71;
        --info: #3498db;
        --warning: #f39c12;
        --gradient-1: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
        --gradient-2: linear-gradient(135deg, #6BA5E8 0%, #4A90E2 100%);
        --gradient-3: linear-gradient(135deg, #50C878 0%, #2ecc71 100%);
        --gradient-gold: linear-gradient(135deg, #f1c40f 0%, #f39c12 100%);
        --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
        --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
        --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
        --shadow-xl: 0 16px 32px rgba(0,0,0,0.15);
        --input-bg: white;
    }
    
    body {
        background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
        color: var(--text-color);
        font-family: 'Cairo', sans-serif;
        margin: 0;
        padding: 20px 20px 80px 20px;
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
        text-decoration: none;
        display: inline-block;
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
        display: inline-block;
        text-decoration: none;
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
        display: inline-block;
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
    
    /* تنسيق شريط البحث المتحرك (واحد فقط) */
    .search-container {
        position: sticky;
        top: 80px;
        z-index: 999;
        margin: 0 0 25px 0;
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
    
    /* ===== التوقيع الأصلي (مرة واحدة فقط) ===== */
    .signature {
        text-align: center;
        margin-top: 40px;
        padding: 15px 0;
        font-size: 0.9rem;
        color: var(--text-light);
        border-top: 1px solid rgba(0,0,0,0.05);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .signature i {
        font-size: 0.9rem;
        color: var(--primary-color);
        opacity: 0.6;
    }
    
    .signature .engineer {
        color: var(--text-color);
        font-weight: 500;
    }
    
    .signature .nader {
        color: var(--primary-color);
        font-weight: 700;
    }
    
    .signature .crown-icon {
        color: var(--gold);
        opacity: 1;
    }
    
    /* ===== شريط التنقل السفلي للموبايل ===== */
    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        display: flex;
        justify-content: space-around;
        padding: 10px 5px;
        box-shadow: 0 -5px 20px var(--shadow-color);
        z-index: 1000;
        border-top: 1px solid rgba(255,255,255,0.3);
    }
    
    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--text-light);
        font-size: 0.7rem;
        transition: all 0.3s ease;
        padding: 5px 10px;
        border-radius: 30px;
    }
    
    .nav-item i {
        font-size: 1.2rem !important;
        margin-bottom: 3px;
    }
    
    .nav-item.active {
        color: var(--primary-color);
        background: rgba(74, 144, 226, 0.1);
    }
    
    .nav-item span {
        font-size: 0.65rem;
    }
    
    /* ===== صفحة الإحصائيات ===== */
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin: 20px 0;
    }
    
    .stat-card {
        background: var(--card-bg);
        border-radius: 20px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 8px 20px var(--shadow-color);
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    }
    
    .stat-card i {
        font-size: 2rem !important;
        color: var(--primary-color);
        margin-bottom: 10px;
    }
    
    .stat-card .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-color);
    }
    
    .stat-card .stat-label {
        font-size: 0.9rem;
        color: var(--text-light);
    }
    
    /* ===== صفحة المفضلة ===== */
    .favorite-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        background: var(--card-bg);
        border-radius: 15px;
        margin-bottom: 10px;
        border: 1px solid rgba(255,255,255,0.2);
    }
    
    .favorite-info {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .favorite-info i {
        font-size: 1.3rem !important;
        color: var(--gold);
    }
    
    .favorite-remove {
        color: var(--danger);
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 20px;
        background: rgba(231, 76, 60, 0.1);
    }
    
    /* تنسيق للشاشات الصغيرة */
    @media (max-width: 768px) {
        body {
            padding: 10px 10px 70px 10px;
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
        
        .bottom-nav {
            padding: 5px;
        }
        
        .nav-item i {
            font-size: 1rem !important;
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

// ========== نظام الجلسات والمستخدمين ==========
const SessionManager = {
    sessionId: null,
    userId: null,
    
    init() {
        this.sessionId = this.generateSessionId();
        this.userId = this.getOrCreateUserId();
        this.trackVisit();
        return this;
    },
    
    generateSessionId() {
        let sessionId = sessionStorage.getItem('session_id');
        if (!sessionId) {
            sessionId = 'session_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
            sessionStorage.setItem('session_id', sessionId);
        }
        return sessionId;
    },
    
    getOrCreateUserId() {
        let userId = localStorage.getItem('user_id');
        if (!userId) {
            userId = 'user_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
            localStorage.setItem('user_id', userId);
        }
        return userId;
    },
    
    trackVisit() {
        let visits = JSON.parse(localStorage.getItem('site_visits') || '[]');
        visits.push({
            userId: this.userId,
            sessionId: this.sessionId,
            timestamp: Date.now(),
            page: window.location.href
        });
        // نحتفظ بآخر 100 زيارة فقط
        if (visits.length > 100) visits = visits.slice(-100);
        localStorage.setItem('site_visits', JSON.stringify(visits));
    },
    
    getStats() {
        const visits = JSON.parse(localStorage.getItem('site_visits') || '[]');
        const uniqueUsers = new Set(visits.map(v => v.userId)).size;
        const uniqueSessions = new Set(visits.map(v => v.sessionId)).size;
        const todayVisits = visits.filter(v => {
            const today = new Date().toDateString();
            const visitDate = new Date(v.timestamp).toDateString();
            return today === visitDate;
        }).length;
        
        return {
            totalVisits: visits.length,
            uniqueUsers,
            uniqueSessions,
            todayVisits
        };
    }
};

// ========== نظام المفضلة ==========
const FavoritesSystem = {
    favorites: [],
    
    init() {
        this.load();
        return this;
    },
    
    load() {
        const saved = localStorage.getItem('favorites_' + SessionManager.userId);
        this.favorites = saved ? JSON.parse(saved) : [];
    },
    
    save() {
        localStorage.setItem('favorites_' + SessionManager.userId, JSON.stringify(this.favorites));
    },
    
    add(item) {
        if (!this.favorites.some(f => f.id === item.id)) {
            this.favorites.push(item);
            this.save();
            return true;
        }
        return false;
    },
    
    remove(itemId) {
        this.favorites = this.favorites.filter(f => f.id !== itemId);
        this.save();
    },
    
    isFavorite(itemId) {
        return this.favorites.some(f => f.id === itemId);
    },
    
    getAll() {
        return this.favorites;
    }
};

// ========== نظام حفظ آخر مساق ==========
const LastVisitedSystem = {
    save(courseKey, tab) {
        const lastVisited = {
            courseKey,
            tab,
            timestamp: Date.now()
        };
        localStorage.setItem('last_visited_' + SessionManager.userId, JSON.stringify(lastVisited));
    },
    
    get() {
        const saved = localStorage.getItem('last_visited_' + SessionManager.userId);
        return saved ? JSON.parse(saved) : null;
    },
    
    restore() {
        const last = this.get();
        if (last && courses[last.courseKey]) {
            showCourse(last.courseKey, last.tab || 'books');
            return true;
        }
        return false;
    }
};

// ========== بنك الأسئلة (1000 سؤال) ==========
const questionBank = [
    // أسئلة الأحياء
    { id: 1, course: 'biology', question: 'ما هو الوحدة الأساسية للحياة؟', options: ['الخلية', 'النسيج', 'العضو', 'الجهاز'], correct: 0 },
    { id: 2, course: 'biology', question: 'أين يتم إنتاج الطاقة في الخلية؟', options: ['النواة', 'الميتوكوندريا', 'الريبوسومات', 'جهاز جولجي'], correct: 1 },
    { id: 3, course: 'biology', question: 'ما هو الحمض النووي المسؤول عن الوراثة؟', options: ['RNA', 'DNA', 'ATP', 'NADPH'], correct: 1 },
    { id: 4, course: 'biology', question: 'كم عدد أزواج الكروموسومات في الإنسان؟', options: ['22', '23', '24', '46'], correct: 1 },
    { id: 5, course: 'biology', question: 'ما هو العضو المسؤول عن ضخ الدم؟', options: ['الكبد', 'القلب', 'الرئتين', 'الكلى'], correct: 1 },
    
    // أسئلة الكيمياء
    { id: 6, course: 'chemistry', question: 'ما هو الرقم الهيدروجيني للماء النقي؟', options: ['7', '8', '6', '5'], correct: 0 },
    { id: 7, course: 'chemistry', question: 'ما هو العنصر الأكثر وفرة في القشرة الأرضية؟', options: ['الأكسجين', 'السيليكون', 'الألمنيوم', 'الحديد'], correct: 0 },
    { id: 8, course: 'chemistry', question: 'ما هي صيغة الماء؟', options: ['H2O', 'CO2', 'NaCl', 'CH4'], correct: 0 },
    { id: 9, course: 'chemistry', question: 'ما هو الغاز الذي تتنفسه الكائنات الحية؟', options: ['الأكسجين', 'ثاني أكسيد الكربون', 'النيتروجين', 'الهيدروجين'], correct: 0 },
    { id: 10, course: 'chemistry', question: 'ما هو العنصر الذي رمزه Fe؟', options: ['الحديد', 'الذهب', 'الفضة', 'النحاس'], correct: 0 },
    
    // أسئلة المصطلحات الطبية
    { id: 11, course: 'med_terms', question: 'ما معنى كلمة Cardio؟', options: ['قلب', 'دماغ', 'كبد', 'كلية'], correct: 0 },
    { id: 12, course: 'med_terms', question: 'ما معنى كلمة Gastro؟', options: ['معدة', 'أمعاء', 'كبد', 'بنكرياس'], correct: 0 },
    { id: 13, course: 'med_terms', question: 'ما معنى كلمة Neuro؟', options: ['عصب', 'عضلة', 'عظم', 'جلد'], correct: 0 },
    { id: 14, course: 'med_terms', question: 'ما معنى كلمة Hepato؟', options: ['كبد', 'قلب', 'رئة', 'كلية'], correct: 0 },
    { id: 15, course: 'med_terms', question: 'ما معنى كلمة Nephro؟', options: ['كلية', 'مثانة', 'حالب', 'إحليل'], correct: 0 }
];

// إضافة 985 سؤالاً آخرين (للتجربة نضيف نسخ مكررة بأرقام مختلفة)
for (let i = 16; i <= 1000; i++) {
    questionBank.push({
        id: i,
        course: ['biology', 'chemistry', 'physics', 'anatomy', 'physiology', 'biochemistry', 'med_terms'][Math.floor(Math.random() * 7)],
        question: `سؤال رقم ${i} - هذا سؤال تجريبي للمكتبة`,
        options: ['خيار 1', 'خيار 2', 'خيار 3', 'خيار 4'],
        correct: Math.floor(Math.random() * 4)
    });
}

// ========== نظام الاختبارات العشوائية ==========
const ExamSystem = {
    getRandomQuestions(courseKey = null, count = 15) {
        let filtered = courseKey 
            ? questionBank.filter(q => q.course === courseKey)
            : [...questionBank];
        
        // خلط عشوائي باستخدام Fisher-Yates
        for (let i = filtered.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
        }
        
        return filtered.slice(0, count);
    },
    
    startExam(courseKey = null) {
        const questions = this.getRandomQuestions(courseKey, 15);
        showExamPage(questions);
    }
};

// ========== نظام الإحصائيات ==========
const StatisticsSystem = {
    trackView(type, id) {
        let stats = JSON.parse(localStorage.getItem('content_stats') || '{}');
        if (!stats[type]) stats[type] = {};
        if (!stats[type][id]) stats[type][id] = { views: 0, lastViewed: null };
        stats[type][id].views++;
        stats[type][id].lastViewed = Date.now();
        localStorage.setItem('content_stats', JSON.stringify(stats));
    },
    
    getMostViewed(type, limit = 5) {
        const stats = JSON.parse(localStorage.getItem('content_stats') || '{}');
        if (!stats[type]) return [];
        
        return Object.entries(stats[type])
            .sort((a, b) => b[1].views - a[1].views)
            .slice(0, limit)
            .map(([id, data]) => ({ id, ...data }));
    },
    
    getCourseStats() {
        const result = [];
        Object.keys(courses).forEach(key => {
            const course = courses[key];
            const views = StatisticsSystem.getMostViewed('course').find(v => v.id === key)?.views || 0;
            result.push({
                key,
                title: course.title,
                views,
                booksCount: course.books.length,
                lecturesCount: course.lectures.length
            });
        });
        return result.sort((a, b) => b.views - a.views);
    }
};

// ========== نظام الإشعارات الديناميكي ==========
const DynamicNotificationSystem = {
    notifications: [],
    
    init() {
        this.loadFromServer();
        setInterval(() => this.loadFromServer(), 3600000); // كل ساعة
    },
    
    loadFromServer() {
        // في الواقع، هنا يجب جلب الإشعارات من الخادم
        // حالياً نستخدم بيانات تجريبية
        this.notifications = [
            {
                id: Date.now(),
                title: '📚 محتوى جديد',
                message: 'تم إضافة كتاب جديد لمادة الأحياء',
                date: new Date().toISOString(),
                link: '#course-biology-books'
            },
            {
                id: Date.now() + 1,
                title: '🎥 محاضرة جديدة',
                message: 'تم إضافة محاضرة جديدة لمادة الكيمياء',
                date: new Date().toISOString(),
                link: '#course-chemistry-lectures'
            }
        ];
        
        this.showIfNew();
    },
    
    showIfNew() {
        const lastShown = localStorage.getItem('last_notification_shown');
        const latest = this.notifications[0];
        
        if (latest && latest.id.toString() !== lastShown) {
            this.showNotification(latest);
            localStorage.setItem('last_notification_shown', latest.id.toString());
        }
    },
    
    showNotification(notification) {
        const notif = document.createElement('div');
        notif.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gradient-1);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            animation: slideDown 0.5s ease;
        `;
        notif.innerHTML = `
            <i class="fas fa-bell" style="color: var(--gold);"></i>
            <div>
                <strong>${notification.title}</strong>
                <p style="margin: 5px 0 0; font-size: 0.85rem;">${notification.message}</p>
            </div>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white;">✕</button>
        `;
        notif.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON' && notification.link) {
                window.location.hash = notification.link;
                notif.remove();
            }
        };
        document.body.appendChild(notif);
        
        setTimeout(() => notif.remove(), 10000);
    }
};

// ========== نظام التشويش (Obfuscation) - بسيط ==========
const Obfuscator = {
    obfuscate(text) {
        // تشويش بسيط للعرض
        return btoa(encodeURIComponent(text));
    },
    
    deobfuscate(obfuscated) {
        try {
            return decodeURIComponent(atob(obfuscated));
        } catch {
            return obfuscated;
        }
    }
};

// ========== نظام العمل بدون إنترنت ==========
const OfflineSystem = {
    async cacheContent() {
        if ('caches' in window) {
            const cache = await caches.open('content-cache-v1');
            
            // تخزين الكتب
            Object.keys(courses).forEach(key => {
                courses[key].books.forEach(book => {
                    if (book.link && !book.link.startsWith('#')) {
                        cache.add(book.link).catch(() => {});
                    }
                });
            });
        }
    },
    
    init() {
        this.cacheContent();
        window.addEventListener('online', () => this.syncOfflineActions());
    },
    
    syncOfflineActions() {
        // مزامنة الإجراءات التي تمت دون اتصال
        console.log('Back online, syncing...');
    }
};

// ========== بداية نظام الحماية المحسن ==========

// 1. كشف محاولة فتح أدوات المطور - نسخة محسنة
(function() {
    let devToolsOpen = false;
    let violations = 0;
    
    // كشف تغير حجم النافذة - مع حد أدنى
    function detectDevTools() {
        const widthThreshold = window.outerWidth - window.innerWidth > 200;
        const heightThreshold = window.outerHeight - window.innerHeight > 200;
        
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                violations++;
                if (violations <= 3) showSecurityAlert();
            }
        } else {
            devToolsOpen = false;
        }
    }

    // استخدام debugger بشكل أقل تكراراً
    let debuggerCheck = 0;
    setInterval(function() {
        debuggerCheck++;
        if (debuggerCheck % 10 === 0) { // كل 10 ثوانٍ فقط
            const start = performance.now();
            debugger;
            const end = performance.now();
            
            if (end - start > 100) {
                violations++;
                if (violations <= 3) showSecurityAlert();
            }
        }
    }, 1000);

    // منع اختصارات لوحة المفاتيح
    document.addEventListener('keydown', function(e) {
        const forbidden = [
            e.key === 'F12',
            (e.ctrlKey && e.shiftKey && e.key === 'I'),
            (e.ctrlKey && e.shiftKey && e.key === 'J'),
            (e.ctrlKey && e.key === 'u'),
            (e.ctrlKey && e.key === 's'),
            (e.ctrlKey && e.shiftKey && e.key === 'C')
        ];
        
        if (forbidden.some(v => v)) {
            e.preventDefault();
            violations++;
            if (violations <= 3) showSecurityAlert();
        }
    });

    // منع النقر بالزر الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

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
                background: var(--gradient-1);
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                max-width: 400px;
                box-shadow: var(--shadow-xl);
            ">
                <i class="fas fa-shield-halved" style="font-size: 60px; color: var(--gold); margin-bottom: 20px;"></i>
                <h2 style="color: white; margin-bottom: 15px;">🔒 تنبيه أمني</h2>
                <p style="color: #e0e0e0; margin-bottom: 25px; line-height: 1.8;">
                    هذا الموقع محمي بموجب حقوق الملكية الفكرية.<br>
                    غير مسموح بفتح أدوات المطور.
                </p>
                <button onclick="this.closest('#security-overlay').remove()" style="background: var(--gold); color: var(--text-color); border: none; padding: 10px 30px; border-radius: 30px; cursor: pointer; font-weight: 600;">
                    حسناً
                </button>
            </div>
        `;
        
        document.body.appendChild(overlay);
    }
})();

// ========== نظام التنقل بالروابط ==========

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
    const hash = window.location.hash.substring(1);
    navigateToHash(hash);
});

// دالة التنقل حسب الـ Hash
function navigateToHash(hash) {
    if (!hash || hash === 'dashboard') {
        showDashboard();
    } else if (hash === 'favorites') {
        showFavorites();
    } else if (hash === 'stats') {
        showStatistics();
    } else if (hash.startsWith('exam-')) {
        const courseKey = hash.replace('exam-', '');
        ExamSystem.startExam(courseKey === 'all' ? null : courseKey);
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
            LastVisitedSystem.save(courseKey, tab);
            StatisticsSystem.trackView('course', courseKey);
        } else {
            showDashboard();
        }
    } else {
        showDashboard();
    }
}

function animatePage(html) {
    document.getElementById("main").innerHTML = html;
    
    // التمرير لأعلى الصفحة عند تغيير الصفحة
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // إضافة شريط التنقل السفلي
    addBottomNavigation();
}

// إضافة شريط التنقل السفلي
function addBottomNavigation() {
    if (document.getElementById('bottom-nav')) return;
    
    const nav = document.createElement('div');
    nav.id = 'bottom-nav';
    nav.className = 'bottom-nav';
    
    const currentHash = window.location.hash.substring(1) || 'dashboard';
    
    const items = [
        { hash: 'dashboard', icon: 'fa-home', label: 'الرئيسية' },
        { hash: 'search', icon: 'fa-search', label: 'البحث' },
        { hash: 'favorites', icon: 'fa-star', label: 'المفضلة' },
        { hash: 'stats', icon: 'fa-chart-bar', label: 'الإحصائيات' }
    ];
    
    items.forEach(item => {
        const link = document.createElement('a');
        link.href = `#${item.hash}`;
        link.className = `nav-item ${currentHash === item.hash ? 'active' : ''}`;
        link.innerHTML = `<i class="fas ${item.icon}"></i><span>${item.label}</span>`;
        nav.appendChild(link);
    });
    
    document.body.appendChild(nav);
}

function showDashboard() {
    const lastVisited = LastVisitedSystem.get();
    const lastVisitedHtml = lastVisited && courses[lastVisited.courseKey] ? `
        <div class="card" onclick="window.location.hash='#course-${lastVisited.courseKey}-${lastVisited.tab}'" style="cursor: pointer; margin-bottom: 20px; background: var(--gradient-1); color: white;">
            <i class="fas fa-history" style="color: var(--gold);"></i>
            <h3 style="color: white;">آخر مساق: ${courses[lastVisited.courseKey].title}</h3>
            <span class="code" style="background: rgba(255,255,255,0.2); color: white;">اضغط للمتابعة</span>
        </div>
    ` : '';
    
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

        <!-- شريط البحث المتحرك (واحد فقط) -->
        <div class="search-container">
            <input type="text" class="search-input" id="global-search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." oninput="globalSearch(this.value)" onfocus="showSearchPage()">
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

        ${lastVisitedHtml}

        <div class="card" style="margin-bottom: 20px;" onclick="ExamSystem.startExam()">
            <i class="fas fa-pencil-alt"></i>
            <h3>اختبار عشوائي</h3>
            <span class="code">15 سؤال من 1000</span>
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

        <!-- التوقيع الوحيد في الموقع (بدون تكرار) -->
        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
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

        <!-- شريط البحث المتحرك (واحد فقط) -->
        <div class="search-container">
            <input type="text" class="search-input" id="global-search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." oninput="globalSearch(this.value)" onfocus="showSearchPage()">
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

    html += `</div>

        <!-- التوقيع الوحيد في الموقع (بدون تكرار) -->
        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
        </div>
    `;
    animatePage(html);
}

function showCourse(key, tab) {
    const course = courses[key];
    
    let html = `
        <a href="#semester-${course.semester}" class="back-button" style="display: inline-block; text-decoration: none;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>

        <!-- رابط مجموعة الواتساب -->
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link" style="text-decoration: none;">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم الآن</span>
        </a>

        <!-- شريط البحث المتحرك (واحد فقط) -->
        <div class="search-container">
            <input type="text" class="search-input" id="global-search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." oninput="globalSearch(this.value)" onfocus="showSearchPage()">
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h2 class="course-title" style="margin: 0;">
                <i class="fas ${course.icon}"></i>
                ${course.title}
            </h2>
            <div onclick="FavoritesSystem.add({id: '${key}', type: 'course', title: '${course.title}', icon: '${course.icon}'})" style="cursor: pointer; padding: 8px 15px; background: var(--card-bg); border-radius: 30px; border: 1px solid var(--border-color);">
                <i class="fas fa-star" style="color: ${FavoritesSystem.isFavorite(key) ? 'var(--gold)' : 'var(--text-light)'};"></i>
            </div>
        </div>

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

        <!-- التوقيع الوحيد في الموقع (بدون تكرار) -->
        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
        </div>
    `;

    animatePage(html);
    loadTabContent(key, tab);
}

function loadTabContent(courseKey, type) {
    const tabContent = document.getElementById("tabContent");
    if (!tabContent) return;
    
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
                    <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer" onclick="StatisticsSystem.trackView('book', '${courseKey}-${book.name}')">
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
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer" onclick="StatisticsSystem.trackView('lecture', '${courseKey}-${lecture.name}')">
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
    else if (type === 'exams') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-question-circle"></i>
                    <span>الاختبارات المتاحة</span>
                </div>
                
                <div class="card" onclick="ExamSystem.startExam('${courseKey}')" style="cursor: pointer;">
                    <i class="fas fa-pencil-alt" style="color: var(--gold);"></i>
                    <h3>اختبار عشوائي - ${course.title}</h3>
                    <span class="code">15 سؤال عشوائي من 1000</span>
                </div>
            </div>
        `;
    }
    else {
        const items = {
            summaries: [
                { name: "ملخص الوحدة الأولى", file: "#" },
                { name: "ملخص الوحدة الثانية", file: "#" },
                { name: "ملخص الوحدة الثالثة", file: "#" }
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

    tabContent.innerHTML = html;
}

// صفحة البحث
function showSearchPage() {
    const input = document.getElementById('global-search-input');
    const query = input ? input.value : '';
    
    animatePage(`
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

        <!-- شريط البحث المتحرك -->
        <div class="search-container">
            <input type="text" class="search-input" id="global-search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." value="${query}" oninput="globalSearch(this.value)" autofocus>
        </div>
        
        <h2 class="course-title">
            <i class="fas fa-search"></i>
            اكتب ما تبحث عنه...
        </h2>

        <div class="grid">
            <div class="card" onclick="globalSearch('أحياء')">
                <i class="fas fa-dna"></i>
                <h3>أحياء</h3>
                <span class="code">اقتراح بحث</span>
            </div>
            <div class="card" onclick="globalSearch('كيمياء')">
                <i class="fas fa-flask"></i>
                <h3>كيمياء</h3>
                <span class="code">اقتراح بحث</span>
            </div>
            <div class="card" onclick="globalSearch('تمريض')">
                <i class="fas fa-user-nurse"></i>
                <h3>تمريض</h3>
                <span class="code">اقتراح بحث</span>
            </div>
            <div class="card" onclick="globalSearch('محاضرة')">
                <i class="fas fa-video"></i>
                <h3>محاضرات</h3>
                <span class="code">اقتراح بحث</span>
            </div>
        </div>

        <!-- التوقيع -->
        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
        </div>
    `);
    
    if (query) {
        setTimeout(() => globalSearch(query), 100);
    }
}

// البحث المتقدم والشامل
function advancedSearch(query) {
    query = query.toLowerCase().trim();
    if (!query) return [];
    
    const results = [];
    const seen = new Set();
    
    // البحث في المساقات
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        if (course.title.toLowerCase().includes(query) || 
            course.code.toLowerCase().includes(query)) {
            const id = `course-${key}`;
            if (!seen.has(id)) {
                seen.add(id);
                results.push({
                    id,
                    type: 'course',
                    key: key,
                    title: course.title,
                    code: course.code,
                    icon: course.icon,
                    category: 'مساق'
                });
            }
        }
        
        // البحث في الكتب
        course.books.forEach(book => {
            if (book.name.toLowerCase().includes(query)) {
                const id = `book-${key}-${book.name}`;
                if (!seen.has(id)) {
                    seen.add(id);
                    results.push({
                        id,
                        type: 'book',
                        courseKey: key,
                        courseTitle: course.title,
                        name: book.name,
                        link: book.link,
                        category: 'كتاب'
                    });
                }
            }
        });
        
        // البحث في المحاضرات
        course.lectures.forEach(lecture => {
            if (lecture.name.toLowerCase().includes(query)) {
                const id = `lecture-${key}-${lecture.name}`;
                if (!seen.has(id)) {
                    seen.add(id);
                    results.push({
                        id,
                        type: 'lecture',
                        courseKey: key,
                        courseTitle: course.title,
                        name: lecture.name,
                        link: lecture.link,
                        lectureType: lecture.type,
                        category: 'محاضرة'
                    });
                }
            }
        });
    });
    
    return results;
}

// تعديل دالة البحث
function globalSearch(val) {
    val = val.toLowerCase().trim();
    
    if (!val) {
        showSearchPage();
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

        <!-- شريط البحث المتحرك -->
        <div class="search-container">
            <input type="text" class="search-input" id="global-search-input" placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..." value="${val}" oninput="globalSearch(this.value)" autofocus>
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
            }
        });
        html += '</div>';
    }

    html += `
        <!-- التوقيع الوحيد في الموقع (بدون تكرار) -->
        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
        </div>
    `;

    animatePage(html);
}

// صفحة المفضلة
function showFavorites() {
    const favorites = FavoritesSystem.getAll();
    
    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; text-decoration: none;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>

        <h2 class="course-title">
            <i class="fas fa-star" style="color: var(--gold);"></i>
            المفضلة (${favorites.length})
        </h2>
    `;

    if (favorites.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 30px;">
                <i class="fas fa-star" style="font-size: 3rem; color: var(--text-light);"></i>
                <h3>لا توجد عناصر في المفضلة</h3>
                <p style="color: var(--text-light);">أضف مساقاتك المفضلة بالضغط على النجمة</p>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        favorites.forEach(item => {
            if (item.type === 'course') {
                html += `
                    <div class="favorite-item">
                        <div class="favorite-info" onclick="window.location.hash='#course-${item.id}-books'">
                            <i class="fas ${item.icon}"></i>
                            <div>
                                <h4 style="margin: 0;">${item.title}</h4>
                                <small>مساق</small>
                            </div>
                        </div>
                        <div class="favorite-remove" onclick="FavoritesSystem.remove('${item.id}'); showFavorites()">
                            <i class="fas fa-trash"></i>
                        </div>
                    </div>
                `;
            }
        });
        html += '</div>';
    }

    html += `
        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
        </div>
    `;

    animatePage(html);
}

// صفحة الإحصائيات
function showStatistics() {
    const stats = SessionManager.getStats();
    const courseStats = StatisticsSystem.getCourseStats();
    
    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; text-decoration: none;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>

        <h2 class="course-title">
            <i class="fas fa-chart-bar"></i>
            إحصائيات الموقع
        </h2>

        <div class="stats-grid">
            <div class="stat-card">
                <i class="fas fa-users"></i>
                <div class="stat-value">${stats.uniqueUsers}</div>
                <div class="stat-label">مستخدم فريد</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-user-clock"></i>
                <div class="stat-value">${stats.uniqueSessions}</div>
                <div class="stat-label">جلسة</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-calendar-day"></i>
                <div class="stat-value">${stats.todayVisits}</div>
                <div class="stat-label">زيارة اليوم</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-eye"></i>
                <div class="stat-value">${stats.totalVisits}</div>
                <div class="stat-label">إجمالي الزيارات</div>
            </div>
        </div>

        <h3 style="margin: 20px 0 10px;">أكثر المساقات مشاهدة</h3>
        <div class="grid">
    `;

    courseStats.slice(0, 5).forEach(course => {
        html += `
            <div class="card" onclick="window.location.hash='#course-${course.key}-books'">
                <i class="fas ${courses[course.key].icon}"></i>
                <h4>${course.title}</h4>
                <span class="code">👁️ ${course.views} مشاهدة</span>
            </div>
        `;
    });

    html += `
        </div>

        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
        </div>
    `;

    animatePage(html);
}

// صفحة الاختبار
function showExamPage(questions) {
    let currentQuestion = 0;
    let userAnswers = new Array(questions.length).fill(null);
    
    function renderQuestion() {
        const q = questions[currentQuestion];
        
        let html = `
            <a href="#dashboard" class="back-button" style="display: inline-block; text-decoration: none;">
                <i class="fas fa-arrow-right"></i>
                رجوع
            </a>

            <h2 class="course-title">
                <i class="fas fa-pencil-alt"></i>
                اختبار عشوائي
            </h2>

            <div class="question-box">
                <h4>
                    <span class="question-number">سؤال ${currentQuestion + 1}/${questions.length}</span>
                    ${q.question}
                </h4>
        `;

        q.options.forEach((opt, idx) => {
            const isChecked = userAnswers[currentQuestion] === idx;
            html += `
                <label class="option-item ${isChecked ? 'selected' : ''}">
                    <input type="radio" name="currentQ" value="${idx}" ${isChecked ? 'checked' : ''} onchange="userAnswers[${currentQuestion}] = ${idx}; document.querySelectorAll('.option-item').forEach(i=>i.classList.remove('selected')); this.closest('.option-item').classList.add('selected');">
                    <i class="fas fa-circle" style="color: var(--gold); font-size: 0.6rem; margin-left: 5px;"></i>
                    ${opt}
                </label>
            `;
        });

        html += `
            </div>

            <div class="nav-buttons">
                <button class="btn-prev" onclick="showExamPage(questions, ${currentQuestion - 1})" ${currentQuestion === 0 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-right"></i> السابق
                </button>
                <button class="btn-next" onclick="${currentQuestion === questions.length - 1 ? 'showExamResult(questions, userAnswers)' : `showExamPage(questions, ${currentQuestion + 1})`}">
                    ${currentQuestion === questions.length - 1 ? 'إنهاء' : 'التالي'} <i class="fas fa-arrow-left"></i>
                </button>
            </div>

            <div class="signature">
                <i class="fas fa-crown crown-icon"></i>
                <span class="engineer">المهندس</span>
                <span class="nader">نادر</span>
                <i class="fas fa-code"></i>
                <span>© 2026</span>
            </div>
        `;

        animatePage(html);
    }
    
    // تخزين الدوال في window للوصول إليها من HTML
    window.questions = questions;
    window.userAnswers = userAnswers;
    window.showExamPage = (q, idx) => {
        currentQuestion = idx;
        renderQuestion();
    };
    window.showExamResult = (q, answers) => {
        showExamResult(q, answers);
    };
    
    renderQuestion();
}

function showExamResult(questions, userAnswers) {
    let score = 0;
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) score++;
    });
    
    const percentage = (score / questions.length) * 100;
    
    let gradeClass = '';
    let gradeText = '';
    
    if (percentage >= 90) {
        gradeClass = 'excellent';
        gradeText = 'امتياز';
    } else if (percentage >= 75) {
        gradeClass = 'very-good';
        gradeText = 'جيد جداً';
    } else if (percentage >= 60) {
        gradeClass = 'good';
        gradeText = 'جيد';
    } else if (percentage >= 50) {
        gradeClass = 'good';
        gradeText = 'مقبول';
    } else {
        gradeClass = 'fail';
        gradeText = 'راسب';
    }

    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; text-decoration: none;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>

        <div class="result-card">
            <h2 style="text-align: center; margin-bottom: 20px;">نتيجة الاختبار</h2>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-value" style="color: var(--success);">${score}</div>
                    <div class="stat-label">إجابات صحيحة</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: var(--danger);">${questions.length - score}</div>
                    <div class="stat-label">إجابات خاطئة</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${percentage.toFixed(1)}%</div>
                    <div class="stat-label">النسبة</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value ${gradeClass}" style="font-size: 1.5rem;">${gradeText}</div>
                    <div class="stat-label">التقييم</div>
                </div>
            </div>

            <h3 style="margin: 20px 0;">تفاصيل الإجابات</h3>
            <div style="max-height: 400px; overflow-y: auto;">
                ${questions.map((q, i) => `
                    <div class="content-card" style="flex-direction: column; align-items: flex-start;">
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                            <strong>سؤال ${i+1}:</strong>
                            <span>${q.question.substring(0, 50)}...</span>
                        </div>
                        <div style="display: flex; gap: 20px;">
                            <span style="color: ${userAnswers[i] === q.correct ? 'var(--success)' : 'var(--danger)'}">
                                إجابتك: ${q.options[userAnswers[i]] || 'لم يجب'}
                            </span>
                            <span style="color: var(--success);">
                                الصحيحة: ${q.options[q.correct]}
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="signature">
            <i class="fas fa-crown crown-icon"></i>
            <span class="engineer">المهندس</span>
            <span class="nader">نادر</span>
            <i class="fas fa-code"></i>
            <span>© 2026</span>
        </div>
    `;

    animatePage(html);
}

// نظام إرسال تقارير الزوار إلى تيليجرام (مع إخفاء البيانات الحساسة)
// في الإنتاج، يجب نقل هذا إلى backend
async function sendVisitorReport() {
    // هذه الدالة معطلة حالياً لحماية البوت
    // لتفعيلها، استخدم backend API
    console.log('Visitor tracking disabled for security');
    
    /* التعليق الأصلي للدالة - استخدمها فقط مع backend
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
    */
}

// نظام إدارة المحتوى المحسن (Admin Panel)
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
        // فك التشفير إذا كان مشفراً
        try {
            const decrypted = EncryptionSystem.decrypt(saved);
            this.isLoggedIn = decrypted === true || decrypted === 'true';
        } catch {
            this.isLoggedIn = saved === 'true';
        }
    },
    
    addAdminButton() {
        if (document.getElementById('admin-btn')) return;
        
        const adminBtn = document.createElement('div');
        adminBtn.id = 'admin-btn';
        adminBtn.style.cssText = `
            position: fixed;
            bottom: 80px;
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
        
        if (document.getElementById('admin-panel')) return;
        
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
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إحصائيات سريعة</h3>
                <div style="display: grid; grid-template-columns: repeat(2,1fr); gap: 10px;">
                    <div style="background: var(--hover-bg); padding: 10px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 1.5rem; font-weight: bold;">${Object.keys(courses).length}</div>
                        <div style="font-size: 0.8rem;">مساق</div>
                    </div>
                    <div style="background: var(--hover-bg); padding: 10px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 1.5rem; font-weight: bold;">${questionBank.length}</div>
                        <div style="font-size: 0.8rem;">سؤال</div>
                    </div>
                </div>
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
        if (document.getElementById('admin-login')) return;
        
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
            // تشفير قبل الحفظ
            const encrypted = EncryptionSystem.encrypt(true);
            localStorage.setItem('adminLoggedIn', encrypted);
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
        // نموذج إضافة مساق
        const form = document.createElement('div');
        form.style.cssText = `
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
        `;
        form.innerHTML = `
            <div style="background: var(--card-bg); padding: 30px; border-radius: 20px; width: 90%; max-width: 400px;">
                <h3 style="margin-bottom: 20px;">إضافة مساق جديد</h3>
                <input type="text" id="new-course-title" placeholder="عنوان المساق" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 10px; border: 1px solid var(--border-color);">
                <input type="text" id="new-course-icon" placeholder="أيقونة (مثال: fa-dna)" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 10px; border: 1px solid var(--border-color);">
                <input type="text" id="new-course-code" placeholder="رمز المساق" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 10px; border: 1px solid var(--border-color);">
                <select id="new-course-semester" style="width: 100%; padding: 10px; margin-bottom: 20px; border-radius: 10px;">
                    <option value="1">الفصل الأول</option>
                    <option value="2">الفصل الثاني</option>
                </select>
                <button onclick="AdminSystem.saveCourse()" class="back-button" style="width: 100%;">حفظ</button>
                <button onclick="this.closest('div').closest('div').remove()" style="margin-top: 10px; width: 100%; padding: 8px; background: none; border: 1px solid var(--border-color); border-radius: 10px; cursor: pointer;">إلغاء</button>
            </div>
        `;
        document.body.appendChild(form);
    },
    
    saveCourse() {
        const title = document.getElementById('new-course-title').value;
        const icon = document.getElementById('new-course-icon').value;
        const code = document.getElementById('new-course-code').value;
        const semester = document.getElementById('new-course-semester').value;
        
        if (!title || !icon || !code) {
            alert('❌ جميع الحقول مطلوبة');
            return;
        }
        
        const newKey = title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        
        courses[newKey] = {
            title: title,
            icon: icon,
            code: code,
            semester: parseInt(semester),
            books: [],
            lectures: []
        };
        
        alert('✅ تم إضافة المساق بنجاح');
        location.reload();
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

// تهيئة جميع الأنظمة
SessionManager.init();
FavoritesSystem.init();
DynamicNotificationSystem.init();
OfflineSystem.init();
AdminSystem.init();

// إزالة دالة switchTab غير المستخدمة
// function switchTab(el, courseKey, type) { ... }

// معالجة التحميل الأول للصفحة
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateToHash(hash);
    } else {
        // محاولة استعادة آخر مساق
        if (!LastVisitedSystem.restore()) {
            showDashboard();
        }
    }
    
    // إضافة شريط التنقل
    addBottomNavigation();
});

// بدء التطبيق
// تم التعامل معه في load
