import { TestimonialsProvider } from './context/TestimonialsContext';
import Landing from './pages/Landing';

export default function App() {
  return (
    <TestimonialsProvider>
      <Landing />
    </TestimonialsProvider>
  );
}
