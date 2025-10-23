# Deployment Guide - Sarah Mitchell Consulting

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sarah Mitchell Consulting website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/sarah-mitchell-consultant.git
   git push -u origin main
   ```

2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"

3. **Import your repository**:
   - Select your repository from the list
   - Click "Import"

4. **Configure the project**:
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (should be auto-filled)
   - Output Directory: `.next` (should be auto-filled)

5. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add:
     - Name: `ANTHROPIC_API_KEY`
     - Value: Your Anthropic API key from https://console.anthropic.com/

6. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

7. **Set Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add `sarahmitchell-demo.vercel.app` or your custom domain
   - Follow the DNS configuration instructions

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked about settings, accept the defaults

4. **Set Environment Variables**:
   ```bash
   vercel env add ANTHROPIC_API_KEY
   ```
   - Paste your Anthropic API key when prompted
   - Select all environments (production, preview, development)

5. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Important: Environment Variables

The chatbot requires an Anthropic API key to function. Make sure to:

1. Get an API key from [Anthropic Console](https://console.anthropic.com/)
2. Add it to Vercel environment variables
3. Never commit your API key to git

## Custom Domain Setup

To use `sarahmitchell-demo.vercel.app`:

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `sarahmitchell-demo.vercel.app`
4. Vercel will automatically configure it

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version is 18+
- Check build logs for specific errors

### Chatbot Not Working
- Verify `ANTHROPIC_API_KEY` is set in Vercel environment variables
- Check API route logs in Vercel dashboard
- Ensure API key has proper permissions

### Styling Issues
- Clear browser cache
- Check that Tailwind CSS is properly configured
- Verify all CSS files are being imported

## Post-Deployment Checklist

- [ ] Site loads correctly at your Vercel URL
- [ ] All sections display properly
- [ ] Mobile responsive design works
- [ ] Chatbot opens when clicking CTA buttons
- [ ] Chatbot responds to messages (requires API key)
- [ ] Links in footer work correctly
- [ ] Custom domain configured (if applicable)

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy every push to the `main` branch
- Create preview deployments for pull requests
- Run builds and checks before deployment

## Support

For issues with:
- **Vercel Deployment**: Check [Vercel Docs](https://vercel.com/docs)
- **Next.js**: Check [Next.js Docs](https://nextjs.org/docs)
- **Anthropic API**: Check [Anthropic Docs](https://docs.anthropic.com/)
