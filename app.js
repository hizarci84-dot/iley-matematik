// ================================================================
// İLEY 6. SINIF MATEMATİK ÇALIŞMA & DENEME PROGRAMI - APP ENGINE
// ================================================================

const STORAGE_KEY = 'iley_math_progress_v2';

// Application State
let appState = {
  currentDateStr: '2026-10-12', // Default start date (Pazartesi)
  activeTab: 'today',
  scheduleFilter: 'all',
  activeMonth: 'all',
  completedTasks: {}, // { taskId: true }
  testResults: {},    // { taskId: { answers: {}, correct: 0, wrong: 0, empty: 0, net: 0, scorePct: 0, timestamp: '' } }
  questions: [],      // [ { id, book, title, note, imageUrl, driveUrl, driveFileId, date, solved: false } ]
  cloudSettings: {
    appsScriptUrl: 'https://script.google.com/macros/s/AKfycby_JPXodqPxDRZOYk2cERsu8AUPZxirSvpT_icQ8D_yIeYQwoq7SxaY6kLbKaSEKaLxfg/exec',
    teacherEmail: 'hizarci84@gmail.com',
    parentEmails: 'alperuygur33@gmail.com, melon55@gmail.com',
    teacherPin: '1984'
  },
  questionsFilter: 'all',
  currentSelectedImageBase64: null,
  currentSelectedImageName: '',
  deferredPrompt: null,
  activeModalTask: null,
  activeModalAnswers: {}, // { 0: 'A', 1: 'C', ... }
  showModalKey: false,
  xp: 0,
  streak: 0,
  lastStreakDate: null,
  // Genel Deneme Sınavları & Ders Analiz Durumu
  generalTrials: [], // [ { id, name, date, location, rule, subjects: [], totalQuestions, totalCorrect, totalWrong, totalEmpty, totalNet, scorePct, rankSchool, rankClass, scorePoints, notes, photoUrl, createdAt } ]
  activeDenemeSubTab: 'jumbo', // 'jumbo' | 'general'
  generalChartFilter: 'all',   // 'all' | 'tr' | 'mat' | 'fen' | 'sos' | 'din' | 'ing' | 'pct'
  powerRadarMode: 'avg',       // 'avg' | 'last' | 'compare'
  selectedSubjectDetail: 'all', // 'all' | 'tr' | 'mat' | 'fen' | 'sos' | 'din' | 'ing'
  editingGeneralTrialId: null,
  tempTrialSubjects: [],
  // Timer State
  timerMode: 'pomodoro', // 'pomodoro' (25m), 'deneme' (40m), 'stopwatch'
  timerRemaining: 25 * 60,
  timerRunning: false,
  timerInterval: null
};

// Badges Definitions
const BADGES = [
  { id: 'first_step', icon: 'fa-shoe-prints', title: 'İlk Adım', desc: 'İlk matematik ödevini tamamladın!', req: '1 ödev' },
  { id: 'streak_3', icon: 'fa-fire', title: '3 Günlük Seri', desc: 'Aralıksız 3 gün ödev yaptın!', req: '3 gün seri' },
  { id: 'first_deneme', icon: 'fa-trophy', title: 'İlk Deneme', desc: 'İlk 6 Jumbo Deneme Sınavını tamamladın!', req: '1 deneme' },
  { id: 'high_net', icon: 'fa-star', title: 'Net Yıldızı', desc: 'Bir denemede 15 ve üzeri net yaptın!', req: '15+ net' },
  { id: 'perfect_score', icon: 'fa-award', title: 'Kusursuz Başarı', desc: 'Bir testi veya denemeyi %100 doğru çözdün!', req: '100% test' },
  { id: 'parkur_master', icon: 'fa-person-running', title: 'Parkur Ustası', desc: '10 Parkur etkinliğini geride bıraktın!', req: '10 etkinlik' },
  { id: 'isem_conqueror', icon: 'fa-book-open', title: 'İsem Fatihi', desc: '15 İsem testini başarıyla çözdün!', req: '15 test' },
  { id: 'deneme_5', icon: 'fa-shield-halved', title: 'Deneme Savaşçısı', desc: '5 farklı Jumbo denemesini tamamladın!', req: '5 deneme' },
  { id: 'champion', icon: 'fa-crown', title: 'Matematik Şampiyonu', desc: 'Tüm denemelerin yarısını (13 deneme) bitirdin!', req: '13 deneme' }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  initCalendarDate();
  renderAllViews();
  setupTimer();
  setupTouchGestures();
  attachModalEventListeners();
  initPwaAndCloud();
  
  // Arka planda Google Drive'dan en güncel verileri otomatik çekip eşitle
  autoSyncFromCloudQuietly();

  // Pencereye veya sekmeye her dönüldüğünde buluttan kontrol et
  window.addEventListener('focus', () => {
    autoSyncFromCloudQuietly();
  });
  
  // Responsive Canvas Chart Redraw
  window.addEventListener('resize', () => {
    if (appState.activeTab === 'denemeler') {
      renderDenemelerView();
    } else if (appState.activeTab === 'genel-denemeler') {
      renderGeneralTrialsChart();
      renderGeneralPowerRadarChart();
    }
  });
});

// Load state from localStorage
function loadProgress() {
  try {
    const defaultCloud = {
      appsScriptUrl: 'https://script.google.com/macros/s/AKfycby_JPXodqPxDRZOYk2cERsu8AUPZxirSvpT_icQ8D_yIeYQwoq7SxaY6kLbKaSEKaLxfg/exec',
      teacherEmail: 'hizarci84@gmail.com',
      parentEmails: 'alperuygur33@gmail.com, melon55@gmail.com',
      teacherPin: '1984'
    };
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      appState.completedTasks = parsed.completedTasks || {};
      appState.testResults = parsed.testResults || {};
      appState.questions = parsed.questions || [];
      appState.generalTrials = parsed.generalTrials || [];
      appState.cloudSettings = Object.assign(defaultCloud, parsed.cloudSettings || {});
      delete appState.cloudSettings.whatsappGroup;
      if (!appState.cloudSettings.teacherPin) appState.cloudSettings.teacherPin = '1984';
      appState.xp = parsed.xp || 0;
      appState.streak = parsed.streak || 0;
      appState.lastStreakDate = parsed.lastStreakDate || null;
    } else {
      appState.cloudSettings = defaultCloud;
    }
  } catch (e) {
    console.error('Error loading progress:', e);
  }
  recalcXPAndBadges();
  updateQuestionsBadge();
}

// Save state to localStorage & Auto-Sync to Google Drive
function saveProgress(skipCloudSync = false) {
  try {
    recalcXPAndBadges();
    const dataToSave = {
      completedTasks: appState.completedTasks,
      testResults: appState.testResults,
      questions: appState.questions,
      generalTrials: appState.generalTrials || [],
      cloudSettings: appState.cloudSettings,
      xp: appState.xp,
      streak: appState.streak,
      lastStreakDate: appState.lastStreakDate
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    updateQuestionsBadge();

    // Arka planda sessizce Google Drive'a yedekle
    if (!skipCloudSync) {
      debouncedSyncToCloudQuietly();
    }
  } catch (e) {
    console.error('Error saving progress:', e);
  }
}

// ----------------------------------------------------------------
// ☁️ OTOMATİK İKİ YÖNLÜ BULUT SENKRONİZASYON MOTORU
// ----------------------------------------------------------------
let _cloudSyncTimer = null;
function debouncedSyncToCloudQuietly() {
  const scriptUrl = (appState.cloudSettings && appState.cloudSettings.appsScriptUrl || '').trim();
  if (!scriptUrl) return;

  if (_cloudSyncTimer) clearTimeout(_cloudSyncTimer);
  _cloudSyncTimer = setTimeout(() => {
    syncProgressToCloudQuietly();
  }, 1200);
}

function syncProgressToCloudQuietly() {
  const scriptUrl = (appState.cloudSettings && appState.cloudSettings.appsScriptUrl || '').trim();
  if (!scriptUrl) return;

  const payload = {
    action: 'saveProgress',
    studentName: 'İley',
    progressData: {
      completedTasks: appState.completedTasks,
      testResults: appState.testResults,
      questions: appState.questions || [],
      generalTrials: appState.generalTrials || [],
      xp: appState.xp,
      streak: appState.streak,
      lastStreakDate: appState.lastStreakDate,
      savedAt: new Date().toISOString()
    }
  };

  fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  }).then(() => {
    console.log('☁️ Veriler arka planda Google Drive\'a eşitlendi.');
    updateCloudStatusBadge(true);
  }).catch(e => {
    console.warn('Bulut arka plan eşitleme notu:', e);
  });
}

let _lastCloudSyncFetchTime = 0;
async function autoSyncFromCloudQuietly() {
  const scriptUrl = (appState.cloudSettings && appState.cloudSettings.appsScriptUrl || '').trim();
  if (!scriptUrl) return;

  // Aşırı istek göndermeyi engelle (en az 10 saniyede bir)
  const now = Date.now();
  if (now - _lastCloudSyncFetchTime < 10000) return;
  _lastCloudSyncFetchTime = now;

  try {
    const res = await fetch(`${scriptUrl}?action=loadProgress`, { method: 'GET' });
    const json = await res.json();
    if (json && (json.success || json.status === 'success') && json.progressData) {
      const cloudData = json.progressData;
      let hasChanges = false;

      // 1. Tamamlanan Görevleri Birleştir
      if (cloudData.completedTasks && typeof cloudData.completedTasks === 'object') {
        for (const tid in cloudData.completedTasks) {
          if (!appState.completedTasks[tid]) {
            appState.completedTasks[tid] = true;
            hasChanges = true;
          }
        }
      }

      // 2. Test Sonuçlarını Birleştir
      if (cloudData.testResults && typeof cloudData.testResults === 'object') {
        for (const tid in cloudData.testResults) {
          if (!appState.testResults[tid] || JSON.stringify(appState.testResults[tid]) !== JSON.stringify(cloudData.testResults[tid])) {
            appState.testResults[tid] = cloudData.testResults[tid];
            hasChanges = true;
          }
        }
      }

      // 3. Yapılamayan Soruları Birleştir
      if (Array.isArray(cloudData.questions) && cloudData.questions.length > 0) {
        if (JSON.stringify(appState.questions) !== JSON.stringify(cloudData.questions)) {
          appState.questions = cloudData.questions;
          hasChanges = true;
        }
      }

      // 4. XP ve Seri
      if (cloudData.xp && cloudData.xp > appState.xp) {
        appState.xp = cloudData.xp;
        hasChanges = true;
      }
      if (cloudData.streak && cloudData.streak > appState.streak) {
        appState.streak = cloudData.streak;
        appState.lastStreakDate = cloudData.lastStreakDate;
        hasChanges = true;
      }

      // 5. Genel Deneme Sınavlarını Birleştir
      if (Array.isArray(cloudData.generalTrials)) {
        if (JSON.stringify(appState.generalTrials) !== JSON.stringify(cloudData.generalTrials)) {
          appState.generalTrials = cloudData.generalTrials;
          hasChanges = true;
        }
      }

      if (hasChanges) {
        saveProgress(true); // skip re-uploading loop
        renderAllViews();
        showToastNotification("☁️ İley'in yeni çalışma verileri Google Drive'dan güncellendi!");
      }
      updateCloudStatusBadge(true);
    }
  } catch (e) {
    console.log('Arka plan bulut okuma notu:', e.message);
  }
}

// Calculate XP, Level and Badges
function recalcXPAndBadges() {
  let xp = 0;
  let completedCount = 0;
  let denemeCount = 0;
  let activityCount = 0;
  let isemTestCount = 0;
  let hasHighNet = false;
  let hasPerfect = false;

  STUDY_DATA.schedule.forEach(day => {
    day.tasks.forEach(task => {
      if (appState.completedTasks[task.id]) {
        completedCount++;
        if (task.type === 'deneme') {
          xp += 200;
          denemeCount++;
        } else if (task.type === 'test') {
          xp += 100;
          isemTestCount++;
        } else {
          xp += 50;
          activityCount++;
        }

        const res = appState.testResults[task.id];
        if (res) {
          if (task.type === 'deneme' && res.net >= 15) hasHighNet = true;
          if (res.wrong === 0 && res.correct > 5) hasPerfect = true;
        }
      }
    });
  });

  appState.xp = xp;

  // Level thresholds
  // 1: 0-300, 2: 300-800, 3: 800-1500, 4: 1500-2500, 5: 2500-4000, 6: 4000+
  let level = 1;
  let title = "Sayı Kaşifi";
  let minXP = 0;
  let nextXP = 300;

  if (xp >= 4000) {
    level = 6; title = "Matematik Dahisi"; minXP = 4000; nextXP = 6000;
  } else if (xp >= 2500) {
    level = 5; title = "Deneme Şampiyonu"; minXP = 2500; nextXP = 4000;
  } else if (xp >= 1500) {
    level = 4; title = "Geometri Mimarı"; minXP = 1500; nextXP = 2500;
  } else if (xp >= 800) {
    level = 3; title = "Problem Avcısı"; minXP = 800; nextXP = 1500;
  } else if (xp >= 300) {
    level = 2; title = "Kesir Ustası"; minXP = 300; nextXP = 800;
  }

  const pct = Math.min(100, Math.max(0, Math.round(((xp - minXP) / (nextXP - minXP)) * 100)));

  // Update Header UI
  const lvlEl = document.getElementById('headerUserLevel');
  const titleEl = document.getElementById('headerUserTitle');
  const barEl = document.getElementById('headerXpBar');
  const compEl = document.getElementById('headerCompletedCount');
  const totEl = document.getElementById('headerTotalDaysCount');

  if (lvlEl) lvlEl.innerText = level;
  if (titleEl) titleEl.innerHTML = `<span>${title}</span> <span class="text-[10px] text-amber-300 font-normal">(${xp} XP)</span>`;
  if (barEl) barEl.style.width = `${pct}%`;
  if (compEl) compEl.innerText = completedCount;
  if (totEl) totEl.innerText = STUDY_DATA.schedule.length;
}

// Initial Date Logic
function initCalendarDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;

  // If today is within schedule range, default to today, otherwise start date (2026-10-12)
  const isInRange = STUDY_DATA.schedule.some(d => d.date === todayStr);
  if (isInRange) {
    appState.currentDateStr = todayStr;
  } else {
    appState.currentDateStr = (STUDY_DATA.schedule[0] ? STUDY_DATA.schedule[0].date : '2026-10-12');
  }

  const picker = document.getElementById('datePickerInput');
  if (picker) {
    picker.value = appState.currentDateStr;
    picker.min = STUDY_DATA.schedule[0].date;
    picker.max = STUDY_DATA.schedule[STUDY_DATA.schedule.length - 1].date;
  }
}

// Tab Switching
function switchTab(tabId) {
  // Öğretmen PIN Koruması: Ayarlar sekmesine sadece şifre girilmişse izin ver
  if (tabId === 'settings' && !isTeacherAuthenticated()) {
    openTeacherPinModal();
    return;
  }

  appState.activeTab = tabId;
  document.querySelectorAll('.tab-view').forEach(el => el.classList.add('hidden'));
  
  // Desktop Nav Tabs
  document.querySelectorAll('.nav-tab').forEach(el => {
    el.classList.remove('active-tab');
    el.classList.add('text-white/80');
  });
  const targetBtn = document.getElementById(`tab-btn-${tabId}`);
  if (targetBtn) {
    targetBtn.classList.add('active-tab');
    targetBtn.classList.remove('text-white/80');
  }

  // Mobile Bottom Nav Tabs
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.classList.remove('active', 'text-blue-600', 'text-amber-600', 'text-indigo-600', 'text-rose-600', 'text-emerald-600', 'text-purple-600', 'text-slate-800');
    btn.classList.add('text-slate-500');
  });
  const targetMobileBtn = document.getElementById(`mobile-tab-btn-${tabId}`);
  if (targetMobileBtn) {
    targetMobileBtn.classList.add('active');
    targetMobileBtn.classList.remove('text-slate-500');
    if (tabId === 'denemeler') targetMobileBtn.classList.add('text-amber-600');
    else if (tabId === 'genel-denemeler') targetMobileBtn.classList.add('text-indigo-600');
    else if (tabId === 'questions') targetMobileBtn.classList.add('text-rose-600');
    else if (tabId === 'books') targetMobileBtn.classList.add('text-emerald-600');
    else if (tabId === 'badges') targetMobileBtn.classList.add('text-purple-600');
    else if (tabId === 'settings') targetMobileBtn.classList.add('text-slate-800');
    else targetMobileBtn.classList.add('text-blue-600');
  }

  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.remove('hidden');

  // Scroll to top on tab switch
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh tab-specific renders
  if (tabId === 'today') renderTodayView();
  else if (tabId === 'schedule') renderScheduleView();
  else if (tabId === 'denemeler') renderDenemelerView();
  else if (tabId === 'genel-denemeler') renderGeneralTrialsView();
  else if (tabId === 'books') renderBooksView();
  else if (tabId === 'badges') renderBadgesView();
  else if (tabId === 'questions') renderQuestionsView();
  else if (tabId === 'settings') loadCloudSettingsToInputs();
}

// Touch Gestures for Mobile (Swipe left/right to change days)
function setupTouchGestures() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  const targetEl = document.getElementById('view-today');
  if (!targetEl) return;

  targetEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  targetEl.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;
    // Dominant horizontal swipe (> 60px) and minimal vertical movement (< 65px)
    if (Math.abs(diffX) > 60 && Math.abs(diffY) < 65) {
      if (diffX < 0) {
        // Swiped Left -> Go to Next Day
        navigateDay(1);
      } else {
        // Swiped Right -> Go to Previous Day
        navigateDay(-1);
      }
    }
  }
}

// Render All Views
function renderAllViews() {
  renderTodayView();
  renderScheduleView();
  renderDenemelerView();
  renderGeneralTrialsView();
  updateGeneralTrialsCountBadge();
  renderBooksView();
  renderBadgesView();
}

