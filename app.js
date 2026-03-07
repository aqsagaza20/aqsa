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

// ========== إضافة CSS ==========
(function addStyles() {
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
            padding: 20px 20px 80px 20px;
            min-height: 100vh;
        }
        
        /* عنوان الصفحة مع أيقونة البحث */
        .page-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 30px;
        }
        
        .page-header i {
            font-size: 2rem;
            color: var(--primary-color);
        }
        
        .page-header h1 {
            font-size: 2rem;
            margin: 0;
            color: var(--text-color);
        }
        
        /* شريط البحث الجديد */
        .search-section {
            margin-bottom: 30px;
        }
        
        .search-label {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            font-size: 1.2rem;
            color: var(--text-color);
        }
        
        .search-label i {
            color: var(--primary-color);
        }
        
        .search-input {
            width: 100%;
            padding: 15px 20px;
            border-radius: 40px;
            border: 2px solid var(--border-color);
            background: var(--card-bg);
            color: var(--text-color);
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-sm);
        }
        
        .search-input:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px var(--shadow-color);
        }
        
        /* أزرار الفصول */
        .semester-buttons {
            display: flex;
            gap: 15px;
            margin: 20px 0 30px;
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
        
        /* محتوى الفصل */
        .semester-content {
            margin-top: 20px;
        }
        
        /* شريط التنقل السفلي */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--bottom-nav-bg);
            backdrop-filter: blur(10px);
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
        }
        
        .nav-item.active {
            color: var(--primary-color);
            background: rgba(74, 144, 226, 0.1);
        }
        
        .nav-item.active i {
            color: var(--primary-color);
        }
        
        /* زر الإعدادات */
        .nav-item.settings-icon i {
            color: var(--text-color);
        }
        
        .nav-item.settings-icon:hover i {
            color: var(--primary-color);
            transform: rotate(90deg);
        }
        
        /* بطاقات المساقات */
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
        }
        
        .code {
            display: inline-block;
            background: rgba(74,144,226,0.1);
            padding: 5px 15px;
            border-radius: 25px;
            font-size: 0.9rem;
            color: var(--primary-color);
        }
        
        /* نجمة المفضلة */
        .favorite-star {
            cursor: pointer;
            display: inline-block;
        }
        
        .favorite-star i {
            font-size: 1.2rem;
            color: var(--gold);
        }
        
        /* رابط الواتساب */
        .whatsapp-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 20px;
            background: rgba(37,211,102,0.1);
            border-radius: 15px;
            margin-bottom: 20px;
            text-decoration: none;
            color: var(--text-color);
            border: 1px solid rgba(37,211,102,0.3);
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
        
        /* إهداء الشهيد */
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
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 10px 0;
        }
        
        /* أزرار الرجوع */
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
            box-shadow: var(--shadow-md);
        }
        
        .back-button:hover {
            transform: translateX(-5px);
            box-shadow: var(--shadow-lg);
        }
        
        /* التبويبات */
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
        
        .tab.active {
            background: var(--primary-color);
            color: white;
        }
        
        /* أزرار الكتب */
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
            box-shadow: var(--shadow-sm);
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
        
        /* أزرار إضافة محتوى */
        .add-rectangle {
            background: linear-gradient(135deg, rgba(74,144,226,0.1), rgba(53,122,189,0.1));
            border: 2px dashed var(--primary-color);
            border-radius: 12px;
            padding: 12px 20px;
            margin: 10px 0;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .add-rectangle:hover {
            background: rgba(74,144,226,0.2);
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
        }
        
        .add-rectangle i {
            font-size: 1.2rem;
            color: var(--primary-color);
        }
        
        .add-rectangle span {
            color: var(--primary-color);
            font-weight: 600;
        }
        
        /* تنسيقات متجاوبة */
        @media (max-width: 768px) {
            body {
                padding: 10px 10px 70px 10px;
            }
            
            .grid {
                grid-template-columns: 1fr;
            }
            
            .semester-buttons {
                flex-direction: column;
            }
            
            .page-header h1 {
                font-size: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);
})();

// ========== نظام الجلسات ==========
let SESSION_ID = localStorage.getItem("UNIVERSITY_SESSION_ID");
if (!SESSION_ID) {
    SESSION_ID = 'user_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("UNIVERSITY_SESSION_ID", SESSION_ID);
}

let userSession = JSON.parse(localStorage.getItem(`session_${SESSION_ID}`)) || {
    id: SESSION_ID,
    lastCourse: null,
    lastTab: 'books',
    favorites: [],
    visitCount: 0,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString()
};

