import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "./Employees.scss";
import { getApicalling } from "../../Apicalling/api";
import Parser from "html-react-parser";
const Employees = () => {
  const [Apidata, setApidata] = useState();
  console.log(Apidata, "ApidataApidataApidataApidataApidataApidata213");

  const QuotesArray = [
    {
      quotes: "Every accomplishment starts with the decision to try.",
      author: "John F. Kennedy",
    },
    {
      quotes:
        "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      author: "Henry Ford",
    },
    {
      quotes:
        "It’s not the years in your life that count. It’s the life in your years. ",
      author: "Abraham Lincoln",
    },
    {
      quotes:
        "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      author: "Thomas Edison",
    },
    {
      quotes:
        "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
      author: "Winston Churchill",
    },
    {
      quotes: "You miss 100 percent of the shots you never take.",
      author: "Wayne Gretzky",
    },
    {
      quotes:
        "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
      author: "Sheryl Sandberg",
    },
  ];

  let obj = QuotesArray[Math.round(Math.random() * 7)];

  useEffect(() => {
    console.log(
      "apicalling",
      getApicalling("employee-list").then(
        (res) => res.status && setApidata(res.success)
      )
    );
  }, []);
  return (
    <>
      <section className="employees-main-section">
        <h1>
          {Apidata && (
            <>
              <p>{obj.quotes}</p>
              <p>
                <strong>-{obj.author}</strong>
              </p>
            </>
          )}
        </h1>
      </section>
      <section className="employees-bx-section">
        <div className="container">
          <div className="row">
            {Apidata && (
              <>
                <div className="col-lg-3 col-md-6 d-flex">
                  <a
                    href={`${Apidata[0].employee_portals[0].portal_url}`}
                    target="_blank"
                    className="employees-bx"
                  >
                    <img
                      src="/images/employee-portal.png"
                      alt="EMPLOYEE PORTAL"
                      className="img-fluid"
                    />
                    <h2>{Apidata[0].employee_portals[0].tittle}</h2>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <a
                    href={`${Apidata[0].employee_portals[1].portal_url}`}
                    target="_blank"
                    className="employees-bx"
                  >
                    <img
                      src="/images/timekeeping.png"
                      alt="TIMEKEEPING"
                      className="img-fluid"
                    />
                    <h2>{Apidata[0].employee_portals[1].tittle}</h2>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <a
                    href={`${Apidata[0].employee_portals[2].portal_url}`}
                    target="_blank"
                    className="employees-bx"
                  >
                    <img
                      src="/images/payroll.png"
                      alt="PAYROLL"
                      className="img-fluid"
                    />
                    <h2>{Apidata[0].employee_portals[2].tittle}</h2>
                  </a>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <a
                    href={`${Apidata[0].employee_portals[3].portal_url}`}
                    target="_blank"
                    className="employees-bx"
                  >
                    <img
                      src="/images/webmail.png"
                      alt="WEBMAIL"
                      className="img-fluid"
                    />
                    <h2>{Apidata[0].employee_portals[3].tittle}</h2>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Employees;
