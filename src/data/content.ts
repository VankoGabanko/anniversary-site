import photo1 from '../assets/images/1.jpg'
import photo2 from '../assets/images/2.jpg'
import photo3 from '../assets/images/3.jpg'
import photo4 from '../assets/images/4.jpg'
import photo5 from '../assets/images/5.jpg'
import photo6 from '../assets/images/6.jpg'
import photo7 from '../assets/images/7.jpg'
import photo8 from '../assets/images/8.jpg'
import photo9 from '../assets/images/9.jpg'
import photo10 from '../assets/images/10.jpg'
import photo11 from '../assets/images/11.jpg'
import photo12 from '../assets/images/12.jpg'
import photo13 from '../assets/images/13.jpg'
import photo14 from '../assets/images/14.jpg'
import photo15 from '../assets/images/15.jpg'
import photo16 from '../assets/images/16.jpg'

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
  'Първо учихме в ПЧМГ.',
  'След това чат-пат ходихме на курсове при Данкича.',
  'Иииии изчезна за 4 години.',
  'През месец Май 2026 съвсем "случайно"се засякохме (Holy Rali).',
  'На следващата вечер отново съвсем "случайно" пак излязохме (;',
  'След това пак дипнах в Холандия.',
  'За цял месец поддържахме контакт всеки ден<3',
  'Разговорчета с часове (:',
  'Но лонг дистънса си е лонг дистънс :(',
  'Иииии тогавааааа...',
  '27 Юни...',
  'Созополче...',
  'Първата ни среща ииииии.... целувка (;',
  'И така нашето "Ние" започна...',
]

export const timelineEvents: TimelineEvent[] = [
  { title: 'ПЧМГ', caption: 'Където за първи път се видяхме.', year: 'След товаааа' },
  { title: 'Данкича', caption: 'Още няколко шанса да се опознаем.' },
  { title: 'Май 2026', caption: 'Да живеее Ралиииии.', year: '2026' },
  { title: 'Музейчеее', caption: 'Да дъбъл чекнем положителното впечатление от кафето (;' },
  { title: '9-5 работен ден в разговории (любимото)', caption: 'Всичко си каза любовиииии.' },
  { title: '27 Юни', caption: 'Хе хееееее колко ми е весело...' },
  { title: 'Второто Каво', caption: 'Без теб нямаше да е същото <3' },
  { title: 'Нашата специална Гърция', caption: 'Сол, вода и мнооооого спомени.' },
  { title: 'Първият ни месец', caption: 'Усещам колко бързо ще ти бием рекорда (;' },
  { title: 'Трето Моренце', caption: 'Едно от многото страхотни приключения които ни очакват', year: 'Смело Напред->' },
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

export const galleryImages: GalleryImage[] = [
  { src: photo1, alt: 'Memory 1 with Ivan and Moni', caption: 'Marking the beginning', className: '' },
  { src: photo2, alt: 'Memory 2 with Ivan and Moni', caption: 'A moment worth remembering', className: '' },
  { src: photo3, alt: 'Memory 3 with Ivan and Moni', caption: 'Our kind of magic', className: '' },
  { src: photo4, alt: 'Memory 4 with Ivan and Moni', caption: 'The cute face I keep thinking about', className: '' },
  { src: photo5, alt: 'Memory 5 with Ivan and Moni', caption: 'One of my favourite days', className: '' },
  { src: photo6, alt: 'Memory 6 with Ivan and Moni', caption: 'Our first road trip', className: '' },
  { src: photo7, alt: 'Memory 7 with Ivan and Moni', caption: 'A little piece of forever', className: '' },
  { src: photo8, alt: 'Memory 8 with Ivan and Moni', caption: 'The moments I replay', className: '' },
  { src: photo9, alt: 'Memory 9 with Ivan and Moni', caption: 'Miles, made smaller', className: '' },
  { src: photo10, alt: 'Memory 10 with Ivan and Moni', caption: 'You make everything brighter', className: '' },
  { src: photo11, alt: 'Memory 11 with Ivan and Moni', caption: 'Another reason to smile', className: '' },
  { src: photo12, alt: 'Memory 12 with Ivan and Moni', caption: 'My favourite person', className: '' },
  { src: photo13, alt: 'Memory 13 with Ivan and Moni', caption: 'Home is wherever you are', className: '' },
  { src: photo14, alt: 'Memory 14 with Ivan and Moni', caption: 'A day I never want to forget', className: '' },
  { src: photo15, alt: 'Memory 15 with Ivan and Moni', caption: 'One chapter of many', className: '' },
  { src: photo16, alt: 'Memory 16 with Ivan and Moni', caption: 'The best is still ahead', className: '' },
]

export const letterParagraphs = [
  'Ако някой ми беше казал преди година, че момичето, за което ще броя дните до следващата ни среща, е същото момиче, което познавам още от дете, едва ли щях да му повярвам.',
  'Животът ни даде толкова много възможности да се срещнем.',
  'ПЧМГ.',
  'Данкича',
  'Общите ни приятели',
  'И някак си...',
  'изчака най-съвършения момент.',
  'Благодарен съм, че го направи.',
  'Защото сега не мога да си представя живота си без теб.',
  'Ти ми показа какво е да започнеш да липсваш на някого още в мига, в който си тръгнеш.',
  'Да се усмихвам всеки път, когато телефона ми светне.',
  'Да броя дните, а не датите.',
  'Ти си моят покой.',
  'Най-любимото ми известие.',
  'Моето най-сигурно място.',
  'И най-прекрасното нещо, което ми се случи тази година.',
  'Честит първи месец заедно, Любови',
  'Благодаря ти, че избра мен.',
  'Обещавам ти, че ще продължавам да избирам теб — всеки ден, отново и отново.',
  'Обичам те.',
  'Винаги.',
]