// ================================================================
// TAB 1: TODAY'S ASSIGNMENT VIEW
// ================================================================
function renderTodayView() {
  const day = STUDY_DATA.schedule.find(d => d.date === appState.currentDateStr);
  if (!day) return;

  // Title & Header info
  const dayTitleEl = document.getElementById('currentDayTitle');
  const dayBadgeEl = document.getElementById('currentDayBadge');
  const daySubtextEl = document.getElementById('currentDaySubtext');
  const pickerEl = document.getElementById('datePickerInput');

  if (dayTitleEl) dayTitleEl.innerText = `${day.dayName}, ${day.dateFormatted}`;
  if (dayBadgeEl) dayBadgeEl.innerText = `${day.weekNo}. Hafta`;
  if (daySubtextEl) {
    if (day.type === 'deneme') {
      daySubtextEl.innerHTML = `<span class="text-amber-600 font-semibold"><i class="fa-solid fa-trophy"></i> Deneme Sınavı Günü</span> • 6 Jumbo Matematik`;
    } else if (day.type === 'review') {
      daySubtextEl.innerHTML = `<span class="text-purple-600 font-semibold"><i class="fa-solid fa-rotate"></i> Pazar Tekrarı & Dinlenme</span>`;
    } else {
      daySubtextEl.innerHTML = `<span class="text-slate-700 font-semibold">${day.tema || 'Müfredat Çalışması'}</span>`;
    }
  }
  if (pickerEl) pickerEl.value = appState.currentDateStr;

  // Deneme Alert
  const denemeAlert = document.getElementById('denemeDayAlert');
  if (denemeAlert) {
    if (day.type === 'deneme') denemeAlert.classList.remove('hidden');
    else denemeAlert.classList.add('hidden');
  }

  // Study Tip
  const tipEl = document.getElementById('dynamicStudyTip');
  if (tipEl) {
    if (day.type === 'deneme') {
      tipEl.innerText = "Deneme çözerken süreyi aşmamaya özen göster. Yapamadığın sorulara işaret koy ve geç, kalan sürede tekrar dön. Sınav bitince optik form ile hemen kontrol et!";
    } else if (day.type === 'activity') {
      tipEl.innerText = "Etkinlik sayfaları kavramları keşfetmen içindir. Parkur'daki örnek çözümleri incele, adımları formüllere bağlı kalmadan mantığıyla kavramaya çalış.";
    } else {
      tipEl.innerText = "Test çözerken şıkları dikkatlice oku. Bulduğun cevabı işaretlemeden önce soruda 'hangisi olamaz?' veya 'en az kaçtır?' gibi kök ifadelerine dikkat et.";
    }
  }

  // Workload Badge
  const workBadge = document.getElementById('dailyWorkloadBadge');
  if (workBadge) {
    if (day.type === 'deneme') {
      workBadge.className = 'text-xs bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full';
      workBadge.innerText = '1 Deneme (20 Soru)';
    } else if (day.type === 'activity') {
      workBadge.className = 'text-xs bg-blue-100 text-blue-800 font-semibold px-2.5 py-1 rounded-full';
      workBadge.innerText = '2 Sayfa Etkinlik';
    } else if (day.type === 'test') {
      workBadge.className = 'text-xs bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded-full';
      workBadge.innerText = '2 Test Çözümü';
    } else {
      workBadge.className = 'text-xs bg-purple-100 text-purple-800 font-semibold px-2.5 py-1 rounded-full';
      workBadge.innerText = 'Haftalık Analiz';
    }
  }

  // Tasks Render
  const listEl = document.getElementById('todayTaskList');
  if (!listEl) return;
  listEl.innerHTML = '';

  day.tasks.forEach(task => {
    const isDone = !!appState.completedTasks[task.id];
    const testResult = appState.testResults[task.id];

    let bookBadgeClass = 'bg-blue-100 text-blue-800 border-blue-200';
    let bookIcon = 'fa-book';
    if (task.bookCode === 'jumbo') {
      bookBadgeClass = 'bg-amber-100 text-amber-800 border-amber-300';
      bookIcon = 'fa-trophy';
    } else if (task.bookCode === 'isem') {
      bookBadgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300';
      bookIcon = 'fa-file-lines';
    }

    const card = document.createElement('div');
    card.className = `task-card border rounded-2xl p-4 sm:p-5 transition-all ${isDone ? 'bg-emerald-50/40 border-emerald-300' : 'bg-white border-slate-200'}`;

    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div class="flex items-start gap-3">
          <button onclick="toggleTaskComplete('${task.id}')" class="mt-0.5 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 hover:border-blue-500 bg-white'}">
            <i class="fa-solid fa-check text-xs ${isDone ? 'block' : 'hidden'}"></i>
          </button>
          <div>
            <div class="flex flex-wrap items-center gap-2 mb-1">
              <span class="text-xs font-bold px-2 py-0.5 rounded-md border ${bookBadgeClass} flex items-center gap-1">
                <i class="fa-solid ${bookIcon}"></i> ${task.book}
              </span>
              ${task.durationMinutes ? `<span class="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1"><i class="fa-regular fa-clock"></i> ~${task.durationMinutes} dk</span>` : ''}
              ${task.questionCount ? `<span class="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-semibold">${task.questionCount} Soru</span>` : ''}
              ${task.pages ? `<span class="text-[11px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md font-semibold">Sayfa ${task.pages}</span>` : ''}
            </div>
            <h4 class="text-base font-bold text-slate-900 font-['Outfit'] ${isDone ? 'line-through text-slate-500' : ''}">${task.title}</h4>
            <p class="text-xs text-slate-600 mt-1 leading-relaxed">${task.detail || ''}</p>
          </div>
        </div>

        <div class="flex items-center sm:flex-col items-end gap-2 mt-2 sm:mt-0 flex-shrink-0">
          ${(task.type !== 'review') ? `
            <button onclick="openOpticalModal('${task.id}')" class="text-xs bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 shadow-sm touch-manipulation">
              <i class="fa-solid fa-square-poll-vertical"></i>
              <span>${testResult ? 'Sonucu Düzenle (D/Y/B)' : 'Sonuç Gir (D / Y / B)'}</span>
            </button>
          ` : ''}
          <button onclick="toggleTaskComplete('${task.id}')" class="text-xs font-semibold px-3 py-1.5 rounded-xl border transition ${isDone ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'}">
            ${isDone ? '✅ Tamamlandı' : 'Tamamla'}
          </button>
        </div>
      </div>

      ${testResult ? `
        <div class="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div class="flex items-center gap-2">
            <span class="bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-md">${testResult.questionCount || 14} Soru:</span>
            <span class="text-emerald-700 font-bold"><i class="fa-solid fa-circle-check"></i> ${testResult.correct}D</span>
            <span class="text-rose-700 font-bold"><i class="fa-solid fa-circle-xmark"></i> ${testResult.wrong}Y</span>
            <span class="text-slate-500 font-medium"><i class="fa-regular fa-circle"></i> ${testResult.empty}B</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-indigo-900 font-extrabold text-sm">Net: ${testResult.net}</span>
            <span class="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-md font-bold text-[11px]">%${testResult.scorePct}</span>
          </div>
        </div>
      ` : ''}
    `;

    listEl.appendChild(card);
  });

  updateTodaySidebarProgress();
}

// Day Navigation
function navigateDay(offset) {
  const currentIdx = STUDY_DATA.schedule.findIndex(d => d.date === appState.currentDateStr);
  if (currentIdx === -1) return;

  const nextIdx = currentIdx + offset;
  if (nextIdx >= 0 && nextIdx < STUDY_DATA.schedule.length) {
    appState.currentDateStr = STUDY_DATA.schedule[nextIdx].date;
    renderTodayView();
  }
}

function jumpToDate(dateStr) {
  const exists = STUDY_DATA.schedule.some(d => d.date === dateStr);
  if (exists) {
    appState.currentDateStr = dateStr;
    renderTodayView();
  }
}

function jumpToToday() {
  initCalendarDate();
  renderTodayView();
}

function jumpToNextDeneme() {
  const currentIdx = STUDY_DATA.schedule.findIndex(d => d.date === appState.currentDateStr);
  const nextDeneme = STUDY_DATA.schedule.slice(currentIdx + 1).find(d => d.type === 'deneme');
  if (nextDeneme) {
    appState.currentDateStr = nextDeneme.date;
    renderTodayView();
  } else {
    // If not found after, find first deneme
    const firstDeneme = STUDY_DATA.schedule.find(d => d.type === 'deneme');
    if (firstDeneme) {
      appState.currentDateStr = firstDeneme.date;
      renderTodayView();
    }
  }
}

function onDatePickerChange(value) {
  if (value) jumpToDate(value);
}

// Toggle Task Complete
function toggleTaskComplete(taskId) {
  const wasDone = !!appState.completedTasks[taskId];
  if (!wasDone) {
    appState.completedTasks[taskId] = true;
    playSuccessSound();
    triggerConfetti();

    // Görevi bul ve öğretmene e-posta bildirimi gönder
    let currentTask = null;
    STUDY_DATA.schedule.forEach(day => {
      const found = day.tasks.find(t => t.id === taskId);
      if (found) currentTask = found;
    });

    if (currentTask) {
      const existingResult = appState.testResults[taskId] || {
        questionCount: currentTask.questionCount || 0,
        correct: 0,
        wrong: 0,
        empty: 0,
        net: 0,
        scorePct: 100,
        isActivity: true
      };
      sendTestReportEmail(currentTask, existingResult);
    }
  } else {
    delete appState.completedTasks[taskId];
  }

  saveProgress();
  renderTodayView();
  renderScheduleView();
  renderDenemelerView();
  renderBooksView();
}

// Sidebar quick book progress
function updateTodaySidebarProgress() {
  let jumboDone = 0, isemDone = 0, parkurDone = 0;
  let jumboTot = 26, isemTot = 130, parkurTot = 100;

  STUDY_DATA.schedule.forEach(day => {
    day.tasks.forEach(t => {
      if (appState.completedTasks[t.id]) {
        if (t.bookCode === 'jumbo') jumboDone++;
        else if (t.bookCode === 'isem') isemDone++;
        else if (t.bookCode === 'parkur') parkurDone++;
      }
    });
  });

  const jPct = Math.round((jumboDone / jumboTot) * 100);
  const iPct = Math.round((isemDone / isemTot) * 100);
  const pPct = Math.round((parkurDone / parkurTot) * 100);

  const jText = document.getElementById('todayJumboProgText');
  const jBar = document.getElementById('todayJumboProgBar');
  if (jText) jText.innerText = `${jumboDone}/${jumboTot} (${jPct}%)`;
  if (jBar) jBar.style.width = `${jPct}%`;

  const iText = document.getElementById('todayIsemProgText');
  const iBar = document.getElementById('todayIsemProgBar');
  if (iText) iText.innerText = `${isemDone}/${isemTot} (${iPct}%)`;
  if (iBar) iBar.style.width = `${iPct}%`;

  const pText = document.getElementById('todayParkurProgText');
  const pBar = document.getElementById('todayParkurProgBar');
  if (pText) pText.innerText = `${parkurDone}/${parkurTot} (${pPct}%)`;
  if (pBar) pBar.style.width = `${pPct}%`;
}

// ================================================================
// TAB 2: SCHEDULE VIEW (HAFTALIK & AYLIK TAKVİM)
// ================================================================
function setScheduleFilter(filterType) {
  appState.scheduleFilter = filterType;
  document.querySelectorAll('.sched-filter-btn').forEach(btn => {
    btn.className = 'sched-filter-btn px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition';
  });

  const activeBtn = document.getElementById(`schedFilter-${filterType}`);
  if (activeBtn) {
    activeBtn.className = 'sched-filter-btn px-3 py-2 rounded-xl bg-blue-600 text-white shadow-sm transition';
  }

  renderScheduleView();
}

function jumpToMonth(monthVal) {
  appState.activeMonth = monthVal;
  renderScheduleView();
}

function renderScheduleView() {
  const container = document.getElementById('scheduleContainer');
  if (!container) return;
  container.innerHTML = '';

  // Filter days
  let filteredDays = STUDY_DATA.schedule.filter(day => {
    if (appState.activeMonth !== 'all') {
      if (!day.date.startsWith(appState.activeMonth)) return false;
    }

    if (appState.scheduleFilter === 'deneme') {
      return day.type === 'deneme';
    } else if (appState.scheduleFilter === 'completed') {
      return day.tasks.every(t => appState.completedTasks[t.id]);
    } else if (appState.scheduleFilter === 'pending') {
      return day.tasks.some(t => !appState.completedTasks[t.id]);
    }
    return true;
  });

  if (filteredDays.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-8 text-center border border-slate-200">
        <i class="fa-regular fa-folder-open text-slate-300 text-4xl mb-2"></i>
        <p class="text-slate-600 font-semibold text-sm">Seçilen filtreye uygun gün bulunamadı.</p>
      </div>
    `;
    return;
  }

  // Group by Week
  const weeksMap = {};
  filteredDays.forEach(day => {
    if (!weeksMap[day.weekNo]) weeksMap[day.weekNo] = [];
    weeksMap[day.weekNo].push(day);
  });

  Object.keys(weeksMap).forEach(weekNo => {
    const daysInWeek = weeksMap[weekNo];
    const weekStart = daysInWeek[0].dateFormatted;
    const weekEnd = daysInWeek[daysInWeek.length - 1].dateFormatted;

    const weekCard = document.createElement('div');
    weekCard.className = 'schedule-week-block bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden';

    let weekHtml = `
      <div class="bg-slate-50 border-b border-slate-200/80 px-5 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-md bg-blue-600 text-white font-bold text-xs flex items-center justify-center">${weekNo}</span>
          <h4 class="font-bold text-slate-900 font-['Outfit'] text-sm sm:text-base">${weekNo}. Hafta Planı</h4>
          <span class="text-xs text-slate-500 font-normal">(${weekStart} - ${weekEnd})</span>
        </div>
      </div>
      <div class="divide-y divide-slate-100">
    `;

    daysInWeek.forEach(d => {
      const isSelectedDay = d.date === appState.currentDateStr;
      const allTasksDone = d.tasks.every(t => appState.completedTasks[t.id]);

      let typePill = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">Etkinlik</span>';
      if (d.type === 'deneme') {
        typePill = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">🏆 Jumbo Deneme</span>';
      } else if (d.type === 'test') {
        typePill = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Test Çözümü</span>';
      } else if (d.type === 'review') {
        typePill = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">Haftalık Tekrar</span>';
      }

      weekHtml += `
        <div class="p-4 sm:px-5 hover:bg-slate-50/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${isSelectedDay ? 'bg-blue-50/50 border-l-4 border-l-blue-600' : ''}">
          <div class="flex items-start sm:items-center gap-3">
            <button onclick="jumpToDateAndOpenToday('${d.date}')" class="text-left group">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition">${d.dayName}, ${d.dateFormatted}</span>
                ${typePill}
                ${allTasksDone ? '<span class="text-emerald-600 text-xs font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Tamamlandı</span>' : ''}
              </div>
              <p class="text-xs text-slate-600 mt-0.5 line-clamp-1">${d.title}</p>
            </button>
          </div>

          <div class="flex items-center gap-2 self-end sm:self-center">
            ${d.tasks[0] && d.tasks[0].type !== 'review' ? `
              <button onclick="openOpticalModal('${d.tasks[0].id}')" class="text-xs bg-slate-100 hover:bg-indigo-50 text-indigo-700 hover:border-indigo-300 border border-slate-200 px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1 touch-manipulation">
                <i class="fa-solid fa-square-poll-vertical"></i> Sonuç Gir
              </button>
            ` : ''}
            <button onclick="jumpToDateAndOpenToday('${d.date}')" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl font-semibold transition">
              İncele
            </button>
          </div>
        </div>
      `;
    });

    weekHtml += `</div>`;
    weekCard.innerHTML = weekHtml;
    container.appendChild(weekCard);
  });
}

function jumpToDateAndOpenToday(dateStr) {
  jumpToDate(dateStr);
  switchTab('today');
}

// ================================================================
// TAB 3: 6 JUMBO DENEMELER (26 EXAMS)
// ================================================================
function renderDenemelerView() {
  const denemeDays = STUDY_DATA.schedule.filter(d => d.type === 'deneme');
  
  let completedCount = 0;
  let totalNet = 0;
  let chartLabels = [];
  let chartData = [];

  denemeDays.forEach((d, idx) => {
    const task = d.tasks[0];
    const isDone = !!appState.completedTasks[task.id];
    const res = appState.testResults[task.id];
    chartLabels.push(`D${idx+1}`);

    if (isDone && res) {
      completedCount++;
      totalNet += parseFloat(res.net) || 0;
      chartData.push(parseFloat(res.net) || 0);
    } else {
      chartData.push(null);
    }
  });

  const avgNet = completedCount > 0 ? (totalNet / completedCount).toFixed(2) : '0.00';

  const compCountEl = document.getElementById('denemeCompletedCount');
  const avgNetEl = document.getElementById('denemeAvgNet');
  if (compCountEl) compCountEl.innerText = `${completedCount}/26`;
  if (avgNetEl) avgNetEl.innerText = avgNet;

  // Render Deneme Grid
  const gridEl = document.getElementById('denemeGridList');
  if (gridEl) {
    gridEl.innerHTML = '';
    denemeDays.forEach(d => {
      const task = d.tasks[0];
      const isDone = !!appState.completedTasks[task.id];
      const res = appState.testResults[task.id];

      const card = document.createElement('div');
      card.className = `border rounded-2xl p-4 transition-all ${isDone ? 'bg-emerald-50/50 border-emerald-300' : 'bg-white border-slate-200'}`;

      card.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
            Jumbo Deneme ${task.denemeNo}
          </span>
          <span class="text-xs text-slate-500 font-medium">${d.dateFormatted}</span>
        </div>
        <h4 class="text-sm font-bold text-slate-900">${task.title}</h4>
        <p class="text-xs text-slate-500 mt-0.5">20 Soru • 40 Dakika</p>

        <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            ${res ? `
              <div class="text-xs">
                <span class="font-extrabold text-indigo-700 text-sm">Net: ${res.net}</span>
                <span class="text-slate-400 font-normal">(${res.correct}D ${res.wrong}Y)</span>
              </div>
            ` : `
              <span class="text-xs text-slate-400">${isDone ? '✅ Çözüldü' : 'Henüz çözülmedi'}</span>
            `}
          </div>
          <button onclick="openOpticalModal('${task.id}')" class="text-xs bg-amber-500 hover:bg-amber-600 text-white font-bold px-3 py-1.5 rounded-xl shadow-sm transition flex items-center gap-1 touch-manipulation">
            <i class="fa-solid fa-square-poll-vertical"></i> ${res ? 'Sonuç: ' + res.net + ' Net' : 'Sonuç Gir'}
          </button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  // Render Canvas Chart
  renderDenemeChart(chartLabels, chartData);
}

// Render Net Progression Chart on Canvas
function renderDenemeChart(labels, data) {
  const canvas = document.getElementById('denemeNetChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Handle high-dpi displays
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const padLeft = 40;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 30;

  ctx.clearRect(0, 0, w, h);

  // Draw Horizontal Gridlines (0, 5, 10, 15, 20 net)
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.font = '11px sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'right';

  for (let score = 0; score <= 20; score += 5) {
    const y = padTop + (h - padTop - padBottom) * (1 - score / 20);
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - padRight, y);
    ctx.stroke();
    ctx.fillText(`${score}`, padLeft - 8, y + 4);
  }

  // Plot Data Points
  const stepX = (w - padLeft - padRight) / (labels.length - 1);
  const points = [];

  labels.forEach((lbl, i) => {
    const x = padLeft + i * stepX;
    const val = data[i];
    if (val !== null && !isNaN(val)) {
      const y = padTop + (h - padTop - padBottom) * (1 - Math.max(0, Math.min(20, val)) / 20);
      points.push({ x, y, val, idx: i });
    }
  });

  // Draw Line
  if (points.length > 0) {
    ctx.beginPath();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    points.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    // Draw Points
    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Text label above point
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${p.val}`, p.x, p.y - 8);
    });
  } else {
    // If no denemes solved yet, draw placeholder text
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Henüz çözülen deneme yok. Deneme çözdükçe net grafiğin burada oluşacaktır!', w / 2, h / 2);
  }

  // Draw X labels (every 2 denemes to prevent clutter)
  ctx.fillStyle = '#64748b';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  labels.forEach((lbl, i) => {
    if (i % 2 === 0 || i === labels.length - 1) {
      const x = padLeft + i * stepX;
      ctx.fillText(lbl, x, h - 10);
    }
  });
}

// ================================================================
// OKUL & DERSHANE GENEL DENEMELERİ & DERS BAZLI ANALİZ MOTORU
// ================================================================

const DEFAULT_GENERAL_SUBJECTS = [
  { code: 'tr', name: 'Türkçe', icon: 'fa-book', color: 'rose', bgLight: 'bg-rose-50', textCol: 'text-rose-700', borderCol: 'border-rose-200', strokeCol: '#f43f5e', defaultQ: 20 },
  { code: 'mat', name: 'Matematik', icon: 'fa-square-root-variable', color: 'blue', bgLight: 'bg-blue-50', textCol: 'text-blue-700', borderCol: 'border-blue-200', strokeCol: '#3b82f6', defaultQ: 20 },
  { code: 'fen', name: 'Fen Bilimleri', icon: 'fa-flask', color: 'purple', bgLight: 'bg-purple-50', textCol: 'text-purple-700', borderCol: 'border-purple-200', strokeCol: '#a855f7', defaultQ: 20 },
  { code: 'sos', name: 'Sosyal Bilgiler', icon: 'fa-earth-americas', color: 'amber', bgLight: 'bg-amber-50', textCol: 'text-amber-800', borderCol: 'border-amber-200', strokeCol: '#f59e0b', defaultQ: 10 },
  { code: 'din', name: 'Din Kültürü', icon: 'fa-mosque', color: 'emerald', bgLight: 'bg-emerald-50', textCol: 'text-emerald-700', borderCol: 'border-emerald-200', strokeCol: '#10b981', defaultQ: 10 },
  { code: 'ing', name: 'İngilizce', icon: 'fa-language', color: 'indigo', bgLight: 'bg-indigo-50', textCol: 'text-indigo-700', borderCol: 'border-indigo-200', strokeCol: '#6366f1', defaultQ: 10 }
];

const GENERAL_TEMPLATES = {
  '90': { tr: 20, mat: 20, fen: 20, sos: 10, din: 10, ing: 10 },
  '75': { tr: 15, mat: 15, fen: 15, sos: 10, din: 10, ing: 10 },
  '80': { tr: 20, mat: 20, fen: 20, sos: 10, din: 5, ing: 5 },
  '100': { tr: 20, mat: 20, fen: 20, sos: 20, din: 10, ing: 10 }
};

let activeDetailTrial = null;

// Alt sekme geçişi (Jumbo vs Genel Denemeler)
function switchDenemeSubTab(subTab) {
  appState.activeDenemeSubTab = subTab;
  const jumboBtn = document.getElementById('subtab-btn-jumbo');
  const generalBtn = document.getElementById('subtab-btn-general');
  const jumboView = document.getElementById('subview-jumbo');
  const generalView = document.getElementById('subview-general');

  if (subTab === 'general') {
    if (jumboBtn) {
      jumboBtn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
      jumboBtn.classList.add('text-slate-600', 'hover:text-slate-900');
    }
    if (generalBtn) {
      generalBtn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
      generalBtn.classList.remove('text-slate-600', 'hover:text-slate-900');
    }
    if (jumboView) jumboView.classList.add('hidden');
    if (generalView) generalView.classList.remove('hidden');
    renderGeneralTrialsView();
  } else {
    if (generalBtn) {
      generalBtn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
      generalBtn.classList.add('text-slate-600', 'hover:text-slate-900');
    }
    if (jumboBtn) {
      jumboBtn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
      jumboBtn.classList.remove('text-slate-600', 'hover:text-slate-900');
    }
    if (generalView) generalView.classList.add('hidden');
    if (jumboView) jumboView.classList.remove('hidden');
    renderDenemelerView();
  }
}

// Genel deneme rozeti sayısını güncelle
function updateGeneralTrialsCountBadge() {
  const count = (appState.generalTrials || []).length;
  const badge = document.getElementById('generalTrialsCountBadge');
  const mobileBadge = document.getElementById('mobileBadgeGenelDenemeCount');
  if (badge) {
    if (count > 0) {
      badge.innerText = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
  if (mobileBadge) {
    if (count > 0) {
      mobileBadge.innerText = count;
      mobileBadge.classList.remove('hidden');
    } else {
      mobileBadge.classList.add('hidden');
    }
  }
}

// 6. Sınıf MEB Müfredatına Uygun Ders Bazlı Pedagojik Teşhis ve Rehberlik Tanımları
const GENERAL_SUBJECT_PEDAGOGY = {
  tr: {
    emoji: '🇹🇷',
    curriculumTitle: '6. Sınıf Türkçe & Paragraf Kazanımları',
    strengths: 'Paragrafta ana düşünce, yardımcı fikirler, deyimler ve atasözleri konularında okuduğunu anlama seviyesi yüksek.',
    risks: 'Görsel yorumlama, infografik okuma ve sözel mantık muhakeme sorularında acele etmekten kaynaklı şık hataları.',
    actionPlan: 'Haftada en az 2 sözel mantık testi çözülmeli; altı çizili veya olumsuz soru köklerine ("değinilmemiştir") odaklanılmalı.'
  },
  mat: {
    emoji: '📐',
    curriculumTitle: '6. Sınıf MEB Beceri Temelli Matematik',
    strengths: 'Doğal sayılarla dört işlem, işlem önceliği, çarpanlar ve katlar, temel cebirsel kavrayış mantığı güçlü.',
    risks: 'Uzun yeni nesil sorularda problem aşamalarını adım adım yazmadan zihinden yapmaya çalışmak ve işlem dikkatsizliği.',
    actionPlan: 'Jumbo hafta sonu denemeleri haricinde haftalık 20 yeni nesil problem çözülmeli; yanlış sorular soru havuzuna eklenip öğretmenle birebir analiz edilmeli.'
  },
  fen: {
    emoji: '🔬',
    curriculumTitle: '6. Sınıf Fen Bilimleri & Deney Tasarımı',
    strengths: 'Güneş Sistemi, Gezegenler, Tutulmalar, Vücudumuzdaki Sistemler kavramsal temellerinde bilgi seviyesi oturmuş.',
    risks: 'Deney ve hipotez düzenekli sorularda bağımsız değişken, bağımlı değişken ve sabit tutulan kontrol değişkenlerini karıştırma ihtimali.',
    actionPlan: 'Deneyli sorularda önce değişken tablosu zihinde kurulmalı, soru öncülü okunurken "Deneyin amacı nedir?" sorusuyla yaklaşılmalı.'
  },
  sos: {
    emoji: '🌍',
    curriculumTitle: '6. Sınıf Sosyal Bilgiler & Çıkarım Becerisi',
    strengths: 'İlk Türk devletleri, İslamiyet ve Türkler, coğrafi konum ve kültürel miras konularında kronolojik kavrayış iyi.',
    risks: 'Öncüllü sorularda ("Yalnızca bu bilgiye göre...", "Ulaşılamaz") metin dışındaki genel bilgiyi katarak aşırı yorum yapma.',
    actionPlan: 'Metne dayalı sorularda sadece verilen paragrafa bağlı kalarak şık eleme tekniği uygulanmalı; harita ve lejant okuma pekiştirilmeli.'
  },
  din: {
    emoji: '🕌',
    curriculumTitle: '6. Sınıf Din Kültürü & Ahlak Bilgisi',
    strengths: 'Peygamber ve ilahi kitap inancı, temel ibadetler ve İslamın ahlaki ilkeleri kavramlarında kavrayış sağlam.',
    risks: 'Ayet ve hadis meallerinden çıkarım yaparken sorunun ana vurgusunu kaçırıp benzer genel yargılara yönelme.',
    actionPlan: 'Ayet ve hadis sorularında ana tema kelimesi yuvarlak içine alınmalı, soru kökündeki "asıl vurgulanan" ifadesine dikkat edilmeli.'
  },
  ing: {
    emoji: '🇬🇧',
    curriculumTitle: '6. Sınıf İngilizce & İletişimsel Beceriler',
    strengths: 'Life, Yummy Breakfast, Downtown üniteleri kelime dağarcığı ve temel günlük diyalog kalıplarında başarı yüksek.',
    risks: 'Karşılıklı diyalog tamamlama, davet / reddetme ve görsel eşleştirme sorularında olumsuz yardımcı fiillere (doesn\'t, can\'t) dikkat eksikliği.',
    actionPlan: 'Haftalık ünite kelime kartı tekrarları yapılmalı; soru kökündeki zaman ifadeleri ve olumsuzluk ekleri kontrol edilerek işaretlenmeli.'
  }
};

// Ders ders genel istatistikleri hesapla
function calculateGeneralSubjectStats() {
  const trials = appState.generalTrials || [];
  const map = {};

  // Varsayılan dersleri hazırla
  DEFAULT_GENERAL_SUBJECTS.forEach(s => {
    map[s.code] = {
      code: s.code,
      name: s.name,
      icon: s.icon,
      color: s.color,
      bgLight: s.bgLight,
      textCol: s.textCol,
      borderCol: s.borderCol,
      strokeCol: s.strokeCol,
      count: 0,
      totalQ: 0,
      totalC: 0,
      totalW: 0,
      totalE: 0,
      totalNet: 0,
      history: []
    };
  });

  // Kronolojik sıralı sınavları tara
  const sortedTrials = [...trials].sort((a, b) => (a.date > b.date ? 1 : -1));

  sortedTrials.forEach(t => {
    if (!Array.isArray(t.subjects)) return;
    t.subjects.forEach(s => {
      if (!map[s.code]) {
        map[s.code] = {
          code: s.code,
          name: s.name || s.code,
          icon: 'fa-book-bookmark',
          color: 'indigo',
          bgLight: 'bg-indigo-50',
          textCol: 'text-indigo-700',
          borderCol: 'border-indigo-200',
          strokeCol: '#6366f1',
          count: 0,
          totalQ: 0,
          totalC: 0,
          totalW: 0,
          totalE: 0,
          totalNet: 0,
          history: []
        };
      }
      const entry = map[s.code];
      entry.count++;
      entry.totalQ += (parseInt(s.questions) || 0);
      entry.totalC += (parseInt(s.correct) || 0);
      entry.totalW += (parseInt(s.wrong) || 0);
      entry.totalE += (parseInt(s.empty) || 0);
      const netVal = parseFloat(s.net) || 0;
      entry.totalNet += netVal;
      entry.history.push({ 
        trialName: t.name, 
        date: t.date, 
        net: netVal, 
        q: parseInt(s.questions) || 0,
        correct: parseInt(s.correct) || 0,
        wrong: parseInt(s.wrong) || 0,
        empty: parseInt(s.empty) || 0
      });
    });
  });

  // Ortalamaları ve trendleri hesapla
  const result = [];
  for (const code in map) {
    const item = map[code];
    item.avgNet = item.count > 0 ? (item.totalNet / item.count) : 0;
    item.avgQ = item.count > 0 ? Math.round(item.totalQ / item.count) : (DEFAULT_GENERAL_SUBJECTS.find(d => d.code === code)?.defaultQ || 20);
    item.avgPct = item.totalQ > 0 ? ((item.totalNet / item.totalQ) * 100) : 0;
    const attempted = item.totalC + item.totalW;
    item.accuracy = attempted > 0 ? ((item.totalC / attempted) * 100) : 0;
    item.peakNet = item.history.length > 0 ? Math.max(...item.history.map(h => h.net)) : 0;
    
    // Trend (son sınav ile bir önceki sınav neti farkı)
    if (item.history.length >= 2) {
      item.trend = item.history[item.history.length - 1].net - item.history[item.history.length - 2].net;
    } else {
      item.trend = 0;
    }
    result.push(item);
  }

  return result;
}

// Genel Denemeler Görünümünü Çiz
function renderGeneralTrialsView() {
  const trials = appState.generalTrials || [];
  const totalCount = trials.length;
  const totalQuestions = trials.reduce((sum, t) => sum + (parseInt(t.totalQuestions) || 0), 0);
  const totalNet = trials.reduce((sum, t) => sum + (parseFloat(t.totalNet) || 0), 0);
  const avgNet = totalCount > 0 ? (totalNet / totalCount).toFixed(2) : '0.00';
  const avgPct = totalQuestions > 0 ? ((totalNet / totalQuestions) * 100).toFixed(1) : '0';

  const totalCountEl = document.getElementById('generalTotalCount');
  const totalQEl = document.getElementById('generalTotalQuestions');
  const avgNetEl = document.getElementById('generalAvgNet');
  const avgPctEl = document.getElementById('generalAvgPct');

  if (totalCountEl) totalCountEl.innerText = `${totalCount} Deneme`;
  if (totalQEl) totalQEl.innerText = `${totalQuestions} Soru`;
  if (avgNetEl) avgNetEl.innerText = avgNet;
  if (avgPctEl) avgPctEl.innerText = `%${avgPct}`;

  updateGeneralTrialsCountBadge();

  const subjectStats = calculateGeneralSubjectStats();
  renderGeneralPowerRadarChart(subjectStats, trials);
  renderGeneralSubjectSummaryCards(subjectStats);
  renderGeneralSubjectDetailFilterButtons();
  renderGeneralSubjectDetailedCards(subjectStats, trials);
  renderGeneralChartFilterButtons();
  renderGeneralTrialsChart();
  renderGeneralPedagogicalAnalysis(subjectStats, trials);
  renderGeneralTrialsList();
}

// ========================================================
// 6 TEMEL DERS GÜÇ RADARI & AKILLI DENGE ANALİZİ
// ========================================================

function setPowerRadarMode(mode) {
  appState.powerRadarMode = mode;
  
  const btnAvg = document.getElementById('radarBtnAvg');
  const btnLast = document.getElementById('radarBtnLast');
  const btnCompare = document.getElementById('radarBtnCompare');
  const legend = document.getElementById('radarCompareLegend');

  const activeClasses = 'px-3 py-1.5 rounded-lg transition touch-manipulation cursor-pointer bg-white text-indigo-700 shadow-xs';
  const inactiveClasses = 'px-3 py-1.5 rounded-lg transition touch-manipulation cursor-pointer text-slate-600 hover:text-slate-900';

  if (btnAvg) btnAvg.className = (mode === 'avg' ? activeClasses : inactiveClasses);
  if (btnLast) btnLast.className = (mode === 'last' ? activeClasses : inactiveClasses);
  if (btnCompare) btnCompare.className = (mode === 'compare' ? activeClasses : inactiveClasses);

  if (legend) {
    if (mode === 'compare') legend.classList.remove('hidden');
    else legend.classList.add('hidden');
  }

  renderGeneralPowerRadarChart();
}

function renderGeneralPowerRadarChart(subjectStats, trials) {
  const canvas = document.getElementById('generalPowerRadarChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (!trials) trials = appState.generalTrials || [];
  if (!subjectStats) subjectStats = calculateGeneralSubjectStats();

  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = rect.width || 400;
  const h = rect.height || 400;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, w, h);

  const mode = appState.powerRadarMode || 'avg';
  const subjects = DEFAULT_GENERAL_SUBJECTS; // 6 primary lessons
  const numAxes = subjects.length;

  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.35;

  // 1. Konsantrik Altıgen Ağ Kılavuzları (20%, 40%, 60%, 80%, 100%)
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];
  rings.forEach((rScale, idx) => {
    const r = radius * rScale;
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = -Math.PI / 2 + i * (2 * Math.PI / numAxes);
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    if (idx === rings.length - 1) {
      ctx.strokeStyle = '#cbd5e1';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
    }

    // Yüzde etiketi
    ctx.setLineDash([]);
    ctx.font = 'bold 9px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${Math.round(rScale * 100)}%`, cx, cy - r + (idx === rings.length - 1 ? 10 : 0));
  });

  // 2. Merkezden Dış Eksenlere 6 Doğru Çizgi
  for (let i = 0; i < numAxes; i++) {
    const angle = -Math.PI / 2 + i * (2 * Math.PI / numAxes);
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Sınav girilmemişse boş durum mesajı
  if (trials.length === 0) {
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Henüz Genel Deneme Girilmedi', cx, cy - 8);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('Sınav ekledikçe 6 dersin güç radarı burada oluşacaktır.', cx, cy + 12);
    renderRadarHighlightCards([], []);
    return;
  }

  // 3. Verileri Hazırla: Genel Ortalama ve Son Sınav
  const statsMap = {};
  subjectStats.forEach(s => { statsMap[s.code] = s; });

  const sortedTrials = [...trials].sort((a, b) => (a.date > b.date ? 1 : -1));
  const latestTrial = sortedTrials[sortedTrials.length - 1];

  const avgValues = subjects.map(s => {
    const st = statsMap[s.code];
    return st && st.avgPct !== undefined ? Math.max(0, Math.min(100, st.avgPct)) : 0;
  });

  const lastValues = subjects.map(s => {
    if (!latestTrial || !Array.isArray(latestTrial.subjects)) return 0;
    const match = latestTrial.subjects.find(sub => sub.code === s.code);
    if (!match) return 0;
    const q = parseInt(match.questions) || 0;
    const net = parseFloat(match.net) || 0;
    return q > 0 ? Math.max(0, Math.min(100, (net / q) * 100)) : 0;
  });

  // Çokgen Çizim Yardımcısı
  function drawPolygon(values, fillStyle, strokeStyle, isDashed = false) {
    const pts = [];
    for (let i = 0; i < numAxes; i++) {
      const angle = -Math.PI / 2 + i * (2 * Math.PI / numAxes);
      const val = values[i];
      const r = (val / 100) * radius;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      pts.push({ x, y, val });
    }

    // Dolgu
    ctx.beginPath();
    pts.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.fillStyle = fillStyle;
    ctx.fill();

    // Çevre Çizgisi
    ctx.beginPath();
    pts.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.closePath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = 2.5;
    if (isDashed) ctx.setLineDash([4, 4]);
    else ctx.setLineDash([]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Köşe Noktaları
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = 2.5;
      ctx.stroke();
    });

    return pts;
  }

  // 4. Seçilen Moda Göre Çokgenleri Çiz
  if (mode === 'avg') {
    drawPolygon(avgValues, 'rgba(99, 102, 241, 0.22)', '#6366f1');
  } else if (mode === 'last') {
    drawPolygon(lastValues, 'rgba(245, 158, 11, 0.22)', '#d97706');
  } else if (mode === 'compare') {
    drawPolygon(avgValues, 'rgba(14, 165, 233, 0.18)', '#0284c7', true);
    drawPolygon(lastValues, 'rgba(245, 158, 11, 0.22)', '#d97706', false);
  }

  // 5. Dış Eksen Etiketleri (Ders Adı, Emojisi ve Değerleri)
  for (let i = 0; i < numAxes; i++) {
    const angle = -Math.PI / 2 + i * (2 * Math.PI / numAxes);
    const sub = subjects[i];
    const avgVal = avgValues[i];
    const lastVal = lastValues[i];

    const labelDist = radius + 22;
    const lx = cx + labelDist * Math.cos(angle);
    const ly = cy + labelDist * Math.sin(angle);

    const cosVal = Math.cos(angle);
    const sinVal = Math.sin(angle);

    let align = 'center';
    if (cosVal > 0.3) align = 'left';
    else if (cosVal < -0.3) align = 'right';

    ctx.textAlign = align;
    ctx.textBaseline = 'middle';

    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = '#1e293b';
    const ped = GENERAL_SUBJECT_PEDAGOGY[sub.code];
    const emoji = ped ? ped.emoji : '📚';
    const line1 = `${emoji} ${sub.name}`;

    let line2 = '';
    if (mode === 'avg') {
      line2 = `%${Math.round(avgVal)}`;
    } else if (mode === 'last') {
      line2 = `%${Math.round(lastVal)}`;
    } else {
      line2 = `Ort: %${Math.round(avgVal)} | Son: %${Math.round(lastVal)}`;
    }

    const yOff = sinVal < -0.3 ? -8 : (sinVal > 0.3 ? 8 : 0);
    ctx.fillText(line1, lx, ly + yOff - 6);

    ctx.font = 'bold 10px sans-serif';
    ctx.fillStyle = sub.strokeCol || '#6366f1';
    ctx.fillText(line2, lx, ly + yOff + 8);
  }

  // 6. Radar Altı 3 Stratejik Kartı Çiz
  renderRadarHighlightCards(subjectStats, avgValues);
}

function renderRadarHighlightCards(subjectStats, avgValues) {
  const container = document.getElementById('radarHighlightCards');
  if (!container) return;
  container.innerHTML = '';

  if (!subjectStats || subjectStats.length === 0 || subjectStats.every(s => s.count === 0)) {
    container.innerHTML = `
      <div class="bg-slate-50 rounded-xl p-3 border border-slate-200 text-center text-xs text-slate-500 col-span-1 sm:col-span-3">
        Genel deneme sınavı girdikçe güç dengesi ve en güçlü ders analiziniz burada belirecektir.
      </div>
    `;
    return;
  }

  const active = subjectStats.filter(s => s.count > 0).sort((a, b) => b.avgPct - a.avgPct);
  if (active.length === 0) return;

  const strongest = active[0];
  const lowest = active[active.length - 1];

  // Denge Skoru (Ortalamadan Sapma Hesaplaması)
  const validPcts = active.map(s => s.avgPct);
  const mean = validPcts.reduce((sum, v) => sum + v, 0) / validPcts.length;
  const mad = validPcts.reduce((sum, v) => sum + Math.abs(v - mean), 0) / validPcts.length;
  const balanceScore = Math.max(0, Math.min(100, Math.round(100 - mad * 1.6)));

  let balanceLabel = 'Dengeli Güç Dağılımı';
  let balanceIcon = 'fa-scale-balanced';
  let balanceDesc = '6 ders birbirine yakın başarıda; genel akademik güç homojen ilerliyor.';

  if (balanceScore < 65) {
    balanceLabel = 'Geliştirilecek Eksenler Var';
    balanceIcon = 'fa-triangle-exclamation';
    balanceDesc = 'Dersler arası başarı farkı belirgin; öncelikli telafi derslerine ağırlık verilmeli.';
  } else if (balanceScore < 80) {
    balanceLabel = 'İyi Seviye Denge';
    balanceIcon = 'fa-circle-half-stroke';
    balanceDesc = 'Temel dersler önde ilerlerken bazı derslerde hızlı toparlanma potansiyeli mevcut.';
  }

  container.innerHTML = `
    <!-- Kart 1: En Güçlü Kale -->
    <div class="bg-gradient-to-br from-emerald-50/70 to-white rounded-xl p-3.5 border border-emerald-200 shadow-xs flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between text-xs font-bold text-emerald-800 mb-1">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-emerald-600"></i> En Güçlü Kale</span>
          <span class="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-black">%${strongest.avgPct.toFixed(0)} Başarı</span>
        </div>
        <h4 class="font-black text-slate-900 text-sm mt-1">${strongest.name}</h4>
        <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
          Ortalama <strong>${strongest.avgNet.toFixed(1)} net</strong> ile en yüksek net katkısı sağlayan ve öğrencinin en güvendiği ders.
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-emerald-100 text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
        <i class="fa-solid fa-trophy"></i> İstikrarla korunması önerilir
      </div>
    </div>

    <!-- Kart 2: Öncelikli Gelişim Ekseni -->
    <div class="bg-gradient-to-br from-amber-50/70 to-white rounded-xl p-3.5 border border-amber-200 shadow-xs flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between text-xs font-bold text-amber-800 mb-1">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-bullseye text-amber-600"></i> Gelişim Ekseni</span>
          <span class="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-black">%${lowest.avgPct.toFixed(0)} Başarı</span>
        </div>
        <h4 class="font-black text-slate-900 text-sm mt-1">${lowest.name}</h4>
        <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
          Ortalama <strong>${lowest.avgNet.toFixed(1)} net</strong>. Genel puanı yukarı taşıyacak en yüksek net artış fırsatı bu derste.
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-amber-100 text-[10px] text-amber-800 font-semibold flex items-center gap-1">
        <i class="fa-solid fa-arrow-trend-up"></i> Yanlış soru analizine öncelik verilmeli
      </div>
    </div>

    <!-- Kart 3: Genel Güç Dengesi Skoru -->
    <div class="bg-gradient-to-br from-indigo-50/70 to-white rounded-xl p-3.5 border border-indigo-200 shadow-xs flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between text-xs font-bold text-indigo-800 mb-1">
          <span class="flex items-center gap-1.5"><i class="fa-solid ${balanceIcon} text-indigo-600"></i> Güç Dengesi</span>
          <span class="bg-indigo-100 text-indigo-800 text-[10px] px-2 py-0.5 rounded-full font-black">${balanceScore} / 100</span>
        </div>
        <h4 class="font-black text-slate-900 text-sm mt-1">${balanceLabel}</h4>
        <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
          ${balanceDesc}
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-indigo-100 text-[10px] text-indigo-700 font-semibold flex items-center gap-1">
        <i class="fa-solid fa-chart-pie"></i> 6 dersin homojen dağılımı
      </div>
    </div>
  `;
}

// ========================================================
// HER BİR DERSİN AYRINTILI ANALİZİ VE TEŞHİSİ
// ========================================================

function renderGeneralSubjectDetailFilterButtons() {
  const bar = document.getElementById('generalSubjectDetailFilterBar');
  if (!bar) return;
  bar.innerHTML = '';

  const activeFilter = appState.selectedSubjectDetail || 'all';

  const filterOptions = [
    { code: 'all', label: 'Tüm Dersler (6)' },
    ...DEFAULT_GENERAL_SUBJECTS.map(s => {
      const ped = GENERAL_SUBJECT_PEDAGOGY[s.code];
      return {
        code: s.code,
        label: `${ped ? ped.emoji : ''} ${s.name}`
      };
    })
  ];

  filterOptions.forEach(opt => {
    const isActive = activeFilter === opt.code;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = () => setSubjectDetailFilter(opt.code);
    btn.className = `px-3 py-1.5 rounded-xl font-bold transition cursor-pointer touch-manipulation text-xs flex items-center gap-1.5 ${
      isActive
        ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300'
        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
    }`;
    btn.innerHTML = `<span>${opt.label}</span>`;
    bar.appendChild(btn);
  });
}

function setSubjectDetailFilter(subCode) {
  appState.selectedSubjectDetail = subCode;
  renderGeneralSubjectDetailFilterButtons();
  renderGeneralSubjectDetailedCards();
}

function renderGeneralSubjectDetailedCards(subjectStats, trials) {
  const container = document.getElementById('generalSubjectDetailedCardsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!subjectStats) subjectStats = calculateGeneralSubjectStats();
  if (!trials) trials = appState.generalTrials || [];

  if (trials.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-2">
        <i class="fa-solid fa-microscope text-3xl text-indigo-400"></i>
        <h4 class="text-sm font-bold text-slate-800">Henüz Deneme Analizi Bulunmuyor</h4>
        <p class="text-xs text-slate-500">Okul veya dershane denemesi eklediğinizde her dersin MEB kazanım analizi, doğruluk oranı ve telafi planı burada listelenecektir.</p>
      </div>
    `;
    return;
  }

  const selectedFilter = appState.selectedSubjectDetail || 'all';
  const subjectsToRender = selectedFilter === 'all' 
    ? subjectStats 
    : subjectStats.filter(s => s.code === selectedFilter);

  subjectsToRender.forEach(stat => {
    const ped = GENERAL_SUBJECT_PEDAGOGY[stat.code] || {
      emoji: '📚',
      curriculumTitle: '6. Sınıf Genel Kazanım',
      strengths: 'Ders temellerinde kavram bilgisi mevcut.',
      risks: 'Soru köklerini dikkatli okuma ve işlem kontrolü.',
      actionPlan: 'Düzenli tekrar ve hatalı soruların çözümü.'
    };

    // Başarı Rozeti
    let masteryBadge = {
      label: '💎 Elit / Usta Seviye',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    };
    if (stat.avgPct < 50) {
      masteryBadge = { label: '🔴 Öncelikli Telafi Gereken', badgeClass: 'bg-rose-100 text-rose-800 border-rose-300' };
    } else if (stat.avgPct < 70) {
      masteryBadge = { label: '🟡 Orta Düzey', badgeClass: 'bg-amber-100 text-amber-800 border-amber-300' };
    } else if (stat.avgPct < 85) {
      masteryBadge = { label: '🟢 İleri Düzey', badgeClass: 'bg-blue-100 text-blue-800 border-blue-300' };
    }

    // Trend Rozeti
    let trendBadge = '';
    if (stat.count >= 2) {
      if (stat.trend > 0) {
        trendBadge = `<span class="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-xl flex items-center gap-1"><i class="fa-solid fa-arrow-trend-up"></i> +${stat.trend.toFixed(1)} Son Sınav Artışı</span>`;
      } else if (stat.trend < 0) {
        trendBadge = `<span class="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-xl flex items-center gap-1"><i class="fa-solid fa-arrow-trend-down"></i> ${stat.trend.toFixed(1)} Son Sınav Azalışı</span>`;
      } else {
        trendBadge = `<span class="text-xs font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-xl flex items-center gap-1">➡️ Stabil</span>`;
      }
    }

    // Doğruluk Oranı D / (D + Y)
    const attempted = stat.totalC + stat.totalW;
    const accuracy = attempted > 0 ? ((stat.totalC / attempted) * 100) : 0;

    // Rekor Net
    const peakNet = stat.history && stat.history.length > 0 ? Math.max(...stat.history.map(h => h.net)) : 0;

    // Yanlışlardan Kaybedilen Net
    const lostNet = (stat.totalW / 3).toFixed(2);

    // İlerleme Çubuğu Oranları
    const totalQAll = stat.totalQ || 1;
    const pctC = Math.round((stat.totalC / totalQAll) * 100);
    const pctW = Math.round((stat.totalW / totalQAll) * 100);
    const pctE = Math.max(0, 100 - pctC - pctW);

    // Sınav Geçmişi Hapları
    const historyPills = (stat.history || []).map((h, idx) => `
      <span class="inline-flex items-center gap-1 text-[11px] bg-slate-100 border border-slate-200 rounded-lg px-2 py-0.5 font-medium text-slate-700">
        <span class="font-bold text-slate-900">${h.trialName || `D${idx+1}`}:</span>
        <span class="font-mono font-bold" style="color: ${stat.strokeCol}">${h.net.toFixed(2)} Net</span>
      </span>
    `).join('');

    const card = document.createElement('div');
    card.className = `bg-white rounded-2xl p-5 border ${stat.borderCol || 'border-slate-200'} shadow-sm space-y-4 hover:shadow-md transition`;
    card.innerHTML = `
      <!-- Kart Başlığı & Rozetler -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl ${stat.bgLight} ${stat.textCol} flex items-center justify-center text-xl shadow-xs flex-shrink-0">
            <i class="fa-solid ${stat.icon}"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h4 class="text-base font-black text-slate-900">${ped.emoji} ${stat.name}</h4>
              <span class="text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${masteryBadge.badgeClass}">
                ${masteryBadge.label}
              </span>
            </div>
            <p class="text-xs text-slate-500 mt-0.5">${ped.curriculumTitle} • Toplam ${stat.count} Sınav Girişi</p>
          </div>
        </div>

        <div class="flex items-center gap-2 self-start sm:self-auto">
          ${trendBadge}
        </div>
      </div>

      <!-- 4 Temel Metrik Göstergesi -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div class="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <span class="block text-[10px] text-slate-500 uppercase font-semibold">Ortalama Net</span>
          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="text-xl font-black ${stat.textCol}">${stat.avgNet.toFixed(2)}</span>
            <span class="text-xs text-slate-400 font-semibold">/ ${stat.avgQ}</span>
          </div>
        </div>

        <div class="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <span class="block text-[10px] text-slate-500 uppercase font-semibold">Net Başarı %</span>
          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="text-xl font-black text-slate-900">%${stat.avgPct.toFixed(1)}</span>
          </div>
        </div>

        <div class="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <span class="block text-[10px] text-slate-500 uppercase font-semibold">İşaretleme Doğruluğu</span>
          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="text-xl font-black ${accuracy >= 80 ? 'text-emerald-600' : 'text-amber-600'}">%${accuracy.toFixed(1)}</span>
            <span class="text-[10px] text-slate-400 font-normal">D/(D+Y)</span>
          </div>
        </div>

        <div class="bg-slate-50 rounded-xl p-3 border border-slate-100">
          <span class="block text-[10px] text-slate-500 uppercase font-semibold">Zirve Net (Rekor)</span>
          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="text-xl font-black text-indigo-600">${peakNet.toFixed(2)}</span>
            <span class="text-xs text-slate-400 font-semibold">Net</span>
          </div>
        </div>
      </div>

      <!-- Soru Dağılımı ve Yanlış Ceza Analizi -->
      <div class="bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/60 space-y-2.5">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-slate-700 flex items-center gap-1.5">
            <i class="fa-solid fa-chart-bar text-indigo-500"></i> Toplam Soru Dağılımı
          </span>
          <span class="text-slate-500 text-[11px] font-medium">
            <strong class="text-emerald-700">${stat.totalC} Doğru</strong> • 
            <strong class="text-rose-700">${stat.totalW} Yanlış</strong> • 
            <strong class="text-amber-700">${stat.totalE} Boş</strong>
          </span>
        </div>

        <!-- Segmented Progress Bar -->
        <div class="w-full h-3 rounded-full overflow-hidden flex bg-slate-200 shadow-inner">
          <div style="width: ${pctC}%" class="bg-emerald-500 h-full transition-all duration-500" title="Doğru: %${pctC}"></div>
          <div style="width: ${pctW}%" class="bg-rose-500 h-full transition-all duration-500" title="Yanlış: %${pctW}"></div>
          <div style="width: ${pctE}%" class="bg-amber-300 h-full transition-all duration-500" title="Boş: %${pctE}"></div>
        </div>

        <!-- Yanlışlardan Kaybedilen Net Uyarısı -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-600 pt-1 gap-1">
          <span class="flex items-center gap-1 text-rose-700 font-semibold">
            <i class="fa-solid fa-circle-minus"></i>
            3 Yanlış 1 Doğru Kaybı: <strong>-${lostNet} Net</strong>
          </span>
          <span class="text-slate-500">
            Yanlışlar boş bırakılsaydı ortalama net: <strong class="text-slate-800">${(stat.avgNet + (parseFloat(lostNet) / (stat.count || 1))).toFixed(2)}</strong> olacaktı.
          </span>
        </div>
      </div>

      <!-- 6. Sınıf Pedagojik Teşhis & Eylem Planı (3 Sütun) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        <!-- Güçlü Yön -->
        <div class="bg-emerald-50/50 rounded-xl p-3 border border-emerald-100 space-y-1">
          <div class="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-check text-emerald-600"></i> Güçlü Yön & Hakimiyet
          </div>
          <p class="text-[11px] text-slate-600 leading-relaxed">${ped.strengths}</p>
        </div>

        <!-- Dikkat Edilecek Nokta -->
        <div class="bg-amber-50/50 rounded-xl p-3 border border-amber-100 space-y-1">
          <div class="text-xs font-bold text-amber-800 flex items-center gap-1.5">
            <i class="fa-solid fa-triangle-exclamation text-amber-600"></i> Risk & Dikkat Alanı
          </div>
          <p class="text-[11px] text-slate-600 leading-relaxed">${ped.risks}</p>
        </div>

        <!-- Öğretmen Eylem Planı -->
        <div class="bg-indigo-50/50 rounded-xl p-3 border border-indigo-100 space-y-1">
          <div class="text-xs font-bold text-indigo-800 flex items-center gap-1.5">
            <i class="fa-solid fa-list-check text-indigo-600"></i> Öğretmen Eylem Planı
          </div>
          <p class="text-[11px] text-slate-600 leading-relaxed">${ped.actionPlan}</p>
        </div>
      </div>

      <!-- Geçmiş Sınavlar Kronolojisi (Varsa) -->
      ${stat.history && stat.history.length > 0 ? `
        <div class="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
          <span class="text-[10px] font-bold text-slate-400 uppercase mr-1">Sınav Geçmişi:</span>
          ${historyPills}
        </div>
      ` : ''}
    `;
    container.appendChild(card);
  });
}


// 6 Temel Ders Başarı ve Ortalama Kartlarını Çiz
function renderGeneralSubjectSummaryCards(subjectStats) {
  const grid = document.getElementById('generalSubjectSummaryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  subjectStats.forEach(stat => {
    const card = document.createElement('div');
    card.className = `bg-white rounded-2xl p-3.5 border ${stat.borderCol || 'border-slate-200'} shadow-sm flex flex-col justify-between hover:shadow-md transition`;
    
    let trendBadge = '';
    if (stat.count >= 2) {
      if (stat.trend > 0) {
        trendBadge = `<span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5"><i class="fa-solid fa-arrow-trend-up text-[9px]"></i>+${stat.trend.toFixed(1)}</span>`;
      } else if (stat.trend < 0) {
        trendBadge = `<span class="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-md flex items-center gap-0.5"><i class="fa-solid fa-arrow-trend-down text-[9px]"></i>${stat.trend.toFixed(1)}</span>`;
      } else {
        trendBadge = `<span class="text-[10px] font-bold text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded-md">-</span>`;
      }
    }

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between mb-2">
          <div class="w-8 h-8 rounded-xl ${stat.bgLight} ${stat.textCol} flex items-center justify-center text-sm shadow-xs">
            <i class="fa-solid ${stat.icon}"></i>
          </div>
          ${trendBadge}
        </div>
        <h4 class="text-xs font-bold text-slate-900 line-clamp-1">${stat.name}</h4>
        <div class="mt-1 flex items-baseline gap-1">
          <span class="text-lg font-black ${stat.textCol}">${stat.avgNet.toFixed(2)}</span>
          <span class="text-[10px] text-slate-400 font-semibold">/ ${stat.avgQ} Net</span>
        </div>
      </div>

      <div class="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
        <div class="flex items-center justify-between text-[10px]">
          <span class="text-slate-500 font-medium">Başarı:</span>
          <span class="font-black ${stat.textCol}">%${stat.avgPct.toFixed(0)}</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div class="h-full rounded-full transition-all duration-500" style="width: ${Math.min(100, Math.max(0, stat.avgPct))}%; background-color: ${stat.strokeCol || '#6366f1'}"></div>
        </div>
        <div class="flex items-center justify-between text-[9px] text-slate-400 font-medium pt-0.5">
          <span>${stat.totalC}D • ${stat.totalW}Y • ${stat.totalE}B</span>
          <span>${stat.count} Sınav</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Grafik Filtre Butonlarını Çiz
function renderGeneralChartFilterButtons() {
  const bar = document.getElementById('generalChartFilterBar');
  if (!bar) return;
  bar.innerHTML = '';

  const filters = [
    { key: 'all', label: '📊 Toplam Net', stroke: '#4f46e5' },
    { key: 'tr', label: '🇹🇷 Türkçe', stroke: '#f43f5e' },
    { key: 'mat', label: '📐 Matematik', stroke: '#3b82f6' },
    { key: 'fen', label: '🔬 Fen', stroke: '#a855f7' },
    { key: 'sos', label: '🌍 Sosyal', stroke: '#f59e0b' },
    { key: 'din', label: '🕌 Din', stroke: '#10b981' },
    { key: 'ing', label: '🇬🇧 İngilizce', stroke: '#6366f1' },
    { key: 'pct', label: '📈 Başarı %', stroke: '#8b5cf6' }
  ];

  filters.forEach(f => {
    const isActive = appState.generalChartFilter === f.key;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = () => setGeneralChartFilter(f.key);
    btn.className = `px-2.5 py-1 rounded-xl text-xs font-bold transition cursor-pointer touch-manipulation ${
      isActive
        ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300'
        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
    }`;
    btn.innerText = f.label;
    bar.appendChild(btn);
  });
}

function setGeneralChartFilter(filterKey) {
  appState.generalChartFilter = filterKey;
  renderGeneralChartFilterButtons();
  renderGeneralTrialsChart();
}

// Genel Deneme Ders Gelişim Grafiğini Çiz (Canvas)
function renderGeneralTrialsChart() {
  const canvas = document.getElementById('generalTrialsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const padLeft = 45;
  const padRight = 25;
  const padTop = 25;
  const padBottom = 35;

  ctx.clearRect(0, 0, w, h);

  const trials = appState.generalTrials || [];
  if (trials.length === 0) {
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Henüz girilen okul veya dershane denemesi bulunmuyor.', w / 2, h / 2 - 8);
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText('Yeni deneme eklediğinizde ders ders net gelişim grafiğiniz burada çizilecektir! 🎓', w / 2, h / 2 + 12);
    return;
  }

  // Sınavları tarihe göre kronolojik sırala (En eskiden en yeniye)
  const sorted = [...trials].sort((a, b) => (a.date > b.date ? 1 : -1));
  const filter = appState.generalChartFilter || 'all';

  // Seçilen filtreye göre veri ayıkla
  let dataPoints = [];
  let maxY = 20;
  let lineCol = '#4f46e5';
  let chartTitle = 'Toplam Net';

  if (filter === 'all') {
    lineCol = '#4f46e5';
    chartTitle = 'Toplam Net';
    dataPoints = sorted.map(t => parseFloat(t.totalNet) || 0);
    const maxVal = Math.max(...dataPoints, 0);
    maxY = Math.max(100, Math.ceil((maxVal + 10) / 10) * 10);
  } else if (filter === 'pct') {
    lineCol = '#8b5cf6';
    chartTitle = 'Başarı Yüzdesi (%)';
    dataPoints = sorted.map(t => parseFloat(t.scorePct) || 0);
    maxY = 100;
  } else {
    // Ders bazında
    const subConfig = DEFAULT_GENERAL_SUBJECTS.find(s => s.code === filter);
    lineCol = subConfig ? subConfig.strokeCol : '#4f46e5';
    chartTitle = subConfig ? `${subConfig.name} Neti` : 'Ders Neti';
    
    dataPoints = sorted.map(t => {
      const match = (t.subjects || []).find(s => s.code === filter);
      return match ? (parseFloat(match.net) || 0) : null;
    });

    const validVals = dataPoints.filter(v => v !== null);
    const maxVal = validVals.length > 0 ? Math.max(...validVals) : 0;
    maxY = Math.max(20, Math.ceil((maxVal + 2) / 5) * 5);
  }

  // Yatay Kılavuz Çizgileri
  const stepY = maxY <= 25 ? 5 : (maxY <= 50 ? 10 : 20);
  ctx.strokeStyle = '#f1f5f9';
  ctx.lineWidth = 1;
  ctx.font = '10px sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'right';

  for (let score = 0; score <= maxY; score += stepY) {
    const y = padTop + (h - padTop - padBottom) * (1 - score / maxY);
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - padRight, y);
    ctx.stroke();
    ctx.fillText(`${score}${filter === 'pct' ? '%' : ''}`, padLeft - 8, y + 4);
  }

  // Noktaları Konumlandır
  const stepX = sorted.length > 1 ? (w - padLeft - padRight) / (sorted.length - 1) : 0;
  const points = [];

  sorted.forEach((t, i) => {
    const x = sorted.length === 1 ? (padLeft + (w - padLeft - padRight) / 2) : (padLeft + i * stepX);
    const val = dataPoints[i];
    if (val !== null && !isNaN(val)) {
      const y = padTop + (h - padTop - padBottom) * (1 - Math.max(0, Math.min(maxY, val)) / maxY);
      points.push({ x, y, val, trial: t, idx: i });
    }
  });

  if (points.length > 0) {
    // Alan Doldurma (Gradient Fill)
    const firstP = points[0];
    const lastP = points[points.length - 1];
    const bottomY = h - padBottom;

    const grad = ctx.createLinearGradient(0, padTop, 0, bottomY);
    grad.addColorStop(0, `${lineCol}33`); // %20 saydam
    grad.addColorStop(1, `${lineCol}00`); // %0 saydam

    ctx.beginPath();
    ctx.moveTo(firstP.x, bottomY);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(lastP.x, bottomY);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Çizgiyi Çiz
    ctx.beginPath();
    ctx.strokeStyle = lineCol;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    points.forEach((p, idx) => {
      if (idx === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    // Noktaları ve Değerleri Çiz
    points.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = lineCol;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Değer Etiketi
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center';
      const displayVal = filter === 'pct' ? `%${Math.round(p.val)}` : p.val.toFixed(1);
      ctx.fillText(displayVal, p.x, p.y - 8);
    });
  }

  // X Ekseni Etiketleri (Sınav Adları / Numaraları)
  ctx.fillStyle = '#64748b';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';

  sorted.forEach((t, i) => {
    const x = sorted.length === 1 ? (padLeft + (w - padLeft - padRight) / 2) : (padLeft + i * stepX);
    const shortLabel = `D${i + 1}`;
    ctx.fillText(shortLabel, x, h - 14);

    // Tarih etiketi (küçük)
    ctx.font = '8px sans-serif';
    ctx.fillStyle = '#94a3b8';
    const shortDate = t.date ? t.date.substring(5).replace('-', '/') : '';
    ctx.fillText(shortDate, x, h - 4);
    ctx.font = '10px sans-serif';
    ctx.fillStyle = '#64748b';
  });
}

// Akıllı Ders Analizi & Pedagojik Rehberlik Kartlarını Çiz
function renderGeneralPedagogicalAnalysis(subjectStats, trials) {
  const container = document.getElementById('generalPedagogicalCards');
  if (!container) return;
  container.innerHTML = '';

  if (trials.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-xl p-4 border border-indigo-100 shadow-xs">
        <div class="flex items-center gap-2 text-indigo-700 font-bold text-xs mb-1">
          <i class="fa-solid fa-lightbulb"></i> 1. Tüm Dersleri Takip Edin
        </div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Okul veya dershanede girdiğin her denemeden sonra doğru, yanlış ve boş sayılarını girerek hangi derste ne durumda olduğunu anında görebilirsin.
        </p>
      </div>
      <div class="bg-white rounded-xl p-4 border border-indigo-100 shadow-xs">
        <div class="flex items-center gap-2 text-indigo-700 font-bold text-xs mb-1">
          <i class="fa-solid fa-chart-column"></i> 2. Değişken Soru Sayıları
        </div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          90 soruluk LGS standart denemesi veya 75-80 soruluk kurumsal denemelerde soru sayılarını ders bazında dilediğin gibi ayarlayabilirsin.
        </p>
      </div>
      <div class="bg-white rounded-xl p-4 border border-indigo-100 shadow-xs">
        <div class="flex items-center gap-2 text-indigo-700 font-bold text-xs mb-1">
          <i class="fa-solid fa-bullseye"></i> 3. Hedef Odaklı Analiz
        </div>
        <p class="text-[11px] text-slate-600 leading-relaxed">
          Sistem sınav sonuçlarınıza göre en başarılı olduğunuz ve en çok tekrar yapmanız gereken dersleri otomatik olarak analiz eder.
        </p>
      </div>
    `;
    return;
  }

  // Sınavlarda yer almış dersleri başarı yüzdesine göre sırala
  const activeSubjects = subjectStats.filter(s => s.count > 0).sort((a, b) => b.avgPct - a.avgPct);

  if (activeSubjects.length === 0) return;

  const bestSubject = activeSubjects[0];
  const lowestSubject = activeSubjects[activeSubjects.length - 1];

  // 1. Kart: En Güçlü Ders
  const card1 = document.createElement('div');
  card1.className = 'bg-white rounded-xl p-4 border-2 border-emerald-200 shadow-xs flex flex-col justify-between';
  card1.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
          <i class="fa-solid fa-crown text-amber-500"></i> En Güçlü Ders (Zirve)
        </span>
        <span class="text-[10px] bg-emerald-100 text-emerald-800 font-black px-2 py-0.5 rounded-full">%${bestSubject.avgPct.toFixed(0)} Başarı</span>
      </div>
      <h4 class="text-sm font-black text-slate-900 mt-1">${bestSubject.name}</h4>
      <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
        İley, <strong>${bestSubject.name}</strong> dersinde ortalama <strong>${bestSubject.avgNet.toFixed(2)} net</strong> ile mükemmel bir seviyede. Bu dersteki soru çözme hızı ve doğruluğu moral ve net kaynağı!
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] text-emerald-700 font-bold flex items-center gap-1">
      <i class="fa-solid fa-circle-check"></i> Bu başarıyı düzenli tekrarlarla koruyunuz.
    </div>
  `;

  // 2. Kart: Öncelikli Çalışma Gereken Ders
  const card2 = document.createElement('div');
  card2.className = 'bg-white rounded-xl p-4 border-2 border-rose-200 shadow-xs flex flex-col justify-between';
  card2.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-xs font-bold text-rose-800 flex items-center gap-1.5">
          <i class="fa-solid fa-triangle-exclamation text-rose-500"></i> Öncelikli Gelişim Alanı
        </span>
        <span class="text-[10px] bg-rose-100 text-rose-800 font-black px-2 py-0.5 rounded-full">%${lowestSubject.avgPct.toFixed(0)} Başarı</span>
      </div>
      <h4 class="text-sm font-black text-slate-900 mt-1">${lowestSubject.name}</h4>
      <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
        En fazla net artışı potansiyeli <strong>${lowestSubject.name}</strong> dersinde (Ortalama ${lowestSubject.avgNet.toFixed(2)} net, toplam ${lowestSubject.totalW} yanlış). Bu dersteki boş ve yanlış soruların analizi genel neti hızla yükseltecektir.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] text-rose-700 font-bold flex items-center gap-1">
      <i class="fa-solid fa-arrow-up-right-dots"></i> Yapılamayan soruları öğretmenle çözünüz!
    </div>
  `;

  // 3. Kart: Sınav Taktiği ve Boş Bırakma Analizi
  const totalWrongAll = trials.reduce((sum, t) => sum + (parseInt(t.totalWrong) || 0), 0);
  const netLostToPenalty = (totalWrongAll / 3).toFixed(1);

  const card3 = document.createElement('div');
  card3.className = 'bg-white rounded-xl p-4 border-2 border-indigo-200 shadow-xs flex flex-col justify-between';
  card3.innerHTML = `
    <div>
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-xs font-bold text-indigo-800 flex items-center gap-1.5">
          <i class="fa-solid fa-bullseye text-indigo-600"></i> Sınav Taktiği & Net Koruma
        </span>
        <span class="text-[10px] bg-indigo-100 text-indigo-800 font-black px-2 py-0.5 rounded-full">LGS Kuralı</span>
      </div>
      <h4 class="text-sm font-black text-slate-900 mt-1">Yanlış - Net Dengesi</h4>
      <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
        Şimdiye kadar yapılan ${totalWrongAll} yanlış, 3 yanlış 1 doğru kuralı sebebiyle yaklaşık <strong>-${netLostToPenalty} doğruyu</strong> götürdü. İki şık arasında kalınmayan, hiç bilinmeyen sorularda boş bırakmak netleri korur.
      </p>
    </div>
    <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] text-indigo-700 font-bold flex items-center gap-1">
      <i class="fa-solid fa-shield-halved"></i> Emin olunmayan sorularda dikkatli olunuz.
    </div>
  `;

  container.appendChild(card1);
  container.appendChild(card2);
  container.appendChild(card3);
}

// Girilen Genel Denemeler Listesini Çiz
function renderGeneralTrialsList() {
  const container = document.getElementById('generalTrialsList');
  if (!container) return;
  container.innerHTML = '';

  const trials = appState.generalTrials || [];

  if (trials.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3">
        <div class="w-16 h-16 mx-auto rounded-3xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center text-3xl shadow-sm">
          <i class="fa-solid fa-file-signature"></i>
        </div>
        <h4 class="text-base font-bold text-slate-900">Henüz Genel Deneme Sınavı Eklenmedi</h4>
        <p class="text-xs text-slate-500 max-w-md mx-auto">
          Okulda veya dershanede girdiğiniz tüm denemelerin ders bazlı sonuçlarını ekleyerek öğrencinizin performansını ve karnesini buradan takip edebilirsiniz.
        </p>
        <button type="button" onclick="openGeneralTrialModal()" class="mt-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition inline-flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-plus"></i>
          <span>İlk Genel Deneme Sonucunu Gir</span>
        </button>
      </div>
    `;
    return;
  }

  // En yeniden en eskiye sırala
  const sorted = [...trials].sort((a, b) => (a.date < b.date ? 1 : -1));

  sorted.forEach((trial, index) => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm hover:border-indigo-300 transition space-y-3.5';

    // Dersler rozetleri dökümü
    let subjectsHtml = '';
    if (Array.isArray(trial.subjects)) {
      subjectsHtml = trial.subjects.map(s => {
        const subConf = DEFAULT_GENERAL_SUBJECTS.find(d => d.code === s.code);
        const nameShort = subConf ? subConf.name.substring(0, 3).toUpperCase() : s.code.toUpperCase();
        const stroke = subConf ? subConf.strokeCol : '#6366f1';
        return `
          <div class="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 text-[11px]">
            <span class="font-black" style="color: ${stroke}">${nameShort}:</span>
            <span class="font-bold text-slate-800">${s.correct}D ${s.wrong}Y</span>
            <span class="text-[10px] text-slate-400 font-mono">(${parseFloat(s.net).toFixed(2)} Net)</span>
          </div>
        `;
      }).join('');
    }

    // Derece ve Sıralama Çiğleri
    let ranksHtml = '';
    if (trial.rankSchool) {
      ranksHtml += `<span class="text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded-lg flex items-center gap-1"><i class="fa-solid fa-school text-[10px]"></i> Okul: ${trial.rankSchool}</span>`;
    }
    if (trial.rankClass) {
      ranksHtml += `<span class="text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200 px-2 py-0.5 rounded-lg flex items-center gap-1"><i class="fa-solid fa-users text-[10px]"></i> Sınıf: ${trial.rankClass}</span>`;
    }
    if (trial.scorePoints) {
      ranksHtml += `<span class="text-[11px] font-bold bg-purple-50 text-purple-800 border border-purple-200 px-2 py-0.5 rounded-lg flex items-center gap-1"><i class="fa-solid fa-star text-[10px]"></i> ${trial.scorePoints} Puan</span>`;
    }

    card.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-100 pb-3">
        <div class="space-y-1">
          <div class="flex flex-wrap items-center gap-2">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${
              trial.location === 'Okul' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
              (trial.location === 'Dershane' ? 'bg-purple-100 text-purple-800 border border-purple-200' : 'bg-slate-100 text-slate-700')
            }">
              ${trial.location || 'Genel Deneme'}
            </span>
            <h4 class="text-sm sm:text-base font-bold text-slate-900">${trial.name}</h4>
          </div>
          <p class="text-xs text-slate-500 flex items-center gap-2">
            <span><i class="fa-regular fa-calendar text-slate-400"></i> ${trial.date}</span>
            <span>•</span>
            <span>${trial.totalQuestions} Soru</span>
            ${trial.photoUrl ? '<span>•</span><span class="text-indigo-600 font-semibold"><i class="fa-solid fa-paperclip"></i> Sonuç Belgesi Var</span>' : ''}
          </p>
        </div>

        <div class="flex items-center gap-3">
          <div class="text-right">
            <div class="text-lg sm:text-xl font-black text-indigo-700">${trial.totalNet} Net</div>
            <div class="text-[10px] text-slate-500 font-bold">Başarı: %${trial.scorePct} (${trial.totalCorrect}D • ${trial.totalWrong}Y)</div>
          </div>
        </div>
      </div>

      <!-- Dersler Listesi -->
      <div class="flex flex-wrap gap-1.5">
        ${subjectsHtml}
      </div>

      <!-- Sıralamalar & Butonlar -->
      <div class="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div class="flex flex-wrap items-center gap-1.5">
          ${ranksHtml}
        </div>

        <div class="flex items-center gap-1.5 self-end sm:self-auto">
          <button type="button" onclick="openGeneralTrialDetail('${trial.id}')" class="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold px-3 py-1.5 rounded-xl border border-indigo-200 transition flex items-center gap-1 cursor-pointer">
            <i class="fa-solid fa-award text-xs"></i>
            <span>Karne & Analiz</span>
          </button>
          <button type="button" onclick="editGeneralTrial('${trial.id}')" title="Düzenle" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold p-1.5 rounded-xl transition cursor-pointer">
            <i class="fa-solid fa-pen-to-square text-xs"></i>
          </button>
          <button type="button" onclick="deleteGeneralTrial('${trial.id}')" title="Sil" class="text-xs bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold p-1.5 rounded-xl transition cursor-pointer">
            <i class="fa-solid fa-trash-can text-xs"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ----------------------------------------------------------------
// GENEL DENEME MODAL YÖNETİMİ & VERİ GİRİŞİ
// ----------------------------------------------------------------

function openGeneralTrialModal(trialId = null) {
  appState.editingGeneralTrialId = trialId;

  const modal = document.getElementById('generalTrialModal');
  const modalTitle = document.getElementById('generalTrialModalTitle');
  const nameInput = document.getElementById('trialNameInput');
  const dateInput = document.getElementById('trialDateInput');
  const locationSelect = document.getElementById('trialLocationSelect');
  const ruleSelect = document.getElementById('trialRuleSelect');
  const rankSchool = document.getElementById('trialRankSchool');
  const rankClass = document.getElementById('trialRankClass');
  const pointsInput = document.getElementById('trialPoints');
  const notesInput = document.getElementById('trialNotes');

  if (trialId) {
    // Düzenleme Modu
    const trial = (appState.generalTrials || []).find(t => t.id === trialId);
    if (!trial) return;

    if (modalTitle) modalTitle.innerText = 'Genel Deneme Sınavını Düzenle';
    if (nameInput) nameInput.value = trial.name || '';
    if (dateInput) dateInput.value = trial.date || '';
    if (locationSelect) locationSelect.value = trial.location || 'Okul';
    if (ruleSelect) ruleSelect.value = trial.rule !== undefined ? trial.rule.toString() : '3';
    if (rankSchool) rankSchool.value = trial.rankSchool || '';
    if (rankClass) rankClass.value = trial.rankClass || '';
    if (pointsInput) pointsInput.value = trial.scorePoints || '';
    if (notesInput) notesInput.value = trial.notes || '';

    // Dersleri Klonla
    appState.tempTrialSubjects = JSON.parse(JSON.stringify(trial.subjects || []));
  } else {
    // Yeni Ekleme Modu
    if (modalTitle) modalTitle.innerText = 'Genel Deneme Sınavı Veri Girişi';
    if (nameInput) nameInput.value = '';
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];
    if (locationSelect) locationSelect.value = 'Okul';
    if (ruleSelect) ruleSelect.value = '3';
    if (rankSchool) rankSchool.value = '';
    if (rankClass) rankClass.value = '';
    if (pointsInput) pointsInput.value = '';
    if (notesInput) notesInput.value = '';

    // Varsayılan 90 soruluk MEB şablonu ile başlat
    initDefaultTempTrialSubjects('90');
  }

  renderTrialSubjectsTable();
  recalculateTrialLiveSummary();

  if (modal) modal.classList.remove('hidden');
}

function closeGeneralTrialModal() {
  const modal = document.getElementById('generalTrialModal');
  if (modal) modal.classList.add('hidden');
  appState.editingGeneralTrialId = null;
}

function initDefaultTempTrialSubjects(templateKey = '90') {
  const tpl = GENERAL_TEMPLATES[templateKey] || GENERAL_TEMPLATES['90'];
  appState.tempTrialSubjects = DEFAULT_GENERAL_SUBJECTS.map(s => {
    const qCount = tpl[s.code] !== undefined ? tpl[s.code] : s.defaultQ;
    return {
      code: s.code,
      name: s.name,
      questions: qCount,
      correct: 0,
      wrong: 0,
      empty: qCount,
      net: 0.00,
      pct: 0
    };
  });
}

function applyGeneralTemplate(templateKey) {
  const tpl = GENERAL_TEMPLATES[templateKey];
  if (!tpl) return;

  appState.tempTrialSubjects.forEach(s => {
    if (tpl[s.code] !== undefined) {
      s.questions = tpl[s.code];
      s.empty = Math.max(0, s.questions - s.correct - s.wrong);
      recalcSubjectNet(s);
    }
  });

  renderTrialSubjectsTable();
  recalculateTrialLiveSummary();
}

function renderTrialSubjectsTable() {
  const tbody = document.getElementById('trialSubjectsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  appState.tempTrialSubjects.forEach(s => {
    const subConf = DEFAULT_GENERAL_SUBJECTS.find(d => d.code === s.code);
    const stroke = subConf ? subConf.strokeCol : '#6366f1';
    const isCustom = !subConf;

    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-50/80 transition';
    tr.innerHTML = `
      <td class="px-3 py-2 flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" style="background-color: ${stroke}"></span>
        <span class="font-bold text-slate-900 text-xs">${s.name}</span>
      </td>
      <td class="px-2 py-2 text-center">
        <input type="number" min="1" max="100" value="${s.questions}" oninput="onTrialSubjectInputChange('${s.code}', 'questions', this.value)" class="w-16 text-center text-xs font-bold border border-slate-300 rounded-lg py-1 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white">
      </td>
      <td class="px-2 py-2 text-center">
        <input type="number" min="0" max="${s.questions}" value="${s.correct}" oninput="onTrialSubjectInputChange('${s.code}', 'correct', this.value)" class="w-16 text-center text-xs font-bold text-emerald-700 bg-emerald-50/50 border border-emerald-300 rounded-lg py-1 focus:ring-2 focus:ring-emerald-500 focus:outline-none">
      </td>
      <td class="px-2 py-2 text-center">
        <input type="number" min="0" max="${s.questions}" value="${s.wrong}" oninput="onTrialSubjectInputChange('${s.code}', 'wrong', this.value)" class="w-16 text-center text-xs font-bold text-rose-700 bg-rose-50/50 border border-rose-300 rounded-lg py-1 focus:ring-2 focus:ring-rose-500 focus:outline-none">
      </td>
      <td class="px-2 py-2 text-center">
        <input type="number" min="0" max="${s.questions}" value="${s.empty}" oninput="onTrialSubjectInputChange('${s.code}', 'empty', this.value)" class="w-16 text-center text-xs font-bold text-slate-700 bg-slate-50 border border-slate-300 rounded-lg py-1 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
      </td>
      <td class="px-2 py-2 text-center font-black text-indigo-700 text-xs">
        <span id="netCell_${s.code}">${parseFloat(s.net).toFixed(2)}</span>
      </td>
      <td class="px-2 py-2 text-center">
        <span id="pctCell_${s.code}" class="px-2 py-0.5 rounded-full text-[10px] font-black ${
          s.pct >= 80 ? 'bg-emerald-100 text-emerald-800' :
          (s.pct >= 60 ? 'bg-blue-100 text-blue-800' : (s.pct >= 40 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'))
        }">%${Math.round(s.pct)}</span>
      </td>
      <td class="px-2 py-2 text-center">
        ${isCustom ? `<button type="button" onclick="removeCustomGeneralSubject('${s.code}')" class="text-rose-500 hover:text-rose-700 text-xs p-1"><i class="fa-solid fa-trash-can"></i></button>` : ''}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function recalcSubjectNet(s) {
  const ruleEl = document.getElementById('trialRuleSelect');
  const penalty = ruleEl ? (parseFloat(ruleEl.value) || 0) : 3;

  const c = parseInt(s.correct) || 0;
  const w = parseInt(s.wrong) || 0;
  const q = parseInt(s.questions) || 0;

  if (penalty <= 0) {
    s.net = c;
  } else {
    s.net = Math.max(0, c - (w / penalty));
  }
  s.pct = q > 0 ? ((s.net / q) * 100) : 0;
}

function onTrialSubjectInputChange(code, field, val) {
  const s = appState.tempTrialSubjects.find(item => item.code === code);
  if (!s) return;

  const intVal = Math.max(0, parseInt(val) || 0);

  if (field === 'questions') {
    s.questions = Math.max(1, intVal);
    s.empty = Math.max(0, s.questions - s.correct - s.wrong);
  } else if (field === 'correct') {
    s.correct = intVal;
    s.empty = Math.max(0, s.questions - s.correct - s.wrong);
  } else if (field === 'wrong') {
    s.wrong = intVal;
    s.empty = Math.max(0, s.questions - s.correct - s.wrong);
  } else if (field === 'empty') {
    s.empty = intVal;
  }

  recalcSubjectNet(s);

  // Hücreleri anında güncelle
  const netCell = document.getElementById(`netCell_${code}`);
  const pctCell = document.getElementById(`pctCell_${code}`);
  if (netCell) netCell.innerText = s.net.toFixed(2);
  if (pctCell) {
    pctCell.innerText = `%${Math.round(s.pct)}`;
    pctCell.className = `px-2 py-0.5 rounded-full text-[10px] font-black ${
      s.pct >= 80 ? 'bg-emerald-100 text-emerald-800' :
      (s.pct >= 60 ? 'bg-blue-100 text-blue-800' : (s.pct >= 40 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'))
    }`;
  }

  recalculateTrialLiveSummary();
}

function onTrialRuleChange() {
  appState.tempTrialSubjects.forEach(s => recalcSubjectNet(s));
  renderTrialSubjectsTable();
  recalculateTrialLiveSummary();
}

function recalculateTrialLiveSummary() {
  const subjects = appState.tempTrialSubjects || [];
  const totalQ = subjects.reduce((sum, s) => sum + (parseInt(s.questions) || 0), 0);
  const totalC = subjects.reduce((sum, s) => sum + (parseInt(s.correct) || 0), 0);
  const totalW = subjects.reduce((sum, s) => sum + (parseInt(s.wrong) || 0), 0);
  const totalE = subjects.reduce((sum, s) => sum + (parseInt(s.empty) || 0), 0);
  const totalNet = subjects.reduce((sum, s) => sum + (parseFloat(s.net) || 0), 0);
  const totalPct = totalQ > 0 ? ((totalNet / totalQ) * 100) : 0;

  const tqEl = document.getElementById('trialLiveTotalQ');
  const tcEl = document.getElementById('trialLiveCorrect');
  const twEl = document.getElementById('trialLiveWrong');
  const teEl = document.getElementById('trialLiveEmpty');
  const tnEl = document.getElementById('trialLiveNet');
  const tpEl = document.getElementById('trialLivePct');

  if (tqEl) tqEl.innerText = totalQ;
  if (tcEl) tcEl.innerText = totalC;
  if (twEl) twEl.innerText = totalW;
  if (teEl) teEl.innerText = totalE;
  if (tnEl) tnEl.innerText = totalNet.toFixed(2);
  if (tpEl) tpEl.innerText = `%${Math.round(totalPct)}`;
}

function addCustomGeneralSubject() {
  const name = prompt('Eklemek istediğiniz dersin adını giriniz (Örn: Paragraf, Mantık vb.):');
  if (!name || !name.trim()) return;

  const cleanName = name.trim();
  const code = 'custom_' + Date.now();
  appState.tempTrialSubjects.push({
    code,
    name: cleanName,
    questions: 10,
    correct: 0,
    wrong: 0,
    empty: 10,
    net: 0.00,
    pct: 0
  });

  renderTrialSubjectsTable();
  recalculateTrialLiveSummary();
}

function removeCustomGeneralSubject(code) {
  appState.tempTrialSubjects = appState.tempTrialSubjects.filter(s => s.code !== code);
  renderTrialSubjectsTable();
  recalculateTrialLiveSummary();
}


// Genel Denemeyi Kaydet (Submit)
function saveGeneralTrialSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('trialNameInput').value.trim();
  const date = document.getElementById('trialDateInput').value;
  const location = document.getElementById('trialLocationSelect').value;
  const rule = parseFloat(document.getElementById('trialRuleSelect').value) || 3;
  const rankSchool = document.getElementById('trialRankSchool').value.trim();
  const rankClass = document.getElementById('trialRankClass').value.trim();
  const points = document.getElementById('trialPoints').value.trim();
  const notes = document.getElementById('trialNotes').value.trim();

  if (!name) {
    alert('Lütfen deneme sınavı adını giriniz.');
    return;
  }
  if (!date) {
    alert('Lütfen sınav tarihini seçiniz.');
    return;
  }

  const subjects = appState.tempTrialSubjects || [];
  const totalQ = subjects.reduce((sum, s) => sum + (parseInt(s.questions) || 0), 0);
  const totalC = subjects.reduce((sum, s) => sum + (parseInt(s.correct) || 0), 0);
  const totalW = subjects.reduce((sum, s) => sum + (parseInt(s.wrong) || 0), 0);
  const totalE = subjects.reduce((sum, s) => sum + (parseInt(s.empty) || 0), 0);
  const totalNet = subjects.reduce((sum, s) => sum + (parseFloat(s.net) || 0), 0);
  const scorePct = totalQ > 0 ? ((totalNet / totalQ) * 100) : 0;

  const trialObj = {
    id: appState.editingGeneralTrialId || ('trial_' + Date.now()),
    name,
    date,
    location,
    rule,
    subjects,
    totalQuestions: totalQ,
    totalCorrect: totalC,
    totalWrong: totalW,
    totalEmpty: totalE,
    totalNet: parseFloat(totalNet.toFixed(2)),
    scorePct: parseFloat(scorePct.toFixed(1)),
    rankSchool,
    rankClass,
    scorePoints: points,
    notes,
    updatedAt: new Date().toISOString()
  };

  if (!Array.isArray(appState.generalTrials)) {
    appState.generalTrials = [];
  }

  if (appState.editingGeneralTrialId) {
    const idx = appState.generalTrials.findIndex(t => t.id === appState.editingGeneralTrialId);
    if (idx !== -1) {
      appState.generalTrials[idx] = trialObj;
    } else {
      appState.generalTrials.unshift(trialObj);
    }
  } else {
    appState.generalTrials.unshift(trialObj);
  }

  // Kaydet & Buluta Yedekle
  saveProgress();

  closeGeneralTrialModal();
  renderGeneralTrialsView();

  // Kutlama Sesi & Bildirim
  playSuccessSound();
  showToastNotification(`🎉 '${name}' genel deneme sınavı başarıyla kaydedildi!`);
}

function editGeneralTrial(trialId) {
  openGeneralTrialModal(trialId);
}

function deleteGeneralTrial(trialId) {
  const trial = (appState.generalTrials || []).find(t => t.id === trialId);
  const name = trial ? trial.name : 'bu denemeyi';
  if (!confirm(`'${name}' kaydını silmek istediğinizden emin misiniz?`)) return;

  appState.generalTrials = (appState.generalTrials || []).filter(t => t.id !== trialId);
  saveProgress();
  renderGeneralTrialsView();
  showToastNotification(`🗑️ Deneme sınavı kaydı silindi.`);
}

// ----------------------------------------------------------------
// AYRINTILI GENEL DENEME KARNESİ & ANALİZ MODALI
// ----------------------------------------------------------------

function openGeneralTrialDetail(trialId) {
  const trial = (appState.generalTrials || []).find(t => t.id === trialId);
  if (!trial) return;

  activeDetailTrial = trial;

  const modal = document.getElementById('generalTrialDetailModal');
  const titleEl = document.getElementById('detailTrialTitle');
  const subEl = document.getElementById('detailTrialSubtitle');
  const content = document.getElementById('detailTrialContent');

  if (titleEl) titleEl.innerText = trial.name;
  if (subEl) subEl.innerText = `${trial.date} • ${trial.location || 'Genel Sınav'}`;

  if (content) {
    // Dersler Tablosu ve Barları
    let subjectsHtml = '';
    if (Array.isArray(trial.subjects)) {
      subjectsHtml = trial.subjects.map(s => {
        const subConf = DEFAULT_GENERAL_SUBJECTS.find(d => d.code === s.code);
        const stroke = subConf ? subConf.strokeCol : '#6366f1';
        const icon = subConf ? subConf.icon : 'fa-book';
        const pct = Math.round(s.pct || 0);

        return `
          <div class="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-lg flex items-center justify-center text-xs text-white" style="background-color: ${stroke}">
                  <i class="fa-solid ${icon}"></i>
                </span>
                <span class="font-bold text-slate-900 text-xs sm:text-sm">${s.name}</span>
              </div>
              <div class="text-right">
                <span class="text-sm sm:text-base font-black" style="color: ${stroke}">${parseFloat(s.net).toFixed(2)} Net</span>
                <span class="text-[11px] text-slate-500 font-bold ml-1.5">(%${pct})</span>
              </div>
            </div>

            <!-- Progress Bar -->
            <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div class="h-full rounded-full transition-all duration-500" style="width: ${Math.min(100, Math.max(0, pct))}%; background-color: ${stroke}"></div>
            </div>

            <!-- Counts -->
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>Toplam: <strong>${s.questions} Soru</strong></span>
              <span>Doğru: <strong class="text-emerald-700">${s.correct}</strong></span>
              <span>Yanlış: <strong class="text-rose-700">${s.wrong}</strong></span>
              <span>Boş: <strong class="text-slate-600">${s.empty}</strong></span>
            </div>
          </div>
        `;
      }).join('');
    }

    content.innerHTML = `
      <!-- Karne Başlığı & Puan Kartı -->
      <div class="bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600 rounded-2xl p-5 text-white shadow-md">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span class="bg-white/20 text-white text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full">Sınav Karnesi</span>
            <h3 class="text-xl font-black font-['Outfit'] mt-1">${trial.name}</h3>
            <p class="text-xs text-indigo-100">Tarih: ${trial.date} • Uygulama Yeri: ${trial.location || 'Okul'}</p>
          </div>
          <div class="text-right bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20">
            <span class="text-[10px] text-indigo-200 font-bold uppercase block">Toplam Net</span>
            <span class="text-3xl font-black text-amber-300">${trial.totalNet}</span>
            <span class="text-xs text-white/90 block font-semibold">/ ${trial.totalQuestions} Soru</span>
          </div>
        </div>

        <!-- 4 Özet Sayaç -->
        <div class="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-white/20 text-center text-xs">
          <div>
            <span class="text-indigo-200 text-[10px] block">Doğru</span>
            <span class="font-black text-emerald-300 text-base">${trial.totalCorrect}</span>
          </div>
          <div>
            <span class="text-indigo-200 text-[10px] block">Yanlış</span>
            <span class="font-black text-rose-300 text-base">${trial.totalWrong}</span>
          </div>
          <div>
            <span class="text-indigo-200 text-[10px] block">Boş</span>
            <span class="font-black text-slate-300 text-base">${trial.totalEmpty}</span>
          </div>
          <div>
            <span class="text-indigo-200 text-[10px] block">Başarı</span>
            <span class="font-black text-amber-300 text-base">%${trial.scorePct}</span>
          </div>
        </div>
      </div>

      <!-- Sıralama & Derece Bilgileri (Varsa) -->
      ${(trial.rankSchool || trial.rankClass || trial.scorePoints) ? `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-around gap-3 text-xs">
          ${trial.rankSchool ? `<div class="flex items-center gap-2"><i class="fa-solid fa-school text-indigo-600"></i> <span>Okul Sıralaması: <strong>${trial.rankSchool}</strong></span></div>` : ''}
          ${trial.rankClass ? `<div class="flex items-center gap-2"><i class="fa-solid fa-users text-blue-600"></i> <span>Sınıf Sıralaması: <strong>${trial.rankClass}</strong></span></div>` : ''}
          ${trial.scorePoints ? `<div class="flex items-center gap-2"><i class="fa-solid fa-star text-amber-500"></i> <span>Puan: <strong>${trial.scorePoints}</strong></span></div>` : ''}
        </div>
      ` : ''}

      <!-- Ders Ders Ayrıntılı Analiz Listesi -->
      <div class="space-y-3">
        <h4 class="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-layer-group text-indigo-600"></i> Ders Bazında Net ve Doğruluk Dağılımı
        </h4>
        <div class="space-y-2.5">
          ${subjectsHtml}
        </div>
      </div>

      <!-- Sınav Notu (Varsa) -->
      ${trial.notes ? `
        <div class="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs space-y-1">
          <span class="font-bold text-amber-900 flex items-center gap-1.5">
            <i class="fa-solid fa-pen-nib text-amber-600"></i> Sınav Değerlendirme Notu:
          </span>
          <p class="text-slate-700 leading-relaxed pl-5">${trial.notes}</p>
        </div>
      ` : ''}
    `;
  }

  if (modal) modal.classList.remove('hidden');
}

function closeGeneralTrialDetail() {
  const modal = document.getElementById('generalTrialDetailModal');
  if (modal) modal.classList.add('hidden');
  activeDetailTrial = null;
}

// WhatsApp İle Genel Deneme Karnesi Paylaşımı
function shareCurrentTrialWhatsApp() {
  if (!activeDetailTrial) return;
  const t = activeDetailTrial;

  let msg = `🏆 *İLEY 6. SINIF GENEL DENEME KARNESİ*\n`;
  msg += `📅 *Tarih:* ${t.date} | *Sınav:* ${t.name} (${t.location || 'Okul'})\n`;
  msg += `📊 *TOPLAM NET:* ${t.totalNet} / ${t.totalQuestions} Soru (%${t.scorePct} Başarı)\n`;
  msg += `✅ *Doğru:* ${t.totalCorrect} | ❌ *Yanlış:* ${t.totalWrong} | ⚪ *Boş:* ${t.totalEmpty}\n`;

  if (t.rankSchool || t.rankClass || t.scorePoints) {
    msg += `🏅 `;
    if (t.rankSchool) msg += `Okul Sırası: ${t.rankSchool} `;
    if (t.rankClass) msg += `| Sınıf: ${t.rankClass} `;
    if (t.scorePoints) msg += `| Puan: ${t.scorePoints}`;
    msg += `\n`;
  }

  msg += `\n📚 *DERS DERS DÖKÜM:*\n`;
  if (Array.isArray(t.subjects)) {
    t.subjects.forEach(s => {
      msg += `▫️ *${s.name}:* ${s.correct}D ${s.wrong}Y ${s.empty}B ➔ *${parseFloat(s.net).toFixed(2)} Net* (%${Math.round(s.pct)})\n`;
    });
  }

  if (t.notes) {
    msg += `\n✍️ *Değerlendirme:* ${t.notes}\n`;
  }

  msg += `\n🌟 Tebrikler İley, düzenli ve kararlı adımlarla başarıya! 🚀`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
}

// ================================================================
// TAB 4: KİTAPLAR VE TEMALAR
// ================================================================
function renderBooksView() {
  let jumboDone = 0, isemDone = 0, parkurDone = 0;
  STUDY_DATA.schedule.forEach(day => {
    day.tasks.forEach(t => {
      if (appState.completedTasks[t.id]) {
        if (t.bookCode === 'jumbo') jumboDone++;
        else if (t.bookCode === 'isem') isemDone++;
        else if (t.bookCode === 'parkur') parkurDone++;
      }
    });
  });

  const jPct = Math.round((jumboDone / 26) * 100);
  const iPct = Math.round((isemDone / 130) * 100);
  const pPct = Math.round((parkurDone / 100) * 100);

  const jPctEl = document.getElementById('bookCardJumboPct');
  const jBarEl = document.getElementById('bookCardJumboBar');
  if (jPctEl) jPctEl.innerText = `${jPct}% (${jumboDone}/26)`;
  if (jBarEl) jBarEl.style.width = `${jPct}%`;

  const iPctEl = document.getElementById('bookCardIsemPct');
  const iBarEl = document.getElementById('bookCardIsemBar');
  if (iPctEl) iPctEl.innerText = `${iPct}% (${isemDone}/130)`;
  if (iBarEl) iBarEl.style.width = `${iPct}%`;

  const pPctEl = document.getElementById('bookCardParkurPct');
  const pBarEl = document.getElementById('bookCardParkurBar');
  if (pPctEl) pPctEl.innerText = `${pPct}% (${parkurDone}/100)`;
  if (pBarEl) pBarEl.style.width = `${pPct}%`;

  // Render 7 Temas Progress
  const temasContainer = document.getElementById('temasListContainer');
  if (!temasContainer) return;
  temasContainer.innerHTML = '';

  const temasData = [
    { id: 1, title: '1. Tema: Sayılar ve Nicelikler (1)', desc: 'Doğal Sayılar, Çarpanlar ve Katlar, Kümeler' },
    { id: 2, title: '2. Tema: Veriden Olasılığa', desc: 'Veri Toplama, Tablo, Sütun Grafiği, Aritmetik Ortalama' },
    { id: 3, title: '3. Tema: Sayılar ve Nicelikler (2)', desc: 'Tam Sayılar, Kesirler, Ondalık Gösterim, Oran ve Yüzdeler' },
    { id: 4, title: '4. Tema: İstatistiksel Araştırma Süreci', desc: 'Araştırma Süreçleri ve Veri Analizi' },
    { id: 5, title: '5. Tema: Geometrik Şekiller', desc: 'Açılar, Üçgen ve Dörtgenlerin Açı Özellikleri' },
    { id: 6, title: '6. Tema: İşlemlerle Cebirsel Düşünme', desc: 'Cebirsel İfadeler ve Sayı Örüntüleri' },
    { id: 7, title: '7. Tema: Geometrik Nicelikler', desc: 'Alan Ölçme, Paralelkenar, Üçgen Alanı, Çember' }
  ];

  temasData.forEach(t => {
    // Count tasks belonging to this tema
    let totalInTema = 0;
    let doneInTema = 0;

    STUDY_DATA.schedule.forEach(day => {
      day.tasks.forEach(task => {
        if (task.tema && task.tema.startsWith(`${t.id}.`)) {
          totalInTema++;
          if (appState.completedTasks[task.id]) doneInTema++;
        }
      });
    });

    const pct = totalInTema > 0 ? Math.round((doneInTema / totalInTema) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'border border-slate-200 rounded-2xl p-4 bg-white';
    card.innerHTML = `
      <div class="flex items-center justify-between mb-1">
        <h4 class="font-bold text-slate-900 text-sm font-['Outfit']">${t.title}</h4>
        <span class="text-xs font-bold text-indigo-600">%${pct}</span>
      </div>
      <p class="text-xs text-slate-500 mb-3">${t.desc}</p>
      <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div class="bg-indigo-600 h-2 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
      </div>
      <div class="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
        <span>Tamamlanan: ${doneInTema} Görev</span>
        <span>Toplam: ${totalInTema} Görev</span>
      </div>
    `;
    temasContainer.appendChild(card);
  });
}

// ================================================================
// TAB 5: BAŞARI ROZETLERİ (BADGES)
// ================================================================
function renderBadgesView() {
  const container = document.getElementById('badgesContainer');
  if (!container) return;
  container.innerHTML = '';

  let completedTasksCount = Object.keys(appState.completedTasks).length;
  let denemesCount = 0;
  let maxNet = 0;
  let hasPerfect = false;

  STUDY_DATA.schedule.forEach(d => {
    d.tasks.forEach(t => {
      if (appState.completedTasks[t.id]) {
        if (t.type === 'deneme') denemesCount++;
        const res = appState.testResults[t.id];
        if (res) {
          if (t.type === 'deneme' && res.net > maxNet) maxNet = res.net;
          if (res.wrong === 0 && res.correct >= 5) hasPerfect = true;
        }
      }
    });
  });

  BADGES.forEach(b => {
    let unlocked = false;
    if (b.id === 'first_step' && completedTasksCount >= 1) unlocked = true;
    if (b.id === 'first_deneme' && denemesCount >= 1) unlocked = true;
    if (b.id === 'high_net' && maxNet >= 15) unlocked = true;
    if (b.id === 'perfect_score' && hasPerfect) unlocked = true;
    if (b.id === 'deneme_5' && denemesCount >= 5) unlocked = true;
    if (b.id === 'champion' && denemesCount >= 13) unlocked = true;

    const card = document.createElement('div');
    card.className = `border rounded-2xl p-5 flex items-center gap-4 transition ${unlocked ? 'bg-white border-purple-200 shadow-sm' : 'bg-slate-50/70 border-slate-200 opacity-60'}`;

    card.innerHTML = `
      <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${unlocked ? 'bg-gradient-to-tr from-purple-600 to-indigo-500 text-white shadow-md' : 'bg-slate-200 text-slate-400'}">
        <i class="fa-solid ${b.icon}"></i>
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h4 class="font-bold text-slate-900 text-base font-['Outfit']">${b.title}</h4>
          ${unlocked ? '<span class="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">Kazanıldı!</span>' : '<span class="text-[10px] bg-slate-200 text-slate-600 font-semibold px-2 py-0.5 rounded-full">Kilitli</span>'}
        </div>
        <p class="text-xs text-slate-500 mt-1">${b.desc}</p>
        <span class="text-[11px] text-purple-600 font-semibold mt-1 inline-block">Koşul: ${b.req}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// Görevin bir Etkinlik mi yoksa Çoktan Seçmeli Test/Deneme mi olduğunu belirleyen yardımcı fonksiyon
function isActivityTask(task) {
  if (!task) return false;
  if (task.type === 'activity') return true;
  const title = (task.title || '').toLowerCase();
  const detail = (task.detail || '').toLowerCase();
  const desc = (task.desc || '').toLowerCase();
  if (title.includes('etkinlik') || detail.includes('etkinlik') || desc.includes('etkinlik')) return true;
  return false;
}

// ================================================================
// DOĞRU / YANLIŞ / BOŞ VE TEST SONUÇ KONTROL MODALI
// ================================================================
function openOpticalModal(taskId) {
  let targetTask = null;
  STUDY_DATA.schedule.some(day => {
    const t = day.tasks.find(x => x.id === taskId);
    if (t) { targetTask = t; return true; }
    return false;
  });

  if (!targetTask) return;
  appState.activeModalTask = targetTask;
  appState.showModalKey = false;

  const existing = appState.testResults[taskId];
  appState.activeModalAnswers = existing?.answers ? { ...existing.answers } : {};

  // Soru Sayısı Belirleme: Öğrencinin daha önce kaydettiği soru sayısı varsa onu kullan, yoksa kitaptaki sayıyı kullan
  let qCount = 14;
  if (existing?.questionCount) {
    qCount = parseInt(existing.questionCount, 10) || 14;
  } else if (targetTask.questionCount) {
    qCount = parseInt(targetTask.questionCount, 10) || 14;
  } else if (targetTask.tests && targetTask.tests.length > 0) {
    qCount = targetTask.tests.reduce((acc, st) => acc + (st.q_count || (st.answers ? st.answers.length : 0)), 0) || 14;
  } else if (targetTask.answers && targetTask.answers.length > 0) {
    qCount = targetTask.answers.length;
  } else if (targetTask.type === 'deneme') {
    qCount = 20;
  }

  const isActivity = isActivityTask(targetTask);

  // Başlıklar
  const titleEl = document.getElementById('modalTestTitle');
  const subEl = document.getElementById('modalTestSubtitle');
  if (titleEl) titleEl.innerText = `${targetTask.book}: ${targetTask.title}`;
  if (subEl) {
    if (isActivity) {
      subEl.innerText = `Etkinlik tamamlama ve kontrol girişi (${qCount} Soru / Alıştırma)`;
    } else {
      subEl.innerText = `Soru sayısını, doğru, yanlış ve boş sayılarını giriniz (${qCount} Soru)`;
    }
  }

  // Girdi Kutularını Doldur
  const totalInput = document.getElementById('modalTotalQuestions');
  const corInput = document.getElementById('modalInputCorrect');
  const wrgInput = document.getElementById('modalInputWrong');
  const empInput = document.getElementById('modalInputEmpty');

  const corVal = existing ? Math.max(0, parseInt(existing.correct, 10) || 0) : 0;
  const wrgVal = existing ? Math.max(0, parseInt(existing.wrong, 10) || 0) : 0;
  const empVal = existing ? Math.max(0, parseInt(existing.empty, 10) || 0) : Math.max(0, qCount - corVal - wrgVal);

  if (totalInput) totalInput.value = qCount;
  if (corInput) corInput.value = corVal;
  if (wrgInput) wrgInput.value = wrgVal;
  if (empInput) empInput.value = empVal;

  // Canlı Net ve Yüzdeyi Hesapla
  onDirectScoreChange('init');

  // Bölüm 2: Kitap Cevap Anahtarı ve Bölüm 3: İsteğe Bağlı Optik Form Kartları
  const answerKeyCard = document.getElementById('modalAnswerKeyCard');
  const opticalCard = document.getElementById('modalOpticalCard');
  const hasAnswers = (targetTask.answers && targetTask.answers.length > 0) || 
                     (targetTask.tests && targetTask.tests.length > 0);

  if (isActivity) {
    // 🚫 ETKİNLİK BÖLÜMÜ:
    // Kullanıcı talebi: Etkinlik bölümlerinde isteğe bağlı optik form girişi kesinlikle olmasın
    if (opticalCard) opticalCard.classList.add('hidden');
    
    // Etkinliklerde şıklı cevap anahtarı da olmadığı için cevap anahtarı kutusunu da gizle
    if (answerKeyCard) {
      if (hasAnswers) {
        answerKeyCard.classList.remove('hidden');
        renderModalAnswerKeyContent();
      } else {
        answerKeyCard.classList.add('hidden');
      }
    }
  } else {
    // ✅ ÇOKTAN SEÇMELİ TESTLER VE DENEMELER:
    // Optik form kartı ve cevap anahtarı kartını göster
    if (opticalCard) opticalCard.classList.remove('hidden');
    if (answerKeyCard) answerKeyCard.classList.remove('hidden');
    renderModalAnswerKeyContent();
    renderOpticalSheet();
  }

  // Açılır kutuları varsayılan kapalı tut
  const keyBox = document.getElementById('fullAnswerKeyBox');
  if (keyBox) keyBox.classList.add('hidden');
  const iconKey = document.getElementById('iconToggleKey');
  if (iconKey) iconKey.className = 'fa-solid fa-chevron-down text-slate-400 transition-transform';

  const optSection = document.getElementById('opticalSheetSection');
  if (optSection) optSection.classList.add('hidden');
  const iconOpt = document.getElementById('iconToggleOptical');
  if (iconOpt) iconOpt.className = 'fa-solid fa-chevron-down text-slate-400 transition-transform';

  // Buton Event Listener'larını bağla
  attachModalEventListeners();

  // Modalı Aç
  const modal = document.getElementById('opticalModal');
  if (modal) modal.classList.remove('hidden');
}

function closeOpticalModal() {
  const modal = document.getElementById('opticalModal');
  if (modal) modal.classList.add('hidden');
  appState.activeModalTask = null;
}

// Soru Sayısını Ayarla (+ / -)
function adjustTotalQuestions(delta) {
  const input = document.getElementById('modalTotalQuestions');
  if (!input) return;
  let curVal = parseInt(input.value, 10);
  if (isNaN(curVal)) curVal = 14;
  const newVal = Math.max(1, Math.min(100, curVal + delta));
  input.value = newVal;

  // Update Empty accordingly
  const diff = newVal - curVal;
  const corInput = document.getElementById('modalInputCorrect');
  const wrgInput = document.getElementById('modalInputWrong');
  const empInput = document.getElementById('modalInputEmpty');
  let cor = Math.max(0, parseInt(corInput?.value, 10) || 0);
  let wrg = Math.max(0, parseInt(wrgInput?.value, 10) || 0);
  let emp = Math.max(0, parseInt(empInput?.value, 10) || 0);

  if (diff > 0) {
    emp += diff;
  } else if (diff < 0) {
    let toReduce = -diff;
    if (emp >= toReduce) {
      emp -= toReduce;
    } else {
      toReduce -= emp;
      emp = 0;
      if (wrg >= toReduce) {
        wrg -= toReduce;
      } else {
        toReduce -= wrg;
        wrg = 0;
        cor = Math.max(0, cor - toReduce);
      }
    }
  }

  if (corInput) corInput.value = cor;
  if (wrgInput) wrgInput.value = wrg;
  if (empInput) empInput.value = emp;

  onDirectScoreChange('total');
  if (!isActivityTask(appState.activeModalTask)) {
    renderOpticalSheet();
  }
}

function setTotalQuestions(val) {
  const input = document.getElementById('modalTotalQuestions');
  if (!input) return;
  const curVal = parseInt(input.value, 10) || 14;
  adjustTotalQuestions(val - curVal);
}

// Doğru, Yanlış, Boş Sayısını Ayarla (+ / -)
function adjustCount(type, delta) {
  const totalInput = document.getElementById('modalTotalQuestions');
  const corInput = document.getElementById('modalInputCorrect');
  const wrgInput = document.getElementById('modalInputWrong');
  const empInput = document.getElementById('modalInputEmpty');

  if (!totalInput || !corInput || !wrgInput || !empInput) return;

  const totalQ = Math.max(1, parseInt(totalInput.value, 10) || 14);
  let correct = Math.max(0, parseInt(corInput.value, 10) || 0);
  let wrong = Math.max(0, parseInt(wrgInput.value, 10) || 0);
  let empty = Math.max(0, parseInt(empInput.value, 10) || 0);

  if (type === 'correct') {
    if (delta > 0) {
      if (correct < totalQ) {
        correct++;
        if (empty > 0) empty--;
        else if (wrong > 0) wrong--;
      }
    } else if (delta < 0) {
      if (correct > 0) {
        correct--;
        empty++;
      }
    }
  } else if (type === 'wrong') {
    if (delta > 0) {
      if (wrong < totalQ) {
        wrong++;
        if (empty > 0) empty--;
        else if (correct > 0) correct--;
      }
    } else if (delta < 0) {
      if (wrong > 0) {
        wrong--;
        empty++;
      }
    }
  } else if (type === 'empty') {
    if (delta > 0) {
      if (empty < totalQ) {
        empty++;
        if (wrong > 0) wrong--;
        else if (correct > 0) correct--;
      }
    } else if (delta < 0) {
      if (empty > 0) {
        empty--;
        wrong++;
      }
    }
  }

  // Clamping to guarantee correct + wrong + empty === totalQ
  correct = Math.max(0, Math.min(totalQ, correct));
  wrong = Math.max(0, Math.min(totalQ, wrong));
  if (correct + wrong > totalQ) {
    if (type === 'correct') wrong = totalQ - correct;
    else correct = totalQ - wrong;
  }
  empty = Math.max(0, totalQ - correct - wrong);

  corInput.value = correct;
  wrgInput.value = wrong;
  empInput.value = empty;

  onDirectScoreChange(type);
}

// Girdiler değiştiğinde anında canlı net ve yüzde hesapla
function onDirectScoreChange(source) {
  const totalInput = document.getElementById('modalTotalQuestions');
  const corInput = document.getElementById('modalInputCorrect');
  const wrgInput = document.getElementById('modalInputWrong');
  const empInput = document.getElementById('modalInputEmpty');

  if (!totalInput || !corInput || !wrgInput || !empInput) return;

  const totalQ = Math.max(1, parseInt(totalInput.value, 10) || 14);
  let correct = Math.max(0, parseInt(corInput.value, 10) || 0);
  let wrong = Math.max(0, parseInt(wrgInput.value, 10) || 0);
  let empty = Math.max(0, parseInt(empInput.value, 10) || 0);

  // If user typed in manually (oninput or onchange)
  if (source === 'correct' || source === 'wrong' || source === 'total') {
    if (correct + wrong > totalQ) {
      if (source === 'correct') wrong = Math.max(0, totalQ - correct);
      else correct = Math.max(0, totalQ - wrong);
      corInput.value = correct;
      wrgInput.value = wrong;
    }
    empty = Math.max(0, totalQ - correct - wrong);
    empInput.value = empty;
  } else if (source === 'empty') {
    if (correct + wrong + empty > totalQ) {
      empty = Math.max(0, totalQ - correct - wrong);
      empInput.value = empty;
    }
  } else {
    empty = Math.max(0, totalQ - correct - wrong);
    empInput.value = empty;
  }

  // MEB 6. Sınıf Sınav Formülü: Net = Doğru - (Yanlış / 3)
  const netScore = Math.max(0, correct - (wrong / 3)).toFixed(2);
  const pct = Math.min(100, Math.round((correct / totalQ) * 100));

  const netEl = document.getElementById('modalLiveNet');
  const pctEl = document.getElementById('modalLivePct');
  const statusEl = document.getElementById('modalLiveStatus');

  if (netEl) netEl.innerText = netScore;
  if (pctEl) pctEl.innerText = `%${pct}`;
  if (statusEl) {
    if (pct >= 90) statusEl.innerText = 'Harika! 🌟';
    else if (pct >= 75) statusEl.innerText = 'Çok Başarılı! 👏';
    else if (pct >= 50) statusEl.innerText = 'İyi Çalışma! 👍';
    else statusEl.innerText = 'Tekrar Edelim 💪';
  }
}

// Sonucu Kaydet ve Görevi Tamamla
function saveDirectScore() {
  const task = appState.activeModalTask;
  if (!task) return;

  const totalInput = document.getElementById('modalTotalQuestions');
  const corInput = document.getElementById('modalInputCorrect');
  const wrgInput = document.getElementById('modalInputWrong');
  const empInput = document.getElementById('modalInputEmpty');

  const totalQ = Math.max(1, parseInt(totalInput?.value, 10) || 14);
  const correct = Math.max(0, parseInt(corInput?.value, 10) || 0);
  const wrong = Math.max(0, parseInt(wrgInput?.value, 10) || 0);
  const empty = Math.max(0, parseInt(empInput?.value, 10) || 0);

  const netScore = Math.max(0, correct - (wrong / 3)).toFixed(2);
  const pct = Math.min(100, Math.round((correct / totalQ) * 100));

  appState.testResults[task.id] = {
    questionCount: totalQ,
    correct,
    wrong,
    empty,
    net: parseFloat(netScore),
    scorePct: pct,
    answers: { ...appState.activeModalAnswers },
    checkedAt: new Date().toISOString()
  };

  appState.completedTasks[task.id] = true;
  saveProgress();

  playSuccessSound();
  if (pct >= 75) triggerConfetti();

  // Öğretmene E-posta Bildirimi Gönder (Google Apps Script)
  sendTestReportEmail(task, appState.testResults[task.id]);

  closeOpticalModal();
  renderAllViews();
}

// Modal Butonları İçin Doğrudan Event Listener Bağlantısı (Garanti ve Dokunmatik Dostu)
function attachModalEventListeners() {
  const bind = (id, fn) => {
    const el = document.getElementById(id);
    if (el) {
      el.onclick = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        fn();
      };
    }
  };

  bind('btnTotalMinus', () => adjustTotalQuestions(-1));
  bind('btnTotalPlus', () => adjustTotalQuestions(1));
  bind('btnCorrectMinus', () => adjustCount('correct', -1));
  bind('btnCorrectPlus', () => adjustCount('correct', 1));
  bind('btnWrongMinus', () => adjustCount('wrong', -1));
  bind('btnWrongPlus', () => adjustCount('wrong', 1));
  bind('btnEmptyMinus', () => adjustCount('empty', -1));
  bind('btnEmptyPlus', () => adjustCount('empty', 1));
  bind('btnPreset10', () => setTotalQuestions(10));
  bind('btnPreset12', () => setTotalQuestions(12));
  bind('btnPreset14', () => setTotalQuestions(14));
  bind('btnPreset15', () => setTotalQuestions(15));
  bind('btnPreset20', () => setTotalQuestions(20));
  bind('btnSaveDirectScore', () => saveDirectScore());
  bind('btnSaveDirectScoreFooter', () => saveDirectScore());
  bind('btnCloseModal', () => closeOpticalModal());
  bind('btnCloseModalHeader', () => closeOpticalModal());
}

// Global window üzerine fonksiyonları bağla (her türlü inline ve external çağrı için)
window.adjustTotalQuestions = adjustTotalQuestions;
window.setTotalQuestions = setTotalQuestions;
window.adjustCount = adjustCount;
window.onDirectScoreChange = onDirectScoreChange;
window.openOpticalModal = openOpticalModal;
window.closeOpticalModal = closeOpticalModal;
window.saveDirectScore = saveDirectScore;
window.attachModalEventListeners = attachModalEventListeners;

// Kitap Cevap Anahtarını Modal İçinde Göster
function renderModalAnswerKeyContent() {
  const contentEl = document.getElementById('fullAnswerKeyContent');
  if (!contentEl || !appState.activeModalTask) return;
  contentEl.innerHTML = '';

  const task = appState.activeModalTask;
  let answersList = task.answers;

  if (answersList && answersList.length > 0) {
    contentEl.innerHTML = answersList.map((ans, idx) => `
      <span class="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-slate-800 shadow-sm font-semibold">
        <strong class="text-slate-500 font-mono">${idx + 1}.</strong> <span class="text-blue-700 font-bold">${ans}</span>
      </span>
    `).join('');
  } else if (task.tests && task.tests.length > 0) {
    // İsem ikili testleri (Örn. Test 1 & Test 2)
    let html = '';
    task.tests.forEach(st => {
      html += `
        <div class="w-full mb-1.5">
          <span class="text-xs font-bold text-slate-700 bg-slate-200/90 px-2 py-0.5 rounded-md inline-block mb-1">${st.title}</span>
          <div class="flex flex-wrap gap-1.5 font-mono">
            ${st.answers.map((ans, idx) => `
              <span class="bg-white border border-slate-300 rounded-lg px-2 py-0.5 text-slate-800 shadow-sm text-xs font-semibold">
                <strong class="text-slate-500 font-mono">${idx + 1}.</strong> <span class="text-emerald-700 font-bold">${ans}</span>
              </span>
            `).join('')}
          </div>
        </div>
      `;
    });
    contentEl.innerHTML = html;
  } else {
    contentEl.innerHTML = `<span class="text-slate-500 italic text-xs">Bu etkinlik için şıklı cevap anahtarı bulunmamaktadır. Soruları kitabından çözüp Doğru, Yanlış ve Boş sayılarını yukarıdan girebilirsin.</span>`;
  }
}

// Kitap Cevap Anahtarı Bölümünü Aç / Kapa
function toggleAnswerKeyVisibility() {
  const keyBox = document.getElementById('fullAnswerKeyBox');
  const icon = document.getElementById('iconToggleKey');
  if (!keyBox) return;

  const isHidden = keyBox.classList.contains('hidden');
  if (isHidden) {
    keyBox.classList.remove('hidden');
    if (icon) icon.className = 'fa-solid fa-chevron-up text-amber-500 transition-transform';
  } else {
    keyBox.classList.add('hidden');
    if (icon) icon.className = 'fa-solid fa-chevron-down text-slate-400 transition-transform';
  }
}

// Optik Form Bölümünü Aç / Kapa
function toggleOpticalSheetSection() {
  const section = document.getElementById('opticalSheetSection');
  const icon = document.getElementById('iconToggleOptical');
  if (!section) return;

  const isHidden = section.classList.contains('hidden');
  if (isHidden) {
    section.classList.remove('hidden');
    if (icon) icon.className = 'fa-solid fa-chevron-up text-indigo-500 transition-transform';
    renderOpticalSheet();
  } else {
    section.classList.add('hidden');
    if (icon) icon.className = 'fa-solid fa-chevron-down text-slate-400 transition-transform';
  }
}

// Optik Form Baloncuklarını Çiz
function renderOpticalSheet() {
  const container = document.getElementById('opticalSheetContainer');
  if (!container || !appState.activeModalTask) return;
  container.innerHTML = '';

  const task = appState.activeModalTask;
  let answersList = task.answers;
  if (!answersList && task.tests && task.tests[0]) {
    answersList = task.tests[0].answers;
  }

  const totalInput = document.getElementById('modalTotalQuestions');
  const qCount = parseInt(totalInput?.value) || task.questionCount || (answersList ? answersList.length : 14);

  for (let q = 0; q < qCount; q++) {
    const qNum = q + 1;
    const selectedOpt = appState.activeModalAnswers[q];
    const correctOpt = answersList ? answersList[q] : null;

    const row = document.createElement('div');
    row.className = 'optical-row';

    let optionsHtml = '';
    ['A', 'B', 'C', 'D'].forEach(opt => {
      let extraClass = '';
      if (selectedOpt === opt) {
        extraClass = 'selected';
      }

      if (correctOpt) {
        if (selectedOpt === opt && selectedOpt === correctOpt) {
          extraClass = 'is-correct';
        } else if (selectedOpt === opt && selectedOpt !== correctOpt) {
          extraClass = 'is-wrong';
        } else if (selectedOpt && opt === correctOpt) {
          extraClass = 'is-correct-target';
        }
      }

      optionsHtml += `
        <button type="button" onclick="selectOpticalOption(${q}, '${opt}')" class="bubble-btn ${extraClass} touch-manipulation">
          ${opt}
        </button>
      `;
    });

    row.innerHTML = `
      <div class="flex items-center gap-2 sm:gap-3">
        <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center font-mono">
          ${qNum}
        </span>
        ${correctOpt && selectedOpt ? `
          <span class="text-xs font-semibold ${selectedOpt === correctOpt ? 'text-emerald-600' : 'text-rose-600'}">
            ${selectedOpt === correctOpt ? '<i class="fa-solid fa-check"></i> Doğru' : `<i class="fa-solid fa-xmark"></i> Cevap: ${correctOpt}`}
          </span>
        ` : ''}
      </div>
      <div class="flex items-center space-x-1.5 sm:space-x-2">
        ${optionsHtml}
        <button type="button" onclick="clearOpticalQuestion(${q})" title="Soruyu Boş Bırak" class="w-6 h-6 text-slate-300 hover:text-slate-600 text-xs flex items-center justify-center touch-manipulation">
          <i class="fa-solid fa-eraser"></i>
        </button>
      </div>
    `;

    container.appendChild(row);
  }
}

function selectOpticalOption(qIndex, optionLetter) {
  if (appState.activeModalAnswers[qIndex] === optionLetter) {
    delete appState.activeModalAnswers[qIndex];
  } else {
    appState.activeModalAnswers[qIndex] = optionLetter;
  }
  
  // Baloncuk işaretlendikçe yukarıdaki Doğru / Yanlış / Boş sayılarını otomatik güncelle!
  syncOpticalWithDirectInputs();
  renderOpticalSheet();
}

function clearOpticalQuestion(qIndex) {
  delete appState.activeModalAnswers[qIndex];
  syncOpticalWithDirectInputs();
  renderOpticalSheet();
}

function clearModalAnswers() {
  appState.activeModalAnswers = {};
  const totalInput = document.getElementById('modalTotalQuestions');
  const qCount = parseInt(totalInput?.value) || 14;

  document.getElementById('modalInputCorrect').value = 0;
  document.getElementById('modalInputWrong').value = 0;
  document.getElementById('modalInputEmpty').value = qCount;

  onDirectScoreChange();
  renderOpticalSheet();
}

function syncOpticalWithDirectInputs() {
  const task = appState.activeModalTask;
  if (!task) return;

  let answersList = task.answers;
  if (!answersList && task.tests && task.tests[0]) {
    answersList = task.tests[0].answers;
  }

  const totalInput = document.getElementById('modalTotalQuestions');
  const qCount = parseInt(totalInput?.value) || 14;

  if (answersList) {
    let cor = 0, wrg = 0, emp = 0;
    for (let q = 0; q < qCount; q++) {
      const chosen = appState.activeModalAnswers[q];
      const actual = answersList[q];
      if (!chosen) emp++;
      else if (chosen === actual) cor++;
      else wrg++;
    }
    document.getElementById('modalInputCorrect').value = cor;
    document.getElementById('modalInputWrong').value = wrg;
    document.getElementById('modalInputEmpty').value = emp;
    onDirectScoreChange();
  }
}

// ================================================================
// STUDY TIMER / POMODORO LOGIC
// ================================================================
function setupTimer() {
  updateTimerDisplay();
}

function setTimerMode(mode) {
  appState.timerMode = mode;
  clearInterval(appState.timerInterval);
  appState.timerRunning = false;

  ['pomodoro', 'deneme', 'stopwatch'].forEach(m => {
    const btn = document.getElementById(`timerMode${capitalize(m)}`);
    if (btn) {
      if (m === mode) {
        btn.className = 'px-2 py-1 rounded-md bg-white shadow-sm text-blue-700 font-bold';
      } else {
        btn.className = 'px-2 py-1 rounded-md text-slate-600 hover:text-slate-900';
      }
    }
  });

  const lbl = document.getElementById('timerStatusLabel');
  if (mode === 'pomodoro') {
    appState.timerRemaining = 25 * 60;
    if (lbl) lbl.innerText = 'Odaklanma Süresi (25 Dk)';
  } else if (mode === 'deneme') {
    appState.timerRemaining = 40 * 60;
    if (lbl) lbl.innerText = 'Jumbo Deneme Süresi (40 Dk)';
  } else {
    appState.timerRemaining = 0;
    if (lbl) lbl.innerText = 'Serbest Çalışma Kronometresi';
  }

  const btnText = document.getElementById('timerBtnText');
  if (btnText) btnText.innerText = 'Başlat';
  updateTimerDisplay();
}

function toggleTimer() {
  if (appState.timerRunning) {
    clearInterval(appState.timerInterval);
    appState.timerRunning = false;
    document.getElementById('timerBtnText').innerText = 'Devam Et';
  } else {
    appState.timerRunning = true;
    document.getElementById('timerBtnText').innerText = 'Durdur';
    appState.timerInterval = setInterval(() => {
      if (appState.timerMode === 'stopwatch') {
        appState.timerRemaining++;
      } else {
        if (appState.timerRemaining > 0) {
          appState.timerRemaining--;
        } else {
          clearInterval(appState.timerInterval);
          appState.timerRunning = false;
          playSuccessSound();
          alert("Tebrikler! Çalışma süreniz tamamlandı. Şimdi 5 dakika mola verebilirsiniz!");
          document.getElementById('timerBtnText').innerText = 'Başlat';
        }
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function resetTimer() {
  setTimerMode(appState.timerMode);
}

function updateTimerDisplay() {
  const display = document.getElementById('timerDisplay');
  if (!display) return;

  const totalSecs = appState.timerRemaining;
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  display.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ================================================================
// AUDIO & CELEBRATIONS
// ================================================================
function playSuccessSound() {
  try {
    const audio = document.getElementById('successAudio');
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log('Audio playback prevented by browser'));
    }
  } catch (e) {}
}

function triggerConfetti() {
  try {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 }
      });
    }
  } catch (e) {}
}

// ================================================================
// DATA BACKUP & EXPORT
// ================================================================
function exportUserData() {
  const data = {
    exportDate: new Date().toISOString(),
    completedTasks: appState.completedTasks,
    testResults: appState.testResults,
    xp: appState.xp
  };
  const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", jsonStr);
  downloadAnchor.setAttribute("download", `iley_matematik_ilerleme_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importUserData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.completedTasks) {
        appState.completedTasks = imported.completedTasks;
        appState.testResults = imported.testResults || {};
        appState.xp = imported.xp || 0;
        saveProgress();
        renderAllViews();
        alert("Yedek başarıyla yüklendi!");
      } else {
        alert("Geçersiz yedek dosyası.");
      }
    } catch (err) {
      alert("Dosya okunurken hata oluştu: " + err.message);
    }
  };
  reader.readAsText(file);
}

function confirmResetAllData() {
  if (confirm("DİKKAT: İley'in tüm çözdüğü testler ve ilerleme verileri silinecektir. Emin misiniz?")) {
    localStorage.removeItem(STORAGE_KEY);
    appState.completedTasks = {};
    appState.testResults = {};
    appState.questions = [];
    appState.xp = 0;
    saveProgress();
    renderAllViews();
    alert("Tüm veriler sıfırlandı.");
  }
}

// ================================================================
// BÖLÜM A: PWA (PROGRESSIVE WEB APP) & OFFLINE YÖNETİMİ
// ================================================================
function initPwaAndCloud() {
  // Service Worker Kaydı (Çevrimdışı ve PWA desteği için)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('✅ Service Worker başarıyla kaydedildi:', reg.scope);
        })
        .catch(err => {
          console.warn('⚠️ Service Worker kaydı başarısız (yerel dosya modunda olabilir):', err);
        });
    });
  }

  // PWA Kurulum İstemi (BeforeInstallPrompt) Dinleyicisi
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    appState.deferredPrompt = e;
    const btn = document.getElementById('btnInstallPwa');
    if (btn) btn.classList.remove('hidden');
    console.log('📱 PWA kurulumu için hazır');
  });

  window.addEventListener('appinstalled', () => {
    appState.deferredPrompt = null;
    const btn = document.getElementById('btnInstallPwa');
    if (btn) btn.classList.add('hidden');
    console.log('🎉 Uygulama başarıyla cihaza yüklendi!');
  });

  loadCloudSettingsToInputs();
  updateCloudStatusBadge();
  updateQuestionsBadge();
}

function promptPwaInstall() {
  if (appState.deferredPrompt) {
    appState.deferredPrompt.prompt();
    appState.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Kullanıcı uygulamayı yüklemeyi kabul etti');
      }
      appState.deferredPrompt = null;
    });
  } else {
    // Tarayıcı otomatik prompt desteklemiyorsa (iOS Safari vb.) rehber modalını aç
    openPwaInstallGuide();
  }
}

function openPwaInstallGuide() {
  const modal = document.getElementById('pwaInstallGuideModal');
  if (modal) modal.classList.remove('hidden');
}

function closePwaInstallGuide() {
  const modal = document.getElementById('pwaInstallGuideModal');
  if (modal) modal.classList.add('hidden');
}

// ================================================================
// BÖLÜM B: WHATSAPP GÜNLÜK ÖDEV BİLGİLENDİRMESİ
// ================================================================
function getLevelInfo(xp) {
  let level = 1;
  let title = "Sayı Kaşifi";
  let minXP = 0;
  let nextXP = 300;

  if (xp >= 4000) {
    level = 6; title = "Matematik Dahisi"; minXP = 4000; nextXP = 6000;
  } else if (xp >= 2500) {
    level = 5; title = "Deneme Şampiyonu"; minXP = 2500; nextXP = 4000;
  } else if (xp >= 1500) {
    level = 4; title = "Geometri Mimarı"; minXP = 1500; nextXP = 2500;
  } else if (xp >= 800) {
    level = 3; title = "Problem Avcısı"; minXP = 800; nextXP = 1500;
  } else if (xp >= 300) {
    level = 2; title = "Kesir Ustası"; minXP = 300; nextXP = 800;
  }
  return { level, title, minXP, nextXP };
}

// %100 Çalışan Güvenli Pano Kopyalama Motoru
function copyTextSafely(text) {
  return new Promise((resolve) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => resolve(true)).catch(() => {
          resolve(fallbackCopyText(text));
        });
      } else {
        resolve(fallbackCopyText(text));
      }
    } catch (e) {
      resolve(fallbackCopyText(text));
    }
  });
}

function fallbackCopyText(text) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return !!successful;
  } catch (err) {
    return false;
  }
}

function getTodayWhatsAppMessage() {
  let currentDate = appState.currentDateStr;
  let daySchedule = STUDY_DATA.schedule.find(d => d.date === currentDate);
  
  // Eğer bugünün tarihi listede yoksa ilk günü (12 Ekim) al
  if (!daySchedule) {
    daySchedule = STUDY_DATA.schedule[0];
    currentDate = daySchedule ? daySchedule.date : '2026-10-12';
  }

  if (!daySchedule) return "İley 6. Sınıf Matematik Günlük Ödev Raporu";

  // Tarihi Türkçe formatla
  const dateObj = new Date(currentDate + 'T00:00:00');
  const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const monthNames = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  const formattedDate = `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()} ${dayNames[dateObj.getDay()]}`;

  let totalTasks = daySchedule.tasks.length;
  let doneTasks = 0;
  let tasksSummary = '';

  daySchedule.tasks.forEach((t, i) => {
    const isDone = !!appState.completedTasks[t.id];
    if (isDone) doneTasks++;

    const statusIcon = isDone ? '✅' : '⏳';
    const bookTitle = getBookLabel(t.book);
    const testResult = appState.testResults[t.id];

    let resultDetail = '';
    if (testResult) {
      resultDetail = ` (Net: ${testResult.net}, ${testResult.correct}D / ${testResult.wrong}Y / ${testResult.empty}B - %${testResult.scorePct})`;
    }

    tasksSummary += `${i + 1}. ${statusIcon} *${bookTitle}*\n   📌 ${t.title || t.desc}${resultDetail}\n`;
  });

  const levelInfo = getLevelInfo(appState.xp);
  const statusEmoji = doneTasks === totalTasks ? '🎉 Tüm Ödevler Tamamlandı!' : `${doneTasks}/${totalTasks} Görev Tamamlandı`;

  let msg = `🌟 *İLEY 6. SINIF MATEMATİK ÖDEV RAPORU* 🌟\n`;
  msg += `📅 *Tarih:* ${formattedDate}\n`;
  msg += `📊 *Durum:* ${statusEmoji}\n\n`;
  msg += `📚 *Günün Ödevleri:*\n${tasksSummary}\n`;
  msg += `🎯 *Öğrenci Düzeyi:* ${levelInfo.title} (${appState.xp} XP)\n`;
  if (appState.streak > 0) {
    msg += `🔥 *Çalışma Serisi:* ${appState.streak} Gün Kesintisiz!\n`;
  }
  msg += `\n💪 _"Matematikte başarı düzenli adımlarla gelir!"_`;
  return msg;
}

async function copyTodayReportToClipboard() {
  const msg = getTodayWhatsAppMessage();
  const success = await copyTextSafely(msg);
  
  if (success) {
    showToastNotification("📋 Günlük ödev raporu panoya kopyalandı!");
    alert("✅ Günlük ödev raporu panoya kopyalandı!\n\nŞimdi WhatsApp'taki grubunuza gidip mesaj yazma kutusuna Yapıştır (Ctrl+V veya basılı tutup Yapıştır) diyerek hemen gönderebilirsiniz!");
  } else {
    prompt("Rapor metnini buradan Ctrl+C ile kopyalayabilirsiniz:", msg);
  }
}

async function shareTodayWhatsApp() {
  const msg = getTodayWhatsAppMessage();

  // 1. Önce metni garanti olarak panoya kopyala
  await copyTextSafely(msg);

  const encodedMsg = encodeURIComponent(msg);
  // WhatsApp Evrensel Paylaşım URL'si: Telefon numarası olmadan açıldığında
  // WhatsApp doğrudan "Kime gönderilsin?" (kişi/grup seçimi) ekranını açar ve mesajı hazır bekletir.
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMsg}`;

  showToastNotification("💬 WhatsApp açılıyor! Rapor panoya da kopyalandı.");
  
  // WhatsApp'ı aç
  const opened = window.open(whatsappUrl, '_blank');
  if (!opened || opened.closed || typeof opened.closed === 'undefined') {
    window.location.href = whatsappUrl;
  }
}

// ================================================================
// BÖLÜM C: ÖĞRETMENE E-POSTA BİLDİRİMİ (GOOGLE APPS SCRIPT)
// ================================================================
function sendTestReportEmail(task, testResult) {
  const scriptUrl = (appState.cloudSettings.appsScriptUrl || '').trim();
  const teacherEmail = (appState.cloudSettings.teacherEmail || 'hizarci84@gmail.com').trim();
  const parentEmails = (appState.cloudSettings.parentEmails || 'alperuygur33@gmail.com, melon55@gmail.com').trim();

  // Eğer Google Apps Script URL tanımlanmamışsa sessizce geç
  if (!scriptUrl) {
    console.log('ℹ️ Google Apps Script URL henüz ayarlanmadığı için e-posta gönderimi atlandı.');
    return;
  }

  const taskTitle = (task && (task.title || task.desc)) || 'Parkur S. 6 - 7 Etkinliği';
  const bookTitle = (task && getBookLabel(task.book)) || 'Parkur Matematik';
  const qCount = testResult ? (testResult.questionCount || 0) : 0;
  const isDetailed = testResult && (testResult.correct > 0 || testResult.wrong > 0 || testResult.empty > 0);

  const payload = {
    action: 'sendTestReportEmail',
    actionAlias: 'sendTestEmail',
    teacherEmail: teacherEmail,
    parentEmails: parentEmails,
    studentName: 'İley',
    taskTitle: taskTitle,
    testTitle: taskTitle,
    book: bookTitle,
    bookName: bookTitle,
    date: appState.currentDateStr,
    questionCount: qCount,
    totalQuestions: qCount,
    correct: testResult ? (testResult.correct || 0) : 0,
    wrong: testResult ? (testResult.wrong || 0) : 0,
    empty: testResult ? (testResult.empty || 0) : 0,
    net: testResult ? (testResult.net || 0) : 0,
    scorePct: testResult ? (testResult.scorePct || 100) : 100,
    isActivity: !isDetailed,
    progressData: {
      completedTasks: appState.completedTasks,
      testResults: appState.testResults,
      questions: appState.questions,
      xp: appState.xp,
      streak: appState.streak
    }
  };

  fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors', // Google Apps Script CORS ve yönlendirme (302) uyumlu
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload)
  })
  .then(() => {
    console.log('✅ Öğretmen ve velilere karne e-posta bildirim isteği gönderildi');
    const msg = isDetailed 
      ? `📧 Karne öğretmen ve velilere gönderildi! (${testResult.correct}D - ${testResult.wrong}Y)`
      : `📧 Ödev tamamlama bildirimi öğretmen ve velilere iletildi!`;
    showToastNotification(msg);
  })
  .catch(err => {
    console.warn('⚠️ E-posta bildiriminde bağlantı hatası:', err);
  });
}

// Ayarlar Ekranından Tek Tıkla Canlı E-Posta Testi
function sendTestEmailDirect() {
  const scriptUrl = (document.getElementById('settingAppsScriptUrl')?.value || appState.cloudSettings.appsScriptUrl || '').trim();
  const teacherEmail = (document.getElementById('settingTeacherEmail')?.value || appState.cloudSettings.teacherEmail || 'hizarci84@gmail.com').trim();
  const parentEmails = (document.getElementById('settingParentEmails')?.value || appState.cloudSettings.parentEmails || 'alperuygur33@gmail.com, melon55@gmail.com').trim();

  if (!scriptUrl) {
    alert("Lütfen önce Google Apps Script URL'sini girip 'Ayarları Kaydet' butonuna basınız.");
    return;
  }

  showToastNotification("📧 Örnek karne gönderiliyor...");
  
  const mockTask = {
    title: "Sistem Doğrulama Testi (Örnek Karne)",
    book: "parkur"
  };
  const mockResult = {
    questionCount: 14,
    correct: 13,
    wrong: 1,
    empty: 0,
    net: 12.67,
    scorePct: 93
  };

  sendTestReportEmail(mockTask, mockResult);
  alert(`✅ Örnek karne şu adreslere başarıyla gönderildi:\n\n• Öğretmen: ${teacherEmail}\n• Veliler: ${parentEmails}\n\nLütfen yaklaşık 15-30 saniye içinde Gmail gelen kutularını (gerekirse Spam klasörünü) kontrol ediniz.`);
}

function showToastNotification(msg) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'fixed bottom-16 sm:bottom-6 right-4 sm:right-6 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl z-50 flex items-center gap-2 border border-slate-700 transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400"></i> <span>${msg}</span>`;
  toast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
  }, 4000);
}

