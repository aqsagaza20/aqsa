// ========== الإعدادات الأساسية ==========
const CONFIG = {
    APP_NAME: 'موقع التميز - جامعة الأقصى',
    VERSION: '2.0.0',
    API_ENDPOINT: 'https://your-backend.com/api',
    STORAGE_KEYS: {
        SESSION: 'app_session',
        FAVORITES: 'app_favorites',
        SETTINGS: 'app_settings',
        PROGRESS: 'app_progress'
    }
};

// ========== نظام إدارة الجلسات المحسّن ==========
class SessionManager {
    constructor() {
        this.sessionId = this.generateSessionId();
        this.data = this.loadSession();
        this.saveSession();
    }
    
    generateSessionId() {
        return 'user_' + Date.now() + '_' + Math.random().toString(36).substring(2, 15);
    }
    
    loadSession() {
        const saved = localStorage.getItem(CONFIG.STORAGE_KEYS.SESSION);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                return this.getDefaultSession();
            }
        }
        return this.getDefaultSession();
    }
    
    getDefaultSession() {
        return {
            id: this.sessionId,
            lastCourse: null,
            lastTab: 'books',
            lastVisit: new Date().toISOString(),
            visitCount: 1
        };
    }
    
    saveSession() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.SESSION, JSON.stringify(this.data));
    }
    
    updateLastCourse(courseId, tab) {
        this.data.lastCourse = courseId;
        this.data.lastTab = tab;
        this.data.lastVisit = new Date().toISOString();
        this.data.visitCount++;
        this.saveSession();
    }
    
    getLastCourse() {
        return this.data.lastCourse;
    }
}

// ========== نظام المفضلة المحسّن ==========
class FavoritesManager {
    constructor(sessionId) {
        this.sessionId = sessionId;
        this.key = `${CONFIG.STORAGE_KEYS.FAVORITES}_${sessionId}`;
        this.items = this.load();
        this.listeners = [];
    }
    
    load() {
        try {
            const saved = localStorage.getItem(this.key);
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    }
    
    save() {
        localStorage.setItem(this.key, JSON.stringify(this.items));
        this.notifyListeners();
    }
    
    add(item) {
        if (!this.exists(item.id)) {
            this.items.push({
                ...item,
                addedAt: new Date().toISOString()
            });
            this.save();
            return true;
        }
        return false;
    }
    
    remove(id) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.save();
            return true;
        }
        return false;
    }
    
    toggle(item) {
        return this.exists(item.id) ? this.remove(item.id) : this.add(item);
    }
    
    exists(id) {
        return this.items.some(i => i.id === id);
    }
    
    getAll() {
        return [...this.items];
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
    }
    
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.items));
    }
}

// ========== نظام البحث المحسّن ==========
class SearchEngine {
    constructor(courses) {
        this.courses = courses;
        this.searchIndex = this.buildIndex();
    }
    
    buildIndex() {
        const index = [];
        
        Object.entries(this.courses).forEach(([key, course]) => {
            // إضافة المساق
            index.push({
                id: key,
                type: 'course',
                title: course.title,
                code: course.code,
                text: `${course.title} ${course.code}`,
                icon: course.icon,
                semester: course.semester
            });
            
            // إضافة الكتب
            (course.books || []).forEach((book, bookIndex) => {
                index.push({
                    id: `${key}_book_${bookIndex}`,
                    type: 'book',
                    courseId: key,
                    courseTitle: course.title,
                    title: book.name,
                    text: `${book.name} ${course.title}`,
                    link: book.link,
                    coming: book.coming
                });
            });
            
            // إضافة المحاضرات
            (course.lectures || []).forEach((lecture, lectureIndex) => {
                index.push({
                    id: `${key}_lecture_${lectureIndex}`,
                    type: 'lecture',
                    courseId: key,
                    courseTitle: course.title,
                    title: lecture.name,
                    text: `${lecture.name} ${course.title}`,
                    link: lecture.link,
                    lectureType: lecture.type
                });
            });
        });
        
        return index;
    }
    
    search(query) {
        if (!query || query.length < 2) return [];
        
        const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
        const results = [];
        
        this.searchIndex.forEach(item => {
            let score = 0;
            const itemText = item.text.toLowerCase();
            
            terms.forEach(term => {
                if (itemText.includes(term)) {
                    score += term.length;
                }
            });
            
            // مطابقة تامة للعنوان
            if (item.title.toLowerCase().includes(query.toLowerCase())) {
                score += 10;
            }
            
            if (score > 0) {
                results.push({ ...item, score });
            }
        });
        
        return results.sort((a, b) => b.score - a.score);
    }
    
