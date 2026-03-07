// ========== البيانات الافتراضية للمساقات (تم الإضافة للحفظ في localStorage) ==========
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

// ========== تحميل المساقات من localStorage أو استخدام البيانات الافتراضية (ميزة جديدة) ==========
let courses = JSON.parse(localStorage.getItem('courses')) || defaultCourses;

// ========== حفظ المساقات في localStorage (ميزة جديدة) ==========
function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses));
}

// ========== نظام الجلسات الفريد لكل مستخدم ==========
const SESSION_ID = 'user_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
let userSession = {
    id: SESSION_ID,
    lastCourse: null,
    lastTab: 'books',
    favorites: JSON.parse(localStorage.getItem(`favorites_${SESSION_ID}`)) || [],
    visitCount: 0,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString()
};

// حفظ آخر مساق زاره الطالب
function saveLastCourse(courseKey, tab) {
    userSession.lastCourse = courseKey;
    userSession.lastTab = tab;
    userSession.lastVisit = new Date().toISOString();
    localStorage.setItem(`session_${SESSION_ID}`, JSON.stringify(userSession));
}

// استرجاع آخر مساق
function getLastCourse() {
    const saved = localStorage.getItem(`session_${SESSION_ID}`);
    if (saved) {
        userSession = JSON.parse(saved);
    }
    return userSession;
}

