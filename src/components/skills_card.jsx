export default function SkillsCard({ skills, level, skillsLogo }) {
  return (
    <div className="flex items-center border p-3 rounded-md border-gray-600 hover:border-primary hover:shadow-md hover:shadow-primary/20 duration-300 group">
      <div className="w-12 transform duration-300 group-hover:scale-110 bg-zinc-800/50 p-1.5 rounded-md">
        <img className="h-10 w-10 object-contain" src={skillsLogo || "/placeholder.svg"} alt={`${skills} icon`} />
      </div>
      <div className="pl-4 capitalize">
        <h3 className="font-medium group-hover:text-primary transition-colors duration-300">{skills}</h3>
        <h3 className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">{level}</h3>
      </div>
    </div>
  )
}
