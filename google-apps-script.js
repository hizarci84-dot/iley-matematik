/**
 * =========================================================================
 * İLEY 6. SINIF MATEMATİK - GOOGLE APPS SCRIPT BULUT VE BİLDİRİM MOTORU (v3.0)
 * =========================================================================
 * 
 * BU KOD NELER YAPAR?
 * 1. 📧 Günlük Test & Ödev Karnesi:
 *    İley her ödev veya test tamamladığında;
 *    - Öğretmen: hizarci84@gmail.com
 *    - Veliler: alperuygur33@gmail.com, melon55@gmail.com
 *    adreslerinin hepsine ANINDA detaylı, renkli ve şık bir karne maili gönderir.
 * 
 * 2. 🏆 Haftalık Gelişim & Deneme Raporu (Her Pazar Saat 21:00):
 *    Google sunucularında çalışan otomatik zamanlayıcı sayesinde her Pazar akşamı
 *    saat 21:00'de o haftanın tüm soru sayılarını, doğru/yanlış/net istatistiklerini,
 *    tamamlanan görevleri ve Pazar Jumbo Deneme sonucunu özetleyen kapsamlı bir
 *    haftalık gelişim karnesi öğretmene ve velilere otomatik olarak iletilir.
 * 
 * 3. 📸 Yapılamayan Sorular (Google Drive Arşivi):
 *    İley'in çözemediği soruları Google Drive'da "İley 6. Sınıf Matematik - Yapılamayan Sorular"
 *    klasörüne yüksek kalitede arşivler ve linkini öğretmen ile velilere bildirir.
 * 
 * 4. ☁️ Bulut Senkronizasyonu:
 *    Öğrencinin tüm çalışma ilerlemesini ve takvimini Google Drive'da güvenle yedekler.
 * 
 * -------------------------------------------------------------------------
 * NASIL KURULUR? (3 ADIMDA)
 * 1. https://script.google.com adresine gidip projenizi açın (veya "Yeni Proje").
 * 2. Bu dosyadaki TÜM kodu kopyalayıp editöre yapıştırın ve Kaydet'e (Ctrl+S) basın.
 * 3. Sağ üstteki "Dağıt" (Deploy) -> "Yeni Dağıtım" (New Deployment):
 *    - Tür: Web Uygulaması (Web App)
 *    - Yürüten: Kendim (Me)
 *    - Erişim İzni: Herkes (Anyone)
 *    - "Dağıt"a basın. Çıkan Web App URL'sini web uygulamasındaki "Ayarlar" sekmesine yapıştırın!
 * 4. Pazar 21:00 Zamanlayıcısı için: Editörün üstündeki açılır menüden
 *    "HAFTALIK_RAPOR_TETIKLEYICISI_KUR" fonksiyonunu seçip "Çalıştır"a basın (veya web arayüzünden tek tıkla kurun).
 * =========================================================================
 */

// Varsayılan Sistem Yapılandırması
var CONFIG = {
  DRIVE_QUESTIONS_FOLDER_NAME: "İley 6. Sınıf Matematik - Yapılamayan Sorular",
  DRIVE_BACKUP_FOLDER_NAME: "İley 6. Sınıf Matematik - Bulut Yedekleri",
  DEFAULT_TEACHER_EMAIL: "hizarci84@gmail.com",
  DEFAULT_PARENT_EMAILS: "alperuygur33@gmail.com, melon55@gmail.com",
  STUDENT_NAME: "İley",
  WEEKLY_REPORT_HOUR: 21 // Her Pazar akşamı 21:00 (Türkiye saati)
};

// =========================================================================
// 🔑 TEK TIKLA İZİN VERME VE ZAMANLAYICI KURULUM FONKSİYONLARI
// =========================================================================

/**
 * 1. Tüm İzinleri Doğrular, Drive Klasörlerini Açar ve Pazar 21:00 Zamanlayıcısını Kurar.
 * Google Apps Script editöründe bu fonksiyonu seçip "Çalıştır" (Run) butonuna basınız.
 */
function YETKILENDIRME_VE_TEST() {
  Logger.log("1/4 - Google Drive klasörleri kontrol ediliyor...");
  var folderQuestions = getOrCreateFolder(CONFIG.DRIVE_QUESTIONS_FOLDER_NAME);
  var folderBackups = getOrCreateFolder(CONFIG.DRIVE_BACKUP_FOLDER_NAME);
  Logger.log("✅ Drive klasörleri hazır: " + folderQuestions.getName() + " & " + folderBackups.getName());

  Logger.log("2/4 - E-posta servisi test ediliyor...");
  var recipients = getAllRecipientEmails({});
  Logger.log("✅ Bildirim gidecek e-posta listesi (" + recipients.length + " alıcı): " + recipients.join(", "));

  Logger.log("3/4 - Pazar 21:00 Haftalık Rapor Tetikleyicisi kuruluyor...");
  var triggerRes = setupWeeklyReportTrigger();
  Logger.log("✅ Zaman tetikleyicisi: " + triggerRes.message);

  Logger.log("4/4 - Test e-postası gönderiliyor...");
  try {
    MailApp.sendEmail({
      to: recipients.join(", "),
      subject: "🧪 İley 6. Sınıf Matematik - Sistem Doğrulama ve İzin Onayı",
      htmlBody: "<div style='font-family:Arial,sans-serif;padding:16px;background:#f8fafc;border-radius:12px;'>" +
        "<h3 style='color:#2563eb;margin:0 0 8px 0;'>✅ Sistem Başarıyla Yetkilendirildi!</h3>" +
        "<p style='font-size:14px;color:#334155;'>Bu e-posta; öğretmen ve veli bildirim motorunun eksiksiz çalıştığını doğrulamak amacıyla gönderilmiştir.</p>" +
        "<p style='font-size:12px;color:#64748b;'>Alıcılar: " + recipients.join(", ") + "<br>Haftalık Rapor Zamanı: Her Pazar Saat 21:00</p>" +
        "</div>"
    });
    Logger.log("✅ Test e-postası tüm adreslere başarıyla ulaştı!");
  } catch (mErr) {
    Logger.log("⚠️ E-posta gönderim notu: " + mErr);
  }

  Logger.log("🎉 TEBRİKLER! Kurulum tamamlandı. Sağ üstten Dağıt -> Dağıtımları Yönet -> Kalem -> Yeni Sürüm -> Dağıt yapınız.");
  return "Tüm izinler ve Pazar 21:00 zamanlayıcısı başarıyla onaylandı!";
}

