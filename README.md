# 🚀 InterviewIQ.AI

An AI-powered mock interview platform that helps users practice technical and HR interviews with real-time question generation, resume analysis, and performance tracking.

🌐 **Live Demo:** https://my-ai-interview-frontend.onrender.com

---

## 📌 Overview

InterviewIQ.AI simulates real interview scenarios using AI. Users can sign in with Google, upload their resume, select a role and experience level, and participate in a personalized mock interview.

The platform analyzes responses and stores interview history so users can track their progress over time.

---

## ✨ Features

- 🔐 Google Authentication using Firebase
- 📄 Resume Upload and Analysis
- 🤖 AI-Generated Interview Questions
- 🎤 Smart Voice Interview Interface
- 📊 Performance Analytics
- 🕒 Timer-Based Interview Simulation
- 📚 Interview History Tracking
- 💳 Payment Integration with Razorpay
- 🌍 Fully Deployed on Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Redux Toolkit
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie-based Sessions

### Third-Party Services
- Firebase Authentication
- Razorpay
- Gemini/OpenAI API

### Deployment
- Render (Frontend + Backend)

---

## 🏗️ System Architecture

```text
User → React Frontend → Express API → MongoDB
                     ↘ Firebase Auth
                     ↘ AI API
                     ↘ Razorpay
