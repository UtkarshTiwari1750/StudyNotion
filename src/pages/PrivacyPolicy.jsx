import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";

const sections = [
  {
    title: "1. Information we collect",
    body: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>
            <span className="text-richblack-50 font-medium">Account information:</span>{" "}
            first name, last name, email address, password (stored hashed), and
            account type (student, instructor, or admin).
          </li>
          <li>
            <span className="text-richblack-50 font-medium">Profile information:</span>{" "}
            profile picture and other details you choose to add to your profile.
          </li>
          <li>
            <span className="text-richblack-50 font-medium">Learning activity:</span>{" "}
            course enrollments, progress, ratings, and reviews.
          </li>
          <li>
            <span className="text-richblack-50 font-medium">Payment information:</span>{" "}
            when you purchase a course, payment is processed by Razorpay. We
            receive payment confirmation details; we do not store full card
            numbers.
          </li>
          <li>
            <span className="text-richblack-50 font-medium">Communications:</span>{" "}
            Contact Us messages and emails for verification (OTP), password
            reset, and transactional notices.
          </li>
          <li>
            <span className="text-richblack-50 font-medium">Technical data:</span>{" "}
            authentication tokens and basic session data stored in your browser
            while you are signed in.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How we use your information",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Create and manage your account and authenticate you</li>
        <li>Deliver courses, track progress, and support instructor tools</li>
        <li>Process payments and send related confirmations</li>
        <li>Send verification codes, password resets, and service emails</li>
        <li>Respond to support or contact requests</li>
        <li>Maintain security, prevent abuse, and improve the platform</li>
      </ul>
    ),
  },
  {
    title: "3. How we share information",
    body: (
      <>
        <p>
          We do not sell your personal information. We may share data with
          service providers who help us run StudyNotion, including cloud hosting
          and database providers, media storage (for example Cloudinary), payment
          processors (Razorpay), and email delivery services.
        </p>
        <p className="mt-3">
          We may also disclose information if required by law, or to protect the
          rights, safety, and integrity of StudyNotion and its users.
        </p>
      </>
    ),
  },
  {
    title: "4. Cookies and local storage",
    body: (
      <p>
        We use browser storage (such as local storage) to keep you signed in and
        remember session-related data. Clearing this data in your browser may
        sign you out of the platform.
      </p>
    ),
  },
  {
    title: "5. Data retention",
    body: (
      <p>
        We retain account and related data for as long as your account is active
        or as needed to provide the service, comply with legal obligations,
        resolve disputes, and enforce our agreements. You may request account
        deletion through your account settings where available, or by contacting
        us.
      </p>
    ),
  },
  {
    title: "6. Security",
    body: (
      <p>
        We use reasonable technical and organizational measures to protect your
        information, including hashed passwords and authenticated API access. No
        method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    title: "7. Children’s privacy",
    body: (
      <p>
        StudyNotion is not directed at children under 13, and we do not knowingly
        collect personal information from children under 13. If you believe a
        child has provided us with personal information, please contact us so we
        can delete it.
      </p>
    ),
  },
  {
    title: "8. Your choices",
    body: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Update profile details from your account settings</li>
        <li>Reset your password using the forgot-password flow</li>
        <li>Request access, correction, or deletion by contacting us</li>
      </ul>
    ),
  },
  {
    title: "9. Third-party links and integrations",
    body: (
      <p>
        StudyNotion may link to third-party sites or use third-party services
        (for example payment or media providers). Their privacy practices are
        governed by their own policies.
      </p>
    ),
  },
  {
    title: "10. Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The “Last updated”
        date at the top will change when we do. Continued use of StudyNotion
        after an update means you accept the revised policy.
      </p>
    ),
  },
  {
    title: "11. Contact us",
    body: (
      <p>
        If you have questions about this Privacy Policy or your data, reach us
        through the{" "}
        <Link to="/contact" className="text-blue-100 hover:underline">
          Contact Us
        </Link>{" "}
        page.
      </p>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="text-richblack-5">
      <section className="bg-richblack-800">
        <div className="w-11/12 max-w-maxContent mx-auto py-16 px-4 md:px-8">
          <p className="text-richblack-200 text-sm font-medium">Legal</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold font-inter">
            Privacy Policy
          </h1>
          <p className="mt-3 text-richblack-300 text-sm">
            Last updated: November 5, 2026
          </p>
        </div>
      </section>

      <section className="w-11/12 max-w-3xl mx-auto py-12 px-4 md:px-8">
        <p className="text-richblack-300 mb-8">
          StudyNotion (“we”, “us”, or “our”) operates an online learning platform
          that lets students enroll in courses and instructors create and publish
          course content. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have. By using StudyNotion,
          you agree to this policy.
        </p>

        <div className="flex flex-col gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-richblack-5 mb-3">
                {section.title}
              </h2>
              <div className="text-richblack-300 text-sm leading-relaxed">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
