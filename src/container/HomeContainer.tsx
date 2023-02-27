import React, { useState } from "react";
import { Row, Col, Spin, Form } from "antd";
import CustomInput from "../components/common/CustomInput/CustomInput";
import CustomSelect from "../components/common/CustomSelect/CustomSelect";
import { searchOptions, USERS } from "../utlis/constants";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { debounce } from "lodash";
import SearchingData from "../services/SearchingData";
import CustomCard from "../components/common/CustomCard/CustomCard";
import { searchingFilterInitialValues } from "./homeContainerModel";
import { useSearchingFilter } from "./useSearchingFilter";
import { useFetch } from "../CustomHooks/useFetch";
import { createGithubSearchUrl } from "../utlis/sharedUtils";
const HomeContainer = () => {
  const [inputRef] = useForm();
  const { searchingData, setSearchingTerms } = useSearchingFilter(searchingFilterInitialValues);
  const { fetchDataWithParams, isLoading } = useFetch();
  const [userOrRepo, setUserOrRepo] = useState<string>(USERS);
  const [searchResult, setSearchResult] = useState<any>([]);
  const onChangeSearchType = (data: any) => {
    setUserOrRepo(data);
    setSearchResult([]);
    inputRef?.setFieldsValue({
      search: "",
    });
  };
  const onChangeUserInput = debounce(async (e: any) => {
    const { value }: string | any = e.target;
    let searchingTerms: any = searchingData;
    if (value.length >= 3) {
      searchingTerms.q = e.target.value;
    } else {
      return;
    }
    setSearchingTerms(searchingTerms);
    await searchGithubData(searchingTerms);
  }, 1000);
  const searchGithubData = async (searchingFilters: any) => {
    const url = createGithubSearchUrl(userOrRepo);
    const getGithubUsers = await fetchDataWithParams(url, searchingFilters);
    setSearchResult(getGithubUsers.items);
  };
  return (
    <Spin spinning={isLoading}>
      <Form name={"home"} initialValues={{ remember: true }} form={inputRef}>
        <Row justify={"center"} gutter={16}>
          <Col span={5}>
            <FormItem name={"search"} required={true}>
              <CustomInput label={"Search"} onChange={onChangeUserInput} />
            </FormItem>
          </Col>
          <Col span={3}>
            <FormItem name={"type"}>
              <CustomSelect
                label={"Type"}
                selectOptions={searchOptions}
                onChange={onChangeSearchType}
                selected={userOrRepo}
              />
            </FormItem>
          </Col>
        </Row>
      </Form>
      <Row justify={"center"} gutter={[16, 16]}>
        {searchResult?.map((result: any) => (
          <Col span={5}>
            <CustomCard result={result} type={userOrRepo} />
          </Col>
        ))}
      </Row>
    </Spin>
  );
};

export default HomeContainer;