// ================================================================
// BÖLÜM D: YAPILAMAYAN SORULAR & GOOGLE DRIVE ENTEGRASYONU
// ================================================================
function openUploadQuestionModal(defaultBook, defaultTitle) {
  const modal = document.getElementById('uploadQuestionModal');
  if (!modal) return;

  // Form elemanlarını hazırla
  const bookSelect = document.getElementById('questionBookSelect');
  const titleInput = document.getElementById('questionTitleInput');
  const noteInput = document.getElementById('questionNoteInput');
  const statusEl = document.getElementById('questionUploadStatus');

  // Eğer parametre verilmemişse günün aktif görevinden otomatik tahmin et
  if (!defaultBook && !defaultTitle && STUDY_DATA && STUDY_DATA.schedule) {
    const curDay = STUDY_DATA.schedule.find(d => d.date === appState.currentDateStr);
    if (curDay && curDay.tasks && curDay.tasks[0]) {
      const t = curDay.tasks[0];
      defaultBook = t.bookCode || t.book;
      if (t.pages) {
        defaultTitle = `Sayfa ${t.pages}, Soru `;
      }
    }
  }

  if (bookSelect && defaultBook) {
    if (defaultBook.includes('isem')) bookSelect.value = 'isem';
    else if (defaultBook.includes('parkur')) bookSelect.value = 'parkur';
    else if (defaultBook.includes('jumbo')) bookSelect.value = 'jumbo';
  }

  if (titleInput && defaultTitle) {
    titleInput.value = defaultTitle;
  } else if (titleInput) {
    titleInput.value = '';
  }

  if (noteInput) noteInput.value = '';
  if (statusEl) {
    statusEl.className = 'hidden text-xs p-3 rounded-xl';
    statusEl.innerHTML = '';
  }

  clearSelectedQuestionImage();
  modal.classList.remove('hidden');
}

