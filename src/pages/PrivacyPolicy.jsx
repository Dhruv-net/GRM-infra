import LegalLayout from '../components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Legal — Privacy"
      title="Privacy Policy"
      effectiveDate="Effective date: 18 June 2025"
    >
      <p className="legal-intro">
        This Privacy Policy describes how GRM Infra Ltd (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects,
        uses, and protects your personal data when you visit our website <a href="https://infragrm.com">https://infragrm.com</a>.
        We are committed to safeguarding your privacy and complying with the UK General Data Protection Regulation (UK GDPR).
      </p>

      <div className="legal-section">
        <h2><span className="legal-num">01</span>Who We Are</h2>
        <p>
          GRM Infra Ltd is a company registered in the United Kingdom. Our website is <a href="https://infragrm.com">https://infragrm.com</a>.
        </p>
        <p>
          If you have any questions about this policy or how we handle your data, you can contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@infragrm.com">info@infragrm.com</a><br/>
          <strong>Phone:</strong> 020 3839 9666
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">02</span>What Data We Collect</h2>
        <p>We may collect and process the following types of personal data when you use our website:</p>
        <h3>a) Information you provide directly</h3>
        <ul>
          <li><strong>Contact forms:</strong> When you submit a contact enquiry through our website, we collect your name, email address, phone number, enquiry type, and message content.</li>
          <li><strong>Testimonial submissions:</strong> If you submit a testimonial, we collect your name, the testimonial content, and optionally any additional contact details you provide.</li>
        </ul>
        <h3>b) Technical and usage data</h3>
        <ul>
          <li>Information about how you access and use our website, including your IP address, browser type, device type, operating system, pages visited, and referring URLs.</li>
        </ul>
        <h3>c) Cookies and similar technologies</h3>
        <ul>
          <li>Our website uses cookies to improve functionality and user experience. Details are provided in our separate <a href="cookie-policy.html">Cookie Policy</a>.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">03</span>How We Use Your Data</h2>
        <p>We use your personal data for the following purposes:</p>
        <ul>
          <li>To respond to enquiries or requests submitted via our contact forms.</li>
          <li>To publish testimonials where consent has been given.</li>
          <li>To manage and improve our website, content, and services.</li>
          <li>To comply with legal obligations or regulatory requirements.</li>
        </ul>
        <p>We do not use your data for profiling or automated decision-making.</p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">04</span>Legal Bases for Processing</h2>
        <p>We rely on the following lawful bases under the UK GDPR:</p>
        <ul>
          <li><strong>Consent</strong> – where you voluntarily submit testimonials or allow us to publish your feedback.</li>
          <li><strong>Contract</strong> – where processing is necessary to respond to your contact enquiries or requests.</li>
          <li><strong>Legal obligation</strong> – where required to comply with laws or regulations.</li>
          <li><strong>Legitimate interests</strong> – to improve the performance and security of our website and services, provided this does not override your rights.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">05</span>Data Sharing</h2>
        <p>
          We do not sell or rent your personal data. We may share it with trusted service providers who help us operate
          our website and services, under appropriate confidentiality and data protection agreements. We may also disclose
          personal data where legally required.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">06</span>Data Retention</h2>
        <p>
          We keep personal data only as long as necessary for the purposes for which it was collected, or to comply with
          legal and regulatory obligations. Testimonials may be retained for the duration they are published on our
          website, unless you request their removal.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">07</span>Your Rights</h2>
        <p>Under the UK GDPR, you have the right to:</p>
        <ul>
          <li>Access your personal data.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request deletion of your personal data.</li>
          <li>Object to or restrict certain types of processing.</li>
          <li>Withdraw consent at any time where we rely on it.</li>
          <li>Request the transfer of your data to another party.</li>
        </ul>
        <p>To exercise these rights, please contact <a href="mailto:info@infragrm.com">info@infragrm.com</a>.</p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">08</span>Data Security</h2>
        <p>
          We take appropriate technical and organisational measures to protect personal data against loss, misuse,
          unauthorised access, disclosure, or destruction.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">09</span>Cookies</h2>
        <p>
          We use cookies and similar technologies to enhance website functionality, improve user experience, and understand
          usage patterns. For more information, including how to manage your preferences, please refer to our separate{' '}
          <a href="cookie-policy.html">Cookie Policy</a>.
        </p>
      </div>

      <div className="legal-section">
        <h2><span className="legal-num">10</span>Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Effective Date&rdquo;
          at the top. You should check this page periodically to ensure you are happy with any changes.
        </p>
      </div>

      <div className="legal-section">
        <div className="legal-contact">
          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:</p>
          <p><a href="mailto:info@infragrm.com">info@infragrm.com</a></p>
          <p>020 3839 9666</p>
        </div>
      </div>
    </LegalLayout>
  )
}