    suggest(query) {
        if (!query || query.length < 2) return [];
        
        const suggestions = new Set();
        const lowerQuery = query.toLowerCase();
        
        this.searchIndex.forEach(item => {
            if (item.title.toLowerCase().includes(lowerQuery)) {
                suggestions.add(item.title);
            }
        });
        
        return Array.from(suggestions).slice(0, 5);
    }
}

// ========== نظام الإحصائيات المحسّن ==========
class StatisticsManager {
    constructor() {
        this.views = this.loadViews();
    }
    
    loadViews() {
        try {
            return JSON.parse(localStorage.getItem('app_views')) || {};
        } catch {
            return {};
        }
    }
    
    saveViews() {
        localStorage.setItem('app_views', JSON.stringify(this.views));
    }
    
    incrementView(type, id) {
        const key = `${type}_${id}`;
        this.views[key] = (this.views[key] || 0) + 1;
        this.saveViews();
        
        // إرسال للخادم (اختياري)
        this.sendToServer(type, id);
    }
    
    async sendToServer(type, id) {
        try {
            await fetch(`${CONFIG.API_ENDPOINT}/stats`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type, id, timestamp: new Date().toISOString() })
            });
        } catch {
            // تجاهل أخطاء الإرسال
        }
    }
    
    getTopViewed(type, limit = 5) {
        const items = [];
        Object.entries(this.views).forEach(([key, count]) => {
            if (key.startsWith(type)) {
                const id = key.replace(`${type}_`, '');
                items.push({ id, count });
            }
        });
        return items.sort((a, b) => b.count - a.count).slice(0, limit);
    }
    
    getTotalViews() {
        return Object.values(this.views).reduce((a, b) => a + b, 0);
    }
}

// ========== نظام التخزين المشفر المحسّن ==========
class SecureStorage {
    constructor() {
        this.encoder = new TextEncoder();
        this.decoder = new TextDecoder();
    }
    
    async encrypt(data) {
        try {
            const key = await this.getKey();
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const encoded = this.encoder.encode(JSON.stringify(data));
            
            const encrypted = await crypto.subtle.encrypt(
                { name: "AES-GCM", iv },
                key,
                encoded
            );
            
            return {
                iv: Array.from(iv),
                data: Array.from(new Uint8Array(encrypted))
            };
        } catch {
            // fallback للتشفير البسيط إذا لم يدعم Web Crypto
            return this.simpleEncrypt(data);
        }
    }
    
    async decrypt(encryptedData) {
        try {
            const key = await this.getKey();
            const iv = new Uint8Array(encryptedData.iv);
            const data = new Uint8Array(encryptedData.data);
            
            const decrypted = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv },
                key,
                data
            );
            
            return JSON.parse(this.decoder.decode(decrypted));
        } catch {
            // fallback
            return this.simpleDecrypt(encryptedData);
        }
    }
    
    async getKey() {
        // إنشاء مفتاح من sessionId
        const sessionId = sessionManager.sessionId;
        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            this.encoder.encode(sessionId.padEnd(32, '0').slice(0, 32)),
            { name: "AES-GCM" },
            false,
            ["encrypt", "decrypt"]
        );
        return keyMaterial;
    }
    
    simpleEncrypt(data) {
        // تشفير بسيط للطوارئ
        const str = JSON.stringify(data);
        const encoded = btoa(str);
        return { data: encoded.split('').reverse().join('') };
    }
    
    simpleDecrypt(data) {
        try {
            const reversed = data.data.split('').reverse().join('');
            const decoded = atob(reversed);
            return JSON.parse(decoded);
        } catch {
            return null;
        }
    }
}

// ========== نظام العرض المحسّن ==========
class UIManager {
    constructor() {
        this.mainElement = document.getElementById('main');
        this.templates = this.loadTemplates();
    }
    
