# Jil Prajapati - Professional Shopify Developer Portfolio

A modern, minimalist portfolio website showcasing Shopify development expertise, built with pure HTML, CSS, and JavaScript.

## 🚀 Features

- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Modern Design** - Clean, minimalist UI with smooth animations
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Fast Performance** - Lightweight code with optimized assets
- **Interactive Elements** - Smooth scrolling, hover effects, and subtle animations
- **Contact Form** - Validated form with user-friendly error handling
- **Production Ready** - Clean code structure ready for deployment

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet with design system
├── js/
│   └── script.js      # JavaScript functionality
├── images/            # Image assets folder
├── README.md          # This file
└── .gitignore        # Git ignore file
```

## 🎨 Customization Guide

### Update Personal Information

#### Contact Details (index.html)
Find and update these sections in `index.html`:

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Phone -->
<a href="tel:+1234567890">+1 (234) 567-890</a>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>

<!-- GitHub -->
<a href="https://github.com/yourusername">github.com/yourusername</a>
```

#### Professional Summary
Update the About section paragraphs to reflect your specific experience and achievements.

### Add Your Projects

Replace the placeholder projects in the Projects section:

1. **Add Project Screenshots**: Place images in the `images/` folder
2. **Update Project Cards**: Replace placeholder content with your actual projects
3. **Update Links**: Add real GitHub repo and live demo URLs

Example:
```html
<div class="project-card">
    <div class="project-image">
        <img src="images/project1.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Your project description</p>
        <!-- Update tech tags and links -->
    </div>
</div>
```

### Update Professional Experience

Edit the Experience section timeline to reflect your actual work history.

### Add Profile Photo

1. Add your photo to the `images/` folder as `profile.jpg`
2. Add an image element in the hero or about section

### Color Customization

Modify CSS variables in `style.css`:

```css
:root {
    --color-primary: #1e3a8a;        /* Change primary color */
    --color-accent: #3b82f6;          /* Change accent color */
    /* ... other variables */
}
```

## 🚀 Deployment Guide

### Option 1: Deploy to Netlify (Recommended)

#### Step 1: Push to GitHub

1. **Initialize Git repository:**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial commit: Professional portfolio website"
   ```

2. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com) and sign in
   - Click the "+" icon → "New repository"
   - Name it `portfolio` (or your preferred name)
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Connect and push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy on Netlify

1. **Sign up/Login to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Deploy your site:**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `portfolio` repository
   - Build settings (leave as default for static site):
     - Build command: (leave empty)
     - Publish directory: `/` or `.`
   - Click "Deploy site"

3. **Custom Domain (Optional):**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Follow instructions to connect your domain

Your site will be live at: `https://your-site-name.netlify.app`

### Option 2: Deploy to GitHub Pages

1. **Push to GitHub** (follow Step 1 above)

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Source: Select "main" branch
   - Folder: Select "/ (root)"
   - Click "Save"

Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio`

### Option 3: Other Hosting Options

- **Vercel**: Similar to Netlify, connect GitHub repo
- **Cloudflare Pages**: Fast CDN-based hosting
- **Firebase Hosting**: Google's hosting platform
- **Traditional Hosting**: Upload files via FTP to any web host

## 🛠️ Local Development

To run locally:

1. **Simple HTTP Server (Python):**
   ```bash
   cd portfolio
   python -m http.server 8000
   ```
   Visit: `http://localhost:8000`

2. **VS Code Live Server:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

3. **Node.js HTTP Server:**
   ```bash
   npx http-server portfolio
   ```

## 📝 Adding New Sections

To add a new section:

1. Add HTML section in `index.html`:
   ```html
   <section id="new-section" class="new-section">
       <div class="container">
           <div class="section-header">
               <h2 class="section-title">Section Title</h2>
               <div class="title-underline"></div>
           </div>
           <!-- Your content -->
       </div>
   </section>
   ```

2. Add navigation link:
   ```html
   <li><a href="#new-section" class="nav-link">New Section</a></li>
   ```

3. Add CSS styles in `style.css`

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information (email, phone, links)
- [ ] Add real project details and screenshots
- [ ] Update professional experience
- [ ] Add profile photo (optional)
- [ ] Test all links and buttons
- [ ] Test responsive design on multiple devices
- [ ] Validate HTML and CSS
- [ ] Test contact form
- [ ] Optimize images
- [ ] Add favicon (optional)
- [ ] Test on different browsers

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or issues with customization:
- Review the code comments in each file
- Check the browser console for JavaScript errors
- Validate HTML/CSS using W3C validators

---

**Built with ❤️ for Shopify Development**