/**
 * 2. Her Pazar Saat 21:00'de çalışan zamanlayıcıyı kurar (Eski tetikleyicileri temizler).
 */
function HAFTALIK_RAPOR_TETIKLEYICISI_KUR() {
  return setupWeeklyReportTrigger();
}

/**
 * 3. Pazar 21:00'i beklemeden haftalık rapor e-postasını ŞİMDİ test etmek için çalıştırabilirsiniz.
 */
function HAFTALIK_RAPOR_TEST_ET() {
  return weeklyReportJob({ isTest: true });
}

/**
 * 4. Örnek bir günlük test karnesini ŞİMDİ tüm alıcılara test olarak göndermek için çalıştırabilirsiniz.
 */
function GUNLUK_KARNE_TEST_ET() {
  var mockData = {
    taskTitle: "Parkur Matematik - Sayılar ve Nicelikler Değerlendirme Testi",
    book: "Parkur Matematik",
    questionCount: 14,
    correct: 13,
    wrong: 1,
    empty: 0,
    net: 12.67,
    scorePct: 93
  };
  return handleSendTestReportEmail(mockData);
}

// =========================================================================
// GET & POST YÖNLENDİRİCİSİ (ROUTER)
// =========================================================================

function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || "";
  
  if (action === "ping") {
    return createJsonResponse({ 
      status: "ok", 
      message: "İley 6. Sınıf Matematik Bulut & Bildirim Motoru Aktif!",
      serverTime: new Date().toISOString(),
      recipients: getAllRecipientEmails({})
    });
  }
  
  if (action === "loadProgress" || action === "getProgress") {
    return handleLoadProgress();
  }

  if (action === "testWeeklyReport" || action === "triggerWeeklyReport") {
    var repRes = weeklyReportJob({ isTest: true });
    return createJsonResponse(repRes);
  }

  if (action === "setupWeeklyTrigger") {
    var trigRes = setupWeeklyReportTrigger();
    return createJsonResponse(trigRes);
  }
  
  return createJsonResponse({ 
    status: "ok", 
    message: "İley 6. Sınıf Matematik API Hazır (E-Posta & Pazar 21:00 Raporlama Entegreli)" 
  });
}

function doPost(e) {
  try {
    var contents = (e && e.postData && e.postData.contents) ? e.postData.contents : "{}";
    var data = JSON.parse(contents);
    var action = data.action;
    
    // 1. Günlük Test / Etkinlik Karne E-Postası Gönder (Öğretmen + Veliler)
    if (action === "sendTestReportEmail" || action === "sendTestEmail") {
      return handleSendTestReportEmail(data);
    }

    // 2. Haftalık Gelişim Raporunu Anında Tetikle (Test veya manuel gönderme)
    if (action === "triggerWeeklyReportNow" || action === "sendWeeklyReportNow") {
      var wResult = weeklyReportJob(data);
      return createJsonResponse(wResult);
    }

    // 3. Pazar Saat 21:00 Zaman Tetikleyicisini Kur
    if (action === "setupWeeklyReportTrigger" || action === "setupWeeklyTrigger") {
      var tRes = setupWeeklyReportTrigger();
      return createJsonResponse(tRes);
    }
    
    // 4. Soru Fotoğrafı Yükleme (Google Drive & E-Posta)
    if (action === "uploadQuestion") {
      return handleUploadQuestion(data);
    }
    
    // 5. Bulut İlerleme Senkronizasyonu (progress.json)
    if (action === "saveProgress") {
      return handleSaveProgress(data);
    }
    if (action === "loadProgress" || action === "getProgress") {
      return handleLoadProgress();
    }

    // 6. Çalışma Takvimini Buluta Kaydetme (schedule.json)
    if (action === "saveSchedule" || action === "syncSchedule") {
      return handleSaveSchedule(data);
    }

    // 7. E-Posta / Sistem Ayarlarını Kaydetme
    if (action === "saveSettings" || action === "saveCloudSettings") {
      return handleSaveSettings(data);
    }
    
    return createJsonResponse({ status: "error", message: "Bilinmeyen eylem: " + action });
  } catch (err) {
    Logger.log("doPost Hata: " + err);
    return createJsonResponse({ status: "error", message: err.toString() });
  }
}

// =========================================================================
// 1. GÜNLÜK TEST & ÖDEV KARNE E-POSTASI (ÖĞRETMEN + VELİLER)
// =========================================================================

function handleSendTestReportEmail(data) {
  var recipients = getAllRecipientEmails(data);
  if (!recipients || recipients.length === 0) {
    return createJsonResponse({ status: "error", message: "Alıcı e-posta adresi bulunamadı." });
  }

  var now = new Date();
  var dateStr = Utilities.formatDate(now, "Europe/Istanbul", "dd.MM.yyyy HH:mm");
  var bookName = data.book || data.bookName || "Matematik";
  var titleName = data.taskTitle || data.testTitle || "Matematik Testi";
  var qCount = data.questionCount || data.totalQuestions || 14;
  
  var isScore = (data.correct > 0 || data.wrong > 0 || data.empty > 0 || (data.net !== undefined && data.net > 0));
  var scorePct = data.scorePct || (qCount > 0 && isScore ? Math.round(((data.correct || 0) / qCount) * 100) : 100);
  
  var subject = isScore 
    ? ("📊 İley Günlük Matematik Karnesi: " + titleName + " (Net: " + (data.net || "0") + ")")
    : ("🌟 İley Günlük Matematik Ödevi Tamamlandı: " + titleName);

  var htmlBody = buildDailyReportHtml(data, dateStr, isScore, scorePct, recipients);

  var emailSuccess = false;
  var emailError = "";

  try {
    MailApp.sendEmail({
      to: recipients.join(", "),
      subject: subject,
      htmlBody: htmlBody
    });
    emailSuccess = true;
    Logger.log("Günlük karne gönderildi: " + recipients.join(", "));
  } catch (mailErr) {
    Logger.log("Mail gönderim hatası: " + mailErr);
    emailError = mailErr.toString();
  }

  // Eğer öğrenci verisi (progress) de gelmişse Drive'a otomatik kaydet
  if (data.progressData) {
    handleSaveProgress({ progressData: data.progressData });
  }

  return createJsonResponse({ 
    status: emailSuccess ? "success" : "error", 
    message: emailSuccess 
      ? ("Karne başarıyla gönderildi (" + recipients.length + " alıcı: " + recipients.join(", ") + ")")
      : ("E-posta gönderilemedi: " + emailError),
    emailSent: emailSuccess,
    recipients: recipients
  });
}

