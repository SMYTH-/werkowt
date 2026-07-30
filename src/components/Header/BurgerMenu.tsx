'use client';

export interface BurgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function BurgerMenu({ open, setOpen }: BurgerMenuProps) {
  return (
    <div className='flex flex-col gap-1 cursor-pointer' onClick={() => setOpen(!open)}>
      <div
        className={`h-0.5 w-5 bg-black origin-center transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`}
      />
      <div
        className={`h-0.5 w-5 bg-black origin-center transition-opacity ${open ? 'opacity-0' : ''}`}
      />
      <div
        className={`h-0.5 w-5 bg-black origin-center transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`}
      />
    </div>
  );
}