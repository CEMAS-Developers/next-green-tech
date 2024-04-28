
import ZafaconStatus from '@/app/ui/invoices/status';
import { formatDateToLocal} from '@/app/lib/utils';
import { fetchFilteredzafaconTable } from '@/app/lib/data';

export default async function zafaconesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const zafacones = await fetchFilteredzafaconTable(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {zafacones?.map((zafacones) => (
              <div
                key={zafacones.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                  </div>
                  <ZafaconStatus status={zafacones.status} />
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Zafacón
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ultima recolecta
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estatdo
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {zafacones?.map((zafacones) => (
                <tr
                  key={zafacones.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{zafacones.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(zafacones.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ZafaconStatus status={zafacones.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
