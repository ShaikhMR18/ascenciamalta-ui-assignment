const IMG = import.meta.env.VITE_IMAGE_BASE_URL;

import hero2 from "../assets/hero/hero_img02.jpg"
import hero4 from "../assets/hero/hero_img04.jpg"
import openDay from "../assets/hero/Open_Day.jpg"

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
];

export const school = {
  name: "Ascencia Malta",
  tagline: "Higher Education, English Language School and Digital Campus",
  address: "23 Vincenzo Dimech Rd, Floriana, FRN 1502, Malta",
  email: "info@ascenciamalta.mt",
  phone: "+356 7965 0480",
  hours: "Monday to Friday, 8:00 to 17:00",
  erasmus: "erasmus@ascenciamalta.mt",
  license: "License No: 2021-018",
};

export const hero = {
  title: "We are eager to give you the best education at Ascencia Malta",
  text: "Think global, study at Ascencia Malta. Accredited MQF Level 5 to 8 qualifications in the heart of the Mediterranean.",
};

export const stats = [
  { value: "3 schools", label: "Higher Education, English Language and Digital Campus" },
  { value: "MQF 5 to 8", label: "Accredited higher education levels" },
  { value: "MFHEA", label: "Accredited by Malta's higher education authority" },
  { value: "Floriana", label: "Campus next to Valletta" },
];

export const programs = [
  { title: "DBA", level: "MQF/EQF Level 8", ects: "180 ECTS", mode: "Blended", img: `${IMG}/program/dba.webp` },
  { title: "MBA", level: "MQF/EQF Level 7", ects: "90 ECTS", mode: "Face-to-face", img: `${IMG}/program/mba.webp` },
  { title: "Master", level: "MQF/EQF Level 7", ects: "90 ECTS", mode: "Face-to-face", img: `${IMG}/program/masters.webp` },
  { title: "Postgraduate", level: "MQF/EQF Level 7", ects: "60 ECTS", mode: "Face-to-face", img: `${IMG}/program/postgraduate.webp` },
  { title: "Bachelor", level: "MQF/EQF Level 6", ects: "180 ECTS", mode: "Face-to-face", img: `${IMG}/program/bachelor.webp` },
  { title: "Diploma", level: "MQF/EQF Level 5", ects: "60 ECTS", mode: "Face-to-face", img: `${IMG}/program/diploma.webp` },
  { title: "Award", level: "Short certificate", ects: "10 ECTS", mode: "Face-to-face", img: `${IMG}/program/award.webp` },
];

export const english = [
  "General English", "Business English", "IELTS Preparation",
  "CAE Preparation", "FCE Preparation", "English for Specific Purposes",
];

export const director = {
  name: "Tess Giordmaina",
  role: "School Director",
  img: `${IMG}/team/tess.jpg`,
  text: [
    "It is an honour and a pleasure to welcome you to our institution, offering Higher Education, English Language programmes and a Digital Campus in the heart of the Mediterranean.",
    "Our goal is simple: to ensure that every student who studies with us is fully prepared to step confidently into the world of work and excel. Your career starts here.",
  ],
};

export const accreditations = [
  { name: "MFHEA", img: `${IMG}/fanfact/mfhea.png` },
  { name: "ELT Council", img: `${IMG}/fanfact/elt.png` },
  { name: "ATHE", img: `${IMG}/fanfact/athe.png` },
  { name: "MQF", img: `${IMG}/fanfact/mqf.png` },
  { name: "EQF", img: `${IMG}/fanfact/eqf.png` },
  { name: "Erasmus+", img: `${IMG}/fanfact/erasmus.png` },
];

export const about = {
  intro: "Ascencia Malta is built on academic integrity, excellence and a genuine commitment to learning, teaching and innovation. Business School programmes are accredited by the MFHEA (MQF/EQF Levels 5 to 8), the English School by the ELT Council, and the Digital Campus delivers ATHE programmes accredited by Ofqual (RQF Levels 6 to 7).",
  mission: "We empower students through a student-centred approach that builds critical thinking, creativity and lifelong learning. With our partners, we develop socially responsible leaders who champion diversity, inclusion and equity.",
  vision: "To offer MQF Level 5 to 8 qualifications to EU and international students at affordable rates, accredited by the MFHEA and recognised by employers worldwide.",
  campus: [1, 2, 3, 5, 6, 13].map((n) => `${IMG}/campus/campus-img${String(n).padStart(2, "0")}.webp`),
};


export const slides = [
  {
    kicker: "Welcome To Ascencia Malta",
    title: "We Are Eager To Give You The Best Education At Ascencia Malta",
    img: hero2,
    primary: { label: "Apply now", to: "/contact" },
  },
  {
    kicker: "Think global",
    title: "Study At Ascencia Malta In The Heart Of The Mediterranean",
    img: hero4,
    primary: { label: "Explore programmes", to: "/contact" },
  },
  {
    kicker: "Join us",
    title: "Open Day At Ascencia Malta",
    img: openDay,
    primary: { label: "Talk with a teacher", to: "/contact" },
  },
];