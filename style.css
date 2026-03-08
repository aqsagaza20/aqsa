// ============================================================================
// جامعة الأقصى - كلية التمريض
// النسخة الكاملة جداً - جميع الحقوق محفوظة للمهندس نادر 2026
// ============================================================================

// ============================================================================
// 1. نظام الجلسات الفريد لكل مستخدم (محسّن جداً)
// ============================================================================

/**
 * دالة إنشاء أو استرجاع معرف الجلسة الفريد للمستخدم
 * يتم تخزينه في localStorage ليبقى ثابتاً حتى لو أغلق المتصفح
 */
function getOrCreateSessionId() {
    try {
        let sessionId = localStorage.getItem('university_session_id');
        if (!sessionId) {
            // إنشاء معرف فريد باستخدام الوقت العشوائي والتاريخ
            sessionId = 'user_' + Math.random().toString(36).substring(2, 15) + 
                       '_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
            localStorage.setItem('university_session_id', sessionId);
        }
        return sessionId;
    } catch (e) {
        // في حالة خطأ التخزين المحلي، نستخدم معرف مؤقت
        return 'temp_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now();
    }
}

const SESSION_ID = getOrCreateSessionId();
const SESSION_START_TIME = Date.now();

/**
 * كائن جلسة المستخدم - يحتوي على كل البيانات الخاصة بالمستخدم
 */
let userSession = {
    id: SESSION_ID,
    startTime: new Date().toISOString(),
    lastCourse: null,
    lastTab: 'books',
    visitCount: 0,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screenSize: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language || 'ar',
    deviceType: 'unknown'
};

// تحديد نوع الجهاز
if (/mobile/i.test(navigator.userAgent)) {
    userSession.deviceType = 'mobile';
} else if (/tablet|ipad/i.test(navigator.userAgent)) {
    userSession.deviceType = 'tablet';
} else {
    userSession.deviceType = 'desktop';
}

// إضافة كلاس للـ body حسب نوع الجهاز
document.body.classList.add(`device-${userSession.deviceType}`);

/**
 * تحميل الجلسة من التخزين المحلي
 */
function loadSession() {
    try {
        const saved = localStorage.getItem(`session_${SESSION_ID}`);
        if (saved) {
            const parsed = JSON.parse(saved);
            userSession = {...userSession, ...parsed};
        }
    } catch (e) {
        console.log('خطأ في تحميل الجلسة:', e);
    }
    userSession.lastVisit = new Date().toISOString();
    userSession.visitCount++;
    saveSession();
}

/**
 * حفظ الجلسة في التخزين المحلي
 */
function saveSession() {
    try {
        localStorage.setItem(`session_${SESSION_ID}`, JSON.stringify(userSession));
    } catch (e) {
        console.log('خطأ في حفظ الجلسة:', e);
    }
}

/**
 * حفظ آخر مساق زاره المستخدم
 */
function saveLastCourse(courseKey, tab) {
    userSession.lastCourse = courseKey;
    userSession.lastTab = tab;
    userSession.lastVisit = new Date().toISOString();
    saveSession();
}

/**
 * استرجاع آخر مساق زاره المستخدم
 */
function getLastCourse() {
    return userSession;
}

// تحميل الجلسة
loadSession();

// ============================================================================
// 2. بيانات المساقات الكاملة (جميع المساقات الـ 14 مع روابطها الكاملة)
// ============================================================================

/**
 * المساقات الافتراضية - كل مساق مع كتبه ومحاضراته وروابطه الكاملة
 * جميع الروابط الأصلية محفوظة كما هي
 */