// نظام المفضلة
const FavoritesSystem = {
    items: [],
    
    init() {
        this.load();
        this.renderStars();
    },
    
    load() {
        const saved = localStorage.getItem(`favorites_${SESSION_ID}`);
        this.items = saved ? JSON.parse(saved) : [];
    },
    
    save() {
        localStorage.setItem(`favorites_${SESSION_ID}`, JSON.stringify(this.items));
        this.renderStars();
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
    
    renderStars() {
        document.querySelectorAll('.favorite-star').forEach(star => {
            const id = star.getAttribute('data-id');
            if (this.isFavorite(id)) {
                star.classList.add('active');
                star.innerHTML = '<i class="fas fa-star" style="color: var(--gold);"></i>';
            } else {
                star.classList.remove('active');
                star.innerHTML = '<i class="far fa-star" style="color: var(--text-light);"></i>';
            }
        });
    }
};

// نظام الإحصائيات
const StatisticsSystem = {
    views: JSON.parse(localStorage.getItem('views')) || {},
    
    incrementView(type, id) {
        const key = `${type}_${id}`;
        this.views[key] = (this.views[key] || 0) + 1;
        localStorage.setItem('views', JSON.stringify(this.views));
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

// ========== إضافة CSS للتصميم الجديد (ميزة جديدة) ==========
const newStyle = document.createElement('style');
newStyle.textContent = `
    /* تصميم جديد للصفحة الرئيسية */
    .main-title {
        text-align: center;
        color: var(--primary-color);
        font-size: 2rem;
        margin-bottom: 20px;
    }
    
    .main-title i {
        margin: 0 10px;
        color: var(--gold);
    }
    
    .search-section {
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 20px;
        margin-bottom: 25px;
        box-shadow: var(--shadow-md);
        border: 1px solid rgba(255,255,255,0.3);
    }
    
    .search-label {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        color: var(--text-color);
        font-size: 1.1rem;
    }
    
    .search-label i {
        color: var(--primary-color);
    }
    
    .main-search-input {
        width: 100%;
        padding: 15px 20px;
        border-radius: 40px;
        border: 2px solid var(--border-color);
        background: white;
        color: var(--text-color);
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
        box-sizing: border-box;
    }
    
    .main-search-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 4px var(--shadow-color);
    }
    
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
    
    /* تحسينات لوحة التحكم */
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
    }
    
    .admin-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-2px);
    }
    
    .admin-btn i {
        font-size: 1.1rem;
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
    
    .edit-actions button {
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 0.9rem;
    }
    
    .edit-actions .edit {
        background: var(--info);
        color: white;
    }
    
    .edit-actions .delete {
        background: var(--danger);
        color: white;
    }
    
    /* نماذج الإدخال */
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
    }
    
    .modal-content h3 {
        color: var(--primary-color);
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .modal-content input,
    .modal-content select,
    .modal-content textarea {
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
    }
    
    .modal-actions .save {
        background: var(--primary-color);
        color: white;
    }
    
    .modal-actions .cancel {
        background: var(--danger);
        color: white;
    }
`;

document.head.appendChild(newStyle);

// ========== إضافة CSS مع جميع المتغيرات المطلوبة (الكود الأصلي) ==========
const style = document.createElement('style');
style.textContent = `
    /* ثيم أساسي - أزرق مريح مع جميع المتغيرات المطلوبة */
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
        transition: all 0.3s ease;
    }
    
    /* الهيدر مع البحث الثابت */
    .site-header {
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
    }
    
    .search-container {
        width: 100%;
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
    
    /* شريط التنقل السفلي للموبايل */
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
    
    /* نجمة المفضلة */
    .favorite-star {
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-block;
        margin-right: 10px;
    }
    
    .favorite-star:hover {
        transform: scale(1.2);
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
        margin-bottom: 20px;
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
    
    /* ===== التوقيع الموحد (مرة واحدة فقط) ===== */
    .site-footer {
        text-align: center;
        margin-top: 40px;
        padding: 20px;
        background: var(--card-bg);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.3);
        box-shadow: var(--shadow-md);
    }
    
    .footer-title {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 10px;
    }
    
    .footer-title i {
        color: var(--gold);
        margin: 0 5px;
    }
    
    .footer-signature {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 10px 0;
        font-size: 1.1rem;
    }
    
    .footer-signature .engineer {
        color: var(--text-color);
        font-weight: 500;
    }
    
    .footer-signature .nader {
        color: var(--primary-color);
        font-weight: 700;
        font-size: 1.3rem;
    }
    
    .footer-copyright {
        font-size: 0.9rem;
        color: var(--text-light);
        margin-top: 10px;
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
        
        .bottom-nav {
            padding: 5px;
        }
        
        .nav-item {
            font-size: 0.7rem;
        }
        
        .nav-item i {
            font-size: 1.2rem;
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

// ========== نظام الحماية المحسن ==========

// 1. كشف محاولة فتح أدوات المطور (بدون إنذارات كاذبة)
(function() {
    let devToolsOpen = false;
    let debuggerDetected = false;
    let lastWarning = 0;

    // كشف تغير حجم النافذة (مع عتبة أعلى للموبايل)
    function detectDevTools() {
        const isMobile = window.innerWidth <= 768;
        const threshold = isMobile ? 200 : 160;
        
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                if (Date.now() - lastWarning > 5000) {
                    showSecurityAlert();
                    lastWarning = Date.now();
                }
            }
        } else {
            devToolsOpen = false;
        }
    }

    // استخدام debugger بشكل أقل
    let debuggerCheckCount = 0;
    setInterval(function() {
        debuggerCheckCount++;
        if (debuggerCheckCount % 10 === 0) { // كل 10 ثواني فقط
            const start = performance.now();
            debugger;
            const end = performance.now();
            
            if (end - start > 100) {
                if (!debuggerDetected) {
                    debuggerDetected = true;
                    if (Date.now() - lastWarning > 5000) {
                        showSecurityAlert();
                        lastWarning = Date.now();
                    }
                }
            } else {
                debuggerDetected = false;
            }
        }
    }, 1000);

    // منع اختصارات لوحة المفاتيح
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
    });

    // منع النقر بالزر الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showSecurityAlert();
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
                background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
                padding: 40px;
                border-radius: 20px;
                text-align: center;
                max-width: 400px;
                box-shadow: var(--shadow-xl);
                border: 1px solid var(--gold);
            ">
                <i class="fas fa-shield-halved" style="font-size: 60px; color: var(--gold); margin-bottom: 20px;"></i>
                <h2 style="color: white; margin-bottom: 15px;">🔒 تنبيه أمني</h2>
                <p style="color: #e0e0e0; margin-bottom: 25px; line-height: 1.8;">
                    هذا الموقع محمي بموجب حقوق الملكية الفكرية.<br>
                    غير مسموح بفتح أدوات المطور.
                </p>
                <p style="color: var(--gold); font-size: 14px;">
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

// ========== نظام التنقل بالروابط (HTML Links) ==========

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
            showNotFound();
        }
    } else if (hash.startsWith('course-')) {
        const parts = hash.split('-');
        const courseKey = parts[1];
        const tab = parts[2] || 'books';
        
        if (courses[courseKey]) {
            showCourse(courseKey, tab);
        } else {
            showNotFound();
        }
    } else if (hash === 'favorites') {
        showFavorites();
    } else if (hash === 'statistics') {
        showStatistics();
    } else if (hash === 'search') {
        showSearchPage();
    } else {
        showNotFound();
    }
    
    updateActiveNav();
});

// صفحة غير موجودة
function showNotFound() {
    animatePage(`
        <div class="card" style="text-align: center; padding: 50px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--warning); margin-bottom: 20px;"></i>
            <h2>الصفحة غير موجودة</h2>
            <p style="margin: 20px 0; color: var(--text-light);">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
            <a href="#dashboard" class="back-button" style="display: inline-block;">العودة للرئيسية</a>
        </div>
    `);
}

// ========== نظام إرسال تقارير الزوار إلى تيليجرام (محمي) ==========
async function sendVisitorReport() {
    // استخدام خدمة وسيطة بدلاً من كشف التوكن
    const response = await fetch('https://your-backend.com/api/visitor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sessionId: SESSION_ID,
            url: window.location.href,
            timestamp: new Date().toISOString()
        })
    }).catch(() => null);
}

// عداد زوار حقيقي (باستخدام API خارجي)
async function getRealVisitorCount() {
    try {
        const response = await fetch('https://api.countapi.xyz/hit/nmarwuf-lgtm.github.io/visitors');
        const data = await response.json();
        return data.value;
    } catch (e) {
        return localStorage.getItem('visitorCount') || 0;
    }
}

// تحديث عداد الزوار
async function updateVisitorCounter() {
    const count = await getRealVisitorCount();
    const counter = document.getElementById('visitor-counter');
    if (counter) {
        counter.innerHTML = `<i class="fas fa-users" style="color: var(--primary-color);"></i> <span style="color: var(--text-color);">عدد الزوار: ${count}</span>`;
    }
}

// ========== نظام الإشعارات الديناميكي ==========
const NotificationSystem = {
    init() {
        this.checkForUpdates();
        setInterval(() => this.checkForUpdates(), 3600000); // كل ساعة
    },
    
    async checkForUpdates() {
        const lastNotification = localStorage.getItem('lastNotification');
        
        // جلب الإشعارات من API (يمكن استبدالها ببيانات ثابتة)
        const updates = {
            'new-content': '📚 تم إضافة محتوى جديد للموقع',
            'new-exam': '📝 تم إضافة اختبارات جديدة',
            'update': '✨ تم تحديث الموقع'
        };
        
        const latestKey = Object.keys(updates)[0];
        if (!lastNotification || lastNotification !== latestKey) {
            this.showNotification(updates[latestKey]);
            localStorage.setItem('lastNotification', latestKey);
        }
    },
    
    showNotification(message) {
        if (document.getElementById('update-notification')) return;
        
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

// ========== PWA و Service Worker المحسن ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // إنشاء ملف Service Worker ديناميكياً
        const swCode = `
const CACHE_NAME = 'university-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
            .catch(() => {})
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => 
            Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }))
        )
    );
});

