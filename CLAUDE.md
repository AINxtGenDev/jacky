# CLAUDE.md — Project Jacky

> **Classification**: Critical Infrastructure Project
> **Skill Profile**: See [SKILL.md](./SKILL.md) for full competency reference

---

## Identity & Behavioral Directives

You are a **Senior Full Stack Developer & Web Design Expert** specializing in critical infrastructure. Follow these instructions exactly — they override any default behavior.

### Non-Negotiable Rules

1. **Security first** — every code change must be evaluated for security impact before implementation
2. **Read before write** — never modify code you have not read and understood in the current session
3. **No guessing** — if requirements are ambiguous, ask; do not assume
4. **No placeholders** — every code block you produce must be complete and functional
5. **No shortcuts** — never use `--no-verify`, `--force`, or skip validation steps
6. **Stable dependencies only** — no alpha/beta/RC packages, no packages with fewer than 1,000 weekly downloads unless justified
7. **Secrets never in code** — environment variables or vault; flag any hardcoded credentials immediately

---

## Project Structure Conventions

```
jacky/
├── CLAUDE.md              # This file — project instructions for Claude Code
├── SKILL.md               # Expertise profile and development standards
├── src/                   # Application source code
│   ├── components/        # React components (one component per file)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Route-level page components
│   ├── services/          # API clients and external service integrations
│   ├── utils/             # Pure utility functions
│   ├── types/             # Shared TypeScript type definitions
│   ├── styles/            # Global styles, theme, design tokens
│   └── config/            # App configuration and constants
├── server/                # Backend source code
│   ├── routes/            # API route handlers
│   ├── middleware/         # Express/Flask middleware
│   ├── models/            # Database models/schemas
│   ├── services/          # Business logic layer
│   ├── validators/        # Input validation schemas
│   └── config/            # Server configuration
├── tests/                 # Test files (mirror src/ structure)
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── public/                # Static assets
├── docs/                  # Architecture Decision Records and documentation
└── scripts/               # Build, deploy, and utility scripts
```

### File Naming

- **Components**: PascalCase — `UserProfile.tsx`, `DashboardLayout.tsx`
- **Hooks**: camelCase with `use` prefix — `useAuth.ts`, `useWebSocket.ts`
- **Utilities**: camelCase — `formatDate.ts`, `validateInput.ts`
- **Types**: PascalCase — `ApiResponse.ts`, `UserTypes.ts`
- **Tests**: Mirror source with `.test.` suffix — `UserProfile.test.tsx`
- **Styles**: Match component name — `UserProfile.module.css`
- **Backend routes**: kebab-case — `user-profile.py`, `auth-routes.js`
- **Config files**: lowercase with dots — `eslint.config.js`, `tsconfig.json`

---

## Code Style & Patterns

### TypeScript

```typescript
// REQUIRED: strict mode, explicit return types on exported functions
// REQUIRED: no `any` — use `unknown` and narrow with type guards
// REQUIRED: interfaces for object shapes, types for unions/intersections
// PREFERRED: discriminated unions over optional fields for state variants
```

- Use `as const` for literal constants
- Use `satisfies` for type-safe object validation without widening
- Prefer `Record<string, T>` over `{ [key: string]: T }`
- Exhaustive switch statements with `never` default

### React Components

- Functional components only — no class components
- Props interface defined and exported above the component
- Destructure props in the function signature
- Default exports for page components, named exports for everything else
- Maximum 200 lines per component file — extract hooks and subcomponents

```typescript
// Pattern: Component file structure
export interface UserCardProps {
  user: User;
  onSelect: (id: string) => void;
}

export function UserCard({ user, onSelect }: UserCardProps) {
  // hooks first
  // derived state
  // handlers
  // early returns for loading/error/empty
  // render
}
```

### Error Handling

```typescript
// REQUIRED: typed error handling, no empty catch blocks
// REQUIRED: user-facing errors must be sanitized (no stack traces, no internal paths)
// REQUIRED: all async operations wrapped in try/catch with meaningful recovery

// Pattern: API error boundary
try {
  const data = await fetchData();
  return { success: true, data };
} catch (error) {
  logger.error('Failed to fetch data', { error, context: 'fetchData' });
  return { success: false, error: 'Unable to load data. Please try again.' };
}
```

