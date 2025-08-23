export const isSafeInput = (value) => {
  return ['string', 'number'].includes(typeof value);
};

export const sanitizeKey = (key) => {
  return String(key).replace(/[^a-zA-Z0-9_-]/g, '');
};

export const safeHasOwn = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};