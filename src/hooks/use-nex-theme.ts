import { useEffect, useState } from 'react';

const preferenceKey = 'nex-appearance';

export function useNexTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let saved: string | null = null;
    try { saved = localStorage.getItem(preferenceKey); } catch { /* Storage may be unavailable in an embedded workspace. */ }
    const initialDark = root.classList.contains('dark') || (saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', initialDark);
    setDark(initialDark);
    const observer = new MutationObserver(() => setDark(root.classList.contains('dark')));
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    setDark(next);
    try { localStorage.setItem(preferenceKey, next ? 'dark' : 'light'); } catch { /* The current theme still works without storage. */ }
  }

  return { dark, toggleTheme };
}