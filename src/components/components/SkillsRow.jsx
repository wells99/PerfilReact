export default function SkilSkillsRowls() {
  const skills = [
    "Javascript","PHP","CSS","TailWind","React","Node","Docker",
    "Vim","Nano","SSH","HTML","Git","MySQL","FireBase","MongoDB","Postgres"
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white lg:px-20 py-8 flex flex-col w-full text-left lg:w-full gap-4 overflow-hidden border-y border-white/20"
    >
      <h2 className="text-xl font-bold text-center mb-2">Habilidades</h2>

      {/* Linha do marquee */}
      <div className="marquee">
        {/* Bloco 1 */}
        <div className="marquee__content">
          {skills.map((skill) => (
            <p key={`a-${skill}`} className="text-sm lg:text-lg">{skill}</p>
          ))}
        </div>

        {/* Bloco 2 (duplicado para o loop ser contínuo) */}
        <div className="marquee__content" aria-hidden="true">
          {skills.map((skill) => (
            <p key={`b-${skill}`} className="text-sm lg:text-lg">{skill}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
