import {
  Animator,
  ScrollPage,
  MoveIn,
  Sticky,
  Move,
  batch,
  Fade,
} from "react-scroll-motion";
import "./myHobbies.css";
import boardGames from "./assets/boardGames.jpg";
import calistenics from "./assets/calistenics.jpg";
function MyHobbies() {
  return (
    <ScrollPage page={3}>
      <div className="section-4">
        <Animator animation={MoveIn(-1000, 0)}>
          <h1> Moje Zainteresowania</h1>
        </Animator>
        <Animator animation={MoveIn(1000, 0)}>
          <h3>Kalistenika</h3>
        </Animator>
        <Animator animation={MoveIn(0, 1000)}>
          <h3>Gry planszowe</h3>
        </Animator>
        <Animator animation={MoveIn(0, -1000)}>
          <h3> Boks</h3>
        </Animator>
      </div>
      <Animator animation={batch(Sticky(30, 14), Move(), Fade())}>
        <img className=" photoHobbies photoBoardGames" src={boardGames} />
      </Animator>
      <Animator animation={batch(Sticky(70, 26), Move(), Fade())}>
        <img className=" photoHobbies  photoCalistenics" src={calistenics} />
      </Animator>
      <Animator animation={batch(Sticky(50, 77), Move(), Fade())}>
        <div className="containerOfFilm">
          <h2>Moja ulubiona Walka</h2>
          <iframe
            className="video-of-fav-battle"
            src="https://www.youtube.com/embed/9MiwQO-qhpc"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="video"
            allowFullScreen
          />{" "}
        </div>
      </Animator>
    </ScrollPage>
  );
}

export default MyHobbies;
