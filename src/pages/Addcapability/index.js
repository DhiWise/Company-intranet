import React from "react";

import { useNavigate,useLocation } from "react-router-dom";
import { getEmployeecapabilityideq5,patchEmployeecapabilityideq5 } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useForm from "hooks/useForm";
import { Column, Row, Img, Text, Button, Line, Input } from "components";

const AddcapabilityPage = () => {
  const [apiData3, setapiData3] = React.useState();
  const [apiData, setapiData] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    callApi();
  }, []);
  const form = useForm({
    flutter: "",
    react: "",
    video_scripting: "",
    podcast: "",
    blog_writing: "",
    live_webinar: "",
  });
  const navigate = useNavigate();
  function callApi3(data) {
    //const req = { data: { ...data } };
    const req = { params: { id: apiData?.[0]?.id }, data: { ...data } };
    patchEmployeecapabilityideq5(req)
      .then((res) => {
        setapiData3(res);

        navigate("/employeecapablitymapping");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Not Added capability");
      });
  }
  function callApi() {
   // const req = {};
    const req = { params: { id: location?.state?.id } };    
    getEmployeecapabilityideq5(req)
      .then((res) => {       
        setapiData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate5() {
    navigate("/employeelist");
  }
  function handleNavigate6() {
    navigate("/employeecapablitymapping");
  }

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center mx-[auto] lg:pb-[12px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] w-[100%]">
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
            Add Capability
          </Text>
          <Button
            className="font-normal lg:ml-[537px] xl:ml-[614px] 2xl:ml-[691px] 3xl:ml-[829px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            DashBoard
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[13%]"
            onClick={handleNavigate5}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Employee List
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[7%]"
            onClick={handleNavigate6}
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
        <Column className="bg-white_A700 font-actor items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius4 shadow-bs w-[95%]">
          <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
            Add Capability
          </Text>
          <Line className="bg-gray_300 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[84%]" />
          <Row className="justify-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[20%]">
            <Text className="font-normal mb-[2px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              Name:
            </Text>
            <Text className="font-normal lg:ml-[17px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] mt-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
            {apiData?.[0]?.Employee_name}
        
             </Text>
          </Row>
          <Row className="items-center 3xl:mt-[100px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] w-[87%]">
            <Column className="w-[60%]">
              <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Technical Knowledge of Flutter
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[65%] xl:mt-[7px]"
                onChange={(e) => {
                  form.handleChange("flutter", e.target.value);
                }}
                value={form?.values?.flutter}
                name="Group216"
                placeholder="Technical Knowledge of Flutter"
              ></Input>
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Video Scripting
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[65%] xl:mt-[7px]"
                onChange={(e) => {
                  form.handleChange("video_scripting", e.target.value);
                }}
                value={form?.values?.["video_scripting"]}
                name="Group216 One"
                placeholder="Video Scripting"
              ></Input>
              <Text className="font-normal lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Live Webinar
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[65%] xl:mt-[9px]"
                onChange={(e) => {
                  form.handleChange("live_webinar", e.target.value);
                }}
                value={form?.values?.["live_webinar"]}
                name="Group216 Two"
                placeholder="Live Webinar"
                size="sm"
              ></Input>
            </Column>
            <Column className="w-[40%]">
              <Text className="font-normal ml-[2px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Technical Knowledge of React
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] ml-[2px] w-[99%] xl:mt-[7px]"
                onChange={(e) => {
                  form.handleChange("react", e.target.value);
                }}
                value={form?.values?.react}
                name="Group216 Three"
                placeholder="Technical Knowledge of React"
              ></Input>
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Blog Writing
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] lg:mt-[6px] w-[99%] xl:mt-[7px]"
                onChange={(e) => {
                  form.handleChange("blog_writing", e.target.value);
                }}
                value={form?.values?.["blog_writing"]}
                name="Group216 Four"
                placeholder="Blog Writing"
              ></Input>
              <Text className="font-normal ml-[3px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_500 w-[auto]">
                Podcast
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_301 text-gray_301 w-[100%]"
                wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] ml-[3px] w-[99%] xl:mt-[9px]"
                onChange={(e) => {
                  form.handleChange("podcast", e.target.value);
                }}
                value={form?.values?.podcast}
                name="Group216 Five"
                placeholder="Podcast"
                size="sm"
              ></Input>
            </Column>
          </Row>
          <Line className="bg-gray_300 h-[1px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[37%]" />
          <Row className="font-sourcesanspro items-center justify-center lg:mb-[165px] xl:mb-[189px] 2xl:mb-[213px] 3xl:mb-[255px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[12%]">
            <Button
              className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[47%]"
              shape="RoundedBorder4"
              size="md"
              variant="OutlineBluegray900"
            >
              Cancel
            </Button>
            <Button
              className="common-pointer font-normal lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[39%]"
              onClick={() => {
                form.handleSubmit(callApi3);
              }}
              shape="RoundedBorder4"
              size="md"
              variant="FillBluegray900"
            >
              Save
            </Button>
          </Row>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default AddcapabilityPage;
