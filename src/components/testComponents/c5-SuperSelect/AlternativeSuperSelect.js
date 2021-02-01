// import React, { useState } from "react";
// import { CSSTransition } from "react-transition-group";
// import { IRadio } from "../../HW7";
// import classes from './select.module.css'


// type PropsType = {
//   list: Array<IRadio>
//   onOptionChoice: (name: string) => void
//   name: string
// }
// const AlternativeSuperSelect: React.FC<PropsType> = ({ list, onOptionChoice, name }) => {
//   const [open, setOpen] = useState<boolean>(false)
//   let hovered = () => {
//     let el = list.find((el) => el.isChosen);
//     return el?.value
//   }

//   const [hoveredName, setHoveredname] = useState<string | undefined>("");
//   const checkHover = () => {
//     let chosen = hovered()
//     if (chosen === undefined) {
//       setHoveredname('')
//     }
//     else { setHoveredname(chosen) }
//   }
//   const onToggleOpen = () => {
//     setOpen(!open)
//     checkHover()
//   }
//   const onClickHandler = (name?: string) => {
//     if (name) {
//       onOptionChoice(name);
//       setOpen(false);
//       setHoveredname(name)
//     }
//   };


//   const onHoverHandler = (name?: string) => {
//     setHoveredname(name)
//   }

//   const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     if (e.key === 'Enter') {
//       if (hoveredName) {
//         onOptionChoice(hoveredName);
//         setOpen(false)
//       }
//     }
//     if (e.key === "Escape") {
//       setOpen(false);
//     }
//     for (let i = 0; i < list.length; i++) {
//       if (e.key === 'ArrowDown') {
//         if (hoveredName === list[i].value && list[i + 1]) {
//           setHoveredname(list[i + 1].value)
//         }
//         if (!hoveredName) {
//           setHoveredname(list[0].value)
//         }
//       }
//       if (e.key === "ArrowUp") {
//         if (hoveredName === list[i].value && list[i - 1]) {
//           setHoveredname(list[i - 1].value);
//         }
//         if (!hoveredName) {
//           setHoveredname(list[0].value);
//         }
//       }
//     }
//   };

//   const onBlurHandler = () => {
//     if (hoveredName) {
//       let chosenName = hovered()
//       if (chosenName !== undefined && chosenName !== hoveredName) {
//         setHoveredname(chosenName)
//         onOptionChoice(chosenName)
//       }
//       setOpen(false);
//     }
//     setOpen(false);
//   }

//   const isList = list.map((el) => {
//     let isChosen = el.value === hoveredName ? classes.chosen : ''
//     return (
//       <div
//         key={el.value}
//         className={classes.SelectElement + " " + isChosen}
//         onClick={() => onClickHandler(el.value)}
//         onMouseEnter={() => onHoverHandler(el.value)}
//       >{el.value}</div>


//     );
//   })


//   const animatedSelects = (
//     <CSSTransition
//       in={open}
//       timeout={500}
//       mountOnEnter
//       classNames={{
//         enterActive: classes.MyActive,
//         enterDone: classes.MyDone,
//         exitActive: classes.MyExitActive,
//         exitDone: classes.MyExitDone,
//       }}
//     >
//       <div
//         className={classes.S}
//       >
//         {isList}
//       </div>
//     </CSSTransition>
//   );

//   return (
//     <div
//       tabIndex={1}
//       className={classes.ownSelect}
//       onClick={onToggleOpen}
//       onKeyDown={keyDownHandler}
//       onBlur={onBlurHandler}
//     >
//       <h3>{name}</h3>
//       {animatedSelects}
//     </div>
//   );
// }

// export default AlternativeSuperSelect;
