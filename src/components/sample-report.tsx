const findings = [
  {
    severity: "critical",
    label: "Critical",
    title: "Booking plugin has a known, public exploit",
    risk: "The site runs a plugin version with a published vulnerability. Automated bots scan for it daily and can take over the site without a password.",
    fix: "Update the plugin, check for signs of compromise, and turn on automatic security updates.",
  },
  {
    severity: "high",
    label: "High",
    title: "Anyone can send email as your domain",
    risk: "There is no DMARC record, so a scammer can send invoices that look like they came from accounts@yourbusiness.co.za.",
    fix: "Publish SPF, DKIM and DMARC records, starting in monitoring mode so legitimate mail keeps flowing.",
  },
  {
    severity: "high",
    label: "High",
    title: "Admin login is public with no attempt limit",
    risk: "The login page accepts unlimited password guesses, and the admin account has no second factor.",
    fix: "Add rate limiting, two-factor login and move admin access behind Cloudflare Access.",
  },
  {
    severity: "medium",
    label: "Medium",
    title: "Backups live on the same server as the site",
    risk: "If the server is wiped or held to ransom, the backups go with it.",
    fix: "Send daily backups off-site and test a restore once a quarter.",
  },
  {
    severity: "low",
    label: "Low",
    title: "Security headers are missing",
    risk: "Browsers aren't told to block framing or untrusted scripts, which makes some attacks easier.",
    fix: "Add a content security policy, HSTS and the standard header set.",
  },
];

export default function SampleReport() {
  return (
    <div className="report">
      <div className="report__head">
        <p className="report__title">Sample health check: example-dental.co.za</p>
        <p className="muted" style={{ margin: 0 }}>
          5 findings, in the order to fix them
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
              <strong>What it means. </strong>
              {f.risk}
            </p>
            <p>
              <strong>How we fix it. </strong>
              {f.fix}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