function saveSession() {
    localStorage.setItem(`session_${SESSION_ID}`, JSON.stringify(userSession));
}

function saveLastCourse(courseKey, tab) {
    userSession.lastCourse = courseKey;
    userSession.lastTab = tab;
    userSession.lastVisit = new Date().toISOString();
    saveSession();
}

function getLastCourse() {
    return userSession;
}

// ========== نظام المفضلة ==========
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

// ========== نظام الإحصائيات ==========
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
    
    getTotalViews() {
        return Object.values(this.views).reduce((a, b) => a + b, 0);
    }
};

// ========== نظام البحث ==========
function searchCourses(query) {
    query = query.toLowerCase().trim();
    if (!query) return [];
    
    const results = [];
    
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        if (course.title.toLowerCase().includes(query) || 
            course.code.toLowerCase().includes(query)) {
            results.push({
                type: 'course',
                key: key,
                title: course.title,
                icon: course.icon,
                code: course.code
            });
        }
        
        course.books?.forEach(book => {
            if (book.name.toLowerCase().includes(query)) {
                results.push({
                    type: 'book',
                    name: book.name,
                    link: book.link,
                    courseTitle: course.title,
                    courseKey: key
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
                    courseKey: key,
                    lectureType: lecture.type
                });
            }
        });
    });
    
    return results;
}

let searchTimeout;
function handleSearch(value) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (value.trim()) {
            showSearchResults(value);
        } else {
            showMainPage();
        }
    }, 300);
}

// ========== نظام تنبيه الاختبارات ==========
const ExamAlertSystem = {
    exams: JSON.parse(localStorage.getItem('exams')) || [
        { name: '📝 اختبار الأحياء', date: '2024-12-20', time: '10:00' },
        { name: '🧪 اختبار الكيمياء', date: '2024-12-22', time: '11:00' }
    ],
    
    init() {
        this.checkExams();
        setInterval(() => this.checkExams(), 3600000);
    },
    
    save() {
        localStorage.setItem('exams', JSON.stringify(this.exams));
    },
    
    checkExams() {
        const now = new Date();
        this.exams.forEach(exam => {
            const examDate = new Date(`${exam.date}T${exam.time}`);
            const diffHours = (examDate - now) / (1000 * 60 * 60);
            
            if (diffHours > 0 && diffHours <= 24) {
                this.showAlert(exam);
            }
        });
    },
    
    showAlert(exam) {
        const hoursLeft = Math.floor((new Date(`${exam.date}T${exam.time}`) - new Date()) / (1000 * 60 * 60));
        alert(`🔔 تنبيه: ${exam.name}\nمتبقي ${hoursLeft} ساعة`);
    }
};

