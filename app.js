// ========== نظام الجلسات الفريد والمستقر (تم الإصلاح) ==========
let SESSION_ID = localStorage.getItem("UNIVERSITY_SESSION_ID");
if (!SESSION_ID) {
    SESSION_ID = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("UNIVERSITY_SESSION_ID", SESSION_ID);
}

// نظام تخزين آمن (بدون تعديل localStorage الأصلي)
const SecureStorage = {
    set(key, value) {
        try {
            const data = JSON.stringify(value);
            localStorage.setItem(key, data);
            return true;
        } catch (e) {
            console.warn('Storage failed:', e);
            return false;
        }
    },
    
    get(key, defaultValue = null) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            return defaultValue;
        }
    }
};

// بيانات الجلسة
let userSession = SecureStorage.get(`session_${SESSION_ID}`, {
    id: SESSION_ID,
    lastCourse: null,
    lastTab: 'books',
    favorites: [],
    visitCount: 0,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString()
});

// حفظ الجلسة
function saveSession() {
    SecureStorage.set(`session_${SESSION_ID}`, userSession);
}

// ========== دمج بيانات المساقات ==========
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

// حفظ آخر مساق
function saveLastCourse(courseKey, tab) {
    userSession.lastCourse = courseKey;
    userSession.lastTab = tab;
    userSession.lastVisit = new Date().toISOString();
    saveSession();
}

// استرجاع آخر مساق
function getLastCourse() {
    return userSession;
}

// ========== نظام المفضلة المحسن ==========
const FavoritesSystem = {
    items: userSession.favorites || [],
    
    init() {
        this.renderAllStars();
    },
    
    save() {
        userSession.favorites = this.items;
        saveSession();
        this.renderAllStars();
    },
    
    add(item) {
        if (!this.items.find(i => i.id === item.id)) {
            this.items.push(item);
            this.save();
        }
    },
    
    remove(id) {
        this.items = this.items.filter(i => i.id !== id);
        this.save();
    },
    
    toggle(item) {
        const exists = this.items.find(i => i.id === item.id);
        if (exists) {
            this.remove(item.id);
            return false;
        } else {
            this.add(item);
            return true;
        }
    },
    
    isFavorite(id) {
        return !!this.items.find(i => i.id === id);
    },
    
    renderAllStars() {
        document.querySelectorAll('.favorite-star').forEach(star => {
            const id = star.getAttribute('data-id');
            if (this.isFavorite(id)) {
                star.classList.add('active');
                star.innerHTML = '<i class="fas fa-star"></i>';
            } else {
                star.classList.remove('active');
                star.innerHTML = '<i class="far fa-star"></i>';
            }
        });
    }
};

// ========== نظام الإحصائيات المحسن ==========
const StatisticsSystem = {
    views: SecureStorage.get('views', {}),
    
    incrementView(type, id) {
        const key = `${type}_${id}`;
        this.views[key] = (this.views[key] || 0) + 1;
        SecureStorage.set('views', this.views);
    },
    
    getMostViewed(type, limit = 5) {
        const items = [];
        Object.keys(this.views).forEach(key => {
            if (key.startsWith(type)) {
                items.push({
                    id: key.replace(`${type}_`, ''),
                    count: this.views[key]
                });
            }
        });
        return items.sort((a, b) => b.count - a.count).slice(0, limit);
    },
    
    getTotalVisitors() {
        return Object.keys(localStorage).filter(key => key.startsWith('session_')).length;
    },
    
    getTotalViews() {
        return Object.values(this.views).reduce((a, b) => a + b, 0);
    }
};

