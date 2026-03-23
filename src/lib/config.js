import logo from "/public/images/logoSevaarth.png";

const config = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Sevaarth",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@sevaarth.org",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210",
    address:
      process.env.NEXT_PUBLIC_CONTACT_ADDRESS ||
      "123 Sevaarth Marg, Community Center, New Delhi - 110001",
  },
  logo: logo.src,
  socialLinks: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/sevaarth",
    twitter:
      process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/sevaarth",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/sevaarth",
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      "https://linkedin.com/company/sevaarth",
  },
  public_key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  env: process.env.NODE_ENV,
};

export default config;
