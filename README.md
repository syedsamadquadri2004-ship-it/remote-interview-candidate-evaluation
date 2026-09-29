# Remote Interview Candidate Evaluation

A web-based platform for conducting technical interviews remotely. It brings video calls, collaborative coding, interview scheduling, and structured candidate feedback into one workflow for interviewers and candidates.

## Features

- Role-based experiences for interviewers and candidates
- Secure authentication and user synchronization
- Interview scheduling and status tracking
- Live video calls with screen sharing and recording
- Collaborative code editor for technical exercises
- Candidate ratings and written feedback
- Responsive light and dark themes

## Technology

- **Next.js and TypeScript** for the application
- **Tailwind CSS and shadcn/ui** for the interface
- **Clerk** for authentication
- **Convex** for real-time data and backend functions
- **Stream Video** for calls, screen sharing, and recording

## Getting Started

### Prerequisites

- Node.js 18 or newer
- Accounts and projects configured with Clerk, Convex, and Stream

### Configuration

Copy `.env.example` to `.env.local` and add the credentials for your own services:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Never commit `.env.local` or production credentials to source control.

### Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Typical Workflow

1. Sign in as an interviewer or candidate.
2. An interviewer schedules a session and assigns participants.
3. Participants join the video room at the scheduled time.
4. The interviewer uses the collaborative editor and call controls during the session.
5. After the interview, the interviewer records a rating and feedback.

## Security

- Keep Clerk, Convex, and Stream secrets in environment variables.
- Configure the Clerk webhook to point to the application's `/clerk-webhook` endpoint.
- Restrict production credentials to the minimum required permissions and rotate any credential that has been exposed.

## License

See [LICENSE](LICENSE) for license information.
