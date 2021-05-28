const query = `
query objktInfo($objkt: bigint!) {
  hic_et_nunc_token_by_pk(id: $objkt) {
    id
    creator_id
    artifact_uri
    mime
    description
    royalties
    supply
    title
  }
}
`;

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://api.hicdex.com/v1/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  );

  return await result.json();
}

async function doFetch(objkt) {
    console.log(['fetching',objkt,this])
  const { errors, data } = await fetchGraphQL(query, "objktInfo", {"objkt":objkt});
  if (errors) {
    console.error(errors);
  }
  const result = data.hic_et_nunc_token_by_pk
  console.log({ result })
  // assign values here
  return result
}