"use client";

import Link from "next/link";
import styles from "./Header.module.sass";
import { useState } from "react";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Header() {
  const [calendarIsOpen, setCalendarIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link className={styles.logo} href={"/"}>
          <img src="img/logotip_vegova_brez_naziva_leze.png" alt="Vegova" />
          <span>Fire Department</span>
        </Link>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={() => {
              setCalendarIsOpen(() => !calendarIsOpen);
            }}
          >
            <span className="material-icons-outlined">date_range</span>
          </div>
        </div>
      </div>

      {calendarIsOpen && (
        <div className={styles.calendarWrapper}>
          <div className={styles.calendar}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar onChange={(date) => console.log(date)} />
            </LocalizationProvider>
          </div>
        </div>
      )}
    </div>
  );
}
