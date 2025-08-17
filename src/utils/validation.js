/**
 * أدوات التحقق من الأمان
 * توفر وظائف للتحقق من المدخلات والوصول الآمن للخصائص
 */

// التحقق من أن القيمة آمنة (سلسلة نصية أو رقم)
export const isSafeInput = (value) => {
  return ['string', 'number'].includes(typeof value);
};

// إزالة الأحرف الخطرة من المفاتيح
export const sanitizeKey = (key) => {
  return String(key).replace(/[^a-zA-Z0-9_-]/g, '');
};

// التحقق من وجود خاصية بشكل آمن
export const safeHasOwn = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};