// ========== نظام إدارة المحتوى (Admin Panel) ==========
const AdminSystem = {
    isLoggedIn: localStorage.getItem('adminLoggedIn') === 'true',
    
    init() {
        // لا حاجة لإضافة زر منفرد
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
            
            <div class="add-rectangle" onclick="AdminSystem.showAddCourseForm()">
                <i class="fas fa-plus-circle"></i>
                <span>إضافة مساق جديد</span>
            </div>
            
            <div class="add-rectangle" onclick="AdminSystem.showAddBookForm()">
                <i class="fas fa-book"></i>
                <span>إضافة كتاب جديد</span>
            </div>
            
            <div class="add-rectangle" onclick="AdminSystem.showAddLectureForm()">
                <i class="fas fa-video"></i>
                <span>إضافة محاضرة جديدة</span>
            </div>
            
            <div class="add-rectangle" onclick="AdminSystem.showAddExamForm()">
                <i class="fas fa-question-circle"></i>
                <span>إضافة اختبار جديد</span>
            </div>
            
            <div style="margin-top: 20px;">
                <h3>المساقات الحالية</h3>
                <div style="max-height: 200px; overflow-y: auto;">
                    ${Object.keys(courses).map(key => `
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; border-bottom: 1px solid var(--border-color);">
                            <span><i class="fas ${courses[key].icon}"></i> ${courses[key].title}</span>
                            <div>
                                <button onclick="AdminSystem.editCourse('${key}')" style="background: none; border: none; color: var(--info); cursor: pointer; margin-left: 5px;">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button onclick="AdminSystem.deleteCourse('${key}')" style="background: none; border: none; color: var(--danger); cursor: pointer;">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <button onclick="AdminSystem.logout()" class="back-button" style="width: 100%; border: none;">تسجيل الخروج</button>
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
            <h2 style="text-align: center; color: var(--primary-color); margin-bottom: 20px;">دخول المشرف</h2>
            <input type="text" id="admin-user" placeholder="اسم المستخدم" class="search-input" style="margin-bottom: 10px;">
            <input type="password" id="admin-pass" placeholder="كلمة المرور" class="search-input" style="margin-bottom: 20px;">
            <button onclick="AdminSystem.login()" class="back-button" style="width: 100%; border: none;">دخول</button>
            <button onclick="this.closest('.admin-login').remove()" style="margin-top: 10px; width: 100%; padding: 10px; background: none; border: 1px solid var(--border-color); border-radius: 10px; cursor: pointer;">إلغاء</button>
        `;
        
        document.body.appendChild(loginDiv);
    },
    
    login() {
        const user = document.getElementById('admin-user')?.value;
        const pass = document.getElementById('admin-pass')?.value;
        
        if (user === 'admin' && pass === 'admin123') {
            this.isLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            document.querySelector('.admin-login')?.remove();
            this.showAdminPanel();
        } else {
            alert('خطأ في اسم المستخدم أو كلمة المرور');
        }
    },
    
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('adminLoggedIn');
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
            box-shadow: var(--shadow-xl);
        `;
        
        form.innerHTML = `
            <h3 style="margin-bottom: 20px;">إضافة مساق جديد</h3>
            <input type="text" id="new-course-title" placeholder="عنوان المساق" class="search-input" style="margin-bottom: 10px;">
            <input type="text" id="new-course-code" placeholder="رمز المساق" class="search-input" style="margin-bottom: 10px;">
            <select id="new-course-semester" class="search-input" style="margin-bottom: 10px;">
                <option value="1">الفصل الأول</option>
                <option value="2">الفصل الثاني</option>
            </select>
            <select id="new-course-icon" class="search-input" style="margin-bottom: 10px;">
                <option value="fa-book">📚 كتاب</option>
                <option value="fa-dna">🧬 أحياء</option>
                <option value="fa-flask">🧪 كيمياء</option>
                <option value="fa-atom">⚛️ فيزياء</option>
                <option value="fa-brain">🧠 تشريح</option>
                <option value="fa-heartbeat">❤️ فسيولوجيا</option>
                <option value="fa-language">🗣️ لغة</option>
            </select>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="AdminSystem.saveCourse()" class="back-button" style="flex: 1; border: none;">حفظ</button>
                <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 10px; background: var(--danger); color: white; border: none; border-radius: 30px;">إلغاء</button>
            </div>
        `;
        
        document.body.appendChild(form);
    },
    
    saveCourse() {
        const title = document.getElementById('new-course-title')?.value;
        const code = document.getElementById('new-course-code')?.value;
        const semester = document.getElementById('new-course-semester')?.value;
        const icon = document.getElementById('new-course-icon')?.value;
        
        if (!title || !code) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        const key = title.replace(/\s+/g, '_').toLowerCase();
        
        courses[key] = {
            title: title,
            icon: icon || 'fa-book',
            code: code,
            semester: parseInt(semester),
            books: [],
            lectures: []
        };
        
        saveCourses();
        alert('✅ تم إضافة المساق');
        document.querySelector('[style*="position: fixed"]')?.remove();
        document.querySelector('.admin-panel')?.remove();
        this.showAdminPanel();
    },
    
    showAddBookForm() {
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
        
        const courseOptions = Object.keys(courses).map(key => 
            `<option value="${key}">${courses[key].title}</option>`
        ).join('');
        
        form.innerHTML = `
            <h3 style="margin-bottom: 20px;">إضافة كتاب جديد</h3>
            <select id="new-book-course" class="search-input" style="margin-bottom: 10px;">
                ${courseOptions}
            </select>
            <input type="text" id="new-book-name" placeholder="اسم الكتاب" class="search-input" style="margin-bottom: 10px;">
            <input type="url" id="new-book-link" placeholder="رابط الكتاب" class="search-input" style="margin-bottom: 10px;">
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="AdminSystem.saveBook()" class="back-button" style="flex: 1; border: none;">حفظ</button>
                <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 10px; background: var(--danger); color: white; border: none; border-radius: 30px;">إلغاء</button>
            </div>
        `;
        
        document.body.appendChild(form);
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
        
        saveCourses();
        alert('✅ تم إضافة الكتاب');
        document.querySelector('[style*="position: fixed"]')?.remove();
        document.querySelector('.admin-panel')?.remove();
        this.showAdminPanel();
    },
    
    showAddLectureForm() {
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
        
        const courseOptions = Object.keys(courses).map(key => 
            `<option value="${key}">${courses[key].title}</option>`
        ).join('');
        
        form.innerHTML = `
            <h3 style="margin-bottom: 20px;">إضافة محاضرة جديدة</h3>
            <select id="new-lecture-course" class="search-input" style="margin-bottom: 10px;">
                ${courseOptions}
            </select>
            <input type="text" id="new-lecture-name" placeholder="اسم المحاضرة" class="search-input" style="margin-bottom: 10px;">
            <input type="url" id="new-lecture-link" placeholder="رابط المحاضرة" class="search-input" style="margin-bottom: 10px;">
            <select id="new-lecture-type" class="search-input" style="margin-bottom: 10px;">
                <option value="youtube">يوتيوب</option>
                <option value="drive">جوجل درايف</option>
            </select>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="AdminSystem.saveLecture()" class="back-button" style="flex: 1; border: none;">حفظ</button>
                <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 10px; background: var(--danger); color: white; border: none; border-radius: 30px;">إلغاء</button>
            </div>
        `;
        
        document.body.appendChild(form);
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
        
        saveCourses();
        alert('✅ تم إضافة المحاضرة');
        document.querySelector('[style*="position: fixed"]')?.remove();
        document.querySelector('.admin-panel')?.remove();
        this.showAdminPanel();
    },
    
    showAddExamForm() {
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
            <h3 style="margin-bottom: 20px;">إضافة اختبار جديد</h3>
            <input type="text" id="new-exam-name" placeholder="اسم الاختبار" class="search-input" style="margin-bottom: 10px;">
            <input type="date" id="new-exam-date" class="search-input" style="margin-bottom: 10px;">
            <input type="time" id="new-exam-time" class="search-input" style="margin-bottom: 10px;">
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="AdminSystem.saveExam()" class="back-button" style="flex: 1; border: none;">حفظ</button>
                <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 10px; background: var(--danger); color: white; border: none; border-radius: 30px;">إلغاء</button>
            </div>
        `;
        
        document.body.appendChild(form);
    },
    
    saveExam() {
        const name = document.getElementById('new-exam-name')?.value;
        const date = document.getElementById('new-exam-date')?.value;
        const time = document.getElementById('new-exam-time')?.value;
        
        if (!name || !date || !time) {
            alert('الرجاء إدخال جميع البيانات');
            return;
        }
        
        ExamAlertSystem.exams.push({ name, date, time });
        ExamAlertSystem.save();
        
        alert('✅ تم إضافة الاختبار');
        document.querySelector('[style*="position: fixed"]')?.remove();
        document.querySelector('.admin-panel')?.remove();
        this.showAdminPanel();
    },
    
    editCourse(key) {
        const course = courses[key];
        
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
            <h3 style="margin-bottom: 20px;">تعديل المساق</h3>
            <input type="text" id="edit-course-title" value="${course.title}" class="search-input" style="margin-bottom: 10px;">
            <input type="text" id="edit-course-code" value="${course.code}" class="search-input" style="margin-bottom: 10px;">
            <select id="edit-course-semester" class="search-input" style="margin-bottom: 10px;">
                <option value="1" ${course.semester === 1 ? 'selected' : ''}>الفصل الأول</option>
                <option value="2" ${course.semester === 2 ? 'selected' : ''}>الفصل الثاني</option>
            </select>
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="AdminSystem.updateCourse('${key}')" class="back-button" style="flex: 1; border: none;">تحديث</button>
                <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 10px; background: var(--danger); color: white; border: none; border-radius: 30px;">إلغاء</button>
            </div>
        `;
        
        document.body.appendChild(form);
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
        
        saveCourses();
        alert('✅ تم تحديث المساق');
        document.querySelector('[style*="position: fixed"]')?.remove();
        document.querySelector('.admin-panel')?.remove();
        this.showAdminPanel();
    },
    
    deleteCourse(key) {
        if (confirm(`هل أنت متأكد من حذف المساق "${courses[key].title}"؟`)) {
            delete courses[key];
            saveCourses();
            alert('✅ تم الحذف');
            document.querySelector('.admin-panel')?.remove();
            this.showAdminPanel();
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
    updateActiveNav();
}

function showMainPage() {
    const lastCourse = getLastCourse();
    
    const lastCourseHtml = lastCourse.lastCourse && courses[lastCourse.lastCourse] ? `
        <div class="card" style="margin-bottom: 20px;">
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
        <div class="page-header">
            <i class="fas fa-search"></i>
            <h1>🔍 البحث</h1>
            <i class="fas fa-search"></i>
        </div>
        
        <div class="search-section">
            <div class="search-label">
                <i class="fas fa-search"></i>
                <span>ابحث عن مساق، كتاب، أو محاضرة</span>
            </div>
            <input type="text" id="main-search" class="search-input" 
                placeholder="اكتب كلمة البحث..."
                oninput="handleSearch(this.value)">
        </div>
        
        ${lastCourseHtml}
        
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
        
        <div class="semester-buttons">
            <button class="semester-btn" onclick="window.location.hash='semester-1'">
                <i class="fas fa-calendar-alt"></i>
                الفصل الأول
            </button>
            <button class="semester-btn" onclick="window.location.hash='semester-2'">
                <i class="fas fa-calendar-check"></i>
                الفصل الثاني
            </button>
        </div>
        
        <div id="semesterContent" class="semester-content"></div>
    `);
}

function showSemester(sem) {
    const list = Object.keys(courses).filter(key => courses[key].semester === sem);
    
    let html = `
        <button class="back-button" onclick="window.location.hash='dashboard'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        <h2 class="page-header" style="font-size: 1.5rem;">الفصل ${sem === 1 ? 'الأول' : 'الثاني'}</h2>
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
            <h2 style="margin: 0;">
                <i class="fas ${course.icon}"></i> ${course.title}
            </h2>
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
        html += '<div class="section-title"><i class="fas fa-book"></i> الكتب</div>';
        
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
                } else {
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
            html += '<div class="book-button">لا توجد كتب</div>';
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
            html += '<div class="book-button">لا توجد محاضرات</div>';
        }
    }
    else {
        html += `
            <div class="book-button">
                <i class="fas fa-hourglass-half"></i>
                <span>قريباً</span>
            </div>
        `;
    }
    
    html += '</div>';
    tabContent.innerHTML = html;
}

