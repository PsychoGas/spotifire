import SignIn from "@/components/signIn";
export default function Page() {
  const token = "";

  return (
    <div>
      <h1>SpotiFire</h1>
      <SignIn token={token} />
    </div>
  );
}