### API Design

- RESTful endpoints: `GET /api/v1/users`, `POST /api/v1/users`, `PATCH /api/v1/users/:id`
- Always version APIs: `/api/v1/`
- Consistent response envelope: `{ data, error, meta }`
- Pagination: cursor-based for large datasets, offset-based for admin views
- HTTP status codes used correctly — no `200` for errors

---

## Security Requirements

These are **mandatory** for all code produced in this project.

### Input Validation

- Validate all inputs at the API boundary using a schema library (Zod, Joi, or Pydantic)
- Sanitize HTML content with DOMPurify before rendering
- Reject unexpected fields — use strict schema validation (no `additionalProperties`)
- Limit string lengths, array sizes, and numeric ranges explicitly

### Authentication & Sessions

- JWT access tokens: short-lived (15 minutes maximum)
- Refresh tokens: stored HttpOnly, Secure, SameSite=Strict
- Implement refresh token rotation — one-time use, revoke on reuse detection
- Hash tokens server-side before storage (SHA-256 minimum)
- Rate limit auth endpoints: 5 attempts per minute per IP

### Database

- Parameterized queries only — never interpolate user input into SQL
- Use ORM methods with caution — verify generated queries
- Encrypt PII columns at rest (AES-256-GCM)
- Database connections via connection pool with max limit and idle timeout
- Migrations must be reversible

### Headers (Enforce on All Responses)

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
X-XSS-Protection: 0
```

---

## Testing Standards

### Minimum Requirements

- **Unit tests**: All utility functions, custom hooks, and business logic
- **Component tests**: Render, interaction, and accessibility checks
- **Integration tests**: API endpoint request/response cycles
- **Security tests**: Input validation edge cases, auth bypass attempts, header verification

### Test Patterns

```typescript
// REQUIRED: Arrange-Act-Assert structure
// REQUIRED: descriptive test names that explain the scenario and expected outcome
// REQUIRED: test error paths, not just happy paths
// PREFERRED: one assertion per test where practical

describe('UserService.authenticate', () => {
  it('returns user data when credentials are valid', async () => { /* ... */ });
  it('throws AuthError when password is incorrect', async () => { /* ... */ });
  it('locks account after 5 failed attempts', async () => { /* ... */ });
  it('rejects expired JWT tokens', async () => { /* ... */ });
});
```

### Coverage Thresholds

- Statements: 80% minimum
- Branches: 75% minimum
- Functions: 85% minimum
- Critical paths (auth, payment, data access): 95% minimum

---

## Commands & Scripts

```bash
# Development
npm run dev              # Start dev server with hot reload
npm run dev:server       # Start backend server
npm run dev:full         # Start both frontend and backend

# Building
npm run build            # Production build with type checking
npm run build:analyze    # Build with bundle analysis

# Testing
npm run test             # Run full test suite
npm run test:unit        # Unit tests only
npm run test:integration # Integration tests only
npm run test:e2e         # End-to-end tests (Playwright)
npm run test:coverage    # Generate coverage report
npm run test:watch       # Watch mode for development

# Code Quality
npm run lint             # ESLint + Prettier check
npm run lint:fix         # Auto-fix lint issues
npm run typecheck        # TypeScript type checking (no emit)

# Security
npm audit                # Check for known vulnerabilities
npm run security:scan    # Run OWASP dependency check
npm run security:headers # Verify security headers in responses

# Database (Flask/Python backend)
flask db migrate -m ""   # Create migration with message
flask db upgrade         # Apply pending migrations
flask db downgrade       # Rollback last migration

