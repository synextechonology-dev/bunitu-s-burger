export function IconeInstagram({ w = 2 }: { w?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" />
    </svg>
  );
}
export function IconeWhatsapp({ w = 2 }: { w?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.7L4 20Z" />
    </svg>
  );
}
export function IconePimenta() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 3c1 0 1.5 1 1 2 3 0 5 2.5 4.5 6-.6 4.6-5.4 9-13 10-1.3.2-1.8-1-.8-1.7 3.8-2.6 5.8-6 6.3-10 .3-2.4 1.4-3.9 3-4.3-.5-.9-.6-2 0-2Z" />
    </svg>
  );
}
export function BurgerDesenho({ duplo, bacon, grande }: { duplo?: boolean; bacon?: boolean; grande?: boolean }) {
  return grande ? (
    <span className="burger">
      <span className="b-top" /><span className="b-cebola" />{bacon && <span className="b-bacon" />}<span className="b-queijo" /><span className="b-carne" />
      {duplo && <span className="b-carne" />}
      <span className="b-alface" /><span className="b-base" />
    </span>
  ) : (
    <span className="mini" aria-hidden="true">
      <span className="b-top" /><span className="b-alface" /><span className="b-queijo" /><span className="b-carne" />
      {bacon && <span className="b-bacon" />}{duplo && <span className="b-carne" />}<span className="b-base" />
    </span>
  );
}