    loadTemplates() {
        return {
            courseCard: (course, isFavorite) => `
                <div class="card" onclick="window.location.href='#course-${course.id}-books'">
                    <div class="card-header">
                        <span class="favorite-star" data-id="${course.id}" onclick="event.stopPropagation(); favoritesManager.toggle({id: '${course.id}', type: 'course', title: '${course.title}'})">
                            ${isFavorite ? '<i class="fas fa-star" style="color: var(--gold);"></i>' : '<i class="far fa-star" style="color: var(--text-light);"></i>'}
                        </span>
                    </div>
                    <i class="fas ${course.icon}"></i>
                    <h3>${course.title}</h3>
                    <span class="code">${course.code}</span>
                </div>
            `,
            
            bookButton: (book) => `
                <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer" onclick="statisticsManager.incrementView('book', '${book.id}')">
                    <i class="fas fa-book-open"></i>
                    <span>${book.name}</span>
                    <div class="click-here">
                        <i class="fas fa-hand-pointer"></i>
                        تحميل
                    </div>
                </a>
            `
        };
    }
    
    renderPage(html) {
        this.mainElement.innerHTML = html;
    }
    
    showLoader() {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.innerHTML = '<div class="spinner"></div><div class="spinner-text">جاري التحميل...</div>';
        document.body.appendChild(loader);
    }
    
    hideLoader() {
        document.querySelector('.loader')?.remove();
    }
    
    showNotification(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${this.getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), duration);
    }
    
    getNotificationIcon(type) {
        const icons = {
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle'
        };
        return icons[type] || icons.info;
    }
}

// ========== نظام الأمان المحسّن ==========
class SecurityManager {
    constructor() {
        this.setupProtection();
    }
    
    setupProtection() {
        // منع النسخ واللصق فقط للمحتوى المحمي
        this.setupCopyProtection();
        
        // مراقبة أدوات المطور (أقل تدخلاً)
        this.monitorDevTools();
        
        // تنظيف المدخلات
        this.setupInputSanitizer();
    }
    
    setupCopyProtection() {
        document.addEventListener('copy', (e) => {
            // السماح بالنسخ من بعض العناصر
            if (e.target.closest('.allow-copy')) return;
            
            e.preventDefault();
            uiManager.showNotification('عذراً، النسخ غير مسموح للمحتوى المحمي', 'warning');
        });
    }
    
    monitorDevTools() {
        let devToolsOpen = false;
        
        setInterval(() => {
            const start = performance.now();
            debugger;
            const end = performance.now();
            
            if (end - start > 100) {
                if (!devToolsOpen) {
                    devToolsOpen = true;
                    this.handleDevToolsOpen();
                }
            } else {
                devToolsOpen = false;
            }
        }, 2000);
    }
    
    handleDevToolsOpen() {
        uiManager.showNotification('تم اكتشاف أدوات المطور. بعض الميزات قد لا تعمل بشكل صحيح.', 'warning');
    }
    
    setupInputSanitizer() {
        // تنظيف المدخلات باستخدام DOMPurify إذا كان متاحاً
        if (window.DOMPurify) {
            const originalInnerHTML = Element.prototype.innerHTML;
            Element.prototype.innerHTML = function(value) {
                if (typeof value === 'string') {
                    value = DOMPurify.sanitize(value);
                }
                return originalInnerHTML.call(this, value);
            };
        }
    }
    
    sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        
        // إزالة الأكواد الضارة
        return input
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/on\w+="[^"]*"/g, '')
            .replace(/javascript:/gi, '')
            .trim();
    }
}

// ========== تهيئة الأنظمة ==========
const sessionManager = new SessionManager();
const favoritesManager = new FavoritesManager(sessionManager.sessionId);
const statisticsManager = new StatisticsManager();
const secureStorage = new SecureStorage();
const uiManager = new UIManager();
const securityManager = new SecurityManager();

// تحميل المساقات مع إضافة المعرفات
const courses = {
    biology: { 
        id: 'biology',
        title: "الأحياء", 
        icon: "fa-dna", 
        code: "BIOL 101",
        semester: 1,
        books: [
            { id: 'bio_book1', name: "كتاب الأحياء - د. أيمن أبو مصطفى 2024", link: "https://www.mediafire.com/file/8oddlw5fw751nd2/Biology+Dr.+Ayman+Abu+Mustafa+2024.pdf/file", year: "2024" }
        ],
        lectures: [
            { id: 'bio_lec1', name: "محاضرة 1 - الجزء الأول", link: "https://www.youtube.com/watch?v=8COAdAXo6mo", type: "youtube" },
            { id: 'bio_lec2', name: "محاضرة 1 - الجزء الثاني", link: "https://www.youtube.com/watch?v=-EcD5MBMoiM", type: "youtube" }
        ]},
    // ... باقي المساقات مع إضافة المعرفات
};

