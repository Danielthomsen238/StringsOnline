import { useRouter } from "next/router";

const ReRoute = () => {
  const router = useRouter();
  router.push("/");
  return <></>;
};

export default ReRoute;
