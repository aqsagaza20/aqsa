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

// ========== نظام البحث الذكي المحسن (سريع جداً) ==========
let searchCache = {}; // كاش للبحث السريع
let lastSearchQuery = '';
let lastSearchResults = [];

// بناء كاش للبحث مسبقاً
function buildSearchCache() {
    searchCache = {};
    Object.keys(courses).forEach(key => {
        const course = courses[key];
        // تخزين معلومات المساق للبحث السريع
        const courseText = `${course.title} ${course.code}`.toLowerCase();
        searchCache[key] = {
            type: 'course',
            key: key,
            title: course.title,
            code: course.code,
            icon: course.icon,
            category: 'مساق',
            text: courseText
        };
        
        // تخزين الكتب
        (course.books || []).forEach((book, index) => {
            const bookText = `${book.name} ${course.title}`.toLowerCase();
            searchCache[`${key}_book_${index}`] = {
                type: 'book',
                courseKey: key,
                courseTitle: course.title,
                name: book.name,
                link: book.link,
                coming: book.coming,
                category: 'كتاب',
                text: bookText
            };
        });
        
        // تخزين المحاضرات
        (course.lectures || []).forEach((lecture, index) => {
            const lectureText = `${lecture.name} ${course.title}`.toLowerCase();
            searchCache[`${key}_lecture_${index}`] = {
                type: 'lecture',
                courseKey: key,
                courseTitle: course.title,
                name: lecture.name,
                link: lecture.link,
                lectureType: lecture.type,
                category: 'محاضرة',
                text: lectureText
            };
        });
    });
}

// بناء الكاش عند التحميل
buildSearchCache();

// بحث سريع جداً باستخدام الكاش
function fastSearch(query) {
    if (!query || query.trim().length < 2) return [];
    
    query = query.trim().toLowerCase();
    
    // إذا كان نفس الاستعلام السابق، أرجع النتائج المخزنة
    if (query === lastSearchQuery) {
        return lastSearchResults;
    }
    
    const results = [];
    const searchTerms = query.split(/\s+/);
    
    // بحث في الكاش
    Object.values(searchCache).forEach(item => {
        let score = 0;
        const itemText = item.text || '';
        
        searchTerms.forEach(term => {
            if (term.length === 0) return;
            
            // البحث عن الكلمة في النص
            if (itemText.includes(term)) {
                score += term.length * 2; // كلما زاد طول الكلمة، زادت النقاط
            }
            
            // البحث عن الكلمات الكاملة
            if (itemText.split(' ').includes(term)) {
                score += 5;
            }
            
            // البحث في بداية الكلمات
            if (itemText.startsWith(term)) {
                score += 3;
            }
        });
        
        if (score > 0) {
            results.push({
                ...item,
                score: score
            });
        }
    });
    
    // ترتيب النتائج حسب الصلة
    const sortedResults = results.sort((a, b) => b.score - a.score).slice(0, 30);
    
    // تخزين النتائج للاستعلام الحالي
    lastSearchQuery = query;
    lastSearchResults = sortedResults;
    
    return sortedResults;
}

// معالج البحث مع debounce محسن
let searchTimeout;
let searchWorker = null;