// ========== نظام البحث ==========
const searchEngine = new SearchEngine(courses);

// ========== معالج البحث ==========
let searchTimeout;
function handleSearchInput(value) {
    clearTimeout(searchTimeout);
    
    const cleanValue = securityManager.sanitizeInput(value);
    
    searchTimeout = setTimeout(() => {
        if (cleanValue.trim().length >= 2) {
            const suggestions = searchEngine.suggest(cleanValue);
            if (suggestions.length > 0) {
                showSearchSuggestions(suggestions);
            }
            
            if (cleanValue.trim()) {
                window.location.hash = 'search';
                showSearchResults(cleanValue);
            }
        }
    }, 300);
}

function showSearchSuggestions(suggestions) {
    const suggestionsDiv = document.getElementById('search-suggestions') || createSuggestionsDiv();
    suggestionsDiv.innerHTML = suggestions
        .map(s => `<div onclick="document.getElementById('global-search-input').value='${s}'; handleSearchInput('${s}')">${s}</div>`)
        .join('');
    suggestionsDiv.style.display = suggestions.length ? 'block' : 'none';
}

function createSuggestionsDiv() {
    const div = document.createElement('div');
    div.id = 'search-suggestions';
    div.className = 'search-suggestions';
    document.querySelector('.search-container').appendChild(div);
    return div;
}

function showSearchResults(query) {
    const results = searchEngine.search(query);
    
    uiManager.showLoader();
    
    setTimeout(() => {
        let html = `
            <a href="#" onclick="window.history.back(); return false;" class="back-button">
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
                <div class="card empty-state">
                    <i class="fas fa-frown"></i>
                    <h3>لا توجد نتائج</h3>
                    <p>جرب كلمات بحث أخرى</p>
                </div>
            `;
        } else {
            html += '<div class="grid">';
            results.forEach(result => {
                if (result.type === 'course') {
                    html += `
                        <a href="#course-${result.id}-books" class="card-link">
                            <div class="card">
                                <i class="fas ${result.icon}"></i>
                                <h3>${result.title}</h3>
                                <span class="code">📚 مساق - ${result.code}</span>
                            </div>
                        </a>
                    `;
                } else if (result.type === 'book') {
                    html += `
                        <a href="${result.link}" target="_blank" class="card-link">
                            <div class="card">
                                <i class="fas fa-book-open"></i>
                                <h3 class="result-title">${result.title}</h3>
                                <span class="code">📖 كتاب - ${result.courseTitle}</span>
                            </div>
                        </a>
                    `;
                } else if (result.type === 'lecture') {
                    const icon = result.lectureType === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                    html += `
                        <a href="${result.link}" target="_blank" class="card-link">
                            <div class="card">
                                <i class="fab ${icon}"></i>
                                <h3 class="result-title">${result.title}</h3>
                                <span class="code">🎥 محاضرة - ${result.courseTitle}</span>
                            </div>
                        </a>
                    `;
                }
            });
            html += '</div>';
        }

        uiManager.renderPage(html);
        uiManager.hideLoader();
    }, 300); // تأخير بسيط لتجربة أفضل
}

// ========== عرض المساق ==========
function showCourse(courseId, tab = 'books') {
    const course = courses[courseId];
    if (!course) {
        showNotFound();
        return;
    }
    
    sessionManager.updateLastCourse(courseId, tab);
    statisticsManager.incrementView('course', courseId);
    
    const isFavorite = favoritesManager.exists(courseId);
    
    let html = `
        <a href="#semester-${course.semester}" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div class="course-header">
            <h2 class="course-title">
                <i class="fas ${course.icon}"></i>
                ${course.title}
            </h2>
            <span class="favorite-star" data-id="${courseId}" onclick="favoritesManager.toggle({id: '${courseId}', type: 'course', title: '${course.title}'}); this.classList.toggle('active');">
                ${isFavorite ? '<i class="fas fa-star" style="color: var(--gold); font-size: 1.5rem;"></i>' : '<i class="far fa-star" style="color: var(--text-light); font-size: 1.5rem;"></i>'}
            </span>
        </div>

        <div class="tabs">
            <a href="#course-${courseId}-books" class="tab ${tab === 'books' ? 'active' : ''}">
                <i class="fas fa-book"></i> كتب
            </a>
            <a href="#course-${courseId}-summaries" class="tab ${tab === 'summaries' ? 'active' : ''}">
                <i class="fas fa-file-alt"></i> ملخصات
            </a>
            <a href="#course-${courseId}-exams" class="tab ${tab === 'exams' ? 'active' : ''}">
                <i class="fas fa-question-circle"></i> اختبارات
            </a>
            <a href="#course-${courseId}-lectures" class="tab ${tab === 'lectures' ? 'active' : ''}">
                <i class="fas fa-video"></i> محاضرات
            </a>
        </div>

        <div id="tabContent" class="tab-content"></div>
    `;

    uiManager.renderPage(html);
    loadTabContent(courseId, tab);
}

