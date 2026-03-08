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

// ========== دمج بيانات المساقات مع الأيقونات المطلوبة ==========
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
            { name: "محاضرة 1 - الجزء الأول", link: "https://www.youtube.com/watch?v=8COAdAXo6Mo", type: "youtube" },
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
            { name: "كتاب العقيدة الإسلامية", link: "https://drive.google.com/file/d/1Dp31f1IO5W7-3n5_08OnUCY1CRJe8gIZ/view?usp=sharing", year: "2024" }
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

// ========== قائمة الأيقونات المستخدمة في الموقع ==========
const icons = {
    // أيقونات المساقات
    biology: "fa-dna",
    chemistry: "fa-flask",
    physics: "fa-atom",
    anatomy: "fa-brain",
    physiology: "fa-heartbeat",
    biochemistry: "fa-dna",
    med_terms: "fa-language",
    nursing_practical: "fa-hospital-user",
    nursing1: "fa-stethoscope",
    safety: "fa-shield-halved",
    microbio: "fa-bacteria",
    biochem2: "fa-vial",
    quran: "fa-book-quran",
    anatomy2: "fa-bone",
    
    // أيقونات عامة
    crown: "fa-crown",
    whatsapp: "fa-whatsapp",
    plus: "fa-plus",
    star_crescent: "fa-star-and-crescent",
    heart: "fa-heart",
    dove: "fa-dove",
    user_nurse: "fa-user-nurse",
    calendar_alt: "fa-calendar-alt",
    calendar_check: "fa-calendar-check",
    arrow_right: "fa-arrow-right",
    book: "fa-book",
    file_alt: "fa-file-alt",
    question_circle: "fa-question-circle",
    video: "fa-video",
    book_open: "fa-book-open",
    clock: "fa-clock",
    hand_pointer: "fa-hand-pointer",
    video_slash: "fa-video-slash",
    file_pdf: "fa-file-pdf",
    download: "fa-download",
    search: "fa-search",
    frown: "fa-frown",
    youtube: "fa-youtube",
    google_drive: "fa-google-drive"
};

// ========== نظام المفضلة ==========
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
    
    getTotalVisitors() {
        return Object.keys(localStorage).filter(key => key.startsWith('session_')).length;
    },
    
    getTotalViews() {
        return Object.values(this.views).reduce((a, b) => a + b, 0);
    }
};

// ========== نظام البحث الذكي ==========
function advancedSearch(query) {
    query = (query || "").trim().toLowerCase();
    if (!query) return [];
    
    const results = [];
    const searchTerms = query.split(/\s+/).filter(term => term.length > 1);
    
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
    
    return results.sort((a, b) => (b.score || 0) - (a.score || 0));
}

// ========== نظام إدارة المحتوى (Admin Panel) ==========
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
        this.isLoggedIn = saved === 'true';
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
            box-shadow: 0 4px 12px var(--shadow-color);
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
        
        // باقي كود لوحة التحكم (تم اختصاره للتبسيط)
        alert('لوحة التحكم - قيد التطوير');
    },
    
    showLogin() {
        // نموذج تسجيل الدخول
        const pass = prompt('أدخل كلمة المرور:');
        if (pass === this.adminPass) {
            this.isLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            this.showAdminPanel();
        } else if (pass !== null) {
            alert('❌ كلمة المرور غير صحيحة');
        }
    }
};

// ========== دوال عرض الصفحات ==========

function animatePage(html) {
    const main = document.getElementById("main");
    if (main) {
        main.innerHTML = html;
    }
}

