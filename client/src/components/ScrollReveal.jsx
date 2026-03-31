import { useScrollReveal } from '../hooks/useScrollReveal';
import { fontFamily } from '../theme';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  style = {},
  as: Tag = 'div',
}) {
  const { ref, visible } = useScrollReveal();

  const transform =
    direction === 'left'
      ? visible
        ? 'translateX(0)'
        : 'translateX(-28px)'
      : direction === 'right'
        ? visible
          ? 'translateX(0)'
          : 'translateX(28px)'
        : visible
          ? 'translateY(0)'
          : 'translateY(32px)';

  return (
    <Tag
      ref={ref}
      style={{
        fontFamily,
        opacity: visible ? 1 : 0,
        transform,
        transition: `opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