function buildDailyReportHtml(data, dateStr, isScore, scorePct, recipients) {
  var bookName = data.book || data.bookName || "Matematik";
  var titleName = data.taskTitle || data.testTitle || "Ödev Görevi";
  var qCount = data.questionCount || data.totalQuestions || 14;
  var badgeColor = scorePct >= 80 ? "#10b981" : (scorePct >= 60 ? "#3b82f6" : "#f59e0b");
  var badgeText = scorePct >= 80 ? "🌟 Harika Başarı!" : (scorePct >= 60 ? "👏 Çok Başarılı!" : "👍 İyi Çalışma!");

  var statsSection = "";
  if (isScore) {
    var correct = data.correct || 0;
    var wrong = data.wrong || 0;
    var empty = data.empty || 0;
    var net = (data.net !== undefined) ? data.net : (correct - (wrong / 4)).toFixed(2);

    statsSection = "" +
      "<table style='width:100%; border-collapse:collapse; text-align:center; margin-bottom:20px; font-family:Arial,sans-serif;'>" +
        "<tr>" +
          "<td style='padding:12px; background:#f1f5f9; border-radius:10px 0 0 10px; border:1px solid #e2e8f0;'><span style='font-size:11px; color:#64748b; display:block; font-weight:bold;'>TOPLAM SORU</span><strong style='font-size:20px; color:#0f172a;'>" + qCount + "</strong></td>" +
          "<td style='padding:12px; background:#ecfdf5; border-top:1px solid #a7f3d0; border-bottom:1px solid #a7f3d0;'><span style='font-size:11px; color:#047857; display:block; font-weight:bold;'>DOĞRU</span><strong style='font-size:20px; color:#059669;'>" + correct + "</strong></td>" +
          "<td style='padding:12px; background:#fff1f2; border-top:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'><span style='font-size:11px; color:#be123c; display:block; font-weight:bold;'>YANLIŞ</span><strong style='font-size:20px; color:#e11d48;'>" + wrong + "</strong></td>" +
          "<td style='padding:12px; background:#f8fafc; border-top:1px solid #e2e8f0; border-bottom:1px solid #e2e8f0;'><span style='font-size:11px; color:#64748b; display:block; font-weight:bold;'>BOŞ</span><strong style='font-size:20px; color:#475569;'>" + empty + "</strong></td>" +
          "<td style='padding:12px; background:#eff6ff; border-radius:0 10px 10px 0; border:1px solid #bfdbfe;'><span style='font-size:11px; color:#1d4ed8; display:block; font-weight:bold;'>NET</span><strong style='font-size:22px; color:#2563eb;'>" + net + "</strong></td>" +
        "</tr>" +
      "</table>" +
      "<div style='text-align:center; padding:14px; background:" + badgeColor + "; color:white; border-radius:12px; font-weight:bold; font-size:15px; margin-bottom:20px; box-shadow:0 2px 4px rgba(0,0,0,0.08);'>" +
        "Başarı Oranı: %" + scorePct + " — " + badgeText +
      "</div>";
  } else {
    statsSection = "" +
      "<div style='text-align:center; padding:20px; background:#ecfdf5; border:1px solid #a7f3d0; border-radius:14px; margin-bottom:20px;'>" +
        "<span style='font-size:32px; display:block; margin-bottom:6px;'>🎉</span>" +
        "<strong style='font-size:17px; color:#065f46;'>Etkinlik / Çalışma Başarıyla Tamamlandı!</strong>" +
        "<p style='margin:6px 0 0 0; font-size:13px; color:#047857;'>İley bugünkü çalışma programındaki bu ödevi başarıyla tamamladı.</p>" +
      "</div>";
  }

  var html = "" +
    "<div style='font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif; max-width:620px; margin:auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:18px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05);'>" +
      "<div style='background:linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding:24px 20px; text-align:center; color:white;'>" +
        "<div style='display:inline-block; background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.2); padding:4px 12px; border-radius:20px; font-size:11px; font-weight:bold; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:8px;'>6. Sınıf Matematik Çalışma Programı</div>" +
        "<h2 style='margin:0; font-size:22px; font-weight:800; color:#f8fafc;'>🌟 Günlük Ödev Tamamlama Bildirimi</h2>" +
        "<p style='margin:6px 0 0 0; font-size:13px; color:#94a3b8;'>Öğrenci: <strong style='color:#ffffff;'>İley</strong> | Tarih: " + dateStr + "</p>" +
      "</div>" +
      "<div style='padding:24px 20px;'>" +
        "<div style='background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #2563eb; border-radius:12px; padding:16px; margin-bottom:20px;'>" +
          "<span style='font-size:11px; color:#64748b; font-weight:bold; text-transform:uppercase; display:block;'>Tamamlanan Görev / Kaynak:</span>" +
          "<h3 style='margin:4px 0 2px 0; font-size:16px; color:#0f172a;'>" + bookName + "</h3>" +
          "<p style='margin:0; font-size:14px; color:#3b82f6; font-weight:bold;'>" + titleName + "</p>" +
        "</div>" +
        statsSection +
        "<div style='background:#f1f5f9; border-radius:12px; padding:12px 16px; font-size:12px; color:#475569;'>" +
          "<strong>📬 Bilgilendirilen Adresler:</strong><br>" +
          recipients.map(function(r) { return "• " + r; }).join("<br>") +
        "</div>" +
      "</div>" +
      "<div style='background:#f8fafc; border-top:1px solid #e2e8f0; padding:14px; text-align:center; font-size:11px; color:#94a3b8;'>" +
        "İley 6. Sınıf Matematik Çalışma Programı • Otomatik Öğretmen & Veli Bilgilendirme Sistemi" +
      "</div>" +
    "</div>";

  return html;
}

