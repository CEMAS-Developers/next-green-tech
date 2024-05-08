import ZafaconStatus from '@/app/ui/invoices/status';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchFilteredzafaconTable } from '@/app/lib/data';

export default async function ZafaconesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const zafacones = await fetchFilteredzafaconTable(query, currentPage);
  return (
    <div className="mt-6">
      <div className="overflow-hidden bg-white rounded-lg shadow-md">
        <div className="md:hidden">
          {zafacones?.map((zafacon) => (
            <div key={zafacon.id} className="p-4 border-b">
              <div className="flex items-center justify-between">
                <p className="text-lg font-medium">{zafacon.id}</p>
                <ZafaconStatus status={zafacon.status} />
              </div>
              <p className="text-sm text-gray-500">
                Última recolecta: {formatDateToLocal(zafacon.date)}
              </p>
            </div>
          ))}
        </div>
        <table className="w-full table-fixed min-w-full divide-y divide-gray-200 md:table sm:hidden xs:hidden">
          <thead>
            <tr>
              <th className="w-1/4 px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
                Zafacón
              </th>
              <th className="w-1/4 px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
                Última recolecta
              </th>
              <th className="w-1/4 px-6 py-3 text-xs font-medium tracking-wider text-gray-500 uppercase">
                Estado
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {zafacones?.map((zafacon) => (
              <tr key={zafacon.id} className="bg-white divide-y divide-gray-200">
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <p className="text-sm font-medium text-gray-900">{zafacon.id}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <p className="text-sm text-gray-500">{formatDateToLocal(zafacon.date)}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <ZafaconStatus status={zafacon.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
