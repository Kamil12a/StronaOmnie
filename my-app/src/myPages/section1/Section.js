import {
  Animator,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  FadeIn,
} from "react-scroll-motion";
import myPhoto1 from "./assets/kamil1.jpg";
import myPhoto2 from "./assets/kamil2.jpg";
import "./section1.css";
function AboutMe() {
  return (
    <ScrollPage page={0}>
      <div className="section-1">
        <Animator animation={batch(FadeIn(), MoveOut(0, -400))}>
          <h2 className="section-1-title">Cześć! Nazywam się Kamil 😀</h2>
        </Animator>
        <div className="containerPhotos">
          <Animator animation={batch(Fade(), MoveOut(0, -400))}>
            <img className="myPhoto1" src={myPhoto1} />
          </Animator>
          <Animator animation={batch(Fade(), MoveOut(0, -400))}>
            <img className="myPhoto2" src={myPhoto2} />
          </Animator>
        </div>
      </div>
    </ScrollPage>
  );
}

export default AboutMe;