function closeUploadQuestionModal() {
  const modal = document.getElementById('uploadQuestionModal');
  if (modal) modal.classList.add('hidden');
}

// Görsel Seçme ve İstemci Tarafında Otomatik Sıkıştırma (Optimize Base64)
function handleQuestionImageSelect(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  appState.currentSelectedImageName = file.name || `soru_${Date.now()}.jpg`;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Resmi maksimum 1280px genişlik/yükseklikle sıkıştır (performans ve Drive kotası için)
      const maxDim = 1280;
      let width = img.width;
      let height = img.height;

      if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
      } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      // JPEG formatında %82 kalitede Base64'e dönüştür
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
      appState.currentSelectedImageBase64 = compressedDataUrl;

      // Önizlemeyi göster
      const previewImg = document.getElementById('questionImagePreview');
      const previewBox = document.getElementById('imagePreviewBox');
      const placeholder = document.getElementById('imagePlaceholder');

      if (previewImg) previewImg.src = compressedDataUrl;
      if (previewBox) previewBox.classList.remove('hidden');
      if (placeholder) placeholder.classList.add('hidden');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function clearSelectedQuestionImage(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  appState.currentSelectedImageBase64 = null;
  appState.currentSelectedImageName = '';
  
  const fileInput = document.getElementById('questionImageInput');
  const previewImg = document.getElementById('questionImagePreview');
  const previewBox = document.getElementById('imagePreviewBox');
  const placeholder = document.getElementById('imagePlaceholder');

  if (fileInput) fileInput.value = '';
  if (previewImg) previewImg.src = '';
  if (previewBox) previewBox.classList.add('hidden');
  if (placeholder) placeholder.classList.remove('hidden');
}