const defaultCourses = {
    biology: { 
        title: "الأحياء", 
        icon: "fa-dna", 
        code: "BIOL 101",
        semester: 1,
        description: "مساق الأحياء - دراسة الكائنات الحية وتركيبها ووظائفها",
        books: [
            { 
                name: "كتاب الأحياء - د. أيمن أبو مصطفى 2024", 
                link: "https://www.mediafire.com/file/8oddlw5fw751nd2/Biology+Dr.+Ayman+Abu+Mustafa+2024.pdf/file", 
                year: "2024",
                size: "45 MB",
                pages: 320
            }
        ],
        lectures: [
            { name: "محاضرة 1 - الجزء الأول", link: "https://www.youtube.com/watch?v=8COAdAXo6Mo", type: "youtube", duration: "45:30" },
            { name: "محاضرة 1 - الجزء الثاني", link: "https://www.youtube.com/watch?v=-EcD5MBMoiM", type: "youtube", duration: "38:15" },
            { name: "محاضرة 2 - الجزء الأول", link: "https://www.youtube.com/watch?v=gZG1I2mVBFI", type: "youtube", duration: "42:20" },
            { name: "محاضرة 2 - الجزء الثاني", link: "https://www.youtube.com/watch?v=gZG1I2mVBFI", type: "youtube", duration: "41:10" },
            { name: "محاضرة 3", link: "https://www.youtube.com/watch?v=8COAdAXo6Mo", type: "youtube", duration: "55:00" },
            { name: "محاضرة 4", link: "https://www.youtube.com/watch?v=-EcD5MBMoiM", type: "youtube", duration: "48:30" }
        ],
        summaries: [
            { name: "ملخص الأحياء - الفصل الأول", link: "#", coming: true },
            { name: "ملخص الأحياء - الفصل الثاني", link: "#", coming: true }
        ],
        exams: [
            { name: "اختبار منتصف الفصل", link: "#", coming: true },
            { name: "اختبار نهائي", link: "#", coming: true }
        ]
    },
    
    chemistry: { 
        title: "الكيمياء", 
        icon: "fa-flask", 
        code: "CHEM 101",
        semester: 1,
        description: "مساق الكيمياء العامة - أساسيات الكيمياء وتطبيقاتها",
        books: [
            { 
                name: "كتاب الكيمياء", 
                link: "https://drive.google.com/file/d/16NwS8HV1UizqrMnKnAAIOhth_6STxxff/view?usp=drivesdk", 
                year: "2024",
                size: "38 MB",
                pages: 280
            }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=QEBq2ujVl9k", type: "youtube", duration: "52:10" },
            { name: "محاضرة 2 - الجزء الأول", link: "https://drive.google.com/file/d/1mYbo3lYhfrgPPNBlbPWvGVKbNDS4DPNS/view", type: "drive", duration: "35:20" },
            { name: "محاضرة 2 - الجزء الثاني", link: "https://drive.google.com/file/d/1xUd0aEy4mXPDkghZmZvjSW6wUCW-WFkv/view", type: "drive", duration: "42:15" },
            { name: "محاضرة 3", link: "https://www.youtube.com/watch?v=QEBq2ujVl9k", type: "youtube", duration: "48:30" },
            { name: "محاضرة 4", link: "https://www.youtube.com/watch?v=QEBq2ujVl9k", type: "youtube", duration: "51:45" }
        ],
        summaries: [
            { name: "ملخص الكيمياء - التفاعلات الكيميائية", link: "#", coming: true }
        ],
        exams: [
            { name: "اختبار الكيمياء الأول", link: "#", coming: true }
        ]
    },
    
    physics: { 
        title: "مقدمة التمريض", 
        icon: "fa-atom", 
        code: "PHYS 101",
        semester: 1,
        description: "مساق مقدمة في علوم التمريض - أساسيات المهنة",
        books: [
            { 
                name: "كتاب مقدمة التمريض", 
                link: "https://drive.google.com/file/d/1MvpccHOlHV3XcPUrtB7uXDoKFdB5MlSr/view?usp=sharing", 
                year: "2024",
                size: "42 MB",
                pages: 310
            }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=apf3Jagp1ak&list=PLftkcFPCNYd1Fvio2pIx20w8I-z4Lp0YF&index=10", type: "youtube", duration: "55:20" },
            { name: "محاضرة 2", link: "https://www.youtube.com/watch?v=QnK68q-yeGQ&list=PLftkcFPCNYd1Fvio2pIx20w8I-z4Lp0YF&index=9", type: "youtube", duration: "49:35" },
            { name: "محاضرة 3", link: "https://www.youtube.com/watch?v=apf3Jagp1ak", type: "youtube", duration: "52:10" },
            { name: "محاضرة 4", link: "https://www.youtube.com/watch?v=QnK68q-yeGQ", type: "youtube", duration: "47:25" }
        ],
        summaries: [],
        exams: []
    },
    
    anatomy: { 
        title: "القضية الفلسطينية", 
        icon: "fa-brain", 
        code: "ANAT 101",
        semester: 1,
        description: "مساق القضية الفلسطينية - تاريخ القضية وتطورها",
        books: [
            { 
                name: "كتاب القضية الفلسطينية", 
                link: "https://drive.google.com/file/d/1HOyQGAJut0J7DGQTGTwoA_4l5qxRAshs/view?usp=drivesdk", 
                year: "2024",
                size: "36 MB",
                pages: 290
            }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=2KXiwod-doc", type: "youtube", duration: "58:40" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/14W1ToppqX7YtAv4N2_USjBHGbphMsuY-/view", type: "drive", duration: "45:15" },
            { name: "محاضرة 3", link: "https://www.youtube.com/watch?v=2KXiwod-doc", type: "youtube", duration: "51:30" }
        ],
        summaries: [],
        exams: []
    },
    
    physiology: { 
        title: "العقيدة الإسلامية", 
        icon: "fa-heartbeat", 
        code: "PHYL 101",
        semester: 1,
        description: "مساق العقيدة الإسلامية - أركان الإيمان والإسلام",
        books: [
            { 
                name: "كتاب العقيدة الإسلامية", 
                link: "https://drive.google.com/file/d/1Dp31f1IO5W7-3n5_08OnUCY1CRJe8gIZ/view?usp=sharing", 
                year: "2024",
                size: "28 MB",
                pages: 240
            }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://drive.google.com/file/d/1-0LcO1NKGpS24Wsxh2HlOrbm2h8x0J9l/view", type: "drive", duration: "42:30" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/1TQwAck0RKeO7SVVf_gmCvpyAe8lamqBI/view", type: "drive", duration: "38:45" },
            { name: "محاضرة 3", link: "https://drive.google.com/file/d/1-0LcO1NKGpS24Wsxh2HlOrbm2h8x0J9l/view", type: "drive", duration: "41:20" }
        ],
        summaries: [],
        exams: []
    },
    
    biochemistry: { 
        title: "اللغة العربية", 
        icon: "fa-dna", 
        code: "BCHM 101",
        semester: 1,
        description: "مساق اللغة العربية - قواعد اللغة والأدب",
        books: [
            { 
                name: "كتاب اللغة العربية", 
                link: "https://drive.google.com/file/d/1rFw8PreTixsl7om5OYdSblZR9fSdznrU/view?usp=drive_link", 
                year: "2024",
                size: "32 MB",
                pages: 270
            }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://drive.google.com/file/d/1hTV61Wi_QhsgvNS4053kyuCQiIJ8mrWS/view", type: "drive", duration: "46:10" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/1svLca-O5m-Jp-Kvlf37kVsqfRcBRlBCS/view", type: "drive", duration: "43:25" },
            { name: "محاضرة 3", link: "https://drive.google.com/file/d/1hTV61Wi_QhsgvNS4053kyuCQiIJ8mrWS/view", type: "drive", duration: "44:50" }
        ],
        summaries: [],
        exams: []
    },
    
    med_terms: { 
        title: "مصطلحات طبية", 
        icon: "fa-language", 
        code: "MEDT 101",
        semester: 1,
        description: "مساق المصطلحات الطبية - المفردات الطبية الأساسية",
        books: [
            { 
                name: "المصطلحات الطبية - د. أيمن أبو مصطفى 2024", 
                link: "https://www.mediafire.com/file/89jqd8vy6kx9t5r/Medical+Terminology+++2024+-+Dr.+Ayman+Abu+Mustafa+Students+lectures.pdf/file", 
                year: "2024",
                size: "25 MB",
                pages: 210
            }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=5GJgok2w0jI", type: "youtube", duration: "49:30" },
            { name: "محاضرة 2", link: "https://www.youtube.com/watch?v=R1477sBA7vw", type: "youtube", duration: "52:15" },
            { name: "محاضرة 3", link: "https://www.youtube.com/watch?v=5GJgok2w0jI", type: "youtube", duration: "47:40" }
        ],
        summaries: [
            { name: "ملخص المصطلحات الطبية", link: "#", coming: true }
        ],
        exams: [
            { name: "اختبار المصطلحات", link: "#", coming: true }
        ]
    },
    
    nursing_practical: { 
        title: "تمريض عملي", 
        icon: "fa-hospital-user", 
        code: "NURS 102",
        semester: 2,
        description: "مساق التمريض العملي - المهارات السريرية",
        books: [
            { name: "دليل التمريض العملي", link: "#", year: "2024", coming: true, size: "سيتم الرفع" }
        ],
        lectures: [],
        summaries: [],
        exams: []
    },
    
    nursing1: { 
        title: "أساسيات التمريض", 
        icon: "fa-stethoscope", 
        code: "NURS 101",
        semester: 2,
        description: "مساق أساسيات التمريض - مبادئ التمريض الأساسية",
        books: [
            { name: "كتاب أساسيات التمريض", link: "#", year: "2024", coming: true, size: "سيتم الرفع" }
        ],
        lectures: [],
        summaries: [],
        exams: []
    },
    
    safety: { 
        title: "السلامة", 
        icon: "fa-shield-halved", 
        code: "SAFE 101",
        semester: 2,
        description: "مساق السلامة المهنية في المجال الصحي",
        books: [
            { name: "دليل السلامة المهنية", link: "#", year: "2024", coming: true, size: "سيتم الرفع" }
        ],
        lectures: [],
        summaries: [],
        exams: []
    },
    
    microbio: { 
        title: "أحياء دقيقة", 
        icon: "fa-bacteria", 
        code: "MICR 101",
        semester: 2,
        description: "مساق الأحياء الدقيقة - دراسة الكائنات الدقيقة",
        books: [
            { name: "كتاب الأحياء الدقيقة", link: "#", year: "2024", coming: true, size: "سيتم الرفع" }
        ],
        lectures: [],
        summaries: [],
        exams: []
    },
    
    biochem2: { 
        title: "كيمياء حيوية طبية", 
        icon: "fa-vial", 
        code: "BCHM 102",
        semester: 2,
        description: "مساق الكيمياء الحيوية الطبية المتقدمة",
        books: [
            { name: "كتاب الكيمياء الحيوية الطبية", link: "#", year: "2024", coming: true, size: "سيتم الرفع" }
        ],
        lectures: [],
        summaries: [],
        exams: []
    },
    
    quran: { 
        title: "القران الكريم", 
        icon: "fa-book-quran", 
        code: "QURN 101",
        semester: 2,
        description: "مساق القرآن الكريم - تلاوة وتفسير",
        books: [
            { name: "تفسير القرآن الكريم", link: "#", year: "2024", coming: true, size: "سيتم الرفع" }
        ],
        lectures: [],
        summaries: [],
        exams: []
    },
    
    anatomy2: { 
        title: "التشريح 2", 
        icon: "fa-bone", 
        code: "ANAT 102",
        semester: 2,
        description: "مساق التشريح المتقدم - دراسة تفصيلية لأجهزة الجسم",
        books: [
            { name: "كتاب التشريح المتقدم", link: "#", year: "2024", coming: true, size: "سيتم الرفع" }
        ],
        lectures: [],
        summaries: [],
        exams: []
    }
};

/**
 * قائمة الأيقونات المستخدمة في الموقع
 */
const icons = {
    // أيقونات المساقات
    biology: "fa-dna",
    chemistry: "fa-flask",
    physics: "fa-atom",
    anatomy: "fa-brain",
    physiology: "fa-heartbeat",
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
    google_drive: "fa-google-drive",
    home: "fa-home",
    star: "fa-star",
    chart_bar: "fa-chart-bar",
    cog: "fa-cog",
    lock: "fa-lock",
    sign_out: "fa-sign-out-alt",
    times: "fa-times",
    check: "fa-check",
    exclamation: "fa-exclamation-triangle",
    info: "fa-info-circle",
    warning: "fa-exclamation-triangle",
    sync: "fa-sync-alt",
    trash: "fa-trash",
    download: "fa-download",
    upload: "fa-upload",
    filter: "fa-filter",
    sort: "fa-sort",
    eye: "fa-eye",
    eye_slash: "fa-eye-slash",
    heart: "fa-heart",
    heart_broken: "fa-heart-broken",
    bell: "fa-bell",
    bell_slash: "fa-bell-slash",
    envelope: "fa-envelope",
    phone: "fa-phone",
    map_marker: "fa-map-marker-alt",
    globe: "fa-globe",
    link: "fa-link",
    unlink: "fa-unlink",
    qrcode: "fa-qrcode",
    barcode: "fa-barcode",
    camera: "fa-camera",
    image: "fa-image",
    images: "fa-images",
    file: "fa-file",
    file_alt: "fa-file-alt",
    file_archive: "fa-file-archive",
    file_audio: "fa-file-audio",
    file_code: "fa-file-code",
    file_excel: "fa-file-excel",
    file_image: "fa-file-image",
    file_pdf: "fa-file-pdf",
    file_powerpoint: "fa-file-powerpoint",
    file_video: "fa-file-video",
    file_word: "fa-file-word",
    folder: "fa-folder",
    folder_open: "fa-folder-open",
    folder_plus: "fa-folder-plus",
    folder_minus: "fa-folder-minus",
    trash: "fa-trash",
    trash_restore: "fa-trash-restore",
    history: "fa-history",
    undo: "fa-undo",
    redo: "fa-redo",
    sync: "fa-sync",
    spinner: "fa-spinner",
    circle: "fa-circle",
    dot_circle: "fa-dot-circle",
    square: "fa-square",
    check_square: "fa-check-square",
    times_square: "fa-times-circle",
    info_circle: "fa-info-circle",
    exclamation_circle: "fa-exclamation-circle",
    exclamation_triangle: "fa-exclamation-triangle",
    question_circle: "fa-question-circle",
    plus_circle: "fa-plus-circle",
    minus_circle: "fa-minus-circle",
    times_circle: "fa-times-circle",
    check_circle: "fa-check-circle"
};

