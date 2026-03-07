// ========== البيانات الافتراضية للمساقات ==========
const defaultCourses = {
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

// ========== تحميل المساقات من localStorage أو استخدام البيانات الافتراضية ==========
let courses = JSON.parse(localStorage.getItem("courses")) || defaultCourses;

// ========== حفظ المساقات في localStorage ==========
function saveCourses() {
    localStorage.setItem("courses", JSON.stringify(courses));
}

// ========== نظام الجلسات المستقر (تم الإصلاح) ==========
let SESSION_ID = localStorage.getItem("UNIVERSITY_SESSION_ID");
if (!SESSION_ID) {
    SESSION_ID = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("UNIVERSITY_SESSION_ID", SESSION_ID);
}

// نظام تخزين آمن (بدون تعديل localStorage الأصلي)
const SecureStorage = {
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
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

// نظام المفضلة المحسن
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
    
    toggle(item) {
        const exists = this.items.find(i => i.id === item.id);
        if (exists) {
            this.items = this.items.filter(i => i.id !== item.id);
        } else {
            this.items.push(item);
        }
        this.save();
        return !exists;
    },
    
    isFavorite(id) {
        return !!this.items.find(i => i.id === id);
    },
    
    renderAllStars() {
        document.querySelectorAll('.favorite-star').forEach(star => {
            const id = star.getAttribute('data-id');
            star.innerHTML = this.isFavorite(id) ? 
                '<i class="fas fa-star" style="color: var(--gold);"></i>' : 
                '<i class="far fa-star" style="color: var(--text-light);"></i>';
        });
    }
};

// نظام الإحصائيات
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

// ========== إضافة CSS الموحد (تم دمج جميع الأنماط) ==========
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
        --shadow-sm: 0 2px 8px var(--shadow-color);
        --shadow-md: 0 4px 12px var(--shadow-color);
        --shadow-lg: 0 8px 24px var(--shadow-color);
        --shadow-xl: 0 16px 32px var(--shadow-color);
        --bottom-nav-bg: rgba(255, 255, 255, 0.98);
    }
    
    body {
        background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
        color: var(--text-color);
        font-family: 'Cairo', sans-serif;
        margin: 0;
        padding: 0 20px 80px 20px;
        min-height: 100vh;
    }
    
    /* ===== شريط البحث في الأعلى ===== */
    .search-header {
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        padding: 20px;
        border-radius: 0 0 25px 25px;
        margin-bottom: 25px;
        box-shadow: var(--shadow-md);
        border-bottom: 1px solid rgba(255,255,255,0.3);
        position: sticky;
        top: 0;
        z-index: 1000;
    }
    
    .search-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 15px;
        color: var(--primary-color);
        font-size: 1.5rem;
        font-weight: 700;
    }
    
    .search-title i {
        font-size: 1.8rem;
        color: var(--gold);
    }
    
    .search-box {
        position: relative;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .search-box i {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--primary-color);
        font-size: 1.2rem;
    }
    
    .search-input {
        width: 100%;
        padding: 15px 50px 15px 20px;
        border-radius: 50px;
        border: 2px solid var(--border-color);
        background: white;
        color: var(--text-color);
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
        box-sizing: border-box;
        font-family: 'Cairo', sans-serif;
    }
    
    .search-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 4px var(--shadow-color);
    }
    
    .search-input::placeholder {
        color: var(--text-light);
    }
    
    /* ===== شريط التنقل السفلي ===== */
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
        padding: 10px 5px;
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
        background: none;
        border: none;
        font-family: 'Cairo', sans-serif;
    }
    
    .nav-item i {
        font-size: 1.3rem;
        margin-bottom: 3px;
    }
    
    .nav-item.active {
        color: var(--primary-color);
        background: rgba(74, 144, 226, 0.1);
    }
    
    .nav-item.active i {
        color: var(--primary-color);
    }
    
    /* ===== نجمة المفضلة ===== */
    .favorite-star {
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-block;
    }
    
    .favorite-star:hover {
        transform: scale(1.2);
    }
    
    /* ===== البطاقات ===== */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .card {
        background: var(--card-bg);
        border-radius: 20px;
        padding: 20px;
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: all 0.3s ease;
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.3);
        backdrop-filter: blur(10px);
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        background: var(--hover-bg);
    }
    
    .card i {
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 10px;
    }
    
    .card h3 {
        margin: 10px 0;
        font-size: 1.2rem;
        color: var(--text-color);
    }
    
    .code {
        display: inline-block;
        background: rgba(74,144,226,0.1);
        padding: 5px 15px;
        border-radius: 25px;
        font-size: 0.9rem;
        color: var(--primary-color);
    }
    
    /* ===== رابط الواتساب ===== */
    .whatsapp-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        background: rgba(37,211,102,0.1);
        border-radius: 15px;
        margin-bottom: 15px;
        text-decoration: none;
        color: var(--text-color);
        border: 1px solid rgba(37,211,102,0.3);
        transition: all 0.3s ease;
    }
    
    .whatsapp-link:hover {
        background: rgba(37,211,102,0.2);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(37,211,102,0.2);
    }
    
    .whatsapp-link i {
        font-size: 1.4rem;
        color: var(--whatsapp-color);
    }
    
    .whatsapp-badge {
        background: var(--whatsapp-color);
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
    }
    
    /* ===== إهداء الشهيد ===== */
    .martyr-dedication {
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 20px;
        margin: 20px 0;
        text-align: center;
        border: 1px solid rgba(255,255,255,0.3);
        box-shadow: var(--shadow-md);
    }
    
    .martyr-name {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--primary-color);
        margin: 10px 0;
    }
    
    /* ===== أزرار الفصول ===== */
    .semester-buttons {
        display: flex;
        gap: 15px;
        margin: 20px 0;
    }
    
    .semester-btn {
        flex: 1;
        padding: 15px;
        border-radius: 15px;
        border: none;
        background: var(--card-bg);
        color: var(--text-color);
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: var(--shadow-md);
        border: 1px solid rgba(255,255,255,0.3);
        backdrop-filter: blur(10px);
        font-family: 'Cairo', sans-serif;
    }
    
    .semester-btn:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-lg);
        background: var(--primary-color);
        color: white;
    }
    
    .semester-btn i {
        margin-left: 8px;
    }
    
    /* ===== التبويبات ===== */
    .tabs {
        display: flex;
        gap: 10px;
        margin: 20px 0;
        flex-wrap: wrap;
    }
    
    .tab {
        background: var(--card-bg);
        padding: 8px 16px;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid var(--border-color);
        color: var(--text-color);
        text-decoration: none;
        font-size: 0.9rem;
    }
    
    .tab:hover {
        background: var(--primary-light);
        color: white;
    }
    
    .tab.active {
        background: var(--primary-color);
        color: white;
    }
    
    /* ===== أزرار الكتب ===== */
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
        border: 1px solid rgba(255,255,255,0.2);
    }
    
    .book-button:hover {
        background: var(--hover-bg);
        transform: translateX(-5px);
        box-shadow: var(--shadow-md);
    }
    
    .book-button i {
        font-size: 1.3rem;
        min-width: 24px;
    }
    
    .click-here {
        margin-right: auto;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
    }
    
    /* ===== أزرار الرجوع ===== */
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
        display: inline-block;
        text-decoration: none;
        font-family: 'Cairo', sans-serif;
    }
    
    .back-button:hover {
        transform: translateX(-5px);
        box-shadow: var(--shadow-lg);
    }
    
    /* ===== أقسام الكتب ===== */
    .books-section {
        background: var(--card-bg);
        border-radius: 25px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(255,255,255,0.3);
        backdrop-filter: blur(10px);
        margin-bottom: 20px;
    }
    
    .section-title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        color: var(--text-color);
        font-size: 1.3rem;
        border-bottom: 2px solid rgba(74,144,226,0.2);
        padding-bottom: 12px;
    }
    
    /* ===== تحسينات لوحة التحكم ===== */
    .admin-section {
        margin: 15px 0;
        padding: 10px;
        background: rgba(255,255,255,0.5);
        border-radius: 10px;
    }
    
    .admin-btn {
        width: 100%;
        padding: 12px;
        margin: 5px 0;
        border: none;
        border-radius: 10px;
        background: var(--primary-color);
        color: white;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-family: 'Cairo', sans-serif;
    }
    
    .admin-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
    }
    
    .admin-btn.delete {
        background: var(--danger);
    }
    
    .course-edit-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        margin: 5px 0;
        background: white;
        border-radius: 8px;
        border: 1px solid var(--border-color);
    }
    
    .edit-actions {
        display: flex;
        gap: 5px;
    }
    
    .edit-actions .edit {
        background: var(--info);
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .edit-actions .delete {
        background: var(--danger);
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
    }
    
    /* ===== نماذج الإدخال ===== */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-content {
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        padding: 25px;
        border-radius: 20px;
        width: 90%;
        max-width: 450px;
        box-shadow: var(--shadow-xl);
        border: 1px solid rgba(255,255,255,0.3);
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .modal-content h3 {
        color: var(--primary-color);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .modal-content input,
    .modal-content select {
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
        border-radius: 10px;
        border: 1px solid var(--border-color);
        background: white;
        font-family: 'Cairo', sans-serif;
        box-sizing: border-box;
    }
    
    .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }
    
    .modal-actions button {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 30px;
        cursor: pointer;
        font-weight: 600;
        font-family: 'Cairo', sans-serif;
    }
    
    .modal-actions .save {
        background: var(--primary-color);
        color: white;
    }
    
    .modal-actions .cancel {
        background: var(--danger);
        color: white;
    }
    
    /* ===== التوقيع ===== */
    .site-footer {
        text-align: center;
        margin-top: 40px;
        padding: 20px;
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.3);
    }
    
    .footer-title {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 10px;
    }
    
    .footer-signature {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 10px 0;
    }
    
    .footer-signature .nader {
        color: var(--primary-color);
        font-weight: 700;
        font-size: 1.3rem;
    }
    
    /* ===== مؤشر التحميل ===== */
    .loading-spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
    }
    
    .loading-spinner i {
        font-size: 2rem;
        color: var(--primary-color);
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    /* ===== رسائل الخطأ ===== */
    .error-message {
        background: rgba(231, 76, 60, 0.1);
        border: 1px solid var(--danger);
        color: var(--danger);
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        margin: 20px 0;
    }
    
    /* ===== تنسيقات متجاوبة ===== */
    @media (max-width: 768px) {
        body {
            padding: 0 10px 70px 10px;
        }
        
        .grid {
            grid-template-columns: 1fr;
        }
        
        .semester-buttons {
            flex-direction: column;
        }
        
        .search-title {
            font-size: 1.2rem;
        }
        
        .search-title i {
            font-size: 1.5rem;
        }
        
        .card i {
            font-size: 1.8rem;
        }
        
        .nav-item i {
            font-size: 1.2rem;
        }
    }
`;

document.head.appendChild(style);

// ========== نظام الحماية المبسط ==========
(function() {
    // منع اختصارات لوحة المفاتيح الأساسية فقط
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
        }
    });

    // منع النقر بالزر الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
})();

// ========== نظام التنقل ==========
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

function handleRoute() {
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
    } else if (hash.startsWith('search-')) {
        const query = decodeURIComponent(hash.substring(7));
        showSearchResults(query);
    } else {
        showNotFound();
    }
    
    updateActiveNav();
}

// صفحة غير موجودة
function showNotFound() {
    animatePage(`
        <div class="card" style="text-align: center; padding: 50px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--warning); margin-bottom: 20px;"></i>
            <h2>الصفحة غير موجودة</h2>
            <p style="margin: 20px 0; color: var(--text-light);">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
            <button class="back-button" onclick="window.location.hash='dashboard'">العودة للرئيسية</button>
        </div>
    `);
}

// ========== نظام الإشعارات المبسط ==========
const NotificationSystem = {
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: ${type === 'success' ? 'var(--success)' : type === 'error' ? 'var(--danger)' : 'var(--primary-color)'};
            color: white;
            padding: 12px 25px;
            border-radius: 50px;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.95rem;
            direction: rtl;
        `;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; margin-right: 10px;">✕</button>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), 3000);
    }
};