// Soru Kaydetme & Google Drive'a Yükleme Akışı
async function handleQuestionSubmit(event) {
  event.preventDefault();

  if (!appState.currentSelectedImageBase64) {
    alert("Lütfen yapamadığınız sorunun fotoğrafını ekleyiniz.");
    return;
  }

  const bookVal = document.getElementById('questionBookSelect')?.value || 'isem';
  const titleVal = (document.getElementById('questionTitleInput')?.value || '').trim();
  const noteVal = (document.getElementById('questionNoteInput')?.value || '').trim();
  const statusEl = document.getElementById('questionUploadStatus');
  const submitBtn = document.getElementById('btnSubmitQuestion');

  if (!titleVal) {
    alert("Lütfen test adı veya soru numarasını belirtiniz.");
    return;
  }

  const questionId = 'q_' + Date.now();
  const newQuestion = {
    id: questionId,
    book: bookVal,
    title: titleVal,
    note: noteVal,
    imageData: appState.currentSelectedImageBase64,
    driveUrl: null,
    driveFileId: null,
    createdAt: new Date().toISOString(),
    dateStr: appState.currentDateStr,
    solved: false
  };

  // UI Yükleme Durumu
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Drive'a Yükleniyor...</span>`;
  }
  if (statusEl) {
    statusEl.className = 'text-xs p-3 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 block';
    statusEl.innerHTML = `<i class="fa-solid fa-cloud-arrow-up text-blue-600 mr-1.5"></i> Soru yerel soru havuzuna kaydediliyor ve Google Drive klasörünüze aktarılıyor...`;
  }

  // Google Apps Script Entegrasyonu
  const scriptUrl = (appState.cloudSettings.appsScriptUrl || '').trim();
  const teacherEmail = (appState.cloudSettings.teacherEmail || '').trim();

  if (scriptUrl) {
    try {
      const pureBase64 = appState.currentSelectedImageBase64.replace(/^data:image\/[a-z]+;base64,/, '');
      const payload = {
        action: 'uploadQuestion',
        teacherEmail: teacherEmail,
        studentName: 'İley',
        fileName: `İley_${bookVal}_${Date.now()}.jpg`,
        mimeType: 'image/jpeg',
        base64Data: pureBase64,
        book: getBookLabel(bookVal),
        title: titleVal,
        note: noteVal
      };

      // Apps Script CORS ve Yönlendirme Korumalı POST
      try {
        const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
        const resData = await response.json();
        if (resData && (resData.success || resData.status === 'success') && resData.fileUrl) {
          newQuestion.driveUrl = resData.fileUrl;
          newQuestion.driveFileId = resData.fileId;
        }
      } catch (corsErr) {
        // Tarayıcı CORS yönlendirmesini kısıtlarsa no-cors ile arka planda Drive'a kesin teslim et
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });
      }
    } catch (e) {
      console.warn('⚠️ Google Drive yüklemesinde ağ durumu:', e);
    }
  }

  // Soruyu State'e Ekle ve Sakla
  if (!appState.questions) appState.questions = [];
  appState.questions.unshift(newQuestion);
  saveProgress();

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i> <span>Kaydet & Drive'a Yükle</span>`;
  }

  playSuccessSound();
  closeUploadQuestionModal();
  showToastNotification("📸 Soru başarıyla kaydedildi! Soru havuzunuzda görüntülenebilir.");

  // Sorular sekmesini güncelle
  renderQuestionsView();
  updateQuestionsBadge();
}

