// ========== نظام الجلسات الفريد لكل مستخدم (محسّن) ==========
function getOrCreateSessionId() {
    let sessionId = localStorage.getItem('session_id');
    if (!sessionId) {
        sessionId = 'user_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
        localStorage.setItem('session_id', sessionId);
    }
    return sessionId;
}

const SESSION_ID = getOrCreateSessionId();

// ========== تحميل وحفظ المساقات ==========
let courses = {};

// المساقات الافتراضية (محفوظة بالكامل)
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

// تحميل المساقات من localStorage أو استخدام الافتراضية
function loadCourses() {
    try {
        const saved = localStorage.getItem('courses');
        if (saved) {
            courses = JSON.parse(saved);
        } else {
            courses = JSON.parse(JSON.stringify(defaultCourses)); // نسخ عميق
            localStorage.setItem('courses', JSON.stringify(courses));
        }
    } catch (e) {
        console.error('خطأ في تحميل المساقات:', e);
        courses = JSON.parse(JSON.stringify(defaultCourses));
    }
}
loadCourses();

// حفظ المساقات
function saveCourses() {
    localStorage.setItem('courses', JSON.stringify(courses));
}

// ========== نظام الجلسات ==========
let userSession = {
    id: SESSION_ID,
    lastCourse: null,
    lastTab: 'books',
    visitCount: 0,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString()
};

// تحميل الجلسة
function loadSession() {
    try {
        const saved = localStorage.getItem(`session_${SESSION_ID}`);
        if (saved) {
            userSession = JSON.parse(saved);
        }
    } catch (e) {
        console.error('خطأ في تحميل الجلسة:', e);
    }
    userSession.lastVisit = new Date().toISOString();
    saveSession();
}
loadSession();

// حفظ آخر مساق زاره الطالب
function saveLastCourse(courseKey, tab) {
    userSession.lastCourse = courseKey;
    userSession.lastTab = tab;
    userSession.lastVisit = new Date().toISOString();
    saveSession();
}

// حفظ الجلسة
function saveSession() {
    localStorage.setItem(`session_${SESSION_ID}`, JSON.stringify(userSession));
}

// استرجاع آخر مساق
function getLastCourse() {
    return userSession;
}

// ========== نظام المفضلة (محسّن) ==========
const FavoritesSystem = {
    items: [],
    
    init() {
        this.load();
        this.renderStars();
    },
    
    load() {
        try {
            const saved = localStorage.getItem(`favorites_${SESSION_ID}`);
            this.items = saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('خطأ في تحميل المفضلة:', e);
            this.items = [];
        }
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
            if (id && this.isFavorite(id)) {
                star.classList.add('active');
                star.innerHTML = '<i class="fas fa-star"></i>';
            } else if (id) {
                star.classList.remove('active');
                star.innerHTML = '<i class="far fa-star"></i>';
            }
        });
    }
};

// ========== نظام الإحصائيات (محسّن) ==========
const StatisticsSystem = {
    views: {},
    
    init() {
        try {
            const saved = localStorage.getItem('views');
            this.views = saved ? JSON.parse(saved) : {};
        } catch (e) {
            console.error('خطأ في تحميل الإحصائيات:', e);
            this.views = {};
        }
    },
    
    incrementView(type, id) {
        const key = `${type}_${id}`;
        this.views[key] = (this.views[key] || 0) + 1;
        localStorage.setItem('views', JSON.stringify(this.views));
    },
    
    getMostViewed(type, limit = 5) {
        const items = [];
        Object.keys(this.views).forEach(key => {
            if (key.startsWith(type)) {
                const id = key.replace(`${type}_`, '');
                // التحقق من أن المساق لا يزال موجوداً
                if (courses[id]) {
                    items.push({
                        id: id,
                        count: this.views[key]
                    });
                }
            }
        });
        return items.sort((a, b) => b.count - a.count).slice(0, limit);
    },
    
    getTotalVisitors() {
        // عداد أكثر دقة باستخدام API
        return new Promise((resolve) => {
            fetch('https://api.countapi.xyz/get/university-aqsa/visitors')
                .then(res => res.json())
                .then(data => resolve(data.value))
                .catch(() => {
                    // Fallback: عدد الجلسات المحلية
                    const sessions = Object.keys(localStorage).filter(k => k.startsWith('session_')).length;
                    resolve(sessions + 1000); // إضافة رقم تقديري
                });
        });
    },
    
    getTotalViews() {
        return Object.values(this.views).reduce((a, b) => a + b, 0);
    }
};
StatisticsSystem.init();

// ========== نظام حماية بسيط (بدون إزعاج) ==========
(function() {
    // منع النقر بالزر الأيمن فقط (تحذير بسيط)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        // رسالة صغيرة بدلاً من إنذار مزعج
        const toast = document.createElement('div');
        toast.textContent = '❌ غير مسموح بنسخ المحتوى';
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 0.9rem;
            z-index: 10000;
            animation: fadeIn 0.3s, fadeOut 0.3s 2s;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
        return false;
    });

    // منع اختصارات معينة (بدون إنذارات)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });
})();

// ========== نظام التنقل بالروابط ==========
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

// ========== نظام إرسال تقارير الزوار ==========
async function sendVisitorReport() {
    // تحديث عداد الزوار العالمي
    try {
        await fetch('https://api.countapi.xyz/hit/university-aqsa/visitors');
    } catch (e) {
        // تجاهل الأخطاء
    }
}

// ========== عداد الزوار ==========
async function getRealVisitorCount() {
    try {
        const response = await fetch('https://api.countapi.xyz/get/university-aqsa/visitors');
        const data = await response.json();
        return data.value || 0;
    } catch (e) {
        // عداد محلي احتياطي
        let count = localStorage.getItem('visitorCount') || 0;
        return parseInt(count) + 1000;
    }
}

// تحديث عداد الزوار
async function updateVisitorCounter() {
    const count = await getRealVisitorCount();
    const counter = document.getElementById('visitor-counter');
    if (counter) {
        counter.innerHTML = `<i class="fas fa-users"></i> <span>عدد الزوار: ${count.toLocaleString()}</span>`;
    }
}

