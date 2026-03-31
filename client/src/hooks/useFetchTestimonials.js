import { useEffect } from 'react';
import { useTestimonials } from '../context/TestimonialsContext';

export function useFetchTestimonials() {
  const { refreshTestimonials, loading, error } = useTestimonials();

  useEffect(() => {
    refreshTestimonials();
  }, [refreshTestimonials]);

  return { loading, error };
}
