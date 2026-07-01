import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { getTimelineData } from './query.js';

// إعداد المسارات لبيئة ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

// إعدادات Middleware الأساسية
app.use(cors());
app.use(express.json());

// 1. خدمة ملفات الواجهة الأمامية (Build Folder)
app.use(express.static(path.join(__dirname, 'djomoa-engine/dist')));

// 2. نقطة اتصال البيانات (API Endpoint)
app.get('/api/search', async (req, res) => {
    try {
        const query = req.query.q || "";
        const result = await getTimelineData(query);
        res.json(result);
    } catch (error) {
        console.error("[SERVER ERROR]:", error);
        res.status(500).json({ error: "خطأ في معالجة طلب المحرك" });
    }
});

// 3. الحل البديل الجذري: معالجة كل الطلبات غير التابعة للـ API 
// هذا الكود يتجنب استخدام path-to-regexp نهائياً لمنع أي أخطاء
app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, 'djomoa-engine/dist/index.html'));
    } else {
        next();
    }
});

// بدء السيرفر
app.listen(PORT, '0.0.0.0', () => {
    console.log('--------------------------------------------------');
    console.log(`[SYSTEM] الرزنامة الذهبية جاهزة للعمل`);
    console.log(`[URL] http://localhost:${PORT}`);
    console.log('--------------------------------------------------');
});