// ========== إضافة CSS محسن ==========
const style = document.createElement('style');
style.textContent = `
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
        --shadow-sm: 0 2px 8px var(--shadow-color);
        --shadow-md: 0 4px 12px var(--shadow-color);
        --shadow-lg: 0 8px 24px var(--shadow-color);
        --shadow-xl: 0 16px 32px var(--shadow-color);
        --input-bg: rgba(255, 255, 255, 0.95);
        --bottom-nav-bg: rgba(255, 255, 255, 0.98);
    }
    
    body {
        background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
        color: var(--text-color);
        font-family: 'Cairo', sans-serif;
        margin: 0;
        padding: 20px 20px 80px 20px;
        min-height: 100vh;
    }
    
    /* ===== شريط البحث الثابت والمتحرك مع التمرير ===== */
    .search-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 15px 20px;
        border-radius: 20px;
        margin-bottom: 20px;
        box-shadow: var(--shadow-md);
        border: 1px solid rgba(255,255,255,0.3);
        transition: all 0.3s ease;
    }
    
    .search-header.scrolled {
        padding: 10px 20px;
        background: rgba(255, 255, 255, 0.98);
    }
    
    .search-container {
        width: 100%;
    }
    
    .search-input {
        width: 100%;
        padding: 12px 20px;
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
    
    /* ===== شريط التنقل السفلي المحسن ===== */
    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: var(--bottom-nav-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 8px 5px;
        box-shadow: 0 -4px 12px var(--shadow-color);
        z-index: 1000;
        border-top: 1px solid rgba(255,255,255,0.3);
    }
    
    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: var(--text-color);
        font-size: 0.75rem;
        padding: 5px 10px;
        border-radius: 30px;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .nav-item i {
        font-size: 1.3rem;
        margin-bottom: 3px;
        transition: all 0.3s ease;
    }
    
    .nav-item span {
        font-size: 0.7rem;
    }
    
    .nav-item.active {
        color: var(--primary-color);
        background: rgba(74, 144, 226, 0.1);
    }
    
    .nav-item.active i {
        color: var(--primary-color);
    }
    
    /* ===== أيقونة الإعدادات (Admin) ===== */
    .settings-icon {
        position: relative;
        cursor: pointer;
    }
    
    .settings-icon i {
        font-size: 1.3rem;
        color: var(--text-color);
        transition: all 0.3s ease;
    }
    
    .settings-icon:hover i {
        color: var(--primary-color);
        transform: rotate(90deg);
    }
    
    /* ===== تنسيق البطاقات والأيقونات بحجم متوسط ===== */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .card {
        background: var(--card-bg);
        border-radius: 20px;
        padding: 15px;
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: all 0.3s ease;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        background: var(--hover-bg);
    }
    
    .card i {
        font-size: 2rem !important;
        color: var(--primary-color);
        transition: all 0.3s ease;
    }
    
    .card h3 {
        color: var(--text-color);
        font-size: 1.1rem;
        font-weight: 600;
        margin: 5px 0;
    }
    
    .card .code {
        font-size: 0.85rem;
    }
    
    /* ===== تنسيق أيقونات الروابط ===== */
    .book-button {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 15px;
        background: var(--card-bg);
        border-radius: 12px;
        margin-bottom: 10px;
        text-decoration: none;
        color: var(--text-color);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: var(--shadow-sm);
        backdrop-filter: blur(5px);
    }
    
    .book-button:hover {
        background: var(--hover-bg);
        transform: translateX(-5px);
        box-shadow: var(--shadow-md);
        border-color: var(--primary-light);
    }
    
    .book-button i {
        font-size: 1.3rem !important;
        min-width: 24px;
    }
    
    .book-button span {
        flex: 1;
        font-size: 0.95rem;
    }
    
    .click-here {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        white-space: nowrap;
    }
    
    .click-here i {
        color: white !important;
        font-size: 0.7rem !important;
        margin-left: 3px;
    }
    
    /* ===== تنسيق أيقونات التبويبات ===== */
    .tabs {
        display: flex;
        gap: 8px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .tab {
        background: var(--card-bg);
        padding: 8px 16px;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
        border: 1px solid var(--border-color);
        color: var(--text-color);
        font-size: 0.9rem;
        backdrop-filter: blur(5px);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }
    
    .tab i {
        font-size: 1rem !important;
    }
    
    .tab.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
    }
    
    .tab.active i {
        color: white !important;
    }
    
    /* ===== تنسيق أزرار إضافة المحتوى (مستطيل أنيق) ===== */
    .add-content-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: rgba(74, 144, 226, 0.1);
        border: 2px dashed var(--primary-color);
        border-radius: 12px;
        padding: 12px 20px;
        color: var(--primary-color);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin: 10px 0;
    }
    
    .add-content-btn:hover {
        background: rgba(74, 144, 226, 0.2);
        transform: translateY(-2px);
    }
    
    .add-content-btn i {
        font-size: 1.1rem !important;
    }
    
    /* ===== تنسيق صفحة الإحصائيات ===== */
    .stat-card {
        background: var(--card-bg);
        border-radius: 15px;
        padding: 15px;
        text-align: center;
        box-shadow: var(--shadow-sm);
    }
    
    .stat-card i {
        font-size: 1.8rem !important;
        color: var(--primary-color);
        margin-bottom: 5px;
    }
    
    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--primary-color);
        line-height: 1.2;
    }
    
    .stat-label {
        font-size: 0.9rem;
        color: var(--text-light);
    }
    
    /* ===== نجمة المفضلة ===== */
    .favorite-star {
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-block;
    }
    
    .favorite-star i {
        font-size: 1.2rem !important;
        color: var(--gold);
    }
    
    .favorite-star.active i {
        color: var(--gold);
    }
    
    .favorite-star:not(.active) i {
        color: var(--text-light);
    }
    
    /* ===== إهداء الشهيد ===== */
    .martyr-dedication {
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 15px;
        margin: 20px auto;
        max-width: 500px;
        text-align: center;
        box-shadow: var(--shadow-md);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .martyr-name {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--primary-color);
        margin: 5px 0;
    }
    
    /* ===== رابط الواتساب ===== */
    .whatsapp-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 15px;
        background: rgba(37, 211, 102, 0.1);
        border-radius: 12px;
        margin-bottom: 15px;
        text-decoration: none;
        color: var(--text-color);
        border: 1px solid rgba(37, 211, 102, 0.3);
    }
    
    .whatsapp-link i {
        font-size: 1.3rem !important;
        color: var(--whatsapp-color);
    }
    
    .whatsapp-badge {
        background: var(--whatsapp-color);
        color: white;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
    }
    
    /* ===== تنسيقات متجاوبة ===== */
    @media (max-width: 768px) {
        body {
            padding: 10px 10px 70px 10px;
        }
        
        .grid {
            grid-template-columns: 1fr;
            gap: 12px;
        }
        
        .card i {
            font-size: 1.8rem !important;
        }
        
        .card h3 {
            font-size: 1rem;
        }
        
        .tabs {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 5px;
        }
        
        .tab {
            white-space: nowrap;
        }
        
        .book-button {
            padding: 10px 12px;
        }
        
        .book-button i {
            font-size: 1.1rem !important;
        }
        
        .book-button span {
            font-size: 0.85rem;
        }
        
        .nav-item i {
            font-size: 1.2rem;
        }
        
        .nav-item span {
            font-size: 0.65rem;
        }
    }
`;

