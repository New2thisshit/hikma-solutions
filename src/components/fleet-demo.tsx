"use client";

import { useState } from "react";

type Status = "Available" | "Out on a trip" | "Needs a look";

type Vehicle = { id: string; name: string; reg: string; status: Status; km: number };

type LogEntry = {
  id: number;
  vehicleId: string;
  text: string;
  flagged: boolean;
  approved: boolean;
  time: string;
};

const CHECKS = ["Tyres look fine", "Lights work", "Brakes feel right", "Oil and water okay", "No new damage"];
const PROBLEMS: Record<string, string> = {
  "Tyres look fine": "tyres",
  "Lights work": "lights",
  "Brakes feel right": "brakes",
  "Oil and water okay": "oil or water",
  "No new damage": "new damage",
};

const START: Vehicle[] = [
  { id: "v1", name: "Toyota Hilux", reg: "ND 41-207", status: "Available", km: 84210 },
  { id: "v2", name: "Toyota Corolla", reg: "ND 88-310", status: "Available", km: 61377 },
  { id: "v3", name: "Toyota Quantum", reg: "ND 15-922", status: "Out on a trip", km: 132904 },
];

function now() {
  return new Date().toLocaleTimeString("en-ZA", { hour: "2-digit", minute: "2-digit" });
}

export default function FleetDemo() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(START);
  const [selected, setSelected] = useState("v1");
  const [ticked, setTicked] = useState<string[]>([]);
  const [log, setLog] = useState<LogEntry[]>([
    {
      id: 1,
      vehicleId: "v3",
      text: "Thandi started a trip. All 5 checks passed.",
      flagged: false,
      approved: true,
      time: "07:42",
    },
  ]);
  const [toast, setToast] = useState("");

  const vehicle = vehicles.find((v) => v.id === selected)!;
  const allOk = ticked.length === CHECKS.length;
  const missing = CHECKS.filter((c) => !ticked.includes(c));

  const setStatus = (id: string, status: Status) =>
    setVehicles((vs) => vs.map((v) => (v.id === id ? { ...v, status } : v)));

  const addLog = (entry: Omit<LogEntry, "id" | "time" | "approved">) =>
    setLog((l) => [{ ...entry, id: Date.now(), time: now(), approved: false }, ...l]);

  const toggle = (check: string) =>
    setTicked((t) => (t.includes(check) ? t.filter((c) => c !== check) : [...t, check]));

  const submit = () => {
    if (allOk) {
      setStatus(vehicle.id, "Out on a trip");
      addLog({ vehicleId: vehicle.id, text: "You started a trip. All 5 checks passed.", flagged: false });
      setToast(`Trip started in the ${vehicle.name}. Your supervisor can see it.`);
    } else {
      setStatus(vehicle.id, "Needs a look");
      addLog({
        vehicleId: vehicle.id,
        text: `You reported a problem with: ${missing.map((m) => PROBLEMS[m]).join(", ")}.`,
        flagged: true,
      });
      setToast(`Problem reported. The ${vehicle.name} is parked until someone checks it.`);
    }
    setTicked([]);
  };

  const endTrip = () => {
    setStatus(vehicle.id, "Available");
    addLog({ vehicleId: vehicle.id, text: "You ended the trip and handed back the keys.", flagged: false });
    setToast(`Trip ended. The ${vehicle.name} is free for the next driver.`);
  };

  const approve = (entry: LogEntry) => {
    setLog((l) => l.map((e) => (e.id === entry.id ? { ...e, approved: true } : e)));
    if (entry.flagged) setStatus(entry.vehicleId, "Available");
  };

  const reset = () => {
    setVehicles(START);
    setSelected("v1");
    setTicked([]);
    setLog((l) => l.slice(-1));
    setToast("");
  };

  return (
    <div className="fleet">
      <div className="fleet__phone" aria-label="Driver's phone">
        <p className="fleet__label">Driver&rsquo;s phone</p>
        <label className="field">
          Which vehicle?
          <select
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              setTicked([]);
              setToast("");
            }}
          >
            {vehicles.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} ({v.reg})
              </option>
            ))}
          </select>
        </label>

        {vehicle.status === "Out on a trip" ? (
          <div className="fleet__step">
            <p style={{ margin: 0 }}>This vehicle is out on a trip.</p>
            <button type="button" className="btn btn-saffron" onClick={endTrip}>
              End trip
            </button>
          </div>
        ) : (
          <fieldset className="fleet__checks">
            <legend>Before you drive, check:</legend>
            {CHECKS.map((c) => (
              <label key={c} className="fleet__check">
                <input type="checkbox" checked={ticked.includes(c)} onChange={() => toggle(c)} />
                {c}
              </label>
            ))}
            <button type="button" className={`btn ${allOk ? "btn-saffron" : "btn-line"}`} onClick={submit}>
              {allOk ? "Start trip" : "Report a problem"}
            </button>
            {!allOk ? (
              <p className="fleet__hint">Tick everything that&rsquo;s fine. Anything left unticked gets reported.</p>
            ) : null}
          </fieldset>
        )}
        <p className="fleet__toast" role="status" aria-live="polite">
          {toast}
        </p>
      </div>

      <div className="fleet__board" aria-label="Supervisor's screen">
        <div className="fleet__board-head">
          <p className="fleet__label" style={{ margin: 0 }}>Supervisor&rsquo;s screen</p>
          <button type="button" className="fleet__reset" onClick={reset}>
            Start over
          </button>
        </div>
        <ul className="fleet__vehicles">
          {vehicles.map((v) => (
            <li key={v.id}>
              <span>
                <strong>{v.name}</strong>
                <span className="muted"> {v.reg}</span>
              </span>
              <span className={`fleet__status fleet__status--${v.status === "Available" ? "ok" : v.status === "Out on a trip" ? "out" : "bad"}`}>
                {v.status}
              </span>
            </li>
          ))}
        </ul>
        <p className="fleet__label" style={{ marginTop: "1.25rem" }}>Today</p>
        <ul className="fleet__log">
          {log.map((e) => {
            const v = vehicles.find((x) => x.id === e.vehicleId)!;
            return (
              <li key={e.id} className={e.flagged ? "is-flagged" : undefined}>
                <span className="muted fleet__time">{e.time}</span>
                <span>
                  <strong>{v.name}.</strong> {e.text}
                </span>
                {e.approved ? (
                  <span className="fleet__done">{e.flagged ? "Fixed" : "Approved"}</span>
                ) : (
                  <button type="button" className="fleet__approve" onClick={() => approve(e)}>
                    {e.flagged ? "Mark fixed" : "Approve"}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
