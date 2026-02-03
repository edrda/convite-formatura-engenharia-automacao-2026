export function gerarICS(evento: {
  title: string
  location: string
  start: string
  end: string
  description: string
}) {
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${evento.title}
DTSTART:${evento.start}
DTEND:${evento.end}
LOCATION:${evento.location}
DESCRIPTION:${evento.description}
END:VEVENT
END:VCALENDAR
`.trim()

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  return URL.createObjectURL(blob)
}