// =========================================================================
// 2. HAFTALIK GELİŞİM RAPORU MOTORU (HER PAZAR SAAT 21:00)
// =========================================================================

/**
 * Pazar saat 21:00'de çalışan veya web panelinden tetiklenen haftalık rapor motoru
 */
function weeklyReportJob(overrideData) {
  Logger.log("weeklyReportJob çalıştırılıyor: " + new Date());
  
  var recipients = getAllRecipientEmails(overrideData);
  if (!recipients || recipients.length === 0) {
    return { status: "error", message: "Haftalık rapor için alıcı adresi bulunamadı." };
  }

  var now = new Date();
  var todayStr = Utilities.formatDate(now, "Europe/Istanbul", "yyyy-MM-dd");

  // Drive'dan verileri oku
  var progressData = getProgressFromDrive();
  var scheduleData = getScheduleFromDrive();

  // Hafta aralığını hesapla (Pazartesi - Pazar)
  var weekInfo = calculateCurrentWeekBounds(now);

  // Haftalık istatistikleri çıkar
  var weeklyStats = calculateWeeklyStatistics(weekInfo, progressData, scheduleData);

  // Şık HTML raporunu oluştur
  var subject = "🏆 İley Haftalık Matematik Gelişim Raporu (" + weekInfo.displayRange + ")";
  if (overrideData && overrideData.isTest) {
    subject = "🧪 [TEST] " + subject;
  }

  var htmlBody = buildWeeklyProgressReportHtml(weeklyStats, weekInfo, recipients);

  var success = false;
  var errText = "";
  try {
    MailApp.sendEmail({
      to: recipients.join(", "),
      subject: subject,
      htmlBody: htmlBody
    });
    success = true;
    Logger.log("Haftalık rapor başarıyla gönderildi: " + recipients.join(", "));
  } catch (mErr) {
    Logger.log("Haftalık rapor e-posta hatası: " + mErr);
    errText = mErr.toString();
  }

  return {
    status: success ? "success" : "error",
    message: success 
      ? ("Haftalık rapor başarıyla gönderildi (" + recipients.length + " alıcı: " + recipients.join(", ") + ")")
      : ("Haftalık rapor gönderilemedi: " + errText),
    recipients: recipients,
    weekRange: weekInfo.displayRange,
    stats: weeklyStats
  };
}

/**
 * Tarih aralığını belirler (Bu haftanın Pazartesi gününden Pazar gününe kadar)
 */
function calculateCurrentWeekBounds(targetDate) {
  var d = new Date(targetDate.getTime());
  var dayOfWeek = d.getDay(); // 0 = Pazar, 1 = Pazartesi, ...
  
  // Pazartesi'yi bul
  var diffToMonday = (dayOfWeek === 0) ? -6 : (1 - dayOfWeek);
  var monday = new Date(d.getTime() + diffToMonday * 86400000);
  
  // Pazar'ı bul
  var sunday = new Date(monday.getTime() + 6 * 86400000);

  var monStr = Utilities.formatDate(monday, "Europe/Istanbul", "yyyy-MM-dd");
  var sunStr = Utilities.formatDate(sunday, "Europe/Istanbul", "yyyy-MM-dd");
  var monDisplay = Utilities.formatDate(monday, "Europe/Istanbul", "dd MMMM yyyy");
  var sunDisplay = Utilities.formatDate(sunday, "Europe/Istanbul", "dd MMMM yyyy");

  return {
    mondayDate: monday,
    sundayDate: sunday,
    startDateStr: monStr,
    endDateStr: sunStr,
    displayRange: Utilities.formatDate(monday, "Europe/Istanbul", "dd.MM") + " - " + Utilities.formatDate(sunday, "Europe/Istanbul", "dd.MM.yyyy")
  };
}

/**
 * Haftalık ve genel çalışma istatistiklerini hesaplar
 */
function calculateWeeklyStatistics(weekInfo, progress, schedule) {
  var stats = {
    totalWeeklyTasks: 0,
    completedWeeklyTasks: 0,
    weeklyQuestions: 0,
    weeklyCorrect: 0,
    weeklyWrong: 0,
    weeklyEmpty: 0,
    weeklyNet: 0,
    denemeResult: null,
    taskDetails: [],
    overallCompletedCount: 0,
    overallTotalCount: 0,
    totalXP: 0,
    levelName: "Sayı Kaşifi"
  };

  var completedMap = (progress && progress.completedTasks) || {};
  var testResultsMap = (progress && progress.testResults) || {};
  stats.totalXP = (progress && progress.xp) || 0;

  // Schedule üzerinden haftanın görevlerini tespit et
  var allDays = [];
  if (schedule) {
    if (Array.isArray(schedule)) {
      allDays = schedule;
    } else if (typeof schedule === "object") {
      for (var key in schedule) {
        allDays.push(schedule[key]);
      }
    }
  }

  // Görevleri tarihe göre tara
  for (var i = 0; i < allDays.length; i++) {
    var dayObj = allDays[i];
    var dStr = dayObj.date;
    var isThisWeek = (dStr >= weekInfo.startDateStr && dStr <= weekInfo.endDateStr);
    var tasks = dayObj.tasks || [];

    for (var t = 0; t < tasks.length; t++) {
      var task = tasks[t];
      stats.overallTotalCount++;
      var isCompleted = !!completedMap[task.id];
      if (isCompleted) stats.overallCompletedCount++;

      if (isThisWeek) {
        stats.totalWeeklyTasks++;
        if (isCompleted) {
          stats.completedWeeklyTasks++;
        }

        var tRes = testResultsMap[task.id];
        var itemDetail = {
          title: task.title || task.name || "Matematik Görevi",
          book: task.book || "Matematik",
          date: dStr,
          completed: isCompleted,
          result: tRes || null
        };
        stats.taskDetails.push(itemDetail);

        if (tRes) {
          var cor = Number(tRes.correct || 0);
          var wrg = Number(tRes.wrong || 0);
          var emp = Number(tRes.empty || 0);
          var qTotal = Number(tRes.questionCount || (cor + wrg + emp));
          var net = Number(tRes.net || (cor - (wrg / 4)));

          stats.weeklyQuestions += qTotal;
          stats.weeklyCorrect += cor;
          stats.weeklyWrong += wrg;
          stats.weeklyEmpty += emp;
          stats.weeklyNet += net;

          if (task.type === "deneme" || (task.book && task.book.toLowerCase().indexOf("jumbo") > -1)) {
            stats.denemeResult = {
              title: task.title,
              correct: cor,
              wrong: wrg,
              empty: emp,
              net: net.toFixed(2),
              scorePct: tRes.scorePct || Math.round((cor / (qTotal || 1)) * 100)
            };
          }
        }
      }
    }
  }

  // XP'ye göre seviye adı
  if (stats.totalXP >= 4000) stats.levelName = "Matematik Dahisi 👑";
  else if (stats.totalXP >= 2500) stats.levelName = "Deneme Şampiyonu 🏆";
  else if (stats.totalXP >= 1500) stats.levelName = "Geometri Mimarı 📐";
  else if (stats.totalXP >= 800) stats.levelName = "Problem Avcısı 🎯";
  else stats.levelName = "Sayı Kaşifi ⭐";

  stats.weeklyNet = Number(stats.weeklyNet.toFixed(2));
  return stats;
}

