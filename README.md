# MD. Naymul Islam - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🚀 Features

- **Modern Design**: Dark theme with purple and orange accents
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 16 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS v4**: Latest version with custom theme configuration
- **Smooth Animations**: CSS transitions and hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter & Space Grotesk from Google Fonts

## 📁 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── EducationSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       └── ChatButton.tsx
├── public/
├── package.json
└── tailwind.config.ts
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme is defined in `src/app/globals.css` using Tailwind's theme configuration:

- **Primary**: Purple (#a855f7)
- **Secondary**: Orange (#f97316)
- **Background Dark**: Deep black (#050505)
- **Surface Dark**: Slightly lighter black (#0f0f0f)

### Fonts
- **Sans**: Inter (body text)
- **Display**: Space Grotesk (headings)

### Sections
The portfolio includes:
- Hero section with animated background
- About section with personal information
- Skills showcase with interactive cards
- Projects showcase with scroll-based sidebar
- Education timeline
- **Contact form with email functionality**
- Footer with social links

## 📧 Contact Form Setup

The contact form includes:
- **Form Validation**: All fields are required with proper validation
- **Email Integration**: Uses EmailJS for sending emails directly to your Gmail
- **Fallback Method**: Opens default email client if EmailJS is not configured
- **Success/Error States**: Visual feedback for form submission
- **Responsive Design**: Works perfectly on all devices

### Quick Setup (Current Implementation)
The form currently uses a `mailto:` fallback that opens the user's email client with the message pre-filled. This works immediately without any configuration.

### Advanced Setup (EmailJS Integration)
For automatic email sending, follow the setup guide in `EMAILJS_SETUP.md` to configure EmailJS integration.

## 🌐 Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Node.js

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✨ Features Included

- Smooth scrolling navigation
- Animated background elements
- Interactive skills grid with hover effects
- Scroll-based project showcase
- Dynamic project sidebar
- Hover effects on projects
- Glass morphism design elements
- Custom scrollbar styling
- Contact form (frontend only)
- Multiple contact methods (Email, WhatsApp)
- Social media links
- Floating chat button

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:
```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### Meta Tags
Update the metadata in `src/app/layout.tsx` for SEO optimization.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Name**: MD. Naymul Islam
- **Email**: naymulislamnay@gmail.com
- **LinkedIn**: https://bd.linkedin.com/in/naymulislamnay
- **Facebook**: https://www.facebook.com/share/17f6wW3ThL
- **WhatsApp**: +880 1731-150713

---

Built with ❤️ by MD. Naymul Islam
