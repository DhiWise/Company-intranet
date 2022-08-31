import React from "react";
import _ from "underscore";
import { useNavigate } from "react-router-dom";
import { postEmployeecapability, getEmployees } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Column, Row, Img, Text, Button, Stack, List } from "components";

const EmployeeListPage = () => {
  const [apiData5, setapiData5] = React.useState();
  const [apiData6, setapiData6] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi6();
  }, []);

  // function callApi5() {
  //   const req = { data: { Employee_name: "empname" } };
    
  //   postEmployeecapability(req)
  //     .then((res) => {
  //       setapiData5(res);

  //       toast.success("Employees synced successfully");
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       toast.error("Employees not synced");
  //     });
  // }


  function callApi5() {   
    const reqEmp={}
    getEmployees(reqEmp)
      .then((res) => {   
      const req =_.map(res,val =>{
          return {"Employee_name":val.first_name} 
        })  
        postEmployeecapability({data: _.flatten(req)})
        .then((res) => {
          setapiData5(res);
  
          toast.success("All Employee is Sync Sucessfully");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Employee List Not Synced...");
        });
      })
      .catch((err) => {
        console.error(err);
      });
 
  }
  function callApi6() {
    const req = {};

    getEmployees(req)
      .then((res) => {
        setapiData6(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function handleNavigate2() {
    navigate("/employeecapablitymapping");
  }
  function handleNavigate3() {
    navigate("/");
  } 

  return (
    <>
      <Column className="bg-gray_100 font-segoeui items-center justify-end mx-[auto] w-[100%]">
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
            onClick={handleNavigate3}
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            DashBoard
          </Button>
          <Button
            className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
            shape="RoundedBorder4"
            size="md"
            variant="OutlineGray200"
          >
            Employee List
          </Button>
          <Button
            className="common-pointer font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[6%]"
            onClick={handleNavigate2}
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
        <Column className="bg-white_A700 font-inter items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius4 shadow-bs w-[97%]">
          <Row className="items-center justify-between w-[99%]">
            <Text className="font-inder font-normal not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
              Employee list
            </Text>
            <Button
              className="common-pointer font-normal font-sourcesanspro not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[10%]"
              onClick={() => {
                callApi5();
              }}
              shape="RoundedBorder4"
              size="md"
              variant="FillBluegray900"
            >
              Sync All Employee
            </Button>
          </Row>
          <Row className="items-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[99%]">
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Name
            </Text>
            <Button
              className="font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center tracking-ls1 w-[19%]"
              size="lg"
              variant="OutlineGray202"
            >
              Surname
            </Button>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Designation
            </Text>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              official_email
            </Text>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Joining Date
            </Text>
            <Text className="bg-gray_50 border-bw05 border-gray_202 border-solid font-bold lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[209px]">
              Gender
            </Text>
          </Row>
          <List
            className="bg-white_A700 border-bw05 border-gray_202 border-solid gap-[0] lg:mb-[154px] xl:mb-[177px] 2xl:mb-[199px] 3xl:mb-[238px] min-h-[auto] lg:pb-[148px] xl:pb-[169px] 2xl:pb-[191px] 3xl:pb-[229px] w-[99%]"
            orientation="vertical"
          >
            {apiData6?.map((apiData6ResponseEle, index) => {
              return (
                <React.Fragment key={`apiData6ResponseEle${index}`}>
                  <Row className="items-center justify-evenly my-[0] w-[100%]">
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic 2xl:pb-[11px] 3xl:pb-[13px] lg:pb-[8px] xl:pb-[9px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[193px]">
                      {apiData6ResponseEle?.["first_name"]}
                    </Text>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[210px]">
                      {apiData6ResponseEle?.["last_name"]}
                    </Text>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pb-[10px] xl:pb-[11px] 2xl:pb-[13px] 3xl:pb-[15px] lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:pt-[12px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[197px]">
                      {apiData6ResponseEle?.designation}
                    </Text>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[193px]">
                      {apiData6ResponseEle?.["official_email"]}
                    </Text>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[195px]">
                      {apiData6ResponseEle?.["joining_date"]}
                    </Text>
                    <Text className="bg-white_A700 border-bw05 border-gray_202 border-solid font-normal not-italic lg:pl-[17px] xl:pl-[19px] 2xl:pl-[22px] 3xl:pl-[26px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_901 tracking-ls1 w-[195px]">
                      {apiData6ResponseEle?.gender}
                    </Text>
                  </Row>
                </React.Fragment>
              );
            })}
          </List>
        </Column>
      </Column>

      <ToastContainer />
    </>
  );
};

export default EmployeeListPage;
