import placeholder from '../assets/images/cinematic-placeholder.png'

export type TimelineEvent = {
  title: string
  caption: string
  year?: string
}

export type GalleryImage = {
  src: string
  alt: string
  caption: string
  className: string
}

export const storyLines = [
  'We first studied together from 5th until 7th grade.',
  'Then we occasionally attended math courses together.',
  'Life separated us for four years.',
  'In May 2026 we unexpectedly met again through our mutual friend Raly.',
  'The following evening we went out together.',
  'Soon after I returned to the Netherlands.',
  'For one month we texted every day.',
  'Hours of video calls.',
  'Long-distance became difficult.',
  'Then...',
  '27 June.',
  'Sozopol.',
  'Our first kiss.',
  'Our story finally began.',
]

export const timelineEvents: TimelineEvent[] = [
  { title: '5th Grade', caption: 'Where our paths first crossed.', year: 'Then' },
  { title: 'Math Courses', caption: 'A few more chances to know each other.' },
  { title: 'May 2026', caption: 'Life quietly brought us back together.', year: '2026' },
  { title: 'Night Bar', caption: 'One evening that changed the rhythm.' },
  { title: 'Daily Calls', caption: 'A month measured in messages and hours.' },
  { title: '27 June', caption: 'The day distance finally disappeared.' },
  { title: 'First Kiss', caption: 'Sozopol. The beginning of us.' },
  { title: 'First Seaside Trip', caption: 'Salt air, soft light, new memories.' },
  { title: 'One Month Together', caption: 'Our first chapter, already unforgettable.' },
  { title: 'Third Trip Countdown', caption: 'The next beautiful thing waiting for us.', year: 'Next' },
]

export const reasons = [
  'Your smile',
  'Your beautiful eyes',
  'Your positivity',
  'Your intelligence',
  'Your support',
  'Your ambition',
  'Your kindness',
  "The fact that you're different from everyone else",
  'Your laugh',
  'The way you make ordinary days unforgettable',
]

const galleryCaptions = [
  'Where it all began',
  'Our kind of magic',
  'Salt in the air',
  'The nights I replay',
  'Miles, made smaller',
  'The next chapter',
]

export const galleryImages: GalleryImage[] = galleryCaptions.map((caption, index) => ({
  src: placeholder,
  alt: `Photo placeholder ${index + 1}: ${caption}`,
  caption,
  className: `placeholder-image placeholder-image--${index + 1}`,
}))

export const letterParagraphs = [
  'If someone had told me a year ago that the girl I’d be counting the days to see again was someone I’d known since we were kids, I probably wouldn’t have believed them.',
  'Life gave us so many chances to meet.',
  'School.',
  'Math courses.',
  'Mutual friends.',
  'And somehow...',
  'it waited until the perfect moment.',
  'I’m grateful it did.',
  'Because now I can’t imagine my life without you.',
  'You’ve shown me what it feels like to miss someone the second they leave.',
  'To smile every time my phone lights up.',
  'To count days instead of dates.',
  'You are my peace.',
  'My favourite notification.',
  'My safest place.',
  'And the best thing that happened to me this year.',
  'Happy One Month Anniversary.',
  'Thank you for choosing me.',
  'I promise I’ll keep choosing you every single day.',
  'I love you.',
  'Always.',
]
