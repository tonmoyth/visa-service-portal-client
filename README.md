# Visa Service Portal (Mini Web App)

A small, visually appealing, and functional web application to explore visa services, view process steps, and track application progress.

---

## 🚀 Features

### 1. Home Page
- Modern hero section with an attractive banner.
- Short description of the portal.
- Navigation menu to other pages.

### 2. Visa Services Page
- Fetches visa services from a (`services.json`).
- Shows service name, description, and estimated processing time.
- Search and filter functionality.
- Uses **Ant Design Cards** + **Tailwind CSS** for a clean grid layout.
- Dark mode support.

### 3. My Application Page
- Form for applicant details:
  - Name
  - Passport Number
  - Visa Type (Dropdown)
- Track application steps with checkboxes.
- Progress bar showing completion percentage.
- All data saved in **localStorage** for persistence.
- Dark mode compatible.

### 4. Design & UX
- Fully responsive for mobile, tablet, and desktop.
- Clean, modern layout.
- Dark mode toggle supported.
- Smooth transitions for better UX.

### 5. Performance & SEO
- Optimized images (if using Next.js, Next/Image component can be used).
- SEO tags included (`<title>`, `<meta description>`, `<meta author>`).

---

## ⚡ Technologies Used
- **React.js** (JavaScript)
- **Tailwind CSS**
- **Ant Design**
- **React Router DOM** (for page navigation)
- **localStorage** (to save application progress)
- Optional: JSON file as mock API for visa services

---

## 🔧 Setup Instructions
```bash
git clone https://github.com/tonmoyth/visa-service-portal-client
cd visa-service-portal-client
npm install
