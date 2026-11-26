const findings = [
  {
    severity: "critical",
    label: "Fix today",
    title: "The booking plugin is old and has a known hole",
    risk: "Hackers have a public guide for breaking into this exact version. Bots look for it every day. They don’t need your password.",
    fix: "Update the plugin, check nobody got in already, and turn on automatic updates.",
  },
  {
    severity: "high",
    label: "Fix this week",
    title: "Anyone can send emails that look like they’re from you",
    risk: "A scammer could email your patients a fake invoice from accounts@ your domain, and it would look real.",
    fix: "Add three email settings (SPF, DKIM and DMARC) that tell inboxes which emails are really yours.",
  },
  {
    severity: "high",
    label: "Fix this week",
    title: "Your admin login lets people guess forever",
    risk: "There’s no limit on wrong passwords, and no second step like a code on your phone.",
    fix: "Limit login attempts and turn on two-step login.",
  },
  {
    severity: "medium",
    label: "Fix this month",
    title: "Your backups are on the same server as your site",
    risk: "If the server gets wiped or held for ransom, your backups go with it.",
    fix: "Send a copy somewhere else every day, and test that you can actually restore it.",
  },
  {
    severity: "low",
    label: "When you can",
    title: "Some browser safety settings are missing",
    risk: "Small gaps that make a few kinds of attack easier.",
    fix: "Add the standard security headers. It takes about ten minutes.",
  },
];

export default function SampleReport() {
  return (
    <div className="report">
      <div className="report__head">
        <p className="report__title">Security check: example-dental.co.za</p>
        <p className="muted" style={{ margin: 0 }}>
          5 problems, worst first
        </p>
      </div>
      {findings.map((f, i) => (
        <details key={f.title} className="finding" open={i === 0}>
          <summary>
            <span className={`sev sev--${f.severity}`}>{f.label}</span>
            <span>{f.title}</span>
            <span className="finding__toggle" aria-hidden="true" />
          </summary>
          <div className="finding__body">
            <p>
              <strong>Why it matters: </strong>
              {f.risk}
            </p>
            <p>
              <strong>The fix: </strong>
              {f.fix}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