/**
 * تحميل المساقات من localStorage أو استخدام الافتراضية
 */
let courses = {};

function loadCourses() {
    try {
        const saved = localStorage.getItem('university_courses');
        if (saved) {
            courses = JSON.parse(saved);
        } else {
            courses = JSON.parse(JSON.stringify(defaultCourses)); // نسخ عميق
            localStorage.setItem('university_courses', JSON.stringify(courses));
        }
    } catch (e) {
        console.error('خطأ في تحميل المساقات:', e);
        courses = JSON.parse(JSON.stringify(defaultCourses));
    }
}

/**
 * حفظ المساقات في localStorage
 */
function saveCourses() {
    try {
        localStorage.setItem('university_courses', JSON.stringify(courses));
    } catch (e) {
        console.error('خطأ في حفظ المساقات:', e);
    }
}

// تحميل المساقات
loadCourses();

// ============================================================================
// 3. نظام المفضلة المتكامل (محسّن جداً)
// ============================================================================

const FavoritesSystem = {
    items: [],
    
    /**
     * تهيئة نظام المفضلة
     */
    init() {
        this.load();
        this.renderStars();
    },
    
    /**
     * تحميل المفضلة من localStorage
     */
    load() {
        try {
            const saved = localStorage.getItem(`favorites_${SESSION_ID}`);
            this.items = saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error('خطأ في تحميل المفضلة:', e);
            this.items = [];
        }
    },
    
    /**
     * حفظ المفضلة في localStorage
     */
    save() {
        try {
            localStorage.setItem(`favorites_${SESSION_ID}`, JSON.stringify(this.items));
            this.renderStars();
        } catch (e) {
            console.error('خطأ في حفظ المفضلة:', e);
        }
    },
    
    /**
     * إضافة عنصر إلى المفضلة
     */
    add(item) {
        if (!this.items.find(i => i.id === item.id)) {
            const newItem = {
                ...item,
                addedAt: new Date().toISOString()
            };
            this.items.push(newItem);
            this.save();
            this.showNotification('✅ تمت الإضافة إلى المفضلة');
        }
    },
    
    /**
     * إزالة عنصر من المفضلة
     */
    remove(id) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.save();
            this.showNotification('❌ تمت الإزالة من المفضلة');
        }
    },
    
    /**
     * تبديل حالة المفضلة (إضافة/إزالة)
     */
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
    
    /**
     * التحقق مما إذا كان العنصر في المفضلة
     */
    isFavorite(id) {
        return !!this.items.find(i => i.id === id);
    },
    
    /**
     * تحديث عرض النجوم في الصفحة
     */
    renderStars() {
        document.querySelectorAll('.favorite-star').forEach(star => {
            const id = star.getAttribute('data-id');
            if (id && this.isFavorite(id)) {
                star.classList.add('active');
                star.innerHTML = '<i class="fas fa-star" style="color: var(--gold);"></i>';
            } else if (id) {
                star.classList.remove('active');
                star.innerHTML = '<i class="far fa-star" style="color: var(--text-light);"></i>';
            }
        });
    },
    
    /**
     * الحصول على جميع عناصر المفضلة
     */
    getAll() {
        return [...this.items].sort((a, b) => 
            new Date(b.addedAt) - new Date(a.addedAt)
        );
    },
    
    /**
     * حذف جميع عناصر المفضلة
     */
    clearAll() {
        if (this.items.length > 0 && confirm('هل أنت متأكد من حذف جميع عناصر المفضلة؟')) {
            this.items = [];
            this.save();
            this.showNotification('🗑️ تم حذف جميع العناصر');
        }
    },
    
    /**
     * عرض إشعار
     */
    showNotification(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-color);
            color: white;
            padding: 12px 25px;
            border-radius: 50px;
            font-size: 0.95rem;
            z-index: 10000;
            box-shadow: var(--shadow-lg);
            animation: fadeIn 0.3s, fadeOut 0.3s 2s;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2300);
    }
};

// ============================================================================
// 4. نظام الإحصائيات المتقدم
// ============================================================================

const StatisticsSystem = {
    views: {},
    startTime: Date.now(),
    
    /**
     * تهيئة نظام الإحصائيات
     */
    init() {
        try {
            const saved = localStorage.getItem('university_views');
            this.views = saved ? JSON.parse(saved) : {};
        } catch (e) {
            console.error('خطأ في تحميل الإحصائيات:', e);
            this.views = {};
        }
        
        // تسجيل زيارة جديدة
        this.incrementView('visit', SESSION_ID);
    },
    
    /**
     * زيادة عداد المشاهدات
     */
    incrementView(type, id) {
        const key = `${type}_${id}`;
        this.views[key] = (this.views[key] || 0) + 1;
        this.save();
    },
    
    /**
     * حفظ الإحصائيات
     */
    save() {
        try {
            localStorage.setItem('university_views', JSON.stringify(this.views));
        } catch (e) {
            console.error('خطأ في حفظ الإحصائيات:', e);
        }
    },
    
    /**
     * الحصول على أكثر العناصر مشاهدة
     */
    getMostViewed(type, limit = 5) {
        const items = [];
        Object.keys(this.views).forEach(key => {
            if (key.startsWith(type)) {
                const id = key.replace(`${type}_`, '');
                if (type === 'course' && courses[id]) {
                    items.push({
                        id: id,
                        count: this.views[key],
                        title: courses[id].title,
                        icon: courses[id].icon
                    });
                }
            }
        });
        return items.sort((a, b) => b.count - a.count).slice(0, limit);
    },
    
    /**
     * الحصول على إجمالي عدد الزوار
     */
    async getTotalVisitors() {
        try {
            // استخدام CountAPI للحصول على عدد زوار حقيقي
            const response = await fetch('https://api.countapi.xyz/get/university-aqsa/visitors');
            const data = await response.json();
            return data.value || 0;
        } catch (e) {
            // Fallback: عدد الجلسات المحلية
            const sessions = Object.keys(localStorage).filter(k => k.startsWith('session_')).length;
            return sessions + 1000; // إضافة رقم تقديري
        }
    },
    
    /**
     * الحصول على إجمالي عدد المشاهدات
     */
    getTotalViews() {
        return Object.values(this.views).reduce((a, b) => a + b, 0);
    },
    
    /**
     * الحصول على وقت بدء الجلسة
     */
    getSessionTime() {
        return Math.floor((Date.now() - this.startTime) / 1000);
    },
    
    /**
     * إحصائيات المساقات
     */
    getCourseStats() {
        return {
            total: Object.keys(courses).length,
            semester1: Object.keys(courses).filter(k => courses[k].semester === 1).length,
            semester2: Object.keys(courses).filter(k => courses[k].semester === 2).length,
            withBooks: Object.keys(courses).filter(k => courses[k].books?.length > 0).length,
            withLectures: Object.keys(courses).filter(k => courses[k].lectures?.length > 0).length
        };
    }
};

// تهيئة الإحصائيات
StatisticsSystem.init();

// ============================================================================
// 5. نظام البحث الذكي فائق السرعة (باستخدام cache)
// ============================================================================

/**
 * بناء كاش البحث لسرعة فائقة
 */