function showDashboard() {
    const lastCourse = getLastCourse();
    
    let lastCourseHtml = '';
    if (lastCourse.lastCourse && courses[lastCourse.lastCourse]) {
        lastCourseHtml = `
            <div class="card" style="margin-bottom: 20px; background: linear-gradient(135deg, rgba(74,144,226,0.1), rgba(53,122,189,0.1));">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fas ${icons.clock}" style="color: var(--gold);"></i>
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
        <div class="container">
            <h1 class="page-title">
                <i class="fas ${icons.crown}"></i>
                جامعة الاقصى
                <i class="fas ${icons.crown}"></i>
            </h1>

            ${lastCourseHtml}

            <!-- رابط مجموعة الواتساب -->
            <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link">
                <i class="fab ${icons.whatsapp}"></i>
                <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
                <span class="whatsapp-badge"><i class="fas ${icons.plus}"></i> انضم الآن</span>
            </a>

            <!-- إهداء روح الشهيد -->
            <div class="martyr-dedication">
                <div class="martyr-icon">
                    <i class="fas ${icons.star_crescent}"></i>
                    <i class="fas ${icons.heart}"></i>
                    <i class="fas ${icons.dove}"></i>
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
                <i class="fas ${icons.user_nurse}"></i>
                <h2>تمريض - سنة أولى</h2>
            </div>

            <div class="grid">
                <a href="#semester-1" class="card-link" style="text-decoration: none;">
                    <div class="card">
                        <i class="fas ${icons.calendar_alt}"></i>
                        <h3>الفصل الأول</h3>
                        <span class="code">7 مساقات</span>
                    </div>
                </a>

                <a href="#semester-2" class="card-link" style="text-decoration: none;">
                    <div class="card">
                        <i class="fas ${icons.calendar_check}"></i>
                        <h3>الفصل الثاني</h3>
                        <span class="code">7 مساقات</span>
                    </div>
                </a>
            </div>
            
            <div class="signature">
                <p>المهندس نادر</p>
                <p>© 2026</p>
            </div>
        </div>
    `);
}

function showSemester(sem) {
    const list = sem === 1 ? 
        Object.keys(courses).filter(key => courses[key].semester === 1) :
        Object.keys(courses).filter(key => courses[key].semester === 2);

    let html = `
        <div class="container">
            <a href="#dashboard" class="back-button" style="display: inline-block;">
                <i class="fas ${icons.arrow_right}"></i>
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

    html += `</div></div>`;
    animatePage(html);
}

function showCourse(key, tab) {
    const course = courses[key];
    saveLastCourse(key, tab);
    StatisticsSystem.incrementView('course', key);
    
    let html = `
        <div class="container">
            <a href="#semester-${course.semester}" class="back-button" style="display: inline-block;">
                <i class="fas ${icons.arrow_right}"></i>
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
                <a href="#course-${key}-books" class="tab ${tab === 'books' ? 'active' : ''}">
                    <i class="fas ${icons.book}"></i> كتب
                </a>
                <a href="#course-${key}-summaries" class="tab ${tab === 'summaries' ? 'active' : ''}">
                    <i class="fas ${icons.file_alt}"></i> ملخصات
                </a>
                <a href="#course-${key}-exams" class="tab ${tab === 'exams' ? 'active' : ''}">
                    <i class="fas ${icons.question_circle}"></i> اختبارات
                </a>
                <a href="#course-${key}-lectures" class="tab ${tab === 'lectures' ? 'active' : ''}">
                    <i class="fas ${icons.video}"></i> محاضرات
                </a>
            </div>

            <div id="tabContent" class="tab-content"></div>
        </div>
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
                    <i class="fas ${icons.book}"></i>
                    <span>الكتب الدراسية</span>
                </div>
        `;

        (course.books || []).forEach(book => {
            if (book.coming) {
                html += `
                    <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                        <i class="fas ${icons.book_open}"></i>
                        <span>${book.name || 'كتاب'}</span>
                        <div class="click-here">
                            <i class="fas ${icons.clock}"></i>
                            قريباً
                        </div>
                    </div>
                `;
            } else if (book.link && book.link !== '#') {
                html += `
                    <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fas ${icons.book_open}"></i>
                        <span>${book.name || 'كتاب'}</span>
                        <div class="click-here">
                            <i class="fas ${icons.hand_pointer}"></i>
                            تحميل
                        </div>
                    </a>
                `;
            } else {
                html += `
                    <div class="book-button" onclick="alert('الرابط غير متاح')" style="cursor: pointer;">
                        <i class="fas ${icons.book_open}"></i>
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
                    <i class="fas ${icons.video}"></i>
                    <span>المحاضرات المسجلة</span>
                </div>
        `;

        if (course.lectures && course.lectures.length > 0) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? icons.youtube : icons.google_drive;
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fab ${icon}" style="color: ${lecture.type === 'youtube' ? '#FF0000' : '#34A853'};"></i>
                        <span>${lecture.name || 'محاضرة'}</span>
                        <div class="click-here">
                            <i class="fas ${icons.hand_pointer}"></i>
                            مشاهدة
                        </div>
                    </a>
                `;
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas ${icons.video_slash}" style="font-size: 2rem; color: #95a5a6;"></i>
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
                    <i class="fas ${icons.file_alt}"></i>
                    <span>الملخصات</span>
                </div>
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas ${icons.file_alt}" style="font-size: 2rem; color: #95a5a6;"></i>
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
                    <i class="fas ${icons.question_circle}"></i>
                    <span>الاختبارات</span>
                </div>
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas ${icons.question_circle}" style="font-size: 2rem; color: #95a5a6;"></i>
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
        <div class="container">
            <a href="#dashboard" class="back-button" style="display: inline-block;">
                <i class="fas ${icons.arrow_right}"></i>
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

    html += '</div>';
    animatePage(html);
}

