import React, { useState } from 'react'
//import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts"
import styles from "./Statistics.module.css"


/*const Chart01 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "Number of clients",
        data: [20, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
    })

  return (
    <div style={{ position: "absolute", top: "200px", left: "450px" }}>
        <div className="row"></div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="450"
            />
        </div>
    </div>
  )
}

const Chart02 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "Number of clients",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "Successful dates",
        data: [15, 30, 45, 60, 75, 90, 105, 120]
      }
    ]
    })

  return (
    <div style={{ position: "absolute", top: "200px", left: "925px" }}>
        <div className="row"></div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="450"
            />
        </div>
    </div>
  )
}

const Chart03 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-line"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
    })

  return (
    <div style={{ position: "absolute", top: "200px", left: "1400px" }}>
        <div className="row"></div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="450"
            />
        </div>
    </div>
  )
}

const Chart04 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-line"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "series-2",
        data: [15, 30, 45, 60, 75, 90, 105, 120]
      }
    ]
    })

  return (
    <div style={{ position: "absolute", top: "600px", left: "450px" }}>
        <div className="row"></div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="450"
            />
        </div>
    </div>
  )
}

const Chart05 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-area"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
    })

  return (
    <div style={{ position: "absolute", top: "600px", left: "925px" }}>
        <div className="row"></div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="450"
            />
        </div>
    </div>
  )
}

const Chart06 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-radar"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [20, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
    })

  return (
    <div style={{ position: "absolute", top: "600px", left: "1400px" }}>
        <div className="row"></div>
        <div className="col-4">
        <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="450"
            />
        </div>
    </div>
  )
}

const Statistics = () => {
  return (
    <div>
    <Chart01 />
    <Chart02 />
    <Chart03 />
    <Chart04 />
    <Chart05 />
    <Chart06 />
    </div>
  )
}*/

const Chart01 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "Number of clients",
        data: [20, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <div className={styles.chartWrapper}>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
      />
    </div>
  );
};

const Chart02 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "Number of clients",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "Successful dates",
        data: [15, 30, 45, 60, 75, 90, 105, 120]
      }
    ]
  });

  return (
    <div className={styles.chartWrapper}>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="100%"
      />
    </div>
  );
};

const Chart03 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-line"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <div className={styles.chartWrapper}>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="100%"
      />
    </div>
  );
};

const Chart04 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-line"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: "series-2",
        data: [15, 30, 45, 60, 75, 90, 105, 120]
      }
    ]
  });

  return (
    <div className={styles.chartWrapper}>
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="100%"
      />
    </div>
  );
};

const Chart05 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-area"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <div className={styles.chartWrapper}>
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="100%"
      />
    </div>
  );
};

const Chart06 = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-radar"
      },
      xaxis: {
        categories: ["Seth", "Sylvanus", "Houcham", "Aquilas", "Jeremy", "Paolo", "Jesugnon", "Ronel"]
      }
    },
    series: [
      {
        name: "series-1",
        data: [20, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <div className={styles.chartWrapper}>
      <Chart
        options={state.options}
        series={state.series}
        type="radar"
        width="100%"
      />
    </div>
  );
};

const Statistics = () => {
  return (
    <div className={styles.statisticsContainer}>
      <Chart01 />
      <Chart02 />
      <Chart03 />
      <Chart04 />
      <Chart05 />
      <Chart06 />
    </div>
  );
};

export default Statistics;