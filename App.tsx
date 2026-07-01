import React from 'react';
import Dashboard from './components/Dashboard';

/**
 * ملف App.tsx الرئيسي
 * يقوم بتغليف التطبيق بهوية بصرية موحدة
 * ويوفر نقاط الدخول للمكونات الأساسية
 */

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30">
      {/* إضافة خلفية خفيفة (Ambient Background) لتعزيز المظهر الاحترافي 
        يمكن استبدالها بـ Tailwind gradients حسب الرغبة 
      */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950 -z-10" />

      {/* المكون الرئيسي للوحة التحكم */}
      <main className="container mx-auto py-8 px-4">
        <Dashboard />
      </main>

      {/* تذييل الصفحة (اختياري) */}
      <footer className="py-6 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Djomoa System - Absolute Sync Engine</p>
      </footer>
    </div>
  );
};

export default App;

