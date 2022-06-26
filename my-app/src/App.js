import {
  ScrollContainer,
} from "react-scroll-motion";
import MyTechnologies from "./myPages/section2/Section";
import AboutMe from "./myPages/section1/Section";
import "./App.css";
import MyHobbies from "./myPages/section-4/MyHobbies";
import MySkills from "./myPages/section3/section3";
import Forum from "./myPages/forum/Forum";
function App() {
  return (
    <ScrollContainer>
      <AboutMe />
      <MyTechnologies />
      <MySkills />
      <MyHobbies/>
      <Forum/>
    </ScrollContainer>
  );
}

export default App;
