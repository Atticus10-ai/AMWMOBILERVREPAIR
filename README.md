# AMW Mobile RV Repair Website

A modern, professional website for AMW Mobile RV Repair serving the Greater Dallas-Fort Worth, TX metropolitan area.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Service Showcase** - Comprehensive list of all RV repair services offered
- **Contact Form** - Easy-to-use form for service requests
- **Mobile-First** - Optimized for mobile users on the go
- **Fast Loading** - Lightweight and optimized for speed
- **SEO Optimized** - Built with search engine optimization in mind

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **Services** - 12 service cards showcasing all offerings
3. **Why Choose Us** - Key differentiators and benefits
4. **About** - Company information and statistics
5. **Service Area** - Cities and regions covered
6. **Testimonials** - Customer reviews and feedback
7. **Emergency Banner** - Prominent call-to-action for urgent needs
8. **Contact** - Contact information and service request form
9. **Footer** - Additional links and information

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript** - Interactive features and animations
- **Font Awesome** - Icon library
- **Google Fonts** - Montserrat and Open Sans fonts

## 📱 Contact Information

- **Phone**: (904) 390-2034
- **Service Area**: Greater Dallas-Fort Worth Metropolitan Area
- **Email**: info@amwmobilervrepair.com

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --secondary-color: #e74c3c;    /* Red */
    --accent-color: #f39c12;       /* Orange */
    --text-dark: #2c3e50;
    --text-light: #7f8c8d;
}
```

### Adding Services

To add a new service, copy a service card in `index.html` and modify:

```html
<div class="service__card">
    <div class="service__icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 class="service__title">Your Service Name</h3>
    <p class="service__description">Your service description</p>
</div>
```

### Contact Form Integration

The contact form currently shows an alert. To integrate with a backend:

1. Update the form action in `script.js`
2. Use a service like Formspree, EmailJS, or your own backend
3. Example with fetch API:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    alert('Thank you! We will contact you soon.');
    contactForm.reset();
});
```

## 🚀 Deployment

### Option 1: Simple Hosting (Recommended for beginners)

Upload these files to any web host:
- index.html
- styles.css
- script.js
- images/ folder

Popular free hosting options:
- **Netlify** - Drag and drop deployment
- **Vercel** - GitHub integration
- **GitHub Pages** - Free hosting for static sites

### Option 2: Netlify Deployment

1. Create account at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Done! Your site is live

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in repository settings
4. Your site will be at `username.github.io/repository-name`

## 📝 File Structure

```
AMWMOBILERVREPAIR-1/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/
    └── amw_logo.jpg    # Company logo
```

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support

For questions about the website, contact the developer or refer to the inline code comments.

## 🔄 Future Enhancements

Potential additions for the future:
- [ ] Online booking system
- [ ] Live chat integration
- [ ] Blog section for RV maintenance tips
- [ ] Photo gallery of completed work
- [ ] Customer portal for service history
- [ ] Integration with Google Maps API for service area visualization
- [ ] Payment processing for invoices

## 📄 License

This website is proprietary to AMW Mobile RV Repair.

---

**Built with ❤️ for AMW Mobile RV Repair**

