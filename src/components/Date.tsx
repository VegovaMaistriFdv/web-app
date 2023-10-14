import { format, fromUnixTime } from 'date-fns';
import { enGB } from 'date-fns/locale';

export default function DateTag({ iso }: { iso: Date }) {
  const unix = Math.floor(new Date(iso).getTime() / 1000);
  if (isNaN(unix)) return null;
  const date = fromUnixTime(unix);
  return (
    <time dateTime={unix.toString()}>
      {format(date, 'd. LLL, yyyy', { locale: enGB })}
    </time>
  );
}
