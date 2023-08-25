import Collapse from '../components/collapse'

function About() {
  return (
    <div className="about-container">
      <Collapse collapseTitle="1" CollapseContent="texte" />
      <Collapse collapseTitle="2" CollapseContent="texte" />
      <Collapse collapseTitle="3" CollapseContent="texte" />
      <Collapse collapseTitle="4" CollapseContent="texte" />
    </div>
  )
}

export default About
