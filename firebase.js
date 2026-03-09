// =============================
// Firebase Imports
// =============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import {
getDatabase,
ref,
set,
onValue
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

import {
getAuth,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";


// =============================
// Firebase Config
// =============================

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


// =============================
// Initialize Firebase
// =============================

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

const auth = getAuth(app)


// =============================
// تحميل المساقات بشكل مباشر
// =============================

window.loadCoursesFromFirebase = function(){

const coursesRef = ref(db,"courses")

onValue(coursesRef,(snapshot)=>{

if(snapshot.exists()){

window.firebaseCourses = snapshot.val()

// تحديث الموقع
if(window.refreshCourses){

window.refreshCourses()

}

}

})

}


// =============================
// حفظ المساقات
// =============================

window.saveCoursesToFirebase = async function(courses){

try{

await set(ref(db,"courses"),courses)

console.log("Courses updated")

}catch(error){

console.log("Firebase error",error)

}

}


// =============================
// تسجيل دخول المشرف
// =============================

window.adminLogin = async function(email,password){

try{

await signInWithEmailAndPassword(auth,email,password)

alert("تم تسجيل الدخول بنجاح")

localStorage.setItem("admin_token","authenticated")

}catch(error){

alert("فشل تسجيل الدخول")

console.log(error)

}

}


// =============================
// تسجيل خروج المشرف
// =============================

window.adminLogout = function(){

signOut(auth)

localStorage.removeItem("admin_token")

}


// =============================
// التحقق من حالة تسجيل الدخول
// =============================

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Admin logged in")

window.isAdmin = true

}else{

console.log("Admin logged out")

window.isAdmin = false

}

})
