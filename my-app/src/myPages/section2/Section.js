import {
    Animator,
    ScrollPage,
    Sticky,
    Move,
    batch,
    Fade,
    FadeIn,
    ZoomIn,

  } from "react-scroll-motion";
  import "./section2.css";
  function MyTechnologies() {
    const ZoomInScrollOut = batch(Sticky(50, 40), FadeIn(), ZoomIn(), Fade());
    const FadeUp = batch(Fade(), Sticky(50,55), Move());
    return (

        <ScrollPage page={1}>
          <div className="section-2">
            <Animator animation={ZoomInScrollOut}>
              <h2 className="section-2-title" >Chciałbym zostać Front-end Developerem!</h2>
            </Animator>
            <Animator animation={FadeUp}>
              <p className="section-2-description">
                W związku z czym rozpocząłem profesjonalny kurs Front-end
                Developer organizowany przez infoShare Academy, gdzie rozwijam
                swoje umiejętności w tworzeniu aplikacji webowych. Aktualnie
                poszukuję swojej pierwszej pracy w branży IT
              </p>
            </Animator>
          </div>
        </ScrollPage>

    );
  }
  
  export default MyTechnologies;
  