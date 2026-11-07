export default function Footer() {
  return (
    <footer className="border-t border-navy-lighter/20 py-10 bg-black-deep text-center text-sm text-slate-text">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="font-heading font-bold text-lg text-white-off mb-2">
          Urban Finds
        </p>
        <p className="text-xs text-slate-text/70 mb-4 max-w-md mx-auto">
          Wearable heat therapy and vibration relief for menstrual cramps.
          Drug-free, non-invasive, and designed for everyday life.
        </p>
        <p className="text-xs text-slate-text/50">
          &copy; {new Date().getFullYear()} Urban Finds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

