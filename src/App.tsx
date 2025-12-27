import React, { useState } from 'react';

// --- ICONS (Inline SVG - Aman & Ringan) ---
const Icons = {
  Calendar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  ),
  Users: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Sun: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="orange"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  ),
  Cloud: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0ea5e9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3 1.3-3 3s1.3 3 3 3h14c1.7 0 3-1.3 3-3z" />
      <path d="M17.5 19c1.4-1.4 1.6-3.7.4-5.2A5 5 0 0 0 8.1 12 4.5 4.5 0 0 0 2.5 18" />
    </svg>
  ),
  Sunset: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 9a4 4 0 0 1 4 4" />
      <path d="M12 13h4" />
      <path d="M8 13h4" />
      <path d="M8 9a4 4 0 0 1 4 4" />
      <path d="M16 13h4" />
      <path d="M4 13h4" />
      <path d="M2 17h20" />
      <path d="M2 21h20" />
    </svg>
  ),
  Moon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  ),
  Trash: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  ),
  Save: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  ),
  Link: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  Rotate: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
    </svg>
  ),
  Close: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  Shield: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
};

const StaffBadge = ({ staff, onClick }) => {
  if (!staff) return null;
  return (
    <button
      onClick={onClick}
      className={`max-w-full text-[10px] px-2 py-1 bg-white border border-slate-200 rounded-md shadow-sm hover:border-indigo-400 hover:text-indigo-600 transition-all flex items-center gap-1.5 ${
        staff.position === 'Bar' ? 'hover:bg-purple-50' : 'hover:bg-orange-50'
      }`}
    >
      <span
        className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${
          staff.gender === 'Laki-laki' ? 'bg-blue-400' : 'bg-pink-400'
        }`}
      ></span>
      <span className="font-semibold text-slate-700 truncate max-w-[70px] sm:max-w-[100px]">
        {staff.name}
      </span>
      <span
        className={`flex-shrink-0 ml-0.5 text-[8px] px-1 rounded-sm font-bold uppercase tracking-tighter ${
          staff.position === 'Bar'
            ? 'bg-purple-100 text-purple-700'
            : 'bg-orange-100 text-orange-700'
        }`}
      >
        {staff.position === 'Bar' ? 'B' : 'K'}
      </span>
    </button>
  );
};

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Budi', position: 'Kitchen', gender: 'Laki-laki' },
    { id: 2, name: 'Siti', position: 'Bar', gender: 'Perempuan' },
    { id: 3, name: 'Rudi', position: 'Kitchen', gender: 'Laki-laki' },
    { id: 4, name: 'Dewi', position: 'Bar', gender: 'Perempuan' },
    { id: 5, name: 'Andi', position: 'Kitchen', gender: 'Laki-laki' },
    { id: 6, name: 'Maya', position: 'Bar', gender: 'Perempuan' },
    { id: 7, name: 'Joko', position: 'Kitchen', gender: 'Laki-laki' },
    { id: 8, name: 'Rina', position: 'Bar', gender: 'Perempuan' },
    { id: 9, name: 'Tono', position: 'Kitchen', gender: 'Laki-laki' },
    { id: 10, name: 'Lisa', position: 'Bar', gender: 'Perempuan' },
    { id: 11, name: 'Eko', position: 'Kitchen', gender: 'Laki-laki' },
    { id: 12, name: 'Sari', position: 'Bar', gender: 'Perempuan' },
    { id: 13, name: 'Dhani', position: 'Bar', gender: 'Laki-laki' },
    { id: 14, name: 'Putri', position: 'Kitchen', gender: 'Perempuan' },
    { id: 15, name: 'Bambang', position: 'Kitchen', gender: 'Laki-laki' },
  ]);

  const [newName, setNewName] = useState('');
  const [newPosition, setNewPosition] = useState('Kitchen');
  const [newGender, setNewGender] = useState('Laki-laki');

  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState('1week');
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [dayConfigs, setDayConfigs] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [editModal, setEditModal] = useState({
    isOpen: false,
    dayIdx: null,
    staff: null,
    currentShift: null,
  });

  const [scriptUrl, setScriptUrl] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  const getDayName = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
      });
    } catch (e) {
      return dateStr;
    }
  };

  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // --- CONFIG PHASE ---
  const handlePrepareConfig = () => {
    const start = new Date(startDate);
    const configs = [];
    const count = duration === '1day' ? 1 : 7;

    for (let i = 0; i < count; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const dayIndex = d.getDay();
      const dateStr = d.toISOString().split('T')[0];

      let maxOff = employees.length - 12;
      if (maxOff < 0) maxOff = 0;
      if (dayIndex === 6) maxOff = 0; // Sabtu Full
      if (dayIndex === 0) maxOff = 1; // Minggu 1 Off

      configs.push({ dateStr, dayName: getDayName(dateStr), maxOff });
    }
    setDayConfigs(configs);
    setStep(2);
  };

  const updateMaxOff = (idx, val) => {
    const newConfigs = [...dayConfigs];
    newConfigs[idx].maxOff = parseInt(val) || 0;
    setDayConfigs(newConfigs);
  };

  // --- HELPER UNTUK MENDAPATKAN STATUS KEMARIN ---
  const getPrevStatus = (schedule, dayIdx, empId) => {
    if (dayIdx === 0) return null; // Hari pertama tidak ada history
    const prevDay = schedule[dayIdx - 1];

    if (prevDay.off.find((e) => e.id === empId)) return 'Libur';
    if (prevDay.shifts.Malam.find((e) => e.id === empId)) return 'Malam';
    if (prevDay.shifts.Siang.find((e) => e.id === empId)) return 'Siang';
    if (prevDay.shifts.Pagi.find((e) => e.id === empId)) return 'Pagi';
    if (prevDay.shifts.Middle.find((e) => e.id === empId)) return 'Middle';

    return null;
  };

  // --- HELPER UNTUK MENGHITUNG STREAK (BERAPA HARI DI SHIFT YG SAMA) ---
  const getStreak = (schedule, dayIdx, empId, shiftType) => {
    let streak = 0;
    for (let i = dayIdx - 1; i >= 0; i--) {
      const prevStatus = getPrevStatus(schedule, i + 1, empId); // Helper expects current idx to look back
      if (prevStatus === shiftType) streak++;
      else break;
    }
    return streak;
  };

  // --- ALGORITMA ROTASI SEHAT (Malam -> Siang -> Pagi -> Libur -> Malam) ---
  const generateFinalSchedule = () => {
    let generatedSchedule = [];

    for (let i = 0; i < dayConfigs.length; i++) {
      const config = dayConfigs[i];
      let offStaff = [];
      let workingStaff = [];
      let dailyShifts = { Pagi: [], Siang: [], Middle: [], Malam: [] };
      const assign = (shift, p) => dailyShifts[shift].push(p);

      let pool = shuffleArray([...employees]);

      // 1. TENTUKAN SIAPA YANG LIBUR (OFF)
      // Prioritas Libur: Yang kemarin Pagi (Streak 1 atau 2) atau Siang (Streak 2).
      if (config.maxOff > 0) {
        // Scoring kandidat libur
        pool.sort((a, b) => {
          const statusA = getPrevStatus(generatedSchedule, i, a.id);
          const statusB = getPrevStatus(generatedSchedule, i, b.id);
          const streakA = getStreak(generatedSchedule, i, a.id, statusA);
          const streakB = getStreak(generatedSchedule, i, b.id, statusB);

          const getOffScore = (status, streak) => {
            if (status === 'Pagi') return 100 + streak; // Sangat prioritas (Pagi -> Libur)
            if (status === 'Siang' && streak >= 2) return 80; // Siang (2 hari) -> Libur
            if (status === 'Siang') return 50;
            if (status === 'Malam') return 0; // Malam -> Siang dulu, jangan langsung libur
            if (status === 'Libur') return -100; // Baru libur, jangan libur lagi
            return 10;
          };

          return getOffScore(statusB, streakB) - getOffScore(statusA, streakA);
        });

        // Ambil kandidat, tapi jaga minimal 5 perempuan untuk kerja
        let candidatesOff = [];
        let candidatesWork = [...pool];

        while (
          candidatesOff.length < config.maxOff &&
          candidatesWork.length > 0
        ) {
          const candidate = candidatesWork[0];
          const remainingFemales = candidatesWork.filter(
            (e) => e.id !== candidate.id && e.gender === 'Perempuan'
          ).length;

          if (candidate.gender === 'Perempuan' && remainingFemales < 5) {
            // Skip cewe ini, dia dibutuhkan
            candidatesWork.push(candidatesWork.shift()); // Pindah ke belakang
            if (candidatesWork.length <= 12) break;
          } else {
            candidatesOff.push(candidate);
            candidatesWork.shift();
          }
        }
        offStaff = candidatesOff;
        workingStaff = candidatesWork;
      } else {
        workingStaff = [...pool];
        offStaff = [];
      }

      // 2. TENTUKAN SHIFT KERJA (Flow: Libur -> Malam -> Siang -> Pagi)
      let workPool = shuffleArray(workingStaff);

      // Kita buat sistem skor untuk setiap shift bagi setiap karyawan
      // Score tertinggi menang slot itu.

      const getShiftPreferenceScore = (emp, targetShift) => {
        const prev = getPrevStatus(generatedSchedule, i, emp.id);
        const streak = getStreak(generatedSchedule, i, emp.id, prev);

        // ANTI BURNOUT HARD RULE
        if (prev === 'Malam' && targetShift === 'Pagi') return -1000;

        // RULE: Habis Libur -> Malam
        if (prev === 'Libur') {
          if (targetShift === 'Malam') return 200;
          if (targetShift === 'Middle') return 150;
          if (targetShift === 'Siang') return 50;
          return 0;
        }

        // RULE: Malam -> Malam (max 2) -> Siang
        if (prev === 'Malam') {
          if (streak < 2 && targetShift === 'Malam') return 100; // Stabil
          if (targetShift === 'Siang') return 150; // Rotasi Mundur (Malam ke Siang)
          if (targetShift === 'Middle') return 120;
          return 0;
        }

        // RULE: Siang -> Siang (max 2) -> Pagi
        if (prev === 'Siang') {
          if (streak < 2 && targetShift === 'Siang') return 100; // Stabil
          if (targetShift === 'Pagi') return 150; // Rotasi Mundur (Siang ke Pagi)
          return 0;
        }

        // RULE: Pagi -> Pagi (max 2) -> (Libur sudah dihandle di atas)
        if (prev === 'Pagi') {
          if (targetShift === 'Pagi') return 100;
          if (targetShift === 'Siang') return 50; // Pagi ke Siang (Forward) kurang ideal tp boleh
          return 0;
        }

        // Default / Hari Pertama
        return Math.random() * 50;
      };

      // Fungsi Pengisi Slot dengan Scoring
      const fillSlot = (shiftName, quota, minFemales) => {
        while (dailyShifts[shiftName].length < quota && workPool.length > 0) {
          // 1. Filter Kandidat yang Valid (Cukup Cewe)
          const needsFemale =
            dailyShifts[shiftName].filter((e) => e.gender === 'Perempuan')
              .length < minFemales;

          // 2. Sort pool berdasarkan Score kecocokan ke shift ini
          workPool.sort((a, b) => {
            let scoreA = getShiftPreferenceScore(a, shiftName);
            let scoreB = getShiftPreferenceScore(b, shiftName);

            // Boost score jika kita butuh cewe dan dia cewe
            if (needsFemale) {
              if (a.gender === 'Perempuan') scoreA += 1000;
              if (b.gender === 'Perempuan') scoreB += 1000;
            }

            // Balancing Posisi (Kitchen/Bar)
            const kCount = dailyShifts[shiftName].filter(
              (e) => e.position === 'Kitchen'
            ).length;
            const bCount = dailyShifts[shiftName].filter(
              (e) => e.position === 'Bar'
            ).length;
            const needK = kCount <= bCount;

            if (needK && a.position === 'Kitchen') scoreA += 50;
            if (!needK && a.position === 'Bar') scoreA += 50;
            if (needK && b.position === 'Kitchen') scoreB += 50;
            if (!needK && b.position === 'Bar') scoreB += 50;

            return scoreB - scoreA;
          });

          // Ambil yang terbaik
          assign(shiftName, workPool.shift());
        }
      };

      // Urutan pengisian: Prioritaskan Malam dulu (karena menampung ex-Libur), lalu Siang (ex-Malam), baru Pagi.
      fillSlot('Malam', 3, 1);
      fillSlot('Siang', 4, 2);
      fillSlot('Pagi', 4, 2);
      fillSlot('Middle', 1, 0);

      // Sisa orang (jika Full Team)
      while (workPool.length > 0) {
        if (dailyShifts.Malam.length <= dailyShifts.Siang.length)
          assign('Malam', workPool.pop());
        else assign('Siang', workPool.pop());
      }

      generatedSchedule.push({ ...config, shifts: dailyShifts, off: offStaff });
    }

    setSchedule(generatedSchedule);
    setStep(3);
  };

  const handleEditClick = (dayIdx, staff, currentShift) =>
    setEditModal({ isOpen: true, dayIdx, staff, currentShift });
  const handleMoveStaff = (targetShift) => {
    const { dayIdx, staff, currentShift } = editModal;
    const newSchedule = [...schedule];
    const dayData = newSchedule[dayIdx];
    if (currentShift === 'Libur')
      dayData.off = dayData.off.filter((e) => e.id !== staff.id);
    else
      dayData.shifts[currentShift] = dayData.shifts[currentShift].filter(
        (e) => e.id !== staff.id
      );
    if (targetShift === 'Libur') dayData.off.push(staff);
    else dayData.shifts[targetShift].push(staff);
    setSchedule(newSchedule);
    setEditModal({ ...editModal, isOpen: false });
  };
  const saveToGoogleSheets = async () => {
    if (!scriptUrl) {
      setShowUrlInput(true);
      alert('Masukkan URL Script!');
      return;
    }
    setSaveStatus('loading');
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ schedule }),
      });
      setTimeout(() => setSaveStatus('success'), 1500);
    } catch {
      setSaveStatus('error');
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (newName.trim())
      setEmployees([
        ...employees,
        {
          id: Date.now(),
          name: newName,
          position: newPosition,
          gender: newGender,
        },
      ]);
    setNewName('');
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800 font-sans pb-20 overflow-x-hidden">
      <header className="bg-white border-b sticky top-0 z-30 px-4 h-16 flex justify-between items-center shadow-sm max-w-full">
        <div className="flex items-center gap-2 font-bold text-lg text-slate-800">
          <div className="bg-emerald-600 text-white p-1 rounded flex-shrink-0">
            <Icons.Rotate />
          </div>
          <span className="truncate">
            ShiftMate{' '}
            <span className="text-emerald-600 text-xs font-normal">
              Rotasi Sehat
            </span>
          </span>
        </div>
        <button
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="flex-shrink-0 text-xs px-3 py-1 border rounded-full bg-slate-50 flex gap-1 items-center hover:bg-slate-100 transition-colors"
        >
          <Icons.Link />{' '}
          <span className="hidden sm:inline">
            {scriptUrl ? 'Linked' : 'Connect'}
          </span>
        </button>
      </header>

      {showUrlInput && (
        <div className="bg-white p-4 border-b animate-in slide-in-from-top-2">
          <div className="max-w-5xl mx-auto">
            <input
              className="border w-full p-2 text-xs rounded outline-none"
              value={scriptUrl}
              onChange={(e) => setScriptUrl(e.target.value)}
              placeholder="URL Google Script..."
            />
          </div>
        </div>
      )}

      {editModal.isOpen && editModal.staff && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-5 animate-in fade-in zoom-in-95 relative">
            <button
              onClick={() => setEditModal({ ...editModal, isOpen: false })}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <Icons.Close />
            </button>
            <h3 className="font-bold text-lg mb-1 truncate pr-6">
              Pindahkan {editModal.staff?.name}
            </h3>
            <div className="text-xs text-slate-500 mb-4">
              Posisi saat ini:{' '}
              <span className="font-bold">{editModal.currentShift}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['Pagi', 'Siang', 'Middle', 'Malam', 'Libur'].map((shift) => (
                <button
                  key={shift}
                  onClick={() => handleMoveStaff(shift)}
                  disabled={shift === editModal.currentShift}
                  className={`p-3 rounded-lg border text-sm font-bold transition-all ${
                    shift === 'Libur'
                      ? 'border-red-200 hover:bg-red-50 text-red-600'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  } ${
                    shift === editModal.currentShift
                      ? 'opacity-50 cursor-not-allowed bg-slate-100'
                      : ''
                  }`}
                >
                  {shift}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-4 py-6 w-full">
        <div className="flex justify-center mb-6">
          <div className="flex bg-white rounded-full border p-1 shadow-sm overflow-x-auto max-w-full">
            {[1, 2, 3].map((s) => (
              <button
                key={s}
                onClick={() => {
                  if (s < step) setStep(s);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  step === s
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:bg-slate-50'
                }`}
              >
                {s === 1 ? '1. Staff' : s === 2 ? '2. Config' : '3. Jadwal'}
              </button>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border shadow-sm">
              <h2 className="font-bold mb-3 flex items-center gap-2 text-sm text-slate-700">
                <Icons.Calendar /> Durasi & Tanggal
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button
                  onClick={() => setDuration('1day')}
                  className={`flex-1 py-3 border rounded-lg font-bold text-xs transition-colors ${
                    duration === '1day'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  1 Hari
                </button>
                <button
                  onClick={() => setDuration('1week')}
                  className={`flex-1 py-3 border rounded-lg font-bold text-xs transition-colors ${
                    duration === '1week'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  1 Minggu (Rotasi)
                </button>
              </div>
              <div className="w-full">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
                  Tanggal Mulai
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-slate-300 p-2.5 rounded-lg text-sm font-bold outline-indigo-500 bg-slate-50"
                />
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl border shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-sm flex items-center gap-2 text-slate-700">
                  <Icons.Users /> Staff ({employees.length})
                </h2>
                <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                  Target: 12-14 Org
                </span>
              </div>
              <form
                onSubmit={handleAdd}
                className="flex flex-col sm:flex-row gap-2 mb-4"
              >
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="flex-[2] border border-slate-300 p-2.5 rounded-lg text-sm outline-indigo-500"
                  placeholder="Nama Karyawan"
                />
                <div className="flex gap-2 flex-1">
                  <select
                    value={newPosition}
                    onChange={(e) => setNewPosition(e.target.value)}
                    className="w-1/2 border border-slate-300 p-2 rounded-lg text-sm bg-white"
                  >
                    <option>Kitchen</option>
                    <option>Bar</option>
                  </select>
                  <select
                    value={newGender}
                    onChange={(e) => setNewGender(e.target.value)}
                    className="w-1/2 border border-slate-300 p-2 rounded-lg text-sm bg-white"
                  >
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
                <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors sm:w-auto w-full">
                  Tambah
                </button>
              </form>
              <div className="max-h-60 overflow-y-auto space-y-2 pr-1 custom-scrollbar border-t pt-4">
                {employees.map((e) => (
                  <div
                    key={e.id}
                    className="flex justify-between p-3 border border-slate-100 rounded-lg bg-slate-50/50 text-sm items-center hover:bg-white hover:border-indigo-100 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-8 h-8 flex items-center justify-center text-xs font-bold text-white rounded-full ${
                          e.gender === 'Laki-laki'
                            ? 'bg-blue-500'
                            : 'bg-pink-500'
                        }`}
                      >
                        {e.name ? e.name[0] : '?'}
                      </span>
                      <div>
                        <span className="font-bold block text-slate-700">
                          {e.name}
                        </span>{' '}
                        <span className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                          {e.position}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setEmployees(employees.filter((x) => x.id !== e.id))
                      }
                      className="text-slate-300 hover:text-red-500 p-2"
                    >
                      <Icons.Trash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handlePrepareConfig}
              className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-all"
            >
              Lanjut Konfigurasi &rarr;
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="p-4 border-b bg-slate-50">
              <h2 className="font-bold text-slate-800">Atur Jumlah Libur</h2>
              <p className="text-xs text-slate-500 mt-1">
                Sabtu = 0 Libur, Minggu = 1 Libur.
              </p>
            </div>
            <div className="divide-y divide-slate-100">
              {dayConfigs.map((cfg, idx) => (
                <div
                  key={idx}
                  className="p-4 flex flex-row justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <div className="flex flex-col">
                    <div className="font-bold text-sm text-slate-800">
                      {cfg.dayName}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {cfg.dateStr}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-white border border-slate-200 p-1 rounded-lg">
                    <span className="hidden sm:inline text-[10px] font-bold text-slate-400 pl-2">
                      Kuota Libur:
                    </span>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      value={cfg.maxOff}
                      onChange={(e) => updateMaxOff(idx, e.target.value)}
                      className="w-12 border-none bg-transparent text-center rounded text-sm font-bold focus:ring-0 text-indigo-600"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-full sm:flex-1 border border-slate-300 py-3 rounded-xl font-bold text-slate-600 text-sm hover:bg-slate-50"
              >
                Kembali
              </button>
              <button
                onClick={generateFinalSchedule}
                className="w-full sm:flex-1 bg-emerald-500 text-white py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 text-sm hover:bg-emerald-600"
              >
                Generate Jadwal!
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900 text-white p-5 rounded-xl shadow-xl gap-4">
              <div>
                <h2 className="font-bold text-lg">Jadwal Final</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Malam &rarr; Siang &rarr; Pagi &rarr; Libur.
                </p>
              </div>
              <div className="flex w-full sm:w-auto gap-2">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 sm:flex-none bg-white/10 px-4 py-2 rounded-lg text-xs font-bold hover:bg-white/20 transition-colors"
                >
                  Edit Config
                </button>
                <button
                  onClick={saveToGoogleSheets}
                  disabled={
                    saveStatus === 'loading' || saveStatus === 'success'
                  }
                  className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold shadow flex gap-2 items-center justify-center transition-colors ${
                    saveStatus === 'success'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  }`}
                >
                  <Icons.Save />{' '}
                  {saveStatus === 'loading'
                    ? 'Menyimpan...'
                    : saveStatus === 'success'
                    ? 'Tersimpan'
                    : 'Simpan ke Sheets'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {schedule.map((day, dIdx) => (
                <div
                  key={dIdx}
                  className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col relative hover:shadow-md transition-shadow"
                >
                  <div className="p-3 bg-slate-50 border-b flex justify-between items-center">
                    <span className="font-bold text-slate-800 text-sm">
                      {day.dayName}
                    </span>
                    {day.off.length === 0 && (
                      <span className="text-[9px] bg-indigo-600 text-white px-2 py-0.5 rounded font-bold tracking-wide shadow-sm">
                        FULL TEAM
                      </span>
                    )}
                  </div>
                  <div className="p-3 space-y-3 flex-1">
                    {['Pagi', 'Siang', 'Middle', 'Malam'].map((shift) => {
                      const staffs = day.shifts[shift] || [];
                      const kCount = staffs.filter(
                        (s) => s.position === 'Kitchen'
                      ).length;
                      const bCount = staffs.filter(
                        (s) => s.position === 'Bar'
                      ).length;
                      return (
                        <div
                          key={shift}
                          className={`border rounded-lg p-2.5 ${
                            shift === 'Pagi'
                              ? 'bg-orange-50/40 border-orange-100'
                              : shift === 'Siang'
                              ? 'bg-sky-50/40 border-sky-100'
                              : shift === 'Middle'
                              ? 'bg-amber-50/40 border-amber-100'
                              : 'bg-indigo-50/40 border-indigo-100'
                          }`}
                        >
                          <div className="flex justify-between mb-2 items-center">
                            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                              {shift === 'Pagi' ? (
                                <Icons.Sun />
                              ) : shift === 'Siang' ? (
                                <Icons.Cloud />
                              ) : shift === 'Middle' ? (
                                <Icons.Sunset />
                              ) : (
                                <Icons.Moon />
                              )}{' '}
                              {shift}
                            </span>
                            <div className="flex gap-1">
                              <span className="text-[9px] px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded font-bold border border-orange-200">
                                {kCount}K
                              </span>
                              <span className="text-[9px] px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded font-bold border border-purple-200">
                                {bCount}B
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {staffs.map((emp) => (
                              <StaffBadge
                                key={emp.id}
                                staff={emp}
                                onClick={() =>
                                  handleEditClick(dIdx, emp, shift)
                                }
                              />
                            ))}
                            {staffs.length === 0 && (
                              <span className="text-[10px] text-slate-400 italic pl-1">
                                Tidak ada staff
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    {day.off.length > 0 && (
                      <div className="mt-2 pt-3 border-t border-slate-100">
                        <div className="text-[10px] font-bold text-slate-400 mb-2 flex justify-between items-center">
                          <span className="uppercase tracking-wider">
                            Libur (Off)
                          </span>
                          <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">
                            {day.off.length} Org
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {day.off.map((emp) => (
                            <button
                              key={emp.id}
                              onClick={() =>
                                handleEditClick(dIdx, emp, 'Libur')
                              }
                              className="text-[10px] px-2 py-1 bg-slate-50 border border-slate-200 text-slate-400 rounded-md line-through decoration-slate-400 hover:border-red-300 hover:text-red-500 hover:no-underline hover:bg-white transition-all"
                            >
                              {emp.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
