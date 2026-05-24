import { SALON_INFO } from "@/constants/salonData";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-lumiere-bg-dark px-6 py-12 text-lumiere-text-dark/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-script text-2xl text-lumiere-accent">{SALON_INFO.name}</p>
          <p className="mt-1 text-xs">{SALON_INFO.address}</p>
        </div>
        <p className="text-xs tracking-widest">
          © {year} {SALON_INFO.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
