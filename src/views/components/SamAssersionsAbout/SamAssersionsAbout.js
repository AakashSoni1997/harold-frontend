import { React, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getApicalling } from '../../Apicalling/api';
import "./SamAssersionsAbout.scss";

export const SamAssersionsAbout = () => {
    const { id } = useParams();
    const [Apidata, setApidata] = useState()

    const [currentIndex, setCurrentIndex] = useState();

    const location = useLocation();
  
    useEffect(() => {
      const handleClickScroll = () => {
        if (location) {
          const params1 = new URLSearchParams(window.location.search);
          const prams2 = params1.get("id");

        setCurrentIndex(Number(id+1))
          console.log("idAbout", params1.get("id"),id);
          const element = document.getElementById(prams2);
          if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      if (Apidata) {
        setTimeout(() => {
          handleClickScroll();
        }, 500);
      }
    }, [Apidata]);
    const onClick = (id) => {
        // setCurrentIndex(id)
        if (currentIndex === id) {
            setCurrentIndex()
        } else {
            setCurrentIndex(id)
        }
    }


    useEffect(() => {
        console.log("apicalling", getApicalling("about-sam").then(res => res.status && setApidata(res.success)))
    }, [])

    return (
        <>
            <div className='row' >
                {Apidata && Apidata.map((ele, i) => {
                    return (
                        <>
                            <div className='col-lg-4 col-md-12 p-0'>
                                <div className={currentIndex === (i + 1) ? 'sam-block-hover active' : 'sam-block-hover'} onClick={() => onClick(i + 1)}>
                                    {ele.tittle}
                                </div>
                                {/* <div className={'sam-block-hover active'} onClick={() => onClick(i + 1)}>
                                    {ele.tittle}
                                </div> */}
                                <div className='sam-block-hover-block' dangerouslySetInnerHTML={{ __html: ele.description }}>

                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
}

export default SamAssersionsAbout;
