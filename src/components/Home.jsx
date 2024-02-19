import { Button } from "reactstrap"

const Intro = () => {
  return (
    <div className="intro">
      <h1>JIFUNZE JINSI YA KUAGIZA BIDHAA KUTOKA CHINA</h1>
      <div className="intro-div1">
      <img src="images/Jifunze.jpg" alt="picha" className="firstimage"/>
        <p>Kitabu hiki kimeandaliwa kwa ustadi mkubwa ili kuweza kukufundisha hatua kwa hatua jinsi ya kuagiza bidhaa
        bidhaa kutoka china hadi zinakufikia sehemu ulipo Tanzania.</p>

      </div>
      <div className="video-container">
    <iframe
     src="https://www.youtube.com/embed/nUTkoxhI4g0?autoplay=1&muted=1"
     width="420" height="315"
     ></iframe>
</div>


      <div className='button-container'>
        <Button color="primary"  className="buy-btn" href="https://wa.me/+255779649545">NAHITAJI KITABU</Button>
      </div>
    </div>
  )
}

export default Intro
