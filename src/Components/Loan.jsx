import React from "react";
import "./Loan.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Horizontal from "./Horizontal";
import { ImRadioUnchecked } from "react-icons/im";
import Group from "./Group";
import Grph from "./Grph";
import Pchart from "./Pchart";



const Loan = () => {
  return (
    <div className="Container">
      <div className="Home">
        <div className="H">
          <div>
            <AiOutlineHome />
          </div>
          <div style={{ marginTop: "-1px", color: "gray" }}>Home</div>
        </div>
      </div>
      <div className="Loan">
        <div className="img">
          <div className="InnerImg">
            <div>
              <IoMdNotificationsOutline />
            </div>
            <div style={{ fontSize: "10px" }}>
              Rohit Dhatrak
              <br />
              <p>Admin</p>
            </div>
            <div>
              <img
                style={{ borderRadius: "50%", height: "30px" }}
                src="https://avatars.githubusercontent.com/u/101614481?v=4"
                alt=""
              />
            </div>
          </div>
        </div>
        <h5 style={{fontSizw:"20px"}}>Supplier Dashboard</h5>
        <div className="Grid">
          <div><div style={{color:"#4227B1",fontSize:"25px",fontWeight:"bolder"}}>10</div>
          <div style={{color:"gray"}}>Number Of Retailers</div></div>
          <div><div style={{color:"#4227B1",fontSize:"25px",fontWeight:"bolder"}}>1045K</div>
          <div style={{color:"gray"}}>Total Invoice Amount</div></div>
          <div><div style={{color:"#4227B1",fontSize:"25px",fontWeight:"bolder"}}>300K</div>
          <div style={{color:"gray"}}>Invoiced Amount Financed</div></div>
          <div><div style={{color:"#4227B1",fontSize:"25px",fontWeight:"bolder"}}>104.50K</div>
          <div style={{color:"gray"}}>Average Of Total invoiced Amount</div></div>
          <div><div style={{color:"#4227B1",fontSize:"25px",fontWeight:"bolder"}}>13.70</div>
          <div style={{color:"gray"}}>Avg Of MOM Disbural Growths%</div></div>
          <div><div style={{color:"#4227B1",fontSize:"25px",fontWeight:"bolder"}}>30.00</div>
          <div style={{color:"gray"}}>%Avg Retail Growth</div></div>
        </div>
        <div className="Main">
          <div className="A">
            <Horizontal />
          </div>
          <div className="B">
            <div className="C">
              <div style={{fontSize:"10px"}}>Total Invoice Amount By Transaction Completed at and Ading Bucket </div>
              <div className="Z">
                <div className="Z1">
                  <div>
                    <ImRadioUnchecked color="#A3C54C" />
                    <p style={{ fontSize: "10px" }}>Standard</p>
                  </div>
                  <div>
                    <ImRadioUnchecked color="orange" />
                    <p style={{ fontSize: "10px" }}>doubtful</p>
                  </div>
                  <div>
                    <ImRadioUnchecked color="blue" />
                    <p style={{ fontSize: "10px" }}>sub standard</p>
                  </div>
                  <div>
                    <ImRadioUnchecked color="red" />
                    <p style={{ fontSize: "10px" }}>loss</p>
                  </div>
                </div>
                <div className="Z2">
                  <select
                    name="cars"
                    id="cars"
                    style={{
                      width: "60%",
                      height: "20px",
                      borderRadius: "3px",
                      marginTop: "20px",
                    }}
                  >
                    <option value="volvo">Months</option>
                    <option value="saab">january</option>
                    <option value="opel">Feb</option>
                    <option value="audi">march</option>
                  </select>
                </div>
                
              </div>
              <div><Group/></div> 
            </div>
            <div className="D">
              <div className="P">
                <div>
                  <b style={{ fontSize: "12px", color: "grey" }}>
                    Total Invoice Amount By Region
                  </b>
                </div>
                <div className="Inner">
                  <div>
                    <ImRadioUnchecked color="#A3C54C" />
                    <p>West</p>
                  </div>
                  <div>
                    <ImRadioUnchecked color="orange" />
                    <p>South</p>
                  </div>
                  <div>
                    <ImRadioUnchecked color="blue" />
                    <p>North</p>
                  </div>
                  <div>
                    <ImRadioUnchecked color="red" />
                    <p>East</p>
                  </div>
                </div>
              </div>
              <div className="L"><Pchart/></div>
            </div>
          </div>
        </div>
        <div className="last">
          <div className="Q">
            <div style={{color:"gray",fontSize:"12px"}}>Change In Disbursed Amount by Month</div>
            <div ><Grph/></div>
          </div>
          <div className="Q"><div  style={{color:"gray",fontSize:"12px"}}>Change In Disbursed Amount by Month</div>
            <div ><Grph/></div></div>
          <div className="Q"><div  style={{color:"gray",fontSize:"12px"}}>Change In Disbursed Amount by Month</div>
            <div ><Grph/></div></div>
        </div>
      </div>
     
    </div>
  );
};

export default Loan;