/**
 * Şık, grafiksel ve kapsamlı Haftalık Rapor HTML Şablonu
 */
function buildWeeklyProgressReportHtml(stats, weekInfo, recipients) {
  var completionPct = (stats.totalWeeklyTasks > 0) 
    ? Math.round((stats.completedWeeklyTasks / stats.totalWeeklyTasks) * 100) 
    : 0;

  var netSuccessPct = (stats.weeklyQuestions > 0)
    ? Math.round((stats.weeklyCorrect / stats.weeklyQuestions) * 100)
    : 0;

  var denemeCard = "";
  if (stats.denemeResult) {
    denemeCard = "" +
      "<div style='background:linear-gradient(135deg, #fef3c7, #fde68a); border:2px solid #f59e0b; border-radius:14px; padding:16px; margin-bottom:20px;'>" +
        "<div style='display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;'>" +
          "<strong style='font-size:15px; color:#92400e;'>🏆 Pazar Jumbo Deneme Sınavı Sonucu:</strong>" +
          "<span style='background:#f59e0b; color:white; font-size:11px; font-weight:bold; padding:3px 8px; border-radius:12px;'>Bu Hafta Çözüldü</span>" +
        "</div>" +
        "<h4 style='margin:0 0 10px 0; font-size:16px; color:#78350f;'>" + stats.denemeResult.title + "</h4>" +
        "<table style='width:100%; border-collapse:collapse; text-align:center; background:white; border-radius:10px; overflow:hidden;'>" +
          "<tr>" +
            "<td style='padding:10px; font-size:12px; color:#047857;'>DOĞRU<br><strong style='font-size:18px; color:#059669;'>" + stats.denemeResult.correct + "</strong></td>" +
            "<td style='padding:10px; font-size:12px; color:#be123c;'>YANLIŞ<br><strong style='font-size:18px; color:#e11d48;'>" + stats.denemeResult.wrong + "</strong></td>" +
            "<td style='padding:10px; font-size:12px; color:#64748b;'>BOŞ<br><strong style='font-size:18px; color:#475569;'>" + stats.denemeResult.empty + "</strong></td>" +
            "<td style='padding:10px; font-size:12px; color:#1d4ed8; background:#eff6ff;'>NET<br><strong style='font-size:20px; color:#2563eb;'>" + stats.denemeResult.net + "</strong></td>" +
          "</tr>" +
        "</table>" +
      "</div>";
  } else {
    denemeCard = "" +
      "<div style='background:#f8fafc; border:1px solid #e2e8f0; border-radius:14px; padding:14px; margin-bottom:20px; text-align:center;'>" +
        "<span style='font-size:13px; color:#64748b;'>📅 Bu hafta takvimde bir Jumbo Deneme sınavı bulunmuyor veya dinlenme haftası. İlk deneme <strong>1 Kasım 2026 Pazar</strong> günü başlayacaktır.</span>" +
      "</div>";
  }

  // Görev listesi tablosu
  var taskRowsHtml = "";
  if (stats.taskDetails && stats.taskDetails.length > 0) {
    for (var i = 0; i < stats.taskDetails.length; i++) {
      var item = stats.taskDetails[i];
      var checkIcon = item.completed 
        ? "<span style='color:#059669; font-weight:bold;'>✅ Tamamlandı</span>"
        : "<span style='color:#dc2626; font-weight:bold;'>⏳ Bekliyor</span>";
      
      var netText = "-";
      if (item.result) {
        netText = (item.result.net !== undefined ? item.result.net : (item.result.correct || 0)) + " Net (" + (item.result.correct || 0) + "D/" + (item.result.wrong || 0) + "Y)";
      }

      taskRowsHtml += "" +
        "<tr style='border-bottom:1px solid #f1f5f9;'>" +
          "<td style='padding:10px 8px; font-size:12px; color:#64748b;'>" + item.date + "</td>" +
          "<td style='padding:10px 8px; font-size:13px; font-weight:bold; color:#1e293b;'>" + item.title + "<br><span style='font-size:11px; color:#64748b; font-weight:normal;'>" + item.book + "</span></td>" +
          "<td style='padding:10px 8px; font-size:12px; text-align:center;'>" + checkIcon + "</td>" +
          "<td style='padding:10px 8px; font-size:12px; text-align:center; color:#2563eb; font-weight:bold;'>" + netText + "</td>" +
        "</tr>";
    }
  } else {
    taskRowsHtml = "<tr><td colspan='4' style='padding:16px; text-align:center; color:#94a3b8; font-size:13px;'>Bu hafta için kayıtlı görev listesi bulunamadı.</td></tr>";
  }

  var html = "" +
    "<div style='font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif; max-width:680px; margin:auto; background:#ffffff; border:1px solid #cbd5e1; border-radius:20px; overflow:hidden; box-shadow:0 6px 18px rgba(0,0,0,0.06);'>" +
      
      // Header
      "<div style='background:linear-gradient(135deg, #1e3a8a 0%, #1e293b 100%); padding:28px 24px; text-align:center; color:white;'>" +
        "<div style='display:inline-block; background:rgba(255,255,255,0.15); border:1px solid rgba(255,255,255,0.25); padding:5px 14px; border-radius:20px; font-size:11px; font-weight:bold; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:10px;'>6. Sınıf Matematik • Haftalık Analiz</div>" +
        "<h1 style='margin:0; font-size:24px; font-weight:800; color:#ffffff;'>🏆 İley Haftalık Gelişim Raporu</h1>" +
        "<p style='margin:8px 0 0 0; font-size:14px; color:#93c5fd;'>Hafta Aralığı: <strong>" + weekInfo.displayRange + "</strong> (Her Pazar 21:00 Raporu)</p>" +
      "</div>" +

      "<div style='padding:24px;'>" +

        // 4 KPI Kutusu (Grid)
        "<table style='width:100%; border-collapse:separate; border-spacing:10px; margin-bottom:20px;'>" +
          "<tr>" +
            "<td style='width:50%; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:14px; padding:16px; text-align:center;'>" +
              "<span style='font-size:11px; color:#15803d; font-weight:bold; display:block; text-transform:uppercase;'>Haftalık Görev Tamamlama</span>" +
              "<strong style='font-size:26px; color:#166534; display:block; margin:4px 0;'>" + stats.completedWeeklyTasks + " / " + stats.totalWeeklyTasks + "</strong>" +
              "<span style='font-size:12px; color:#16a34a; font-weight:bold;'>%" + completionPct + " Tamamlandı</span>" +
            "</td>" +
            "<td style='width:50%; background:#eff6ff; border:1px solid #bfdbfe; border-radius:14px; padding:16px; text-align:center;'>" +
              "<span style='font-size:11px; color:#1d4ed8; font-weight:bold; display:block; text-transform:uppercase;'>Haftalık Çözülen Soru</span>" +
              "<strong style='font-size:26px; color:#1e40af; display:block; margin:4px 0;'>" + stats.weeklyQuestions + " Soru</strong>" +
              "<span style='font-size:12px; color:#2563eb; font-weight:bold;'>" + stats.weeklyNet + " Toplam Net</span>" +
            "</td>" +
          "</tr>" +
          "<tr>" +
            "<td style='width:50%; background:#fefce8; border:1px solid #fef08a; border-radius:14px; padding:16px; text-align:center;'>" +
              "<span style='font-size:11px; color:#a16207; font-weight:bold; display:block; text-transform:uppercase;'>İley'in Seviyesi & XP</span>" +
              "<strong style='font-size:18px; color:#854d0e; display:block; margin:4px 0;'>" + stats.levelName + "</strong>" +
              "<span style='font-size:12px; color:#ca8a04; font-weight:bold;'>" + stats.totalXP + " Toplam XP</span>" +
            "</td>" +
            "<td style='width:50%; background:#faf5ff; border:1px solid #e9d5ff; border-radius:14px; padding:16px; text-align:center;'>" +
              "<span style='font-size:11px; color:#7e22ce; font-weight:bold; display:block; text-transform:uppercase;'>Soru Doğruluk Oranı</span>" +
              "<strong style='font-size:26px; color:#6b21a8; display:block; margin:4px 0;'>%" + netSuccessPct + "</strong>" +
              "<span style='font-size:12px; color:#9333ea; font-weight:bold;'>" + stats.weeklyCorrect + " Doğru / " + stats.weeklyWrong + " Yanlış</span>" +
            "</td>" +
          "</tr>" +
        "</table>" +

        // Deneme Kartı
        denemeCard +

        // Hafta Boyunca Yapılan Çalışmaların Çizelgesi
        "<div style='margin-bottom:24px;'>" +
          "<h3 style='margin:0 0 12px 0; font-size:16px; color:#0f172a; display:flex; align-items:center; gap:6px;'>" +
            "<span>📋 Bu Haftanın Günlük Çalışma Dökümü</span>" +
          "</h3>" +
          "<div style='border:1px solid #e2e8f0; border-radius:14px; overflow:hidden;'>" +
            "<table style='width:100%; border-collapse:collapse; text-align:left; font-family:Arial,sans-serif;'>" +
              "<thead>" +
                "<tr style='background:#f8fafc; border-bottom:1px solid #e2e8f0; font-size:11px; color:#64748b; text-transform:uppercase;'>" +
                  "<th style='padding:10px 8px;'>Tarih</th>" +
                  "<th style='padding:10px 8px;'>Ödev / Kitap</th>" +
                  "<th style='padding:10px 8px; text-align:center;'>Durum</th>" +
                  "<th style='padding:10px 8px; text-align:center;'>Net</th>" +
                "</tr>" +
              "</thead>" +
              "<tbody>" +
                taskRowsHtml +
              "</tbody>" +
              "</table>" +
            "</div>" +
        "</div>" +

        // Öğretmen & Veli Notu & Tavsiye
        "<div style='background:#f1f5f9; border-radius:14px; padding:16px; margin-bottom:20px; font-size:13px; color:#334155; line-height:1.5;'>" +
          "<strong style='color:#0f172a; display:block; margin-bottom:4px;'>💡 Yeni Hafta İçin Çalışma Tavsiyesi:</strong>" +
          "İley'in bu hafta çözdüğü sorularda takıldığı veya yanlış yaptığı soruları web uygulamasındaki <em>'Yapamadığım Sorular'</em> bölümünden tekrar incelemesi ve öğretmenine sorması eksik kazanımları kapatacaktır. Harika bir hafta dileriz! 🚀" +
        "</div>" +

        // Alıcılar Bilgi Kutusu
        "<div style='border:1px dashed #cbd5e1; border-radius:12px; padding:12px 16px; font-size:12px; color:#64748b; background:#f8fafc;'>" +
          "<strong>📬 Raporun İletildiği E-Posta Adresleri:</strong><br>" +
          recipients.map(function(r) { return "• " + r; }).join("<br>") +
        "</div>" +

      "</div>" +

      // Footer
      "<div style='background:#f8fafc; border-top:1px solid #e2e8f0; padding:16px; text-align:center; font-size:11px; color:#94a3b8;'>" +
        "İley 6. Sınıf Matematik Çalışma & Deneme Programı • Her Pazar Saat 21:00 Otomatik Raporlama Servisi" +
      "</div>" +

    "</div>";

  return html;
}

