import FireCard from "@/components/FireCard/FireCard";
import styles from "./page.module.sass";
import prisma from "@/lib/prisma";
import Map from "@/components/Map/Map";
import cardsStyles from "@/components/FireCard/FireCard.module.sass";

export default async function Home() {
  const fromDate = new Date();
  fromDate.setHours(0, 0, 0, 0);
  fromDate.setDate(fromDate.getDate() - 7);
  console.log(fromDate);

  const fires = await prisma.fire.findMany({
    orderBy: {
      id: "desc",
    },
    where: {
      timestamp: {
        gte: fromDate,
      },
    },
  });

  return (
    <main className={styles.main}>
      <div className={cardsStyles.container}>
        {fires &&
          fires.length > 0 &&
          fires.map((fire, index) => <FireCard fire={fire} key={index} />)}
      </div>
        {/* <Map markers={fires} /> */}
    </main>
  );
}
