import React from "react";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

export default function ResumeWebsite() {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Arda Hatiboglu
        </motion.h1>

        <motion.p
          className="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm a high school senior and incoming freshman at RIT. I am passionate about programming, music, and tennis. I love building clean, functional websites and exploring new technologies.
        </motion.p>

        <motion.div
          className="links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a href="https://www.linkedin.com/in/arda-hatib-7009b7359/" className="custom-button"><Linkedin className="icon" /> LinkedIn</a>
          <a href="https://github.com/ArdaHatib1212" className="custom-button"><Github className="icon" /> GitHub</a>
          <a href="https://www.canva.com/design/DAGN3SawtR8/n9AsfePf4kz8PqKGCWIeLg/view?utm_content=DAGN3SawtR8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc5c4fc4d4f" className="custom-button"><FileText className="icon" /> Resume</a>
        </motion.div>

        <motion.div
          className="projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="project-card">
            <h2 className="project-title">Flash GPT</h2>
            <p>React website that takes a prompt and a chatGPT API key and creates flashcards to study off of</p>
          </div>
          <div className="project-card">
            <h2 className="project-title">Hamdendental.com</h2>
            <p>Professional react website made to be more user friendly and easily accsessible for patients</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}