import _, { forEach } from "lodash"
import React from "react";

import { useNavigate } from "react-router-dom";
import {
  getEmployees,
  getTeams,
  getBranches,
} from "service/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Column, Row, Img, Text, Stack, Button, List, Line } from "components";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line as RechartsLine,
  ScatterChart,
  Scatter,
} from "recharts";
import { PieData, COLORS, LineData,ScatterData, BarData, BarData1 } from "./chartData.js";

const HomePagePage = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const [apiData2, setapiData2] = React.useState();
  const [apiData3, setapiData3] = React.useState();
  const [apiData4, setapiData4] = React.useState();
  const [apiData5, setapiData5] = React.useState();
  const [barDta, setbarDta] = React.useState();
  const [barDtaBranch, setbarDtaBranch] = React.useState();
  const [barDtaDesignation, setbarDtaDesignation] = React.useState();
  const [barDtaWorkmode, setbarDtaWorkmode] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi2();
    callApi4();
    callApi5();
    callApi();
  }, []);
  function callApi() {
    const req = {};
    getEmployees(req)
      .then((res) => {
        setapiData(res);
        var arrRes = _.groupBy(res, "employee_type")
        arrRes = _.map(Object.keys(arrRes), val => {         
          return { Work_Mode: val, Employees: arrRes[val].length }
        })       
        setbarDtaWorkmode(arrRes)
        localStorage.setItem("reschart", JSON.stringify(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi1() {
    const req = {};
   
    
    getEmployees(req)
      .then((res) => {
        setapiData1(res);
        var arrRes = _.groupBy(res, "team_id")

        arrRes = _.map(Object.keys(arrRes), val => {
         
          var data1 = val;         
          var team = JSON.parse(localStorage.getItem("resteam", JSON.stringify(res)));
          var teamName = _.map(team, (data) => {           
            if (data1 == data.id) {              
              return data.name;
            }
          })
          teamName = _.compact(teamName)          
          return { name: teamName[0], Employees: arrRes[val].length }
        })
        setbarDta(arrRes)
        localStorage.setItem("emplist", JSON.stringify(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi3(data) {
    const req = {};
    getEmployees(req)
      .then((res) => {
        setapiData3(res);
        var arrRes = _.groupBy(res, "branch_id")

        arrRes = _.map(Object.keys(arrRes), val => {

          var data1 = val;
          var team = JSON.parse(localStorage.getItem("resbranch", JSON.stringify(res)));
          var teamName = _.map(team, (data) => {            
            if (data1 == data.id) {              
              return data.name;
            }
          })
          teamName = _.compact(teamName)
          return { name: teamName[0], Employees: arrRes[val].length }
        })
        setbarDtaBranch(arrRes)
        localStorage.setItem("empteam", JSON.stringify(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi2() {
    const req = {};
    getTeams(req)
      .then((res) => {
        setapiData2(res);
        localStorage.setItem("resteam", JSON.stringify(res));
        callApi1(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("not");
      });
  }
  function callApi5(data) {
    const req = {};
    getEmployees(req)
      .then((res) => {
        setapiData5(res);
        var arrRes = _.groupBy(res, "designation")
        arrRes = _.map(Object.keys(arrRes), val => {
         return { Designation: val, Employees: arrRes[val].length }
        })
        setbarDtaDesignation(arrRes)        
        localStorage.setItem("empbranch", JSON.stringify(res));
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function callApi4() {
    const req = {};
    getBranches(req)
      .then((res) => {
        setapiData4(res);
        localStorage.setItem("resbranch", JSON.stringify(res));
        callApi3(res);
      })
      .catch((err) => {
        console.error(err);
        toast.error("not");
      });
  }
  function handleNavigate2() {
    navigate("/employeelist");
  }
  function handleNavigate3() {
    navigate("/employeecapablitymapping");
  }

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center mx-[auto] lg:pb-[14px] xl:pb-[16px] pb-[19px] 3xl:pb-[22px] w-[100%]">
        
      <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] w-[100%]">
          <Img
            src="images/img_image2.png"
            className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
            alt="imageTwo"
          />
          <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
            FrashTeam
          </Text>
        </Row>
        <Row className="bg-white_A700 border border-indigo_50 border-solid font-sourcesanspro items-center justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[98%]">
          <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-deep_purple_A200 w-[30%]">
            Employee List
          </Text>
          <Button
            className="common-pointer font-normal lg:ml-[541px] xl:ml-[500px] 2xl:ml-[696px] 3xl:ml-[835px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            DashBoard
          </Button>
          <Button
            className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
            onClick={handleNavigate2}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Employee List
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            onClick={handleNavigate3}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Capabilities
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="lgIcn"
            variant="icbFillBluegray900"
          >
            <Img
              src="images/img_plus.svg"
              className="flex items-center justify-center lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
              alt="plus"
            />
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="mdIcn"
            variant="icbOutlineGray201"
          >
            <Img
              src="images/img_vector.svg"
              className="flex items-center justify-center"
              alt="Vector"
            />
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="smIcn"
            variant="icbOutlineGray201"
          >
            <Img
              src="images/img_vector_gray_700.svg"
              className="flex items-center justify-center"
              alt="Vector One"
            />
          </Button>
          <Button
            className="flex lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[18px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] rounded-radius50 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
            size="lgIcn"
            variant="icbFillAmber100"
          >
            <Img
              src="images/img_volume.svg"
              className="flex items-center justify-center"
              alt="volume"
            />
          </Button>
        </Row>
        <List
          className="font-segoeui gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[93%]"
          orientation="vertical"
        >
          <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">

            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[209px] xl:mr-[239px] mr-[269px] 3xl:mr-[322px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Head Count By Designation
              </Text>
              <Row className="lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[99%]">

                <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                  <div className="common-pointer absolute lg:h-[197px] xl:h-[226px] h-[253px] 2xl:h-[254px] 3xl:h-[304px] items-center pl-[1px] top-[0] w-[100%]">
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie data={barDtaDesignation} dataKey="Employees" nameKey="Designation" label>
                          {PieData.map((_, index) => (
                            <Cell
                              key={"cell_" + index}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <RechartsLegend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                </Stack>
              </Row>

            </Column>
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[209px] xl:mr-[239px] mr-[269px] 3xl:mr-[322px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Headcount By Workmode
              </Text>
              <Row className="lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[99%]">
                <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                  <div className="common-pointer absolute lg:h-[197px] xl:h-[226px] h-[253px] 2xl:h-[254px] 3xl:h-[304px] min-h-[auto] pl-[1px] top-[0] w-[100%]">
                    <ResponsiveContainer>
                    <ScatterChart data={barDtaWorkmode}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="Work_Mode" />
                          <YAxis />
                          <RechartsTooltip />
                          <RechartsLegend />
                          <Scatter dataKey="Employees" fill="#006d92" shape="circle" />
                          
                        </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </Stack>
              </Row>
          
            </Column>
          </Row>
          <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[209px] xl:mr-[239px] mr-[269px] 3xl:mr-[322px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Head Count By Team
              </Text>
              <Row className="lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[99%]">
         
                <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                  <div className="absolute lg:h-[197px] xl:h-[226px] h-[253px] 2xl:h-[254px] 3xl:h-[304px] items-center pl-[1px] top-[0] w-[100%]">
                    <ResponsiveContainer>
                      <BarChart data={barDta}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <RechartsLegend />
                        <Bar dataKey="Employees" fill="#3f9a80" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                </Stack>
              </Row>
            
            </Column>
            <Column className="bg-white_A700 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius4 shadow-bs w-[49%]">
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mr-[209px] xl:mr-[239px] mr-[269px] 3xl:mr-[322px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                Head Count By Branch
              </Text>
              <Row className="lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[99%]">
              <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[95%]">
                  <div className="absolute lg:h-[197px] xl:h-[226px] h-[253px] 2xl:h-[254px] 3xl:h-[304px] items-center pl-[1px] top-[0] w-[100%]">
                    <ResponsiveContainer>
                      <BarChart data={barDtaBranch}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <RechartsLegend />
                        <Bar dataKey="Employees" fill="#de7c00" />

                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                </Stack>
              </Row>
            </Column>
          </Row>
        </List>
      </Column>
      <ToastContainer />
    </>
  );
};

export default HomePagePage;