/**
 * Pazar saat 21:00 Google Apps Script tetikleyicisini kurar
 */
function setupWeeklyReportTrigger() {
  try {
    // Eski tüm zaman tetikleyicilerini temizle (günlük ve haftalık)
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      var fn = triggers[i].getHandlerFunction();
      if (fn === "weeklyReportJob" || fn === "sendWeeklyReport" || fn === "dailyHomeworkReminderJob" || fn === "sendDailyHomeworkReminder") {
        ScriptApp.deleteTrigger(triggers[i]);
      }
    }

    // Her Pazar akşamı saat 21:00'de çalışan zamanlayıcı
    ScriptApp.newTrigger("weeklyReportJob")
      .timeBased()
      .onWeekDay(ScriptApp.WeekDay.SUNDAY)
      .atHour(CONFIG.WEEKLY_REPORT_HOUR || 21)
      .nearMinute(0)
      .inTimezone("Europe/Istanbul")
      .create();

    Logger.log("Pazar saat 21:00 Haftalık Rapor Tetikleyicisi başarıyla kuruldu.");
    return {
      status: "success",
      message: "Haftalık gelişim raporu zamanlayıcısı kuruldu! Her Pazar saat 21:00'de öğretmen ve velilere otomatik karne gidecektir."
    };
  } catch (err) {
    Logger.log("setupWeeklyReportTrigger yetki/hata: " + err);
    return {
      status: "auth_required",
      message: "Google güvenlik kuralı: Zamanlayıcı izni için script.google.com editöründe yukarıdan 'HAFTALIK_RAPOR_TETIKLEYICISI_KUR' fonksiyonunu seçip 'Çalıştır' (Run) butonuna basarak izin veriniz."
    };
  }
}