document.head.appendChild(style);

// ========== نظام الحماية ==========
(function() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
        }
    });
})();

// ========== نظام إدارة المحتوى (Admin Panel) ==========
const AdminSystem = {
    isLoggedIn: SecureStorage.get('adminLoggedIn', false),
    
    init() {
        this.addSettingsButton();
    },
    
    addSettingsButton() {
        const existing = document.querySelector('.settings-icon');
        if (existing) return;
        
        const settingsBtn = document.createElement('div');
        settingsBtn.className = 'nav-item settings-icon';
        settingsBtn.innerHTML = '<i class="fas fa-cog"></i><span>الإعدادات</span>';
        settingsBtn.onclick = () => this.showAdminPanel();
        
        // إضافة الزر قبل آخر عنصر في شريط التنقل
        const bottomNav = document.querySelector('.bottom-nav');
        if (bottomNav) {
            bottomNav.insertBefore(settingsBtn, bottomNav.lastElement);
        }
    },
    
    showAdminPanel() {
        if (!this.isLoggedIn) {
            this.showLogin();
            return;
        }
        
        const panel = document.createElement('div');
        panel.className = 'admin-panel';
        panel.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            padding: 25px;
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
                <button onclick="this.closest('.admin-panel').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            
            <div class="add-content-btn" onclick="AdminSystem.showAddCourseForm()">
                <i class="fas fa-plus-circle"></i>
                <span>إضافة مساق جديد</span>
            </div>
            
            <div style="margin-top: 20px;">
                <h3 style="margin-bottom: 10px;">المساقات الحالية</h3>
                <div style="max-height: 300px; overflow-y: auto;">
                    ${Object.keys(courses).map(key => `
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; border-bottom: 1px solid var(--border-color);">
                            <span><i class="fas ${courses[key].icon}" style="color: var(--primary-color);"></i> ${courses[key].title}</span>
                            <button onclick="AdminSystem.deleteCourse('${key}')" style="background: none; border: none; color: var(--danger); cursor: pointer;">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <button onclick="AdminSystem.logout()" class="click-here" style="width: 100%; border: none;">
                    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                </button>
            </div>
        `;
        
        document.body.appendChild(panel);
    },
    
    showLogin() {
        const loginDiv = document.createElement('div');
        loginDiv.className = 'admin-login';
        loginDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            padding: 25px;
            border-radius: 20px;
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            width: 90%;
            max-width: 300px;
        `;
        
        loginDiv.innerHTML = `
            <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 20px;">
                <i class="fas fa-lock"></i> دخول المشرف
            </h2>
            <input type="text" id="admin-user" placeholder="اسم المستخدم" class="search-input" style="margin-bottom: 10px;">
            <input type="password" id="admin-pass" placeholder="كلمة المرور" class="search-input" style="margin-bottom: 20px;">
            <button onclick="AdminSystem.login()" class="click-here" style="width: 100%; border: none;">دخول</button>
            <button onclick="this.closest('.admin-login').remove()" style="margin-top: 10px; width: 100%; padding: 8px; background: none; border: 1px solid var(--border-color); border-radius: 10px; cursor: pointer;">إلغاء</button>
        `;
        
        document.body.appendChild(loginDiv);
    },
    
    login() {
        const user = document.getElementById('admin-user')?.value;
        const pass = document.getElementById('admin-pass')?.value;
        
        // ملاحظة: هذا للمثال فقط - يجب أن يكون في backend حقيقي
        if (user === 'admin' && pass === 'admin123') {
            this.isLoggedIn = true;
            SecureStorage.set('adminLoggedIn', true);
            document.querySelector('.admin-login')?.remove();
            this.showAdminPanel();
        } else {
            alert('❌ خطأ في اسم المستخدم أو كلمة المرور');
        }
    },
    
    logout() {
        this.isLoggedIn = false;
        SecureStorage.set('adminLoggedIn', false);
        document.querySelector('.admin-panel')?.remove();
    },
    
    showAddCourseForm() {
        const form = document.createElement('div');
        form.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--card-bg);
            padding: 25px;
            border-radius: 20px;
            z-index: 10001;
            width: 90%;
            max-width: 400px;
        `;
        
        form.innerHTML = `
            <h3 style="margin-bottom: 20px;">إضافة مساق جديد</h3>
            <input type="text" id="new-course-title" placeholder="عنوان المساق" class="search-input" style="margin-bottom: 10px;">
            <input type="text" id="new-course-code" placeholder="رمز المساق" class="search-input" style="margin-bottom: 10px;">
            <select id="new-course-semester" class="search-input" style="margin-bottom: 10px;">
                <option value="1">الفصل الأول</option>
                <option value="2">الفصل الثاني</option>
            </select>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="AdminSystem.saveCourse()" class="click-here" style="flex: 1; border: none;">حفظ</button>
                <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 8px; background: var(--danger); color: white; border: none; border-radius: 30px;">إلغاء</button>
            </div>
        `;
        
        document.body.appendChild(form);
    },
    
    saveCourse() {
        const title = document.getElementById('new-course-title')?.value;
        const code = document.getElementById('new-course-code')?.value;
        const semester = document.getElementById('new-course-semester')?.value;
        
        if (!title || !code) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        const key = title.replace(/\s+/g, '_').toLowerCase();
        
        courses[key] = {
            title: title,
            icon: 'fa-book',
            code: code,
            semester: parseInt(semester),
            books: [],
            lectures: []
        };
        
        alert('✅ تم إضافة المساق');
        document.querySelector('[style*="position: fixed"]')?.remove();
        document.querySelector('.admin-panel')?.remove();
        this.showAdminPanel();
    },
    
    deleteCourse(key) {
        if (confirm(`حذف المساق "${courses[key].title}"؟`)) {
            delete courses[key];
            alert('✅ تم الحذف');
            document.querySelector('.admin-panel')?.remove();
            this.showAdminPanel();
        }
    }
};

// ========== البحث الذكي ==========
function advancedSearch(query) {
    query = query.toLowerCase().trim();
    if (!query) return [];
    
    const results = [];
    const terms = query.split(/\s+/);
    
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        const title = course.title.toLowerCase();
        
        terms.forEach(term => {
            if (title.includes(term)) {
                results.push({
                    type: 'course',
                    key: key,
                    title: course.title,
                    icon: course.icon,
                    category: 'مساق'
                });
            }
        });
        
        course.books?.forEach(book => {
            if (book.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'book',
                    name: book.name,
                    link: book.link,
                    courseTitle: course.title,
                    category: 'كتاب'
                });
            }
        });
        
        course.lectures?.forEach(lecture => {
            if (lecture.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'lecture',
                    name: lecture.name,
                    link: lecture.link,
                    courseTitle: course.title,
                    category: 'محاضرة'
                });
            }
        });
    });
    
    return results.slice(0, 20);
}