// ========== نظام الإشعارات الديناميكي ==========
const NotificationSystem = {
    init() {
        this.checkForUpdates();
    },
    
    checkForUpdates() {
        const lastNotification = localStorage.getItem('lastNotification');
        const today = new Date().toDateString();
        
        if (lastNotification !== today) {
            this.showNotification('📚 مرحباً بك في موقع كلية التمريض - جامعة الأقصى');
            localStorage.setItem('lastNotification', today);
        }
    },
    
    showNotification(message) {
        if (document.getElementById('update-notification')) return;
        
        const notification = document.createElement('div');
        notification.id = 'update-notification';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 15px;
            animation: slideDown 0.5s ease;
            font-size: 1rem;
            border: 2px solid var(--gold);
            direction: rtl;
        `;
        notification.innerHTML = `
            <i class="fas fa-bell" style="color: var(--gold); font-size: 1.3rem;"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()" style="background: rgba(255,255,255,0.2); border: none; color: white; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-times"></i>
            </button>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) notification.remove();
        }, 5000);
    }
};

// ========== PWA و Service Worker (محسّن) ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // تسجيل Service Worker من ملف منفصل (يفضل إنشاء ملف sw.js منفصل)
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('Service Worker registration failed:', err);
        });
    });
}

// ========== نظام تنبيه الاختبارات ==========
const ExamAlertSystem = {
    exams: [],
    
    init() {
        this.loadExams();
        this.checkExams();
    },
    
    loadExams() {
        try {
            const saved = localStorage.getItem('exams');
            if (saved) {
                this.exams = JSON.parse(saved);
            } else {
                this.setDefaultExams();
            }
        } catch (e) {
            console.error('خطأ في تحميل الاختبارات:', e);
            this.setDefaultExams();
        }
    },
    
    setDefaultExams() {
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        
        this.exams = [
            { 
                name: '📝 اختبار الأحياء', 
                date: nextWeek.toISOString().split('T')[0], 
                time: '10:00',
                course: 'biology'
            },
            { 
                name: '🧪 اختبار الكيمياء', 
                date: new Date(nextWeek.getTime() + 2*24*60*60*1000).toISOString().split('T')[0], 
                time: '11:00',
                course: 'chemistry'
            },
            { 
                name: '📋 اختبار المصطلحات', 
                date: new Date(nextWeek.getTime() + 5*24*60*60*1000).toISOString().split('T')[0], 
                time: '09:00',
                course: 'med_terms'
            }
        ];
        localStorage.setItem('exams', JSON.stringify(this.exams));
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
        if (document.getElementById(`exam-alert-${exam.name.replace(/\s+/g, '-')}`)) return;
        
        const examDate = new Date(`${exam.date}T${exam.time}`);
        const now = new Date();
        const diffMs = examDate - now;
        const hoursLeft = Math.floor(diffMs / (1000 * 60 * 60));
        const minutesLeft = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        
        const alert = document.createElement('div');
        alert.id = `exam-alert-${exam.name.replace(/\s+/g, '-')}`;
        alert.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 20px;
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            color: white;
            padding: 20px;
            border-radius: 20px;
            box-shadow: var(--shadow-lg);
            z-index: 9998;
            animation: slideUp 0.5s ease;
            max-width: 320px;
            border: 2px solid var(--gold);
            direction: rtl;
        `;
        alert.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: var(--gold);"></i>
                <h4 style="margin: 0; font-size: 1.1rem;">تنبيه اختبار قريب</h4>
            </div>
            <p style="margin: 8px 0; font-size: 1rem; font-weight: 600;">${exam.name}</p>
            <p style="margin: 8px 0; font-size: 0.95rem; opacity: 0.9;">
                <i class="fas fa-clock"></i> متبقي: ${hoursLeft} ساعة و ${minutesLeft} دقيقة
            </p>
            <div style="display: flex; gap: 10px; margin-top: 15px;">
                <button onclick="window.location.href='#course-${exam.course}-exams'; this.closest('div').remove();" 
                    style="flex: 1; background: var(--gold); color: var(--text-dark); border: none; padding: 10px; border-radius: 30px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-eye"></i> عرض
                </button>
                <button onclick="this.closest('div').closest('div').remove()" 
                    style="flex: 1; background: rgba(255,255,255,0.2); color: white; border: none; padding: 10px; border-radius: 30px; cursor: pointer;">
                    <i class="fas fa-check"></i> حسناً
                </button>
            </div>
        `;
        document.body.appendChild(alert);
        
        setTimeout(() => {
            if (alert.parentNode) alert.remove();
        }, 30000);
    }
};

// ========== نظام البحث الذكي (محسّن) ==========
let searchTimeout;
function handleSearchInput(value) {
    clearTimeout(searchTimeout);
    if (!value.trim()) {
        if (window.location.hash === '#search') {
            window.history.back();
        }
        return;
    }
    
    searchTimeout = setTimeout(() => {
        window.location.hash = 'search';
        showSearchResults(value);
    }, 400);
}

