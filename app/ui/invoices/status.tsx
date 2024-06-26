import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function ZafaconStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-red-500 text-white': status === 'full',
          'bg-green-500 text-white': status === 'empty',
        },
      )}
    >
      {status === 'full' ? (
        <>
          Recolección Pendiente
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'empty' ? (
        <>
          Vacío
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