// ========== نظام تنبيه الاختبارات المبسط ==========
const ExamAlertSystem = {
    exams: SecureStorage.get('exams', [
        { name: '📝 اختبار الأحياء', date: '2024-12-20', time: '10:00' },
        { name: '🧪 اختبار الكيمياء', date: '2024-12-22', time: '11:00' }
    ]),
    
    save() {
        SecureStorage.set('exams', this.exams);
    }
};

// ========== نظام البحث ==========
function searchCourses(query) {
    query = query.toLowerCase().trim();
    if (!query) return [];
    
    const results = [];
    const terms = query.split(/\s+/);
    
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        let score = 0;
        
        // البحث في عنوان المساق
        terms.forEach(term => {
            if (course.title.toLowerCase().includes(term)) score += 3;
            if (course.code.toLowerCase().includes(term)) score += 2;
        });
        
        if (score > 0) {
            results.push({
                type: 'course',
                key: key,
                title: course.title,
                icon: course.icon,
                code: course.code,
                score: score
            });
        }
        
        // البحث في الكتب
        course.books?.forEach(book => {
            if (book.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'book',
                    name: book.name,
                    link: book.link,
                    courseTitle: course.title,
                    score: 2
                });
            }
        });
        
        // البحث في المحاضرات
        course.lectures?.forEach(lecture => {
            if (lecture.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'lecture',
                    name: lecture.name,
                    link: lecture.link,
                    courseTitle: course.title,
                    lectureType: lecture.type,
                    score: 2
                });
            }
        });
    });
    
    return results.sort((a, b) => b.score - a.score);
}

