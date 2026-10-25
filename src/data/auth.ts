// Simple password protection for admin panel
// In production, use proper backend authentication

const ADMIN_PASSWORD_KEY = 'admin_password_hash';
const ADMIN_SESSION_KEY = 'admin_session';

// Simple hash function (not cryptographically secure, but sufficient for client-side protection)
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

export function setAdminPassword(password: string): void {
  const hash = simpleHash(password);
  localStorage.setItem(ADMIN_PASSWORD_KEY, hash);
}

export function checkPassword(password: string): boolean {
  const storedHash = localStorage.getItem(ADMIN_PASSWORD_KEY);
  if (!storedHash) return false;
  const inputHash = simpleHash(password);
  return storedHash === inputHash;
}

export function hasPassword(): boolean {
  return localStorage.getItem(ADMIN_PASSWORD_KEY) !== null;
}

export function loginAdmin(): void {
  localStorage.setItem(ADMIN_SESSION_KEY, 'true');
}

export function logoutAdmin(): void {
  localStorage.removeItem(ADMIN_SESSION_KEY);
}

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem(ADMIN_SESSION_KEY) === 'true';
}

export function removePassword(): void {
  localStorage.removeItem(ADMIN_PASSWORD_KEY);
  localStorage.removeItem(ADMIN_SESSION_KEY);
}
