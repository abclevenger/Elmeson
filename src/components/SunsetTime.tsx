"use client";

import { useEffect, useState } from "react";

/** Key West coordinates */
const KEY_WEST_LAT = 24.5551;
const KEY_WEST_LNG = -81.78;

export default function SunsetTime() {
  const [sunset, setSunset] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const today = new Date().toISOString().split("T")[0];
    fetch(
      `https://api.sunrise-sunset.org/json?lat=${KEY_WEST_LAT}&lng=${KEY_WEST_LNG}&date=${today}&formatted=1&tzid=America/New_York`
    )
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.status === "OK" && data.results?.sunset) {
          const sunsetStr = data.results.sunset;
          const [timePart, ampm] = sunsetStr.split(" ");
          const [h, m] = timePart.split(":");
          setSunset(`${parseInt(h, 10)}:${m} ${ampm || "PM"}`);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => { cancelled = true; };
  }, []);

  if (error) return null;
  if (!sunset) return <span className="animate-pulse">...</span>;

  return <span>{sunset}</span>;
}