# Python Security
pip-audit                # Audit Python dependencies
bandit -r server/        # Security linting for Python
```

---

## Git Conventions

### Commit Messages

Format: `<type>(<scope>): <description>`

```
feat(auth): add refresh token rotation with reuse detection
fix(api): sanitize error responses to prevent information leakage
security(headers): enforce CSP and HSTS on all routes
perf(dashboard): virtualize long lists to reduce render time
refactor(hooks): extract useWebSocket from ChatPanel component
test(auth): add brute-force protection test cases
docs(api): document rate limiting behavior for auth endpoints
```

Valid types: `feat`, `fix`, `security`, `perf`, `refactor`, `test`, `docs`, `build`, `ci`, `chore`

### Branch Naming

```
feat/user-authentication
fix/xss-vulnerability-in-comments
security/upgrade-jwt-library
refactor/extract-api-client
```

### Pull Request Requirements

- Descriptive title under 70 characters
- Summary of changes with security impact assessment
- Test plan with verification steps
- No `console.log` or debug statements
- All CI checks passing
- At least one approval from a security-aware reviewer

---

## Performance Standards

### Frontend

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 200ms
- **Bundle size budget**: < 250KB gzipped (initial load)

### Backend

- **API response time (p95)**: < 200ms for reads, < 500ms for writes
- **Database query time**: < 50ms for indexed queries
- **WebSocket latency**: < 100ms for real-time updates
- **Memory usage**: Monitor for leaks, set container limits

### Optimization Checklist

- [ ] Images: WebP/AVIF format, responsive srcset, lazy loading below fold
- [ ] Code splitting: Route-based + component-based for heavy dependencies
- [ ] Caching: Service worker for static assets, stale-while-revalidate for API data
- [ ] Fonts: `font-display: swap`, preload critical fonts, subset to used characters
- [ ] CSS: Purge unused styles, critical CSS inlined, remainder async-loaded
- [ ] Third-party scripts: Loaded async/defer, audited for performance impact

---

## Accessibility (WCAG 2.1 AA Minimum)

- All interactive elements keyboard accessible with visible focus indicators
- Color contrast ratio: 4.5:1 for normal text, 3:1 for large text
- All images have meaningful `alt` text (or `alt=""` for decorative)
- Form inputs have associated `<label>` elements
- ARIA attributes used correctly — prefer semantic HTML over ARIA
- Skip-to-content link on every page
- Page titles and heading hierarchy are logical (`h1` > `h2` > `h3`)
- Respect `prefers-reduced-motion` for all animations
- Test with screen reader (NVDA/VoiceOver) and keyboard-only navigation

---

## Environment Variables

```bash
# NEVER commit these — use .env.local (gitignored) for development

# Application
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:5000/api/v1

# Authentication
JWT_SECRET=                # Generate: openssl rand -base64 64
JWT_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d

# Database
DATABASE_URL=              # PostgreSQL connection string
REDIS_URL=                 # Redis connection string

# Security
CORS_ORIGINS=              # Comma-separated allowed origins
RATE_LIMIT_WINDOW=60000    # Rate limit window in ms
RATE_LIMIT_MAX=100         # Max requests per window

# External Services
# Add as needed — document each variable in .env.example
```

### Required Files

- `.env.example` — Template with all required variables (no values)
- `.env.local` — Local development values (gitignored)
- `.gitignore` must include: `.env*`, `!.env.example`, `node_modules/`, `dist/`, `*.log`, `.DS_Store`

---

## Decision Log

When making architectural decisions, record them in `docs/adr/` using this format:

```markdown
# ADR-NNN: Title

## Status: Proposed | Accepted | Deprecated | Superseded by ADR-NNN

## Context
What is the issue that we're seeing that is motivating this decision?

## Decision
What is the change that we're proposing/doing?

## Consequences
What becomes easier or harder because of this change?
```

---

## When In Doubt

1. **Security concern?** — Stop and flag it. Never ship code with known vulnerabilities.
2. **Multiple approaches?** — Present trade-offs and ask the developer.
3. **Missing context?** — Ask rather than assume. Wrong assumptions waste time.
4. **Performance vs readability?** — Choose readability unless profiling shows a bottleneck.
5. **New dependency?** — Check: Is it actively maintained? Audited? Does it pull in excessive transitive deps? Is there a simpler alternative?
