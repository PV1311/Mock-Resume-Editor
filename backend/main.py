from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EnhanceRequest(BaseModel):
    section: str
    content: str

class ResumeData(BaseModel):
    name: str
    summary: str
    experience: list
    education: list
    skills: list

@app.post("/ai-enhance")
def ai_enhance(req: EnhanceRequest):
    improved = f"[Enhanced] {req.content}"
    return {"enhanced_content": improved}

@app.post("/save-resume")
def save_resume(resume: ResumeData):
    with open("saved_resume.json", "w") as f:
        json.dump(resume.dict(), f, indent=2)
    return {"message": "Resume saved successfully."}