let searchTimeout;
function handleSearch(value) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (value.trim()) {
            window.location.hash = 'search-' + encodeURIComponent(value);
        }
    }, 300);
}

function showSearchResults(query) {
    const results = searchCourses(query);
    
    let html = `
        <button class="back-button" onclick="window.history.back()">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        
        <div class="search-title" style="margin: 20px 0;">
            <i class="fas fa-search"></i>
            <span>نتائج البحث عن "${query}" (${results.length})</span>
            <i class="fas fa-search"></i>
        </div>
    `;
    
    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 20px;"></i>
                <h3>لا توجد نتائج</h3>
                <p style="color: var(--text-light);">جرب كلمات بحث أخرى</p>
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
                            <span class="code">${result.code}</span>
                        </div>
                    </a>
                `;
            } else if (result.type === 'book') {
                html += `
                    <a href="${result.link}" target="_blank" style="text-decoration: none;">
                        <div class="card">
                            <i class="fas fa-book-open"></i>
                            <h3>${result.name}</h3>
                            <span class="code">📖 ${result.courseTitle}</span>
                        </div>
                    </a>
                `;
            } else if (result.type === 'lecture') {
                const icon = result.lectureType === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                html += `
                    <a href="${result.link}" target="_blank" style="text-decoration: none;">
                        <div class="card">
                            <i class="fab ${icon}" style="color: ${result.lectureType === 'youtube' ? '#FF0000' : '#34A853'};"></i>
                            <h3>${result.name}</h3>
                            <span class="code">🎥 ${result.courseTitle}</span>
                        </div>
                    </a>
                `;
            }
        });
        html += '</div>';
    }
    
    animatePage(html);
}

// ========== نظام إدارة المحتوى (Admin Panel) ==========
const AdminSystem = {
    // استخدام كلمة مرور مشفرة بشكل بسيط
    adminHash: btoa('admin:admin123'),
    isLoggedIn: false,
    panelElement: null,
    
    init() {
        this.checkLogin();
        this.addAdminButton();
    },
    
    checkLogin() {
        this.isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    },
    
    addAdminButton() {
        if (document.getElementById('admin-btn')) return;
        
        this.adminButton = document.createElement('button');
        this.adminButton.id = 'admin-btn';
        this.adminButton.className = 'nav-item';
        this.adminButton.innerHTML = '<i class="fas fa-cog"></i><span>الإعدادات</span>';
        this.adminButton.onclick = () => this.showAdminPanel();
        
        // إضافة الزر إلى شريط التنقل
        const bottomNav = document.querySelector('.bottom-nav');
        if (bottomNav) {
            bottomNav.appendChild(this.adminButton);
        }
    },
    
    showAdminPanel() {
        if (!this.isLoggedIn) {
            this.showLogin();
            return;
        }
        
        if (this.panelElement) {
            this.panelElement.remove();
        }
        
        this.panelElement = document.createElement('div');
        this.panelElement.className = 'modal-overlay';
        this.panelElement.innerHTML = `
            <div class="modal-content" style="max-width: 500px; max-height: 80vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h2><i class="fas fa-cog"></i> لوحة التحكم</h2>
                    <button onclick="this.closest('.modal-overlay').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
                </div>
                
                <div class="admin-section">
                    <h3>إحصاءات الموقع</h3>
                    <div class="grid" style="grid-template-columns: repeat(2, 1fr);">
                        <div class="stat-item">
                            <div class="stat-value" id="admin-stats-visitors">${StatisticsSystem.getTotalVisitors()}</div>
                            <div class="stat-label">الزوار</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" id="admin-stats-views">${StatisticsSystem.getTotalViews()}</div>
                            <div class="stat-label">المشاهدات</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" id="admin-stats-favorites">${FavoritesSystem.items.length}</div>
                            <div class="stat-label">المفضلة</div>
                        </div>
                    </div>
                </div>
                
                <div class="admin-section">
                    <h3>إدارة المساقات</h3>
                    <button onclick="AdminSystem.showAddCourseForm()" class="admin-btn">
                        <i class="fas fa-plus"></i> إضافة مساق جديد
                    </button>
                    <div style="max-height: 200px; overflow-y: auto; margin-top: 10px;">
                        ${Object.keys(courses).map(key => `
                            <div class="course-edit-item">
                                <span><i class="fas ${courses[key].icon}"></i> ${courses[key].title}</span>
                                <div class="edit-actions">
                                    <button class="edit" onclick="AdminSystem.editCourse('${key}')"><i class="fas fa-edit"></i></button>
                                    <button class="delete" onclick="AdminSystem.deleteCourse('${key}')"><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="admin-section">
                    <h3>إدارة الكتب</h3>
                    <button onclick="AdminSystem.showAddBookForm()" class="admin-btn">
                        <i class="fas fa-book"></i> إضافة كتاب جديد
                    </button>
                </div>
                
                <div class="admin-section">
                    <h3>إدارة المحاضرات</h3>
                    <button onclick="AdminSystem.showAddLectureForm()" class="admin-btn">
                        <i class="fas fa-video"></i> إضافة محاضرة جديدة
                    </button>
                </div>
                
                <button onclick="AdminSystem.logout()" class="admin-btn delete" style="margin-top: 20px;">
                    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                </button>
            </div>
        `;
        
        document.body.appendChild(this.panelElement);
    },
    
    showLogin() {
        const loginDiv = document.createElement('div');
        loginDiv.className = 'modal-overlay';
        loginDiv.innerHTML = `
            <div class="modal-content" style="max-width: 350px;">
                <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 20px;">
                    <i class="fas fa-lock"></i> دخول المشرف
                </h2>
                <input type="text" id="admin-user" placeholder="اسم المستخدم">
                <input type="password" id="admin-pass" placeholder="كلمة المرور">
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.login()">دخول</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()">إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(loginDiv);
    },
    
    login() {
        const user = document.getElementById('admin-user')?.value;
        const pass = document.getElementById('admin-pass')?.value;
        
        if (user === 'admin' && pass === 'admin123') {
            this.isLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            document.querySelector('.modal-overlay')?.remove();
            this.showAdminPanel();
            NotificationSystem.showNotification('✅ تم تسجيل الدخول بنجاح', 'success');
        } else {
            alert('❌ خطأ في اسم المستخدم أو كلمة المرور');
        }
    },
    
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('adminLoggedIn');
        this.panelElement?.remove();
        NotificationSystem.showNotification('👋 تم تسجيل الخروج', 'info');
    },
    
    showAddCourseForm() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-plus-circle"></i> إضافة مساق جديد</h3>
                <input type="text" id="new-course-title" placeholder="عنوان المساق" required>
                <input type="text" id="new-course-code" placeholder="رمز المساق" required>
                <select id="new-course-semester">
                    <option value="1">الفصل الأول</option>
                    <option value="2">الفصل الثاني</option>
                </select>
                <select id="new-course-icon">
                    <option value="fa-book">📚 كتاب</option>
                    <option value="fa-dna">🧬 أحياء</option>
                    <option value="fa-flask">🧪 كيمياء</option>
                    <option value="fa-atom">⚛️ فيزياء</option>
                    <option value="fa-brain">🧠 تشريح</option>
                    <option value="fa-heartbeat">❤️ فسيولوجيا</option>
                </select>
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.saveCourse()">حفظ</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()">إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    saveCourse() {
        const title = document.getElementById('new-course-title')?.value?.trim();
        const code = document.getElementById('new-course-code')?.value?.trim();
        
        if (!title || !code) {
            alert('الرجاء إدخال عنوان المساق ورمزه');
            return;
        }
        
        const key = title.replace(/\s+/g, '_').toLowerCase();
        
        courses[key] = {
            title: title,
            icon: document.getElementById('new-course-icon')?.value || 'fa-book',
            code: code,
            semester: parseInt(document.getElementById('new-course-semester')?.value),
            books: [],
            lectures: []
        };
        
        saveCourses();
        document.querySelector('.modal-overlay')?.remove();
        this.panelElement?.remove();
        this.showAdminPanel();
        NotificationSystem.showNotification('✅ تم إضافة المساق بنجاح', 'success');
    },
    
    showAddBookForm() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-book"></i> إضافة كتاب جديد</h3>
                <select id="new-book-course">
                    ${Object.keys(courses).map(key => `<option value="${key}">${courses[key].title}</option>`).join('')}
                </select>
                <input type="text" id="new-book-name" placeholder="اسم الكتاب" required>
                <input type="url" id="new-book-link" placeholder="رابط الكتاب" required>
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.saveBook()">حفظ</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()">إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    saveBook() {
        const courseKey = document.getElementById('new-book-course')?.value;
        const name = document.getElementById('new-book-name')?.value?.trim();
        const link = document.getElementById('new-book-link')?.value?.trim();
        
        if (!courseKey || !name || !link) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        if (!courses[courseKey].books) {
            courses[courseKey].books = [];
        }
        
        courses[courseKey].books.push({ name, link, year: new Date().getFullYear().toString() });
        saveCourses();
        document.querySelector('.modal-overlay')?.remove();
        this.panelElement?.remove();
        this.showAdminPanel();
        NotificationSystem.showNotification('✅ تم إضافة الكتاب', 'success');
    },
    
    showAddLectureForm() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-video"></i> إضافة محاضرة جديدة</h3>
                <select id="new-lecture-course">
                    ${Object.keys(courses).map(key => `<option value="${key}">${courses[key].title}</option>`).join('')}
                </select>
                <input type="text" id="new-lecture-name" placeholder="اسم المحاضرة" required>
                <input type="url" id="new-lecture-link" placeholder="رابط المحاضرة" required>
                <select id="new-lecture-type">
                    <option value="youtube">يوتيوب</option>
                    <option value="drive">جوجل درايف</option>
                </select>
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.saveLecture()">حفظ</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()">إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    saveLecture() {
        const courseKey = document.getElementById('new-lecture-course')?.value;
        const name = document.getElementById('new-lecture-name')?.value?.trim();
        const link = document.getElementById('new-lecture-link')?.value?.trim();
        const type = document.getElementById('new-lecture-type')?.value;
        
        if (!courseKey || !name || !link) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        if (!courses[courseKey].lectures) {
            courses[courseKey].lectures = [];
        }
        
        courses[courseKey].lectures.push({ name, link, type });
        saveCourses();
        document.querySelector('.modal-overlay')?.remove();
        this.panelElement?.remove();
        this.showAdminPanel();
        NotificationSystem.showNotification('✅ تم إضافة المحاضرة', 'success');
    },
    
    editCourse(key) {
        const course = courses[key];
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-edit"></i> تعديل المساق</h3>
                <input type="text" id="edit-course-title" value="${course.title}" required>
                <input type="text" id="edit-course-code" value="${course.code}" required>
                <select id="edit-course-semester">
                    <option value="1" ${course.semester === 1 ? 'selected' : ''}>الفصل الأول</option>
                    <option value="2" ${course.semester === 2 ? 'selected' : ''}>الفصل الثاني</option>
                </select>
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.updateCourse('${key}')">تحديث</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()">إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    updateCourse(key) {
        const title = document.getElementById('edit-course-title')?.value?.trim();
        const code = document.getElementById('edit-course-code')?.value?.trim();
        
        if (!title || !code) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        courses[key].title = title;
        courses[key].code = code;
        courses[key].semester = parseInt(document.getElementById('edit-course-semester')?.value);
        
        saveCourses();
        document.querySelector('.modal-overlay')?.remove();
        this.panelElement?.remove();
        this.showAdminPanel();
        NotificationSystem.showNotification('✅ تم تحديث المساق', 'success');
    },
    
    deleteCourse(key) {
        if (confirm(`هل أنت متأكد من حذف المساق "${courses[key].title}"؟`)) {
            delete courses[key];
            saveCourses();
            this.panelElement?.remove();
            this.showAdminPanel();
            NotificationSystem.showNotification('✅ تم حذف المساق', 'success');
        }
    }
};

// ========== دوال العرض ==========
function animatePage(html) {
    const main = document.getElementById('main');
    if (main) {
        main.innerHTML = html;
    }
    FavoritesSystem.renderAllStars();
}

function showDashboard() {
    const lastCourse = getLastCourse();
    const semester1Count = Object.values(courses).filter(c => c.semester === 1).length;
    const semester2Count = Object.values(courses).filter(c => c.semester === 2).length;
    
    const lastCourseHtml = lastCourse.lastCourse && courses[lastCourse.lastCourse] ? `
        <div class="card" style="margin-bottom: 20px; background: linear-gradient(135deg, rgba(74,144,226,0.1), rgba(53,122,189,0.1));">
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-history" style="color: var(--gold);"></i>
                <span>آخر زيارة: </span>
                <a href="#course-${lastCourse.lastCourse}-${lastCourse.lastTab}" style="color: var(--primary-color); text-decoration: none;">
                    <i class="fas ${courses[lastCourse.lastCourse].icon}"></i>
                    ${courses[lastCourse.lastCourse].title}
                </a>
            </div>
        </div>
    ` : '';
    
    animatePage(`
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB" target="_blank" class="whatsapp-link">
            <i class="fab fa-whatsapp"></i>
            <span>انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم</span>
        </a>
        
        <div class="martyr-dedication">
            <i class="fas fa-heart" style="color: var(--danger);"></i>
            <div class="martyr-name">الشهيد ياسر عطيه المصري (ابو مصعب)</div>
            <div>نسأل الله أن يتقبله في الشهداء</div>
        </div>
        
        ${lastCourseHtml}
        
        <div class="semester-buttons">
            <button class="semester-btn" onclick="window.location.hash='semester-1'">
                <i class="fas fa-calendar-alt"></i>
                الفصل الأول (${semester1Count})
            </button>
            <button class="semester-btn" onclick="window.location.hash='semester-2'">
                <i class="fas fa-calendar-check"></i>
                الفصل الثاني (${semester2Count})
            </button>
        </div>
    `);
}

function showSemester(sem) {
    const list = Object.keys(courses).filter(key => courses[key].semester === sem);
    
    let html = `
        <button class="back-button" onclick="window.location.hash='dashboard'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        <div class="search-title" style="margin: 20px 0;">
            <i class="fas fa-calendar-${sem === 1 ? 'alt' : 'check'}"></i>
            <span>الفصل ${sem === 1 ? 'الأول' : 'الثاني'}</span>
            <i class="fas fa-calendar-${sem === 1 ? 'alt' : 'check'}"></i>
        </div>
        <div class="grid">
    `;
    
    list.forEach(key => {
        html += `
            <a href="#course-${key}-books" style="text-decoration: none;">
                <div class="card">
                    <div style="display: flex; justify-content: flex-end;">
                        <span class="favorite-star" data-id="${key}" onclick="event.stopPropagation(); FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${courses[key].title}', icon: '${courses[key].icon}'}); return false;"></span>
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
        <button class="back-button" onclick="window.location.hash='semester-${course.semester}'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas ${course.icon}" style="font-size: 2rem; color: var(--primary-color);"></i>
                <h2 style="margin: 0;">${course.title}</h2>
            </div>
            <span class="favorite-star" data-id="${key}" onclick="FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${course.title}', icon: '${course.icon}'}); return false;"></span>
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

function loadTabContent(key, type) {
    const course = courses[key];
    const tabContent = document.getElementById('tabContent');
    if (!tabContent) return;
    
    let html = '<div class="books-section">';
    
    if (type === 'books') {
        html += '<div class="section-title"><i class="fas fa-book"></i> الكتب الدراسية</div>';
        
        if (course.books?.length) {
            course.books.forEach(book => {
                if (book.coming) {
                    html += `
                        <div class="book-button" onclick="NotificationSystem.showNotification('سيتم إضافة الرابط قريباً', 'info')">
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
            html += '<div class="book-button">لا توجد كتب متاحة</div>';
        }
    } else if (type === 'lectures') {
        html += '<div class="section-title"><i class="fas fa-video"></i> المحاضرات المسجلة</div>';
        
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
            html += '<div class="book-button">لا توجد محاضرات متاحة</div>';
        }
    } else {
        html += `
            <div class="book-button" style="justify-content: center;">
                <i class="fas fa-hourglass-half"></i>
                <span>سيتم إضافة المحتوى قريباً</span>
            </div>
        `;
    }
    
    html += '</div>';
    tabContent.innerHTML = html;
}

function showFavorites() {
    let html = `
        <button class="back-button" onclick="window.location.hash='dashboard'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        <div class="search-title" style="margin: 20px 0;">
            <i class="fas fa-star" style="color: var(--gold);"></i>
            <span>المفضلة (${FavoritesSystem.items.length})</span>
            <i class="fas fa-star" style="color: var(--gold);"></i>
        </div>
    `;
    
    if (FavoritesSystem.items.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 40px;">
                <i class="far fa-star" style="font-size: 3rem; color: var(--text-light); margin-bottom: 20px;"></i>
                <h3>لا توجد عناصر في المفضلة</h3>
                <p style="color: var(--text-light);">أضف مساقات إلى المفضلة بالضغط على النجمة</p>
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
        <button class="back-button" onclick="window.location.hash='dashboard'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        
        <div class="search-title" style="margin: 20px 0;">
            <i class="fas fa-chart-bar"></i>
            <span>إحصائيات الموقع</span>
            <i class="fas fa-chart-bar"></i>
        </div>
        
        <div class="grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="card">
                <i class="fas fa-users"></i>
                <h3>${StatisticsSystem.getTotalVisitors()}</h3>
                <span class="code">الزوار</span>
            </div>
            <div class="card">
                <i class="fas fa-eye"></i>
                <h3>${StatisticsSystem.getTotalViews()}</h3>
                <span class="code">المشاهدات</span>
            </div>
            <div class="card">
                <i class="fas fa-star"></i>
                <h3>${FavoritesSystem.items.length}</h3>
                <span class="code">المفضلة</span>
            </div>
        </div>
        
        <div class="books-section" style="margin-top: 20px;">
            <div class="section-title"><i class="fas fa-trophy" style="color: var(--gold);"></i> الأكثر مشاهدة</div>
    `;
    
    if (mostViewed.length) {
        mostViewed.forEach((item, i) => {
            const course = courses[item.id];
            if (course) {
                html += `
                    <div class="book-button">
                        <span>#${i+1} <i class="fas ${course.icon}"></i> ${course.title}</span>
                        <span class="code">${item.count} مشاهدة</span>
                    </div>
                `;
            }
        });
    } else {
        html += '<div class="book-button">لا توجد بيانات كافية</div>';
    }
    
    html += '</div>';
    animatePage(html);
}

function updateActiveNav() {
    const hash = window.location.hash.substring(1) || 'dashboard';
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('i').className;
        const text = item.querySelector('span')?.textContent;
        
        if ((hash === 'dashboard' && icon.includes('fa-home')) ||
            (hash === 'favorites' && icon.includes('fa-star')) ||
            (hash === 'statistics' && icon.includes('fa-chart-bar')) ||
            (text === 'الإعدادات')) {
            item.classList.add('active');
        }
    });
}

// ========== إنشاء هيكل الصفحة (البحث في الأعلى) ==========
function createAppStructure() {
    const app = document.createElement('div');
    app.innerHTML = `
        <header class="search-header">
            <div class="search-title">
                <i class="fas fa-search"></i>
                <span>🔍 البحث في المساقات</span>
                <i class="fas fa-search"></i>
            </div>
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" id="main-search" class="search-input" 
                    placeholder="ابحث عن مساق، كتاب، أو محاضرة..."
                    oninput="handleSearch(this.value)">
            </div>
        </header>
        
        <main id="main"></main>
        
        <footer class="site-footer">
            <div class="footer-title">
                <i class="fas fa-crown"></i> جامعة الأقصى - كلية التمريض <i class="fas fa-crown"></i>
            </div>
            <div class="footer-signature">
                <span>المهندس</span>
                <span class="nader">نادر</span>
            </div>
            <div class="footer-copyright">
                <i class="far fa-copyright"></i> 2026
            </div>
        </footer>
        
        <nav class="bottom-nav">
            <button class="nav-item" onclick="window.location.hash='dashboard'">
                <i class="fas fa-home"></i>
                <span>الرئيسية</span>
            </button>
            <button class="nav-item" onclick="document.getElementById('main-search').focus()">
                <i class="fas fa-search"></i>
                <span>بحث</span>
            </button>
            <button class="nav-item" onclick="window.location.hash='favorites'">
                <i class="fas fa-star"></i>
                <span>المفضلة</span>
            </button>
            <button class="nav-item" onclick="window.location.hash='statistics'">
                <i class="fas fa-chart-bar"></i>
                <span>الإحصائيات</span>
            </button>
        </nav>
    `;
    
    document.body.appendChild(app);
}

// ========== تهيئة الموقع ==========
createAppStructure();
FavoritesSystem.init();
AdminSystem.init();

// معالجة التحميل الأول
if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
} else {
    showDashboard();
}
