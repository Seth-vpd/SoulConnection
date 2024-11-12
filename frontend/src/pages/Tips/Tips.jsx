import React, { useState } from "react";
import "./Tips.css";
// import { useEffect } from "react";

const Tips = () => {
  let tips = [
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. xxxxxxxxxxxxxxxsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssswwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwsssssssssssssssssssssssssssssxxxxxxxxxxxxxxxxxxxxxxxxxxx2xxxx",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
    {
      title: "Comment gérer un breakup ?",
      tip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
    },
  ];
  let [selected, setSelected] = useState(null);
  function toggle(i) {
    if (selected === i) {
      return setSelected(null);
    } else return setSelected(i);
  }
  // let [tips, setTips] = useState([]);
  // async function fetchData() {
  //   try {
  //     console.log(`requete tips to backend`);
  //     const response = await fetch(`http://localhost:3000/tips`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //     });
  //     let data = await response.json();
  //     console.log(`Response:  ${response}`);
  //     if (response.ok) {
  //       console.log(` successful ${response.ok}`);
  //       setTips(data);
  //     } else {
  //       console.log(`data: ${data}}`);
  //       console.log(`customers unsuccessful ${response.ok}`);
  //     }
  //     return response;
  //   } catch (error) {
  //     console.log(`Error occurs during customers: ${error}`);
  //   }
  // }
  // useEffect(() => {
  //   tips = fetchData();
  // }, []);
  return (
    <div className="bodyPage">
      <div className="titlePage">
        <h1>Tips for Coaches</h1>
      </div>
      <div className="accordeon">
        {tips.map((tip, index) => {
          return (
            <div key={index} className="tip">
              <div className="title" onClick={() => toggle(index)}>
                <span>{selected === index ? "-" : "+"}</span>
                {tip.title}
              </div>
              <div className={selected === index ? "textTipShow" : "textTip"}>
                {tip.tip}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className={styles.title}>Page Tips</div>
  //     <div className={styles.gridContainer}>
  //       {tips.map((tip, index) => (
  //         <div key={index} className={`${styles.rowsGrid} ${styles.carteTip}`}>
  //           <div className={styles.tipsTitle}>{tip.title}</div>
  //           <div className={styles.textTipTip}>{tip.tip}</div>
  //         </div>
  //       ))}
  //       ;
  //     </div>
  //   </div>
  // );
};

export default Tips;
