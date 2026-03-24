# TEAM FLOW

TEAM FLOW is a Next.js platform concept for Odisha's student innovation ecosystem, connecting students, colleges, industry, and government through one unified digital network.

## Built Stack

- Frontend: Next.js App Router + React + TypeScript
- UI: Custom CSS (glassmorphism, gradients, soft shadows, responsive layout, animated sections)
- Backend: Next.js API Routes + MongoDB Atlas (`mongoose`) + Hugging Face Inference API
- Deployment Target: Render

## Pages Implemented

- `/` Home (Landing Page)
- `/about`
- `/problem-solution`
- `/platform-structure`
- `/features`
- `/benefits`
- `/revenue-model`
- `/government-alignment`
- `/execution-plan`
- `/proposal`
- `/contact`
- `/dashboard`
- `/dashboard/student`
- `/dashboard/college`
- `/dashboard/sponsor`

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env.local
```

3. Put required environment variables in `.env.local`:

```env
MONGODB_URI=your_mongodb_connection_string
HF_API_KEY=your_huggingface_api_key
HF_MODEL=meta-llama/Llama-3.1-8B-Instruct
```

4. Start dev server:

```bash
npm run dev
```

## API

- `POST /api/registrations` - Save student/college/sponsor signup entries
- `GET /api/registrations` - Fetch latest 20 registrations
- `POST /api/flow-ai` - Chat reply endpoint for floating Flow AI widget

## Render Deployment

### Option 1: Blueprint (recommended)

1. Push this project to GitHub.
2. In Render, click **New +** -> **Blueprint**.
3. Select your repository.
4. Render will read `render.yaml` automatically.
5. Add environment variable:
   - `MONGODB_URI` = your MongoDB Atlas URI
   - `HF_API_KEY` = your Hugging Face API key
   - `HF_MODEL` = your preferred model (optional)
6. Deploy.

### Option 2: Manual Web Service

- Runtime: Node
- Build Command: `npm install && npm run build`
- Start Command: `npm run start`
- Environment Variables: `MONGODB_URI`, `HF_API_KEY`, `HF_MODEL`

## Security Note

Secrets should stay in environment variables only. If MongoDB URI or HF API key was shared publicly, rotate both before production use.
