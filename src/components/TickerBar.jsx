import { Truck, Clock, ShieldCheck } from 'lucide-react';

const items = [
  { icon: Truck, text: 'Nationwide Pay on Delivery Available' },
  { icon: Clock, text: 'Fast 24-48 Hr Dispatch' },
  { icon: ShieldCheck, text: 'Limited Promo Stock Remaining' },
  { icon: Truck, text: 'Free Delivery on 2-Pack Orders' },
  { icon: Clock, text: 'Order Today — Ships Tomorrow' },
];

export default function TickerBar() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-green-brand text-black-deep overflow-hidden py-2.5 relative z-50">
      <div className="animate-ticker flex whitespace-nowrap">
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <span key={i} className="inline-flex items-center gap-2 mx-8 text-xs font-bold tracking-widest uppercase">
              <Icon size={14} strokeWidth={2.5} />
              {item.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}