function handleSearchInput(value) {
    clearTimeout(searchTimeout);
    
    // استخدام requestAnimationFrame لتحسين الأداء
    searchTimeout = setTimeout(() => {
        if (value && value.trim().length >= 2) {
            // استخدام requestIdleCallback إذا كان متاحاً
            if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                    window.location.hash = 'search';
                    showSearchResults(value);
                }, { timeout: 100 });
            } else {
                window.location.hash = 'search';
                showSearchResults(value);
            }
        } else if (window.location.hash === '#search') {
            window.history.back();
        }
    }, 250); // تقليل وقت الانتظار
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
        
        // إخفاء أي لوحة مفتوحة حالياً
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
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            direction: rtl;
        `;
        
        const panelContent = document.createElement('div');
        panelContent.style.cssText = `
            background: var(--card-bg);
            border-radius: 20px;
            padding: 25px;
            width: 90%;
            max-width: 500px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px var(--shadow-color);
            border: 1px solid var(--border-color);
        `;
        
        panelContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: var(--primary-color);"><i class="fas fa-cog"></i> لوحة التحكم</h2>
                <button onclick="AdminSystem.closePanel()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-light);">&times;</button>
            </div>
            
            <div style="margin-bottom: 25px;">
                <h3 style="color: var(--text-color); margin-bottom: 15px;"><i class="fas fa-chart-bar"></i> الإحصائيات</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                    <div style="background: var(--hover-bg); padding: 15px; border-radius: 15px; text-align: center;">
                        <i class="fas fa-users" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <div style="font-size: 1.3rem; font-weight: 700; margin: 5px 0;">${StatisticsSystem.getTotalVisitors()}</div>
                        <div style="font-size: 0.8rem; color: var(--text-light);">عدد الزوار</div>
                    </div>
                    <div style="background: var(--hover-bg); padding: 15px; border-radius: 15px; text-align: center;">
                        <i class="fas fa-eye" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <div style="font-size: 1.3rem; font-weight: 700; margin: 5px 0;">${StatisticsSystem.getTotalViews()}</div>
                        <div style="font-size: 0.8rem; color: var(--text-light);">عدد المشاهدات</div>
                    </div>
                    <div style="background: var(--hover-bg); padding: 15px; border-radius: 15px; text-align: center;">
                        <i class="fas fa-star" style="font-size: 1.5rem; color: var(--gold);"></i>
                        <div style="font-size: 1.3rem; font-weight: 700; margin: 5px 0;">${FavoritesSystem.items.length}</div>
                        <div style="font-size: 0.8rem; color: var(--text-light);">عناصر المفضلة</div>
                    </div>
                    <div style="background: var(--hover-bg); padding: 15px; border-radius: 15px; text-align: center;">
                        <i class="fas fa-book" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                        <div style="font-size: 1.3rem; font-weight: 700; margin: 5px 0;">${Object.keys(courses).length}</div>
                        <div style="font-size: 0.8rem; color: var(--text-light);">عدد المساقات</div>
                    </div>
                </div>
            </div>
            
            <div style="margin-bottom: 25px;">
                <h3 style="color: var(--text-color); margin-bottom: 15px;"><i class="fas fa-trophy"></i> أكثر المساقات مشاهدة</h3>
                <div style="background: var(--hover-bg); border-radius: 15px; padding: 15px;">
                    ${(() => {
                        const mostViewed = StatisticsSystem.getMostViewed('course', 5);
                        if (mostViewed.length === 0) {
                            return '<p style="color: var(--text-light);">لا توجد بيانات كافية</p>';
                        }
                        return mostViewed.map((item, index) => {
                            const course = courses[item.id];
                            if (!course) return '';
                            return `
                                <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; border-bottom: 1px solid var(--border-color);">
                                    <div style="display: flex; align-items: center; gap: 10px;">
                                        <span style="font-weight: 700; color: ${index === 0 ? 'var(--gold)' : 'var(--text-light)'};">#${index + 1}</span>
                                        <i class="fas ${course.icon}" style="color: var(--primary-color);"></i>
                                        <span>${course.title}</span>
                                    </div>
                                    <span class="code">${item.count} مشاهدة</span>
                                </div>
                            `;
                        }).join('');
                    })()}
                </div>
            </div>
            
            <div style="margin-bottom: 25px;">
                <h3 style="color: var(--text-color); margin-bottom: 15px;"><i class="fas fa-database"></i> إدارة البيانات</h3>
                <div style="display: flex; gap: 10px;">
                    <button onclick="AdminSystem.backupData()" style="flex: 1; padding: 12px; background: var(--primary-color); color: white; border: none; border-radius: 30px; cursor: pointer;">
                        <i class="fas fa-download"></i> نسخ احتياطي
                    </button>
                    <button onclick="AdminSystem.resetData()" style="flex: 1; padding: 12px; background: var(--danger); color: white; border: none; border-radius: 30px; cursor: pointer;">
                        <i class="fas fa-trash"></i> إعادة تعيين
                    </button>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button onclick="AdminSystem.refreshStats()" style="flex: 1; padding: 12px; background: var(--gold); color: var(--text-dark); border: none; border-radius: 30px; cursor: pointer;">
                    <i class="fas fa-sync-alt"></i> تحديث
                </button>
                <button onclick="AdminSystem.logout()" style="flex: 1; padding: 12px; background: var(--text-light); color: white; border: none; border-radius: 30px; cursor: pointer;">
                    <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
                </button>
            </div>
        `;
        
        this.panelElement.appendChild(panelContent);
        document.body.appendChild(this.panelElement);
    },
    
    closePanel() {
        if (this.panelElement) {
            this.panelElement.remove();
            this.panelElement = null;
        }
    },
    
    refreshStats() {
        this.closePanel();
        setTimeout(() => this.showAdminPanel(), 100);
    },
    
    backupData() {
        const data = {
            courses: courses,
            favorites: FavoritesSystem.items,
            views: StatisticsSystem.views,
            date: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        
        alert('✅ تم إنشاء النسخة الاحتياطية');
    },
    
    resetData() {
        if (confirm('⚠️ هل أنت متأكد؟ سيتم حذف جميع البيانات المحفوظة!')) {
            localStorage.clear();
            location.reload();
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
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            direction: rtl;
        `;
        
        const loginContent = document.createElement('div');
        loginContent.style.cssText = `
            background: var(--card-bg);
            border-radius: 20px;
            padding: 30px;
            width: 90%;
            max-width: 350px;
            box-shadow: 0 20px 40px var(--shadow-color);
            border: 1px solid var(--border-color);
            text-align: center;
        `;
        
        loginContent.innerHTML = `
            <i class="fas fa-lock" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"></i>
            <h2 style="color: var(--text-color); margin-bottom: 20px;">دخول المشرف</h2>
            
            <input type="password" id="admin-pass-input" placeholder="كلمة المرور" 
                style="width: 100%; padding: 12px; margin-bottom: 20px; border-radius: 30px; border: 1px solid var(--border-color); font-family: 'Cairo', sans-serif;">
            
            <div style="display: flex; gap: 10px;">
                <button onclick="AdminSystem.login()" style="flex: 1; padding: 12px; background: var(--primary-color); color: white; border: none; border-radius: 30px; cursor: pointer;">
                    <i class="fas fa-sign-in-alt"></i> دخول
                </button>
                <button onclick="AdminSystem.closeLogin()" style="flex: 1; padding: 12px; background: var(--text-light); color: white; border: none; border-radius: 30px; cursor: pointer;">
                    <i class="fas fa-times"></i> إلغاء
                </button>
            </div>
        `;
        
        this.loginElement.appendChild(loginContent);
        document.body.appendChild(this.loginElement);
        
        setTimeout(() => document.getElementById('admin-pass-input')?.focus(), 100);
    },
    
    closeLogin() {
        if (this.loginElement) {
            this.loginElement.remove();
            this.loginElement = null;
        }
    },
    
    login() {
        const pass = document.getElementById('admin-pass-input')?.value;
        if (pass === this.adminPass) {
            this.isLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            this.closeLogin();
            this.showAdminPanel();
        } else {
            alert('❌ كلمة المرور غير صحيحة');
        }
    },
    
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('adminLoggedIn');
        this.closePanel();
    }
};

// ========== دوال عرض الصفحات (محسنة للأداء) ==========

function animatePage(html) {
    const main = document.getElementById("main");
    if (main) {
        // استخدام DocumentFragment لتحسين الأداء
        const temp = document.createElement('div');
        temp.innerHTML = html;
        main.innerHTML = '';
        main.appendChild(temp.firstElementChild);
    }
    
    localStorage.setItem('previousHash', window.location.hash.substring(1) || 'dashboard');
    
    setTimeout(() => FavoritesSystem.renderStars(), 50);
}

function showDashboard() {
    const lastCourse = getLastCourse();
    
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
        <h1 class="page-title">
            <i class="fas fa-crown"></i>
            جامعة الاقصى
            <i class="fas fa-crown"></i>
        </h1>

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
    // ترتيب المساقات حسب العنوان لضمان عرضها من الأول
    const list = (sem === 1 ? 
        Object.keys(courses).filter(key => courses[key].semester === 1) :
        Object.keys(courses).filter(key => courses[key].semester === 2))
        .sort((a, b) => (courses[a].title || '').localeCompare(courses[b].title || ''));

    let html = `
        <a href="#dashboard" class="back-button" style="display: inline-block;">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <h2 class="course-title">
            الفصل ${sem === 1 ? "الأول" : "الثاني"}
        </h2>
        <div class="grid" style="scroll-margin-top: 20px;">
    `;

    list.forEach(key => {
        const isFavorite = FavoritesSystem.isFavorite(key);
        html += `
            <div class="card" onclick="window.location.href='#course-${key}-books'" style="animation: fadeIn 0.3s ease;">
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
    
    // التمرير إلى أعلى الصفحة
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCourse(key, tab) {
    const course = courses[key];
    saveLastCourse(key, tab);
    StatisticsSystem.incrementView('course', key);
    
    let html = `
        <a href="#semester-${course.semester}" class="back-button" style="display: inline-block;" onclick="window.scrollTo(0,0);">
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
    
    // التمرير إلى أعلى الصفحة
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                            <span style="font-weight: 700; color: var(--gold);;">#${index + 1}</span>
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
    
    document.getElementById('stat-visitors').textContent = StatisticsSystem.getTotalVisitors();
}

function showSearchPage() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput ? searchInput.value : '';
    
    if (query && query.trim().length >= 2) {
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
                <p style="color: var(--text-light); margin-top: 10px;">اكتب كلمة البحث في الشريط أعلاه (حرفين على الأقل)</p>
            </div>
        `);
    }
}

function showSearchResults(query) {
    const results = fastSearch(query);
    
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
                if (result.coming) {
                    html += `
                        <div class="card" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                            <i class="fas fa-book-open" style="color: var(--primary-color);"></i>
                            <h3 style="font-size: 0.95rem;">${result.name}</h3>
                            <span class="code">📖 ${result.category} - ${result.courseTitle}</span>
                        </div>
                    `;
                } else {
                    html += `
                        <a href="${result.link}" target="_blank" class="card-link" style="text-decoration: none;">
                            <div class="card">
                                <i class="fas fa-book-open" style="color: var(--primary-color);"></i>
                                <h3 style="font-size: 0.95rem;">${result.name}</h3>
                                <span class="code">📖 ${result.category} - ${result.courseTitle}</span>
                            </div>
                        </a>
                    `;
                }
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

// ========== إنشاء الهيكل الأساسي للصفحة ==========
function createAppStructure() {
    const app = document.createElement('div');
    app.className = 'app';
    
    app.innerHTML = `
        <header class="site-header">
            <div class="search-container">
                <input type="text" class="search-input" id="global-search-input"
                    placeholder="🔍 بحث في المساقات، الكتب، المحاضرات... (حرفين على الأقل)"
                    oninput="handleSearchInput(this.value)"
                    autocomplete="off">
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

// ========== تحسينات الأداء والتوافق ==========

// كشف نوع الجهاز لتحسين الأداء
const deviceType = (() => {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) return 'mobile';
    if (/tablet|ipad/i.test(ua)) return 'tablet';
    return 'desktop';
})();

// إضافة كلاس للـ body حسب نوع الجهاز
document.body.classList.add(`device-${deviceType}`);

// تحسين الأداء للأجهزة الضعيفة
if (deviceType === 'mobile') {
    // تقليل جودة الأنيميشن
    document.body.style.animation = 'none';
}

// تحسين التمرير
window.addEventListener('load', () => {
    // إضافة smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
});

// تحسين أداء التحديثات
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
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
window.AdminSystem = AdminSystem;
window.handleSearchInput = handleSearchInput;

// بدء التطبيق
window.addEventListener('load', initApp);
