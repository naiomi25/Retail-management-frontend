# 📊 Web Data Management Dashboard (Frontend)
**React · Vite · MUI · License**

## 🎯 Overview
This repository contains the frontend of the Web Data Management project. It provides an interactive web interface for creating, editing, deleting, and visualizing daily sales entries. The application integrates with the backend API and uses modern React patterns, including reusable forms, state management with hooks, and MUI components for a clean UI.

## ⚡ Key Features
- 📝 Entry Management - Create, edit, and delete daily sales entries
- 📊 Dashboard - Search entries by date range and visualize selected data
- 📈 Graphs & Metrics - Future integration for analytics and KPIs
- 🔒 User Authentication - JWT-based authentication with secure API requests

## 🛠️ Technologies Used
| Technology | Purpose |
|------------|--------|
| React 18 | Frontend framework |
| Vite | Development server and bundler |
| MUI (Joy UI) | UI components and styling |
| React Router | Client-side routing |
| useState & Context API | State management |
| fetch / custom API client | Communication with backend |

## 🚀 Installation

### Prerequisites
- Node.js 18+
- Git
- Backend API running and accessible

### Step-by-step Setup
```bash
# Clone the repository
git clone <frontend-repo-url>
cd Web-gestion-datos-front

# Install dependencies
pnpm install   # or npm install

# Run the development server
pnpm dev       # or npm run dev
```
## 📡 API Connection

All API requests use a custom client (`src/api/client.js`) which handles:

- Authorization via JWT stored in `localStorage`
- Sending JSON data with `Content-Type: application/json`
- Error handling and response parsing

## 👤 Entry Operations

| Action           | Endpoint (Backend)                | Method | Description                         |
|-----------------|---------------------------------|--------|-------------------------------------|
| Create Entry     | /api/entries/create             | POST   | Create new sales entry               |
| Edit Entry       | /api/entries/modify/<entry_id>  | PUT    | Update existing entry                |
| Delete Entry     | /api/entries/delete/<entry_id>  | DELETE | Delete entry                         |
| Query by Date Range | /api/entries/range/           | GET    | Retrieve entries within selected dates |

## 🎨 Components & Pages

- **EntryForm** - Reusable form for creating and editing entries  
- **CreateEntry Page** - Page for adding new entries  
- **Dashboard Page** - Main page with search filters, entries list, and future graphs  
- **Sidebar** - Fixed, collapsible navigation for dashboard, entry creation, and metrics  

## 📝 Important Notes

- Forms are controlled using `useState` to ensure data consistency  
- The sidebar is designed to be both fixed and collapsible  
- All dates must follow the `YYYY-MM-DD` format  
- Future enhancement: Integration of graphs and KPIs in the dashboard  

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch: `git checkout -b feature/amazing-feature`  
3. Commit your changes: `git commit -m 'Add some amazing feature'`  
4. Push to the branch: `git push origin feature/amazing-feature`  
5. Open a Pull Request  

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.  

Built with ❤️ using React, Vite, and MUI
