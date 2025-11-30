// script.js (หน้า index)
(function(){
  const btn = document.getElementById('go');
  const pwdInput = document.getElementById('pwd');

  // เปลี่ยน "love123" เป็นรหัสที่คุณต้องการแล้วเข้ารหัส base64 (ตัวอย่างด้านล่าง)
  const ENCODED_PASSWORD = "14022025"; // base64 ของ "love123"

  function base64Decode(s){
    try { return atob(s); } catch(e){ return ""; }
  }

  btn.addEventListener('click', ()=>{
    const val = pwdInput.value || "";
    if(val === base64Decode(ENCODED_PASSWORD)){
      // customize message ผ่าน query param ?msg=...
      // เปลี่ยนข้อความหลัง = เป็นข้อความที่คุณอยากให้แสดง (encodeURIComponent)
      const message = encodeURIComponent("I love you ❤️"); 
      window.location.href = love.html?msg=${message};
    } else {
      alert('รหัสไม่ถูกต้อง ลองใหม่อีกครั้ง 😘');
      pwdInput.value = "";
      pwdInput.focus();
    }
  });

  pwdInput.addEventListener('keydown', e=>{
    if(e.key === 'Enter') btn.click();
  });
})();