// =========================================================================
// 3. YAPILAMAYAN SORUYU GOOGLE DRIVE'A YÜKLE VE ÖĞRETMENE BİLDİR
// =========================================================================

function handleUploadQuestion(data) {
  var folder = getOrCreateFolder(CONFIG.DRIVE_QUESTIONS_FOLDER_NAME);
  
  var base64Data = data.imageBase64 || data.base64Data;
  if (!base64Data) {
    return createJsonResponse({ status: "error", message: "Görsel verisi bulunamadı." });
  }
  
  var cleanBase64 = base64Data.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, "");
  var decoded = Utilities.base64Decode(cleanBase64);
  
  var now = new Date();
  var dateStr = Utilities.formatDate(now, "Europe/Istanbul", "yyyy-MM-dd_HH-mm");
  var bookName = data.book || data.bookName || "Matematik";
  var testName = data.testTitle || data.title || "Test";
  var fileName = "Soru_" + dateStr + "_" + sanitizeFileName(bookName) + ".jpg";
  
  var blob = Utilities.newBlob(decoded, "image/jpeg", fileName);
  var file = folder.createFile(blob);
  
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  var fileUrl = file.getUrl();
  
  var studentNote = data.studentNote || data.note || "Not girilmedi.";
  var qDetail = data.questionNo || testName;
  var desc = "Öğrenci: İley\n" +
             "Tarih: " + dateStr + "\n" +
             "Kitap: " + bookName + "\n" +
             "Test: " + testName + "\n" +
             "Soru No / Detay: " + qDetail + "\n" +
             "Öğrenci Notu: " + studentNote;
  file.setDescription(desc);
  
  // Öğretmene ve velilere bildir
  var recipients = getAllRecipientEmails(data);
  if (recipients && recipients.length > 0) {
    try {
      var subject = "❓ İley Yeni Bir Yapamadığı Soru Yükledi! (" + bookName + ")";
      var htmlBody = "" +
        "<div style='font-family:Arial,sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #e2e8f0; border-radius:16px; background-color:#ffffff;'>" +
          "<div style='background:linear-gradient(135deg, #2563eb, #1d4ed8); padding:18px; border-radius:12px; text-align:center; color:white;'>" +
            "<h2 style='margin:0; font-size:20px;'>📸 İley Yapamadığı Soruyu Sordu</h2>" +
            "<p style='margin:5px 0 0 0; font-size:13px; opacity:0.9;'>6. Sınıf Matematik Çalışma Programı</p>" +
          "</div>" +
          "<div style='padding:20px 0;'>" +
            "<table style='width:100%; border-collapse:collapse; font-size:14px;'>" +
              "<tr><td style='padding:8px 0; color:#64748b; font-weight:bold;'>📚 Kitap:</td><td style='padding:8px 0; font-weight:bold; color:#1e293b;'>" + bookName + "</td></tr>" +
              "<tr><td style='padding:8px 0; color:#64748b; font-weight:bold;'>📝 Konu / Test:</td><td style='padding:8px 0; color:#1e293b;'>" + testName + "</td></tr>" +
              "<tr><td style='padding:8px 0; color:#64748b; font-weight:bold;'>🔢 Soru / Detay:</td><td style='padding:8px 0; color:#1e293b;'>" + qDetail + "</td></tr>" +
              "<tr><td style='padding:8px 0; color:#64748b; font-weight:bold;'>💬 İley'in Notu:</td><td style='padding:8px 0; color:#2563eb; font-weight:bold;'>" + studentNote + "</td></tr>" +
            "</table>" +
            "<div style='margin-top:20px; text-align:center;'>" +
              "<a href='" + fileUrl + "' target='_blank' style='display:inline-block; background-color:#2563eb; color:#ffffff; font-weight:bold; text-decoration:none; padding:12px 24px; border-radius:10px; font-size:14px;'>🖼️ Soruyu Google Drive'da İncele</a>" +
            "</div>" +
          "</div>" +
          "<div style='border-top:1px solid #e2e8f0; padding-top:12px; text-align:center; font-size:11px; color:#94a3b8;'>" +
            "Soru fotoğrafı Google Drive klasörünüze otomatik olarak arşivlenmiştir." +
          "</div>" +
        "</div>";
      
      MailApp.sendEmail({
        to: recipients.join(", "),
        subject: subject,
        htmlBody: htmlBody
      });
    } catch (mailErr) {
      Logger.log("Soru mail gönderim hatası: " + mailErr);
    }
  }

  return createJsonResponse({
    status: "success",
    message: "Soru Google Drive'a başarıyla yüklendi ve e-posta ile bildirildi!",
    fileUrl: fileUrl,
    fileId: file.getId()
  });
}