function loadTabContent(courseId, type) {
    const course = courses[courseId];
    const tabContent = document.getElementById('tabContent');
    if (!tabContent) return;
    
    let html = '<div class="books-section">';
    
    if (type === 'books') {
        html += `
            <div class="section-title">
                <i class="fas fa-book"></i>
                <span>الكتب الدراسية</span>
            </div>
        `;

        (course.books || []).forEach(book => {
            if (book.coming) {
                html += `
                    <div class="book-button coming-soon" onclick="uiManager.showNotification('سيتم إضافة الرابط قريباً', 'info')">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name}</span>
                        <div class="click-here">
                            <i class="fas fa-clock"></i>
                            قريباً
                        </div>
                    </div>
                `;
            } else if (book.link && book.link !== '#') {
                html += `
                    <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer" onclick="statisticsManager.incrementView('book', '${book.id}')">
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
    }
    else if (type === 'lectures') {
        html += `
            <div class="section-title">
                <i class="fas fa-video"></i>
                <span>المحاضرات المسجلة</span>
            </div>
        `;

        if (course.lectures && course.lectures.length > 0) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer" onclick="statisticsManager.incrementView('lecture', '${lecture.id}')">
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
                <div class="empty-state">
                    <i class="fas fa-video-slash"></i>
                    <p>لا توجد محاضرات متاحة حالياً</p>
                </div>
            `;
        }
    }
    else {
        html += `
            <div class="empty-state">
                <i class="fas fa-file-alt"></i>
                <p>قريباً</p>
            </div>
        `;
    }
    
    html += '</div>';
    tabContent.innerHTML = html;
}

// ========== عرض الصفحة الرئيسية ==========
function showDashboard() {
    const lastCourseId = sessionManager.getLastCourse();
    const lastCourse = lastCourseId ? courses[lastCourseId] : null;
    
    let lastCourseHtml = '';
    if (lastCourse) {
        lastCourseHtml = `
            <div class="last-course-card">
                <div class="last-course-content">
                    <i class="fas fa-history" style="color: var(--gold);"></i>
                    <span>آخر مساق زارته:</span>
                    <a href="#course-${lastCourseId}-${sessionManager.data.lastTab}" class="last-course-link">
                        <i class="fas ${lastCourse.icon}"></i>
                        ${lastCourse.title}
                    </a>
                </div>
            </div>
        `;
    }
    
    const html = `
        <h1 class="page-title">
            <i class="fas fa-crown"></i>
            ${CONFIG.APP_NAME}
            <i class="fas fa-crown"></i>
        </h1>

        ${lastCourseHtml}

        <!-- رابط مجموعة الواتساب -->
        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB?mode=gi_t" target="_blank" class="whatsapp-link">
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

        <div class="info-card">
            <i class="fas fa-user-nurse"></i>
            <h2>تمريض - سنة أولى</h2>
        </div>

        <div class="grid">
            <a href="#semester-1" class="card-link">
                <div class="card">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>الفصل الأول</h3>
                    <span class="code">${getSemesterCount(1)} مساقات</span>
                </div>
            </a>

            <a href="#semester-2" class="card-link">
                <div class="card">
                    <i class="fas fa-calendar-check"></i>
                    <h3>الفصل الثاني</h3>
                    <span class="code">${getSemesterCount(2)} مساقات</span>
                </div>
            </a>
        </div>
    `;
    
    uiManager.renderPage(html);
}

function getSemesterCount(semester) {
    return Object.values(courses).filter(c => c.semester === semester).length;
}

// ========== عرض فصل دراسي ==========
function showSemester(semester) {
    const semesterCourses = Object.entries(courses)
        .filter(([_, course]) => course.semester === semester)
        .map(([id, course]) => ({ id, ...course }));
    
    let html = `
        <a href="#dashboard" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <h2 class="course-title">
            الفصل ${semester === 1 ? "الأول" : "الثاني"}
        </h2>
        <div class="grid">
    `;

    semesterCourses.forEach(course => {
        const isFavorite = favoritesManager.exists(course.id);
        html += uiManager.templates.courseCard(course, isFavorite);
    });

    html += '</div>';
    uiManager.renderPage(html);
}

// ========== عرض المفضلة ==========
function showFavorites() {
    const favorites = favoritesManager.getAll();
    
    let html = `
        <a href="#dashboard" class="back-button">
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
            <div class="card empty-state">
                <i class="far fa-star"></i>
                <h3>لا توجد عناصر في المفضلة</h3>
                <p>أضف مساقات إلى المفضلة بالضغط على النجمة</p>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        favorites.forEach(item => {
            if (item.type === 'course' && courses[item.id]) {
                const course = courses[item.id];
                html += `
                    <a href="#course-${item.id}-books" class="card-link">
                        <div class="card">
                            <i class="fas ${item.icon || course.icon}"></i>
                            <h3>${item.title}</h3>
                            <span class="code">${course.code}</span>
                        </div>
                    </a>
                `;
            }
        });
        html += '</div>';
    }

    uiManager.renderPage(html);
}

// ========== عرض الإحصائيات ==========
function showStatistics() {
    const mostViewedCourses = statisticsManager.getTopViewed('course');
    
    let html = `
        <a href="#dashboard" class="back-button">
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
                <div class="stat-value" id="stat-visitors">-</div>
                <div class="stat-label">عدد الزوار</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-eye"></i>
                <div class="stat-value" id="stat-views">${statisticsManager.getTotalViews()}</div>
                <div class="stat-label">عدد المشاهدات</div>
            </div>
            <div class="stat-card">
                <i class="fas fa-star"></i>
                <div class="stat-value" id="stat-favorites">${favoritesManager.getAll().length}</div>
                <div class="stat-label">عناصر المفضلة</div>
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
            <div class="empty-state">
                <p>لا توجد بيانات كافية</p>
            </div>
        `;
    } else {
        mostViewedCourses.forEach((item, index) => {
            const course = courses[item.id];
            if (course) {
                html += `
                    <div class="stat-item">
                        <div class="stat-item-info">
                            <span class="stat-rank">#${index + 1}</span>
                            <i class="fas ${course.icon}"></i>
                            <span>${course.title}</span>
                        </div>
                        <span class="stat-count">${item.count} مشاهدة</span>
                    </div>
                `;
            }
        });
    }

    html += '</div>';
    uiManager.renderPage(html);
    
    // تحديث عداد الزوار
    updateVisitorCounter();
}

async function updateVisitorCounter() {
    const count = await getRealVisitorCount();
    const el = document.getElementById('stat-visitors');
    if (el) el.textContent = count;
}

async function getRealVisitorCount() {
    try {
        const response = await fetch('https://api.countapi.xyz/hit/nmarwuf-lgtm.github.io/visitors');
        const data = await response.json();
        return data.value;
    } catch {
        return localStorage.getItem('visitorCount') || 0;
    }
}

// ========== معالج الروابط ==========
function handleRoute() {
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
        const courseId = parts[1];
        const tab = parts[2] || 'books';
        
        if (courses[courseId]) {
            showCourse(courseId, tab);
        } else {
            showNotFound();
        }
    } else if (hash === 'favorites') {
        showFavorites();
    } else if (hash === 'statistics') {
        showStatistics();
    } else if (hash === 'search') {
        const searchInput = document.getElementById('global-search-input');
        const query = searchInput ? searchInput.value : '';
        if (query.trim()) {
            showSearchResults(query);
        } else {
            showDashboard();
        }
    } else {
        showNotFound();
    }
    
    updateActiveNav();
}

function showNotFound() {
    uiManager.renderPage(`
        <div class="card not-found">
            <i class="fas fa-exclamation-triangle"></i>
            <h2>الصفحة غير موجودة</h2>
            <p>عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
            <a href="#dashboard" class="back-button">العودة للرئيسية</a>
        </div>
    `);
}

function updateActiveNav() {
    const hash = window.location.hash.substring(1) || 'dashboard';
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        if (href === hash || (hash === 'dashboard' && href === 'dashboard')) {
            item.classList.add('active');
        }
    });
}

// ========== إنشاء هيكل الصفحة ==========
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
                <i class="fas fa-crown"></i> ${CONFIG.APP_NAME} <i class="fas fa-crown"></i>
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

// ========== بدء التطبيق ==========
document.addEventListener('DOMContentLoaded', () => {
    createAppStructure();
    
    // معالجة التوجيه
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
    
    // إضافة CSS محسّن
    addOptimizedStyles();
});

function addOptimizedStyles() {
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
            --shadow-sm: 0 2px 8px var(--shadow-color);
            --shadow-md: 0 4px 12px var(--shadow-color);
            --shadow-lg: 0 8px 24px var(--shadow-color);
            --border-radius: 20px;
            --transition: all 0.3s ease;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
            color: var(--text-color);
            font-family: 'Cairo', sans-serif;
            margin: 0;
            padding: 20px 20px 80px 20px;
            min-height: 100vh;
            line-height: 1.6;
        }

        /* الهيدر */
        .site-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: var(--card-bg);
            backdrop-filter: blur(10px);
            padding: 15px 20px;
            border-radius: var(--border-radius);
            margin-bottom: 20px;
            box-shadow: var(--shadow-md);
            border: 1px solid rgba(255,255,255,0.3);
        }

        .search-container {
            position: relative;
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
            transition: var(--transition);
            box-shadow: var(--shadow-sm);
        }

        .search-input:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 4px var(--shadow-color);
        }

        .search-suggestions {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-radius: 15px;
            margin-top: 5px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            display: none;
            max-height: 200px;
            overflow-y: auto;
        }

        .search-suggestions div {
            padding: 10px 20px;
            cursor: pointer;
            transition: var(--transition);
        }

        .search-suggestions div:hover {
            background: var(--hover-bg);
        }

        /* شريط التنقل السفلي */
        .bottom-nav {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--card-bg);
            backdrop-filter: blur(10px);
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
            transition: var(--transition);
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

        /* البطاقات */
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 20px;
            text-align: center;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.3);
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
            margin-bottom: 10px;
            font-size: 1.2rem;
        }

        .card-header {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 10px;
        }

        .favorite-star {
            cursor: pointer;
            transition: var(--transition);
        }

        .favorite-star:hover {
            transform: scale(1.2);
        }

        /* التبويبات */
        .tabs {
            display: flex;
            gap: 10px;
            margin: 20px 0;
            flex-wrap: wrap;
            justify-content: center;
        }

        .tab {
            background: var(--card-bg);
            padding: 10px 20px;
            border-radius: 30px;
            cursor: pointer;
            transition: var(--transition);
            font-weight: 600;
            border: 1px solid var(--border-color);
            color: var(--text-color);
            text-decoration: none;
        }

        .tab.active {
            background: var(--primary-color);
            color: white;
            border-color: var(--primary-color);
        }

        .tab i {
            margin-left: 5px;
        }

        /* أزرار الكتب */
        .book-button {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            background: var(--card-bg);
            border-radius: 15px;
            margin-bottom: 12px;
            text-decoration: none;
            color: var(--text-color);
            transition: var(--transition);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: var(--shadow-sm);
        }

        .book-button:hover {
            background: var(--hover-bg);
            transform: translateX(-5px);
            box-shadow: var(--shadow-md);
            border-color: var(--primary-light);
        }

        .book-button i {
            margin-left: 10px;
            font-size: 1.2rem;
        }

        .click-here {
            margin-right: auto;
            background: var(--gradient-1);
            color: white;
            padding: 6px 15px;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 600;
        }

        .coming-soon {
            opacity: 0.7;
            cursor: not-allowed;
        }

        /* إهداء الشهيد */
        .martyr-dedication {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            box-shadow: var(--shadow-md);
            border: 1px solid rgba(255,255,255,0.3);
        }

        .martyr-name {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 10px 0;
        }

        /* التذييل */
        .site-footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            background: var(--card-bg);
            border-radius: var(--border-radius);
            border: 1px solid rgba(255,255,255,0.3);
            box-shadow: var(--shadow-md);
        }

        .footer-signature {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin: 10px 0;
            font-size: 1.1rem;
        }

        .engineer {
            color: var(--text-color);
        }

        .nader {
            color: var(--primary-color);
            font-weight: 700;
            font-size: 1.3rem;
        }

        /* مؤشر التحميل */
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid var(--card-bg);
            border-top-color: var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* الإشعارات */
        .notification {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--card-bg);
            color: var(--text-color);
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideDown 0.3s ease;
            border: 1px solid rgba(255,255,255,0.3);
            backdrop-filter: blur(10px);
        }

        .notification-info { border-right: 5px solid var(--info); }
        .notification-success { border-right: 5px solid var(--success); }
        .notification-warning { border-right: 5px solid var(--warning); }
        .notification-error { border-right: 5px solid var(--danger); }

        @keyframes slideDown {
            from {
                top: -100px;
                opacity: 0;
            }
            to {
                top: 20px;
                opacity: 1;
            }
        }

        /* الإحصائيات */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .stat-card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 20px;
            text-align: center;
            box-shadow: var(--shadow-md);
        }

        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
            margin: 10px 0;
        }

        .stat-label {
            color: var(--text-light);
            font-size: 0.9rem;
        }

        .stat-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            border-bottom: 1px solid var(--border-color);
        }

        .stat-item:last-child {
            border-bottom: none;
        }

        .stat-rank {
            font-weight: 700;
            color: var(--gold);
            margin-left: 10px;
        }

        /* حالات فارغة */
        .empty-state {
            text-align: center;
            padding: 40px;
            background: var(--card-bg);
            border-radius: var(--border-radius);
            margin: 20px 0;
        }

        .empty-state i {
            font-size: 3rem;
            color: var(--text-light);
            margin-bottom: 15px;
        }

        .empty-state h3 {
            margin-bottom: 10px;
        }

        .empty-state p {
            color: var(--text-light);
        }

        /* آخر مساق */
        .last-course-card {
            background: linear-gradient(135deg, rgba(74,144,226,0.1), rgba(53,122,189,0.1));
            border-radius: var(--border-radius);
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid rgba(74,144,226,0.2);
        }

        .last-course-content {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .last-course-link {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        /* روابط الواتساب */
        .whatsapp-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 20px;
            background: rgba(37, 211, 102, 0.1);
            border-radius: var(--border-radius);
            margin-bottom: 15px;
            text-decoration: none;
            color: var(--text-color);
            transition: var(--transition);
            border: 1px solid rgba(37, 211, 102, 0.3);
        }

        .whatsapp-link:hover {
            background: rgba(37, 211, 102, 0.2);
            transform: translateY(-2px);
        }

        .whatsapp-link i {
            font-size: 1.5rem;
            color: var(--whatsapp-color);
        }

        .whatsapp-badge {
            background: var(--whatsapp-color);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
        }

        /* أزرار الرجوع */
        .back-button {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 30px;
            cursor: pointer;
            font-size: 1rem;
            margin-bottom: 20px;
            transition: var(--transition);
            font-weight: 600;
            text-decoration: none;
            display: inline-block;
        }

        .back-button:hover {
            background: var(--primary-dark);
            transform: translateX(-5px);
        }

        /* عنوان المساق */
        .course-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .course-title {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.5rem;
        }

        .course-title i {
            color: var(--primary-color);
        }

        .code {
            display: inline-block;
            background: rgba(74, 144, 226, 0.1);
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            color: var(--primary-color);
        }

        /* قسم المحتوى */
        .books-section {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            padding: 20px;
            box-shadow: var(--shadow-md);
            margin-bottom: 20px;
        }

        .section-title {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            font-size: 1.2rem;
            border-bottom: 2px solid rgba(74, 144, 226, 0.2);
            padding-bottom: 10px;
        }

        .section-title i {
            color: var(--primary-color);
        }

        /* صفحة غير موجودة */
        .not-found {
            text-align: center;
            padding: 50px;
        }

        .not-found i {
            font-size: 4rem;
            color: var(--warning);
            margin-bottom: 20px;
        }

        /* تحسينات للموبايل */
        @media (max-width: 768px) {
            body {
                padding: 10px 10px 70px 10px;
            }

            .grid {
                grid-template-columns: 1fr;
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
            }

            .click-here {
                width: 100%;
                text-align: center;
                margin-right: 0;
                margin-top: 10px;
            }

            .last-course-content {
                flex-direction: column;
                text-align: center;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .course-header {
                flex-direction: column;
                gap: 10px;
            }

            .bottom-nav .nav-item {
                font-size: 0.7rem;
            }

            .bottom-nav .nav-item i {
                font-size: 1.2rem;
            }
        }

        /* تحسينات للطباعة */
        @media print {
            .bottom-nav,
            .site-header,
            .back-button,
            .whatsapp-link,
            .martyr-dedication {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}
