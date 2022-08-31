import React from "react";
import _ from "underscore";
import { useNavigate } from "react-router-dom";
import { getEmployeecapabilityselect } from "service/api";
import { Column, Row, Img, Text, Button, Stack, List,Input } from "components";

const EmployeeCapablityMappingPage = () => {
  const [apiData4, setapiData4] = React.useState();
  const [empname, setempdata] = React.useState({empName:'',flutter:'',react:'',video_scripting:'',blog_writing:'',podcast:'',live_webinar:''});
  const [data, setData] = React.useState([]);

  const navigate = useNavigate();
  React.useEffect(() => {
    callApi4();
  }, []);

  function callApi4() {
    const req = {};

    getEmployeecapabilityselect(req)
      .then((res) => {
        setapiData4(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate1(id) {
    navigate("/addcapability", { state: { id } });
  }
  function handleNavigate4() {
    navigate("/");
  }
  function handleNavigate7() {
    navigate("/employeelist");
  }  
  function handleChange(event,name) {
    const req = {};
    console.log("event",event.target.value)
    setempdata(event.target.value)
    getEmployeecapabilityselect(req)
      .then((res) => { 
        res=_.map(res,val=>{  
           console.log("emp res",res)
          if(name=='empName'&& val.Employee_name == event.target.value)
          {            
            
            return val
          }
         else if(name=='flutter'&&val.flutter == event.target.value)
          {                       
            return val
          }
          else  if(name=='react'&&val.react == event.target.value)
          {            
            
            return val
          }
          else  if(name=='video_scripting'&&val.video_scripting == event.target.value)
          {            
            
            return val
          }
          else  if(name=='blog_writing'&&val.blog_writing == event.target.value)
          {            
            
            return val
          }
           else if(name=='podcast'&&val.podcast == event.target.value)
          {            
            
            return val
          }
          else  if(name=='live_webinar'&&val.live_webinar == event.target.value)
          {            
            
            return val
          }
        })
      
       res=_.compact(res) 
        setData(res);
        console.log("emp res",res)
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center mx-[auto] lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] w-[100%]">
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
          <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-deep_purple_A200 w-[20%]">
            Capability Mapping
          </Text>
          <Button
            className="common-pointer font-normal lg:ml-[500px] xl:ml-[574px] 2xl:ml-[646px] 3xl:ml-[775px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            onClick={handleNavigate4}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            DashBoard
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
            onClick={handleNavigate7}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Employee List
          </Button>
          <Button
            className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[7%]"
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
        <Column className="bg-white_A700 font-inder lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius4 shadow-bs w-[98%]">
          <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
            Employee Capability list
          </Text>
          <Stack className="font-actor lg:h-[360px] xl:h-[411px] 2xl:h-[463px] 3xl:h-[555px] lg:mb-[194px] xl:mb-[222px] 2xl:mb-[250px] 3xl:mb-[300px] lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] outline outline-[1px] outline-gray_202 w-[98%]">
            <div className="absolute lg:h-[298px] xl:h-[341px] 2xl:h-[384px] 3xl:h-[460px] outline outline-[1px] outline-gray_202 top-[0] w-[100%]"></div>
            <Column className="absolute bg-white_A700 border-bw05 border-gray_202 border-solid w-[100%]">
              <List
                className="gap-[0] grid grid-cols-7 min-h-[auto] w-[88%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                <Input
                    className="bg-transparent border-0 font-normal not-italic lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                    wrapClassName="border border-gray_400 border-solid rounded-radius4 w-[90%]"
                    name="Group216"
                    placeholder="Select Name"
                    value={empname.empName}
                   onChange={(e)=>handleChange(e,'empName')}
                  />
                </Column>
                <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                <Input
                    className="bg-transparent border-0 font-normal not-italic lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                    wrapClassName="border border-gray_400 border-solid rounded-radius4 w-[90%]"
                    name="Group216"
                    placeholder="Select"
                     value={empname.flutter}
                   onChange={(e)=>handleChange(e,'flutter')}
                  ></Input>
                </Column>
                <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                <Input
                    className="bg-transparent border-0 font-normal not-italic lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                    wrapClassName="border border-gray_400 border-solid rounded-radius4 w-[90%]"
                    name="Group216"
                    placeholder="Select"
                    value={empname.react}
                    onChange={(e)=>handleChange(e,'react')}
                  ></Input>
                </Column>
                <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                <Input
                    className="bg-transparent border-0 font-normal not-italic lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                    wrapClassName="border border-gray_400 border-solid rounded-radius4 w-[90%]"
                    name="Group216"
                    placeholder="Select"
                    value={empname.video_scripting}
                    onChange={(e)=>handleChange(e,'video_scripting')}
                  ></Input>
                </Column>
                <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                <Input
                    className="bg-transparent border-0 font-normal not-italic lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                    wrapClassName="border border-gray_400 border-solid rounded-radius4 w-[90%]"
                    name="Group216"
                    placeholder="Select"
                    value={empname.blog_writing}
                    onChange={(e)=>handleChange(e,'blog_writing')}
                  ></Input>
                </Column>
                <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                <Input
                    className="bg-transparent border-0 font-normal not-italic lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                    wrapClassName="border border-gray_400 border-solid rounded-radius4 w-[90%]"
                    name="Group216"
                    placeholder="Select"
                    value={empname.podcast}
                    onChange={(e)=>handleChange(e,'podcast')}
                  ></Input>
                </Column>
                <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid items-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] w-[100%]">
                <Input
                    className="bg-transparent border-0 font-normal not-italic lg:px-[6px] xl:px-[7px] px-[8px] 3xl:px-[9px] py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                    wrapClassName="border border-gray_400 border-solid rounded-radius4 w-[90%]"
                    name="Group216"
                    placeholder="Select"
                    value={empname.live_webinar}
                    onChange={(e)=>handleChange(e,'live_webinar')}
                  ></Input>
                </Column>
              </List>
              <Row className="font-inter items-center justify-evenly w-[100%]">
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Employees name
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[5px] xl:pb-[5px] 2xl:pb-[13px] 3xl:pb-[15px] 2xl:pl-[10px] 3xl:pl-[12px] lg:pl-[7px] xl:pl-[8px] lg:pt-[5px] xl:pt-[5px] 2xl:pt-[16px] 3xl:pt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Tech. Strength Of Flutter
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[5px] xl:pb-[5px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[5px] xl:pt-[5px] 2xl:pt-[16px] 3xl:pt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Tech. Strength Of React
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Video Scripting
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Blog Writing
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px5] 3xl:pl-[26px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Podcast
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Live Webinar
                </Text>
                <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[170px]">
                  Action
                </Text>
              </Row>
              {(data).length>0 ? (
              <List
                className="font-inter gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                {data?.map((apiData4ResponseEle, index) => {
                  return (
                    <React.Fragment key={`apiData4ResponseEle${index}`}>
                      <Row className="items-center justify-evenly my-[0] w-[100%]">
                        <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[146px]">
                          {apiData4ResponseEle?.["Employee_name"]}
                        </Text>
                        <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                          <Button
                            className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[46%]"
                            shape="RoundedBorder4"
                            variant="OutlineRed700"
                          >
                            {apiData4ResponseEle?.flutter}
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                          <Button
                            className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[41%]"
                            shape="RoundedBorder4"
                            variant="OutlineLightgreenA700"
                          >
                            {apiData4ResponseEle?.react}
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                          <Button
                            className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[37%]"
                            shape="RoundedBorder4"
                          >
                            {apiData4ResponseEle?.["video_scripting"]}
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                          <Button
                            className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[40%]"
                            shape="RoundedBorder4"
                            variant="OutlineOrange800"
                          >
                            {apiData4ResponseEle?.["blog_writing"]}
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                          <Button
                            className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[46%]"
                            shape="RoundedBorder4"
                            variant="OutlineRed700"
                          >
                            {apiData4ResponseEle?.podcast}
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                          <Button
                            className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[41%]"
                            shape="RoundedBorder4"
                            variant="OutlineLightgreenA700"
                          >
                            {apiData4ResponseEle?.["live_webinar"]}
                          </Button>
                        </Column>
                        <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                          <Button
                            className="common-pointer font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[24%]"
                            onClick={handleNavigate1.bind(null,apiData4ResponseEle?.id)}
                            shape="RoundedBorder4"
                            variant="OutlineGray700"
                          >
                            Edit
                          </Button>
                        </Column>
                      </Row>
                    </React.Fragment>
                  );
                })}
              </List>):(
                     <List
                     className="font-inter gap-[0] min-h-[auto] w-[100%]"
                     orientation="vertical"
                   >
                     {apiData4?.map((apiData4ResponseEle, index) => {
                       return (
                         <React.Fragment key={`apiData4ResponseEle${index}`}>
                           <Row className="items-center justify-evenly my-[0] w-[100%]">
                             <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_901 tracking-ls1 w-[146px]">
                               {apiData4ResponseEle?.["Employee_name"]}
                             </Text>
                             <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                               <Button
                                 className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[46%]"
                                 shape="RoundedBorder4"
                                 variant="OutlineRed700"
                               >
                                 {apiData4ResponseEle?.flutter}
                               </Button>
                             </Column>
                             <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                               <Button
                                 className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[41%]"
                                 shape="RoundedBorder4"
                                 variant="OutlineLightgreenA700"
                               >
                                 {apiData4ResponseEle?.react}
                               </Button>
                             </Column>
                             <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                               <Button
                                 className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[37%]"
                                 shape="RoundedBorder4"
                               >
                                 {apiData4ResponseEle?.["video_scripting"]}
                               </Button>
                             </Column>
                             <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                               <Button
                                 className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[40%]"
                                 shape="RoundedBorder4"
                                 variant="OutlineOrange800"
                               >
                                 {apiData4ResponseEle?.["blog_writing"]}
                               </Button>
                             </Column>
                             <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                               <Button
                                 className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[46%]"
                                 shape="RoundedBorder4"
                                 variant="OutlineRed700"
                               >
                                 {apiData4ResponseEle?.podcast}
                               </Button>
                             </Column>
                             <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                               <Button
                                 className="font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[41%]"
                                 shape="RoundedBorder4"
                                 variant="OutlineLightgreenA700"
                               >
                                 {apiData4ResponseEle?.["live_webinar"]}
                               </Button>
                             </Column>
                             <Column className="bg-white_A700 border-bw05 border-gray_202 border-solid 2xl:p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px] w-[12%]">
                               <Button
                                 className="common-pointer font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[24%]"
                                 onClick={handleNavigate1.bind(null,apiData4ResponseEle?.id)}
                                 shape="RoundedBorder4"
                                 variant="OutlineGray700"
                               >
                                 Edit
                               </Button>
                             </Column>
                           </Row>
                         </React.Fragment>
                       );
                     })}
                   </List>
                )}
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default EmployeeCapablityMappingPage;
