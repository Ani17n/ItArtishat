// "use client";

// import React, { FC, useState } from "react";
// import classes from "../style/accItem.module.scss";

// interface Props {
//   title: string;
//   description: string;
// }

// const AccItem: FC<Props> = ({ title, description }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={classes.acc_item}>
//       <h2 onClick={() => setIsOpen(!isOpen)}>{title}</h2>
//       <p className={`${classes.description} ${isOpen && classes.show}`}>{description}</p>
//     </div>
//   );
// };

// export default AccItem;
