import SectionWrapper from '../layout/SectionWrapper'

function Skills() {
  return (
    <SectionWrapper id="skills" className="skills">
      <h2 className="skills__title">What you will learn</h2>

      <div className="skills__content">
        <p className="skills__paragraph">
        I share tasting techniques, food-pairing tips, and practical criteria to help you choose 
        wines with more confidence in everyday situations—whether for a dinner at home, a gift, 
        or building a small personal wine collection. The course combines essential theory and 
        guided practice to help you develop your palate in a structured way. I guide you through 
        how to analyze a wine’s appearance, aromas, and flavor using a clear method, so you can better 
        identify different styles and levels of quality.
        </p>

        <p className="skills__paragraph">
        My goal is for you to finish the course feeling confident to taste, talk about, and choose each
         bottle more thoughtfully. 🍷
        </p>

      </div>
    </SectionWrapper>
  )
}

export default Skills
