# New Digital Hub — Website Starter

This is a static website starter for New Digital Hub. It contains:
- Responsive home page
- Services and sample starting prices
- About and contact sections
- Draft privacy, terms, refund/cancellation policies
- Contact form that opens the visitor's email app (it does NOT store submissions)
- No payment processing, bank account collection, account verification, or refund API yet

## Before publishing
1. Confirm the business address, legal name, email, and phone.
2. Replace sample prices with your real service fees.
3. Review the policy wording against your actual business and applicable requirements.
4. If a service needs authorisation, offer it only when legally permitted.
5. Do not put Cashfree secret keys, API credentials, customer documents, bank details, passwords, or OTPs in this repository.
6. This website is a static informational website. The contact form uses `mailto:` and needs the visitor to have an email app configured.
7. Cashfree integration must be added later via a secure backend/serverless function after merchant approval and API access. Never expose secret keys in browser JavaScript.

## Publish with GitHub Pages (free for public repositories)
1. Sign in at https://github.com
2. Create a new **Public** repository named `new-digital-hub-website`.
3. Upload all files and folders from this ZIP; make sure `index.html` is at the repository root.
4. Open repository **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**.
6. Select branch `main`, folder `/ (root)`, then Save.
7. Wait for the Pages build. Open the URL shown on the Pages screen and test it on mobile and in a private/incognito window.

## Important
GitHub Pages is static hosting. Do not use it for secret keys, customer bank data, or server-side Cashfree API calls. It does not itself provide a secure payment/refund backend.
