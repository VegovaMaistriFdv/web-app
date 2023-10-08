import { Fire } from "@prisma/client";
import Link from "next/link";
import styles from "./FireCard.module.sass";

export default function FireCard({ fire }: { fire: Fire }) {
  return (
    <Link
      className={`${fire.source === "ESP_32_12345" ? styles.color : ""} ${
        styles.card
      }`}
      href={`/map`}
    >
      <span>{fire.placeName}</span>
      <span>{fire.source}</span>
      <span>latitude: {fire.lat}</span>
      <span>longitude: {fire.lng}</span>
      {/* <span>{fire.timestamp}</span> */}
      {fire.source === "ESP_32_12345" && (
        <>
          <span>CO2: --</span>
          <span>Temperature: --</span>
          <span>Weather: Sunny</span>
        </>
      )}
    </Link>
  );
}
