import { AppRouter } from "../../server/router";
import { inferQueryOutput, trpc } from "../../utils/trpc";
import React from "react";
import NextError from "next/error";
import { UseQueryResult } from "react-query";

type Queries = keyof AppRouter["_def"]["queries"];

interface QueryCellProps {
  query: Queries;
  loading?: React.ReactNode;
  error?: React.ReactNode;
  refetchOnMount?: boolean;
  refetchOnWindowFocus?: boolean;
  enabled?: boolean;
  parameters: any;
  success: (data: any) => JSX.Element;
}

const QueryCellComponent = ({
  query,
  loading,
  error,
  success,
  refetchOnMount,
  refetchOnWindowFocus,
  enabled,
  parameters,
}: QueryCellProps): JSX.Element => {
  const {
    data,
    isLoading,
    error: errorData,
  } = trpc.useQuery([query, parameters], {
    refetchOnMount: refetchOnMount,
    refetchOnWindowFocus: refetchOnWindowFocus,
    enabled: enabled,
  });

  if (!success)
    return (
      <div className="text-red-600">{query} : Success prop is required</div>
    );

  if (!query) return <div className="text-red-600">Query prop is required</div>;

  if (isLoading) return <>{loading ? { loading } : <div>Loading...</div>}</>;
  if (errorData)
    return (
      <>
        {error ? (
          { error }
        ) : (
          <div className="text-red-600">{errorData.message}</div>
          //   <NextError
          //     title={errorData.message}
          //     statusCode={errorData.data?.httpStatus ?? 500}
          //   />
        )}
      </>
    );

  if (data) {
    return success(data);
  }

  return <></>;
};

QueryCellComponent.defaultProps = {
  enabled: true,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
} as QueryCellProps;

export default QueryCellComponent;
