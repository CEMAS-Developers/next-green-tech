import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
const iconMap = {
  collected: TrashIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};



export default async function CardWrapper() {
  const { numberzafaconTable,
          totalfullzafaconTable,
          totalemptyzafaconTable,
        } = await fetchCardData()
     return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Recolectado" value={numberzafaconTable} type="collected" />
      <Card title="Pendiente" value={totalfullzafaconTable} type="pending" />
      <Card title="Total de zafacones" value={totalemptyzafaconTable} type="invoices" />
    </div>
  
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-100 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
