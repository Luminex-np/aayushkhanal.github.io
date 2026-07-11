export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-4">
      <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute w-2 h-2 rounded-full bg-accent/30" />
    </div>
  )
}
