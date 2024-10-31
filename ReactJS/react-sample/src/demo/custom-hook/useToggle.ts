import React from "react";

export const useToggle = ()=>{
      const [toggle, setToggle] = React.useState<boolean>(true);
      return {isToggle: toggle, toggle: setToggle}
}