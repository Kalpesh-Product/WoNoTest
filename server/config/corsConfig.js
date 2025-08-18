// corsConfig.js
import cors from "cors";

const staticAllowedOrigins = [
  "http://localhost:3000", // your backend dev
  "http://localhost:4173", // vite preview/dev
  process.env.CORS_FRONTEND_URL, // your deployed frontend (if set)
];

const regexAllowedOrigins = [
  /\.wono\.co$/, // allow any subdomain of wono.co
  /\.localhost:5173$/, // allow any subdomain of localhost:5173 (for Vite dev tenant sites)
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // allow non-browser / curl / server-side requests

    if (
      staticAllowedOrigins.includes(origin) ||
      regexAllowedOrigins.some((regex) => regex.test(origin))
    ) {
      return callback(null, true);
    }

    return callback(new Error(`Not allowed by CORS: ${origin}`));
  },
  credentials: true, // important if you use cookies/sessions
};

export default cors(corsOptions);

// require("dotenv").config();

// const allowedOrigins = [
//   "http://localhost:3000",
//   process.env.CORS_FRONTEND_URL,
//   "http://localhost:4173",
// ];

// const corsConfig = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
//   credentials: true,
// };

// module.exports = { corsConfig, allowedOrigins };
