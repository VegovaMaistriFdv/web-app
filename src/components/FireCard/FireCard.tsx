import { Fire } from '@prisma/client';
import Link from 'next/link';
import styles from './FireCard.module.sass';
import DateTag from '@/components/Date';

export default function FireCard({ fire }: { fire: Fire }) {
  return (
    <Link
      className={`${styles.card} ${
        fire.source.startsWith('ESP') ? styles.localModuleCard : ''
      }`}
      href={`/map`}>
      <span>
        <h2>{fire.placeName}</h2>
      </span>
      <span>
        <h3>
          {fire.source} | <DateTag iso={fire.timestamp} />
        </h3>
      </span>
      <span>latitude: {fire.lat}, longitude: {fire.lng}</span>

      {fire.source.startsWith('ESP') && (
        <div className={styles.localModuleProps}>
          <span>CO2: --</span>
          <span>Temperature: --</span>
          <span>Weather: --</span>
        </div>
      )}
    </Link>
  );
}