function showStatistics() {
    const mostViewedCourses = StatisticsSystem.getMostViewed('course');
    
    let html = `
        <div class="container">
            <a href="#dashboard" class="back-button" style="display: inline-block;">
                <i class="fas ${icons.arrow_right}"></i>
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

    html += `</div></div>`;

    animatePage(html);
    
    // تحديث الأرقام
    document.getElementById('stat-visitors').textContent = StatisticsSystem.getTotalVisitors();
}

function showSearchPage() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput ? searchInput.value : '';
    
    if (query.trim()) {
        showSearchResults(query);
    } else {
        animatePage(`
            <div class="container">
                <a href="#" onclick="window.history.back(); return false;" class="back-button" style="display: inline-block;">
                    <i class="fas ${icons.arrow_right}"></i>
                    رجوع
                </a>
                
                <h2 class="course-title">
                    <i class="fas ${icons.search}"></i>
                    بحث متقدم
                </h2>
                
                <div class="card" style="text-align: center; padding: 40px;">
                    <i class="fas ${icons.search}" style="font-size: 3rem; color: var(--text-light); margin-bottom: 20px;"></i>
                    <h3>ابدأ بالبحث</h3>
                    <p style="color: var(--text-light); margin-top: 10px;">اكتب كلمة البحث في الشريط أعلاه</p>
                </div>
            </div>
        `);
    }
}

function showSearchResults(query) {
    const results = advancedSearch(query);
    
    let html = `
        <div class="container">
            <a href="#" onclick="window.history.back(); return false;" class="back-button" style="display: inline-block;">
                <i class="fas ${icons.arrow_right}"></i>
                رجوع
            </a>
            
            <h2 class="course-title">
                <i class="fas ${icons.search}"></i>
                نتائج البحث عن "${query}" (${results.length})
            </h2>
    `;

    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 30px;">
                <i class="fas ${icons.frown}" style="font-size: 2rem;"></i>
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
                            <i class="fas ${icons.book_open}" style="color: var(--primary-color);"></i>
                            <h3 style="font-size: 0.95rem;">${result.name}</h3>
                            <span class="code">📖 ${result.category} - ${result.courseTitle}</span>
                        </div>
                    </a>
                `;
            } else if (result.type === 'lecture') {
                const icon = result.lectureType === 'youtube' ? icons.youtube : icons.google_drive;
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

    html += '</div>';
    animatePage(html);
}

function showNotFound() {
    animatePage(`
        <div class="container">
            <div class="card" style="text-align: center; padding: 50px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--warning); margin-bottom: 20px;"></i>
                <h2>الصفحة غير موجودة</h2>
                <p style="margin: 20px 0; color: var(--text-light);">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
                <a href="#dashboard" class="back-button" style="display: inline-block;">العودة للرئيسية</a>
            </div>
        </div>
    `);
}

// ========== إنشاء الهيكل الأساسي للصفحة ==========
function createAppStructure() {
    const app = document.createElement('div');
    app.className = 'app';
    
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
            <div class="signature">
                <p><i class="fas ${icons.crown}"></i> موقع التميز جامعة الأقصى <i class="fas ${icons.crown}"></i></p>
                <p>المهندس نادر</p>
                <p><i class="far fa-copyright"></i> 2026</p>
            </div>
        </footer>
        
        <nav class="bottom-nav">
            <div class="nav-item" onclick="window.location.hash='dashboard'">
                <i class="fas fa-home"></i>
                <span>الرئيسية</span>
            </div>
            <div class="nav-item" onclick="document.getElementById('global-search-input').focus()">
                <i class="fas ${icons.search}"></i>
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

// ========== معالجة التنقل ==========
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    
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

// ========== تهيئة الموقع ==========
function initApp() {
    createAppStructure();
    FavoritesSystem.init();
    AdminSystem.init();
    
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
    
    updateActiveNav();
}

// جعل الدوال متاحة عالمياً
window.FavoritesSystem = FavoritesSystem;
window.handleSearchInput = handleSearchInput;

// بدء التطبيق
window.addEventListener('load', initApp);
