# 📝 Resume Editor

A web-based Resume Editor built for internship assessment. This app allows users to:

- Upload their resume (PDF or DOCX)
- Edit each section in a user-friendly interface
- Enhance any section using a mock AI backend
- Save and download the resume in JSON format

---

## 📁 Folder Structure

<pre> ````markdown ``` Resume-Editor/ ├── frontend/ # React.js (Vite) + Tailwind CSS + React Query └── backend/ # FastAPI backend (Python) ``` ```` </pre>

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

---

## 🧩 Prerequisites

- Node.js (v18 or above recommended)
- Python 3.10+
- pip
- Git

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone <your-github-repo-url>
cd Resume-Editor
```

### 2. 🖥️ Frontend Setup (React + Vite)

#### 📁 Go to the frontend folder:

- cd frontend
- npm install

#### ▶️ Start the development server:

- npm run dev

The app will be available at: http://localhost:5173

If you're on Mac/Linux, use:

- npm run dev -- --host

### 3. ⚙️ Backend Setup (FastAPI)

#### 📁 Go to the backend folder:

- cd ../backend

#### 🐍 Create virtual environment (Windows):

- python -m venv venv
- venv\Scripts\activate

For Mac/Linux:

- python3 -m venv venv
- source venv/bin/activate

#### 📦 Install dependencies:

- pip install fastapi uvicorn

#### ▶️ Start the backend server:

- uvicorn main:app --reload

The backend will run at: http://localhost:8000

---

## 📂 Features

### ✅ Upload Resume

- Accepts .pdf or .docx files
- Parsing is mocked: dummy resume data is loaded

### ✅ Edit Resume

- Editable fields: name, summary, experience, education, skills

### ✅ Enhance with AI

- "Enhance with AI ✨" button sends data to /ai-enhance
- Returns and displays mocked enhanced content

### ✅ Save Resume

- Sends data to /save-resume
- Stores resume as saved_resume.json in backend folder

### ✅ Download Resume

- Downloads the current resume as a .json file

---

## 🛠 Technologies Used

### Frontend

- Vite + React 18
- Tailwind CSS
- React Query
- React Hot Toast

### Backend:

- FastAPI (Python)
- Pydantic
- CORS middleware

---

## ✅ Author

- **Pranjal Verma**
- Pre-Interview Evaluation Task Submission
