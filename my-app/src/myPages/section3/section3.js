import {
  Animator,
  ScrollPage,
  Sticky,
  Move,
  batch,
  FadeIn,
  ZoomIn,
  Fade,
} from "react-scroll-motion";
import reactPhoto from "./assets/React.png";
import "./section3.css";
import javascriptPhoto from "./assets/js.png";
import htmlPhoto from "./assets/html-5.png";
import firebasePhoto from "./assets/firebase.png";
import cssPhoto from "./assets/css-3.png";

function MySkills() {
  const ZoomInScrollOut = batch(Sticky(50, 40), FadeIn(), ZoomIn(), Fade());

  return (
    <ScrollPage page={2}>
      <div className="section-3">
        <Animator animation={ZoomInScrollOut}>
          <h2>Moje Technologie</h2>
        </Animator>
        <Animator animation={batch(Sticky(30, 30), Move(), Fade())}>
          <img className=" photoSkills" src={reactPhoto} />
        </Animator>
        <Animator animation={batch(Sticky(40, 74), Move(), Fade())}>
          <img className=" photoSkills" src={javascriptPhoto} />
        </Animator>
        <Animator animation={batch(Sticky(70, 60), Move(), Fade())}>
          <img className=" photoSkills" src={htmlPhoto} />
        </Animator>
        <Animator animation={batch(Sticky(70, 20), Move(), Fade())}>
          <img className=" photoSkills" src={firebasePhoto} />
        </Animator>
        <Animator animation={batch(Sticky(21, 55), Move(), Fade())}>
          <img className=" photoSkills" src={cssPhoto} />
        </Animator>
      </div>
    </ScrollPage>
  );
}

export default MySkills;
