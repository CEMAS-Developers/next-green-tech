import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-red-500 text-white': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
          'bg-yellow-500 text-white': status === 'medium'
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Recolección Pendiente
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'medium' ? (
        <>
          Al 50%
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Vacio
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
