import { classes, rankings, school, sports, stats } from './content'

// Each topic lists trigger words and the reply. The first topic with the most
// keyword hits wins. All facts come from content.js, so they stay in sync with the page.
const callUs = `Admissions helpline: ${school.helpline}`

const topics = [
  {
    keywords: ['fee', 'cost', 'price', 'scholarship', 'charges', 'tuition'],
    text: `I don't have fee details, and they can change each year. Please ask the admissions team directly. ${callUs}, or email ${school.email}.`,
    link: { label: 'Call admissions', href: school.helplineHref },
  },
  {
    keywords: ['apply', 'admission', 'admit', 'enrol', 'enroll', 'join', 'enquir', 'inquir', 'seat'],
    text: `TIS admits students from ${classes[0]} to ${classes[classes.length - 1]}. You can apply online or send an enquiry from the form at the bottom of this page. ${callUs}.`,
    link: { label: 'Apply now', href: school.applyUrl },
  },
  {
    keywords: ['contact', 'phone', 'call', 'number', 'email', 'mail', 'helpline', 'reach'],
    text: `${callUs}. Landline: ${school.landlines.join(', ')}. Email: ${school.email}.`,
    link: { label: 'Call admissions', href: school.helplineHref },
  },
  {
    keywords: ['where', 'location', 'address', 'located', 'map', 'directions', 'dehradun'],
    text: `${school.name} is at ${school.address}.`,
    link: { label: 'Open in Maps', href: 'https://maps.google.com/?q=Tulas+International+School+Dehradun' },
  },
  {
    keywords: ['sport', 'game', 'archery', 'swim', 'football', 'cricket', 'horse', 'shooting', 'tennis'],
    text: `TIS offers 16+ sports: ${sports.join(', ')}.`,
  },
  {
    keywords: ['campus', 'facility', 'facilities', 'acre', 'medical', 'doctor', 'health', 'safe', 'security'],
    text: `The campus covers ${stats[0].value} acres and is pollution free, with ${stats[2].value} medical assistance and ${stats[1].value} Olympic sports.`,
    link: { label: 'Take the virtual tour', href: school.tourUrl },
  },
  {
    keywords: ['tour', 'visit', 'see the school', 'virtual'],
    text: 'You can explore the campus online with the virtual tour. To visit in person, call the admissions team.',
    link: { label: 'Take the virtual tour', href: school.tourUrl },
  },
  {
    keywords: ['teacher', 'ratio', 'class size', 'faculty'],
    text: `The student teacher ratio is ${stats[3].value}, so every student gets personal attention.`,
  },
  {
    keywords: ['rank', 'best', 'award', 'top', 'recogni'],
    text: rankings.map((r) => `${r.rank} ${r.where}: ${r.what}`).join('. ') + '.',
  },
  {
    keywords: ['boarding', 'day school', 'day boarding', 'hostel', 'residential'],
    text: 'TIS is a co-educational boarding and day school for boys and girls, with a nurturing environment for students to thrive academically, socially, and culturally.',
  },
  {
    keywords: ['cbse', 'curriculum', 'academic', 'syllabus', 'board', 'study'],
    text: 'TIS follows the CBSE curriculum, focused on academic excellence, holistic development, and preparing students to be global leaders.',
  },
  {
    keywords: ['founded', 'history', 'established', 'trust', 'started', 'about'],
    text: school.founded,
  },
  {
    keywords: ['alumni', 'celebrity', 'personalit', 'guest', 'famous', 'sakshi', 'archer'],
    text: 'Olympic and world champions, creators and national leaders have visited the campus. See the "Influential personalities on campus" section for the full list.',
    link: { label: 'View personalities', href: '#people' },
  },
  {
    keywords: ['review', 'parent', 'feedback', 'testimonial'],
    text: 'Parents share their experiences on Google Reviews. You can read a selection in the "From the parents" section.',
    link: { label: 'Read parent reviews', href: '#parents' },
  },
  {
    keywords: ['hello', 'hi ', 'hey', 'namaste', 'help'],
    text: 'Hello! I can answer questions about admissions, sports, the campus, rankings and contact details.',
  },
]

export const greeting = 'Hi, I’m the TIS assistant. Ask me about admissions, sports, the campus or how to reach us.'

export const suggestions = ['How do I apply?', 'Which sports are offered?', 'Where is the school?', 'Talk to admissions']

const fallback = {
  text: `I'm not sure about that one. The admissions team can help. ${callUs}, or email ${school.email}.`,
  link: { label: 'Call admissions', href: school.helplineHref },
}

export function answerQuestion(question) {
  const text = ` ${question.toLowerCase()} `
  let best = null
  let bestScore = 0

  for (const topic of topics) {
    const score = topic.keywords.filter((word) => text.includes(word)).length
    if (score > bestScore) {
      best = topic
      bestScore = score
    }
  }

  return best ?? fallback
}
