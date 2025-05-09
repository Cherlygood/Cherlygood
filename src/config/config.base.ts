const config = {
  APP_NAME: "Cherlygood",

  SEO: {
    TITLE: "Cherlygood - Literally Stop, Stare, Then Buy It.",
    DESCRIPTION:
      "Make your style the one everyone's screenshotting—clothes, aesthetic finds, and zero regrets. Shop now!",
    IMAGE: "/opengraph-image.jpg",
    SITE_NAME: "Cherlygood",
    URL: "https://cherlygood.vercel.app/",
    TWITTER_HANDLE: "@cherlygood",
  },

  STRUCTURED_DATA: {
    name: "Cherlygood",
    logo: "https://cherlygood.vercel.app/logo.png",
    socialLinks: [
      "https://www.facebook.com/cherlygood",
      "https://www.instagram.com/cherlygood",
      "https://x.com/cherlygood",
    ],
  },

  REMOTE_PATTERNS: [
    { protocol: "https", hostname: "res.cloudinary.com" }, // Cloudinary
    { protocol: "https", hostname: "i.pinimg.com" }, // Pinterest
    { protocol: "https", hostname: "img.kwcdn.com" }, // Temu
    { protocol: "https", hostname: "firebasestorage.googleapis.com" }, // Firebase
    { protocol: "https", hostname: "ae01.alicdn.com" }, // AliExpress
    { protocol: "https", hostname: "ae02.alicdn.com" }, // AliExpress
    { protocol: "https", hostname: "ae03.alicdn.com" }, // AliExpress
    { protocol: "https", hostname: "ae-pic-a1.aliexpress-media.com" }, // AliExpress
    { protocol: "https", hostname: "ae-pic-a2.aliexpress-media.com" }, // AliExpress
    { protocol: "https", hostname: "ae-pic-a3.aliexpress-media.com" }, // AliExpress
  ],

  FIREBASE: {
    CLIENT: {
      API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
    ADMIN: {
      PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
      PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    },
  },

  PAYPAL: {
    CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    CLIENT_SECRET: process.env.PAYPAL_CLIENT_SECRET,
  },

  RESEND: {
    API_KEY: process.env.RESEND_API_KEY,
  },

  ADMIN: {
    EMAIL: process.env.ADMIN_EMAIL,
    ENTRY_KEY: process.env.ADMIN_ENTRY_KEY,
  },
};

export default config;