// ========== دوال العرض ==========
function showDashboard() {
    const lastCourse = getLastCourse();
    
    const lastCourseHtml = lastCourse.lastCourse && courses[lastCourse.lastCourse] ? `
        <div class="card" style="margin-bottom: 15px;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-history" style="color: var(--gold);"></i>
                <span>آخر زيارة: </span>
                <a href="#course-${lastCourse.lastCourse}-${lastCourse.lastTab}" style="color: var(--primary-color);">
                    <i class="fas ${courses[lastCourse.lastCourse].icon}"></i>
                    ${courses[lastCourse.lastCourse].title}
                </a>
            </div>
        </div>
    ` : '';
    
    animatePage(`
        <h1 class="page-title">جامعة الأقصى</h1>
        
        ${lastCourseHtml}
        
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB" target="_blank" class="whatsapp-link">
            <i class="fab fa-whatsapp"></i>
            <span>انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم</span>
        </a>
        
        <div class="martyr-dedication">
            <i class="fas fa-heart" style="color: var(--danger);"></i>
            <div class="martyr-name">الشهيد ياسر عطيه المصري</div>
            <div style="font-size: 0.9rem;">نسأل الله أن يتقبله في الشهداء</div>
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
    const list = Object.keys(courses).filter(key => courses[key].semester === sem);
    
    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; margin-bottom: 15px;">
            <i class="fas fa-arrow-right"></i> رجوع
        </a>
        <h2 class="course-title">الفصل ${sem === 1 ? 'الأول' : 'الثاني'}</h2>
        <div class="grid">
    `;
    
    list.forEach(key => {
        html += `
            <a href="#course-${key}-books" style="text-decoration: none;">
                <div class="card">
                    <div style="display: flex; justify-content: flex-end; width: 100%;">
                        <span class="favorite-star" data-id="${key}" onclick="event.stopPropagation(); FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${courses[key].title}', icon: '${courses[key].icon}'}); return false;">
                            ${FavoritesSystem.isFavorite(key) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        </span>
                    </div>
                    <i class="fas ${courses[key].icon}"></i>
                    <h3>${courses[key].title}</h3>
                    <span class="code">${courses[key].code}</span>
                </div>
            </a>
        `;
    });
    
    html += '</div>';
    animatePage(html);
}

function showCourse(key, tab) {
    const course = courses[key];
    saveLastCourse(key, tab);
    StatisticsSystem.incrementView('course', key);
    
    let html = `
        <a href="#semester-${course.semester}" class="back-button" style="display: inline-block; margin-bottom: 15px;">
            <i class="fas fa-arrow-right"></i> رجوع
        </a>
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
            <h2 class="course-title" style="margin: 0;">
                <i class="fas ${course.icon}"></i> ${course.title}
            </h2>
            <span class="favorite-star" data-id="${key}" onclick="FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${course.title}', icon: '${course.icon}'}); return false;">
                ${FavoritesSystem.isFavorite(key) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
            </span>
        </div>
        
        <div class="tabs">
            <a href="#course-${key}-books" class="tab ${tab === 'books' ? 'active' : ''}"><i class="fas fa-book"></i> كتب</a>
            <a href="#course-${key}-lectures" class="tab ${tab === 'lectures' ? 'active' : ''}"><i class="fas fa-video"></i> محاضرات</a>
            <a href="#course-${key}-summaries" class="tab ${tab === 'summaries' ? 'active' : ''}"><i class="fas fa-file-alt"></i> ملخصات</a>
            <a href="#course-${key}-exams" class="tab ${tab === 'exams' ? 'active' : ''}"><i class="fas fa-question-circle"></i> اختبارات</a>
        </div>
        
        <div id="tabContent"></div>
    `;
    
    animatePage(html);
    loadTabContent(key, tab);
}

function loadTabContent(courseKey, type) {
    const course = courses[courseKey];
    const tabContent = document.getElementById('tabContent');
    if (!tabContent) return;
    
    let html = '<div class="books-section">';
    
    if (type === 'books') {
        html += '<div class="section-title"><i class="fas fa-book"></i> الكتب الدراسية</div>';
        
        if (course.books?.length) {
            course.books.forEach(book => {
                if (book.coming) {
                    html += `
                        <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')">
                            <i class="fas fa-book-open"></i>
                            <span>${book.name}</span>
                            <div class="click-here"><i class="fas fa-clock"></i> قريباً</div>
                        </div>
                    `;
                } else if (book.link && book.link !== '#') {
                    html += `
                        <a href="${book.link}" class="book-button" target="_blank">
                            <i class="fas fa-book-open"></i>
                            <span>${book.name}</span>
                            <div class="click-here"><i class="fas fa-download"></i> تحميل</div>
                        </a>
                    `;
                }
            });
        } else {
            html += '<div class="content-card">لا توجد كتب متاحة</div>';
        }
    }
    else if (type === 'lectures') {
        html += '<div class="section-title"><i class="fas fa-video"></i> المحاضرات</div>';
        
        if (course.lectures?.length) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank">
                        <i class="fab ${icon}" style="color: ${lecture.type === 'youtube' ? '#FF0000' : '#34A853'};"></i>
                        <span>${lecture.name}</span>
                        <div class="click-here"><i class="fas fa-play"></i> مشاهدة</div>
                    </a>
                `;
            });
        } else {
            html += '<div class="content-card">لا توجد محاضرات</div>';
        }
    }
    else {
        html += `
            <div class="content-card" style="justify-content: center;">
                <i class="fas fa-hourglass-half"></i>
                <span>قريباً</span>
            </div>
        `;
    }
    
    html += '</div>';
    tabContent.innerHTML = html;
}

function showFavorites() {
    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; margin-bottom: 15px;">
            <i class="fas fa-arrow-right"></i> رجوع
        </a>
        <h2 class="course-title"><i class="fas fa-star" style="color: var(--gold);"></i> المفضلة (${FavoritesSystem.items.length})</h2>
    `;
    
    if (FavoritesSystem.items.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 30px;">
                <i class="far fa-star" style="font-size: 2.5rem;"></i>
                <h3>لا توجد عناصر في المفضلة</h3>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        FavoritesSystem.items.forEach(item => {
            if (item.type === 'course' && courses[item.id]) {
                html += `
                    <a href="#course-${item.id}-books" style="text-decoration: none;">
                        <div class="card">
                            <i class="fas ${item.icon}"></i>
                            <h3>${item.title}</h3>
                            <span class="code">${courses[item.id].code}</span>
                        </div>
                    </a>
                `;
            }
        });
        html += '</div>';
    }
    
    animatePage(html);
}

function showStatistics() {
    const mostViewed = StatisticsSystem.getMostViewed('course');
    
    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block; margin-bottom: 15px;">
            <i class="fas fa-arrow-right"></i> رجوع
        </a>
        <h2 class="course-title"><i class="fas fa-chart-bar"></i> إحصائيات</h2>
        
        <div class="grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="stat-card">
                <i class="fas fa-users"></i>
                <div class="stat-value" id="stat-visitors">0</div>
                <div class="stat-label">الزوار</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-eye"></i>
                <div class="stat-value">${StatisticsSystem.getTotalViews()}</div>
                <div class="stat-label">المشاهدات</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-star"></i>
                <div class="stat-value">${FavoritesSystem.items.length}</div>
                <div class="stat-label">المفضلة</div>
            </div>
        </div>
        
        <div class="books-section" style="margin-top: 20px;">
            <div class="section-title"><i class="fas fa-trophy"></i> الأكثر مشاهدة</div>
    `;
    
    if (mostViewed.length) {
        mostViewed.forEach((item, i) => {
            const course = courses[item.id];
            if (course) {
                html += `
                    <div class="content-card">
                        <span>#${i+1} <i class="fas ${course.icon}"></i> ${course.title}</span>
                        <span class="code">${item.count} مشاهدة</span>
                    </div>
                `;
            }
        });
    } else {
        html += '<div class="content-card">لا توجد بيانات</div>';
    }
    
    html += '</div>';
    animatePage(html);
    
    // تحديث عداد الزوار
    setTimeout(() => {
        const visitors = StatisticsSystem.getTotalVisitors();
        document.getElementById('stat-visitors').textContent = visitors;
    }, 100);
}

function showSearchResults(query) {
    const results = advancedSearch(query);
    
    let html = `
        <a href="#" onclick="window.history.back(); return false;" class="back-button" style="display: inline-block; margin-bottom: 15px;">
            <i class="fas fa-arrow-right"></i> رجوع
        </a>
        <h2 class="course-title">نتائج البحث عن "${query}" (${results.length})</h2>
    `;
    
    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 30px;">
                <i class="fas fa-search" style="font-size: 2rem;"></i>
                <h3>لا توجد نتائج</h3>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        results.forEach(result => {
            if (result.type === 'course') {
                html += `
                    <a href="#course-${result.key}-books" style="text-decoration: none;">
                        <div class="card">
                            <i class="fas ${result.icon}"></i>
                            <h3>${result.title}</h3>
                            <span class="code">${result.category}</span>
                        </div>
                    </a>
                `;
            } else {
                html += `
                    <a href="${result.link}" target="_blank" style="text-decoration: none;">
                        <div class="card">
                            <i class="fas fa-${result.type === 'book' ? 'book' : 'video'}"></i>
                            <h3 style="font-size: 0.9rem;">${result.name}</h3>
                            <span class="code">${result.category} - ${result.courseTitle}</span>
                        </div>
                    </a>
                `;
            }
        });
        html += '</div>';
    }
    
    animatePage(html);
}

function showNotFound() {
    animatePage(`
        <div class="card" style="text-align: center; padding: 40px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--warning);"></i>
            <h2>الصفحة غير موجودة</h2>
            <a href="#dashboard" class="back-button" style="display: inline-block; margin-top: 20px;">الرئيسية</a>
        </div>
    `);
}

// ========== دوال مساعدة ==========
function animatePage(html) {
    const main = document.getElementById('main');
    if (main) {
        main.innerHTML = html;
    }
    FavoritesSystem.renderAllStars();
    updateActiveNav();
}

function updateActiveNav() {
    const hash = window.location.hash.substring(1) || 'dashboard';
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('i').className;
        if ((hash === 'dashboard' && icon.includes('fa-home')) ||
            (hash === 'favorites' && icon.includes('fa-star')) ||
            (hash === 'statistics' && icon.includes('fa-chart-bar')) ||
            (icon.includes('fa-cog'))) {
            item.classList.add('active');
        }
    });
}

// ========== معالجة التمرير لتغيير حجم البحث ======
window.addEventListener('scroll', () => {
    const header = document.querySelector('.search-header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ========== معالجة البحث ==========
let searchTimeout;
function handleSearchInput(value) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (value.trim()) {
            window.location.hash = 'search';
            showSearchResults(value);
        }
    }, 300);
}

// ========== معالجة تغيير الـ Hash ==========
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    
    if (!hash || hash === 'dashboard') {
        showDashboard();
    } else if (hash.startsWith('semester-')) {
        const sem = parseInt(hash.split('-')[1]);
        showSemester(sem);
    } else if (hash.startsWith('course-')) {
        const parts = hash.split('-');
        showCourse(parts[1], parts[2] || 'books');
    } else if (hash === 'favorites') {
        showFavorites();
    } else if (hash === 'statistics') {
        showStatistics();
    } else if (hash === 'search') {
        const searchInput = document.getElementById('global-search-input');
        if (searchInput?.value.trim()) {
            showSearchResults(searchInput.value);
        } else {
            showDashboard();
        }
    } else {
        showNotFound();
    }
});

// ========== بناء الصفحة ==========
function createAppStructure() {
    const app = document.createElement('div');
    app.innerHTML = `
        <header class="search-header">
            <div class="search-container">
                <input type="text" id="global-search-input" class="search-input" 
                    placeholder="🔍 ابحث عن مساق، كتاب، أو محاضرة..."
                    oninput="handleSearchInput(this.value)">
            </div>
        </header>
        
        <main id="main"></main>
        
        <nav class="bottom-nav">
            <div class="nav-item" onclick="window.location.hash='dashboard'">
                <i class="fas fa-home"></i>
                <span>الرئيسية</span>
            </div>
            <div class="nav-item" onclick="document.getElementById('global-search-input').focus()">
                <i class="fas fa-search"></i>
                <span>بحث</span>
            </div>
            <div class="nav-item" onclick="window.location.hash='favorites'">
                <i class="fas fa-star"></i>
                <span>المفضلة</span>
            </div>
            <div class="nav-item" onclick="window.location.hash='statistics'">
                <i class="fas fa-chart-bar"></i>
                <span>الإحصائيات</span>
            </div>
        </nav>
    `;
    
    document.body.appendChild(app);
}

// ========== تهيئة الموقع ==========
createAppStructure();
FavoritesSystem.init();
AdminSystem.init();

// عرض الصفحة الرئيسية
if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
} else {
    showDashboard();
}
