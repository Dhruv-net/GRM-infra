import LegalLayout from '../components/LegalLayout'

export default function CookiePolicy() {
  return (
    <LegalLayout
      eyebrow="Legal — Cookies"
      title="Cookie Policy"
      effectiveDate="Last updated: 18 June 2025"
    >
      <p className="legal-intro">
        This Cookie Policy applies to citizens and legal permanent residents of the United Kingdom and explains how
        GRM Infra Ltd uses cookies and similar technologies on <a href="https://infragrm.com">https://infragrm.com</a>.
      </p>

      <div className="legal-section">
        <h2><span className="legal-num">01</span>Introduction</h2>
        <p>
          Our website, <a href="https://infragrm.com">https://infragrm.com</a> (hereinafter: &ldquo;the website&rdquo;)
          uses cookies and other related technologies (for convenience all technologies are referred to as
          &ldquo;cookies&rdquo;). Third parties may also place cookies on the site, as detailed below in this policy.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">02</span>What are cookies?</h2>
        <p>
          A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the
          hard drive of your computer or another device. Information stored may be returned to our servers during
          subsequent visits.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">03</span>What are scripts?</h2>
        <p>
          A script is a piece of program code that is used to make our website function properly and interactively.
          Code executes on our servers or on your device.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">04</span>What is a web beacon?</h2>
        <p>
          A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor
          traffic on a website. Various data about you is stored through web beacons.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">05</span>Cookies</h2>
        <h3>5.1 Technical or functional cookies</h3>
        <p>
          Some cookies ensure that certain parts of the website work properly and that your user preferences remain known.
          These enable easier browsing without repeatedly entering the same information. These may be placed without consent.
        </p>
        <h3>5.2 Statistics cookies</h3>
        <p>
          We use statistics cookies to optimise the website experience for our users. Permission is requested before
          placing these analytics cookies.
        </p>
        <h3>5.3 Marketing/Tracking cookies</h3>
        <p>
          Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to
          display advertising or to track the user on this website or across several websites for similar marketing purposes.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">06</span>Placed cookies</h2>
        <p>The cookies we may place on your device fall into the following categories:</p>
        <ul>
          <li><strong>Functional cookies</strong> – remember your preferences and keep core features of the site working.</li>
          <li><strong>Statistics cookies</strong> – help us understand how visitors interact with the website so we can improve it.</li>
          <li><strong>Marketing/Tracking cookies</strong> – used, where you consent, to measure the effectiveness of our communications.</li>
          <li><strong>Consent cookies</strong> – record your cookie preferences so you are not asked on every visit (retained for up to 365 days).</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">07</span>Consent</h2>
        <p>
          When you visit our website for the first time, we will show you a pop-up with an explanation about cookies.
          Selecting &ldquo;Save preferences&rdquo; indicates your consent to the cookie categories you have chosen, as
          detailed in this policy. You may disable cookies through your browser settings, though website functionality
          may be affected.
        </p>
        <h3>7.1 Manage your consent settings</h3>
        <p>Cookie preference management requires JavaScript support in your browser.</p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">08</span>Enabling/disabling and deleting cookies</h2>
        <p>
          You may automatically or manually delete cookies via your internet browser settings. Specific cookies can be
          blocked, and browsers can notify you when cookies are placed. Website functionality may diminish with all cookies
          disabled. Deleted cookies are reinstated upon your revisit with renewed consent.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">09</span>Your rights with respect to personal data</h2>
        <p>You have the following rights:</p>
        <ul>
          <li>Right to know why your personal data is needed, what happens to it, and how long it is retained.</li>
          <li>Right of access to the personal data we hold about you.</li>
          <li>Right to rectification: supplement, correct, delete, or block your personal data.</li>
          <li>Right to revoke your consent and have your data deleted.</li>
          <li>Right to transfer your data to another controller.</li>
          <li>Right to object to the processing of your data.</li>
        </ul>
        <p>
          Contact us to exercise these rights. Complaints regarding data handling may be submitted to the Information
          Commissioner&rsquo;s Office (ICO).
        </p>
      </div>

      <div className="legal-section">
        <div className="legal-contact">
          <h3>Contact details</h3>
          <p><strong>GRM Infra Ltd</strong></p>
          <p>Unit 15, Orbital 25 Business Park, Dwight Road, Watford WD18 9DA<br/>United Kingdom</p>
          <p>Website: <a href="https://infragrm.com">https://infragrm.com</a></p>
          <p>Email: <a href="mailto:info@infragrm.com">info@infragrm.com</a></p>
          <p>Phone: 020 3839 9666</p>
        </div>
      </div>
    </LegalLayout>
  )
}
