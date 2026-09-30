import { useInView } from './hooks.js'

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, seen] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
