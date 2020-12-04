import React from "react";

import useFetch from "../../Hooks/useFetch";
import { statsGet } from "../../Services/stats";

import Head from "../../Components/shared/Head";
import Error from "../../Components/shared/Error";
import Loading from "../../Components/shared/Loading";
const StatsGraphs = React.lazy(() => import("../../Components/StatsGraphs"));

function Stats() {
  const {data, error, loading, request} = useFetch();

  const getData = React.useCallback(async () => {
    const token = localStorage.getItem("token");
    const {url, options} = statsGet(token);

    await request(url, options);
  }, [request])


  React.useEffect(() => {
    getData();
  }, [])

  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <StatsGraphs data={data}/>
      </React.Suspense>
    );
  }

  return null
}

export default Stats;
