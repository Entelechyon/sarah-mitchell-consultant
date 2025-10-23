# Sarah Mitchell Consulting - Business Consultant Landing Page

A professional, conversion-focused landing page for a business consultant with an AI-powered lead qualification chatbot.

## Features

- **Professional Design**: Clean, corporate design with navy color scheme that builds trust and credibility
- **Lead Qualification Chatbot**: AI-powered chatbot using Anthropic's Claude API to qualify leads and book consultations
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Comprehensive Sections**:
  - Hero section with clear value proposition
  - About section highlighting experience and approach
  - Services section with detailed offerings
  - Results/outcomes section showing client value
  - Social proof with case studies
  - Process section explaining how to work together
  - Strong CTA section
  - Professional footer

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Anthropic Claude API
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An Anthropic API key ([get one here](https://console.anthropic.com/))

### Installation

1. Clone or navigate to the project directory:
```bash
cd sarah-mitchell-consultant
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local` and add your Anthropic API key:
```bash
ANTHROPIC_API_KEY=your_actual_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Add your environment variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key

5. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

## Customization

### Update Content
- Edit `app/page.tsx` to modify any section content
- Update colors in `tailwind.config.ts` for branding changes

### Modify Chatbot Behavior
- Edit the system prompt in `app/api/chat/route.ts` to change how the chatbot qualifies leads
- Adjust the qualification criteria and conversation flow

### Add Your Logo
- Replace the placeholder logo in the navigation and hero section with your actual logo image

## Project Structure

```
sarah-mitchell-consultant/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # Chatbot API endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main landing page
├── components/
│   └── ChatBot.tsx               # Chatbot component
├── public/                       # Static assets
├── .env.local                    # Environment variables
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Chatbot Features

The AI chatbot is designed to:
- Qualify leads based on business size, revenue, and challenges
- Educate prospects about Sarah's services and approach
- Handle objections professionally
- Capture contact information from qualified leads
- Schedule discovery calls
- Provide value even if the prospect isn't ready to engage

## License

This project is for demonstration purposes.

## Credits

Website by [Zane Priddle](https://zanepriddle.com)