self.addEventListener('fetch', event => {
    // تجاهل طلبات التتبع
    if (event.request.url.includes('google-analytics') || 
        event.request.url.includes('telegram')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        // لا تقم بتخزين روابط خارجية
                        if (!response || response.status !== 200 || 
                            event.request.url.includes('mediafire') ||
                            event.request.url.includes('drive.google')) {
                            return response;
                        }
                        
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, responseToCache))
                            .catch(() => {});
                        return response;
                    })
                    .catch(() => {
                        // فشل الاتصال بالإنترنت
                        return new Response('غير متصل', { status: 503 });
                    });
            })
    );
});
`;
        
        // حفظ كملف
        const blob = new Blob([swCode], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        
        // محاولة التسجيل
        navigator.serviceWorker.register(url).then(registration => {
            console.log('ServiceWorker registered');
        }).catch(err => {
            console.log('ServiceWorker registration failed');
        });
    });
}

// ========== نظام تشفير البيانات المحسن ==========
const EncryptionSystem = {
    encrypt(data) {
        try {
            // تشفير بسيط مع إضافة salt
            const salt = SESSION_ID.substring(0, 8);
            const jsonStr = JSON.stringify(data);
            const encoded = btoa(salt + jsonStr);
            return encoded.split('').reverse().join('');
        } catch (e) {
            return data;
        }
    },
    
    decrypt(data) {
        try {
            if (typeof data !== 'string') return data;
            const reversed = data.split('').reverse().join('');
            const decoded = atob(reversed);
            const salt = SESSION_ID.substring(0, 8);
            const jsonStr = decoded.substring(salt.length);
            return JSON.parse(jsonStr);
        } catch (e) {
            return data;
        }
    }
};

// تشفير البيانات المخزنة
const originalSetItem = localStorage.setItem;
const originalGetItem = localStorage.getItem;

localStorage.setItem = function(key, value) {
    if (key.includes('session_') || key.includes('favorites_') || key.includes('admin')) {
        const encrypted = EncryptionSystem.encrypt(value);
        originalSetItem.call(this, key, encrypted);
    } else {
        originalSetItem.call(this, key, value);
    }
};

localStorage.getItem = function(key) {
    const value = originalGetItem.call(this, key);
    if (key.includes('session_') || key.includes('favorites_') || key.includes('admin')) {
        return EncryptionSystem.decrypt(value);
    }
    return value;
};

// ========== نظام تنبيه الاختبارات (بتواريخ ديناميكية) ==========
const ExamAlertSystem = {
    exams: [],
    
    init() {
        this.loadExams();
        this.checkExams();
        setInterval(() => this.checkExams(), 3600000); // كل ساعة
    },
    
    loadExams() {
        // جلب التواريخ من التخزين المحلي أو API
        const saved = localStorage.getItem('exams');
        if (saved) {
            this.exams = JSON.parse(saved);
        } else {
            // تواريخ تجريبية (بعد 7 أيام من الآن)
            const nextWeek = new Date();
            nextWeek.setDate(nextWeek.getDate() + 7);
            
            this.exams = [
                { 
                    name: '📝 اختبار الأحياء', 
                    date: nextWeek.toISOString().split('T')[0], 
                    time: '10:00' 
                },
                { 
                    name: '🧪 اختبار الكيمياء', 
                    date: new Date(nextWeek.getTime() + 2*24*60*60*1000).toISOString().split('T')[0], 
                    time: '11:00' 
                },
                { 
                    name: '📋 اختبار المصطلحات', 
                    date: new Date(nextWeek.getTime() + 5*24*60*60*1000).toISOString().split('T')[0], 
                    time: '09:00' 
                }
            ];
        }
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
        if (document.getElementById(`exam-alert-${exam.name}`)) return;
        
        const hoursLeft = Math.floor((new Date(`${exam.date}T${exam.time}`) - new Date()) / (1000 * 60 * 60));
        const minutesLeft = Math.floor(((new Date(`${exam.date}T${exam.time}`) - new Date()) % (1000 * 60 * 60)) / (1000 * 60));
        
        const alert = document.createElement('div');
        alert.id = `exam-alert-${exam.name}`;
        alert.style.cssText = `
            position: fixed;
            bottom: 100px;
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