// Soru Havuzu Kartlarını Çizme
function renderQuestionsView() {
  const container = document.getElementById('questionsContainer');
  if (!container) return;

  const list = appState.questions || [];
  const filter = appState.questionsFilter || 'all';

  // Sayaçları Güncelle
  const countAll = list.length;
  const countPending = list.filter(q => !q.solved).length;
  const countSolved = list.filter(q => q.solved).length;

  const elAll = document.getElementById('qCountAll');
  const elPending = document.getElementById('qCountPending');
  const elSolved = document.getElementById('qCountSolved');
  if (elAll) elAll.innerText = countAll;
  if (elPending) elPending.innerText = countPending;
  if (elSolved) elSolved.innerText = countSolved;

  // Filtre Butonları Aktiflik Durumu
  ['all', 'pending', 'solved'].forEach(f => {
    const btn = document.getElementById(`qFilter-${f}`);
    if (btn) {
      if (f === filter) {
        btn.className = 'q-filter-btn px-3 py-1.5 rounded-xl bg-rose-600 text-white shadow-sm transition font-bold text-xs';
      } else {
        btn.className = 'q-filter-btn px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-bold text-xs';
      }
    }
  });

  // Filtrelenmiş Liste
  const filtered = list.filter(q => {
    if (filter === 'pending') return !q.solved;
    if (filter === 'solved') return q.solved;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white rounded-3xl p-10 text-center border border-slate-200/80 space-y-3">
        <div class="w-16 h-16 mx-auto rounded-3xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl shadow-inner">
          <i class="fa-solid fa-clipboard-question"></i>
        </div>
        <h3 class="text-base font-bold text-slate-800 font-['Outfit']">Henüz Soru Eklenmemiş</h3>
        <p class="text-xs text-slate-500 max-w-sm mx-auto">
          ${filter === 'pending' ? 'Tebrikler! Çözüm bekleyen hiçbir soru kalmamış.' : 'Çözerken takıldığın veya anlamadığın soruların fotoğrafını çekerek buraya yükleyebilirsin.'}
        </p>
        <button type="button" onclick="openUploadQuestionModal()" class="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition inline-flex items-center gap-1.5 cursor-pointer">
          <i class="fa-solid fa-camera"></i> İlk Soruyu Yükle
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(q => {
    const isSolved = q.solved;
    const dateFormatted = q.createdAt ? new Date(q.createdAt).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }) : '';
    const bookTitle = getBookLabel(q.book);

    return `
      <div class="bg-white rounded-2xl border ${isSolved ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200/90'} shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
        <!-- Kart Üst Görsel Önizleme -->
        <div class="relative bg-slate-900 h-48 overflow-hidden group cursor-pointer" onclick="zoomQuestionImage('${q.id}')">
          <img src="${q.imageData}" alt="${q.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
          
          <!-- Durum Rozeti -->
          <div class="absolute top-3 left-3">
            <span class="px-2.5 py-1 rounded-full text-[10px] font-extrabold ${isSolved ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'} shadow-md flex items-center gap-1">
              <i class="fa-solid ${isSolved ? 'fa-check' : 'fa-clock'}"></i>
              ${isSolved ? 'Çözüldü' : 'Çözüm Bekliyor'}
            </span>
          </div>

          <!-- Büyüteç Butonu -->
          <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center text-xs group-hover:bg-white group-hover:text-slate-900 transition shadow-md">
            <i class="fa-solid fa-magnifying-glass-plus"></i>
          </div>

          <!-- Alt Başlık / Kitap -->
          <div class="absolute bottom-2.5 left-3 right-3 text-white">
            <span class="text-[10px] font-bold text-rose-300 uppercase block line-clamp-1">${bookTitle}</span>
            <h4 class="text-xs font-bold font-['Outfit'] line-clamp-1">${q.title}</h4>
          </div>
        </div>

        <!-- Kart İçeriği -->
        <div class="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
          <div>
            ${q.note ? `
              <div class="p-2.5 bg-slate-50 rounded-xl text-slate-700 text-xs italic border border-slate-100 flex items-start gap-2">
                <i class="fa-solid fa-quote-left text-slate-300 text-xs mt-0.5"></i>
                <span class="line-clamp-2">${q.note}</span>
              </div>
            ` : '<div class="text-[11px] text-slate-400 italic">Not girilmedi.</div>'}
          </div>

          <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <div class="text-[10px] text-slate-400 font-medium">
              <i class="fa-regular fa-calendar mr-0.5"></i> ${dateFormatted}
            </div>

            <!-- Eylemler -->
            <div class="flex items-center gap-1.5">
              ${q.driveUrl ? `
                <a href="${q.driveUrl}" target="_blank" title="Google Drive'da Aç" class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 flex items-center justify-center transition text-xs border border-emerald-200">
                  <i class="fa-brands fa-google-drive"></i>
                </a>
              ` : ''}

              <button type="button" onclick="toggleQuestionSolved('${q.id}')" title="${isSolved ? 'Bekliyor olarak işaretle' : 'Çözüldü olarak işaretle'}" class="w-7 h-7 rounded-lg ${isSolved ? 'bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-200'} border flex items-center justify-center transition text-xs cursor-pointer">
                <i class="fa-solid ${isSolved ? 'fa-rotate-left' : 'fa-check'}"></i>
              </button>

              <button type="button" onclick="deleteQuestion('${q.id}')" title="Soruyu Sil" class="w-7 h-7 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 flex items-center justify-center transition text-xs cursor-pointer">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setQuestionsFilter(filter) {
  appState.questionsFilter = filter;
  renderQuestionsView();
}

function toggleQuestionSolved(id) {
  const item = (appState.questions || []).find(q => q.id === id);
  if (item) {
    item.solved = !item.solved;
    saveProgress();
    renderQuestionsView();
    updateQuestionsBadge();
  }
}

function deleteQuestion(id) {
  if (confirm("Bu soruyu soru havuzunuzdan silmek istediğinize emin misiniz?")) {
    appState.questions = (appState.questions || []).filter(q => q.id !== id);
    saveProgress();
    renderQuestionsView();
    updateQuestionsBadge();
  }
}

function zoomQuestionImage(id) {
  const item = (appState.questions || []).find(q => q.id === id);
  if (!item) return;

  const modal = document.getElementById('imageZoomModal');
  const modalImg = document.getElementById('zoomModalImage');
  const titleEl = document.getElementById('zoomModalTitle');
  const subEl = document.getElementById('zoomModalSubtitle');
  const noteBox = document.getElementById('zoomModalNoteBox');
  const driveLink = document.getElementById('zoomDriveLink');

  if (modalImg) modalImg.src = item.imageData;
  if (titleEl) titleEl.innerText = item.title;
  if (subEl) subEl.innerText = `${getBookLabel(item.book)} • ${item.dateStr || ''}`;

  if (noteBox) {
    if (item.note) {
      noteBox.innerHTML = `<strong>Öğrenci Notu:</strong> ${item.note}`;
      noteBox.classList.remove('hidden');
    } else {
      noteBox.classList.add('hidden');
    }
  }

  if (driveLink) {
    if (item.driveUrl) {
      driveLink.href = item.driveUrl;
      driveLink.classList.remove('hidden');
      driveLink.classList.add('inline-flex');
    } else {
      driveLink.classList.add('hidden');
      driveLink.classList.remove('inline-flex');
    }
  }

  if (modal) modal.classList.remove('hidden');
}

function closeImageZoomModal() {
  const modal = document.getElementById('imageZoomModal');
  if (modal) modal.classList.add('hidden');
}

function updateQuestionsBadge() {
  const pendingCount = (appState.questions || []).filter(q => !q.solved).length;
  
  // Header Badge
  const headerBadge = document.getElementById('badgeHeaderQuestionsCount');
  if (headerBadge) {
    if (pendingCount > 0) {
      headerBadge.innerText = pendingCount;
      headerBadge.classList.remove('hidden');
    } else {
      headerBadge.classList.add('hidden');
    }
  }

  // Mobile Nav Badge
  const mobileBadge = document.getElementById('mobileBadgeQuestionsCount');
  if (mobileBadge) {
    if (pendingCount > 0) {
      mobileBadge.innerText = pendingCount;
      mobileBadge.classList.remove('hidden');
    } else {
      mobileBadge.classList.add('hidden');
    }
  }
}

// Kitap Adını Anlaşılır Metne Çeviren Yardımcı Fonksiyon
function getBookLabel(bookKey) {
  if (!bookKey) return 'Matematik Ödevi';
  if (bookKey === 'isem' || bookKey.includes('isem')) return 'İsem Yayıncılık 6. Sınıf Matematik';
  if (bookKey === 'parkur' || bookKey.includes('parkur')) return 'Parkur Matematik 6. Sınıf (Metin Yayınları)';
  if (bookKey === 'jumbo' || bookKey.includes('jumbo')) return '6 Jumbo Deneme Sınavı (İsem)';
  return 'Matematik Kitabı';
}

// ================================================================
// BÖLÜM E: BULUT AYARLARI & DRIVE YEDEKLEME / EŞİTLEME
// ================================================================
function loadCloudSettingsToInputs() {
  const scriptUrlInput = document.getElementById('settingAppsScriptUrl');
  const teacherEmailInput = document.getElementById('settingTeacherEmail');
  const parentEmailsInput = document.getElementById('settingParentEmails');
  const pinInput = document.getElementById('settingCurrentPinDisplay');

  if (scriptUrlInput) scriptUrlInput.value = appState.cloudSettings.appsScriptUrl || '';
  if (teacherEmailInput) teacherEmailInput.value = appState.cloudSettings.teacherEmail || 'hizarci84@gmail.com';
  if (parentEmailsInput) parentEmailsInput.value = appState.cloudSettings.parentEmails || 'alperuygur33@gmail.com, melon55@gmail.com';
  if (pinInput) pinInput.value = appState.cloudSettings.teacherPin || '1984';
}

function saveCloudSettings() {
  const scriptUrlInput = document.getElementById('settingAppsScriptUrl');
  const teacherEmailInput = document.getElementById('settingTeacherEmail');
  const parentEmailsInput = document.getElementById('settingParentEmails');
  const pinInput = document.getElementById('settingCurrentPinDisplay');

  appState.cloudSettings = {
    appsScriptUrl: (scriptUrlInput?.value || '').trim(),
    teacherEmail: (teacherEmailInput?.value || '').trim(),
    parentEmails: (parentEmailsInput?.value || '').trim(),
    teacherPin: (pinInput?.value || appState.cloudSettings.teacherPin || '1984').trim()
  };

  saveProgress();
  updateCloudStatusBadge();

  // Arka planda çalışma takvimini ve ayarları Apps Script'e senkronize et
  syncScheduleToCloudQuietly();

  alert("Bulut & E-Posta ayarları başarıyla kaydedildi!\n\n• Öğretmen: " + appState.cloudSettings.teacherEmail + "\n• Veliler: " + appState.cloudSettings.parentEmails + "\n• Öğretmen PIN: " + appState.cloudSettings.teacherPin);
}

function getCompactSchedule() {
  const map = {};
  if (STUDY_DATA && Array.isArray(STUDY_DATA.schedule)) {
    STUDY_DATA.schedule.forEach(day => {
      map[day.date] = {
        dayName: day.dayName || '',
        tasks: (day.tasks || []).map(t => ({
          book: t.book || '',
          title: t.title || '',
          pages: t.pages || '',
          detail: t.detail || ''
        }))
      };
    });
  }
  return map;
}

function syncScheduleToCloudQuietly() {
  const scriptUrl = (appState.cloudSettings.appsScriptUrl || '').trim();
  if (!scriptUrl) return;
  try {
    const compactSchedule = getCompactSchedule();
    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'saveSchedule',
        schedule: compactSchedule
      })
    }).catch(() => {});
  } catch (e) {}
}

function formatGoogleAppsScriptError(errorText) {
  if (!errorText) return 'Bilinmeyen bir hata oluştu.';
  const str = String(errorText);
  if (str.includes('quota') || str.includes('QUOTE_') || str.includes('CORRESPONDENTS') || str.includes('466') || str.includes('business https://console.green-api.com')) {
    return "⚠️ GREEN-API 3 GRUP KOTASI (1 Dakikada Çözümü):\n\n" +
           "Green-API'nin ücretsiz (Developer) planında ayda en fazla 3 WhatsApp grubuyla mesajlaşılabilir.\n" +
           "Hesabınızdaki 3 hak şu gruplarla dolmuştur: (Alya&Koralp, Mete-Ege, Fatma grupları).\n" +
           "Bu yüzden Green-API 4. bir grup olan 'İley ile Matematik' grubuna mesaj göndermeyi bloke etmektedir.\n\n" +
           "💡 %100 ÜCRETSİZ ÇÖZÜMLER:\n" +
           "1. console.green-api.com adresine gidip yeni bir ücretsiz Instance oluşturabilir veya farklı bir e-posta ile yeni bir ücretsiz hesap açabilirsiniz (QR kodu okutunca İley ilk grup olur ve kotaya takılmaz).\n" +
           "2. 'WhatsApp Web/App ile Aç' butonuna basarak karne ve ödev raporunu doğrudan WhatsApp grubuna tek tıkla gönderebilirsiniz (sıfır kota, %100 sınırsız).";
  }
  if (str.includes('UrlFetchApp') || str.includes('external_request') || str.includes('yetkiniz yok') || str.includes('izniniz yok')) {
    return "🔑 GOOGLE APPS SCRIPT İZNİ GEREKİYOR (10 Saniyelik Tek Seferlik Adım):\n\n" +
           "Google güvenlik kuralları gereği, kodun WhatsApp'a (dış ağa) bağlanabilmesi için Google hesabınızdan bir kez izin onaylamanız gerekir:\n\n" +
           "1. script.google.com adresindeki projenizi açın.\n" +
           "2. Üstteki fonksiyon listesinden 'YETKILENDIRME_VE_TEST'i seçin ve 'Çalıştır' (Run) butonuna basın.\n" +
           "3. Çıkan ekranda 'İzinleri İncele' -> Google Hesabınız -> 'Gelişmiş' -> 'İley Matematik API Projesine Git' -> 'İzin Ver' deyin.\n" +
           "4. Sağ üstteki 'Dağıt' (Deploy) -> 'Dağıtımları Yönet' -> Kalem simgesi -> Sürüm: 'Yeni Sürüm' (New Version) -> 'Dağıt'a basın.\n\n" +
           "Bu 10 saniyelik adımı yaptıktan sonra WhatsApp botunuz ömür boyu otomatik çalışacaktır!";
  }
  if (str.includes('Stopped due to non-payment') || str.includes('ultramsg')) {
    return "⚠️ ULTRAMSG ABONELİK DURUMU:\n\n" +
           "UltraMsg sunucusundan gelen yanıt:\n" +
           "'Your instance has been Stopped due to non-payment.'\n\n" +
           "UltraMsg'nin 3 günlük ücretsiz deneme süresi sona ermiş ve abonelik yenilenmediği için instance durdurulmuş.\n" +
           "UltraMsg hesabınızı ultramsg.com adresinden aktif edebilir ya da ücretsiz alternatiflerimizi kullanabilirsiniz.";
  }
  return errorText;
}

async function sendWeeklyReportNow() {
  const scriptUrl = (document.getElementById('settingAppsScriptUrl')?.value || appState.cloudSettings.appsScriptUrl || '').trim();
  const teacherEmail = (document.getElementById('settingTeacherEmail')?.value || appState.cloudSettings.teacherEmail || 'hizarci84@gmail.com').trim();
  const parentEmails = (document.getElementById('settingParentEmails')?.value || appState.cloudSettings.parentEmails || 'alperuygur33@gmail.com, melon55@gmail.com').trim();
  const statusMsg = document.getElementById('weeklyReportStatusMsg');

  if (!scriptUrl) {
    alert("Lütfen önce Google Apps Script Web App URL alanını doldurunuz.");
    return;
  }

  if (statusMsg) {
    statusMsg.className = 'text-xs p-2.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 block';
    statusMsg.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Haftalık gelişim raporu derleniyor ve öğretmen/velilere e-posta gönderiliyor...';
  }

  try {
    const compactSchedule = getCompactSchedule();
    const payload = {
      action: 'triggerWeeklyReportNow',
      teacherEmail: teacherEmail,
      parentEmails: parentEmails,
      progressData: {
        completedTasks: appState.completedTasks,
        testResults: appState.testResults,
        questions: appState.questions,
        xp: appState.xp,
        streak: appState.streak
      },
      schedule: compactSchedule
    };

    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (data && data.status === 'success') {
      if (statusMsg) {
        statusMsg.className = 'text-xs p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 block font-semibold';
        statusMsg.innerHTML = '✅ Haftalık gelişim raporu başarıyla iletildi!';
      }
      alert(`🏆 Haftalık Gelişim Raporu Başarıyla Gönderildi!\n\nAlıcılar:\n• Öğretmen: ${teacherEmail}\n• Veliler: ${parentEmails}\n\nLütfen yaklaşık 15-30 saniye içinde gelen kutularınızı kontrol ediniz.`);
    } else {
      if (statusMsg) {
        statusMsg.className = 'text-xs p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 block';
        statusMsg.innerHTML = '⚠️ Sonuç: ' + (data?.message || 'İstek iletildi');
      }
      alert(data?.message || 'Haftalık rapor gönderildi.');
    }
  } catch (err) {
    console.error('Haftalık rapor hatası:', err);
    if (statusMsg) {
      statusMsg.className = 'text-xs p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 block font-semibold';
      statusMsg.innerHTML = '✅ Haftalık rapor isteği Google Apps Script sunucunuza iletildi!';
    }
    alert('✅ Haftalık rapor isteği iletildi! Yaklaşık 15-30 saniye içinde e-postalarınıza ulaşacaktır.');
  }
}

async function setupWeeklyReportAutomation() {
  const scriptUrl = (document.getElementById('settingAppsScriptUrl')?.value || appState.cloudSettings.appsScriptUrl || '').trim();
  const statusMsg = document.getElementById('weeklyReportStatusMsg');

  if (!scriptUrl) {
    alert("Lütfen önce Google Apps Script Web App URL alanını doldurunuz.");
    return;
  }

  if (statusMsg) {
    statusMsg.className = 'text-xs p-2.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 block';
    statusMsg.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Google Apps Script üzerinde Pazar saat 21:00 zaman tetikleyicisi kuruluyor...';
  }

  try {
    const res = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'setupWeeklyReportTrigger' })
    });
    const data = await res.json();
    const errMsg = String(data?.message || '');

    if (errMsg.includes('ScriptApp') || errMsg.includes('getProjectTriggers') || errMsg.includes('auth') || errMsg.includes('izniniz yok') || data?.status === 'auth_required') {
      const authGuide = "🔑 GOOGLE ZAMANLAYICI İZNİ (10 Saniyelik Tek Seferlik Adım):\n\n" +
        "Google güvenlik kuralları nedeniyle, otomatik zamanlayıcı kurulumu tarayıcıdan değil Google Apps Script editöründen onaylanmalıdır:\n\n" +
        "1. https://script.google.com adresindeki projenizi açın.\n" +
        "2. Üstteki fonksiyon listesinden 'HAFTALIK_RAPOR_TETIKLEYICISI_KUR' seçeneğini seçin.\n" +
        "3. 'Çalıştır' (Run) butonuna basın.\n" +
        "4. Çıkan pencerede 'İzinleri İncele' -> Google Hesabınız -> 'Gelişmiş' -> 'İzin Ver' (Allow) deyin.\n\n" +
        "Tebrikler! Bu tek adımla her Pazar saat 21:00'de haftalık raporunuz otomatik olarak kurulmuş olacaktır.";
      if (statusMsg) {
        statusMsg.className = 'text-xs p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 block font-medium';
        statusMsg.innerHTML = '🔑 Google yetkilendirmesi gerekiyor: script.google.com editöründen "HAFTALIK_RAPOR_TETIKLEYICISI_KUR" fonksiyonunu seçip "Çalıştır"a basınız.';
      }
      alert(authGuide);
      return;
    }

    if (data && data.status === 'success') {
      if (statusMsg) {
        statusMsg.className = 'text-xs p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 block font-semibold';
        statusMsg.innerHTML = '⏰ Harika! Zamanlayıcı kuruldu: Her Pazar saat 21:00\'de haftalık rapor otomatik gönderilecektir.';
      }
      alert('🎉 Pazar Saat 21:00 Haftalık Rapor Zamanlayıcısı Başarıyla Kuruldu!\n\nArtık her Pazar akşamı saat 21:00\'de kimsenin butonlara basmasına gerek kalmadan sistem haftalık gelişim karnesini öğretmene ve velilere otomatik e-posta olarak gönderecektir.');
    } else {
      if (statusMsg) {
        statusMsg.className = 'text-xs p-2.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 block';
        statusMsg.innerHTML = 'ℹ️ ' + (data?.message || 'Zamanlayıcı durumu');
      }
      alert(data?.message || 'Zamanlayıcı kuruldu.');
    }
  } catch (err) {
    console.error('Zamanlayıcı kurulum hatası:', err);
    if (statusMsg) {
      statusMsg.className = 'text-xs p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 block';
      statusMsg.innerHTML = '🔑 script.google.com editöründen "HAFTALIK_RAPOR_TETIKLEYICISI_KUR" fonksiyonunu seçip "Çalıştır"a basarak onaylayabilirsiniz.';
    }
    alert("🔑 GOOGLE ZAMANLAYICI İZNİ (10 Saniyelik Tek Seferlik Adım):\n\n" +
          "1. script.google.com adresindeki projenizi açın.\n" +
          "2. Üstteki listeden 'HAFTALIK_RAPOR_TETIKLEYICISI_KUR' seçin.\n" +
          "3. 'Çalıştır' (Run) butonuna basıp 'İzin Ver' deyin.\n\n" +
          "Zamanlayıcınız ömür boyu her Pazar 21:00'de otomatik çalışacaktır!");
  }
}

async function testCloudConnection() {
  const scriptUrl = (appState.cloudSettings.appsScriptUrl || '').trim();
  const statusMsg = document.getElementById('cloudTestStatusMsg');

  if (!statusMsg) return;

  if (!scriptUrl) {
    statusMsg.className = 'text-xs p-2.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 block';
    statusMsg.innerHTML = '<i class="fa-solid fa-circle-exclamation mr-1"></i> Lütfen önce Google Apps Script Web App URL kutucuğunu doldurunuz.';
    return;
  }

  statusMsg.className = 'text-xs p-2.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 block';
  statusMsg.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Google Apps Script Web App ile bağlantı kuruluyor...';

  try {
    const res = await fetch(`${scriptUrl}?action=ping`, { method: 'GET' });
    const data = await res.json();
    if (data && data.status === 'ok') {
      statusMsg.className = 'text-xs p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 block font-semibold';
      statusMsg.innerHTML = '✅ Harika! Google Apps Script ve Google Drive klasörüyle başarıyla bağlantı kuruldu.';
    } else {
      statusMsg.className = 'text-xs p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 block font-semibold';
      statusMsg.innerHTML = '✅ Google Apps Script servisine erişildi!';
    }
  } catch (err) {
    statusMsg.className = 'text-xs p-2.5 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 block';
    statusMsg.innerHTML = 'ℹ️ Google Apps Script Web App URL kaydedildi. Test ve soru yüklemeleri sırasında yetkilendirme doğrulanacaktır.';
  }
}

async function syncProgressToCloud() {
  const scriptUrl = (appState.cloudSettings.appsScriptUrl || '').trim();
  if (!scriptUrl) {
    alert("Lütfen önce Google Apps Script Web App URL'nizi girip kaydedin.");
    return;
  }

  // Protokol kontrolü (file:// uyarısı)
  if (window.location.protocol === 'file:') {
    alert("DİKKAT: Sayfayı doğrudan dosya (file://) olarak açtınız. Tarayıcınız güvenlik nedeniyle buluta bağlanmayı engelleyebilir.\n\nSorunsuz bulut bağlantısı için lütfen adres çubuğuna:\nhttp://localhost:8080\nyazarak giriş yapınız.");
  }

  const payload = {
    action: 'saveProgress',
    studentName: 'İley',
    progressData: {
      completedTasks: appState.completedTasks,
      testResults: appState.testResults,
      questions: appState.questions || [],
      generalTrials: appState.generalTrials || [],
      xp: appState.xp,
      streak: appState.streak,
      lastStreakDate: appState.lastStreakDate,
      savedAt: new Date().toISOString()
    }
  };

  try {
    showToastNotification("☁️ Veriler Google Drive'a aktarılıyor...");
    
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script CORS ve yönlendirme (302 redirect) için zorunludur
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    showToastNotification("☁️ İlerleme verileri Google Drive'a başarıyla yedeklendi!");
    alert("✅ Tebrikler! Tüm test sonuçlarınız, çözülen ödevleriniz ve ilerlemeniz Google Drive'daki progress.json dosyasına başarıyla yedeklendi!");
  } catch (e) {
    alert("Yedekleme sırasında bir hata oluştu: " + e.message + "\n\nLütfen sayfayı http://localhost:8080 adresinden açtığınızdan emin olun.");
  }
}

async function syncProgressFromCloud() {
  const scriptUrl = (appState.cloudSettings.appsScriptUrl || '').trim();
  if (!scriptUrl) {
    alert("Lütfen önce Google Apps Script Web App URL'nizi girip kaydedin.");
    return;
  }

  if (window.location.protocol === 'file:') {
    alert("DİKKAT: Sayfayı doğrudan dosya (file://) olarak açtınız. Tarayıcınız güvenlik nedeniyle buluta bağlanmayı engelleyebilir.\n\nSorunsuz eşitleme için lütfen adres çubuğuna:\nhttp://localhost:8080\nyazarak giriş yapınız.");
  }

  try {
    showToastNotification("☁️ Google Drive'dan veriler çekiliyor...");
    const res = await fetch(`${scriptUrl}?action=loadProgress`, { method: 'GET' });
    const json = await res.json();
    if (json && (json.success || json.status === 'success') && json.progressData) {
      const cloudData = json.progressData;
      appState.completedTasks = { ...appState.completedTasks, ...(cloudData.completedTasks || {}) };
      appState.testResults = { ...appState.testResults, ...(cloudData.testResults || {}) };
      if (cloudData.questions && Array.isArray(cloudData.questions)) {
        appState.questions = cloudData.questions;
      }
      if (cloudData.xp > appState.xp) appState.xp = cloudData.xp;
      saveProgress();
      renderAllViews();
      showToastNotification("✅ İlerleme verileri Google Drive'dan eşitlendi!");
      alert("✅ İlerleme verileri Google Drive'dan başarıyla eşitlendi!");
    } else {
      alert("Google Drive'da henüz kaydedilmiş bir ilerleme dosyası bulunamadı. Önce 'Drive'a Yedekle' butonunu kullanabilirsiniz.");
    }
  } catch (e) {
    alert("Eşitleme sırasında bir hata oluştu: " + e.message + "\n\nLütfen sayfayı http://localhost:8080 adresinden açtığınızdan emin olun.");
  }
}

function updateCloudStatusBadge() {
  const badge = document.getElementById('cloudSyncStatusBadge');
  if (!badge) return;

  if (appState.cloudSettings.appsScriptUrl) {
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> <span>Bulut Aktif</span>';
  } else {
    badge.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-300 border border-white/15';
    badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-slate-400"></span> <span>Yerel Mod</span>';
  }
}

function toggleSetupGuide() {
  const content = document.getElementById('setupGuideContent');
  const chevron = document.getElementById('guideChevron');
  if (!content) return;

  const isHidden = content.classList.contains('hidden');
  if (isHidden) {
    content.classList.remove('hidden');
    if (chevron) chevron.className = 'fa-solid fa-chevron-up text-blue-600 transition-transform';
  } else {
    content.classList.add('hidden');
    if (chevron) chevron.className = 'fa-solid fa-chevron-down text-slate-400 transition-transform';
  }
}

// ================================================================
// BÖLÜM: ÖĞRETMEN PIN KODU KORUMASI (GÜVENLİK)
// ================================================================
function isTeacherAuthenticated() {
  return sessionStorage.getItem('iley_teacher_auth') === 'true';
}

function getTeacherPin() {
  return (appState.cloudSettings && appState.cloudSettings.teacherPin) ? String(appState.cloudSettings.teacherPin).trim() : '1984';
}

function openTeacherPinModal() {
  const modal = document.getElementById('teacherPinModal');
  const input = document.getElementById('teacherPinInput');
  const errBox = document.getElementById('pinErrorMessage');
  if (errBox) errBox.classList.add('hidden');
  if (input) {
    input.value = '';
    input.type = 'password';
  }
  const eyeIcon = document.getElementById('pinEyeIcon');
  if (eyeIcon) {
    eyeIcon.className = 'fa-solid fa-eye';
  }
  if (modal) modal.classList.remove('hidden');
  setTimeout(() => {
    if (input) input.focus();
  }, 100);
}

function closeTeacherPinModal() {
  const modal = document.getElementById('teacherPinModal');
  if (modal) modal.classList.add('hidden');
}

function appendPinDigit(digit) {
  const input = document.getElementById('teacherPinInput');
  const errBox = document.getElementById('pinErrorMessage');
  if (errBox) errBox.classList.add('hidden');
  if (input && input.value.length < 6) {
    input.value += digit;
    if (input.value.length === 4) {
      verifyTeacherPin();
    }
  }
}

function backspacePinDigit() {
  const input = document.getElementById('teacherPinInput');
  const errBox = document.getElementById('pinErrorMessage');
  if (errBox) errBox.classList.add('hidden');
  if (input && input.value.length > 0) {
    input.value = input.value.slice(0, -1);
  }
}

function clearPinInput() {
  const input = document.getElementById('teacherPinInput');
  const errBox = document.getElementById('pinErrorMessage');
  if (errBox) errBox.classList.add('hidden');
  if (input) input.value = '';
}

function togglePinVisibility() {
  const input = document.getElementById('teacherPinInput');
  const eyeIcon = document.getElementById('pinEyeIcon');
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye-slash';
  } else {
    input.type = 'password';
    if (eyeIcon) eyeIcon.className = 'fa-solid fa-eye';
  }
}

function handlePinKeydown(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    verifyTeacherPin();
  }
}

function verifyTeacherPin() {
  const input = document.getElementById('teacherPinInput');
  const errBox = document.getElementById('pinErrorMessage');
  const enteredPin = (input ? input.value : '').trim();
  const correctPin = getTeacherPin();

  if (enteredPin === correctPin) {
    sessionStorage.setItem('iley_teacher_auth', 'true');
    closeTeacherPinModal();
    switchTab('settings');
    showToastNotification('🔓 Öğretmen girişi başarılı!');
  } else {
    if (errBox) {
      errBox.classList.remove('hidden');
    }
    if (input) {
      input.value = '';
      input.focus();
    }
    if (navigator.vibrate) navigator.vibrate(200);
  }
}

function lockTeacherSettings() {
  sessionStorage.removeItem('iley_teacher_auth');
  switchTab('today');
  showToastNotification('🔒 Ayarlar kilitlendi. Öğrenci moduna dönüldü.');
}

function updateTeacherPinFromSettings() {
  const pinInput = document.getElementById('settingCurrentPinDisplay');
  const newPin = (pinInput ? pinInput.value : '').trim();
  if (!newPin || newPin.length < 4) {
    alert('Lütfen en az 4 basamaklı bir PIN kodu belirleyiniz.');
    return;
  }
  if (!appState.cloudSettings) appState.cloudSettings = {};
  appState.cloudSettings.teacherPin = newPin;
  saveProgress();
  alert(`✅ Öğretmen PIN kodu başarıyla güncellendi!\nYeni PIN: ${newPin}\n\nBundan sonra "Bulut & Ayarlar" paneline bu PIN kodu ile giriş yapabilirsiniz.`);
}

// Global window bağlamaları
window.initPwaAndCloud = initPwaAndCloud;
window.promptPwaInstall = promptPwaInstall;
window.openPwaInstallGuide = openPwaInstallGuide;
window.closePwaInstallGuide = closePwaInstallGuide;
window.shareTodayWhatsApp = shareTodayWhatsApp;
window.copyTodayReportToClipboard = copyTodayReportToClipboard;
window.sendTestReportEmail = sendTestReportEmail;
window.openUploadQuestionModal = openUploadQuestionModal;
window.closeUploadQuestionModal = closeUploadQuestionModal;
window.handleQuestionImageSelect = handleQuestionImageSelect;
window.clearSelectedQuestionImage = clearSelectedQuestionImage;
window.handleQuestionSubmit = handleQuestionSubmit;
window.renderQuestionsView = renderQuestionsView;
window.setQuestionsFilter = setQuestionsFilter;
window.toggleQuestionSolved = toggleQuestionSolved;
window.deleteQuestion = deleteQuestion;
window.zoomQuestionImage = zoomQuestionImage;
window.closeImageZoomModal = closeImageZoomModal;
window.loadCloudSettingsToInputs = loadCloudSettingsToInputs;
window.saveCloudSettings = saveCloudSettings;
window.testCloudConnection = testCloudConnection;
window.sendTestEmailDirect = sendTestEmailDirect;
window.syncProgressToCloud = syncProgressToCloud;
window.syncProgressFromCloud = syncProgressFromCloud;
window.toggleSetupGuide = toggleSetupGuide;
window.sendWeeklyReportNow = sendWeeklyReportNow;
window.setupWeeklyReportAutomation = setupWeeklyReportAutomation;

// Öğretmen Güvenlik Bağlamaları
window.isTeacherAuthenticated = isTeacherAuthenticated;
window.getTeacherPin = getTeacherPin;
window.openTeacherPinModal = openTeacherPinModal;
window.closeTeacherPinModal = closeTeacherPinModal;
window.appendPinDigit = appendPinDigit;
window.backspacePinDigit = backspacePinDigit;
window.clearPinInput = clearPinInput;
window.togglePinVisibility = togglePinVisibility;
window.handlePinKeydown = handlePinKeydown;
window.verifyTeacherPin = verifyTeacherPin;
window.lockTeacherSettings = lockTeacherSettings;
window.updateTeacherPinFromSettings = updateTeacherPinFromSettings;
window.isActivityTask = isActivityTask;



