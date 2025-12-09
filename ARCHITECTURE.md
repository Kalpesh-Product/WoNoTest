# WoNo System Architecture

## 1. Overview
The WoNo platform combines a React + Vite administrative frontend with a modular Node.js/Express API backed by MongoDB. It delivers role-based operations for HR, sales, administration, IT, and visitor management, while supporting real-time events, scheduled jobs, asset handling, and website building.

## 2. High-Level Topology
- **Client (Vite/React)** renders the admin experience, manages session persistence, and invokes REST APIs through axios and React Query.
- **API Gateway (Express)** exposes versioned routes under `/api/*`, applying credential handling, JWT verification, audit logging, and error handling.
- **Data Layer** uses MongoDB via Mongoose schemas; Redis (ioredis) is available for caching/real-time patterns; Cloudinary and Multer support file handling.
- **Integrations** include Socket.IO for event delivery, Nodemailer for outbound email, and node-schedule for cron-style automation.

## 3. Component Responsibilities
| Component | Responsibilities | Key Tech & Location |
| --- | --- | --- |
| Frontend shell | Bootstraps theming, routing, data fetching, and Redux persistence | `client/src/main.jsx`, `client/src/App.jsx` |
| UI modules | Feature dashboards (HR, Sales, Assets, Visitors, Admin, IT), ticketing, meetings, profile, website builder | `client/src/pages/**`, `client/src/layouts/**`, `client/src/routes/Routes.jsx` |
| State & data | Global auth context, sidebar context, Redux store with persistence, React Query cache | `client/src/context`, `client/src/redux`, `client/src/main.jsx` |
| API server | Request pipeline, route mounting, static asset serving, error handling | `server/server.js` |
| Middleware & logging | JWT verification, credential/CORS controls, audit logging, global error handler | `server/middlewares/**` |
| Domain logic | Controllers per domain (auth, attendance, payroll, tickets, vendors, finance, inventory, etc.) | `server/controllers/**`, `server/routes/**` |
| Persistence | Mongoose models for users, departments, designations, assets, tickets, budgets, etc. | `server/models/**` |
| Background & real-time | Event listeners and schedulers for logging and timed tasks | `server/listeners/**`, `node-schedule` usage |
| Static delivery | Website templates, HTML landing pages, and public assets | `server/public`, `server/views` |

## 4. Client Architecture
### Composition & Routing
- Browser routing is declared centrally in `Routes.jsx`, layering layouts (authentication vs. main shell) with deep nested feature routes spanning dashboards, HR flows, meetings, tasks, assets, visitors, sales, IT, and admin surfaces.
- `App.jsx` wraps the router with Material UI theming, date pickers, and the Sonner notification system.

### State Management & Data Access
- `main.jsx` wires **Redux Toolkit** with **redux-persist** to retain slices across reloads, while React Contexts (auth, sidebar) hold session and UI state.
- **React Query** coordinates server data caching and mutations, enabling optimistic UI updates and stale-data controls.
- Forms rely on `react-hook-form` and validation helpers; charts and grids use ApexCharts and ag-grid for rich visualization.

### Styling & Assets
- Material UI drives component styling; Tailwind configuration exists for utility classes. Shared styling lives in `App.css`/`index.css`, while page-specific assets are placed in `client/src/assets`.

## 5. Server Architecture
### Application Bootstrap
- `server.js` loads environment variables, connects to MongoDB, configures trust proxy, and applies middleware for credentials, CORS, cookies, JSON parsing, URL encoding, and static asset serving.
- Root path `/` serves an HTML landing page (with JSON/text fallbacks).

### Middleware Pipeline
- **Security**: `verifyJwt` guards most `/api/*` routes; `credentials` pairs with `corsConfig` to enforce origin + credential rules; cookies are parsed for token handling.
- **Audit Logging**: `auditLogger` measures request timings, masks sensitive fields, flattens payloads, and emits `storeLog` events for write operations.
- **Error Handling**: A global `errorHandler` consolidates responses for unhandled errors after routing.

### Routing & Domains
- Modular routers handle domains such as auth, users, roles, departments, attendance, leaves, payroll/payslips, tickets, meetings, assets, inventory, vendors, visitors, finance/budget, sales, website editor, notifications, agreements, access logs, and administrative units.
- A catch-all route delivers `404` pages in HTML/JSON/text formats.

### Data & Integration Layer
- MongoDB models encapsulate schema definitions for organizational entities; Mongoose connections are established once during bootstrap.
- Redis (via `ioredis`) can be used for caching, pub/sub, or rate controls where performance is critical.
- File handling relies on Multer for multipart parsing and Cloudinary for persistent storage; sharp optimizes images when needed.
- Socket.IO enables real-time updates, while node-schedule orchestrates recurring jobs (e.g., payroll cycles or reminders).
- Nodemailer supports system notifications (password resets, approvals, ticket updates).

## 6. Request Lifecycle Example (Authenticated API)
1. Client sends axios request with stored JWT/refresh tokens (Redux + persisted auth context).
2. Express applies `credentials` and `corsConfig`, then parses cookies/body and serves static assets when relevant.
3. `verifyJwt` authenticates and decorates the request with user context; `auditLogger` captures the action and payload metadata.
4. Domain router processes the request (e.g., `/api/payroll`), calling controllers and Mongoose models; optional cache lookups occur via Redis.
5. Response returns to the client; React Query updates its cache and re-renders dependent components.

## 7. Deployment Plan
### Environments
| Environment | Purpose | Notes |
| --- | --- | --- |
| Development | Rapid iteration with hot reload (`vite --host`, `nodemon server.js`) | Use `.env` with local Mongo/Redis; enable verbose logging |
| Staging | UAT and integration testing | Mirror production config; seed sample data; enable Socket.IO in clustered mode |
| Production | SLA-bound deployment | Harden CORS origins, enforce HTTPS, scale stateless nodes horizontally |

### Build & Release Steps
1. **Frontend**
   - Install deps: `npm install` in `client/`.
   - Build: `npm run build` (supports increased memory via `NODE_OPTIONS`).
   - Artifact: deploy `dist/` to CDN/object storage with immutable caching.
2. **Backend**
   - Install deps: `npm install` in `server/`.
   - Provision environment: MongoDB, Redis, Cloudinary creds, JWT secrets, email credentials, scheduler time zone.
   - Start service: `npm start` (or `npm run dev` with nodemon). Run behind process manager (PM2/systemd) and reverse proxy (NGINX) with TLS.
3. **Migrations & Seeds**
   - Apply any schema migrations or seed scripts before switching traffic.
4. **Monitoring & Rollback**
   - Monitor health (HTTP 200s), MongoDB replica status, Redis latency, and audit log throughput.
   - Keep blue/green or canary deployment capability; rollback by redeploying the previous artifact pair (frontend + backend).

## 8. Non-Functional Considerations
- **Security**: JWT-based access control, route-level protections, and masked sensitive fields in audit logs; ensure HTTPS and secure cookies in production.
- **Performance**: Leverage React Query caching, Redis caches, and pagination in controllers; offload heavy processing to scheduled jobs or worker queues if added.
- **Resilience**: Use MongoDB replica sets, retry-friendly axios clients, and health checks on the Express server; serve static fallbacks for `/` and `404` routes.
- **Observability**: Centralize `storeLog` events, expose access logs via `/api/logs`, and aggregate metrics (response time from audit logger) into dashboards.