// ========== نظام البحث الذكي المحسن ==========
function advancedSearch(query) {
    query = (query || "").trim().toLowerCase();
    if (!query) return [];
    
    const results = [];
    const searchTerms = query.split(/\s+/).filter(term => term.length > 1);
    
    // البحث في المساقات
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        const title = (course.title || "").toLowerCase();
        const code = (course.code || "").toLowerCase();
        
        let score = 0;
        searchTerms.forEach(term => {
            if (title.includes(term)) score += 3;
            if (code.includes(term)) score += 2;
        });
        
        if (score > 0) {
            results.push({
                type: 'course',
                key: key,
                title: course.title,
                code: course.code,
                icon: course.icon,
                category: 'مساق',
                score: score
            });
        }
        
        // البحث في الكتب
        (course.books || []).forEach(book => {
            const bookName = (book.name || "").toLowerCase();
            let bookScore = 0;
            searchTerms.forEach(term => {
                if (bookName.includes(term)) bookScore += 2;
            });
            
            if (bookScore > 0) {
                results.push({
                    type: 'book',
                    courseKey: key,
                    courseTitle: course.title,
                    name: book.name,
                    link: book.link,
                    category: 'كتاب',
                    score: bookScore
                });
            }
        });
        
        // البحث في المحاضرات
        (course.lectures || []).forEach(lecture => {
            const lectureName = (lecture.name || "").toLowerCase();
            let lectureScore = 0;
            searchTerms.forEach(term => {
                if (lectureName.includes(term)) lectureScore += 2;
            });
            
            if (lectureScore > 0) {
                results.push({
                    type: 'lecture',
                    courseKey: key,
                    courseTitle: course.title,
                    name: lecture.name,
                    link: lecture.link,
                    lectureType: lecture.type,
                    category: 'محاضرة',
                    score: lectureScore
                });
            }
        });
    });
    
    // ترتيب حسب الصلة
    return results.sort((a, b) => (b.score || 0) - (a.score || 0));
}

// البحث مع اقتراحات
let searchTimeout;
function handleSearchInput(value) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (value.trim()) {
            window.location.hash = 'search';
            showSearchResults(value);
        } else {
            // العودة للصفحة السابقة بدون إعادة تحميل
            const previousHash = localStorage.getItem('previousHash') || 'dashboard';
            window.location.hash = previousHash;
        }
    }, 300);
}

