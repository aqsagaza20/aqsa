// =============================
// Firebase Imports
// =============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import {
getDatabase,
ref,
set,
onValue,
remove,
push,
update
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


// جعل الدوال متاحة لباقي الموقع

window.db = db



// =============================
// تحميل المساقات (مع الدمج)
// =============================

window.loadCoursesFromFirebase = function(){

const coursesRef = ref(db,"courses")

onValue(coursesRef,(snapshot)=>{

let firebaseData = {}

if(snapshot.exists()){

firebaseData = snapshot.val()

}

// دمج Firebase مع المساقات الافتراضية
window.firebaseCourses = {
...defaultCourses,
...firebaseData
}

if(window.refreshCourses){

window.refreshCourses()

}

})

}



// =============================
// إضافة مساق
// =============================

window.addCourseToFirebase = async function(courseKey,courseData){

try{

await set(ref(db,"courses/"+courseKey),courseData)

console.log("Course added")

}catch(e){

console.log("Error adding course",e)

}

}



// =============================
// حذف مساق
// =============================

window.deleteCourseFromFirebase = async function(courseKey){

try{

await remove(ref(db,"courses/"+courseKey))

console.log("Course deleted")

}catch(e){

console.log("Error deleting course",e)

}

}



// =============================
// تعديل مساق
// =============================

window.updateCourseInFirebase = async function(courseKey,data){

try{

await update(ref(db,"courses/"+courseKey),data)

console.log("Course updated")

}catch(e){

console.log("Update error",e)

}

}



// =============================
// إضافة كتاب لمساق
// =============================

window.addBookToCourse = async function(courseKey,book){

try{

await push(ref(db,"courses/"+courseKey+"/books"),book)

console.log("Book added")

}catch(e){

console.log("Book error",e)

}

}



// =============================
// حذف كتاب
// =============================

window.deleteBookFromCourse = async function(courseKey,bookId){

try{

await remove(ref(db,"courses/"+courseKey+"/books/"+bookId))

console.log("Book deleted")

}catch(e){

console.log("Delete book error",e)

}

}



// =============================
// تسجيل دخول المشرف
// =============================

window.adminLogin = async function(email,password){

try{

await signInWithEmailAndPassword(auth,email,password)

localStorage.setItem("admin_token","authenticated")

alert("تم تسجيل الدخول بنجاح")

}catch(e){

alert("فشل تسجيل الدخول")

console.log(e)

}

}



// =============================
// تسجيل خروج المشرف
// =============================

window.adminLogout = function(){

signOut(auth)

localStorage.removeItem("admin_token")

alert("تم تسجيل الخروج")

}



// =============================
// مراقبة حالة تسجيل الدخول
// =============================

onAuthStateChanged(auth,(user)=>{

if(user){

window.isAdmin = true
console.log("Admin logged in")

}else{

window.isAdmin = false
console.log("Admin logged out")

}

})



// =============================
// تشغيل تحميل المساقات
// =============================

window.loadCoursesFromFirebase()
