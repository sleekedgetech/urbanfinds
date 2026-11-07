import { Tag, Clock, ShieldCheck, Users, Zap } from 'lucide-react';
import { PRICE_PROMO, PROMO_EXPIRY_DATE } from '../config/links';

const items = [
  { icon: Tag, text: `30% Special Promo: ₦${PRICE_PROMO} Valid Till ${PROMO_EXPIRY_DATE}` },
  { icon: Users, text: 'Live Delivery & Support Group Access Within 5-10 Mins' },
  { icon: Clock, text: 'Fast Priority Nationwide Dispatch' },
  { icon: Zap, text: 'Instant 3-Second Graphene Heat Therapy' },
  { icon: ShieldCheck, text: '30-Day Zero-Risk Money-Back Guarantee' },
];

export default function TickerBar() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-green-brand text-black-deep overflow-hidden py-2.5 relative z-30">
      <div className="animate-ticker flex whitespace-nowrap">
        {doubled.map((item, i) => {
          const Icon = item.icon;
          return (
            <span key={i} className="inline-flex items-center gap-2 mx-8 text-xs font-black tracking-widest uppercase">
              <Icon size={14} strokeWidth={2.5} />
              {item.text}
            </span>
          );
        })}
      </div>
    </div>
  );
}