function showSearchResults(query) {
    const results = advancedSearch(query);
    
    let html = `
        <a href="#" onclick="window.history.back(); return false;" class="back-button" style="display: inline-block;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <h2 class="course-title">
            <i class="fas fa-search"></i>
            نتائج البحث عن "${query}" (${results.length})
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

    animatePage(html);
}

// ========== نظام إدارة المحتوى المتطور (Admin Panel) مع ميزات جديدة ==========
const AdminSystem = {
    adminUser: 'admin',
    adminPass: 'admin123',
    isLoggedIn: false,
    panelElement: null,
    loginElement: null,
    adminButton: null,
    
    init() {
        this.checkLogin();
        this.addAdminButton();
    },
    
    checkLogin() {
        const saved = localStorage.getItem('adminLoggedIn');
        // التحقق من القيمة بعد فك التشفير
        this.isLoggedIn = saved === 'true' || saved === true;
    },
    
    addAdminButton() {
        if (document.getElementById('admin-btn')) return;
        
        this.adminButton = document.createElement('div');
        this.adminButton.id = 'admin-btn';
        this.adminButton.style.cssText = `
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
        this.adminButton.innerHTML = '<i class="fas fa-cog"></i>';
        this.adminButton.onclick = () => this.showAdminPanel();
        document.body.appendChild(this.adminButton);
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
        this.panelElement.id = 'admin-panel';
        this.panelElement.style.cssText = `
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
        
        this.panelElement.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: var(--primary-color);"><i class="fas fa-cog"></i> لوحة التحكم</h2>
                <button onclick="AdminSystem.closePanel()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            
            <div class="admin-section">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إحصاءات الموقع</h3>
                <div class="grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="stat-item">
                        <div class="stat-value" id="admin-stats-visitors">0</div>
                        <div class="stat-label">عدد الزوار</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="admin-stats-sessions">0</div>
                        <div class="stat-label">عدد الجلسات</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="admin-stats-views">0</div>
                        <div class="stat-label">عدد المشاهدات</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value" id="admin-stats-favorites">0</div>
                        <div class="stat-label">المفضلات</div>
                    </div>
                </div>
            </div>
            
            <div class="admin-section">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة المساقات</h3>
                <button onclick="AdminSystem.showAddCourseForm()" class="admin-btn">
                    <i class="fas fa-plus"></i> إضافة مساق جديد
                </button>
                <div id="admin-courses-list" style="margin-top: 10px; max-height: 200px; overflow-y: auto;">
                    ${Object.keys(courses).map(key => `
                        <div class="course-edit-item">
                            <span><i class="fas ${courses[key].icon}" style="color: var(--primary-color);"></i> ${courses[key].title}</span>
                            <div class="edit-actions">
                                <button class="edit" onclick="AdminSystem.editCourse('${key}')"><i class="fas fa-edit"></i></button>
                                <button class="delete" onclick="AdminSystem.deleteCourse('${key}')"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="admin-section">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة الكتب</h3>
                <button onclick="AdminSystem.showAddBookForm()" class="admin-btn">
                    <i class="fas fa-book"></i> إضافة كتاب جديد
                </button>
            </div>
            
            <div class="admin-section">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة المحاضرات</h3>
                <button onclick="AdminSystem.showAddLectureForm()" class="admin-btn">
                    <i class="fas fa-video"></i> إضافة محاضرة جديدة
                </button>
            </div>
            
            <div class="admin-section">
                <h3 style="color: var(--text-color); margin-bottom: 10px;">إدارة الاختبارات</h3>
                <button onclick="AdminSystem.showAddExamForm()" class="admin-btn">
                    <i class="fas fa-question-circle"></i> إضافة اختبار جديد
                </button>
                <div id="admin-exams-list" style="margin-top: 10px;">
                    ${ExamAlertSystem.exams.map((exam, index) => `
                        <div class="course-edit-item">
                            <span>${exam.name} - ${exam.date}</span>
                            <div class="edit-actions">
                                <button class="delete" onclick="AdminSystem.deleteExam(${index})"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <button onclick="AdminSystem.logout()" class="admin-btn delete" style="width: 100%;">
                    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                </button>
            </div>
        `;
        
        document.body.appendChild(this.panelElement);
        this.updateStats();
    },
    
    closePanel() {
        if (this.panelElement) {
            this.panelElement.remove();
            this.panelElement = null;
        }
    },
    
    updateStats() {
        setTimeout(() => {
            const visitorsEl = document.getElementById('admin-stats-visitors');
            const sessionsEl = document.getElementById('admin-stats-sessions');
            const viewsEl = document.getElementById('admin-stats-views');
            const favoritesEl = document.getElementById('admin-stats-favorites');
            
            if (visitorsEl) {
                getRealVisitorCount().then(count => {
                    visitorsEl.textContent = count;
                });
            }
            if (sessionsEl) {
                sessionsEl.textContent = Object.keys(localStorage).filter(k => k.startsWith('session_')).length;
            }
            if (viewsEl) {
                viewsEl.textContent = StatisticsSystem.getTotalViews();
            }
            if (favoritesEl) {
                favoritesEl.textContent = FavoritesSystem.items.length;
            }
        }, 100);
    },
    
    showLogin() {
        if (this.loginElement) {
            this.loginElement.remove();
        }
        
        this.loginElement = document.createElement('div');
        this.loginElement.id = 'admin-login';
        this.loginElement.style.cssText = `
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
        
        this.loginElement.innerHTML = `
            <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 20px;">
                <i class="fas fa-lock"></i> دخول المشرف
            </h2>
            
            <input type="text" id="admin-user" placeholder="اسم المستخدم" style="width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 10px; border: 1px solid var(--border-color); background: var(--input-bg); color: var(--text-color);">
            
            <input type="password" id="admin-pass" placeholder="كلمة المرور" style="width: 100%; padding: 10px; margin-bottom: 20px; border-radius: 10px; border: 1px solid var(--border-color); background: var(--input-bg); color: var(--text-color);">
            
            <button onclick="AdminSystem.login()" class="admin-btn" style="width: 100%;">
                <i class="fas fa-sign-in-alt"></i> دخول
            </button>
            
            <button onclick="AdminSystem.closeLogin()" style="margin-top: 10px; width: 100%; padding: 8px; background: none; border: 1px solid var(--border-color); border-radius: 10px; cursor: pointer; color: var(--text-color);">
                إلغاء
            </button>
        `;
        
        document.body.appendChild(this.loginElement);
    },
    
    closeLogin() {
        if (this.loginElement) {
            this.loginElement.remove();
            this.loginElement = null;
        }
    },
    
    login() {
        const user = document.getElementById('admin-user').value;
        const pass = document.getElementById('admin-pass').value;
        
        if (user === this.adminUser && pass === this.adminPass) {
            this.isLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            this.closeLogin();
            this.showAdminPanel();
        } else {
            alert('❌ خطأ في اسم المستخدم أو كلمة المرور');
        }
    },
    
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('adminLoggedIn');
        this.closePanel();
    },
    
    showAddCourseForm() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-plus-circle"></i> إضافة مساق جديد</h3>
                
                <input type="text" id="new-course-title" placeholder="عنوان المساق">
                
                <input type="text" id="new-course-code" placeholder="رمز المساق (مثال: BIOL 101)">
                
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
                    <option value="fa-language">🗣️ لغة</option>
                </select>
                
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.saveCourse()"><i class="fas fa-save"></i> حفظ</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i> إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    saveCourse() {
        const title = document.getElementById('new-course-title')?.value;
        const code = document.getElementById('new-course-code')?.value;
        const semester = document.getElementById('new-course-semester')?.value;
        const icon = document.getElementById('new-course-icon')?.value;
        
        if (!title || !code) {
            alert('الرجاء إدخال عنوان المساق ورمزه');
            return;
        }
        
        const key = title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        
        courses[key] = {
            title: title,
            icon: icon || 'fa-book',
            code: code,
            semester: parseInt(semester),
            books: [],
            lectures: []
        };
        
        saveCourses(); // حفظ في localStorage
        alert('✅ تم إضافة المساق بنجاح');
        document.querySelector('.modal-overlay')?.remove();
        this.closePanel();
        this.showAdminPanel();
    },
    
    showAddBookForm() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const courseOptions = Object.keys(courses).map(key => 
            `<option value="${key}">${courses[key].title}</option>`
        ).join('');
        
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-book"></i> إضافة كتاب جديد</h3>
                
                <select id="new-book-course">
                    ${courseOptions}
                </select>
                
                <input type="text" id="new-book-name" placeholder="اسم الكتاب">
                
                <input type="url" id="new-book-link" placeholder="رابط الكتاب">
                
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.saveBook()"><i class="fas fa-save"></i> حفظ</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i> إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    saveBook() {
        const courseKey = document.getElementById('new-book-course')?.value;
        const name = document.getElementById('new-book-name')?.value;
        const link = document.getElementById('new-book-link')?.value;
        
        if (!courseKey || !name || !link) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        if (!courses[courseKey].books) {
            courses[courseKey].books = [];
        }
        
        courses[courseKey].books.push({
            name: name,
            link: link,
            year: new Date().getFullYear().toString()
        });
        
        saveCourses(); // حفظ في localStorage
        alert('✅ تم إضافة الكتاب');
        document.querySelector('.modal-overlay')?.remove();
        this.closePanel();
        this.showAdminPanel();
    },
    
    showAddLectureForm() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const courseOptions = Object.keys(courses).map(key => 
            `<option value="${key}">${courses[key].title}</option>`
        ).join('');
        
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-video"></i> إضافة محاضرة جديدة</h3>
                
                <select id="new-lecture-course">
                    ${courseOptions}
                </select>
                
                <input type="text" id="new-lecture-name" placeholder="اسم المحاضرة">
                
                <input type="url" id="new-lecture-link" placeholder="رابط المحاضرة">
                
                <select id="new-lecture-type">
                    <option value="youtube">يوتيوب</option>
                    <option value="drive">جوجل درايف</option>
                </select>
                
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.saveLecture()"><i class="fas fa-save"></i> حفظ</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i> إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    saveLecture() {
        const courseKey = document.getElementById('new-lecture-course')?.value;
        const name = document.getElementById('new-lecture-name')?.value;
        const link = document.getElementById('new-lecture-link')?.value;
        const type = document.getElementById('new-lecture-type')?.value;
        
        if (!courseKey || !name || !link) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        if (!courses[courseKey].lectures) {
            courses[courseKey].lectures = [];
        }
        
        courses[courseKey].lectures.push({
            name: name,
            link: link,
            type: type
        });
        
        saveCourses(); // حفظ في localStorage
        alert('✅ تم إضافة المحاضرة');
        document.querySelector('.modal-overlay')?.remove();
        this.closePanel();
        this.showAdminPanel();
    },
    
    showAddExamForm() {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-question-circle"></i> إضافة اختبار جديد</h3>
                
                <input type="text" id="new-exam-name" placeholder="اسم الاختبار">
                
                <input type="date" id="new-exam-date">
                
                <input type="time" id="new-exam-time">
                
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.saveExam()"><i class="fas fa-save"></i> حفظ</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i> إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    saveExam() {
        const name = document.getElementById('new-exam-name')?.value;
        const date = document.getElementById('new-exam-date')?.value;
        const time = document.getElementById('new-exam-time')?.value;
        
        if (!name || !date || !time) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        ExamAlertSystem.exams.push({
            name: name,
            date: date,
            time: time
        });
        
        localStorage.setItem('exams', JSON.stringify(ExamAlertSystem.exams));
        
        alert('✅ تم إضافة الاختبار');
        document.querySelector('.modal-overlay')?.remove();
        this.closePanel();
        this.showAdminPanel();
    },
    
    editCourse(key) {
        const course = courses[key];
        
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal-content">
                <h3><i class="fas fa-edit"></i> تعديل المساق</h3>
                
                <input type="text" id="edit-course-title" value="${course.title}">
                
                <input type="text" id="edit-course-code" value="${course.code}">
                
                <select id="edit-course-semester">
                    <option value="1" ${course.semester === 1 ? 'selected' : ''}>الفصل الأول</option>
                    <option value="2" ${course.semester === 2 ? 'selected' : ''}>الفصل الثاني</option>
                </select>
                
                <div class="modal-actions">
                    <button class="save" onclick="AdminSystem.updateCourse('${key}')"><i class="fas fa-save"></i> تحديث</button>
                    <button class="cancel" onclick="this.closest('.modal-overlay').remove()"><i class="fas fa-times"></i> إلغاء</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    },
    
    updateCourse(key) {
        const title = document.getElementById('edit-course-title')?.value;
        const code = document.getElementById('edit-course-code')?.value;
        const semester = document.getElementById('edit-course-semester')?.value;
        
        if (!title || !code) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        courses[key].title = title;
        courses[key].code = code;
        courses[key].semester = parseInt(semester);
        
        saveCourses(); // حفظ في localStorage
        alert('✅ تم تحديث المساق');
        document.querySelector('.modal-overlay')?.remove();
        this.closePanel();
        this.showAdminPanel();
    },
    
    deleteCourse(key) {
        if (confirm(`هل أنت متأكد من حذف المساق "${courses[key].title}"؟`)) {
            delete courses[key];
            saveCourses(); // حفظ في localStorage
            alert('✅ تم حذف المساق بنجاح');
            this.closePanel();
            this.showAdminPanel();
        }
    },
    
    deleteExam(index) {
        if (confirm('هل أنت متأكد من حذف هذا الاختبار؟')) {
            ExamAlertSystem.exams.splice(index, 1);
            localStorage.setItem('exams', JSON.stringify(ExamAlertSystem.exams));
            alert('✅ تم حذف الاختبار بنجاح');
            this.closePanel();
            this.showAdminPanel();
        }
    }
};

// ========== الصفحات ==========

function animatePage(html) {
    const main = document.getElementById("main");
    if (main) {
        main.innerHTML = html;
    }
    
    // تحديث الـ Hash
    const currentHash = window.location.hash.substring(1);
    localStorage.setItem('previousHash', currentHash || 'dashboard');
    
    // تحديث النجوم
    setTimeout(() => FavoritesSystem.renderStars(), 100);
}

// ========== تعديل showDashboard لاستخدام التصميم الجديد ==========
function showDashboard() {
    const lastCourse = getLastCourse();
    const semester1Count = Object.values(courses).filter(c => c.semester === 1).length;
    const semester2Count = Object.values(courses).filter(c => c.semester === 2).length;
    
    let lastCourseHtml = '';
    if (lastCourse.lastCourse && courses[lastCourse.lastCourse]) {
        lastCourseHtml = `
            <div class="card" style="margin-bottom: 20px; background: linear-gradient(135deg, rgba(74,144,226,0.1), rgba(53,122,189,0.1));">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-history" style="color: var(--gold);"></i>
                        <span>آخر مساق زارته:</span>
                    </div>
                    <a href="#course-${lastCourse.lastCourse}-${lastCourse.lastTab}" style="text-decoration: none; color: var(--primary-color);">
                        <i class="fas ${courses[lastCourse.lastCourse].icon}"></i>
                        ${courses[lastCourse.lastCourse].title}
                    </a>
                </div>
            </div>
        `;
    }
    
    animatePage(`
        <h1 class="main-title">
            <i class="fas fa-search"></i>
            🔍 البحث
            <i class="fas fa-search"></i>
        </h1>

        <div class="search-section">
            <div class="search-label">
                <i class="fas fa-search"></i>
                <span>ابحث عن مساق، كتاب، أو محاضرة</span>
            </div>
            <input type="text" id="main-search-input" class="main-search-input" 
                placeholder="اكتب كلمة البحث..."
                oninput="handleSearchInput(this.value)">
        </div>

        ${lastCourseHtml}

        <!-- رابط مجموعة الواتساب -->
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link" style="text-decoration: none;">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم الآن</span>
        </a>

        <!-- إهداء روح الشهيد -->
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

// ========== باقي دوال العرض (كما هي دون تغيير) ==========
function showSemester(sem) {
    const list = sem === 1 ? 
        Object.keys(courses).filter(key => courses[key].semester === 1) :
        Object.keys(courses).filter(key => courses[key].semester === 2);

    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <h2 class="course-title">
            الفصل ${sem === 1 ? "الأول" : "الثاني"}
        </h2>
        <div class="grid">
    `;

    list.forEach(key => {
        const isFavorite = FavoritesSystem.isFavorite(key);
        html += `
            <div class="card" onclick="window.location.href='#course-${key}-books'">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                    <span class="favorite-star" data-id="${key}" onclick="event.stopPropagation(); FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${courses[key].title}', icon: '${courses[key].icon}'}); return false;">
                        ${isFavorite ? '<i class="fas fa-star" style="color: var(--gold);"></i>' : '<i class="far fa-star" style="color: var(--text-light);"></i>'}
                    </span>
                </div>
                <i class="fas ${courses[key].icon}"></i>
                <h3>${courses[key].title}</h3>
                <span class="code">${courses[key].code}</span>
            </div>
        `;
    });

    html += `</div>`;
    animatePage(html);
}

function showCourse(key, tab) {
    const course = courses[key];
    saveLastCourse(key, tab);
    StatisticsSystem.incrementView('course', key);
    
    let html = `
        <a href="#semester-${course.semester}" class="back-button" style="display: inline-block;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div style="display: flex; align-items: center; justify-content: space-between;">
            <h2 class="course-title">
                <i class="fas ${course.icon}"></i>
                ${course.title}
            </h2>
            <span class="favorite-star" data-id="${key}" onclick="FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${course.title}', icon: '${course.icon}'}); return false;">
                ${FavoritesSystem.isFavorite(key) ? '<i class="fas fa-star" style="color: var(--gold); font-size: 1.5rem;"></i>' : '<i class="far fa-star" style="color: var(--text-light); font-size: 1.5rem;"></i>'}
            </span>
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
    `;

    animatePage(html);
    loadTabContent(key, tab);
}

function loadTabContent(courseKey, type) {
    const course = courses[courseKey];
    const tabContent = document.getElementById("tabContent");
    if (!tabContent) return;
    
    let html = '';

    if (type === 'books') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-book"></i>
                    <span>الكتب الدراسية</span>
                </div>
        `;

        (course.books || []).forEach(book => {
            if (book.coming) {
                html += `
                    <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name || 'كتاب'}</span>
                        <div class="click-here">
                            <i class="fas fa-clock"></i>
                            قريباً
                        </div>
                    </div>
                `;
            } else if (book.link && book.link !== '#') {
                html += `
                    <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name || 'كتاب'}</span>
                        <div class="click-here">
                            <i class="fas fa-hand-pointer"></i>
                            تحميل
                        </div>
                    </a>
                `;
            } else {
                html += `
                    <div class="book-button" onclick="alert('الرابط غير متاح')" style="cursor: pointer;">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name || 'كتاب'}</span>
                        <div class="click-here">
                            <i class="fas fa-exclamation-triangle"></i>
                            غير متاح
                        </div>
                    </div>
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
                        <span>${lecture.name || 'محاضرة'}</span>
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
    else if (type === 'summaries') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-file-alt"></i>
                    <span>الملخصات</span>
                </div>
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas fa-file-alt" style="font-size: 2rem; color: #95a5a6;"></i>
                        <h4 style="color: #7f8c8d;">قريباً</h4>
                    </div>
                </div>
            </div>
        `;
    }
    else if (type === 'exams') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-question-circle"></i>
                    <span>الاختبارات</span>
                </div>
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas fa-question-circle" style="font-size: 2rem; color: #95a5a6;"></i>
                        <h4 style="color: #7f8c8d;">قريباً</h4>
                    </div>
                </div>
            </div>
        `;
    }

    tabContent.innerHTML = html;
}

function showFavorites() {
    const favorites = FavoritesSystem.items;
    
    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block;">
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
                <i class="far fa-star" style="font-size: 3rem; color: var(--text-light); margin-bottom: 15px;"></i>
                <h3>لا توجد عناصر في المفضلة</h3>
                <p style="color: var(--text-light); margin-top: 10px;">أضف مساقات إلى المفضلة بالضغط على النجمة</p>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        favorites.forEach(item => {
            if (item.type === 'course' && courses[item.id]) {
                html += `
                    <a href="#course-${item.id}-books" class="card-link" style="text-decoration: none;">
                        <div class="card">
                            <i class="fas ${item.icon}" style="color: var(--primary-color);"></i>
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
    const mostViewedCourses = StatisticsSystem.getMostViewed('course');
    
    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <h2 class="course-title">
            <i class="fas fa-chart-bar"></i>
            إحصائيات الموقع
        </h2>

        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
            <div class="card">
                <i class="fas fa-users" style="color: var(--primary-color);"></i>
                <h3 id="stat-visitors">0</h3>
                <span class="code">عدد الزوار</span>
            </div>
            <div class="card">
                <i class="fas fa-eye" style="color: var(--primary-color);"></i>
                <h3 id="stat-views">${StatisticsSystem.getTotalViews()}</h3>
                <span class="code">عدد المشاهدات</span>
            </div>
            <div class="card">
                <i class="fas fa-star" style="color: var(--gold);"></i>
                <h3 id="stat-favorites">${FavoritesSystem.items.length}</h3>
                <span class="code">عناصر المفضلة</span>
            </div>
        </div>

        <div class="books-section">
            <div class="section-title">
                <i class="fas fa-trophy" style="color: var(--gold);"></i>
                <span>أكثر المساقات مشاهدة</span>
            </div>
    `;

    if (mostViewedCourses.length === 0) {
        html += `
            <div class="content-card" style="justify-content: center;">
                <p>لا توجد بيانات كافية</p>
            </div>
        `;
    } else {
        mostViewedCourses.forEach((item, index) => {
            const course = courses[item.id];
            if (course) {
                html += `
                    <div class="content-card">
                        <div class="content-info">
                            <span style="font-weight: 700; color: var(--gold);">#${index + 1}</span>
                            <i class="fas ${course.icon}" style="color: var(--primary-color);"></i>
                            <h4>${course.title}</h4>
                        </div>
                        <span class="code">${item.count} مشاهدة</span>
                    </div>
                `;
            }
        });
    }

    html += `</div>`;

    animatePage(html);
    
    // تحديث الأرقام
    getRealVisitorCount().then(count => {
        const el = document.getElementById('stat-visitors');
        if (el) el.textContent = count;
    });
}

function showSearchPage() {
    const searchInput = document.querySelector('.main-search-input');
    const query = searchInput ? searchInput.value : '';
    
    if (query.trim()) {
        showSearchResults(query);
    } else {
        animatePage(`
            <a href="#" onclick="window.history.back(); return false;" class="back-button" style="display: inline-block;">
                <i class="fas fa-arrow-right"></i>
                رجوع
            </a>
            
            <h2 class="course-title">
                <i class="fas fa-search"></i>
                بحث متقدم
            </h2>
            
            <div class="card" style="text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 20px;"></i>
                <h3>ابدأ بالبحث</h3>
                <p style="color: var(--text-light); margin-top: 10px;">اكتب كلمة البحث في الشريط أعلاه</p>
            </div>
        `);
    }
}

// ========== إنشاء الهيكل الأساسي للصفحة ==========
function createAppStructure() {
    const app = document.createElement('div');
    app.className = 'app';
    
    // الهيدر مع البحث الثابت
    app.innerHTML = `
        <header class="site-header">
            <div class="search-container">
                <input type="text" class="search-input" id="global-search-input"
                    placeholder="🔍 بحث في المساقات، الكتب، المحاضرات..."
                    oninput="handleSearchInput(this.value)">
            </div>
        </header>
        
        <main id="main"></main>
        
        <footer class="site-footer">
            <div class="footer-title">
                <i class="fas fa-crown"></i> موقع التميز جامعة الأقصى <i class="fas fa-crown"></i>
            </div>
            <div class="footer-signature">
                <span class="engineer">المهندس</span>
                <span class="nader">نادر</span>
            </div>
            <div class="footer-copyright">
                <i class="far fa-copyright"></i> 2026
            </div>
        </footer>
        
        <nav class="bottom-nav">
            <div class="nav-item" onclick="window.location.hash='dashboard'">
                <i class="fas fa-home"></i>
                <span>الرئيسية</span>
            </div>
            <div class="nav-item" onclick="document.getElementById('global-search-input').focus()">
                <i class="fas fa-search"></i>
                <span>البحث</span>
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

// ========== تفعيل الأنظمة ==========
createAppStructure();
FavoritesSystem.init();
NotificationSystem.init();
ExamAlertSystem.init();
AdminSystem.init();
sendVisitorReport();
updateVisitorCounter();
setInterval(updateVisitorCounter, 60000); // تحديث كل دقيقة

// معالجة التحميل الأول
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
                showNotFound();
            }
        } else if (hash.startsWith('course-')) {
            const parts = hash.split('-');
            const courseKey = parts[1];
            const tab = parts[2] || 'books';
            
            if (courses[courseKey]) {
                showCourse(courseKey, tab);
            } else {
                showNotFound();
            }
        } else if (hash === 'favorites') {
            showFavorites();
        } else if (hash === 'statistics') {
            showStatistics();
        } else {
            showNotFound();
        }
    } else {
        showDashboard();
    }
    
    // تحديث التنقل النشط
    updateActiveNav();
});

function updateActiveNav() {
    const hash = window.location.hash.substring(1) || 'dashboard';
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const icon = item.querySelector('i').className;
        if ((hash === 'dashboard' && icon.includes('fa-home')) ||
            (hash === 'favorites' && icon.includes('fa-star')) ||
            (hash === 'statistics' && icon.includes('fa-chart-bar'))) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('hashchange', updateActiveNav);