// =========================================================================
// 4. BULUT SENKRONİZASYONU (DRIVE)
// =========================================================================

function handleSaveProgress(data) {
  var folder = getOrCreateFolder(CONFIG.DRIVE_BACKUP_FOLDER_NAME);
  var files = folder.getFilesByName("progress.json");
  var file;
  
  var content = JSON.stringify(data.progressData || {}, null, 2);
  
  if (files.hasNext()) {
    file = files.next();
    file.setContent(content);
  } else {
    file = folder.createFile("progress.json", content, "application/json");
  }
  
  return createJsonResponse({ 
    status: "success", 
    message: "İlerleme verisi Google Drive'a başarıyla yedeklendi.", 
    lastSync: new Date().toISOString() 
  });
}

function handleLoadProgress() {
  var folder = getOrCreateFolder(CONFIG.DRIVE_BACKUP_FOLDER_NAME);
  var files = folder.getFilesByName("progress.json");
  
  if (!files.hasNext()) {
    return createJsonResponse({ status: "empty", message: "Henüz bulutta kayıtlı ilerleme verisi yok." });
  }
  
  var file = files.next();
  var content = file.getBlob().getDataAsString();
  var parsed = JSON.parse(content);
  
  return createJsonResponse({ 
    status: "success", 
    progressData: parsed, 
    lastSync: file.getLastUpdated().toISOString() 
  });
}

function handleSaveSchedule(data) {
  var folder = getOrCreateFolder(CONFIG.DRIVE_BACKUP_FOLDER_NAME);
  var files = folder.getFilesByName("schedule.json");
  var file;
  
  var content = JSON.stringify(data.schedule || {}, null, 2);
  
  if (files.hasNext()) {
    file = files.next();
    file.setContent(content);
  } else {
    file = folder.createFile("schedule.json", content, "application/json");
  }
  
  return createJsonResponse({
    status: "success",
    message: "Çalışma takvimi Google Drive'a kaydedildi.",
    fileId: file.getId()
  });
}

function getProgressFromDrive() {
  try {
    var folder = getOrCreateFolder(CONFIG.DRIVE_BACKUP_FOLDER_NAME);
    var files = folder.getFilesByName("progress.json");
    if (files.hasNext()) {
      var content = files.next().getBlob().getDataAsString();
      return JSON.parse(content);
    }
  } catch (e) {
    Logger.log("progress.json okuma hatası: " + e);
  }
  return null;
}

function getScheduleFromDrive() {
  try {
    var folder = getOrCreateFolder(CONFIG.DRIVE_BACKUP_FOLDER_NAME);
    var files = folder.getFilesByName("schedule.json");
    if (files.hasNext()) {
      var content = files.next().getBlob().getDataAsString();
      return JSON.parse(content);
    }
  } catch (e) {
    Logger.log("schedule.json okuma hatası: " + e);
  }
  return null;
}

// =========================================================================
// 5. AYARLAR VE YARDIMCI FONKSİYONLAR
// =========================================================================

function getStoredConfig() {
  var props = PropertiesService.getScriptProperties().getProperties();
  return {
    teacherEmail: props.TEACHER_EMAIL || CONFIG.DEFAULT_TEACHER_EMAIL,
    parentEmails: props.PARENT_EMAILS || CONFIG.DEFAULT_PARENT_EMAILS
  };
}

function updateStoredConfig(newConf) {
  var props = PropertiesService.getScriptProperties();
  if (newConf.teacherEmail) props.setProperty("TEACHER_EMAIL", String(newConf.teacherEmail).trim());
  if (newConf.parentEmails) props.setProperty("PARENT_EMAILS", String(newConf.parentEmails).trim());
}

function handleSaveSettings(data) {
  updateStoredConfig({
    teacherEmail: data.teacherEmail,
    parentEmails: data.parentEmails
  });
  return createJsonResponse({
    status: "success",
    message: "E-posta ayarları Google Apps Script üzerinde güncellendi.",
    recipients: getAllRecipientEmails(data)
  });
}

/**
 * Hem öğretmen hem de veli e-posta adreslerini temiz bir liste olarak döndürür
 */
function getAllRecipientEmails(overrideData) {
  var conf = getStoredConfig();
  var tEmail = (overrideData && overrideData.teacherEmail) || conf.teacherEmail || CONFIG.DEFAULT_TEACHER_EMAIL;
  var pEmails = (overrideData && (overrideData.parentEmails || overrideData.parentsEmail)) || conf.parentEmails || CONFIG.DEFAULT_PARENT_EMAILS;
  
  var list = [];
  
  if (tEmail) {
    var tParts = String(tEmail).split(",");
    for (var i = 0; i < tParts.length; i++) {
      var em1 = tParts[i].trim();
      if (em1 && list.indexOf(em1) === -1) list.push(em1);
    }
  }

  if (pEmails) {
    var pParts = String(pEmails).split(",");
    for (var j = 0; j < pParts.length; j++) {
      var em2 = pParts[j].trim();
      if (em2 && list.indexOf(em2) === -1) list.push(em2);
    }
  }

  return list;
}

function getOrCreateFolder(folderName) {
  var folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(folderName);
}

function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9_\-\u00C0-\u017F]/g, "_").slice(0, 30);
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
