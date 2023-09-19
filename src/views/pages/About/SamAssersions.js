import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import { getApicalling } from "../../Apicalling/api";
import SamAssersionsAbout from "../../components/SamAssersionsAbout/SamAssersionsAbout";
import { Skeleton } from '@mui/material';

const SamAssersions = () => {
  const [Apidata, setApidata] = useState()

	useEffect(() => {
		console.log("apicalling", getApicalling("about-core").then(res => res.status && setApidata(res.success)))
	}, [])


  return (
    <>
    {Apidata ?
				<>
          <section className="sam-assersions-section" id="sam">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h2>SAM ASSERTIONS</h2>
                    <p className="f-s-24">
                      Learn more about our capabilities and the opportunity to
                      partner with AHA by exploring our registered business
                      information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="sam-ass-bx">
                    <SamAssersionsAbout />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>: <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rectangular"
              width="100%"
              height={410}
            />
			}
    </>
  );
};

export default SamAssersions;