function showSearchResults(query) {
    const results = searchCourses(query);
    
    let html = `
        <button class="back-button" onclick="window.location.hash='dashboard'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        
        <h2 class="page-header">نتائج البحث عن "${query}" (${results.length})</h2>
    `;
    
    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 40px;">
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
                            <i class="fab ${icon}"></i>
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

function showFavorites() {
    let html = `
        <button class="back-button" onclick="window.location.hash='dashboard'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        <h2 class="page-header">المفضلة (${FavoritesSystem.items.length})</h2>
    `;
    
    if (FavoritesSystem.items.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 40px;">
                <i class="far fa-star" style="font-size: 2rem;"></i>
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
        <button class="back-button" onclick="window.location.hash='dashboard'">
            <i class="fas fa-arrow-right"></i> رجوع
        </button>
        
        <h2 class="page-header">إحصائيات الموقع</h2>
        
        <div class="grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="card">
                <i class="fas fa-users"></i>
                <h3 id="stat-visitors">0</h3>
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
            <div class="section-title"><i class="fas fa-trophy"></i> الأكثر مشاهدة</div>
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
        html += '<div class="book-button">لا توجد بيانات</div>';
    }
    
    html += '</div>';
    animatePage(html);
    
    setTimeout(() => {
        const visitors = Object.keys(localStorage).filter(k => k.startsWith('session_')).length;
        document.getElementById('stat-visitors').textContent = visitors;
    }, 100);
}

function showNotFound() {
    animatePage(`
        <div class="card" style="text-align: center; padding: 40px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--warning);"></i>
            <h2>الصفحة غير موجودة</h2>
            <button class="back-button" onclick="window.location.hash='dashboard'" style="margin-top: 20px;">الرئيسية</button>
        </div>
    `);
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

// ========== إنشاء هيكل الصفحة ==========
function createAppStructure() {
    const app = document.createElement('div');
    app.innerHTML = `
        <main id="main"></main>
        
        <nav class="bottom-nav">
            <div class="nav-item" onclick="window.location.hash='dashboard'">
                <i class="fas fa-home"></i>
                <span>الرئيسية</span>
            </div>
            <div class="nav-item" onclick="document.getElementById('main-search')?.focus(); window.location.hash='dashboard';">
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
            <div class="nav-item settings-icon" onclick="AdminSystem.showAdminPanel()">
                <i class="fas fa-cog"></i>
                <span>الإعدادات</span>
            </div>
        </nav>
    `;
    
    document.body.appendChild(app);
}

// ========== معالجة التوجيه ==========
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    
    if (!hash || hash === 'dashboard') {
        showMainPage();
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
    } else {
        showNotFound();
    }
});

// ========== تهيئة الموقع ==========
createAppStructure();
FavoritesSystem.init();
ExamAlertSystem.init();

if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
} else {
    showMainPage();
}