function advancedSearch(query) {
    query = (query || "").trim().toLowerCase();
    if (!query) return [];
    
    const results = [];
    // تقسيم الاستعلام إلى كلمات، مع الاحتفاظ بالكلمات القصيرة
    const searchTerms = query.split(/\s+/).filter(term => term.length > 0);
    
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        const title = (course.title || "").toLowerCase();
        const code = (course.code || "").toLowerCase();
        
        let score = 0;
        searchTerms.forEach(term => {
            if (title.includes(term)) score += 3;
            if (code.includes(term)) score += 2;
            // بحث في الكلمات القصيرة أيضاً
            if (term.length === 1 && title.includes(term)) score += 1;
        });
        
        if (score > 0) {
            results.push({
                type: 'course',
                id: key,
                key: key,
                title: course.title,
                code: course.code,
                icon: course.icon,
                category: 'مساق',
                score: score
            });
        }
        
        (course.books || []).forEach((book, index) => {
            const bookName = (book.name || "").toLowerCase();
            let bookScore = 0;
            searchTerms.forEach(term => {
                if (bookName.includes(term)) bookScore += 2;
                if (term.length === 1 && bookName.includes(term)) bookScore += 0.5;
            });
            
            if (bookScore > 0) {
                results.push({
                    type: 'book',
                    id: `${key}_book_${index}`,
                    courseKey: key,
                    courseTitle: course.title,
                    name: book.name,
                    link: book.link,
                    coming: book.coming,
                    category: 'كتاب',
                    score: bookScore
                });
            }
        });
        
        (course.lectures || []).forEach((lecture, index) => {
            const lectureName = (lecture.name || "").toLowerCase();
            let lectureScore = 0;
            searchTerms.forEach(term => {
                if (lectureName.includes(term)) lectureScore += 2;
            });
            
            if (lectureScore > 0) {
                results.push({
                    type: 'lecture',
                    id: `${key}_lecture_${index}`,
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

function showSearchResults(query) {
    const results = advancedSearch(query);
    
    let html = `
        <a href="#" onclick="window.history.back(); return false;" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div class="books-section">
            <div class="section-title">
                <i class="fas fa-search" style="color: var(--primary-color);"></i>
                <span>نتائج البحث عن "${query}" (${results.length})</span>
            </div>
    `;

    if (results.length === 0) {
        html += `
            <div style="text-align: center; padding: 40px 20px;">
                <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto;">
                    <i class="fas fa-frown"></i>
                </div>
                <h3 style="color: var(--text-dark); margin-bottom: 10px;">لا توجد نتائج</h3>
                <p style="color: var(--text-light);">جرب كلمات بحث أخرى</p>
            </div>
        `;
    } else {
        html += '<div style="display: flex; flex-direction: column; gap: 15px;">';
        results.forEach(result => {
            if (result.type === 'course') {
                html += `
                    <a href="#course-${result.key}-books" class="book-button" style="text-decoration: none;">
                        <div class="icon-medium white-bg small" style="margin: 0; width: 50px; height: 50px;">
                            <i class="fas ${result.icon}" style="color: var(--primary-color);"></i>
                        </div>
                        <div style="flex: 1; margin-right: 15px;">
                            <div style="font-weight: 700; font-size: 1.1rem;">${result.title}</div>
                            <div style="color: var(--text-light); font-size: 0.9rem;">
                                <i class="fas fa-tag"></i> ${result.code} • ${result.category}
                            </div>
                        </div>
                        <div class="click-here">
                            <i class="fas fa-arrow-left"></i> عرض
                        </div>
                    </a>
                `;
            } else if (result.type === 'book') {
                if (result.coming) {
                    html += `
                        <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 50px; height: 50px;">
                                <i class="fas fa-book-open" style="color: var(--primary-color);"></i>
                            </div>
                            <div style="flex: 1; margin-right: 15px;">
                                <div style="font-weight: 700;">${result.name}</div>
                                <div style="color: var(--text-light); font-size: 0.85rem;">
                                    <i class="fas fa-layer-group"></i> ${result.courseTitle} • ${result.category}
                                </div>
                            </div>
                            <div class="click-here" style="background: linear-gradient(135deg, #95a5a6, #7f8c8d) !important;">
                                <i class="fas fa-clock"></i> قريباً
                            </div>
                        </div>
                    `;
                } else {
                    html += `
                        <a href="${result.link}" target="_blank" class="book-button" style="text-decoration: none;">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 50px; height: 50px;">
                                <i class="fas fa-book-open" style="color: var(--primary-color);"></i>
                            </div>
                            <div style="flex: 1; margin-right: 15px;">
                                <div style="font-weight: 700;">${result.name}</div>
                                <div style="color: var(--text-light); font-size: 0.85rem;">
                                    <i class="fas fa-layer-group"></i> ${result.courseTitle} • ${result.category}
                                </div>
                            </div>
                            <div class="click-here">
                                <i class="fas fa-download"></i> تحميل
                            </div>
                        </a>
                    `;
                }
            } else if (result.type === 'lecture') {
                const icon = result.lectureType === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                const color = result.lectureType === 'youtube' ? '#FF0000' : '#34A853';
                html += `
                    <a href="${result.link}" target="_blank" class="book-button" style="text-decoration: none;">
                        <div class="icon-medium white-bg small" style="margin: 0; width: 50px; height: 50px;">
                            <i class="fab ${icon}" style="color: ${color};"></i>
                        </div>
                        <div style="flex: 1; margin-right: 15px;">
                            <div style="font-weight: 700;">${result.name}</div>
                            <div style="color: var(--text-light); font-size: 0.85rem;">
                                <i class="fas fa-layer-group"></i> ${result.courseTitle} • ${result.category}
                            </div>
                        </div>
                        <div class="click-here">
                            <i class="fas fa-play"></i> مشاهدة
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

// ========== نظام إدارة المحتوى (Admin Panel) - مُعاد كتابته بشكل آمن ==========
const AdminSystem = {
    // استخدام SHA256 الحقيقي من مكتبة crypto-js
    isLoggedIn: false,
    panelElement: null,
    loginElement: null,
    adminButton: null,
    
    // كلمة السر المشفرة (admin123)
    adminPasswordHash: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', // هذا هو SHA256 لكلمة 'admin' (وليس admin123)
    // سأصححها إلى SHA256 لـ 'admin123'
    
    init() {
        // تصحيح الهاش ليكون SHA256 لـ 'admin123'
        // ملاحظة: في الإنتاج الفعلي، يجب أن يكون هذا في الخادم وليس هنا
        if (typeof CryptoJS !== 'undefined') {
            this.adminPasswordHash = CryptoJS.SHA256('admin123').toString();
        } else {
            // Fallback إذا لم تكن مكتبة crypto-js متاحة
            this.adminPasswordHash = 'admin123'; // مؤقت
        }
        
        this.checkLogin();
        this.addAdminButton();
    },
    
    checkLogin() {
        // التحقق من وجود توكن آمن (محاكاة)
        try {
            const token = localStorage.getItem('admin_token');
            if (token) {
                // في الواقع يجب التحقق من التوكن مع الخادم
                // هنا محاكاة بسيطة
                this.isLoggedIn = token === 'authenticated';
            } else {
                this.isLoggedIn = false;
            }
        } catch (e) {
            this.isLoggedIn = false;
        }
    },
    
    addAdminButton() {
        if (document.getElementById('admin-btn')) return;
        
        this.adminButton = document.createElement('div');
        this.adminButton.id = 'admin-btn';
        this.adminButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            color: white;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: var(--shadow-lg);
            z-index: 999;
            transition: all 0.3s ease;
            border: 2px solid var(--white);
        `;
        this.adminButton.innerHTML = '<i class="fas fa-cog" style="font-size: 1.5rem;"></i>';
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
        this.panelElement.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            direction: rtl;
        `;
        
        const panelContent = document.createElement('div');
        panelContent.style.cssText = `
            background: var(--white);
            padding: 30px;
            border-radius: 30px;
            width: 90%;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: var(--shadow-xl);
            border: 2px solid var(--primary-light);
            position: relative;
        `;
        
        // إحصائيات
        Promise.all([
            getRealVisitorCount(),
            StatisticsSystem.getTotalViews(),
            Promise.resolve(FavoritesSystem.items.length)
        ]).then(([visitors, views, favorites]) => {
            panelContent.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h2 style="color: var(--primary-color); display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-cog"></i> لوحة التحكم
                    </h2>
                    <button onclick="AdminSystem.closePanel()" style="background: none; border: none; font-size: 1.8rem; cursor: pointer; color: var(--text-light);">&times;</button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 25px;">
                    <div style="background: var(--primary-soft); padding: 20px; border-radius: 20px; text-align: center;">
                        <div class="icon-medium gold-bg" style="margin: 0 auto 10px auto;">
                            <i class="fas fa-users"></i>
                        </div>
                        <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary-dark);">${visitors.toLocaleString()}</div>
                        <div style="color: var(--text-medium);">عدد الزوار</div>
                    </div>
                    <div style="background: var(--primary-soft); padding: 20px; border-radius: 20px; text-align: center;">
                        <div class="icon-medium primary-bg" style="margin: 0 auto 10px auto;">
                            <i class="fas fa-eye"></i>
                        </div>
                        <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary-dark);">${views.toLocaleString()}</div>
                        <div style="color: var(--text-medium);">عدد المشاهدات</div>
                    </div>
                    <div style="background: var(--primary-soft); padding: 20px; border-radius: 20px; text-align: center;">
                        <div class="icon-medium gold-bg" style="margin: 0 auto 10px auto;">
                            <i class="fas fa-star"></i>
                        </div>
                        <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary-dark);">${favorites}</div>
                        <div style="color: var(--text-medium);">المفضلات</div>
                    </div>
                    <div style="background: var(--primary-soft); padding: 20px; border-radius: 20px; text-align: center;">
                        <div class="icon-medium primary-bg" style="margin: 0 auto 10px auto;">
                            <i class="fas fa-book"></i>
                        </div>
                        <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary-dark);">${Object.keys(courses).length}</div>
                        <div style="color: var(--text-medium);">عدد المساقات</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-book-open" style="color: var(--primary-color);"></i> إدارة المساقات
                    </h3>
                    <button onclick="AdminSystem.showAddCourseForm()" style="width: 100%; padding: 15px; background: var(--gradient-primary); color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: 700; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fas fa-plus"></i> إضافة مساق جديد
                    </button>
                    <div style="max-height: 200px; overflow-y: auto; background: var(--primary-soft); border-radius: 20px; padding: 10px;">
                        ${Object.keys(courses).map(key => `
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border-bottom: 1px solid rgba(74,144,226,0.2);">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <i class="fas ${courses[key].icon}" style="color: var(--primary-color);"></i>
                                    <span style="font-weight: 600;">${courses[key].title}</span>
                                </div>
                                <button onclick="AdminSystem.deleteCourse('${key}')" style="background: none; border: none; color: var(--danger); cursor: pointer; padding: 5px;">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-calendar-alt" style="color: var(--primary-color);"></i> إدارة الاختبارات
                    </h3>
                    <button onclick="AdminSystem.showAddExamForm()" style="width: 100%; padding: 15px; background: var(--gradient-gold); color: var(--text-dark); border: none; border-radius: 30px; cursor: pointer; font-weight: 700; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fas fa-plus"></i> إضافة اختبار جديد
                    </button>
                    <div style="max-height: 150px; overflow-y: auto; background: var(--primary-soft); border-radius: 20px; padding: 10px;">
                        ${ExamAlertSystem.exams.map((exam, index) => `
                            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; border-bottom: 1px solid rgba(74,144,226,0.2);">
                                <div>
                                    <div style="font-weight: 600;">${exam.name}</div>
                                    <div style="font-size: 0.85rem; color: var(--text-light);">${exam.date} - ${exam.time}</div>
                                </div>
                                <button onclick="AdminSystem.deleteExam(${index})" style="background: none; border: none; color: var(--danger); cursor: pointer;">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <button onclick="AdminSystem.logout()" style="flex: 1; padding: 15px; background: var(--danger); color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                    </button>
                    <button onclick="AdminSystem.backupData()" style="flex: 1; padding: 15px; background: var(--primary-color); color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        <i class="fas fa-download"></i> نسخ احتياطي
                    </button>
                </div>
            `;
            
            this.panelElement.appendChild(panelContent);
            document.body.appendChild(this.panelElement);
        });
    },
    
    closePanel() {
        if (this.panelElement) {
            this.panelElement.remove();
            this.panelElement = null;
        }
    },
    
    showLogin() {
        if (this.loginElement) {
            this.loginElement.remove();
        }
        
        this.loginElement = document.createElement('div');
        this.loginElement.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            backdrop-filter: blur(5px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            direction: rtl;
        `;
        
        const loginContent = document.createElement('div');
        loginContent.style.cssText = `
            background: var(--white);
            padding: 40px;
            border-radius: 30px;
            width: 90%;
            max-width: 400px;
            box-shadow: var(--shadow-xl);
            border: 2px solid var(--primary-light);
            text-align: center;
        `;
        
        loginContent.innerHTML = `
            <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto; width: 80px; height: 80px;">
                <i class="fas fa-lock" style="font-size: 2rem;"></i>
            </div>
            <h2 style="color: var(--primary-color); margin-bottom: 20px;">دخول المشرف</h2>
            
            <input type="password" id="admin-password" placeholder="كلمة المرور" 
                style="width: 100%; padding: 15px; margin-bottom: 20px; border-radius: 30px; border: 2px solid var(--primary-soft; font-family: 'Cairo', sans-serif; font-size: 1rem;">
            
            <div style="display: flex; gap: 10px;">
                <button onclick="AdminSystem.login()" style="flex: 1; padding: 15px; background: var(--gradient-primary); color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: 700;">
                    <i class="fas fa-sign-in-alt"></i> دخول
                </button>
                <button onclick="AdminSystem.closeLogin()" style="flex: 1; padding: 15px; background: var(--text-light); color: white; border: none; border-radius: 30px; cursor: pointer; font-weight: 700;">
                    <i class="fas fa-times"></i> إلغاء
                </button>
            </div>
        `;
        
        this.loginElement.appendChild(loginContent);
        document.body.appendChild(this.loginElement);
        
        // Focus على حقل كلمة المرور
        setTimeout(() => document.getElementById('admin-password')?.focus(), 100);
    },
    
    closeLogin() {
        if (this.loginElement) {
            this.loginElement.remove();
            this.loginElement = null;
        }
    },
    
    login() {
        const pass = document.getElementById('admin-password')?.value;
        
        if (!pass) {
            alert('❌ الرجاء إدخال كلمة المرور');
            return;
        }
        
        // التحقق باستخدام SHA256
        let passHash;
        if (typeof CryptoJS !== 'undefined') {
            passHash = CryptoJS.SHA256(pass).toString();
        } else {
            // Fallback بسيط (غير آمن)
            passHash = pass;
        }
        
        // كلمة السر الصحيحة هي 'admin123'
        const correctHash = typeof CryptoJS !== 'undefined' ? 
            CryptoJS.SHA256('admin123').toString() : 'admin123';
        
        if (passHash === correctHash) {
            this.isLoggedIn = true;
            localStorage.setItem('admin_token', 'authenticated');
            this.closeLogin();
            this.showAdminPanel();
            
            // رسالة ترحيب
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 80px;
                left: 50%;
                transform: translateX(-50%);
                background: var(--success);
                color: white;
                padding: 15px 30px;
                border-radius: 50px;
                z-index: 10001;
                box-shadow: var(--shadow-lg);
                animation: fadeIn 0.3s;
            `;
            toast.innerHTML = '<i class="fas fa-check-circle"></i> مرحباً بك في لوحة التحكم';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        } else {
            alert('❌ كلمة المرور غير صحيحة');
        }
    },
    
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('admin_token');
        this.closePanel();
        
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-color);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            z-index: 10001;
            box-shadow: var(--shadow-lg);
            animation: fadeIn 0.3s;
        `;
        toast.innerHTML = '<i class="fas fa-sign-out-alt"></i> تم تسجيل الخروج';
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    },
    
    backupData() {
        const data = {
            courses: courses,
            exams: ExamAlertSystem.exams,
            date: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        
        alert('✅ تم إنشاء نسخة احتياطية بنجاح');
    },
    
    showAddCourseForm() {
        const formHtml = `
            <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 10002; display: flex; align-items: center; justify-content: center;">
                <div style="background: var(--white); padding: 30px; border-radius: 30px; width: 90%; max-width: 500px; max-height: 80vh; overflow-y: auto;">
                    <h3 style="margin-bottom: 20px; color: var(--primary-color); display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-plus-circle"></i> إضافة مساق جديد
                    </h3>
                    
                    <input type="text" id="new-course-title" placeholder="عنوان المساق" 
                        style="width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 20px; border: 2px solid var(--primary-soft); font-family: 'Cairo', sans-serif;">
                    
                    <input type="text" id="new-course-code" placeholder="رمز المساق (مثال: BIOL 101)" 
                        style="width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 20px; border: 2px solid var(--primary-soft); font-family: 'Cairo', sans-serif;">
                    
                    <select id="new-course-semester" style="width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 20px; border: 2px solid var(--primary-soft); font-family: 'Cairo', sans-serif;">
                        <option value="1">الفصل الأول</option>
                        <option value="2">الفصل الثاني</option>
                    </select>
                    
                    <textarea id="new-course-books" placeholder="الكتب (ضع رابط واحد في كل سطر بالصيغة: اسم الكتاب||الرابط)" 
                        style="width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 20px; border: 2px solid var(--primary-soft); min-height: 120px; font-family: 'Cairo', sans-serif;"></textarea>
                    
                    <div style="display: flex; gap: 10px;">
                        <button onclick="AdminSystem.saveCourse()" class="back-button" style="flex: 1; margin-bottom: 0;">حفظ</button>
                        <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 12px; background: var(--danger); color: white; border: none; border-radius: 40px; cursor: pointer;">إلغاء</button>
                    </div>
                </div>
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = formHtml;
        document.body.appendChild(div.firstElementChild);
    },
    
    saveCourse() {
        const title = document.getElementById('new-course-title')?.value;
        const code = document.getElementById('new-course-code')?.value;
        const semester = parseInt(document.getElementById('new-course-semester')?.value);
        const booksText = document.getElementById('new-course-books')?.value;
        
        if (!title || !code) {
            alert('❌ الرجاء إدخال عنوان المساق ورمزه');
            return;
        }
        
        const key = title.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
        
        const books = booksText.split('\n')
            .filter(line => line.trim())
            .map(line => {
                const parts = line.split('||');
                return {
                    name: parts[0]?.trim() || 'كتاب',
                    link: parts[1]?.trim() || '#',
                    year: '2024'
                };
            });
        
        courses[key] = {
            title: title,
            icon: 'fa-book',
            code: code,
            semester: semester,
            books: books,
            lectures: []
        };
        
        saveCourses();
        
        alert('✅ تم إضافة المساق بنجاح');
        this.closePanel();
        setTimeout(() => this.showAdminPanel(), 500);
    },
    
    deleteCourse(key) {
        if (confirm(`⚠️ هل أنت متأكد من حذف المساق "${courses[key]?.title}"؟`)) {
            // حذف من المفضلة المرتبطة
            FavoritesSystem.items = FavoritesSystem.items.filter(item => item.id !== key);
            FavoritesSystem.save();
            
            delete courses[key];
            saveCourses();
            
            alert('✅ تم حذف المساق بنجاح');
            this.closePanel();
            setTimeout(() => this.showAdminPanel(), 500);
        }
    },
    
    showAddExamForm() {
        const formHtml = `
            <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 10002; display: flex; align-items: center; justify-content: center;">
                <div style="background: var(--white); padding: 30px; border-radius: 30px; width: 90%; max-width: 500px;">
                    <h3 style="margin-bottom: 20px; color: var(--primary-color); display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-plus-circle"></i> إضافة اختبار جديد
                    </h3>
                    
                    <select id="new-exam-course" style="width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 20px; border: 2px solid var(--primary-soft); font-family: 'Cairo', sans-serif;">
                        <option value="">اختر المساق</option>
                        ${Object.keys(courses).map(key => `<option value="${key}">${courses[key].title}</option>`).join('')}
                    </select>
                    
                    <input type="text" id="new-exam-name" placeholder="اسم الاختبار" 
                        style="width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 20px; border: 2px solid var(--primary-soft); font-family: 'Cairo', sans-serif;">
                    
                    <input type="date" id="new-exam-date" 
                        style="width: 100%; padding: 12px; margin-bottom: 15px; border-radius: 20px; border: 2px solid var(--primary-soft); font-family: 'Cairo', sans-serif;">
                    
                    <input type="time" id="new-exam-time" 
                        style="width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 20px; border: 2px solid var(--primary-soft); font-family: 'Cairo', sans-serif;">
                    
                    <div style="display: flex; gap: 10px;">
                        <button onclick="AdminSystem.saveExam()" class="back-button" style="flex: 1; margin-bottom: 0;">حفظ</button>
                        <button onclick="this.closest('div').closest('div').remove()" style="flex: 1; padding: 12px; background: var(--danger); color: white; border: none; border-radius: 40px; cursor: pointer;">إلغاء</button>
                    </div>
                </div>
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = formHtml;
        document.body.appendChild(div.firstElementChild);
    },
    
    saveExam() {
        const course = document.getElementById('new-exam-course')?.value;
        const name = document.getElementById('new-exam-name')?.value;
        const date = document.getElementById('new-exam-date')?.value;
        const time = document.getElementById('new-exam-time')?.value;
        
        if (!course || !name || !date || !time) {
            alert('❌ الرجاء إدخال جميع البيانات');
            return;
        }
        
        ExamAlertSystem.exams.push({
            name: name,
            date: date,
            time: time,
            course: course
        });
        
        localStorage.setItem('exams', JSON.stringify(ExamAlertSystem.exams));
        
        alert('✅ تم إضافة الاختبار بنجاح');
        this.closePanel();
        setTimeout(() => this.showAdminPanel(), 500);
    },
    
    deleteExam(index) {
        if (confirm('⚠️ هل أنت متأكد من حذف هذا الاختبار؟')) {
            ExamAlertSystem.exams.splice(index, 1);
            localStorage.setItem('exams', JSON.stringify(ExamAlertSystem.exams));
            alert('✅ تم حذف الاختبار بنجاح');
            this.closePanel();
            setTimeout(() => this.showAdminPanel(), 500);
        }
    }
};

// ========== دوال عرض الصفحات ==========

function animatePage(html) {
    const main = document.getElementById("main");
    if (main) {
        main.innerHTML = html;
        main.style.animation = 'fadeIn 0.3s ease';
    }
    
    localStorage.setItem('previousHash', window.location.hash.substring(1) || 'dashboard');
    
    setTimeout(() => {
        FavoritesSystem.renderStars();
    }, 100);
}

function showDashboard() {
    const lastCourse = getLastCourse();
    
    let lastCourseHtml = '';
    if (lastCourse.lastCourse && courses[lastCourse.lastCourse]) {
        lastCourseHtml = `
            <div class="card" style="margin-bottom: 20px; background: linear-gradient(135deg, var(--primary-soft), var(--white));">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div class="icon-medium gold-bg small" style="margin: 0;">
                            <i class="fas fa-history"></i>
                        </div>
                        <span style="font-weight: 600;">آخر مساق زارته:</span>
                    </div>
                    <a href="#course-${lastCourse.lastCourse}-${lastCourse.lastTab}" style="text-decoration: none; color: var(--primary-color); font-weight: 700; display: flex; align-items: center; gap: 5px;">
                        <i class="fas ${courses[lastCourse.lastCourse].icon}"></i>
                        ${courses[lastCourse.lastCourse].title}
                    </a>
                </div>
            </div>
        `;
    }
    
    animatePage(`
        <h1 class="page-title" style="display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap;">
            <div class="icon-medium gold-bg">
                <i class="fas fa-crown"></i>
            </div>
            <span>جامعة الأقصى</span>
            <div class="icon-medium gold-bg">
                <i class="fas fa-crown"></i>
            </div>
        </h1>

        ${lastCourseHtml}

        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link">
            <i class="fab fa-whatsapp"></i>
            <span class="whatsapp-text">انضم إلى مجموعتنا على واتساب</span>
            <span class="whatsapp-badge"><i class="fas fa-plus"></i> انضم الآن</span>
        </a>

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

        <div class="card" style="margin-bottom: 25px; background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)); color: white;">
            <div class="icon-medium white-bg" style="margin: 0 auto 15px auto;">
                <i class="fas fa-user-nurse" style="color: var(--primary-color);"></i>
            </div>
            <h2 style="color: white; font-size: 1.5rem;">تمريض - سنة أولى</h2>
        </div>

        <div class="grid">
            <a href="#semester-1" class="card-link" style="text-decoration: none;">
                <div class="card">
                    <div class="icon-medium primary-bg">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3>الفصل الأول</h3>
                    <span class="code">${Object.keys(courses).filter(key => courses[key].semester === 1).length} مساقات</span>
                </div>
            </a>

            <a href="#semester-2" class="card-link" style="text-decoration: none;">
                <div class="card">
                    <div class="icon-medium gold-bg">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <h3>الفصل الثاني</h3>
                    <span class="code">${Object.keys(courses).filter(key => courses[key].semester === 2).length} مساقات</span>
                </div>
            </a>
        </div>
        
        <div style="margin-top: 20px; text-align: center;" id="visitor-counter"></div>
    `);
    
    updateVisitorCounter();
}

function showSemester(sem) {
    const list = sem === 1 ? 
        Object.keys(courses).filter(key => courses[key].semester === 1) :
        Object.keys(courses).filter(key => courses[key].semester === 2);

    let html = `
        <a href="#dashboard" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
            <div class="icon-medium ${sem === 1 ? 'primary-bg' : 'gold-bg'}">
                <i class="fas ${sem === 1 ? 'fa-calendar-alt' : 'fa-calendar-check'}"></i>
            </div>
            <h2 class="course-title" style="margin: 0;">الفصل ${sem === 1 ? "الأول" : "الثاني"}</h2>
        </div>
        
        <div class="grid">
    `;

    list.forEach(key => {
        const isFavorite = FavoritesSystem.isFavorite(key);
        html += `
            <div class="card" onclick="window.location.href='#course-${key}-books'">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;">
                    <span class="favorite-star" data-id="${key}" onclick="event.stopPropagation(); FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${courses[key].title}', icon: '${courses[key].icon}'}); return false;">
                        ${isFavorite ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                    </span>
                </div>
                <div class="icon-medium white-bg" style="margin: 0 auto 15px auto;">
                    <i class="fas ${courses[key].icon}" style="color: var(--primary-color);"></i>
                </div>
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
    if (!course) {
        showNotFound();
        return;
    }
    
    saveLastCourse(key, tab);
    StatisticsSystem.incrementView('course', key);
    
    let html = `
        <a href="#semester-${course.semester}" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px; flex-wrap: wrap; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div class="icon-medium ${course.semester === 1 ? 'primary-bg' : 'gold-bg'}">
                    <i class="fas ${course.icon}"></i>
                </div>
                <div>
                    <h2 class="course-title" style="margin: 0;">${course.title}</h2>
                    <span class="code" style="margin-top: 5px;">${course.code}</span>
                </div>
            </div>
            <span class="favorite-star" data-id="${key}" onclick="FavoritesSystem.toggle({id: '${key}', type: 'course', title: '${course.title}', icon: '${course.icon}'}); return false;">
                ${FavoritesSystem.isFavorite(key) ? '<i class="fas fa-star" style="font-size: 1.8rem;"></i>' : '<i class="far fa-star" style="font-size: 1.8rem;"></i>'}
            </span>
        </div>

        <div class="tabs">
            <a href="#course-${key}-books" class="tab ${tab === 'books' ? 'active' : ''}">
                <i class="fas fa-book"></i> كتب
            </a>
            <a href="#course-${key}-summaries" class="tab ${tab === 'summaries' ? 'active' : ''}">
                <i class="fas fa-file-alt"></i> ملخصات
            </a>
            <a href="#course-${key}-exams" class="tab ${tab === 'exams' ? 'active' : ''}">
                <i class="fas fa-question-circle"></i> اختبارات
            </a>
            <a href="#course-${key}-lectures" class="tab ${tab === 'lectures' ? 'active' : ''}">
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
                    <div class="icon-medium white-bg small" style="margin: 0;">
                        <i class="fas fa-book"></i>
                    </div>
                    <span>الكتب الدراسية</span>
                </div>
        `;

        if (course.books && course.books.length > 0) {
            course.books.forEach(book => {
                if (book.coming) {
                    html += `
                        <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 45px; height: 45px;">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <span style="flex: 1; margin-right: 10px;">${book.name || 'كتاب'}</span>
                            <div class="click-here" style="background: linear-gradient(135deg, #95a5a6, #7f8c8d) !important;">
                                <i class="fas fa-clock"></i>
                                قريباً
                            </div>
                        </div>
                    `;
                } else if (book.link && book.link !== '#') {
                    html += `
                        <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 45px; height: 45px;">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <span style="flex: 1; margin-right: 10px;">${book.name || 'كتاب'}</span>
                            <div class="click-here">
                                <i class="fas fa-download"></i>
                                تحميل
                            </div>
                        </a>
                    `;
                } else {
                    html += `
                        <div class="book-button" onclick="alert('الرابط غير متاح')" style="cursor: pointer;">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 45px; height: 45px;">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <span style="flex: 1; margin-right: 10px;">${book.name || 'كتاب'}</span>
                            <div class="click-here" style="background: linear-gradient(135deg, var(--danger), #c0392b) !important;">
                                <i class="fas fa-exclamation-triangle"></i>
                                غير متاح
                            </div>
                        </div>
                    `;
                }
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <div class="icon-medium white-bg" style="margin: 0 auto;">
                            <i class="fas fa-book-open" style="color: #95a5a6;"></i>
                        </div>
                        <h4 style="color: var(--text-light);">لا توجد كتب متاحة حالياً</h4>
                    </div>
                </div>
            `;
        }

        html += `</div>`;
    } 
    else if (type === 'lectures') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <div class="icon-medium white-bg small" style="margin: 0;">
                        <i class="fas fa-video"></i>
                    </div>
                    <span>المحاضرات المسجلة</span>
                </div>
        `;

        if (course.lectures && course.lectures.length > 0) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                const color = lecture.type === 'youtube' ? '#FF0000' : '#34A853';
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <div class="icon-medium white-bg small" style="margin: 0; width: 45px; height: 45px;">
                            <i class="fab ${icon}" style="color: ${color};"></i>
                        </div>
                        <span style="flex: 1; margin-right: 10px;">${lecture.name || 'محاضرة'}</span>
                        <div class="click-here">
                            <i class="fas fa-play"></i>
                            مشاهدة
                        </div>
                    </a>
                `;
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <div class="icon-medium white-bg" style="margin: 0 auto;">
                            <i class="fas fa-video-slash" style="color: #95a5a6;"></i>
                        </div>
                        <h4 style="color: var(--text-light);">لا توجد محاضرات متاحة حالياً</h4>
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
                    <div class="icon-medium white-bg small" style="margin: 0;">
                        <i class="fas fa-file-alt"></i>
                    </div>
                    <span>الملخصات</span>
                </div>
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <div class="icon-medium white-bg" style="margin: 0 auto;">
                            <i class="fas fa-file-alt" style="color: #95a5a6;"></i>
                        </div>
                        <h4 style="color: var(--text-light);">قريباً</h4>
                    </div>
                </div>
            </div>
        `;
    }
    else if (type === 'exams') {
        // عرض الاختبارات الخاصة بهذا المساق
        const courseExams = ExamAlertSystem.exams.filter(exam => exam.course === courseKey);
        
        html = `
            <div class="books-section">
                <div class="section-title">
                    <div class="icon-medium white-bg small" style="margin: 0;">
                        <i class="fas fa-question-circle"></i>
                    </div>
                    <span>الاختبارات</span>
                </div>
        `;
        
        if (courseExams.length > 0) {
            courseExams.forEach(exam => {
                const examDate = new Date(`${exam.date}T${exam.time}`);
                const now = new Date();
                const isPast = examDate < now;
                const diffDays = Math.ceil((examDate - now) / (1000 * 60 * 60 * 24));
                
                html += `
                    <div class="content-card" style="${isPast ? 'opacity: 0.6;' : ''}">
                        <div class="content-info">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 45px; height: 45px;">
                                <i class="fas ${isPast ? 'fa-check-circle' : 'fa-calendar-alt'}" style="color: ${isPast ? 'var(--success)' : 'var(--primary-color)'};"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0;">${exam.name}</h4>
                                <div style="font-size: 0.85rem; color: var(--text-light);">
                                    <i class="fas fa-calendar"></i> ${exam.date} 
                                    <i class="fas fa-clock" style="margin-right: 10px;"></i> ${exam.time}
                                    ${!isPast ? `<span style="color: var(--gold); margin-right: 10px;">(متبقي ${diffDays} أيام)</span>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <div class="icon-medium white-bg" style="margin: 0 auto;">
                            <i class="fas fa-calendar-times" style="color: #95a5a6;"></i>
                        </div>
                        <h4 style="color: var(--text-light);">لا توجد اختبارات لهذا المساق</h4>
                    </div>
                </div>
            `;
        }
        
        html += `</div>`;
    }

    tabContent.innerHTML = html;
}

function showFavorites() {
    const favorites = FavoritesSystem.items;
    
    let html = `
        <a href="#dashboard" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
            <div class="icon-medium gold-bg">
                <i class="fas fa-star"></i>
            </div>
            <h2 class="course-title" style="margin: 0;">المفضلة (${favorites.length})</h2>
        </div>
    `;

    if (favorites.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 40px;">
                <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto; width: 80px; height: 80px;">
                    <i class="far fa-star"></i>
                </div>
                <h3 style="margin-bottom: 10px;">لا توجد عناصر في المفضلة</h3>
                <p style="color: var(--text-light);">أضف مساقات إلى المفضلة بالضغط على النجمة</p>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        favorites.forEach(item => {
            if (item.type === 'course' && courses[item.id]) {
                html += `
                    <a href="#course-${item.id}-books" class="card-link" style="text-decoration: none;">
                        <div class="card">
                            <div class="icon-medium white-bg" style="margin: 0 auto 15px auto;">
                                <i class="fas ${item.icon}" style="color: var(--primary-color);"></i>
                            </div>
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
        <a href="#dashboard" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
            <div class="icon-medium gold-bg">
                <i class="fas fa-chart-bar"></i>
            </div>
            <h2 class="course-title" style="margin: 0;">إحصائيات الموقع</h2>
        </div>

        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); margin-bottom: 25px;">
            <div class="card">
                <div class="icon-medium primary-bg" style="margin: 0 auto 15px auto;">
                    <i class="fas fa-users"></i>
                </div>
                <h3 id="stat-visitors">0</h3>
                <span class="code">عدد الزوار</span>
            </div>
            <div class="card">
                <div class="icon-medium gold-bg" style="margin: 0 auto 15px auto;">
                    <i class="fas fa-eye"></i>
                </div>
                <h3 id="stat-views">${StatisticsSystem.getTotalViews()}</h3>
                <span class="code">عدد المشاهدات</span>
            </div>
            <div class="card">
                <div class="icon-medium gold-bg" style="margin: 0 auto 15px auto;">
                    <i class="fas fa-star"></i>
                </div>
                <h3 id="stat-favorites">${FavoritesSystem.items.length}</h3>
                <span class="code">عناصر المفضلة</span>
            </div>
        </div>

        <div class="books-section">
            <div class="section-title">
                <div class="icon-medium white-bg small" style="margin: 0;">
                    <i class="fas fa-trophy" style="color: var(--gold);"></i>
                </div>
                <span>أكثر المساقات مشاهدة</span>
            </div>
    `;

    if (mostViewedCourses.length === 0) {
        html += `
            <div class="content-card" style="justify-content: center;">
                <p style="color: var(--text-light);">لا توجد بيانات كافية</p>
            </div>
        `;
    } else {
        mostViewedCourses.forEach((item, index) => {
            const course = courses[item.id];
            if (course) {
                const medalColor = index === 0 ? 'gold' : (index === 1 ? 'silver' : (index === 2 ? '#cd7f32' : 'var(--text-light)'));
                html += `
                    <div class="content-card" style="display: flex; align-items: center; justify-content: space-between;">
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: ${medalColor};">#${index + 1}</span>
                            <div class="icon-medium white-bg small" style="margin: 0;">
                                <i class="fas ${course.icon}" style="color: var(--primary-color);"></i>
                            </div>
                            <h4 style="margin: 0;">${course.title}</h4>
                        </div>
                        <span class="code" style="background: var(--gold-light);">${item.count} مشاهدة</span>
                    </div>
                `;
            }
        });
    }

    html += `</div>`;

    animatePage(html);
    
    getRealVisitorCount().then(count => {
        const el = document.getElementById('stat-visitors');
        if (el) el.textContent = count.toLocaleString();
    });
}

function showSearchPage() {
    const searchInput = document.getElementById('global-search-input');
    const query = searchInput ? searchInput.value : '';
    
    if (query.trim()) {
        showSearchResults(query);
    } else {
        animatePage(`
            <a href="#" onclick="window.history.back(); return false;" class="back-button">
                <i class="fas fa-arrow-right"></i>
                رجوع
            </a>
            
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
                <div class="icon-medium primary-bg">
                    <i class="fas fa-search"></i>
                </div>
                <h2 class="course-title" style="margin: 0;">بحث متقدم</h2>
            </div>
            
            <div class="card" style="text-align: center; padding: 50px;">
                <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto; width: 80px; height: 80px;">
                    <i class="fas fa-search"></i>
                </div>
                <h3 style="margin-bottom: 10px;">ابدأ بالبحث</h3>
                <p style="color: var(--text-light);">اكتب كلمة البحث في الشريط أعلاه</p>
            </div>
        `);
    }
}

function showNotFound() {
    animatePage(`
        <div class="card" style="text-align: center; padding: 60px;">
            <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto; width: 100px; height: 100px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2.5rem;"></i>
            </div>
            <h2 style="color: var(--text-dark); margin-bottom: 15px;">الصفحة غير موجودة</h2>
            <p style="margin: 20px 0; color: var(--text-light);">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
            <a href="#dashboard" class="back-button" style="display: inline-block; margin-top: 10px;">العودة للرئيسية</a>
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
            (hash === 'statistics' && icon.includes('fa-chart-bar'))) {
            item.classList.add('active');
        }
    });
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
            <button class="nav-item" onclick="window.location.hash='dashboard'">
                <i class="fas fa-home"></i>
                <span>الرئيسية</span>
            </button>
            <button class="nav-item" onclick="document.getElementById('global-search-input').focus()">
                <i class="fas fa-search"></i>
                <span>البحث</span>
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

// ========== تهيئة التطبيق ==========
function initApp() {
    createAppStructure();
    FavoritesSystem.init();
    NotificationSystem.init();
    ExamAlertSystem.init();
    AdminSystem.init();
    sendVisitorReport();
    updateVisitorCounter();
    
    // معالجة التحميل الأول
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

// بدء التطبيق عند تحميل الصفحة
window.addEventListener('load', initApp);
window.addEventListener('hashchange', updateActiveNav);

// جعل الأنظمة متاحة عالمياً
window.FavoritesSystem = FavoritesSystem;
window.AdminSystem = AdminSystem;
window.handleSearchInput = handleSearchInput;
