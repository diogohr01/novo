import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { fetchTestimonials, postTestimonial } from '../services/api';

const TestimonialsContext = createContext(null);

export function TestimonialsProvider({ children }) {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refreshTestimonials = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTestimonials();
      setTestimonials(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(
        e?.response?.data?.error ||
          'Não foi possível carregar os depoimentos. Verifique se a API está ativa.'
      );
      setTestimonials([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTestimonial = useCallback(async ({ name, message }) => {
    setError(null);
    try {
      const created = await postTestimonial({ name, message });
      setTestimonials((prev) => [created, ...prev]);
      return created;
    } catch (e) {
      const msg =
        e?.response?.data?.error || 'Não foi possível enviar o depoimento.';
      setError(msg);
      throw e;
    }
  }, []);

  const value = useMemo(
    () => ({
      testimonials,
      loading,
      error,
      refreshTestimonials,
      addTestimonial,
    }),
    [testimonials, loading, error, refreshTestimonials, addTestimonial]
  );

  return (
    <TestimonialsContext.Provider value={value}>
      {children}
    </TestimonialsContext.Provider>
  );
}

export function useTestimonials() {
  const ctx = useContext(TestimonialsContext);
  if (!ctx) {
    throw new Error('useTestimonials deve ser usado dentro de TestimonialsProvider');
  }
  return ctx;
}