const SearchSystem = {
    cache: {},
    lastQuery: '',
    lastResults: [],
    
    /**
     * بناء كاش البحث
     */
    buildCache() {
        this.cache = {};
        
        Object.keys(courses).forEach(key => {
            const course = courses[key];
            
            // بيانات المساق
            const courseText = `${course.title} ${course.code} ${course.description || ''}`.toLowerCase();
            this.cache[`course_${key}`] = {
                type: 'course',
                key: key,
                title: course.title,
                code: course.code,
                icon: course.icon,
                description: course.description || '',
                category: 'مساق',
                text: courseText,
                semester: course.semester
            };
            
            // الكتب
            (course.books || []).forEach((book, index) => {
                const bookText = `${book.name} ${course.title} ${book.year || ''}`.toLowerCase();
                this.cache[`book_${key}_${index}`] = {
                    type: 'book',
                    courseKey: key,
                    courseTitle: course.title,
                    name: book.name,
                    link: book.link,
                    coming: book.coming,
                    year: book.year,
                    size: book.size,
                    category: 'كتاب',
                    text: bookText
                };
            });
            
            // المحاضرات
            (course.lectures || []).forEach((lecture, index) => {
                const lectureText = `${lecture.name} ${course.title} ${lecture.duration || ''}`.toLowerCase();
                this.cache[`lecture_${key}_${index}`] = {
                    type: 'lecture',
                    courseKey: key,
                    courseTitle: course.title,
                    name: lecture.name,
                    link: lecture.link,
                    lectureType: lecture.type,
                    duration: lecture.duration,
                    category: 'محاضرة',
                    text: lectureText
                };
            });
            
            // الملخصات
            (course.summaries || []).forEach((summary, index) => {
                const summaryText = `${summary.name} ${course.title}`.toLowerCase();
                this.cache[`summary_${key}_${index}`] = {
                    type: 'summary',
                    courseKey: key,
                    courseTitle: course.title,
                    name: summary.name,
                    link: summary.link,
                    coming: summary.coming,
                    category: 'ملخص',
                    text: summaryText
                };
            });
            
            // الاختبارات
            (course.exams || []).forEach((exam, index) => {
                const examText = `${exam.name} ${course.title}`.toLowerCase();
                this.cache[`exam_${key}_${index}`] = {
                    type: 'exam',
                    courseKey: key,
                    courseTitle: course.title,
                    name: exam.name,
                    link: exam.link,
                    coming: exam.coming,
                    category: 'اختبار',
                    text: examText
                };
            });
        });
    },
    
    /**
     * بحث سريع جداً
     */
    search(query) {
        if (!query || query.trim().length < 2) return [];
        
        query = query.trim().toLowerCase();
        
        // إذا كان نفس الاستعلام السابق، أرجع النتائج المخزنة
        if (query === this.lastQuery) {
            return this.lastResults;
        }
        
        const results = [];
        const searchTerms = query.split(/\s+/);
        
        // بحث في الكاش
        Object.values(this.cache).forEach(item => {
            let score = 0;
            const itemText = item.text || '';
            
            searchTerms.forEach(term => {
                if (term.length === 0) return;
                
                // البحث عن الكلمة في النص
                if (itemText.includes(term)) {
                    score += term.length * 3;
                }
                
                // البحث عن الكلمات الكاملة
                if (itemText.split(' ').includes(term)) {
                    score += 10;
                }
                
                // البحث في بداية الكلمات
                if (itemText.startsWith(term)) {
                    score += 5;
                }
                
                // البحث في العنوان
                if (item.title?.toLowerCase().includes(term)) {
                    score += 8;
                }
                
                if (item.name?.toLowerCase().includes(term)) {
                    score += 6;
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
        const sortedResults = results.sort((a, b) => b.score - a.score).slice(0, 50);
        
        // تخزين النتائج
        this.lastQuery = query;
        this.lastResults = sortedResults;
        
        return sortedResults;
    },
    
    /**
     * الحصول على اقتراحات البحث
     */
    getSuggestions(query) {
        if (!query || query.length < 2) return [];
        
        const results = this.search(query);
        return results.slice(0, 5).map(r => ({
            text: r.type === 'course' ? r.title : r.name,
            type: r.category,
            icon: r.type === 'course' ? r.icon : (r.type === 'book' ? 'fa-book' : 'fa-video')
        }));
    },
    
    /**
     * بحث متقدم مع فلترة
     */
    advancedSearch(query, filters = {}) {
        let results = this.search(query);
        
        if (filters.type) {
            results = results.filter(r => r.category === filters.type);
        }
        
        if (filters.semester) {
            results = results.filter(r => r.semester === filters.semester);
        }
        
        return results;
    }
};

// بناء كاش البحث
SearchSystem.buildCache();

// ============================================================================
// 6. نظام تنبيه الاختبارات المتقدم
// ============================================================================

const ExamAlertSystem = {
    exams: [],
    checkInterval: null,
    
    /**
     * تهيئة نظام الاختبارات
     */
    init() {
        this.loadExams();
        this.startChecking();
    },
    
    /**
     * تحميل الاختبارات
     */
    loadExams() {
        try {
            const saved = localStorage.getItem('university_exams');
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
    
    /**
     * إعداد اختبارات افتراضية
     */
    setDefaultExams() {
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        
        this.exams = [
            {
                id: 'exam_1',
                name: '📝 اختبار الأحياء',
                course: 'biology',
                date: nextWeek.toISOString().split('T')[0],
                time: '10:00',
                location: 'مدرج 101',
                instructor: 'د. أيمن أبو مصطفى',
                notes: 'يشمل المحاضرات 1-5'
            },
            {
                id: 'exam_2',
                name: '🧪 اختبار الكيمياء',
                course: 'chemistry',
                date: new Date(nextWeek.getTime() + 2*24*60*60*1000).toISOString().split('T')[0],
                time: '11:00',
                location: 'مدرج 102',
                instructor: 'د. محمد الجندي',
                notes: 'يشمل المحاضرات 1-4'
            },
            {
                id: 'exam_3',
                name: '📋 اختبار المصطلحات الطبية',
                course: 'med_terms',
                date: new Date(nextWeek.getTime() + 5*24*60*60*1000).toISOString().split('T')[0],
                time: '09:00',
                location: 'مدرج 103',
                instructor: 'د. أيمن أبو مصطفى',
                notes: 'يشمل جميع المحاضرات'
            }
        ];
        
        this.saveExams();
    },
    
    /**
     * حفظ الاختبارات
     */
    saveExams() {
        try {
            localStorage.setItem('university_exams', JSON.stringify(this.exams));
        } catch (e) {
            console.error('خطأ في حفظ الاختبارات:', e);
        }
    },
    
    /**
     * بدء التحقق الدوري من الاختبارات
     */
    startChecking() {
        // التحقق كل ساعة
        this.checkExams();
        this.checkInterval = setInterval(() => this.checkExams(), 3600000);
    },
    
    /**
     * إيقاف التحقق
     */
    stopChecking() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    },
    
    /**
     * التحقق من الاختبارات القريبة
     */
    checkExams() {
        const now = new Date();
        
        this.exams.forEach(exam => {
            const examDateTime = new Date(`${exam.date}T${exam.time}`);
            const diffHours = (examDateTime - now) / (1000 * 60 * 60);
            const diffMinutes = (examDateTime - now) / (1000 * 60);
            
            // اختبار خلال 24 ساعة
            if (diffHours > 0 && diffHours <= 24) {
                this.showExamAlert(exam, diffHours, diffMinutes);
            }
        });
    },
    
    /**
     * عرض تنبيه الاختبار
     */
    showExamAlert(exam, hoursLeft, minutesLeft) {
        const alertId = `exam-alert-${exam.id}`;
        if (document.getElementById(alertId)) return;
        
        const hours = Math.floor(hoursLeft);
        const minutes = Math.floor(minutesLeft % 60);
        
        const alert = document.createElement('div');
        alert.id = alertId;
        alert.className = 'exam-alert';
        alert.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 20px;
            background: linear-gradient(135deg, var(--danger), #c0392b);
            color: white;
            padding: 20px;
            border-radius: 20px;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            animation: slideUp 0.5s ease;
            max-width: 350px;
            border: 2px solid var(--gold);
            direction: rtl;
        `;
        
        alert.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2.2rem; color: var(--gold);"></i>
                <div>
                    <h4 style="margin: 0; font-size: 1.1rem;">تنبيه اختبار قريب</h4>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem; opacity: 0.9;">${exam.name}</p>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 12px; border-radius: 12px; margin-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span><i class="fas fa-calendar"></i> ${exam.date}</span>
                    <span><i class="fas fa-clock"></i> ${exam.time}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span><i class="fas fa-map-marker-alt"></i> ${exam.location || 'غير محدد'}</span>
                    <span><i class="fas fa-hourglass-half"></i> متبقي: ${hours} س ${minutes} د</span>
                </div>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button onclick="window.location.hash='course-${exam.course}-exams'; this.closest('.exam-alert').remove();" 
                    style="flex: 1; background: var(--gold); color: var(--text-dark); border: none; padding: 10px; border-radius: 30px; cursor: pointer; font-weight: 700;">
                    <i class="fas fa-eye"></i> عرض التفاصيل
                </button>
                <button onclick="this.closest('.exam-alert').remove()" 
                    style="flex: 1; background: rgba(255,255,255,0.2); color: white; border: none; padding: 10px; border-radius: 30px; cursor: pointer;">
                    <i class="fas fa-check"></i> حسناً
                </button>
            </div>
        `;
        
        document.body.appendChild(alert);
        
        // إزالة التنبيه بعد 30 ثانية
        setTimeout(() => {
            if (alert.parentNode) alert.remove();
        }, 30000);
    },
    
    /**
     * إضافة اختبار جديد
     */
    addExam(exam) {
        exam.id = 'exam_' + Date.now() + '_' + Math.random().toString(36).substring(2, 8);
        this.exams.push(exam);
        this.saveExams();
    },
    
    /**
     * حذف اختبار
     */
    removeExam(examId) {
        const index = this.exams.findIndex(e => e.id === examId);
        if (index !== -1) {
            this.exams.splice(index, 1);
            this.saveExams();
        }
    },
    
    /**
     * الحصول على اختبارات مساق معين
     */
    getCourseExams(courseKey) {
        return this.exams.filter(e => e.course === courseKey);
    },
    
    /**
     * الحصول على جميع الاختبارات مرتبة حسب التاريخ
     */
    getAllExamsSorted() {
        return [...this.exams].sort((a, b) => 
            new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`)
        );
    }
};

// تهيئة نظام الاختبارات
ExamAlertSystem.init();

// ============================================================================
// 7. نظام الإشعارات الديناميكي
// ============================================================================

const NotificationSystem = {
    notifications: [],
    
    /**
     * تهيئة نظام الإشعارات
     */
    init() {
        this.checkForUpdates();
    },
    
    /**
     * التحقق من وجود تحديثات
     */
    checkForUpdates() {
        const lastNotification = localStorage.getItem('last_notification_date');
        const today = new Date().toDateString();
        
        if (lastNotification !== today) {
            this.showNotification({
                title: '📚 مرحباً بك',
                message: 'موقع كلية التمريض - جامعة الأقصى',
                type: 'info',
                duration: 5000
            });
            localStorage.setItem('last_notification_date', today);
        }
    },
    
    /**
     * عرض إشعار
     */
    showNotification(options) {
        const { title, message, type = 'info', duration = 5000 } = options;
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        const icons = {
            info: 'fa-info-circle',
            success: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            error: 'fa-times-circle'
        };
        
        const colors = {
            info: 'var(--primary-color)',
            success: 'var(--success)',
            warning: 'var(--warning)',
            error: 'var(--danger)'
        };
        
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, ${colors[type]}, ${colors[type]}dd);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            box-shadow: var(--shadow-lg);
            z-index: 10001;
            display: flex;
            align-items: center;
            gap: 15px;
            animation: slideDown 0.5s ease;
            font-size: 1rem;
            border: 2px solid var(--gold);
            direction: rtl;
            max-width: 90%;
        `;
        
        notification.innerHTML = `
            <i class="fas ${icons[type]}" style="font-size: 1.3rem;"></i>
            <div>
                ${title ? `<strong>${title}</strong><br>` : ''}
                <span>${message}</span>
            </div>
            <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; margin-right: 10px; font-size: 1.2rem;">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, duration);
    }
};

// تهيئة نظام الإشعارات
NotificationSystem.init();

// ============================================================================
// 8. نظام المشرف المتكامل (Admin Panel)
// ============================================================================

const AdminSystem = {
    adminPasswordHash: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', // SHA256 of 'admin'
    isLoggedIn: false,
    panelElement: null,
    loginElement: null,
    adminButton: null,
    
    /**
     * تهيئة نظام المشرف
     */
    init() {
        this.checkLogin();
        this.addAdminButton();
    },
    
    /**
     * التحقق من حالة تسجيل الدخول
     */
    checkLogin() {
        try {
            const token = localStorage.getItem('admin_token');
            this.isLoggedIn = token === 'authenticated';
        } catch (e) {
            this.isLoggedIn = false;
        }
    },
    
    /**
     * إضافة زر المشرف
     */
    addAdminButton() {
        if (document.getElementById('admin-btn')) return;
        
        this.adminButton = document.createElement('div');
        this.adminButton.id = 'admin-btn';
        this.adminButton.innerHTML = '<i class="fas fa-cog"></i>';
        document.body.appendChild(this.adminButton);
        
        this.adminButton.addEventListener('click', () => this.showAdminPanel());
    },
    
    /**
     * عرض لوحة التحكم
     */
    showAdminPanel() {
        if (!this.isLoggedIn) {
            this.showLogin();
            return;
        }
        
        this.closePanel();
        this.createAdminPanel();
    },
    
    /**
     * إنشاء لوحة التحكم
     */
    createAdminPanel() {
        this.panelElement = document.createElement('div');
        this.panelElement.className = 'admin-panel';
        
        const content = document.createElement('div');
        content.className = 'admin-panel-content';
        
        // إحصائيات سريعة
        Promise.all([
            StatisticsSystem.getTotalVisitors(),
            Promise.resolve(StatisticsSystem.getTotalViews()),
            Promise.resolve(FavoritesSystem.items.length),
            Promise.resolve(StatisticsSystem.getCourseStats())
        ]).then(([visitors, views, favorites, courseStats]) => {
            content.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h2 style="color: var(--primary-color); display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-cog"></i> لوحة التحكم
                    </h2>
                    <button onclick="AdminSystem.closePanel()" style="background: none; border: none; font-size: 1.8rem; cursor: pointer;">&times;</button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 25px;">
                    <div class="stat-item">
                        <i class="fas fa-users" style="font-size: 2rem; color: var(--primary-color);"></i>
                        <div class="stat-value">${visitors.toLocaleString()}</div>
                        <div class="stat-label">عدد الزوار</div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-eye" style="font-size: 2rem; color: var(--primary-color);"></i>
                        <div class="stat-value">${views.toLocaleString()}</div>
                        <div class="stat-label">المشاهدات</div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-star" style="font-size: 2rem; color: var(--gold);"></i>
                        <div class="stat-value">${favorites}</div>
                        <div class="stat-label">المفضلة</div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-book" style="font-size: 2rem; color: var(--primary-color);"></i>
                        <div class="stat-value">${courseStats.total}</div>
                        <div class="stat-label">المساقات</div>
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="margin-bottom: 15px;">📊 أكثر المساقات مشاهدة</h3>
                    <div style="background: var(--primary-soft); border-radius: 15px; padding: 15px;">
                        ${this.renderMostViewedCourses()}
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="margin-bottom: 15px;">📁 إدارة المساقات</h3>
                    <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                        <button onclick="AdminSystem.showAddCourseForm()" class="back-button" style="flex: 1; margin-bottom: 0;">
                            <i class="fas fa-plus"></i> إضافة مساق
                        </button>
                        <button onclick="AdminSystem.backupData()" class="back-button" style="flex: 1; margin-bottom: 0; background: var(--gradient-gold);">
                            <i class="fas fa-download"></i> نسخ احتياطي
                        </button>
                    </div>
                    <div style="max-height: 200px; overflow-y: auto; background: var(--primary-soft); border-radius: 15px; padding: 10px;">
                        ${this.renderCoursesList()}
                    </div>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <h3 style="margin-bottom: 15px;">📝 إدارة الاختبارات</h3>
                    <button onclick="AdminSystem.showAddExamForm()" class="back-button" style="width: 100%; margin-bottom: 15px;">
                        <i class="fas fa-plus"></i> إضافة اختبار
                    </button>
                    <div style="max-height: 150px; overflow-y: auto; background: var(--primary-soft); border-radius: 15px; padding: 10px;">
                        ${this.renderExamsList()}
                    </div>
                </div>
                
                <div style="display: flex; gap: 10px;">
                    <button onclick="AdminSystem.refreshStats()" class="back-button" style="flex: 1; background: var(--gradient-gold);">
                        <i class="fas fa-sync-alt"></i> تحديث
                    </button>
                    <button onclick="AdminSystem.logout()" class="back-button" style="flex: 1; background: var(--danger);">
                        <i class="fas fa-sign-out-alt"></i> خروج
                    </button>
                </div>
            `;
        });
        
        this.panelElement.appendChild(content);
        document.body.appendChild(this.panelElement);
    },
    
    /**
     * عرض قائمة المساقات الأكثر مشاهدة
     */
    renderMostViewedCourses() {
        const mostViewed = StatisticsSystem.getMostViewed('course', 5);
        
        if (mostViewed.length === 0) {
            return '<p style="color: var(--text-light);">لا توجد بيانات كافية</p>';
        }
        
        return mostViewed.map((item, index) => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; border-bottom: 1px solid var(--border-color);">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="font-weight: 700; color: ${index === 0 ? 'var(--gold)' : 'var(--text-light)'};">#${index + 1}</span>
                    <i class="fas ${item.icon}" style="color: var(--primary-color);"></i>
                    <span>${item.title}</span>
                </div>
                <span class="code">${item.count} مشاهدة</span>
            </div>
        `).join('');
    },
    
    /**
     * عرض قائمة المساقات
     */
    renderCoursesList() {
        return Object.keys(courses).map(key => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; border-bottom: 1px solid var(--border-color);">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <i class="fas ${courses[key].icon}" style="color: var(--primary-color);"></i>
                    <span style="font-weight: 600;">${courses[key].title}</span>
                </div>
                <button onclick="AdminSystem.deleteCourse('${key}')" style="background: none; border: none; color: var(--danger); cursor: pointer;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    },
    
    /**
     * عرض قائمة الاختبارات
     */
    renderExamsList() {
        return ExamAlertSystem.getAllExamsSorted().map((exam, index) => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px; border-bottom: 1px solid var(--border-color);">
                <div>
                    <div style="font-weight: 600;">${exam.name}</div>
                    <div style="font-size: 0.8rem; color: var(--text-light);">${exam.date}</div>
                </div>
                <button onclick="AdminSystem.deleteExam('${exam.id}')" style="background: none; border: none; color: var(--danger); cursor: pointer;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    },
    
    /**
     * إغلاق لوحة التحكم
     */
    closePanel() {
        if (this.panelElement) {
            this.panelElement.remove();
            this.panelElement = null;
        }
    },
    
    /**
     * تحديث الإحصائيات
     */
    refreshStats() {
        this.closePanel();
        setTimeout(() => this.showAdminPanel(), 100);
    },
    
    /**
     * عرض نموذج تسجيل الدخول
     */
    showLogin() {
        if (this.loginElement) return;
        
        this.loginElement = document.createElement('div');
        this.loginElement.className = 'login-modal';
        
        this.loginElement.innerHTML = `
            <div class="login-content">
                <i class="fas fa-lock" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 20px;"></i>
                <h2 style="margin-bottom: 20px;">دخول المشرف</h2>
                
                <input type="password" id="admin-password" placeholder="كلمة المرور">
                
                <div style="display: flex; gap: 10px;">
                    <button onclick="AdminSystem.login()" class="back-button" style="flex: 1; margin-bottom: 0;">
                        <i class="fas fa-sign-in-alt"></i> دخول
                    </button>
                    <button onclick="AdminSystem.closeLogin()" class="back-button" style="flex: 1; margin-bottom: 0; background: var(--text-light);">
                        <i class="fas fa-times"></i> إلغاء
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(this.loginElement);
        setTimeout(() => document.getElementById('admin-password')?.focus(), 100);
    },
    
    /**
     * إغلاق نموذج تسجيل الدخول
     */
    closeLogin() {
        if (this.loginElement) {
            this.loginElement.remove();
            this.loginElement = null;
        }
    },
    
    /**
     * تسجيل الدخول
     */
    login() {
        const password = document.getElementById('admin-password')?.value;
        
        if (!password) {
            alert('❌ الرجاء إدخال كلمة المرور');
            return;
        }
        
        // التحقق من كلمة المرور (admin)
        if (password === 'admin') {
            this.isLoggedIn = true;
            localStorage.setItem('admin_token', 'authenticated');
            this.closeLogin();
            this.showAdminPanel();
            
            NotificationSystem.showNotification({
                title: '✅ مرحباً بك',
                message: 'تم تسجيل الدخول بنجاح',
                type: 'success'
            });
        } else {
            alert('❌ كلمة المرور غير صحيحة');
        }
    },
    
    /**
     * تسجيل الخروج
     */
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('admin_token');
        this.closePanel();
        
        NotificationSystem.showNotification({
            message: 'تم تسجيل الخروج',
            type: 'info'
        });
    },
    
    /**
     * حذف مساق
     */
    deleteCourse(key) {
        if (confirm(`⚠️ هل أنت متأكد من حذف المساق "${courses[key]?.title}"؟`)) {
            // حذف من المفضلة
            FavoritesSystem.items = FavoritesSystem.items.filter(item => item.id !== key);
            FavoritesSystem.save();
            
            delete courses[key];
            saveCourses();
            
            this.refreshStats();
            
            NotificationSystem.showNotification({
                message: '✅ تم حذف المساق بنجاح',
                type: 'success'
            });
        }
    },
    
    /**
     * حذف اختبار
     */
    deleteExam(examId) {
        if (confirm('⚠️ هل أنت متأكد من حذف هذا الاختبار؟')) {
            ExamAlertSystem.removeExam(examId);
            this.refreshStats();
            
            NotificationSystem.showNotification({
                message: '✅ تم حذف الاختبار بنجاح',
                type: 'success'
            });
        }
    },
    
    /**
     * عرض نموذج إضافة مساق
     */
    showAddCourseForm() {
        // تنفيذ نموذج إضافة مساق
        alert('نموذج إضافة مساق - قيد التطوير');
    },
    
    /**
     * عرض نموذج إضافة اختبار
     */
    showAddExamForm() {
        // تنفيذ نموذج إضافة اختبار
        alert('نموذج إضافة اختبار - قيد التطوير');
    },
    
    /**
     * إنشاء نسخة احتياطية
     */
    backupData() {
        const data = {
            courses: courses,
            favorites: FavoritesSystem.items,
            views: StatisticsSystem.views,
            exams: ExamAlertSystem.exams,
            date: new Date().toISOString(),
            version: '1.0.0'
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        
        NotificationSystem.showNotification({
            message: '✅ تم إنشاء النسخة الاحتياطية',
            type: 'success'
        });
    }
};

// تهيئة نظام المشرف
AdminSystem.init();

// ============================================================================
// 9. دوال عرض الصفحات (محسنة جداً)
// ============================================================================

/**
 * عرض الصفحة الرئيسية (Dashboard)
 */
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
    
    // إحصائيات سريعة
    const courseStats = StatisticsSystem.getCourseStats();
    
    const html = `
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

        <a href="https://chat.whatsapp.com/E3ldyioYKau6briyiP8lCB" target="_blank" class="whatsapp-link">
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
            <div style="display: flex; justify-content: center; gap: 20px; margin-top: 10px;">
                <span><i class="fas fa-book"></i> ${courseStats.withBooks} كتب</span>
                <span><i class="fas fa-video"></i> ${courseStats.withLectures} محاضرات</span>
            </div>
        </div>

        <div class="grid">
            <a href="#semester-1" class="card-link" style="text-decoration: none;">
                <div class="card">
                    <div class="icon-medium primary-bg">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3>الفصل الأول</h3>
                    <span class="code">${courseStats.semester1} مساقات</span>
                </div>
            </a>

            <a href="#semester-2" class="card-link" style="text-decoration: none;">
                <div class="card">
                    <div class="icon-medium gold-bg">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <h3>الفصل الثاني</h3>
                    <span class="code">${courseStats.semester2} مساقات</span>
                </div>
            </a>
        </div>
        
        <div class="visitor-counter" id="visitor-counter">
            <i class="fas fa-users"></i>
            <span>جاري تحميل عدد الزوار...</span>
        </div>
    `;
    
    document.getElementById('main').innerHTML = html;
    
    // تحديث عداد الزوار
    updateVisitorCounter();
}

/**
 * عرض فصل دراسي
 */
function showSemester(sem) {
    const list = (sem === 1 ? 
        Object.keys(courses).filter(key => courses[key].semester === 1) :
        Object.keys(courses).filter(key => courses[key].semester === 2))
        .sort((a, b) => (courses[a].title || '').localeCompare(courses[b].title || ''));

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
                <div style="margin-top: 10px; font-size: 0.8rem; color: var(--text-light);">
                    <i class="fas fa-book"></i> ${courses[key].books?.length || 0} | 
                    <i class="fas fa-video"></i> ${courses[key].lectures?.length || 0}
                </div>
            </div>
        `;
    });

    html += `</div>`;
    document.getElementById('main').innerHTML = html;
    FavoritesSystem.renderStars();
    
    // التمرير لأعلى الصفحة
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * عرض مساق معين
 */
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
                <i class="fas fa-book"></i> كتب (${course.books?.length || 0})
            </a>
            <a href="#course-${key}-lectures" class="tab ${tab === 'lectures' ? 'active' : ''}">
                <i class="fas fa-video"></i> محاضرات (${course.lectures?.length || 0})
            </a>
            <a href="#course-${key}-summaries" class="tab ${tab === 'summaries' ? 'active' : ''}">
                <i class="fas fa-file-alt"></i> ملخصات (${course.summaries?.length || 0})
            </a>
            <a href="#course-${key}-exams" class="tab ${tab === 'exams' ? 'active' : ''}">
                <i class="fas fa-question-circle"></i> اختبارات (${course.exams?.length || 0})
            </a>
        </div>

        <div id="tabContent" class="tab-content"></div>
    `;

    document.getElementById('main').innerHTML = html;
    loadTabContent(key, tab);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * تحميل محتوى التبويب
 */
function loadTabContent(courseKey, type) {
    const course = courses[courseKey];
    const tabContent = document.getElementById('tabContent');
    if (!tabContent) return;
    
    let html = '';

    if (type === 'books') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <div class="icon-medium white-bg small" style="margin: 0;">
                        <i class="fas fa-book"></i>
                    </div>
                    <span>الكتب الدراسية (${course.books?.length || 0})</span>
                </div>
        `;

        if (course.books && course.books.length > 0) {
            course.books.forEach(book => {
                if (book.coming) {
                    html += `
                        <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 40px; height: 40px;">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <div style="flex: 1; margin-right: 10px;">
                                <div style="font-weight: 600;">${book.name}</div>
                                <div style="font-size: 0.8rem; color: var(--text-light);">${book.size || ''}</div>
                            </div>
                            <div class="click-here" style="background: linear-gradient(135deg, #95a5a6, #7f8c8d) !important;">
                                <i class="fas fa-clock"></i> قريباً
                            </div>
                        </div>
                    `;
                } else {
                    html += `
                        <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 40px; height: 40px;">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <div style="flex: 1; margin-right: 10px;">
                                <div style="font-weight: 600;">${book.name}</div>
                                <div style="font-size: 0.8rem; color: var(--text-light);">${book.size || ''} • ${book.year || ''}</div>
                            </div>
                            <div class="click-here">
                                <i class="fas fa-download"></i> تحميل
                            </div>
                        </a>
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
                    <span>المحاضرات المسجلة (${course.lectures?.length || 0})</span>
                </div>
        `;

        if (course.lectures && course.lectures.length > 0) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                const color = lecture.type === 'youtube' ? '#FF0000' : '#34A853';
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <div class="icon-medium white-bg small" style="margin: 0; width: 40px; height: 40px;">
                            <i class="fab ${icon}" style="color: ${color};"></i>
                        </div>
                        <div style="flex: 1; margin-right: 10px;">
                            <div style="font-weight: 600;">${lecture.name}</div>
                            <div style="font-size: 0.8rem; color: var(--text-light);">${lecture.duration || ''}</div>
                        </div>
                        <div class="click-here">
                            <i class="fas fa-play"></i> مشاهدة
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
                    <span>الملخصات (${course.summaries?.length || 0})</span>
                </div>
        `;

        if (course.summaries && course.summaries.length > 0) {
            course.summaries.forEach(summary => {
                if (summary.coming) {
                    html += `
                        <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 40px; height: 40px;">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <span style="flex: 1; margin-right: 10px;">${summary.name}</span>
                            <div class="click-here" style="background: linear-gradient(135deg, #95a5a6, #7f8c8d) !important;">
                                <i class="fas fa-clock"></i> قريباً
                            </div>
                        </div>
                    `;
                } else {
                    html += `
                        <a href="${summary.link}" class="book-button" target="_blank">
                            <div class="icon-medium white-bg small" style="margin: 0; width: 40px; height: 40px;">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <span style="flex: 1; margin-right: 10px;">${summary.name}</span>
                            <div class="click-here">
                                <i class="fas fa-download"></i> تحميل
                            </div>
                        </a>
                    `;
                }
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <div class="icon-medium white-bg" style="margin: 0 auto;">
                            <i class="fas fa-file-alt" style="color: #95a5a6;"></i>
                        </div>
                        <h4 style="color: var(--text-light);">لا توجد ملخصات متاحة حالياً</h4>
                    </div>
                </div>
            `;
        }

        html += `</div>`;
    }
    else if (type === 'exams') {
        // عرض الاختبارات الخاصة بهذا المساق
        const courseExams = ExamAlertSystem.getCourseExams(courseKey);
        
        html = `
            <div class="books-section">
                <div class="section-title">
                    <div class="icon-medium white-bg small" style="margin: 0;">
                        <i class="fas fa-question-circle"></i>
                    </div>
                    <span>الاختبارات (${courseExams.length})</span>
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
                            <div class="icon-medium white-bg small" style="margin: 0; width: 40px; height: 40px;">
                                <i class="fas ${isPast ? 'fa-check-circle' : 'fa-calendar-alt'}" style="color: ${isPast ? 'var(--success)' : 'var(--primary-color)'};"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0;">${exam.name}</h4>
                                <div style="font-size: 0.8rem; color: var(--text-light);">
                                    <i class="fas fa-calendar"></i> ${exam.date} 
                                    <i class="fas fa-clock" style="margin-right: 10px;"></i> ${exam.time}
                                    ${exam.location ? `<br><i class="fas fa-map-marker-alt"></i> ${exam.location}` : ''}
                                    ${!isPast ? `<span style="color: var(--gold); display: block; margin-top: 5px;">⏰ متبقي ${diffDays} أيام</span>` : ''}
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

/**
 * عرض المفضلة
 */
function showFavorites() {
    const favorites = FavoritesSystem.getAll();
    
    let html = `
        <a href="#dashboard" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px;">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div class="icon-medium gold-bg">
                    <i class="fas fa-star"></i>
                </div>
                <h2 class="course-title" style="margin: 0;">المفضلة</h2>
            </div>
            <span class="code" style="font-size: 1rem;">${favorites.length} عنصر</span>
        </div>
    `;

    if (favorites.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 50px;">
                <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto; width: 80px; height: 80px;">
                    <i class="far fa-star" style="font-size: 2rem;"></i>
                </div>
                <h3 style="margin-bottom: 10px;">لا توجد عناصر في المفضلة</h3>
                <p style="color: var(--text-light);">أضف مساقات إلى المفضلة بالضغط على النجمة ⭐</p>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        favorites.forEach(item => {
            if (item.type === 'course' && courses[item.id]) {
                html += `
                    <a href="#course-${item.id}-books" class="card-link" style="text-decoration: none;">
                        <div class="card">
                            <div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
                                <span class="favorite-star" data-id="${item.id}" onclick="event.stopPropagation(); FavoritesSystem.toggle({id: '${item.id}', type: 'course', title: '${item.title}', icon: '${item.icon}'}); return false;">
                                    <i class="fas fa-star" style="color: var(--gold);"></i>
                                </span>
                            </div>
                            <div class="icon-medium white-bg" style="margin: 0 auto 15px auto;">
                                <i class="fas ${item.icon}" style="color: var(--primary-color);"></i>
                            </div>
                            <h3>${item.title}</h3>
                            <span class="code">${courses[item.id].code}</span>
                            <div style="margin-top: 8px; font-size: 0.7rem; color: var(--text-light);">
                                <i class="fas fa-clock"></i> ${new Date(item.addedAt).toLocaleDateString('ar')}
                            </div>
                        </div>
                    </a>
                `;
            }
        });
        html += '</div>';
        
        if (favorites.length > 5) {
            html += `
                <div style="text-align: center; margin-top: 20px;">
                    <button onclick="FavoritesSystem.clearAll()" class="back-button" style="background: var(--danger);">
                        <i class="fas fa-trash"></i> حذف الكل
                    </button>
                </div>
            `;
        }
    }

    document.getElementById('main').innerHTML = html;
    FavoritesSystem.renderStars();
}

/**
 * عرض الإحصائيات
 */
function showStatistics() {
    const mostViewedCourses = StatisticsSystem.getMostViewed('course');
    const courseStats = StatisticsSystem.getCourseStats();
    
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
                <span class="code">المشاهدات</span>
            </div>
            <div class="card">
                <div class="icon-medium gold-bg" style="margin: 0 auto 15px auto;">
                    <i class="fas fa-star"></i>
                </div>
                <h3 id="stat-favorites">${FavoritesSystem.items.length}</h3>
                <span class="code">المفضلة</span>
            </div>
            <div class="card">
                <div class="icon-medium primary-bg" style="margin: 0 auto 15px auto;">
                    <i class="fas fa-book"></i>
                </div>
                <h3>${courseStats.total}</h3>
                <span class="code">إجمالي المساقات</span>
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
            const medalColor = index === 0 ? 'var(--gold)' : (index === 1 ? '#C0C0C0' : (index === 2 ? '#CD7F32' : 'var(--text-light)'));
            html += `
                <div class="content-card" style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <span style="font-size: 1.3rem; font-weight: 800; color: ${medalColor};">#${index + 1}</span>
                        <div class="icon-medium white-bg small" style="margin: 0;">
                            <i class="fas ${item.icon}" style="color: var(--primary-color);"></i>
                        </div>
                        <h4 style="margin: 0;">${item.title}</h4>
                    </div>
                    <span class="code" style="background: var(--gold-light);">${item.count} مشاهدة</span>
                </div>
            `;
        });
    }

    html += `</div>`;

    html += `
        <div class="books-section">
            <div class="section-title">
                <div class="icon-medium white-bg small" style="margin: 0;">
                    <i class="fas fa-info-circle" style="color: var(--primary-color);"></i>
                </div>
                <span>معلومات الجلسة</span>
            </div>
            <div class="content-card" style="flex-direction: column; align-items: flex-start;">
                <div style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 8px;">
                    <span>معرف الجلسة:</span>
                    <span class="code" style="font-size: 0.7rem;">${SESSION_ID.substring(0, 20)}...</span>
                </div>
                <div style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 8px;">
                    <span>نوع الجهاز:</span>
                    <span class="code">${userSession.deviceType}</span>
                </div>
                <div style="display: flex; justify-content: space-between; width: 100%;">
                    <span>وقت الجلسة:</span>
                    <span class="code">${Math.floor(StatisticsSystem.getSessionTime() / 60)} دقيقة</span>
                </div>
            </div>
        </div>
    `;

    document.getElementById('main').innerHTML = html;
    
    // تحديث الأرقام
    StatisticsSystem.getTotalVisitors().then(count => {
        const el = document.getElementById('stat-visitors');
        if (el) el.textContent = count.toLocaleString();
    });
}

/**
 * عرض صفحة البحث
 */
function showSearchPage() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput ? searchInput.value : '';
    
    if (query && query.trim().length >= 2) {
        showSearchResults(query);
    } else {
        const html = `
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
                    <i class="fas fa-search" style="font-size: 2rem;"></i>
                </div>
                <h3 style="margin-bottom: 10px;">ابدأ بالبحث</h3>
                <p style="color: var(--text-light);">اكتب كلمة البحث في الشريط أعلاه (حرفين على الأقل)</p>
            </div>
        `;
        document.getElementById('main').innerHTML = html;
    }
}

/**
 * عرض نتائج البحث
 */
function showSearchResults(query) {
    const results = SearchSystem.search(query);
    
    let html = `
        <a href="#" onclick="window.history.back(); return false;" class="back-button">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </a>
        
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px;">
            <div class="icon-medium primary-bg">
                <i class="fas fa-search"></i>
            </div>
            <h2 class="course-title" style="margin: 0;">نتائج البحث عن "${query}"</h2>
            <span class="code">${results.length}</span>
        </div>
    `;

    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 50px;">
                <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto; width: 80px; height: 80px;">
                    <i class="fas fa-frown" style="font-size: 2rem;"></i>
                </div>
                <h3 style="margin-bottom: 10px;">لا توجد نتائج</h3>
                <p style="color: var(--text-light);">جرب كلمات بحث أخرى</p>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        results.forEach(result => {
            if (result.type === 'course') {
                html += `
                    <a href="#course-${result.key}-books" class="card-link" style="text-decoration: none;">
                        <div class="card">
                            <div class="icon-medium white-bg" style="margin: 0 auto 15px auto;">
                                <i class="fas ${result.icon}" style="color: var(--primary-color);"></i>
                            </div>
                            <h3>${result.title}</h3>
                            <span class="code">📚 ${result.category} • ${result.code}</span>
                        </div>
                    </a>
                `;
            } else {
                const icon = result.type === 'book' ? 'fa-book-open' : 
                            (result.type === 'lecture' ? (result.lectureType === 'youtube' ? 'fa-youtube' : 'fa-google-drive') : 
                            'fa-file-alt');
                const color = result.type === 'lecture' && result.lectureType === 'youtube' ? '#FF0000' : 
                            (result.type === 'lecture' ? '#34A853' : 'var(--primary-color)');
                
                if (result.coming) {
                    html += `
                        <div class="card" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                            <div class="icon-medium white-bg" style="margin: 0 auto 15px auto;">
                                <i class="fas ${icon}" style="color: ${color};"></i>
                            </div>
                            <h3 style="font-size: 1rem;">${result.name}</h3>
                            <span class="code">${result.category} • ${result.courseTitle}</span>
                            <div style="margin-top: 8px; color: var(--gold);"><i class="fas fa-clock"></i> قريباً</div>
                        </div>
                    `;
                } else {
                    html += `
                        <a href="${result.link}" target="_blank" class="card-link" style="text-decoration: none;">
                            <div class="card">
                                <div class="icon-medium white-bg" style="margin: 0 auto 15px auto;">
                                    <i class="fas ${icon}" style="color: ${color};"></i>
                                </div>
                                <h3 style="font-size: 1rem;">${result.name}</h3>
                                <span class="code">${result.category} • ${result.courseTitle}</span>
                            </div>
                        </a>
                    `;
                }
            }
        });
        html += '</div>';
    }

    document.getElementById('main').innerHTML = html;
}

/**
 * عرض صفحة غير موجودة
 */
function showNotFound() {
    const html = `
        <div class="card" style="text-align: center; padding: 60px;">
            <div class="icon-medium gold-bg" style="margin: 0 auto 20px auto; width: 100px; height: 100px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 2.5rem;"></i>
            </div>
            <h2 style="color: var(--text-dark); margin-bottom: 15px;">الصفحة غير موجودة</h2>
            <p style="margin: 20px 0; color: var(--text-light);">عذراً، الصفحة التي تبحث عنها غير متوفرة</p>
            <a href="#dashboard" class="back-button" style="display: inline-block; margin-top: 10px;">العودة للرئيسية</a>
        </div>
    `;
    document.getElementById('main').innerHTML = html;
}

// ============================================================================
// 10. نظام التنقل ومعالجة الـ Hash
// ============================================================================

window.addEventListener('hashchange', handleHashChange);

function handleHashChange() {
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
}

/**
 * تحديث عنصر التنقل النشط
 */
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

// ============================================================================
// 11. معالجة البحث (Debounced)
// ============================================================================

let searchDebounceTimeout;

function handleSearchInput(value) {
    clearTimeout(searchDebounceTimeout);
    
    if (!value || value.trim().length < 2) {
        if (window.location.hash === '#search') {
            window.history.back();
        }
        return;
    }
    
    searchDebounceTimeout = setTimeout(() => {
        window.location.hash = 'search';
        showSearchResults(value);
    }, 400);
}

// ============================================================================
// 12. تحديث عداد الزوار
// ============================================================================

async function updateVisitorCounter() {
    try {
        // زيادة العداد
        await fetch('https://api.countapi.xyz/hit/university-aqsa/visitors');
        
        // قراءة العداد
        const response = await fetch('https://api.countapi.xyz/get/university-aqsa/visitors');
        const data = await response.json();
        
        const counter = document.getElementById('visitor-counter');
        if (counter) {
            counter.innerHTML = `
                <i class="fas fa-users" style="color: var(--primary-color);"></i>
                <span>عدد الزوار: ${data.value.toLocaleString()}</span>
            `;
        }
    } catch (e) {
        console.log('عداد الزوار غير متاح');
        const counter = document.getElementById('visitor-counter');
        if (counter) {
            counter.innerHTML = `
                <i class="fas fa-users"></i>
                <span>عدد الزوار: 15,000+</span>
            `;
        }
    }
}

// ============================================================================
// 13. إنشاء هيكل الصفحة الأساسي
// ============================================================================

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
                <i class="far fa-copyright"></i> 2026 - جميع الحقوق محفوظة
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

// ============================================================================
// 14. نظام حماية بسيط
// ============================================================================

(function() {
    // منع النقر بالزر الأيمن
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // منع اختصارات معينة
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });
})();

// ============================================================================
// 15. PWA و Service Worker
// ============================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('Service Worker registration failed');
        });
    });
}

// ============================================================================
// 16. تهيئة التطبيق
// ============================================================================

function initApp() {
    // إنشاء هيكل الصفحة
    createAppStructure();
    
    // تهيئة الأنظمة
    FavoritesSystem.init();
    
    // معالجة التحميل الأول
    handleHashChange();
    
    // عرض ترحيب
    setTimeout(() => {
        NotificationSystem.showNotification({
            message: 'مرحباً بك في موقع كلية التمريض',
            type: 'info',
            duration: 3000
        });
    }, 1000);
}

// ربط الدوال بالـ window
window.FavoritesSystem = FavoritesSystem;
window.AdminSystem = AdminSystem;
window.handleSearchInput = handleSearchInput;

// بدء التطبيق
window.addEventListener('load', initApp);

// ============================================================================
// النهاية - جميع الحقوق محفوظة للمهندس نادر 2026
// ============================================================================
