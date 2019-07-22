import React from "react";
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

function Projects() {
  return (
      <div>
    <StackGrid
    appear={scaleDown.appear}
    appeared={scaleDown.appeared}
    enter={scaleDown.enter}
    entered={scaleDown.entered}
    leaved={scaleDown.leaved}
  >     
  <div id="key1">
 Ad quis mollit consequat Lorem do. Exercitation amet culpa sunt occaecat. Incididunt excepteur sit anim dolor esse pariatur quis consectetur fugiat reprehenderit incididunt eu Lorem nostrud. Lorem ipsum sint in eu laborum non Lorem. Velit eu reprehenderit dolore in eu reprehenderit consequat quis cupidatat quis cupidatat consectetur. 
  </div>
     
    </StackGrid>
      </div>
  );
}

export default Projects;
