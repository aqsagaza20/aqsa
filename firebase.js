// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { 
  getDatabase, 
  ref, 
  set, 
  get, 
  onValue, 
  remove, 
  update 
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";


// إعدادات مشروعك
const firebaseConfig = {
  apiKey: "AIzaSyD70tZ67zeIARlOzOfP4zALbPjfmef31E8",
  authDomain: "nader-c1691.firebaseapp.com",
  databaseURL: "https://nader-c1691-default-rtdb.firebaseio.com",
  projectId: "nader-c1691",
  storageBucket: "nader-c1691.firebasestorage.app",
  messagingSenderId: "455340592959",
  appId: "1:455340592959:web:796eb55b96d0f4b0690d8a",
  measurementId: "G-0NVHHTN17D"
};


// تشغيل Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


// =======================================================
// تحميل المساقات من Firebase
// =======================================================

function loadCoursesFromFirebase() {

    const coursesRef = ref(db, "courses");

    onValue(coursesRef, (snapshot) => {

        const data = snapshot.val();

        if (data) {
            console.log("تم تحميل المساقات من Firebase");

            window.courses = data;

            if (typeof SearchSystem !== "undefined") {
                SearchSystem.buildCache();
            }

            if (typeof handleHashChange !== "undefined") {
                handleHashChange();
            }
        }

    });

}


// =======================================================
// حفظ المساقات إلى Firebase
// =======================================================

function saveCoursesToFirebase(courses) {

    const coursesRef = ref(db, "courses");

    set(coursesRef, courses);

}


// =======================================================
// حذف مساق
// =======================================================

function deleteCourseFromFirebase(courseKey){

    const courseRef = ref(db, "courses/" + courseKey);

    remove(courseRef);

}


// =======================================================
// إضافة مساق
// =======================================================

function addCourseToFirebase(courseKey, courseData){

    const courseRef = ref(db, "courses/" + courseKey);

    set(courseRef, courseData);

}


// =======================================================
// تحديث مساق
// =======================================================

function updateCourseInFirebase(courseKey, data){

    const courseRef = ref(db, "courses/" + courseKey);

    update(courseRef, data);

}


// =======================================================
// تصدير الدوال
// =======================================================

window.firebaseDB = db;

window.loadCoursesFromFirebase = loadCoursesFromFirebase;
window.saveCoursesToFirebase = saveCoursesToFirebase;
window.deleteCourseFromFirebase = deleteCourseFromFirebase;
window.addCourseToFirebase = addCourseToFirebase;
window.updateCourseInFirebase = updateCourseInFirebase;


// تحميل البيانات تلقائياً
loadCoursesFromFirebase();
