import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect("auth-callback?origin=dashboard");

  return (await isAuthenticated()) ? (
    <div>{user?.given_name}</div>
  ) : (
    <div>This page is protected, please Login to view it</div>
  );
};

export default Page;
