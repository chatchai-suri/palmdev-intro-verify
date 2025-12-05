// main.js

// *************************************************************
// ข้อมูลสำหรับ Business Verification (ต้องตรงกับเอกสารจริง)
// *************************************************************
const businessData = {
    // 💡 **สำคัญมาก:** แก้ไข [ที่อยู่ติดต่อที่ถูกต้อง] ให้ตรงกับเอกสาร
    address: "เลขที่ 151/134 ม.7, สุรศักดิ์, ศรีราชา, ชลบุรี, 20110",
    email: "chsuriyawan@gmail.com",
    phone: "+66 81-687-2909"
};

/**
 * ฟังก์ชันสำหรับแสดงข้อมูลธุรกิจในหน้าเว็บ
 */
function updateBusinessDetails() {
    const addressElement = document.getElementById('address');
    const emailElement = document.getElementById('email-contact');
    const phoneElement = document.getElementById('phone-contact');

    if (addressElement) {
        addressElement.textContent = businessData.address;
    }
    if (emailElement) {
        emailElement.textContent = businessData.email;
    }
    if (phoneElement) {
        phoneElement.textContent = businessData.phone;
    }

    console.log("Business details updated for verification.");
}

// เรียกใช้ฟังก์ชันเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', updateBusinessDetails);

// *************************************************************
// โค้ดนี้สามารถใช้เป็นจุดเริ่มต้นสำหรับการเชื่อมต่อ IoT ในอนาคต
// *************************************************************
/*
function connectIoT() {
    console.log("TODO: เชื่อมต่อ Web Socket/MQTT เพื่อรับข้อมูล Sensor");
}
*/