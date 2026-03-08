// استيراد مكتبات Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

// إعدادات مشروع Firebase الخاص بك
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

// الاتصال بقاعدة البيانات
const db = getDatabase(app);

// قراءة المساقات من Firebase
const coursesRef = ref(db, "courses");

onValue(coursesRef, (snapshot) => {
    const courses = snapshot.val();

    console.log("Courses loaded from Firebase:", courses);

    // جعل البيانات متاحة لباقي الموقع
    window.firebaseCourses = courses;
});
