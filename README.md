# visionaid-for-blind
VisionAid: Accessible People Detection Tutorial
Overview

VisionAid is an interactive, web-based research tutorial created as part of a graduate-level course project.
It explores computer vision–based people detection systems designed to support blind and low-vision users in public and social settings.

The tutorial is delivered as a website with a structured learning path, visuals, and audio narration for accessibility.
It is hosted via GitHub Pages:
👉 Live Tutorial

Motivation

Blind and visually impaired individuals often struggle with crowd awareness — understanding how many people are nearby and where they are located.
This project demonstrates how computer vision techniques like YOLO and Faster R-CNN can help detect people in real time, and how the results can be translated into accessible feedback (voice, haptics, tones).

The tutorial not only reviews existing research but also addresses challenges, ethical considerations, and future opportunities.

Features

Structured Tutorial: Divided into thematic pages (Introduction, Detection Methods, Feedback, Tools, Challenges, Quiz, Bibliography).

Mixed Media: Includes at least 5 original diagrams (pipeline, YOLO vs Faster R-CNN, lighting, occlusion, ethics).

Accessibility: Each page has an audio narration (.m4a) and transcripts for inclusive learning.

Annotated Bibliography: Links to 5 academic references with summaries and reliability notes.

Interactivity: A built-in quiz tests user knowledge and reinforces learning.

Deployed Website: Fully functional on GitHub Pages.

Tutorial Structure

The tutorial follows a clear learning flow:

Introduction & Problem Definition – Why people detection matters for blind/low-vision users.

People Detection Methods – Traditional vs deep learning models (YOLO, Faster R-CNN) with diagrams.

Accessible Feedback – Voice, haptic, and auditory feedback; privacy and ethics.

Current Tools & Systems – Review of existing assistive technologies.

Challenges & Future Directions – Limitations today and opportunities ahead.

Quiz – Interactive self-assessment of understanding.

Annotated Bibliography – Supporting references and sources.

Technical Details

Languages: HTML, CSS, JavaScript

Assets: SVG diagrams, audio narration (M4A), transcripts

Organization:

visionaid_site_v2/
├── index.html               # Introduction
├── methods.html             # People detection methods
├── feedback.html            # Accessible feedback
├── tools.html               # Current tools and systems
├── challenges.html          # Challenges & future
├── quiz.html                # Interactive quiz
├── bibliography.html        # Annotated bibliography
└── assets/
    ├── css/styles.css
    ├── js/main.js, quiz.js
    ├── images/*.svg
    └── audio/*.m4a


Deployment: GitHub Pages (main branch, /docs or /visionaid_site_v2 folder).

Accessibility & Ethics

On-device processing preferred; no data uploads.

Consent-first design; users control what is collected.

Minimal retention; data is not stored unnecessarily.

Inclusive Design: Audio narration, transcripts, alt text, and structured navigation.

How to Run Locally

Clone the repository and open the tutorial in a browser:

git clone https://github.com/Susruthavk/visionaid-for-blind.git
cd visionaid-for-blind


If files are inside visionaid_site_v2/ or docs/, run a local server:

# Python 3
python -m http.server 8000


Visit http://localhost:8000/visionaid_site_v2/ in your browser.

References

The tutorial cites 5 peer-reviewed works on computer vision and accessibility.
See the Annotated Bibliography
 page for details.

Acknowledgments

Project created as part of a graduate course in Computer Vision & Accessibility.

Thanks to the instructor and peers for feedback and discussions.

Built and narrated by Susrutha Vishal Koyyalamudi.

License

This project is for educational use.
Content and references are credited to their respective authors.
Source code is available under an open educational license.
